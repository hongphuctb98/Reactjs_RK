import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import { Button, Card, Col, Container, Row } from "react-bootstrap";

function NoteInput({ addNote, slectedNote, actionName, editNote }) {
  const [note, setNote] = useState("");

  const handleAdd = () => {
    addNote(note);
    setNote("");
    console.log(actionName);
  };
  const handleEdit = () => {
    console.log(slectedNote);
    setNote(slectedNote);
  };

  return (
    <Card className="card-input ">
      <>
        <Form.Label htmlFor="inputPassword5">Title</Form.Label>

        <input
          type="text"
          className="input-text form-control my-4"
          value={note}
          onChange={(e) => setNote(e.target.value)}
        />
        {actionName === "Add" ? (
          <Button variant="warning" className="btn btn-add" onClick={handleAdd}>
            Add
          </Button>
        ) : (
          <Button
            variant="warning"
            className="btn btn-add"
            onClick={handleEdit}
          >
            Edit
          </Button>
        )}
      </>
    </Card>
  );
}

export default NoteInput;
