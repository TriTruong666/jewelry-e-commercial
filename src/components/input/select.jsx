import React from "react";
import "../../styles/input/input.css";

const Select = ({ handleOnChange, defaultInput }) => {
  return (
    <div className="select-container">
      <select
        className="select"
        name="type"
        id="type"
        onChange={handleOnChange}
        defaultValue={defaultInput || ""}
      >
        <option value="">Type of product</option>
        <option value="Bracelet">Bracelet</option>
        <option value="Ring">Ring</option>
        <option value="Earrings">Earrings</option>
        <option value="Necklaces">Necklaces</option>
      </select>
      <span className="material-symbols-outlined">expand_more</span>
    </div>
  );
};
export default Select;
