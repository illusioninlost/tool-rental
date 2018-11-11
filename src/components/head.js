import React from 'react';
import { Navbar} from 'react-bootstrap';
import { Link } from 'react-router-dom'

const Head = () => {

  const navbar = {backgroundColor: '#ffdf40'};
  const brand = {color: '#1f1d15'};
  const size = {fontSize: 30};
 

  return (
    <Navbar style={navbar}>
      <Navbar.Header>
        <Navbar.Brand style={brand}>
          <span style={size}>Tool Rental</span>
        </Navbar.Brand>
      </Navbar.Header>
      <Link to="/" className="navAdd">Home</Link>
      <Link to="/tools/new" className="navAdd">Place Tool AD</Link>

    </Navbar>
  )

}

export default Head;