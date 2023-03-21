import { configureStore } from "@reduxjs/toolkit";
import swanniesCounterReducer from "../features/counter/counterSlice";

export const store = configureStore({
  reducer: {
    counter: swanniesCounterReducer,
  },
});
