import { createReducer } from "@reduxjs/toolkit";
import { TodoInterface } from "@/utils/types/Todo";
import {
  addTodo,
  toggleTodo,
  editTodo,
  removeTodo,
} from "@/lib/features/todo/actions";

export const todosReducer = createReducer(<TodoInterface[]>[], (builder) => {
  builder
    .addCase(addTodo, (state, action) => {
      state.push(action.payload);
    })
    .addCase(toggleTodo, (state, action) => {
      const todo = state.find((t) => t.id === action.payload.id);
      if (todo) todo.isCompleted = !todo.isCompleted;
    })
    .addCase(editTodo, (state, action) => {
      return state.map((todo) => {
        if (todo.id === action.payload.id) return action.payload;
        return todo;
      });
    })
    .addCase(removeTodo, (state, action) => {
      return state.filter((todo) => todo.id !== action.payload.id);
    });
});
