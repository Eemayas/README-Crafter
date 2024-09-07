import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initialContributingGuidelinesMkdr } from "../constant";

const initialState: string = initialContributingGuidelinesMkdr;

const contributingGuideSlice = createSlice({
  name: "contributingGuide",
  initialState,
  reducers: {
    setContributingGuide: (state: string, action: PayloadAction<string>) => {
      state = action.payload;
    },
    resetContributingGuide: (state: string, action: PayloadAction<string>) => {
      state = initialContributingGuidelinesMkdr;
    },
  },
});

export const { setContributingGuide, resetContributingGuide } =
  contributingGuideSlice.actions;

export default contributingGuideSlice.reducer;
