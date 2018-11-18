import React, { Component } from 'react';
import {Button, ButtonGroup, Col, Form, Row} from "react-bootstrap";
import SelectorComponent from "../commons/modulable/selector/selector.component";
import '../../index.css';
const fruits = require('../commons/fruits');

class CreationComponent extends Component {

    constructor (props) {
        super(props);

        this.state = { typeSelected: [], numberSelected: 2, numberPersSelected: 2 };

        this.onCheckboxNumberClick = this.onCheckboxNumberClick.bind(this);
        this.onCheckboxNumberPersClick = this.onCheckboxNumberPersClick.bind(this);
        this.onCheckboxTypeClick = this.onCheckboxTypeClick.bind(this);
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

    generateSmoothie() {

    }

    render() {
        let options = [{id: 1, text: 'option 1'}, {id: 2, text: 'option 2'}, {id: 3, text: 'option 3'}];
        options = fruits;
        return(
            <div className="container">
                <Form>
                    <Row form>
                        <Col sm={12} md={6}>
                            <div>
                                <h5>Type de smoothie</h5>
                                <ButtonGroup>
                                    <Button color="primary" onClick={() => this.onCheckboxTypeClick(1)} active={this.state.typeSelected.includes(1)}>Acidulé</Button>
                                    <Button color="primary" onClick={() => this.onCheckboxTypeClick(2)} active={this.state.typeSelected.includes(2)}>Amère</Button>
                                    <Button color="primary" onClick={() => this.onCheckboxTypeClick(3)} active={this.state.typeSelected.includes(3)}>Sucré</Button>
                                    <Button color="primary" onClick={() => this.onCheckboxTypeClick(4)} active={this.state.typeSelected.includes(4)}>Salé</Button>
                                </ButtonGroup>
                                <p>Selected: {JSON.stringify(this.state.typeSelected)}</p>
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

                    <Row form>
                    {this.state.numberSelected && [...Array(this.state.numberSelected)].map((x, i) =>
                        <SelectorComponent titre={'Selectionner un fruit'} options={options} isJsonObject={true}/>
                    )}
                    </Row>
                    <Row form>
                        <SelectorComponent titre={'Selectionner un jus de fruit'} options={options} isJsonObject={true}/>
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
                    <Row form>
                        <Col sm={12} md={6} mdOffset={3} componentClass="bottom-button">
                            <Button color="secondary" size="lg" onClick={this.generateSmoothie} block>Générer le smoothie</Button>
                        </Col>
                    </Row>
                </Form>
            </div>
        )
    }

}

export default CreationComponent;