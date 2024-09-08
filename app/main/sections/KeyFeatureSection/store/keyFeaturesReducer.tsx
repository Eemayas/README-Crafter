import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initialKeyFeaturesMkdr } from "../constant";

const initialState = initialKeyFeaturesMkdr;

const keyFeatureSlice = createSlice({
  name: "keyFeatures",
  initialState,
  reducers: {
    setKeyFeatures: (state: string, action: PayloadAction<string>) => {
      console.log({ value: action.payload });
      return action.payload;
    },
    resetKeyFeature: () => {
      return initialState;
    },
  },
});

export const { setKeyFeatures, resetKeyFeature } = keyFeatureSlice.actions;
export default keyFeatureSlice.reducer;
