import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initalFolderStructureMarkdown } from "../constants";

const initialState = initalFolderStructureMarkdown;

const folderStructureSlice = createSlice({
  name: "folderStructure",
  initialState,
  reducers: {
    setFolderstructure: (state: string, action: PayloadAction<string>) => {
      return action.payload;
    },
    resetFolderstructure: (state: string, action: PayloadAction<string>) => {
      return initialState;
    },
  },
});

export const { setFolderstructure, resetFolderstructure } =
  folderStructureSlice.actions;
export default folderStructureSlice.reducer;
