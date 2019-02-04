import React from 'react';
import ReactDOM from 'react-dom';
import CardComponent from "./card.component";

it('renders CardComponent default without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<CardComponent />, div);
    ReactDOM.unmountComponentAtNode(div);
});

it('renders CardComponent without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<CardComponent xs={6} md={4} />, div);
    ReactDOM.unmountComponentAtNode(div);
});