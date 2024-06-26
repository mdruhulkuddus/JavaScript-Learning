import React from "react";
import "./Pagination.css";

const Pagination = ({ totalCards, cardPerPage, setCurrentPage, currentPage }) => {
  let pages = [];
  
  for (let i = 1; i <= Math.ceil(totalCards / cardPerPage); i++) {
    pages.push(i);
  }

  return (
    <div className="pagination">
      {pages.map((page, index) => {
        return <button key={index} onClick={() => {setCurrentPage(page)}} className = {page === currentPage ? 'active' : ''}>{page}</button>;
      })}
    </div>
  );
};

export default Pagination;
