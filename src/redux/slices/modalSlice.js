// src/redux/slices/modalSlice.js
import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  isToggleModal: false,
};
const modalSlice = createSlice({
  name: "addModal",
  initialState,
  reducers: {
    toggleModal: (state) => {
      state.isToggleModal = !state.isToggleModal;
    },
  },
});
export const { toggleModal } = modalSlice.actions;

export default modalSlice.reducer;
