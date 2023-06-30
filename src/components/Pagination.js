import React, { useState } from "react";

/**
 * Composant de pagination pour afficher une liste d'éléments paginée.
 * @component
 * @param {Object} props - Les propriétés du composant.
 * @param {number} props.totalItems - Le nombre total d'éléments.
 * @param {number} props.itemsPerPage - Le nombre d'éléments par page.
 * @param {Function} props.onPageChange - Fonction de rappel appelée lors du changement de page.
 * @returns {JSX.Element} Composant de pagination.
 */
const Pagination = ({ totalItems, itemsPerPage, onPageChange }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  /**
   * Gère le changement de page.
   * @param {number} page - Le numéro de la page sélectionnée.
   */
  const handlePageChange = (page) => {
    setCurrentPage(page);
    onPageChange(page);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      handlePageChange(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      handlePageChange(currentPage - 1);
    }
  };

  /**
   * Rend les numéros de page.
   * @returns {JSX.Element[]} Tableau des éléments JSX représentant les numéros de page.
   */
  const renderPageNumbers = () => {
    const pageNumbers = [];

    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <li
          key={i}
          className={`page-item ${currentPage === i ? "active" : ""}`}
        >
          <button className="page-link" onClick={() => handlePageChange(i)}>
            {i}
          </button>
        </li>
      );
    }

    return pageNumbers;
  };

  return (
    <nav>
      <ul className="pagination">
        <li>
          <button
            onClick={() => handlePreviousPage()}
            disabled={currentPage === 1}
          >
            Previous
          </button>
        </li>
        {renderPageNumbers()}
        <li>
          <button
            onClick={() => handleNextPage()}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
