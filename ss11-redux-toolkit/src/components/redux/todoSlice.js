import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const todoSlice = createSlice({
  name: "todo",
  initialState: [
    {
      user: axios.get("http://localhost:6001/users"),
    },
  ],
  reducers: {
    addTodo: (state, action) => {
      state[0].user.push(action.payload);
      return state;
    },
  },
});

export const { addTodo } = todoSlice.actions;

export default todoSlice.reducer;
