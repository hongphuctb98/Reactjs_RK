import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function Bt02Card({ item }) {
  const { title, text, src } = item;
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={src} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{text}</Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default Bt02Card;
