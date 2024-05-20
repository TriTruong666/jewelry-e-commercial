import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  oneProductData: {},
};

const oneProductDataSlice = createSlice({
  name: "onedata",
  initialState,
  reducers: {
    setOneProductData: (state, action) => {
      state.oneProductData = action.payload;
    },
    getProductData: (state) => {
      return state.oneProductData;
    },
  },
});
export const { setOneProductData, getProductData } =
  oneProductDataSlice.actions;
export default oneProductDataSlice.reducer;
