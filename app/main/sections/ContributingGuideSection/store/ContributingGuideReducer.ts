import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initialContributingGuidelinesMkdr } from "../constant";

const initialState: string = initialContributingGuidelinesMkdr;

const contributingGuideSlice = createSlice({
  name: "contributingGuide",
  initialState,
  reducers: {
    setContributingGuide: (state: string, action: PayloadAction<string>) => {
      console.log({ contributiongude: action.payload });
      console.log({ value: action.payload });
      return action.payload;
    },
    resetContributingGuide: (state: string, action: PayloadAction<string>) => {
      return initialContributingGuidelinesMkdr;
    },
  },
});

export const { setContributingGuide, resetContributingGuide } =
  contributingGuideSlice.actions;

export default contributingGuideSlice.reducer;
