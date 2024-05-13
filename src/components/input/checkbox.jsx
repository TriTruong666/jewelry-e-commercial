import "../../styles/input/input.css";
import { useState, useEffect } from "react";
const Checkbox = ({ handleGetArray }) => {
  const [checkedValues, setCheckedValues] = useState([]);

  // const handleCheckboxChange = (e) => {
  //   const { value, checked } = e.target;
  //   if (checked) {
  //     setCheckedValues([...checkedValues, value]);
  //   } else {
  //     setCheckedValues(checkedValues.filter((check) => check !== value));
  //   }
  // };
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
          />
          <label htmlFor="silver">Silver</label>
        </div>
      </div>
    </div>
  );
};
export default Checkbox;
