import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sum: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.sum += 1;
    },
    decrement: (state) => {
      state.sum -= 5;
    },
    reset: (state) => {
      state.sum = 0;
    },
    incrementByAmt: (state, action) => {
      state.sum += action.payload;
    },
  },
});

export const { increment, decrement, reset, incrementByAmt } =
  counterSlice.actions;

export default counterSlice.reducer;
