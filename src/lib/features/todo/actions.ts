import { createAction } from "@reduxjs/toolkit";
import { TodoInterface } from "@/utils/types/Todo";
import {
  ADD_TODO,
  TOGGLE_TODO,
  EDIT_TODO,
  REMOVE_TODO,
} from "@/lib/features/todo/constants";

export const addTodo = createAction<TodoInterface>(ADD_TODO);
export const toggleTodo = createAction<TodoInterface>(TOGGLE_TODO);
export const editTodo = createAction<TodoInterface>(EDIT_TODO);
export const removeTodo = createAction<TodoInterface>(REMOVE_TODO);
