import React from "react";
import { Badge, Button, Container, ListGroup } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { act_del, act_selected } from "../redux/action";

function TodoList() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todoReducer.todos);
  const searchTodos = useSelector((state) => state.todoReducer.searchTodos);
  console.log(searchTodos);

  return (
    <Container style={{ width: "50%", marginTop: "20px" }}>
      <ListGroup as="ol">
        {(searchTodos ? searchTodos : todos).map((todo) => (
          <ListGroup.Item
            as="li"
            className="d-flex justify-content-between align-items-start"
            key={todo.id}
          >
            <p>
              {todo.title} - {todo.content}
            </p>
            <div>
              <Button
                variant="danger"
                onClick={() => dispatch(act_del(todo.id))}
              >
                Del
              </Button>
              <Button
                variant="warning"
                onClick={() => dispatch(act_selected(todo))}
              >
                Edit
              </Button>
            </div>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Container>
  );
}

export default TodoList;
