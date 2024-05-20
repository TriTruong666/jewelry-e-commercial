import React from "react";
import "../../styles/input/input.css";
const Input = ({ type, label, name, defaultInput, handleOnChange }) => {
  return (
    <div className="input">
      <input
        maxLength="255"
        type={type}
        placeholder={label}
        name={name}
        onChange={handleOnChange}
        defaultValue={defaultInput || ""}
      />
    </div>
  );
};
export default Input;
