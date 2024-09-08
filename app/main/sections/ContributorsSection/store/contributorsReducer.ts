import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initialContributorsMkdr } from "../constants";

const initialState: string = initialContributorsMkdr;

const contributorSlice = createSlice({
  name: "contributors",
  initialState,
  reducers: {
    setContributors: (state: string, action: PayloadAction<string>) => {
      console.log({ value: action.payload });
      return action.payload;
    },
    resetContributors: (state: string, action: PayloadAction<string>) => {
      return initialState;
    },
  },
});

export const { setContributors, resetContributors } = contributorSlice.actions;

export default contributorSlice.reducer;
