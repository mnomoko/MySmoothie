import React, {Component} from 'react';
import Col from "react-bootstrap/Col";
import Select from 'react-select';

class SelectorComponent extends Component {

    constructor(props) {
        super(props);

        this.state = {
            sm: props.sm || 12,
            md: props.md || 6,
            cle: props.cle,
            titre: props.titre,
            options: props.options || [],
            onChange: props.selectionChange,
            clearOptionsOnUpdate: props.clearListOnUpdate,

            selectedValue: undefined
        };
    }

    static getDerivedStateFromProps(nextProps, prevState){
        if(nextProps.options!==prevState.options){
            return { options: nextProps.options};
        }
        else return null;
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevState.options !== this.state.options && prevProps.options!==this.props.options){
            if(this.state.clearOptionsOnUpdate) {
                this.change(null);
            }
        }
    }

    change = (option) => {
        let { cle, onChange } = this.state;
        onChange(cle, option);
        this.setState({selectedValue: option})
    };

    render() {
        let { sm, md, options, selectedValue, titre } = this.state;
        return (
            <Col sm={sm} md={md}>
                <label><h5><b>{titre}</b></h5></label>
                <Select
                    value={selectedValue}
                    onChange={this.change}
                    options={options}
                />
            </Col>
        );
    }
}

export default SelectorComponent;