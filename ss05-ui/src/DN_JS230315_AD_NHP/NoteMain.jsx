import React, { useState } from "react";
import "./NoteMain.css";

import NoteInput from "./NoteInput";
import NoteCard from "./NoteCard";

import { Container, Row } from "react-bootstrap";

function NoteMain() {
  const [noteList, setNoteList] = useState([
    { content: "Special title treatment" },
    { content: "Special title treatment 1" },
  ]);

  const [editForm, setEditForm] = useState(false);
  const [selectedNote, setSelectedNote] = useState({});
  const [actionName, setActionName] = useState("Add");

  const addNote = (note) => {
    setNoteList([...noteList, { content: note }]);
  };

  const editNote = (note, edit, action) => {
    setEditForm(edit);
    setSelectedNote(note);
    setActionName(action);
  };

  const delNote = (index) => {
    let newList = [...noteList];
    newList.splice(index, 1);
    setNoteList(newList);
  };
  return (
    <div>
      <h1 className="text-white">Note App</h1>
      <Container className="pt-4">
        {/* NoteInput */}
        <NoteInput
          addNote={addNote}
          selectedNote={selectedNote}
          actionName={actionName}
        />
        <Row className="list-card mt-4">
          {/* NoteCard */}
          {noteList.map((note, index) => (
            <NoteCard
              index={index}
              note={note}
              delNote={delNote}
              editNote={editNote}
            />
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default NoteMain;
