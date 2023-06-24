import React from "react";
import { Button, Card, Col } from "react-bootstrap";
function NoteCard({ index, note, delNote, editNote }) {
  const handleEdit = (note) => {
    editNote(note, false, "Edit");
  };
  return (
    <Col md={3} className="mb-4" key={index}>
      <Card>
        <Card.Body>
          <Card.Text className="fs-5">{note.content}</Card.Text>

          <div className="d-flex justify-content-between ">
            <div></div>
            <div className="d-flex column-gap-2">
              <Button
                variant="warning"
                className="btn-del d-flex "
                onClick={() => delNote(index)}
              >
                <i className="fa-solid fa-trash icon"></i>
              </Button>
              <Button
                variant="warning"
                className="btn-del d-flex "
                onClick={() => handleEdit(note)}
              >
                <i className="fa-solid fa-pen-to-square"></i>
              </Button>
            </div>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default NoteCard;
