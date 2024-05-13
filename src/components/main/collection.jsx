import React from "react";
import "../../styles/main/collection.css";
import CardCollection from "../card/collectionCard1";
import PrimaryButton from "../button/primaryBtn";
import collections from "../card/collection";
import collection1 from "../../assets/collection1.jpg";
import collection5 from "../../assets/collection5.jpg";
const img = [collection1, collection5];
const Collection = () => {
  return (
    <div className="collection-container">
      <div className="collection-header">
        <strong>BEAUTY PAGE</strong>
        <h2>PEARL COLLECTION</h2>
      </div>
      <div className="collection">
        <img id="collection1" src={img[0]} alt="" />
        <div className="collection-content-container">
          {collections.map((card, index) => (
            <CardCollection
              key={index + 1}
              src={card.src}
              name={card.name}
              price={card.price}
            />
          ))}
          <img src={img[1]} alt="" />
        </div>
      </div>
      <div className="collection-btn">
        <PrimaryButton path="/collection" content="Explore Pearl Collection" />
      </div>
    </div>
  );
};
export default Collection;
