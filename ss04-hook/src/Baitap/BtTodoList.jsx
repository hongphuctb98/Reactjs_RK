import React, { useState } from "react";

function BtTodoList() {
  const [todo, setTodo] = useState("");
  const [editForm, setEditForm] = useState(false);
  const [editTodoId, setEditTodoId] = useState();
  const [todoList, setTodoList] = useState([
    { id: 1, content: "cho", state: false },
    { id: 2, content: "meo", state: true },
    { id: 3, content: "lon", state: false },
    { id: 4, content: "ga", state: false },
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!editForm) {
      setTodoList([
        ...todoList,
        { id: todoList.length + 1, content: todo, state: false },
      ]);
    } else {
      let updateTodo = todoList.map((item) => {
        if (item.id == editTodoId) {
          return { ...item, content: todo };
        }
        return item;
      });
      setTodoList(updateTodo);
    }

    setEditForm(false);
    setTodo("");
  };

  const handleChangeState = (id) => {
    let newTodoList = [...todoList];
    let i = newTodoList.findIndex((todo) => todo.id == id);
    newTodoList[i].state = !newTodoList[i].state;
    setTodoList(newTodoList);
  };

  const handleDel = (id) => {
    let newTodoList = [...todoList];
    let i = newTodoList.findIndex((todo) => todo.id == id);
    newTodoList.splice(i, 1);

    setTodoList(newTodoList);
  };

  const handleEdit = (id) => {
    let newTodoList = [...todoList];
    let i = newTodoList.findIndex((todo) => todo.id == id);
    setEditForm(true);
    setEditTodoId(id);
    setTodo(newTodoList[i].content);
  };
  return (
    <div>
      <div className="card" style={{ width: "50%", margin: "auto" }}>
        <div className="card-body">
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
              <button
                className="btn btn-outline-success"
                name="add"
                type="submit"
              >
                Add
              </button>
            ) : (
              <button
                className="btn btn-outline-warning"
                name="edit"
                type="submit"
              >
                Edit
              </button>
            )}
          </form>

          <ul
            className="list-group"
            style={{ marginTop: "20px", textAlign: "left" }}
          >
            {todoList.map((item) => (
              <li
                className="list-group-item d-flex justify-content-between align-items-center fs-6"
                key={item.id}
              >
                <p
                  onClick={() => handleChangeState(item.id)}
                  style={
                    item.state
                      ? { textDecoration: "line-through", flex: "1" }
                      : { flex: "1" }
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
                    onClick={() => handleDel(item.id)}
                  >
                    Del
                  </button>

                  <button
                    type="button"
                    className="btn btn-warning"
                    onClick={() => handleEdit(item.id)}
                  >
                    Edit
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default BtTodoList;
