import React from "react";
import brand1 from "../../assets/Louis-Vuitton-logo.png";
import brand2 from "../../assets/kate-spade-logo.png";
import brand3 from "../../assets/pandora-logo.png";
import brand4 from "../../assets/w-kruk-logo.png";
import brand5 from "../../assets/swa-logo.png";
import "../../styles/main/brand.css";
const brands = [brand1, brand2, brand3, brand4, brand5];
export const Brand = () => {
  return (
    <div className="brand-container">
      <div className="brands">
        {brands.map((brand, index) => (
          <img key={index + 1} className="brand-img" src={brand} alt="" />
        ))}
      </div>
    </div>
  );
};
export default Brand;
