import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Bt02Footer() {
  return (
    <footer className="bg-dark text-white">
      <Container>
        <Row>
          <Col md={4} xs={12}>
            <h5>Footer Content</h5>
            <p>Some text here to make the footer look nice.</p>
          </Col>
          <Col md={4} xs={12}>
            <h5>Links</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#!">Link 1</a>
              </li>
              <li>
                <a href="#!">Link 2</a>
              </li>
              <li>
                <a href="#!">Link 3</a>
              </li>
            </ul>
          </Col>
          <Col md={4} xs={12}>
            <h5>Contact Us</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#!">Address</a>
              </li>
              <li>
                <a href="#!">Phone</a>
              </li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <hr />
            <p className="text-center">
              &copy; {new Date().getFullYear()} My Website
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Bt02Footer;
