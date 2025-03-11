import { TodoInterface } from "@/utils/types/Todo";
import { createSlice } from "@reduxjs/toolkit";

const initialState: TodoInterface[] = [];

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const { payload } = action;
      if (Array.isArray(payload)) state.push(...payload);
      else state.push(payload);
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

export const { addTodo, toggleTodo, editTodo, removeTodo } = todosSlice.actions;

export default todosSlice.reducer;
