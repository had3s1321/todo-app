import { TodoInterface } from "@/utils/types/Todo";
import { createSlice } from "@reduxjs/toolkit";

const initialState: TodoInterface[] = [];

export const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload);
    },
    toggleTodo: (state, action) => {
      const todo = state.find((todo) => todo.id === action.payload.id);
      if (todo) todo.isCompleted = !todo.isCompleted;
    },
    editTodo: (state, action) => {
      return state.map((todo) => {
        if (todo.id === action.payload.id) return action.payload;
        return todo;
      });
    },
    removeTodo: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload.id);
    },
  },
});

export const { addTodo, toggleTodo, editTodo, removeTodo } = todoSlice.actions;

export default todoSlice.reducer;
