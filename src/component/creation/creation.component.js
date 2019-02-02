import React, { Component } from 'react';
import {Button, ButtonGroup, Col, Form, Row} from "react-bootstrap";
import SelectorComponent from "../commons/modulable/selector/selector.component";
import '../../index.css';
import FRUITS from './../commons/fruits';
import JUICES from './../commons/juices';

class CreationComponent extends Component {

    constructor (props) {
        super(props);

        let juiceArray = this.reformatObjectsToArrays(JUICES);
        let array = this.reformatObjectsToArrays(FRUITS);

        this.state = {
            typeSelected: [],
            numberSelected: 2,
            numberPersSelected: 2,
            selectedJuice: undefined,
            selectedSmoothieArray: [],
            selectedSmoothiesOptionsArray: array,
            options: juiceArray
        };

        this.onCheckboxNumberClick = this.onCheckboxNumberClick.bind(this);
        this.onCheckboxNumberPersClick = this.onCheckboxNumberPersClick.bind(this);
        this.onCheckboxTypeClick = this.onCheckboxTypeClick.bind(this);
    }

    reformatObjectsToArrays(obj) {
        return [...Object.entries(obj).map(opt => ({ label: opt[1].name, value: opt[1] }))];
    }

    initSmoothieArray(filtered) {
        filtered = filtered.length > 0 ? filtered : this.reformatObjectsToArrays(FRUITS);
        this.setState({selectedSmoothiesOptionsArray: filtered});
    }

    onCheckboxNumberClick(numberSelected) {
        this.setState({ numberSelected });
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
        let { typeSelected } = this.state;
        let array = this.reformatObjectsToArrays(FRUITS);
        let filtered = array.filter(e => e.value.gout.some(g => typeSelected.indexOf(g) >= 0));
        this.initSmoothieArray(filtered);
    }

    generateSmoothie() {
        let { selectedJuice, selectedSmoothieArray } = this.state;

        let fruits = selectedSmoothieArray.map(e => e.value.name + ' ');
        let preparation = selectedSmoothieArray.map(e => e.value.preparation + ' ');

        console.log('fruit : ' + fruits);
        console.log('selectedJuice : ' + selectedJuice.value.name);
        console.log('preparation : ' + preparation);
    }

    isGenerateButtonDisable() {
        const { selectedJuice, selectedSmoothieArray } = this.state;
        return !selectedJuice || !selectedSmoothieArray || !selectedSmoothieArray.every(e => e !== null);
    }

    render() {
        let { options, selectedSmoothiesOptionsArray } = this.state;
        return(
            <div className="container">
                <Form>
                    <Row>
                        <Col sm={12} md={6}>
                            <div>
                                <h5>Type de smoothie</h5>
                                <ButtonGroup>
                                    <Button color="primary" onClick={() => this.onCheckboxTypeClick('acide')} active={this.state.typeSelected.includes('acide')}>Acidulé</Button>
                                    <Button color="primary" onClick={() => this.onCheckboxTypeClick('amer')} active={this.state.typeSelected.includes('amer')}>Amère</Button>
                                    <Button color="primary" onClick={() => this.onCheckboxTypeClick('sucre')} active={this.state.typeSelected.includes('sucre')}>Sucré</Button>
                                    <Button color="primary" onClick={() => this.onCheckboxTypeClick('sale')} active={this.state.typeSelected.includes('sale')}>Salé</Button>
                                </ButtonGroup>
                            </div>
                        </Col>
                        <Col sm={12} md={6}>
                            <div>
                                <h5>Nombres de fruits</h5>
                                <ButtonGroup>
                                    <Button color="primary" onClick={() => this.onCheckboxNumberClick(1)} active={this.state.numberSelected === 1}>1 fruit</Button>
                                    <Button color="primary" onClick={() => this.onCheckboxNumberClick(2)} active={this.state.numberSelected === 2}>2 fruits</Button>
                                    <Button color="primary" onClick={() => this.onCheckboxNumberClick(3)} active={this.state.numberSelected === 3}>3 fruits</Button>
                                    <Button color="primary" onClick={() => this.onCheckboxNumberClick(4)} active={this.state.numberSelected === 4}>4 fruits</Button>
                                    <Button color="primary" onClick={() => this.onCheckboxNumberClick(5)} active={this.state.numberSelected === 5}>5 fruits</Button>
                                </ButtonGroup>
                            </div>
                        </Col>
                    </Row>

                    <Row>
                    {this.state.numberSelected && [...Array(this.state.numberSelected)].map((i, index) =>
                        <SelectorComponent key={index} cle={index} titre={'Selectionner un fruit'}
                                           options={selectedSmoothiesOptionsArray} clearListOnUpdate={true}
                                           selectionChange={this.onSelectionSmoothie.bind(this)}
                                           isClearable={false}/>
                    )}
                    </Row>
                    <Row>
                        <SelectorComponent key={'juice'} cle={'juice'} titre={'Selectionner un jus de fruit'}
                                           options={options} clearListOnUpdate={true}
                                           selectionChange={this.onSelectionJuice.bind(this)}
                                           isClearable={false}/>
                        <Col sm={12} md={6}>
                            <div>
                                <h5>Nombres de personnes</h5>
                                <ButtonGroup>
                                    <Button color="primary" onClick={() => this.onCheckboxNumberPersClick(1)} active={this.state.numberPersSelected === 1}>1 personne</Button>
                                    <Button color="primary" onClick={() => this.onCheckboxNumberPersClick(2)} active={this.state.numberPersSelected === 2}>2 personnes</Button>
                                </ButtonGroup>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={10} smOffset={1} md={6} mdOffset={3}>
                            <Button color="secondary" size="lg" onClick={() => this.generateSmoothie()} disabled={this.isGenerateButtonDisable()} block>Générer le smoothie</Button>
                        </Col>
                    </Row>
                </Form>
            </div>
        )
    }

}

export default CreationComponent;