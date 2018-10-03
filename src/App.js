import React, { Component } from 'react';
import { Navbar, Nav, NavItem, MenuItem, NavDropdown } from 'react-bootstrap';
import { connect } from 'react-redux';
import './App.css';
import { bindActionCreators } from 'redux';


class App extends Component {
  render() {
    return (
      <div className="App">

        <Navbar>
        <Navbar.Header>
        <Navbar.Brand>
          <a href="#home">Tool Rental</a>
        </Navbar.Brand>
        </Navbar.Header>
        <Nav>
        <NavItem eventKey={1} href="#">
          Link
        </NavItem>
        <NavItem eventKey={2} href="#">
          Link
        </NavItem>
        <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
        <MenuItem eventKey={3.1}>Action</MenuItem>
        <MenuItem eventKey={3.2}>Another action</MenuItem>
        <MenuItem eventKey={3.3}>Something else here</MenuItem>
        <MenuItem divider />
        <MenuItem eventKey={3.4}>Separated link</MenuItem>
        </NavDropdown>
        </Nav>
        </Navbar>;
       
        <div>Tools to rent. Save time and money. &#128296;</div>
        <div className="cart">
        Cart side bar items should pop out after clicking <<
        </div>
        <div>Picture Content Picture Picture</div>
        <div>Picture  Picture Picture</div>
        <div>Picture  Picture Picture</div>
        
        <footer className="page-footer font-small blue">
        <div className="footer-copyright text-center py-3">© 2018 Copyright Tool Rental</div>
        </footer>


      </div>

    );
  }
}

// const mapDispatchToProps = (dispatch) => {
//   return bindActionCreators({
//     fetchCats: fetchCats,
//   }, dispatch)
// }


// const mapStateToProps = state => {

//   return { catsPics: state.cats.pictures };
// }

// export default connect(mapStateToProps, mapDispatchToProps)(App)

export default App;
