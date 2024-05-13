import React from "react";
import "../../styles/card/collectionCard1.css";
const CardCollection = ({ src, name, price }) => {
  return (
    <div className="collection-card-container">
      <img src={src} alt="" />
      <div className="collection-card-content">
        <span>{name}</span>
        <p>{price} $</p>
      </div>
    </div>
  );
};
export default CardCollection;
