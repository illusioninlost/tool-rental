import React from "react";
import { Col, Container, Row, Footer } from "mdbreact";

class FooterPage extends React.Component {

render() {
return (
 
   
<Footer color="blue" className="font-small pt-4 mt-4 bright" style={{backgroundColor: '#49edff'}}>
<hr/>
  <Container fluid className="text-center text-md-left">
    <Row>
      <Col md="6">
      <h5 className="title"><b>Mission</b></h5>
      <p>
          <b>Fast and reliable service. Tools when you need it.</b>
      </p>
      </Col>
      <Col md="6">
      <h5 className="title" style={{marginLeft: '50px'}}>@Tool Rental</h5>
      <ul>
        <li className="list-unstyled">
          <a href="#!" style={{color: '#591200'}}>Our team</a>
        </li>
        <li className="list-unstyled">
          <a href="#!" style={{color: '#591200'}}>Contacts</a>
        </li>
        <li className="list-unstyled">
          <a href="#!" style={{color: '#591200'}}>Media</a>
        </li>
        <li className="list-unstyled">
          <a href="#!" style={{color: '#591200'}}>License</a>
        </li>
      </ul>
      </Col>
    </Row>
  </Container>
  <div className="footer-copyright text-center py-3">
    <Container fluid>
      &copy; {new Date().getFullYear()} Copyright:{" "}
      <a href="/" style={{color: '#591200'}}> ToolRental.com </a>
    </Container>
  </div>
</Footer>

);
}
}

export default FooterPage;