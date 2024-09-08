import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initialLicenseMkdr } from "../constant";

const initialState = initialLicenseMkdr;

const licenseSlice = createSlice({
  name: "licenseReducer",
  initialState,
  reducers: {
    setLicense: (state: string, action: PayloadAction<string>) => {
      console.log({ value: action.payload });
      return action.payload;
    },
    resetLicense: (state: string, action: PayloadAction<string>) => {
      return initialState;
    },
  },
});

export const { setLicense, resetLicense } = licenseSlice.actions;
export default licenseSlice.reducer;
