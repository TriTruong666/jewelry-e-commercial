import { useState, useEffect } from "react";
import NavDash from "../../components/dashboard/dashboardNav";
import AddButton from "../../components/button/addButton";
import "../../styles/dashboard/production.css";
import { useQuery } from "@tanstack/react-query";
import * as service from "../../service/productService";
import ClipLoader from "react-spinners/ClipLoader";
import { showToast } from "../../redux/slices/toastSlice";
import { Zoom, toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { toggleDelModal } from "../../redux/slices/deleteSlice";
import "react-toastify/dist/ReactToastify.css";
const ProductionDash = () => {
  const [productData, setProductData] = useState([]);
  const [loadingData, setLoadingData] = useState(false);
  const [isServerClosed, setIsServerClosed] = useState(false);
  const query = useQuery({
    queryKey: ["products"],
    queryFn: service.getAllProducts,
    refetchOnWindowFocus: false,
  });
  // redux
  const dispatch = useDispatch();
  const handleToggleDelModal = () => {
    dispatch(toggleDelModal());
  };
  useEffect(() => {
    if (query.error) {
      setIsServerClosed(true);
    }
    if (query.data) {
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
  }, [
    query.data,
    query.isRefetching,
    query.isPending,
    query.isFetching,
    query.isLoading,
  ]);
  // get product Id
  const handleRowClick = (productId) => {
    navigator.clipboard
      .writeText(productId)
      .then(() => {
        dispatch(showToast());
      })
      .then(() => {
        toast.success("Copied product ID !", {
          position: "top-right",
          autoClose: 1500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          theme: "dark",
          transition: Zoom,
        });
      });
  };
  return (
    <>
      <NavDash name="Products Manager" />
      <div className="production-container">
        <div className="inner-production">
          <div className="buttons">
            <AddButton className="addbtn" icon="add" name="Add product" />
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
              {loadingData ? (
                <div className="loader">
                  <ClipLoader size={70} color="#ffffff"></ClipLoader>
                </div>
              ) : (
                <>
                  {productData.map((product) => (
                    <tr
                      key={product._id}
                      onClick={() => handleRowClick(product._id)}
                    >
                      <td>{product.title}</td>
                      <td>{product.name}</td>
                      <td>{product.price}$</td>
                      <td>{product.countInStock}</td>
                      <td>{product.type}</td>
                      <td className="action">
                        <span
                          onClick={handleToggleDelModal}
                          className="material-symbols-outlined"
                        >
                          delete_forever
                        </span>
                        <span className="material-symbols-outlined">edit</span>
                      </td>
                    </tr>
                  ))}
                </>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
export default ProductionDash;
