import "./styles/main/app.css";
import Header from "./components/header/header";
import Hero from "./components/main/hero";
import Brand from "./components/main/brand";
import AboutUs from "./components/main/about";
import Product from "./components/main/newProduct";
import Collection from "./components/main/collection";
import Blog from "./components/main/blog";
import Subcribe from "./components/main/subcribe";
import Footer from "./components/footer/footer";

function App() {
  return (
    <div className="main-container">
      <Header />
      <Hero />
      <Brand />
      <AboutUs />
      <Product />
      <Collection />
      <Blog />
      <Subcribe />
      <Footer />
    </div>
  );
}

export default App;
