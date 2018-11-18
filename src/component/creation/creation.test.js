import React from 'react';
import ReactDOM from 'react-dom';
import CreationComponent from "./creation.component";

it('renders CreationComponent without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<CreationComponent />, div);
    ReactDOM.unmountComponentAtNode(div);
});