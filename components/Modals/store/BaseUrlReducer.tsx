import { createSlice, PayloadAction } from "@reduxjs/toolkit";
const initialState: string = "http://127.0.0.1:5000";

const baseUrlSlice = createSlice({
  name: "baseUrl",
  initialState,
  reducers: {
    setBaseUrl: (state: string, action: PayloadAction<string>) => {
      return action.payload;
    },
    resetBaseUrl: (state: string, action: PayloadAction<string>) => {
      return initialState;
    },
  },
});

export const { setBaseUrl, resetBaseUrl } = baseUrlSlice.actions;

export default baseUrlSlice.reducer;
