import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initialSummaryGenerationMkdr } from "../constant";

const initialState = initialSummaryGenerationMkdr;

const summaryGenerationSlice = createSlice({
  name: "summaryGenerationReducer",
  initialState,
  reducers: {
    setSummaryGeneration: (state: string, action: PayloadAction<string>) => {
      console.log({ value: action.payload });
      console.log({ value: action.payload });
      return action.payload;
    },
    resetSummaryGeneration: (state: string, action: PayloadAction<string>) => {
      return initialState;
    },
  },
});

export const { setSummaryGeneration, resetSummaryGeneration } =
  summaryGenerationSlice.actions;
export default summaryGenerationSlice.reducer;
