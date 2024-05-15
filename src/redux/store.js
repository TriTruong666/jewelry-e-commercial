import { configureStore } from "@reduxjs/toolkit";
import modalReducer from "./slices/modalSlice";
import toastReducer from "./slices/toastSlice";
import deleteReducer from "./slices/deleteSlice";
export default configureStore({
  reducer: {
    modal: modalReducer,
    toast: toastReducer,
    delmodal: deleteReducer,
  },
});
