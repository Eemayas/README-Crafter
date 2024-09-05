/** @format */

import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";

// Define the types for the state
export interface SpinnerState {
  isShow: boolean;
}

interface ModalState {
  isShow: boolean;
  title: string;
  description: string;
}

interface ModalSliceState {
  spinner: SpinnerState;
  successModal: ModalState;
  errorModal: ModalState;
}

// Initial state
const initialState: ModalSliceState = {
  spinner: { isShow: false },
  successModal: {
    isShow: false,
    title: "Success",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, consequatur.",
  },
  errorModal: {
    isShow: false,
    title: "Error",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, consequatur.",
  },
};

// Define a thunk for async operations (if needed)
export const showSpinnerAsync = createAsyncThunk<boolean, boolean>(
  "modal/showSpinnerAsync",
  async (shouldShow: boolean, thunkAPI: any) => {
    return new Promise<boolean>((resolve) => {
      setTimeout(() => {
        resolve(shouldShow);
      }, 1000);
    });
  },
);

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    showSpinner: (state: ModalSliceState, action: PayloadAction<boolean>) => {
      state.spinner.isShow = action.payload;
    },
    showSuccessModal: (
      state: ModalSliceState,
      action: PayloadAction<Partial<ModalState>>,
    ) => {
      state.successModal = { ...state.successModal, ...action.payload };
    },
    showErrorModal: (
      state: ModalSliceState,
      action: PayloadAction<Partial<ModalState>>,
    ) => {
      state.errorModal = { ...state.errorModal, ...action.payload };
    },
  },
  extraReducers: (builder: {
    addCase: (
      arg0: any,
      arg1: (state: ModalSliceState, action: PayloadAction<boolean>) => void,
    ) => void;
  }) => {
    builder.addCase(
      showSpinnerAsync.fulfilled,
      (state: ModalSliceState, action: PayloadAction<boolean>) => {
        state.spinner.isShow = action.payload;
      },
    );
  },
});

// Export actions
export const { showSpinner, showSuccessModal, showErrorModal } =
  modalSlice.actions;

// Export reducer
export default modalSlice.reducer;
