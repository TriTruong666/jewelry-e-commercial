import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isToggleModal: false,
};
const updateSlice = createSlice({
  name: "updateModal",
  initialState,
  reducers: {
    toggleUpdateModal: (state) => {
      state.isToggleModal = !state.isToggleModal;
    },
  },
});
export const { toggleUpdateModal } = updateSlice.actions;
export default updateSlice.reducer;
