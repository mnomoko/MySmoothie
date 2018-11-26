import React, { Component } from 'react';
import {Button, ButtonGroup, Col, Form, Row} from "react-bootstrap";
import SelectorComponent from "../commons/modulable/selector/selector.component";
import '../../index.css';
import FRUITS from './../commons/fruits';
import JUICES from './../commons/juices';

class CreationComponent extends Component {

    constructor (props) {
        super(props);

        this.state = {
            typeSelected: [],
            numberSelected: 2,
            numberPersSelected: 2,
            selectedJuice: undefined,
            selectedSmoothieArray: [],
            selectedSmoothiesOptionsArray: [],
            options: [...JUICES.map(opt => ({ label: opt.name, value: opt }))]
        };

        this.onCheckboxNumberClick = this.onCheckboxNumberClick.bind(this);
        this.onCheckboxNumberPersClick = this.onCheckboxNumberPersClick.bind(this);
        this.onCheckboxTypeClick = this.onCheckboxTypeClick.bind(this);

        let selectedSmoothieArray = [];
        for(let i = 0; i < this.state.numberSelected; i++) {
            let array = [...FRUITS.map(opt => ({ label: opt.name, value: opt }))];
            selectedSmoothieArray[i] = array[i];
        }
        this.state.selectedSmoothieArray = selectedSmoothieArray;
        this.state.selectedSmoothiesOptionsArray = [...FRUITS.map(opt => ({ label: opt.name, value: opt }))];
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
    }

    onSelectionSmoothie(index, option) {
        let selectedSmoothieArray = this.state.selectedSmoothieArray;
        selectedSmoothieArray[index] = option;
        this.setState(selectedSmoothieArray);
    };

    onSelectionJuice(index ,option) {
        this.setState({selectedJuice: option});
    };

    generateSmoothie() {
        let { selectedJuice, selectedSmoothieArray } = this.state;
        let fruit = selectedSmoothieArray[0];

        let preparation = selectedSmoothieArray.map(e => e.value.preparation + ' ');

        console.log('fruit : ' + fruit);
        console.log('selectedJuice : ' + selectedJuice);
        console.log('preparation : ' + preparation);
    }

    render() {
        let { options, selectedSmoothieArray, selectedSmoothiesOptionsArray } = this.state;
        return(
            <div className="container">
                <Form>
                    <Row>
                        <Col sm={12} md={6}>
                            <div>
                                <h5>Type de smoothie</h5>
                                <ButtonGroup>
                                    <Button color="primary" onClick={() => this.onCheckboxTypeClick(1)} active={this.state.typeSelected.includes(1)}>Acidulé</Button>
                                    <Button color="primary" onClick={() => this.onCheckboxTypeClick(2)} active={this.state.typeSelected.includes(2)}>Amère</Button>
                                    <Button color="primary" onClick={() => this.onCheckboxTypeClick(3)} active={this.state.typeSelected.includes(3)}>Sucré</Button>
                                    <Button color="primary" onClick={() => this.onCheckboxTypeClick(4)} active={this.state.typeSelected.includes(4)}>Salé</Button>
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
                        <SelectorComponent key={index} cle={index} titre={'Selectionner un fruit'} selected={selectedSmoothieArray[index]} options={selectedSmoothiesOptionsArray} selectionChange={this.onSelectionSmoothie.bind(this)} isJsonObject={true}/>
                    )}
                    </Row>
                    <Row>
                        <SelectorComponent key={'juice'} cle={'juice'} titre={'Selectionner un jus de fruit'} options={options} selectionChange={this.onSelectionJuice.bind(this)} isJsonObject={true}/>
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
                            <Button color="secondary" size="lg" onClick={() => this.generateSmoothie()} block>Générer le smoothie</Button>
                        </Col>
                    </Row>
                </Form>
            </div>
        )
    }

}

export default CreationComponent;