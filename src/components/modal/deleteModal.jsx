import Input from "../input/input";
import "../../styles/modal/deleteModal.css";
import { useDispatch } from "react-redux";
import { toggleDelModal } from "../../redux/slices/deleteSlice";
import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import * as productService from "../../service/productService";
const DeleteModal = () => {
  const [productId, setProductId] = useState("");
  const dispatch = useDispatch();
  //   redux
  const handleToggleDelModal = () => {
    dispatch(toggleDelModal());
  };
  // mutation
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: productService.deleteProductById,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["products"],
      });
    },
  });
  const handleDeleteProduct = (e) => {
    e.preventDefault();
    if (mutation.error) {
      alert("not found?");
    } else if (!mutation.error) {
      mutation.mutateAsync(productId);
    }
  };
  //   func
  const handleOnChange = (e) => {
    setProductId(e.target.value);
  };
  return (
    <div className="cover">
      <div className="delete-container">
        <div className="inner-container">
          <div className="modal-header">
            <h2>Delete Product</h2>
            <span
              className="material-symbols-outlined"
              onClick={handleToggleDelModal}
            >
              close
            </span>
          </div>
          <form
            action=""
            className="form-del"
            autoComplete="off"
            spellCheck="false"
          >
            <Input
              type="text"
              label="Enter ID to delete..."
              name="id"
              handleOnChange={handleOnChange}
            />
            <button onClick={handleDeleteProduct}>Delete</button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default DeleteModal;
