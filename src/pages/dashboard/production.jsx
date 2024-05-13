import { useState, useEffect } from "react";
import NavDash from "../../components/dashboard/dashboardNav";
import AddButton from "../../components/button/addButton";
import "../../styles/dashboard/production.css";
import { useQuery } from "@tanstack/react-query";
import * as service from "../../service/productService";
import ClipLoader from "react-spinners/ClipLoader";
import { ToastContainer, Zoom, toast } from "react-toastify";
AddButton;
const ProductionDash = () => {
  const [productData, setProductData] = useState([]);
  const [loadingData, setLoadingData] = useState(false);
  const query = useQuery({
    queryKey: ["products"],
    queryFn: service.getAllProducts,
    refetchOnWindowFocus: false,
  });
  useEffect(() => {
    if (query.data) {
      setProductData(query.data.result || []);
      if (query.isRefetching || query.isPending) {
        setLoadingData(true);
        setTimeout(() => {
          setLoadingData(false);
        }, 2000);
      }
    }
  }, [query.data, query.isRefetching, query.isPending]);
  // get product Id
  const handleRowClick = (productId) => {
    navigator.clipboard.writeText(productId).then(() => {
      toast.success("Saved to clipboard!", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
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
              <span id="delete" className="material-symbols-outlined">
                delete_forever
              </span>
              <span id="edit" className="material-symbols-outlined">
                edit
              </span>
            </div>
          </div>
          <table className="product-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Price</th>
                <th>In Stock</th>
                <th>Type</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {productData.map((product) => (
                <tr
                  key={product._id}
                  onClick={() => handleRowClick(product._id)}
                >
                  <td className="id">{product._id}</td>
                  <td>{product.name}</td>
                  <td>{product.price}$</td>
                  <td>{product.countInStock}</td>
                  <td>{product.type}</td>
                  <td>Action</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
export default ProductionDash;
