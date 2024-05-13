import React from "react";
import { Link } from "react-router-dom";
import "../../styles/button/button.css";
const PrimaryButton = ({ content, path }) => {
  return (
    <Link className="prim-btn" to={path}>
      {content}
    </Link>
  );
};
export default PrimaryButton;
