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
                            <h4>Description</h4>
                            <p>
                                {smoothie.description}
                            </p>

                            <hr/>

                            <h4>Préparation</h4>
                            <p>
                                Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                                dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
                                ac consectetur ac, vestibulum at eros.
                            </p>
                            <p>
                                Praesent commodo cursus magna, vel scelerisque nisl consectetur
                                et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
                                auctor.
                            </p>
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