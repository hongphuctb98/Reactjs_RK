import React from "react";
import { Button, Card, Col } from "react-bootstrap";

function NoteCard({ note, index, delNote, editNote }) {
  const handleDel = () => {
    delNote(index);
  };

  const handleEdit = () => {
    editNote(index);
  };
  return (
    <Col md={3} className="mb-4" key={index}>
      <Card>
        <Card.Body>
          <Card.Text className="fs-5">{note}</Card.Text>

          <div className="d-flex justify-content-between ">
            <div></div>
            <div className="d-flex column-gap-2">
              <Button
                variant="warning"
                className="btn-del d-flex "
                onClick={handleDel}
              >
                <i className="fa-solid fa-trash icon">del</i>
              </Button>
              <Button
                variant="warning"
                className="btn-del d-flex "
                onClick={handleEdit}
              >
                <i className="fa-solid fa-pen-to-square">edit</i>
              </Button>
            </div>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default NoteCard;
