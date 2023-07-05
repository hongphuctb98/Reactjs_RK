import React, { useEffect, useState } from "react";
import { Button, Container } from "react-bootstrap";

import Form from "react-bootstrap/Form";
import { useDispatch, useSelector } from "react-redux";
import { act_add, act_upload } from "../redux/action";

function TodoForm() {
  const dispatch = useDispatch();
  const selectedTodo = useSelector((state) => state.todoReducer.selectedTodo);

  const [todo, setTodo] = useState({
    id: "",
    title: "",
    content: "",
  });

  useEffect(() => {
    if (selectedTodo) {
      setTodo(selectedTodo);
    } else {
      setTodo({
        id: "",
        title: "",
        content: "",
      });
    }
  }, [selectedTodo]);

  const handleChangeInput = (e) => {
    setTodo({ ...todo, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todo.id) {
      dispatch(act_upload(todo));
    } else {
      const newTodo = {
        ...todo,
        id: Date.now(),
      };
      dispatch(act_add(newTodo));
    }

    setTodo({
      id: "",
      title: "",
      content: "",
    });
  };
  return (
    <Container style={{ width: "30%" }}>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter title"
            name="title"
            value={todo.title}
            onChange={handleChangeInput}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Content</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            name="content"
            value={todo.content}
            onChange={handleChangeInput}
          />
        </Form.Group>
        {!selectedTodo ? (
          <Button variant="primary" type="submit">
            Add
          </Button>
        ) : (
          <Button variant="success" type="submit">
            Upload
          </Button>
        )}
      </Form>
    </Container>
  );
}

export default TodoForm;
