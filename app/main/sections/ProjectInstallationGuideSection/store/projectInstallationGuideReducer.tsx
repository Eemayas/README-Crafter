import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initialProjectGuideMkdr } from "../constant";

const initialState = initialProjectGuideMkdr;

const projectInstallationGuideSlice = createSlice({
  name: "projectInstallationGuideReducer",
  initialState,
  reducers: {
    setProjectInstallationGuide: (
      state: string,
      action: PayloadAction<string>,
    ) => {
      console.log({ value: action.payload });
      return action.payload;
    },
    resetProjectInstallationGuide: (
      state: string,
      action: PayloadAction<string>,
    ) => {
      return initialState;
    },
  },
});

export const { setProjectInstallationGuide, resetProjectInstallationGuide } =
  projectInstallationGuideSlice.actions;
export default projectInstallationGuideSlice.reducer;
