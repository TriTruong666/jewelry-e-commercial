import { useState, useEffect } from "react";
import NavDash from "../../components/dashboard/dashboardNav";
import AddButton from "../../components/button/addButton";
import Pagination from "../../components/pagination/pagination";
import List from "../../components/list/list";
import "../../styles/dashboard/production.css";
import { useQuery } from "@tanstack/react-query";
import * as service from "../../service/productService";
import ClipLoader from "react-spinners/ClipLoader";
import { useDispatch } from "react-redux";
import { toggleDelModal } from "../../redux/slices/deleteSlice";
import { toggleUpdateModal } from "../../redux/slices/updateSlice";
import { setProductId } from "../../redux/slices/productID";
import { setOneProductData } from "../../redux/slices/oneProductData";
import "react-toastify/dist/ReactToastify.css";

const ProductionDash = () => {
  const [productData, setProductData] = useState([]);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(7);
  const [totalProducts, setTotalProducts] = useState(null);
  const [loadingData, setLoadingData] = useState(false);
  const [isServerClosed, setIsServerClosed] = useState(false);
  const [isEmptyList, setIsEmptyList] = useState(false);
  const [preventModal, setPreventModal] = useState(false);
  const query = useQuery({
    queryKey: ["products", page, limit],
    queryFn: () => service.getAllProducts(page, limit),
    placeholderData: true,
    refetchOnWindowFocus: false,
  });
  // redux
  const dispatch = useDispatch();
  const handleToggleDelModal = (productId) => {
    dispatch(setProductId(productId));
    dispatch(toggleDelModal());
  };
  const handleToggleUpdateModal = (productId) => {
    const productToUpdate = productData.find(
      (product) => product._id === productId
    );
    dispatch(setProductId(productId));
    dispatch(setOneProductData(productToUpdate));
    dispatch(toggleUpdateModal());
  };
  // paginate
  const getActivePage = (newPage) => {
    setPage(newPage);
  };
  useEffect(() => {
    if (query.error) {
      setIsServerClosed(true);
      setPreventModal(true);
    }
    if (query.data) {
      setTotalProducts(query.data.totalProduct);
      if (totalProducts < 8) {
        setPage(1);
      }
      setIsEmptyList(false);
      setPreventModal(false);
      setIsServerClosed(false);
      setProductData(query.data.result || []);
      if (
        query.isRefetching ||
        query.isPending ||
        query.isFetching ||
        query.isLoading
      ) {
        setLoadingData(true);
        setTimeout(() => {
          setLoadingData(false);
        }, 1000);
      }
    }
    if (productData.length === 0 && query.data) {
      setIsEmptyList(true);
    } else {
      setIsEmptyList(false);
    }
  }, [
    query.data,
    query.isRefetching,
    query.isPending,
    query.isFetching,
    query.isLoading,
    productData.length,
    page,
    totalProducts,
  ]);
  // get product Id
  return (
    <>
      <NavDash name="Products Manager" />
      <div className="production-container">
        <div className="inner-production">
          <div className="buttons">
            <AddButton
              className="addbtn"
              icon="add"
              name="Add product"
              preventModal={preventModal}
            />
            <div className="other-btn">
              <div className="search-bar">
                <input type="text" placeholder="Search product" />
                <span className="material-symbols-outlined">search</span>
              </div>
            </div>
          </div>
          <table className="product-table">
            <thead>
              <tr>
                <th>Title</th>
                <th>Name</th>
                <th>Price</th>
                <th>In Stock</th>
                <th>Type</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {isServerClosed ? (
                <h2 className="server-closed">Server Is Closed Now !!!</h2>
              ) : (
                <></>
              )}
              {isEmptyList ? (
                <h2 className="server-closed">Product List Is Empty !!!</h2>
              ) : (
                <></>
              )}
              {loadingData ? (
                <div className="loader">
                  <ClipLoader size={70} color="#ffffff"></ClipLoader>
                </div>
              ) : (
                <List
                  productData={productData}
                  handleToggleDelModal={handleToggleDelModal}
                  handleToggleUpdateModal={handleToggleUpdateModal}
                />
              )}
            </tbody>
          </table>
          <Pagination
            totalProducts={totalProducts}
            limit={limit}
            currentPage={page}
            getActivePage={getActivePage}
          />
        </div>
      </div>
    </>
  );
};
export default ProductionDash;
