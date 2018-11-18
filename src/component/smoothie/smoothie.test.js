import React from 'react';
import ReactDOM from 'react-dom';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SmoothieComponent from "./smoothie.component";

// configure your adapter
configure({ adapter: new Adapter() });

it('renders SmoothieComponent without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<SmoothieComponent />, div);
    ReactDOM.unmountComponentAtNode(div);
});

describe('check state', () => {
    it('show state to false', () => {
        const smoothieComponent = shallow(<SmoothieComponent/>);
        expect(smoothieComponent.state('show')).toBeFalsy();
        smoothieComponent.setState({'show': false});
        smoothieComponent.setProps({'show': true});
        expect(smoothieComponent.state('show')).toBeTruthy();
        smoothieComponent.setProps({'show': false});
        expect(smoothieComponent.state('show')).toBeFalsy();
    });
});