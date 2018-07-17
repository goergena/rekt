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
            <NavLink href="/rec">Leagues</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/productlist">Shop</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/bowling">Bowling</NavLink>
          </NavItem>
        </Nav>
        <Nav>
            <Button color="primary" >Stats Coordinator Login</Button>
        </Nav>
        <h2>Welcome to Rec-It-Ball</h2>
      </div>
    );
  }
}