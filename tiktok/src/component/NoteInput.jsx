import React, { useEffect, useState } from "react";
import { Button, Card, Form } from "react-bootstrap";

function NoteInput({
  addNote,
  selectedNote,
  actionName,
  noteList,
  updateNote,
}) {
  const [note, setNote] = useState("");
  const handleAdd = (e) => {
    addNote(note);
    setNote("");
  };
  const handleUpload = (e) => {
    updateNote(note, "add");
  };

  useEffect(() => {
    setNote(noteList[selectedNote]);
  }, [selectedNote]);
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
        {actionName == "add" ? (
          <Button variant="warning" className="btn btn-add" onClick={handleAdd}>
            Add
          </Button>
        ) : (
          <Button
            variant="warning"
            className="btn btn-add"
            onClick={handleUpload}
          >
            Edit
          </Button>
        )}
      </>
    </Card>
  );
}

export default NoteInput;
