import React, {Component} from 'react';
import {Button, Col, Panel} from "react-bootstrap";

class CardComponent extends Component {

    constructor(props) {
        super(props);

        this.state = {
            xs: props.xs ? props.xs : 6,
            md: props.md ? props.md : 4,
            title: props.title,
            description: props.description,
            onclick: props.click,
        }
    }

    render() {
        return(
            <Col xs={this.state.xs} md={this.state.md}>
                <Panel>
                    <div style={{margin: 10}}>
                        <h3>{this.state.title}</h3>
                        <p>{this.state.description}</p>
                        <Button bsStyle="primary" bsSize="large" onClick={this.state.onclick} block>Button</Button>
                    </div>
                </Panel>
            </Col>
        )
    }
}

export default CardComponent;