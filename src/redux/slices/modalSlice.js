// src/redux/slices/modalSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showProductModal: false,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    toggleModal: (state) => {
      state.showProductModal = !state.showProductModal;
    },
  },
});

export const { toggleModal } = modalSlice.actions;

export default modalSlice.reducer;
