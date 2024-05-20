import Input from "../input/input";
import "../../styles/modal/deleteModal.css";
import { useDispatch } from "react-redux";
import { toggleDelModal } from "../../redux/slices/deleteSlice";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useSelector } from "react-redux";
import * as productService from "../../service/productService";
import { Zoom, toast } from "react-toastify";
const DeleteModal = () => {
  const dispatch = useDispatch();
  const productID = useSelector((state) => state.productID.productID);
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
      toast.warning("Delete Failed !", {
        position: "top-right",
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Zoom,
      });
    } else if (!mutation.error) {
      toast.success("Delete Success !", {
        position: "top-right",
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Zoom,
      });
      mutation.mutateAsync(productID);
      handleToggleDelModal();
    }
  };
  //   func
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
          <div className="delete">
            <span>Are you sure to delete product:</span>
            <p>#{productID}</p>
            <button onClick={handleDeleteProduct}>Delete</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default DeleteModal;
