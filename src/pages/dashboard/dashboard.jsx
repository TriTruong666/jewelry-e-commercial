import "../../styles/dashboard/mainDashboard.css";
import adminImg from "../../assets/blog3.jpg";
import { Link, Outlet } from "react-router-dom";
import ProductModal from "../../components/modal/addProductModal";
import { useSelector } from "react-redux";
const Dashboard = () => {
  const showProductModal = useSelector((state) => state.modal.showProductModal);
  return (
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
              <span className="material-symbols-outlined">account_circle</span>
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
        {showProductModal && <ProductModal />}
        <div className="inner-main">
          <Outlet />
        </div>
      </div>
    </main>
  );
};
export default Dashboard;
