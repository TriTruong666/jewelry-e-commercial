import axios from "axios";
export const createProduct = async (data) => {
  try {
    const res = await axios.post(
      "http://localhost:3000/v1/product/addProduct",
      data
    );
    return res.data;
  } catch (err) {
    console.error("Error", err);
  }
};
export const getAllProducts = async () => {
  try {
    const res = await axios.get("http://localhost:3000/v1/product/getProduct");
    return res.data;
  } catch (err) {
    console.error("Error", err);
  }
};
export const deleteProductById = async (id) => {
  try {
    const res = await axios.delete(
      `http://localhost:3000/v1/product/delete/${id}`
    );
    return res.data;
  } catch (err) {
    console.error("Error", err);
  }
};
