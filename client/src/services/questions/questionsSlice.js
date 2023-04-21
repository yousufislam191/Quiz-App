import { createSlice } from "@reduxjs/toolkit";

export const questionSlice = createSlice({
  name: "question",
  initialState: {
    queue: [],
    answer: [],
    trace: 0,
  },
  reducers: {
    startExamActions: (state, action) => {
      let { question, answers } = action.payload;
      return {
        ...state,
        queue: question,
        answers,
      };
    },
    moveNextActions: (state) => {
      return {
        ...state,
        trace: state.trace + 1,
      };
    },
    movePreviousActions: (state) => {
      return {
        ...state,
        trace: state.trace - 1,
      };
    },
    resetAllActions: () => {
      return {
        queue: [],
        answer: [],
        trace: 0,
      };
    },
  },
});

export const {
  startExamActions,
  moveNextActions,
  movePreviousActions,
  resetAllActions,
} = questionSlice.actions;
export default questionSlice.reducer;
