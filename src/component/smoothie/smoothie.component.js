import React, { Component } from 'react';
import {Button, Modal} from "react-bootstrap";

class SmoothieComponent extends Component {

    constructor(props, context) {
        super(props, context);

        this.handleClose = props.onhide;

        this.state = {
            show: props.show,
            smoothie: props.smoothie
        };
    }

    static getDerivedStateFromProps(nextProps, prevState){
        if(nextProps.show!==prevState.show){
            return { show: nextProps.show};
        }
        else
        if(nextProps.smoothie!==prevState.smoothie){
            return { smoothie: nextProps.smoothie};
        }
        else return null;
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevState.show === this.state.show && prevProps.show!==this.props.show){
            this.setState({show: this.props.show});
        }
        else
        if(prevState.smoothie === this.state.smoothie && prevProps.smoothie!==this.props.smoothie){
            this.setState({smoothie: this.props.smoothie});
        }
    }

    render() {
        let { show, smoothie } = this.state;
        if(smoothie) {
            return (
                <div>
                    <Modal show={show} onHide={this.handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>{smoothie.name}</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <p>{smoothie.description}</p>
                            <h4>Préparation</h4>
                            <ul>
                                {smoothie.fruits.map(i => {
                                    return <li>{i.preparation}</li>
                                })}
                                <li>Ajoutez les fruits dans le blender</li>
                                <li>Ajoutez le {smoothie.jus.name} dans le blender</li>
                                <li>Mixez et servez</li>
                            </ul>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button onClick={this.handleClose}>Close</Button>
                        </Modal.Footer>
                    </Modal>
                </div>
            );
        }
        else {
            return null;
        }
    }

}

export default SmoothieComponent;