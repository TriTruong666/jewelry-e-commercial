import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  productData: [],
};

const productDataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    setProductData: (state, action) => {
      state.productData = action.payload;
    },
    getProductData: (state) => {
      return state.productData;
    },
    updateProductData: (state, action) => {
      const { _id, updatedData } = action.payload;
      const index = state.productData.findIndex(
        (product) => product._id === _id
      );
      if (index !== -1) {
        state.productData[index] = {
          ...state.productData[index],
          ...updatedData,
        };
      }
    },
  },
});
export const { setProductData, getProductData, updateProductData } =
  productDataSlice.actions;
export default productDataSlice.reducer;
