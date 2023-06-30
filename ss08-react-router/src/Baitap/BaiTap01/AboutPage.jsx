import React from "react";
import { Col, Container, Row } from "react-bootstrap";

function AboutPage() {
  return (
    <Container>
      <h2>Container</h2>
      <Row>
        <Col md={6}>
          <div style={{ textAlign: "center" }}>
            <img
              style={{ width: "60%" }}
              src="https://cdn.pixabay.com/photo/2022/03/12/07/29/dragon-7063555_640.png"
              alt=""
            />
          </div>
        </Col>
        <Col md={6}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia, id,
          aliquam soluta eveniet optio facilis veritatis reprehenderit
          assumenda, odio asperiores sit! Ipsa numquam sed perspiciatis debitis
          repellat architecto? Perspiciatis, nemo! Error sequi eos eum fuga
          reprehenderit libero aliquid! Dolorem molestias eligendi maiores
          perferendis vel officiis repellendus tenetur reprehenderit repudiandae
          beatae, nam cumque animi, sunt qui cupiditate quae eaque doloribus
          necessitatibus. Expedita reiciendis culpa voluptas ipsam illo non
          optio rerum modi id aperiam facere consequatur, nobis perferendis
          sapiente accusamus doloribus iste facilis consectetur fugiat, earum
          ullam voluptatibus? Tempore debitis nesciunt provident! Maxime nostrum
          dignissimos magni aliquid quam cum ab eligendi debitis, incidunt
          necessitatibus, voluptatum vitae maiores error nobis neque modi?
          Nostrum officiis aut ad obcaecati nemo minima optio eligendi aliquid
          harum? Odio quae blanditiis id corporis voluptates, dolores
          voluptatibus eos alias ducimus. Possimus quo ut cum, harum, quod
          quisquam in blanditiis voluptates, facilis repudiandae animi illo
          asperiores dolor unde praesentium corrupti!
        </Col>
      </Row>
      <Row className="pt-5">
        <Col md={6}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia, id,
          aliquam soluta eveniet optio facilis veritatis reprehenderit
          assumenda, odio asperiores sit! Ipsa numquam sed perspiciatis debitis
          repellat architecto? Perspiciatis, nemo! Error sequi eos eum fuga
          reprehenderit libero aliquid! Dolorem molestias eligendi maiores
          perferendis vel officiis repellendus tenetur reprehenderit repudiandae
          beatae, nam cumque animi, sunt qui cupiditate quae eaque doloribus
          necessitatibus. Expedita reiciendis culpa voluptas ipsam illo non
          optio rerum modi id aperiam facere consequatur, nobis perferendis
          sapiente accusamus doloribus iste facilis consectetur fugiat, earum
          ullam voluptatibus? Tempore debitis nesciunt provident! Maxime nostrum
          dignissimos magni aliquid quam cum ab eligendi debitis, incidunt
          necessitatibus, voluptatum vitae maiores error nobis neque modi?
          Nostrum officiis aut ad obcaecati nemo minima optio eligendi aliquid
          harum? Odio quae blanditiis id corporis voluptates, dolores
          voluptatibus eos alias ducimus. Possimus quo ut cum, harum, quod
          quisquam in blanditiis voluptates, facilis repudiandae animi illo
          asperiores dolor unde praesentium corrupti!
        </Col>
        <Col md={6}>
          <div style={{ textAlign: "center" }}>
            <img
              style={{ width: "60%" }}
              src="https://cdn.pixabay.com/photo/2022/03/12/07/29/dragon-7063556_640.png"
              alt=""
            />
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default AboutPage;
