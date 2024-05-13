import React from "react";
import "../../styles/main/newProduct.css";
import PrimaryButton from "../button/primaryBtn";
import CardProduct from "../card/productCard1";
import products from "../card/products";
import { useRef } from "react";
const Product = () => {
  const slideRef = useRef(null);

  const scrollToNext = () => {
    if (slideRef.current) {
      slideRef.current.scrollBy({
        left: 440, // You can adjust the scroll distance as needed
        behavior: "smooth",
      });
    }
  };
  const scrollToPrev = () => {
    if (slideRef.current) {
      slideRef.current.scrollBy({
        left: -440, // You can adjust the scroll distance as needed
        behavior: "smooth",
      });
    }
  };
  return (
    <div className="new-container">
      <div className="new-header">
        <strong>NEW ERA INSPIRATIONS</strong>
        <h2>NEW PRODUCTS</h2>
      </div>
      <div className="new-slide">
        <span
          id="slide-btn1"
          className="material-symbols-outlined"
          onClick={scrollToNext}
        >
          navigate_next
        </span>
        <span
          id="slide-btn2"
          className="material-symbols-outlined"
          onClick={scrollToPrev}
        >
          navigate_before
        </span>
        <div className="slide" ref={slideRef}>
          {products.map((item, index) => (
            <CardProduct
              key={index + 1}
              src={item.src}
              name={item.name}
              des={item.description}
              price={item.price}
            ></CardProduct>
          ))}
        </div>
      </div>
      <div className="new-button">
        <PrimaryButton
          path="/productions"
          content="See all products"
        ></PrimaryButton>
      </div>
    </div>
  );
};
export default Product;
