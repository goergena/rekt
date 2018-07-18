import React from 'react';
import { Nav, NavItem, NavLink, Button } from 'reactstrap';
import "./NavBar.css";

export default class NavBar extends React.Component {
  render() {
    return (
      <div>
        <Nav>
          <NavItem>
            <NavLink href="/">Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/shop">Shop</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/teamtable">Team Stats</NavLink>
          </NavItem>
        </Nav>
  

        <h2>It's Rec Ball!</h2>
      </div>
    );
  }
}