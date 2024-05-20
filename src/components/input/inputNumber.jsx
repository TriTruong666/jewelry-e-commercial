import React from "react";
import "../../styles/input/input.css";

const InputNumber = ({
  type,
  label,
  name,
  defaultInput,
  handleConvertToNumber,
  invalidInput,
}) => {
  return (
    <div className="input">
      <input
        maxLength="255"
        type={type}
        placeholder={label}
        name={name}
        onChange={handleConvertToNumber}
        defaultValue={defaultInput || ""}
      />
    </div>
  );
};
export default InputNumber;
