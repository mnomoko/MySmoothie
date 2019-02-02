import React, { Component } from 'react';
import {Grid, Panel, Row} from "react-bootstrap";
import CardComponent from "../commons/modulable/card.component";
import SmoothieComponent from "./smoothie.component";
import SMOOTHIES from '../commons/smoothies';

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
                <Panel id="collapsible-panel-example-2">
                    <Panel.Body>
                        <Grid>
                            <Row>
                                {SMOOTHIES && SMOOTHIES.map(smoothie =>
                                    <CardComponent title={smoothie.name} description={smoothie.description} buttonTitle={AFFICHER_LA_RECETTE} click={() => this.handleShow(smoothie)}/>
                                )}
                            </Row>
                        </Grid>
                    </Panel.Body>
                </Panel>
                <SmoothieComponent show={this.state.show} smoothie={this.state.selectedSmoothie} onhide={this.handleClose}/>
            </div>
        )
    }

}

export default SmoothiesComponent;