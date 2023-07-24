import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../Features/Counter/CounterSlice';
import todosReducer from "../Features/Counter/TodosSlice";

export const store = configureStore({
  reducer: {
    counter : counterReducer,
    todos : todosReducer,
  },
})