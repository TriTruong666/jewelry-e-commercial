import React from "react";
import "../../styles/card/blogCard1.css";
const CardBlog = ({ src, type, title, content }) => {
  return (
    <div className="blog-card-container">
      <img src={src} alt="" />
      <div className="blog-card-content">
        <strong>{type}</strong>
        <span>{title}</span>
        <p>{content}</p>
      </div>
    </div>
  );
};
export default CardBlog;
