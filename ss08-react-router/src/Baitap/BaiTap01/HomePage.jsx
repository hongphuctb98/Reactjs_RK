import React from "react";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function HomePage() {
  return (
    <Container>
      <h2>HomePage</h2>

      <Row>
        <Col md={4}>
          <div style={{ width: "50%", height: "auto" }}>
            <img
              style={{ width: "100%" }}
              src="https://i.pinimg.com/564x/5f/8b/f7/5f8bf701fa689029652826dd42eec19c.jpg"
              alt=""
            />
          </div>
        </Col>
        <Col md={8}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis
          dolores inventore iure perspiciatis eveniet, obcaecati consectetur
          mollitia ad sequi laboriosam delectus rem saepe sapiente qui. Earum
          laboriosam in officiis minima? Corporis rerum placeat quas
          reprehenderit sunt excepturi aperiam vel doloremque animi numquam iste
          perspiciatis saepe, cumque fugit quam nobis dolorem veritatis esse
          nisi harum, ullam vitae alias perferendis ipsam. Error. Quidem fugit
          neque iusto in nulla fugiat, omnis perspiciatis accusamus, laudantium
          eligendi aliquam pariatur autem explicabo provident laborum. Porro
          impedit minima sunt voluptates ratione consequuntur sapiente quaerat
          omnis alias? Quos. Amet eum consequuntur, accusantium nobis architecto
          neque animi sed reiciendis tempore quasi facilis quidem minus, quos,
          molestiae doloribus non omnis nemo! Asperiores, repellat? Soluta
          blanditiis a officiis dicta et impedit.
        </Col>
      </Row>
    </Container>
  );
}

export default HomePage;
