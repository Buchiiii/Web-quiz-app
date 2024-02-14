import { createSlice } from "@reduxjs/toolkit";

interface IScore {
  score: number;
}

const initialState: IScore = {
  score: 0,
};

const scoreSlice = createSlice({
  name: "score",
  initialState,
  reducers: {
    incrementScore: (state) => {
      state.score = state.score + 1;
    },
    resetScore: (state) => {
      state.score = 0;
    },
  },
});

export const { incrementScore,resetScore } = scoreSlice.actions;
export default scoreSlice.reducer;
