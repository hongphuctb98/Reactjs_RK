import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { act_add, act_del, act_selected, act_update } from "../redux/action";

function TodoList() {
  const listTitle = useSelector((state) => state.crudTodo.todos);
  const selectedTodo = useSelector((state) => state.crudTodo.selectedTodo);
  const [todo, setTodo] = useState({
    title: "",
    id: "",
  });

  useEffect(() => {
    selectedTodo
      ? setTodo(selectedTodo)
      : setTodo({
          title: "",
          id: "",
        });
  }, [selectedTodo]);
  const dispatch = useDispatch();
  const handleAdd = (e) => {
    e.preventDefault();
    const newTodo = { ...todo, id: Date.now() };
    dispatch(act_add(newTodo));
    setTodo({
      title: "",
      id: "",
    });
  };

  const handleChange = (e) => {
    setTodo({
      ...todo,
      [e.target.name]: e.target.value,
    });
  };

  const handleDelete = (id) => {
    if (window.confirm("You are sure?")) dispatch(act_del(id));
  };

  const handleEdit = (todo) => {
    dispatch(act_selected(todo));
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    dispatch(act_update(todo));
    dispatch(act_selected(null));
    setTodo({
      title: "",
      id: "",
    });
  };

  return (
    <div>
      <section className="vh-100" style={{ backgroundColor: "#eee" }}>
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col col-lg-9 col-xl-7">
              <div className="card rounded-3">
                <div className="card-body p-4">
                  <h4 className="text-center my-3 pb-3">To Do App</h4>
                  <form className="row row-cols-lg-auto g-3 justify-content-center align-items-center mb-4 pb-2">
                    <div className="col-12">
                      <div className="form-outline">
                        <input
                          type="text"
                          id="form1"
                          className="form-control"
                          name="title"
                          value={todo.title}
                          onChange={handleChange}
                        />
                        <label className="form-label" htmlFor="form1">
                          Enter a task here
                        </label>
                      </div>
                    </div>
                    <div className="col-12">
                      {!selectedTodo ? (
                        <button
                          type="submit"
                          className="btn btn-primary"
                          onClick={handleAdd}
                        >
                          ADD
                        </button>
                      ) : (
                        <button
                          type="submit"
                          className="btn btn-success"
                          onClick={handleUpdate}
                        >
                          UPDATE
                        </button>
                      )}
                    </div>
                  </form>
                  <table className="table mb-4">
                    <thead>
                      <tr>
                        <th scope="col">No.</th>
                        <th scope="col">Todo item</th>
                        <th scope="col">Status</th>
                        <th scope="col">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {listTitle.map((todo, index) => (
                        <tr key={index}>
                          <th scope="row">{index + 1}</th>
                          <td>{todo.title}</td>
                          <td>In progress</td>
                          <td>
                            <button
                              type="submit"
                              className="btn btn-danger"
                              onClick={() => handleDelete(todo.id)}
                            >
                              Delete
                            </button>
                            <button
                              type="submit"
                              className="btn btn-warning ms-1"
                              onClick={() => handleEdit(todo)}
                            >
                              EDIT
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default TodoList;
