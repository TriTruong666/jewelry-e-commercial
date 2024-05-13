import { Route, Routes } from "react-router-dom";
import ReactDOM from "react-dom/client";
import App from "../App";
import Production from "../pages/jewelry/production";
import Collection from "../pages/collection/collection.jsx";
import About from "../pages/about-us/about";
import Blog from "../pages/blog/blog";
import Contact from "../pages/contact/contact.jsx";
import Cart from "../pages/cart/cart.jsx";
import Auth from "../pages/auth/auth.jsx";
import Dashboard from "../pages/dashboard/dashboard.jsx";
import User from "../pages/dashboard/user.jsx";
import ProductionDash from "../pages/dashboard/production.jsx";
import Home from "../pages/dashboard/home.jsx";
const PublicRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<App />}></Route>
      <Route path="/productions" element={<Production />}></Route>
      <Route path="/collection" element={<Collection />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="/blog" element={<Blog />}></Route>
      <Route path="/contact" element={<Contact />}></Route>
      <Route path="/cart" element={<Cart />}></Route>
      <Route path="/auth" element={<Auth />}></Route>
      <Route path="/dashboard" element={<Dashboard />}>
        <Route index element={<Home />}></Route>
        <Route path="/dashboard/user" element={<User />}></Route>
        <Route path="/dashboard/products" element={<ProductionDash />}></Route>
      </Route>
    </Routes>
  );
};
export default PublicRoutes;
