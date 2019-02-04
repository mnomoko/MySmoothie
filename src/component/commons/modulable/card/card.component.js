import React, {Component} from 'react';
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

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
                <Card>
                    <Card.Body>
                        <Card.Title>{title}</Card.Title>
                        <Card.Text>{description}</Card.Text>
                        <Button variant="primary" size="large" onClick={onclick} block>{buttonTitle}</Button>
                    </Card.Body>
                </Card>
            </Col>
        )
    }
}

export default CardComponent;