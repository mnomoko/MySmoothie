import React, { Component } from 'react';
import {Card, Container, Row} from "react-bootstrap/es";
import CardComponent from "../commons/modulable/card/card.component";
import SmoothieComponent from "./smoothie.component";
import SMOOTHIES from '../commons/data/smoothies';

const AFFICHER_LA_RECETTE = 'Afficher la recette';

class SmoothiesComponent extends Component {

    constructor(props, context) {
        super(props, context);

        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);

        this.state = {
            show: false,
            selectedSmoothie: undefined
        };
    }

    handleClose() {
        this.setState({ show: false, selectedSmoothie: undefined });
    }

    handleShow(smoothie) {
        this.setState({ show: true, selectedSmoothie: smoothie });
    }

    render() {
        return(
            <div style={{margin: 10}}>
                <Card id="collapsible-panel-example-2">
                    <Card.Body>
                        <Container>
                            <Row>
                                {SMOOTHIES && SMOOTHIES.map(smoothie =>
                                    <CardComponent title={smoothie.name} description={smoothie.description} buttonTitle={AFFICHER_LA_RECETTE} click={() => this.handleShow(smoothie)}/>
                                )}
                            </Row>
                        </Container>
                    </Card.Body>
                </Card>
                <SmoothieComponent show={this.state.show} smoothie={this.state.selectedSmoothie} onhide={this.handleClose}/>
            </div>
        )
    }

}

export default SmoothiesComponent;