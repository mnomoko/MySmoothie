import React from 'react';
import ReactDOM from 'react-dom';
import AccueilComponent from "./accueil.component";

it('renders AccueilComponent without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<AccueilComponent />, div);
    ReactDOM.unmountComponentAtNode(div);
});