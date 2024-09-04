/** @format */

import { configureStore } from "@reduxjs/toolkit";
import modalReducer from "@/components/Modals/store/ModalReducer";

const store = configureStore({
  reducer: {
    modal: modalReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
