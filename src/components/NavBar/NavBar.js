
import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
import "./NavBar.css";
import ModalLogin from '../Login/Login.js'

export default class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div className="sticky-top">
        <Navbar id="bar" light expand="md" >
          <NavbarBrand id="brand" href="/">It's Rec Ball!</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/bowlingstats">Teams</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/shop">Shop</NavLink>
              </NavItem>
              <NavItem>
              <ModalLogin />
              </NavItem>

            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}