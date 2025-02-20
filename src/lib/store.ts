import { configureStore } from "@reduxjs/toolkit";
import { todosReducer } from "./todosReducer";

export const makeStore = () => {
  return configureStore({
    reducer: todosReducer,
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
