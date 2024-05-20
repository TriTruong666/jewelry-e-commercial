import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  productID: null,
};

const productIdSlice = createSlice({
  name: "productID",
  initialState,
  reducers: {
    getProductID: (state) => {
      return state.productID;
    },
    setProductId: (state, action) => {
      state.productID = action.payload;
    },
  },
});
export const { setProductId, getProductID } = productIdSlice.actions;
export default productIdSlice.reducer;
