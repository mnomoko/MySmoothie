import React, { Component } from 'react';
import { Nav, Navbar, NavItem } from 'react-bootstrap';

class NavBarComponent extends Component {

    render() {
        return (
            <Navbar inverse collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="/">My Smoothie</a>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                        <NavItem eventKey={1} href="/smoothies">
                            Smoothies
                        </NavItem>
                        <NavItem eventKey={2} href="/creations">
                            Creations
                        </NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default NavBarComponent;