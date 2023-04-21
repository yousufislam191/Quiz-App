import { combineReducers, configureStore } from "@reduxjs/toolkit";
import questionSlice from "./questions/questionsSlice";
import resultSlice from "./result/resultSlice";

const rootReducer = combineReducers({
  questions: questionSlice,
  result: resultSlice,
});

const store = configureStore({ reducer: rootReducer });
export default store;
