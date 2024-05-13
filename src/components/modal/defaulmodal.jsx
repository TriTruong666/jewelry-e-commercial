import React from "react";
import "../../styles/modal/defaultModal.css";
export const DefaultModal = ({ logo, mess, status }) => {
  return (
    <div className="default-modal-cover">
      <div className="default-modal-container">
        <span className={`material-symbols-outlined ${status}`}>{logo}</span>
        <p className={status}>{mess}</p>
      </div>
    </div>
  );
};
export default DefaultModal;
