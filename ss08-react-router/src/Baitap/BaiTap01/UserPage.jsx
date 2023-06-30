import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom/dist";

function UserPage() {
  return (
    <Container>
      <Row>
        <Col lg={3} md={4} sm={6}>
          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src="https://i.pinimg.com/564x/09/6f/80/096f80fdf92617b9e5b8099a627e9de8.jpg"
            />
            <Card.Body>
              <Card.Title>Card Title 1</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <NavLink to="/user/CardTitle1">
                <Button variant="primary">Go somewhere</Button>
              </NavLink>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={3} md={4} sm={6}>
          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src="https://i.pinimg.com/564x/09/6f/80/096f80fdf92617b9e5b8099a627e9de8.jpg"
            />
            <Card.Body>
              <Card.Title>Card Title 2</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <NavLink to="/user/CardTitle2">
                <Button variant="primary">Go somewhere</Button>
              </NavLink>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={3} md={4} sm={6}>
          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src="https://i.pinimg.com/564x/09/6f/80/096f80fdf92617b9e5b8099a627e9de8.jpg"
            />
            <Card.Body>
              <Card.Title>Card Title 3</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={3} md={4} sm={6}>
          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src="https://i.pinimg.com/564x/09/6f/80/096f80fdf92617b9e5b8099a627e9de8.jpg"
            />
            <Card.Body>
              <Card.Title>Card Title 4</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default UserPage;
