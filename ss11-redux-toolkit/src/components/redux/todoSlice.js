import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todo",
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload);
      return state;
    },
  },
});

console.log(todoSlice);

export const { addTodo } = todoSlice.actions;

export default todoSlice.reducer;
