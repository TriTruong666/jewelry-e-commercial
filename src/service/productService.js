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
export const getAllProducts = async (page, limit) => {
  try {
    const url = `http://localhost:3000/v1/product/getProduct?page=${page}&limit=${limit}`;
    const res = await axios.get(url);
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
export const updateProductById = async (id, data) => {
  try {
    const res = await axios.put(
      `http://localhost:3000/v1/product/update/${id}`,
      data
    );
    return res.data;
  } catch (err) {
    console.error("Error", err);
  }
};
