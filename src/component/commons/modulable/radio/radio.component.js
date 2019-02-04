import React, {Component} from 'react';
import {Button, ButtonGroup, Col} from "react-bootstrap";

class RadioComponent extends Component {

    constructor(props) {
        super(props);

        this.state = {
            sm: props.sm || 12,
            md: props.md || 6,
            title: props.title,
            titleLeft: props.titleLeft,
            titleRight: props.titleRight,
            valueLeft: props.valueLeft || true,
            valueRight: props.valueRight || false,
            value: props.defaultValue,
            onClick: props.onclick
        };
    }

    onRadioClick(value) {
        let { onClick } = this.state;
        onClick(value);
        this.setState({ value });
    }

    render() {
        let { sm, md, titleLeft, titleRight, valueLeft, valueRight, title, value } = this.state;
        return (
            <Col sm={sm} md={md}>
                <div>
                    <h5><b>{title}</b></h5>
                    <ButtonGroup>
                        <Button color="primary" onClick={() => this.onRadioClick(valueLeft)} active={value === valueLeft}>{titleLeft}</Button>
                        <Button color="primary" onClick={() => this.onRadioClick(valueRight)} active={value === valueRight}>{titleRight}</Button>
                    </ButtonGroup>
                </div>
            </Col>
        );
    }
}

export default RadioComponent;