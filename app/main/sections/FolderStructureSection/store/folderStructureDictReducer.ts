import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TFolderStructureDict } from "../types";

const initialState: TFolderStructureDict = {};

const folderStructureDictSlice = createSlice({
  name: "folderStructure",
  initialState,
  reducers: {
    setFolderstructureDict: (
      state: TFolderStructureDict,
      action: PayloadAction<TFolderStructureDict>,
    ) => {
      console.log({ value: action.payload });
      return action.payload;
    },
    resetFolderstructureDict: (
      state: TFolderStructureDict,
      action: PayloadAction<TFolderStructureDict>,
    ) => {
      return initialState;
    },
  },
});

export const { setFolderstructureDict, resetFolderstructureDict } =
  folderStructureDictSlice.actions;
export default folderStructureDictSlice.reducer;
