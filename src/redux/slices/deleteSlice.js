import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  toggleDeleteModal: false,
};
const deleteModalSlice = createSlice({
  name: "deleteModal",
  initialState,
  reducers: {
    toggleDelModal: (state) => {
      state.toggleDeleteModal = !state.toggleDeleteModal;
    },
  },
});
export const { toggleDelModal } = deleteModalSlice.actions;
export default deleteModalSlice.reducer;
