import React, { useState } from "react";

function TodoListLive() {
  const [todo, setTodo] = useState("");
  const [editForm, setEditForm] = useState(false);
  const [selectedTodo, setSelectedTodo] = useState();
  const [todoList, setTodoList] = useState([
    { id: 1, content: "cho", status: true },
    { id: 2, content: "meo", status: true },
    { id: 3, content: "lon", status: false },
    { id: 4, content: "ga", status: false },
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!editForm) {
      setTodoList([
        ...todoList,
        { id: todoList.length + 1, content: todo, state: false },
      ]);
      setTodo("");
      setEditForm(false);
    } else {
      let newTodoList = [...todoList];

      let newTodo = newTodoList[selectedTodo];
      newTodo.content = todo;
      setTodo("");
      setTodoList(newTodoList);
      setEditForm(false);
    }
  };

  const handleEdit = (index) => {
    setTodo(todoList[index].content);
    setEditForm(true);
    setSelectedTodo(index);
  };

  const handleDelete = (index) => {
    let newTodoList = [...todoList];
    newTodoList.splice(index, 1);
    setTodoList(newTodoList);
  };

  const handleChangeStatus = (index) => {
    let newTodoList = [...todoList];
    newTodoList[index].status = !newTodoList[index].status;
    setTodoList(newTodoList);
  };
  return (
    <div>
      <div className="card" style={{ width: "50%", margin: "auto" }}>
        <form className="d-flex" role="search" onSubmit={handleSubmit}>
          <input
            className="form-control me-2 py-4"
            type="search"
            placeholder="Search"
            aria-label="Search"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
          />

          {!editForm ? (
            <button className="btn btn-outline-success" type="submit">
              Add
            </button>
          ) : (
            <button className="btn btn-outline-warning" type="submit">
              edit
            </button>
          )}
        </form>

        <ul className="list-group mt-3">
          {todoList.map((item, i) => (
            <li className="list-group-item d-flex justify-content-between align-items-center">
              <p
                onClick={() => handleChangeStatus(i)}
                className=" fs-6 "
                style={
                  item.status
                    ? {
                        flex: "1",
                        textAlign: "left",
                        textDecoration: "line-through",
                      }
                    : { flex: "1", textAlign: "left" }
                }
              >
                {item.content}
              </p>
              <div
                className="btn-group"
                role="group"
                aria-label="Basic mixed styles example"
              >
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={() => handleDelete(i)}
                >
                  Del
                </button>

                <button
                  type="button"
                  className="btn btn-warning"
                  onClick={() => handleEdit(i)}
                >
                  Edit
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TodoListLive;
