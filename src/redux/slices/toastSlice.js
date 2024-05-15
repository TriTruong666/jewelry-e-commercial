import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showToast: false,
};
const toastSlice = createSlice({
  name: "toast",
  initialState,
  reducers: {
    showToast: (state) => {
      state.showToast = true;
    },
  },
});
export const { showToast } = toastSlice.actions;
export default toastSlice.reducer;
