import { configureStore, combineReducers } from "@reduxjs/toolkit";
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "./storage";
import todosReducer from "./features/todo/todosSlice";
import optionsReducer from "./features/options/optionsSlice";

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["options"],
};

const combinedReducers = combineReducers({
  todos: todosReducer,
  options: optionsReducer,
});

const persistedReducer = persistReducer(persistConfig, combinedReducers);

export const makeStore = () => {
  return configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
