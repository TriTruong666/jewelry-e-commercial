import { useEffect, useState } from "react";
import { toggleUpdateModal } from "../../redux/slices/updateSlice";
import { useDispatch, useSelector } from "react-redux";
import "../../styles/modal/addProduct.css";
import Input from "../input/input";
import InputNumber from "../input/inputNumber";
import InputImg from "../input/inputImage";
import Select from "../input/select";
import Checkbox from "../input/checkbox";
import Area from "../input/area";
import * as productService from "../../service/productService";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Zoom, toast } from "react-toastify";

const UpdateModal = () => {
  // redux
  const dispatch = useDispatch();
  const productID = useSelector((state) => state.productID.productID);
  const reduxData = useSelector((state) => state.oneProductData.oneProductData);
  // states
  const [invalidInput, setInvalidInput] = useState(false);
  const [updateData, setUpdateData] = useState({
    name: "",
    image: "",
    type: "",
    description: "",
    countInStock: "",
    price: "",
    title: "",
    material: [],
  });
  // mutation
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: (variables) =>
      productService.updateProductById(variables.id, variables.data),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["products"],
      });
    },
  });
  // func
  const handleOnChange = (e) => {
    setUpdateData({
      ...updateData,
      [e.target.name]: e.target.value,
    });
  };
  const handleConvertToNumber = (e) => {
    const value = e.target.value;
    // Check if the value is a valid number
    if (!isNaN(value)) {
      setUpdateData({
        ...updateData,
        [e.target.name]: parseInt(value),
      });
      setInvalidInput(false);
    } else {
      setInvalidInput(true);
    }
  };
  const handleGetImage = (url) => {
    setUpdateData({
      ...updateData,
      image: url,
    });
  };
  const handleGetArray = (checkedValues) => {
    setUpdateData({
      ...updateData,
      material: checkedValues,
    });
  };
  const handleToggleModal = () => {
    dispatch(toggleUpdateModal());
  };
  const handleUpdateProduct = (e) => {
    try {
      e.preventDefault();
      if (invalidInput) {
        toast.warn("Invalid Input", {
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
        mutation.mutateAsync({ id: productID, data: updateData });
        toast.success("Updated Success 😘", {
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
        handleToggleModal();
      } else {
        mutation.reset();
        handleToggleModal();
        toast.warning("Failed due to error !", {
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
      }
    } catch (err) {
      console.error(err);
    }
  };
  // useEffect
  useEffect(() => {
    if (reduxData) {
      setUpdateData(reduxData);
    }
  }, [reduxData]);
  return (
    <div className="cover">
      <div className="modal-container">
        <div className="inner-modal">
          <div className="modal-header">
            <h2>Update Product</h2>
            <span
              className="material-symbols-outlined"
              onClick={handleToggleModal}
            >
              close
            </span>
          </div>
          <form
            action=""
            className="form-input"
            autoComplete="off"
            spellCheck="false"
          >
            <div className="section-1">
              <Input
                type="text"
                label="Enter name"
                name="name"
                handleOnChange={handleOnChange}
                defaultInput={reduxData && reduxData.name}
              />
              <InputNumber
                type="text"
                label="Enter price ($)"
                name="price"
                handleConvertToNumber={handleConvertToNumber}
                defaultInput={reduxData && reduxData.price}
              />
              <InputNumber
                type="text"
                label="In Stock"
                name="countInStock"
                handleConvertToNumber={handleConvertToNumber}
                defaultInput={reduxData && reduxData.countInStock}
              />
            </div>
            <Input
              type="text"
              label="Enter Title"
              name="title"
              handleOnChange={handleOnChange}
              defaultInput={reduxData && reduxData.title}
            />
            <div className="section-2">
              <Select
                handleOnChange={handleOnChange}
                defaultInput={reduxData && reduxData.type}
              />
              <Checkbox
                handleGetArray={handleGetArray}
                defaultChecked={reduxData && reduxData.material}
              />
            </div>
            <div className="section-3">
              <InputImg
                name="image"
                handleGetImage={handleGetImage}
                defaultInput={reduxData && reduxData.image}
              />
              <Area
                handleOnChange={handleOnChange}
                defaultInput={reduxData && reduxData.description}
              />
            </div>
            <div className="confirm">
              <span className="confirm-btn" onClick={handleToggleModal}>
                Cancel
              </span>
              <button
                className={invalidInput ? "confirm-btn" : "confirm-btn disable"}
                type="submit"
                onClick={handleUpdateProduct}
              >
                Confirm
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default UpdateModal;
