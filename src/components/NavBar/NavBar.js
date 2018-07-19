import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
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
            <NavLink href="/bowlingstats">Stats</NavLink>
          </NavItem>
        </Nav>
  

        <a href="/"><h2 id="logo">It's Rec Ball!</h2></a>
      </div>
    );
  }
}