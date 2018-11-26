import React, {Component} from 'react';
import {Col} from "react-bootstrap";
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
            selectedValue: props.selected || props.options[0]
        };
    }

    static getDerivedStateFromProps(nextProps, prevState){
        if(nextProps.options!==prevState.options){
            return { options: nextProps.options};
        }
        else return null;
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevState.options === this.state.options && prevProps.options!==this.props.options){
            this.setState({options: this.props.options});
        }
    }

    change = (option) => {
        let { cle, onChange } = this.state;
        onChange(cle, option);
        this.setState({selectedValue: option});
    };

    render() {
        let { sm, md, options, selectedValue, titre } = this.state;
        return (
            <Col sm={sm} md={md}>
                <label>{titre}</label>
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