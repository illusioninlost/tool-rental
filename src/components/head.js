import React from 'react';
import { Navbar, Nav, NavItem, MenuItem, NavDropdown } from 'react-bootstrap';

const Head = () => {

  return (
    <Navbar>
      <Navbar.Header>
        <Navbar.Brand>
          <a href="/">Tool Rental</a>
        </Navbar.Brand>
      </Navbar.Header>
      <Nav>
        <NavItem eventKey={1} href="/tools/new">
          Add Tool AD
    </NavItem>
      </Nav>
    </Navbar>
  )

}

export default Head;