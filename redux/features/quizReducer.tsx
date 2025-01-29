import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type HomeState = {
  totalSolved: number;
  refetch: boolean;
};

const initialState = {
  totalSolved: 0,
  refetch: false,
} as HomeState;

export const quiz = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    setTotalSolved: (state, action) => {
      state.totalSolved = action.payload;
    },

    toggleRefetch: (state) => {
      state.refetch = !state.refetch;
    },
  },
});

export const {
  setTotalSolved,

  toggleRefetch,
} = quiz.actions;
export default quiz.reducer;
