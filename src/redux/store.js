import { configureStore } from "@reduxjs/toolkit";
import modalReducer from "./slices/modalSlice";
import toastReducer from "./slices/toastSlice";
import deleteReducer from "./slices/deleteSlice";
import productReducer from "./slices/productID";
import updateReducer from "./slices/updateSlice";
import productDataReducer from "./slices/productData";
import oneProductDataReducer from "./slices/oneProductData";
export default configureStore({
  reducer: {
    modal: modalReducer,
    toast: toastReducer,
    delmodal: deleteReducer,
    productID: productReducer,
    updatemodal: updateReducer,
    productData: productDataReducer,
    oneProductData: oneProductDataReducer,
  },
});
