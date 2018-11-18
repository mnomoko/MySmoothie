import React, { Component } from 'react';
import {Grid, Panel, Row} from "react-bootstrap";
import CardComponent from "../commons/modulable/card.component";
import SmoothieComponent from "./smoothie.component";
const smoothies = require('../commons/smoothies');

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
                <Panel id="collapsible-panel-example-2" defaultExpanded>
                    <Panel.Heading>
                        <Panel.Title toggle>
                            Title that functions as a collapse toggle
                        </Panel.Title>
                    </Panel.Heading>
                    <Panel.Collapse>
                        <Panel.Body>
                            <Grid>
                                <Row>
                                    {smoothies && smoothies.map(smoothie =>
                                        <CardComponent title={smoothie.name} description={smoothie.description} click={() => this.handleShow(smoothie)}/>
                                    )}
                                </Row>
                            </Grid>
                        </Panel.Body>
                    </Panel.Collapse>
                </Panel>
                <SmoothieComponent show={this.state.show} smoothie={this.state.selectedSmoothie} onhide={this.handleClose}/>
            </div>
        )
    }

}

export default SmoothiesComponent;