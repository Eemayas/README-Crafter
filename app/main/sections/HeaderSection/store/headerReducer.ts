import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initialProjectHeaderMkdr } from "../constants";

const initialState: string = initialProjectHeaderMkdr;

const headerSlice = createSlice({
  name: "contributors",
  initialState,
  reducers: {
    setHeader: (state: string, action: PayloadAction<string>) => {
      return action.payload;
    },
    resetHeader: (state: string, action: PayloadAction<string>) => {
      return initialState;
    },
  },
});

export const { setHeader, resetHeader } = headerSlice.actions;

export default headerSlice.reducer;
