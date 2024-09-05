/** @format */

import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";

interface Repo {
  repoName: string;
  repoLink: string;
}

interface RepoState {
  repoName: string;
  repoLink: string;
}

const initialState: RepoState = {
  repoName: "",
  repoLink: "",
};

const repoSlice = createSlice({
  name: "repo",
  initialState,
  reducers: {
    setRepo: (state, action: PayloadAction<Repo>) => {
      console.log({ action: action.payload });
      state.repoName = action.payload.repoName;
      state.repoLink = action.payload.repoLink;
    },

    clearRepo: (state) => {
      state.repoName = "";
      state.repoLink = "";
    },
  },
});

export const { setRepo, clearRepo } = repoSlice.actions;
export default repoSlice.reducer;
