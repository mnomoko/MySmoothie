import React, {Component} from 'react';
import {Button, Col, Panel} from "react-bootstrap";

class CardComponent extends Component {

    constructor(props) {
        super(props);

        this.state = {
            xs: props.xs ? props.xs : 12,
            md: props.md ? props.md : 4,
            title: props.title,
            description: props.description,
            onclick: props.click,
            buttonTitle: props.buttonTitle,
        }
    }

    render() {
        let { md, xs, title, description, onclick, buttonTitle } = this.state;
        return(
            <Col xs={xs} md={md}>
                <Panel>
                    <div style={{margin: 10}}>
                        <h3>{title}</h3>
                        <p>{description}</p>
                        <Button bsStyle="primary" bsSize="large" onClick={onclick} block>{buttonTitle}</Button>
                    </div>
                </Panel>
            </Col>
        )
    }
}

export default CardComponent;