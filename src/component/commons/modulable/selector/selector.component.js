import React, {Component} from 'react';
import {Col, ControlLabel, FormControl, FormGroup} from "react-bootstrap";

class SelectorComponent extends Component {

    constructor(props) {
        super(props);

        this.state = {
            sm: props.sm || 12,
            md: props.md || 6,
            titre: props.titre,
            options: props.options || [],
            getNameFn: props.isJsonObject ? this.getNameFromObject : this.getNameProperty
        }
    }

    render() {
        let { sm, md, titre, options } = this.state;
        return (
            <Col sm={sm} md={md}>
                <FormGroup controlId="formControlsSelect">
                    <ControlLabel> {titre} </ControlLabel>
                    <FormControl componentClass="select" placeholder="select">
                        {options.map(option => (
                            <option key={option.id} value={option.text}>
                                {this.getName(option)}
                            </option>
                        ))}
                    </FormControl>
                </FormGroup>
            </Col>
        );
    }

    getName(option) {
        return this.state.getNameFn(option);
    }

    getNameFromObject(value) {
        return Object.keys(value)[0];
    }

    getNameProperty(value) {
        return value.name;
    }
}

export default SelectorComponent;