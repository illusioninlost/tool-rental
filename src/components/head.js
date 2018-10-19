import React from 'react';
import { Navbar, Nav, NavItem, MenuItem} from 'react-bootstrap';

const Head = () => {

  const navbar = {backgroundColor: '#ffdf40'};
  const brand = {color: '#2e2c1f'};
  const size = {fontSize: 30}
  const size2 = {fontSize: 20, marginLeft: 10 }

  return (
    <Navbar style={navbar}>
      <Navbar.Header>
        <Navbar.Brand style={brand}>
          <a href="/" style={size}>Tool Rental</a>
        </Navbar.Brand>
      </Navbar.Header>
      <Nav>
        <NavItem eventKey={1} href="/tools/new" style={size2}>
          Add Tool AD
    </NavItem>
      </Nav>
    </Navbar>
  )

}

export default Head;