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
          <a href="/" style={size}>Tool Rental</a>
        </Navbar.Brand>
      </Navbar.Header>
      <Link to="/tools/new" className="navAdd">Place New Tool AD</Link>

    </Navbar>
  )

}

export default Head;