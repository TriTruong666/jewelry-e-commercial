import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isToggleModal: false,
};
const deleteModalSlice = createSlice({
  name: "deleteModal",
  initialState,
  reducers: {
    toggleDelModal: (state) => {
      state.isToggleModal = !state.isToggleModal;
    },
  },
});
export const { toggleDelModal } = deleteModalSlice.actions;
export default deleteModalSlice.reducer;
