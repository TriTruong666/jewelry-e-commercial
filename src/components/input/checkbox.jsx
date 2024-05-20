import "../../styles/input/input.css";
import { useState, useEffect } from "react";
const Checkbox = ({ handleGetArray, defaultChecked = [] }) => {
  const [checkedValues, setCheckedValues] = useState(defaultChecked);
  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    setCheckedValues((prevCheckedValues) => {
      if (checked) {
        return [...prevCheckedValues, value];
      } else {
        return prevCheckedValues.filter((check) => check !== value);
      }
    });
  };

  useEffect(() => {
    handleGetArray(checkedValues);
  }, [checkedValues]);
  return (
    <div className="checkbox-container">
      <span>Select material</span>
      <div className="checkbox">
        <div className="checkbox-item">
          <input
            type="checkbox"
            id="diamond"
            name="material"
            value="Diamond"
            onChange={handleCheckboxChange}
            checked={checkedValues.includes("Diamond")}
          />
          <label htmlFor="diamond">Diamond</label>
        </div>
        <div className="checkbox-item">
          <input
            type="checkbox"
            id="gold"
            name="material"
            value="Gold"
            onChange={handleCheckboxChange}
            checked={checkedValues.includes("Gold")}
          />
          <label htmlFor="gold">Gold</label>
        </div>
        <div className="checkbox-item">
          <input
            type="checkbox"
            id="silver"
            name="material"
            value="Silver"
            onChange={handleCheckboxChange}
            checked={checkedValues.includes("Silver")}
          />
          <label htmlFor="silver">Silver</label>
        </div>
      </div>
    </div>
  );
};
export default Checkbox;
