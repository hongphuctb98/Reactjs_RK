import * as types from "../constant/bt03Types";

const initalState = {
  todos: [],
  selectedTodo: null,
  searchTodos: null,
};

const todoReducer = (state = initalState, action) => {
  switch (action.type) {
    case types.ACT_ADD:
      return { ...state, todos: [...state.todos, action.payload] };
    case types.ACT_DELETE:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
        selectedTodo: null,
      };
    case types.ACT_SELECTED:
      return { ...state, selectedTodo: action.payload };
    case types.ACT_UPLOAD:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload.id ? action.payload : todo
        ),
        selectedTodo: null,
      };
    case types.ACT_SEARCH:
      return {
        ...state,
        searchTodos: state.todos.filter((todo) =>
          todo.title.toUpperCase().includes(action.payload.toUpperCase())
        ),
      };
  }
  return state;
};

export default todoReducer;
