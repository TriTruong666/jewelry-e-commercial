import React from "react";
import "../../styles/card/productCard1.css";
const CardProduct = ({ src, name, des, price }) => {
  return (
    <div className="card-container">
      <img src={src} alt="" />
      <strong>{name}</strong>
      <span>{des}</span>
      <p>{price}$</p>
    </div>
  );
};
export default CardProduct;
