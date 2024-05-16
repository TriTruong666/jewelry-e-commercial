import React from "react";
import "../../styles/pagination/pagination.css";
const Pagination = ({ totalProducts, limit, currentPage, getActivePage }) => {
  const pages = [];
  for (let i = 1; i <= Math.ceil(totalProducts / limit); i++) {
    pages.push(i);
  }
  return (
    <div className="pagination-container">
      <div className="pagination">
        {pages.map((page, index) => (
          <button
            onClick={() => getActivePage(page)}
            className={`page ${page === currentPage ? "active" : ""}`}
            key={index}
          >
            {page}
          </button>
        ))}
      </div>
    </div>
  );
};
export default Pagination;
