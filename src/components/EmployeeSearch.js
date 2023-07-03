import React, { useState } from "react";

/**
 * Composant EmployeeSearch
 * @param {Object} props - Propriétés du composant
 * @param {Function} props.onSearch - Fonction de recherche appelée lorsqu'une recherche est effectuée
 * @returns {JSX.Element} Composant EmployeeSearch
 */
const EmployeeSearch = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  /**
   * Gère le changement de recherche
   * @param {Object} event - Événement de changement
   */
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    onSearch(event.target.value);
  };

  return (
    <div className="employee-search">
      <label htmlFor="search">Recherche</label>
      <input
        type="text"
        value={searchTerm}
        onChange={handleSearchChange}
        name="search"
      />
    </div>
  );
};

export default EmployeeSearch;
