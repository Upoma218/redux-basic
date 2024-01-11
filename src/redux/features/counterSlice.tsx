import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

type TCounter = {
  count: number;
  numberOfBoxes: number;
};

const initialState: TCounter = { count: 0, numberOfBoxes: 0 };

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state, action: PayloadAction<number>) => {
      state.count = state.count + action.payload;
      state.numberOfBoxes = Math.floor(state.count / 5);
    },
    decrement: (state, action: PayloadAction<number>) => {
      state.count = state.count - action.payload;
      if (state.count >= 0) {
        state.numberOfBoxes = Math.floor(state.count / 5);
      } else {
        // Handle negative counts, set numberOfBoxes to 0
        state.numberOfBoxes = 0;
      }
    },
  },
});

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;
