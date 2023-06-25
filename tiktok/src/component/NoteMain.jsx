import React, { useState } from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import NoteInput from "./NoteInput";
import NoteCard from "./NoteCard";
import "./note.css";

function NoteMain() {
  const [noteList, setNoteList] = React.useState([]);
  const [selectedNote, setSelectedNote] = useState();
  const [actionName, setActionName] = useState("add");

  const addNote = (note) => {
    setNoteList([...noteList, note]);
  };
  const delNote = (index) => {
    setNoteList(noteList.filter((note, i) => i !== index));
  };

  // nhan data tu note card
  const editNote = (index, actionName) => {
    setActionName(actionName);
    setSelectedNote(index);
  };

  const updateNote = (note) => {
    let newList = [...noteList];
    newList[selectedNote] = note;
    setNoteList(newList);
    setActionName("add");
  };
  return (
    <div>
      <h1 className="text-white">Note App</h1>

      <Container className="pt-4">
        <NoteInput
          addNote={addNote}
          selectedNote={selectedNote}
          actionName={actionName}
          noteList={noteList}
          updateNote={updateNote}
        />
        <Row className="list-card mt-4">
          {noteList.map((note, i) => (
            <NoteCard
              note={note}
              delNote={delNote}
              index={i}
              editNote={editNote}
              actionName={actionName}
            ></NoteCard>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default NoteMain;
