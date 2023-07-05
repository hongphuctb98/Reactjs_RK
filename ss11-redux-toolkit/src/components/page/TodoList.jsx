import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../redux/todoSlice";
import { v4 as uuidv4 } from "uuid";

function TodoList() {
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  const todo = useSelector((state) => state.todoSlice);

  // hhi su dung redux khong nen su xung ca ham khong the du doan truoc duoc
  // example: Math.random, Date.now...=> uuid()
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTodo({ id: uuidv4(), text }));
  };
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>

      {todo && todo.map((todo) => <p key={todo.id}>{todo.text}</p>)}
    </div>
  );
}

export default TodoList;
