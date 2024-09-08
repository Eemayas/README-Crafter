import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initialProjectOverviewMkdr } from "../constants";

const initialState = initialProjectOverviewMkdr;

const projectOverviewSlice = createSlice({
  name: "projectOverviewReducer",
  initialState,
  reducers: {
    setProjectOverview: (state: string, action: PayloadAction<string>) => {
      console.log({ value: action.payload });
      return action.payload;
    },
    resetProjectOverview: (state: string, action: PayloadAction<string>) => {
      return initialState;
    },
  },
});

export const { setProjectOverview, resetProjectOverview } =
  projectOverviewSlice.actions;
export default projectOverviewSlice.reducer;
