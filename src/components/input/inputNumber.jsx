import React from "react";
import "../../styles/input/input.css";

const InputNumber = ({
  type,
  label,
  name,
  handleConvertToNumber,
  invalidInput,
  id,
}) => {
  return (
    <div className="input">
      <input
        maxLength="255"
        type={type}
        placeholder={label}
        name={name}
        onChange={handleConvertToNumber}
      />
    </div>
  );
};
export default InputNumber;
