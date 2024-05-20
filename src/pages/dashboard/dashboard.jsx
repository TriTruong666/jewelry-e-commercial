import "../../styles/dashboard/mainDashboard.css";
import adminImg from "../../assets/blog3.jpg";
import { Link, Outlet } from "react-router-dom";
import ProductModal from "../../components/modal/addProductModal";
import DeleteModal from "../../components/modal/deleteModal";
import UpdateModal from "../../components/modal/updateModal";
import { useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Dashboard = () => {
  const showProductModal = useSelector((state) => state.modal.isToggleModal);
  const showDeleteModal = useSelector((state) => state.delmodal.isToggleModal);
  const showUpdateModal = useSelector(
    (state) => state.updatemodal.isToggleModal
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
          {showUpdateModal && <UpdateModal />}
          <div className="inner-main">
            <Outlet />
          </div>
        </div>
        <ToastContainer />
      </main>
    </>
  );
};
export default Dashboard;
