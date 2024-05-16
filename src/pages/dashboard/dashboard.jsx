import "../../styles/dashboard/mainDashboard.css";
import adminImg from "../../assets/blog3.jpg";
import { Link, Outlet } from "react-router-dom";
import ProductModal from "../../components/modal/addProductModal";
import DeleteModal from "../../components/modal/deleteModal";
import { useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Dashboard = () => {
  const showProductModal = useSelector((state) => state.modal.showProductModal);
  const showToast = useSelector((state) => state.toast.showToast);
  const showDeleteModal = useSelector(
    (state) => state.delmodal.toggleDeleteModal
  );
  return (
    <>
      <main className="dashboard-container">
        <div className="sidebar-container">
          <img src={adminImg} alt="" />
          <div className="navigation-container">
            <div className="nav-item">
              <Link to="/dashboard">
                <span className="material-symbols-outlined">dashboard</span>
              </Link>
            </div>
            <div className="nav-item">
              <Link to="/dashboard/user">
                <span className="material-symbols-outlined">
                  account_circle
                </span>
              </Link>
            </div>
            <div className="nav-item">
              <Link to="/dashboard/products">
                <span className="material-symbols-outlined">inventory_2</span>
              </Link>
            </div>
          </div>
        </div>
        <div className="main-index">
          {showDeleteModal && <DeleteModal />}
          {showProductModal && <ProductModal />}
          <div className="inner-main">
            <Outlet />
          </div>
        </div>
        <ToastContainer />
        {/* {showToast && <ToastContainer />} */}
      </main>
    </>
  );
};
export default Dashboard;
