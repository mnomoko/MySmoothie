import React, { Component } from 'react';
import SelectorComponent from "../commons/modulable/selector/selector.component";
import '../../index.css';
import { JUICES, Juice } from './../commons/data/juices';
import RadioComponent from "../commons/modulable/radio/radio.component";
import Smoothie from "../commons/model/smoothie";
import SmoothieComponent from "../smoothie/smoothie.component";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import FruitService from "../commons/service/fruit.service";
import SmoothieService from "../commons/service/smoothie.service";

class CreationComponent extends Component {

    constructor (props) {
        super(props);

        let juiceArray = this.reformatObjectsToArrays(JUICES);
        let array = [];

        this.state = {
            selectedSmoothie: null,
            show: false,
            isReady: false,
            typeSelected: [],
            numberSelected: 2,
            numberPersSelected: 2,
            selectedJuice: undefined,
            selectedSmoothieArray: [],
            selectedSmoothiesOptionsArray: array,
            options: juiceArray,
            smoothieName: "",
            smoothieDescription: ""
        };

        this.getFruits().then(async (fruits) => {
            this.setState({ fruits: fruits, isReady: true });
            array = await this.reformatObjectsToArrays(fruits);
            this.setState({ selectedSmoothiesOptionsArray : array })
        });

        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }

    reformatObjectsToArrays(obj) {
        return [...Object.entries(obj).map(opt => ({ label: opt[1].name, value: opt[1] }))];
    }

    initSmoothieArray(filtered) {
        const { fruits } = this.state;
        filtered = filtered.length > 0 ? filtered : this.reformatObjectsToArrays(fruits);
        this.setState({selectedSmoothiesOptionsArray: filtered});
    }

    onCheckboxNumberClick(numberSelected) {
        this.setState({ numberSelected });

        if(this.state.selectedSmoothieArray.length > numberSelected) {
            let arrayCopy = this.state.selectedSmoothieArray.slice(0, numberSelected);
            this.setState({selectedSmoothieArray: arrayCopy});
        }
    }

    onCheckboxNumberPersClick(numberPersSelected) {
        this.setState({ numberPersSelected });
    }

    onCheckboxTypeClick(selected) {
        const index = this.state.typeSelected.indexOf(selected);
        if (index < 0) {
            this.state.typeSelected.push(selected);
        } else {
            this.state.typeSelected.splice(index, 1);
        }
        this.setState({ typeSelected: [...this.state.typeSelected] });
        this.changeTypeSmoothie();
    }

    onSelectionSmoothie(index, option) {
        let selectedSmoothieArray = this.state.selectedSmoothieArray;
        selectedSmoothieArray[index] = option;
        this.setState(selectedSmoothieArray);
    };

    onSelectionJuice(index ,option) {
        this.setState({selectedJuice: option});
    };

    changeTypeSmoothie() {
        let { typeSelected, fruits } = this.state;
        let array = this.reformatObjectsToArrays(fruits);
        let filtered = array.filter(e => e.value.gout.some(g => typeSelected.indexOf(g) >= 0));
        this.initSmoothieArray(filtered);
    }

    getFruits() {
        return new Promise(async (resolve, reject) => {
            const fruits = await FruitService.getFruits();
            return resolve(fruits);
        });
    }

    getFruitById(id) {
        const { fruits } = this.state;
        let fruit = this.getEnumById(fruits, id);
        return fruits[fruit[0]];
    }

    getJuiceByCode(code) {
        return new Juice().getByCode(code);
    }

    getEnumById(array, id) {
        return Object.entries(array).find(opt => opt[1].id === id);
    }

    generateSmoothie() {
        let { selectedJuice, selectedSmoothieArray, smoothieName, smoothieDescription } = this.state;

        let name = smoothieName;
        let description = smoothieDescription;
        let fruits = [];
        selectedSmoothieArray.forEach(e => {
            let fruit = this.getFruitById(e.value.id);
            fruits.push(fruit);
        });
        let jus = this.getJuiceByCode(selectedJuice.value.code);

        let smoothie = new Smoothie(name, fruits, jus, description);

        SmoothieService.createSmoothie(smoothie).then(() => {
            this.setState({selectedSmoothie: smoothie}, () => {
                this.handleShow(smoothie);
            });
        });
    }

    handleClose() {
        this.setState({ show: false, selectedSmoothie: undefined });
    }

    handleShow(smoothie) {
        this.setState({ show: true, selectedSmoothie: smoothie });
    }

    isGenerateButtonDisable() {
        const { selectedJuice, selectedSmoothieArray, smoothieName, smoothieDescription, numberSelected } = this.state;
        return !smoothieName || !smoothieDescription || !selectedJuice || !selectedSmoothieArray || !selectedSmoothieArray.length || selectedSmoothieArray.length !== numberSelected;
    }

    onChangeName(e) {
        let value = e.target.value;
        this.setState({ smoothieName: value });
    }

    onChangeDescription(e) {
        let value = e.target.value;
        this.setState({ smoothieDescription: value });
    }

    render() {
        let { options, selectedSmoothiesOptionsArray, isReady } = this.state;
        if(isReady) {
            return (
                <div className="container">
                    <Form>
                        <div style={{marginTop: 20}}>
                            <Form.Group as={Row} controlId="formPlaintextEmail">
                                <Form.Label column sm="3" md="3">
                                    <h5><b>Nom du smoothie</b></h5>
                                </Form.Label>
                                <Col sm="9" md="9">
                                    <Form.Control name="smoothieName" type="text" placeholder="Mon smoothie.."
                                                  value={this.state.smoothieName}
                                                  onChange={this.onChangeName.bind(this)}/>
                                </Col>
                            </Form.Group>
                        </div>
                        <Row style={{marginTop: 10}}>
                            <Col sm={12} md={6}>
                                <div>
                                    <h5><b>Type de fruit</b></h5>
                                    <ButtonGroup>
                                        <Button color="primary" onClick={() => this.onCheckboxTypeClick('acide')}
                                                active={this.state.typeSelected.includes('acide')}>Acidulé</Button>
                                        <Button color="primary" onClick={() => this.onCheckboxTypeClick('amer')}
                                                active={this.state.typeSelected.includes('amer')}>Amère</Button>
                                        <Button color="primary" onClick={() => this.onCheckboxTypeClick('sucre')}
                                                active={this.state.typeSelected.includes('sucre')}>Sucré</Button>
                                        <Button color="primary" onClick={() => this.onCheckboxTypeClick('sale')}
                                                active={this.state.typeSelected.includes('sale')}>Salé</Button>
                                    </ButtonGroup>
                                </div>
                            </Col>
                            <RadioComponent title={'Nombre de personnes'} titleLeft={'1 personne'}
                                            titleRight={'2 personnes'} valueLeft={1} valueRight={2}
                                            defaultValue={this.state.numberPersSelected}
                                            onclick={this.onCheckboxNumberPersClick.bind(this)}/>
                        </Row>
                        <Row style={{marginTop: 15}}>
                            <Col sm={12} md={12}>
                                <Form.Group controlId="exampleForm">
                                    <Form.Label><h5><b>Description</b></h5></Form.Label>
                                    <Form.Control style={{resize: 'none'}} name="smoothieDescription" as="textarea"
                                                  rows="3" value={this.state.smoothieDescription}
                                                  onChange={this.onChangeDescription.bind(this)}/>
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row style={{marginTop: 10}}>
                            <SelectorComponent key={'juice'} cle={'juice'} titre={'Selectionner un jus de fruit'}
                                               options={options} clearListOnUpdate={true}
                                               selectionChange={this.onSelectionJuice.bind(this)}
                                               isClearable={false}/>

                            <Col sm={12} md={6}>
                                <div>
                                    <h5><b>Nombres de fruits</b></h5>
                                    <ButtonGroup>
                                        <Button color="primary" onClick={() => this.onCheckboxNumberClick(1)}
                                                active={this.state.numberSelected === 1}>1 fruit</Button>
                                        <Button color="primary" onClick={() => this.onCheckboxNumberClick(2)}
                                                active={this.state.numberSelected === 2}>2 fruits</Button>
                                        <Button color="primary" onClick={() => this.onCheckboxNumberClick(3)}
                                                active={this.state.numberSelected === 3}>3 fruits</Button>
                                        <Button color="primary" onClick={() => this.onCheckboxNumberClick(4)}
                                                active={this.state.numberSelected === 4}>4 fruits</Button>
                                        <Button color="primary" onClick={() => this.onCheckboxNumberClick(5)}
                                                active={this.state.numberSelected === 5}>5 fruits</Button>
                                    </ButtonGroup>
                                </div>
                            </Col>
                        </Row>
                        <Row style={{marginTop: 20}}>
                            {this.state.numberSelected && [...Array(this.state.numberSelected)].map((i, index) =>
                                <SelectorComponent key={index} cle={index} titre={'Selectionner un fruit'}
                                                   options={selectedSmoothiesOptionsArray} clearListOnUpdate={true}
                                                   selectionChange={this.onSelectionSmoothie.bind(this)}
                                                   isClearable={false}/>
                            )}
                        </Row>
                        <Row style={{marginTop: 20, marginBottom: 10}}>
                            <Col sm={12} md={12}>
                                <Button color="secondary" size="lg" onClick={() => this.generateSmoothie()}
                                        disabled={this.isGenerateButtonDisable()} block>Générer le smoothie</Button>
                            </Col>
                        </Row>
                    </Form>
                    <SmoothieComponent show={this.state.show} smoothie={this.state.selectedSmoothie}
                                       onhide={this.handleClose}/>
                </div>
            )
        }
        else
            return null;
    }

}

export default CreationComponent;