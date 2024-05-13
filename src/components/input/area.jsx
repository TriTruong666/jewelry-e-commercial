import React from "react";
import "../../styles/input/input.css";
const Area = ({ handleOnChange }) => {
  return (
    <div className="area-container">
      <textarea
        maxLength="1000"
        name="description"
        id="des"
        placeholder="Product description"
        onChange={handleOnChange}
      ></textarea>
    </div>
  );
};
export default Area;
