import { useEffect, useState } from "react";
import { toggleModal } from "../../redux/slices/modalSlice";
import { useDispatch } from "react-redux";
import "../../styles/modal/addProduct.css";
import Input from "../input/input";
import InputNumber from "../input/inputNumber";
import InputImg from "../input/inputImage";
import Select from "../input/select";
import Checkbox from "../input/checkbox";
import Area from "../input/area";
import * as productService from "../../service/productService";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import DefaultModal from "./defaulmodal";
const ProductModal = () => {
  // states
  const [formData, setFormData] = useState({
    name: "",
    image: "",
    type: "",
    description: "",
    countInStock: "",
    price: "",
    material: [],
  });
  const [isFilled, setIsFilled] = useState(false);
  const [errorModal, setErrorModal] = useState(false);
  const [filledModal, setFilledModal] = useState(false);
  const [duplicatedModal, setDuplicatedModal] = useState(false);
  const [successModal, setSuccessModal] = useState(false);
  const [invalidModal, setInvalidModal] = useState(false);
  const [invalidInput, setInvalidInput] = useState(false);
  // query
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: productService.createProduct,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["products"],
      });
    },
  });
  // redux function
  const dispatch = useDispatch();
  const handleToggleModal = () => {
    dispatch(toggleModal());
  };
  // handleForm
  const handleOnSubmitForm = async (e) => {
    try {
      e.preventDefault();
      if (invalidInput === true) {
        setInvalidModal(true);
        setTimeout(() => {
          setInvalidModal(false);
        }, 1500);
      } else if (isFilled === false) {
        setFilledModal(true);
        setTimeout(() => {
          setFilledModal(false);
        }, 1500);
      } else if (!mutation.isError) {
        setSuccessModal(true);
        mutation.mutateAsync(formData);
        setTimeout(() => {
          handleToggleModal();
        }, 2000);
      } else {
        setErrorModal(true);
        setTimeout(() => {
          mutation.reset();
          handleToggleModal();
        }, 1000);
      }
    } catch (err) {
      console.error(err);
    }
  };
  // get data function
  const handleOnChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleConvertToNumber = (e) => {
    const value = e.target.value;
    // Check if the value is a valid number
    if (!isNaN(value)) {
      setFormData({
        ...formData,
        [e.target.name]: parseInt(value),
      });
      setInvalidInput(false);
    } else {
      setInvalidInput(true);
    }
  };
  const handleGetArray = (checkedValues) => {
    setFormData({
      ...formData,
      material: checkedValues,
    });
  };
  const handleGetImage = (url) => {
    setFormData({
      ...formData,
      image: url,
    });
  };
  //
  useEffect(() => {
    const isFormFilled =
      Object.values(formData).every((value) => value !== "") &&
      formData.material.length > 0;
    setIsFilled(isFormFilled);
  }, [formData]);

  return (
    <div className="cover">
      {filledModal ? (
        <DefaultModal
          logo="error"
          mess="Please input all fields"
          status="error"
        ></DefaultModal>
      ) : (
        <></>
      )}
      {successModal ? (
        <DefaultModal
          logo="check_circle"
          mess="Added Success"
          status="success"
        ></DefaultModal>
      ) : (
        <></>
      )}
      {errorModal ? (
        <DefaultModal
          logo="error"
          mess="Somethings Wrong ?"
          status="error"
        ></DefaultModal>
      ) : (
        <></>
      )}
      {invalidModal ? (
        <DefaultModal
          logo="error"
          mess="Invalid Input !"
          status="error"
        ></DefaultModal>
      ) : (
        <></>
      )}
      {duplicatedModal ? (
        <DefaultModal
          logo="error"
          mess="Product existed"
          status="error"
        ></DefaultModal>
      ) : (
        <></>
      )}
      <div className="modal-container">
        <div className="inner-modal">
          <div className="modal-header">
            <h2>Add Product</h2>
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
            method="post"
          >
            <div className="section-1">
              <Input
                handleOnChange={handleOnChange}
                type="text"
                label="Enter name"
                name="name"
              />
              <InputNumber
                handleConvertToNumber={handleConvertToNumber}
                type="text"
                label="Enter price ($)"
                name="price"
                invalidInput={invalidInput}
              />
              <InputNumber
                handleConvertToNumber={handleConvertToNumber}
                type="text"
                label="In Stock"
                name="countInStock"
                invalidInput={invalidInput}
              />
            </div>
            <div className="section-2">
              <Select handleOnChange={handleOnChange} />
              <Checkbox handleGetArray={handleGetArray} />
            </div>
            <div className="section-3">
              <InputImg name="image" handleGetImage={handleGetImage} />
              <Area handleOnChange={handleOnChange} />
            </div>
            <div className="confirm">
              <span className="confirm-btn" onClick={handleToggleModal}>
                Cancel
              </span>
              <button
                className={isFilled ? "confirm-btn" : "confirm-btn disable"}
                type="submit"
                onClick={handleOnSubmitForm}
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
export default ProductModal;
