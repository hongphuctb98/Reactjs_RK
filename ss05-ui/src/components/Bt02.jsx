import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import React, { useState } from "react";
import Bt02Navbar from "./Bt02Navbar";
import Bt02Card from "./Bt02Card";
import Bt02Footer from "./Bt02Footer";

function Bt02() {
  const [listCard, setListCard] = useState([
    {
      src: "https://www.patterns.dev/img/reactjs/react-logo@3x.svg",
      title: "Card 1",
      text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    },
    {
      src: "https://www.patterns.dev/img/reactjs/react-logo@3x.svg",
      title: "Card 2",
      text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    },
    {
      src: "https://www.patterns.dev/img/reactjs/react-logo@3x.svg",
      title: "Card 3",
      text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    },
    {
      src: "https://www.patterns.dev/img/reactjs/react-logo@3x.svg",
      title: "Card 3",
      text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    },
    {
      src: "https://www.patterns.dev/img/reactjs/react-logo@3x.svg",
      title: "Card 3",
      text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    },
  ]);
  return (
    <>
      <Bt02Navbar />
      <Container className="mt-5">
        <Row>
          {listCard.map((item, index) => (
            <Col key={index} lg={3} md={4} sm={6} className="mb-4">
              <Bt02Card item={item} />
            </Col>
          ))}
        </Row>
      </Container>
      <Bt02Footer />
    </>
  );
}

export default Bt02;
