import React, { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { act_search } from "../redux/action";

function SearchForm() {
  const [inputText, setInputText] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(act_search(inputText));
  };
  return (
    <Container style={{ width: "30%", marginTop: "20px" }}>
      <Form className="d-flex" onSubmit={handleSubmit}>
        <Form.Control
          type="search"
          placeholder="Search"
          className="me-2"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          aria-label="Search"
        />
        <Button variant="outline-success" type="submit">
          Search
        </Button>
      </Form>
    </Container>
  );
}

export default SearchForm;
