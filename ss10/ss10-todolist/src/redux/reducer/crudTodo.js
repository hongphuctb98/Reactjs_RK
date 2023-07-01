import * as types from "../constant/typeAction";
const initalState = {
  todos: [],
  selectedTodo: null,
};

const crudTodo = (state = initalState, action) => {
  switch (action.type) {
    case types.ACT_ADD:
      return { ...state, todos: [...state.todos, action.payload] };
    case types.ACT_DEL:
      const newTodos = state.todos.filter(
        (todo, index) => todo.id !== action.payload
      );
      return {
        ...state,
        todos: newTodos,
      };
    case types.ACT_SELECTED:
      return { ...state, selectedTodo: action.payload };
    case types.ACT_UPDATE:
      const newTodosUpdate = state.todos.map((todo) =>
        todo.id == action.payload.id ? action.payload : todo
      );
      return { ...state, todos: newTodosUpdate };
  }
  return state;
};

export default crudTodo;
