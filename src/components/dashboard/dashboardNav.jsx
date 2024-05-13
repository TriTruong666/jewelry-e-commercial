import React from "react";
import "../../styles/dashboard/dashNav.css";
const NavDash = ({ name }) => {
  return (
    <div className="navigation-container">
      <div className="nav-header">
        <span>Welcome</span>
        <h2>{name || "Dashboard"}</h2>
      </div>
      <div className="ultilities">
        <div className="search">
          <input type="text" placeholder="Search" spellCheck="false" />
          <span className="material-symbols-outlined">search</span>
        </div>
        <span className="material-symbols-outlined icon">mail</span>
        <span className="material-symbols-outlined icon">chat_bubble</span>
      </div>
    </div>
  );
};
export default NavDash;
