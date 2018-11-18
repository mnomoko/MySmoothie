import React from 'react';
import ReactDOM from 'react-dom';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SmoothiesComponent from "./smoothies.component";

// configure your adapter
configure({ adapter: new Adapter() });

it('renders SmoothiesComponent without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<SmoothiesComponent />, div);
    ReactDOM.unmountComponentAtNode(div);
});

describe('check state', () => {
    it('show state to false', () => {
        const smoothiesComponent = shallow(<SmoothiesComponent/>);
        expect(smoothiesComponent.state('show')).toBeFalsy();
    });
    it('show state to true on handleShow', () => {
        const smoothiesComponent = shallow(<SmoothiesComponent/>);
        smoothiesComponent.instance().handleShow();
        expect(smoothiesComponent.state('show')).toBeTruthy();
    });
    it('show state to false when handleShow and handleClose', () => {
        const smoothiesComponent = shallow(<SmoothiesComponent/>);
        smoothiesComponent.instance().handleShow();
        smoothiesComponent.instance().handleClose();
        expect(smoothiesComponent.state('show')).toBeFalsy();
    });
});