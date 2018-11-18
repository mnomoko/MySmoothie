import React, { Component } from 'react';
import { Nav, Navbar, NavItem } from 'react-bootstrap';

class NavBarComponent extends Component {

    render() {
        return (
            <Navbar>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="/">Accueil</a>
                    </Navbar.Brand>
                </Navbar.Header>
                <Nav>
                    <NavItem eventKey={1} href="/smoothies">
                        Smoothies
                    </NavItem>
                    <NavItem eventKey={2} href="/creations">
                        Creations
                    </NavItem>
                </Nav>
            </Navbar>
        )
    }
}

export default NavBarComponent;