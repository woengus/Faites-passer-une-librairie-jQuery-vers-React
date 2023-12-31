import React, { useState } from "react";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSortUp, faSortDown } from "@fortawesome/free-solid-svg-icons";
import Table from "../components/Table";
import Pagination from "../components/Pagination";
import EmployeeSearch from "../components/EmployeeSearch";

const CurrentEmployee = () => {
  const allEmployees = useSelector((state) => state.employee.employees);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const itemsPerPageOptions = [10, 25, 50, 100];
  const [sortColumn, setSortColumn] = useState(null);
  const [sortOrder, setSortOrder] = useState(null);

  /**
   * Gère le changement de page.
   * @param {number} page - Le numéro de la page sélectionnée.
   */
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  /**
   * Gère le changement du nombre d'éléments par page.
   * @param {object} event - L'événement de changement.
   */
  const handleItemsPerPageChange = (event) => {
    setItemsPerPage(parseInt(event.target.value));
    setCurrentPage(1);
  };

  /**
   * Gère la recherche d'employés.
   * @param {string} term - Le terme de recherche saisi.
   */
  const handleSearch = (term) => {
    const employees = allEmployees.filter((employee) => {
      if (
        employee.firstName.toLowerCase().includes(term.toLowerCase()) ||
        employee.lastName.toLowerCase().includes(term.toLowerCase()) ||
        employee.street.toLowerCase().includes(term.toLowerCase()) ||
        employee.city.toLowerCase().includes(term.toLowerCase()) ||
        employee.state.toLowerCase().includes(term.toLowerCase()) ||
        employee.department.toLowerCase().includes(term.toLowerCase())
      ) {
        return true;
      } else {
        return false;
      }
    });

    setFilteredEmployees(employees);
  };

  /**
   * Gère le tri des employés en fonction de la colonne spécifiée.
   * @param {string} columnName - Le nom de la colonne pour le tri.
   */
  const handleSort = (columnName) => {
    const order =
      sortColumn === columnName
        ? sortOrder === "asc"
          ? "desc"
          : "asc"
        : "asc";
    setSortColumn(columnName);
    setSortOrder(order);

    const sortedEmployees = [...filteredEmployees].sort((a, b) => {
      let valueA = a[columnName] ? a[columnName].toString().toLowerCase() : "";
      let valueB = b[columnName] ? b[columnName].toString().toLowerCase() : "";

      // Tri spécifique pour la colonne "zipCode"
      if (columnName === "zipCode") {
        valueA = valueA.padStart(5, "0");
        valueB = valueB.padStart(5, "0");
      }

      if (valueA < valueB) {
        return order === "asc" ? -1 : 1;
      }
      if (valueA > valueB) {
        return order === "asc" ? 1 : -1;
      }
      return 0;
    });

    setFilteredEmployees(sortedEmployees);
  };

  const [filteredEmployees, setFilteredEmployees] = useState(allEmployees);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredEmployees.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  /**
   * Rend l'icône de flèche pour la colonne spécifiée.
   * @param {string} columnName - Le nom de la colonne.
   * @returns {JSX.Element} L'élément JSX représentant l'icône de flèche.
   */
  const renderArrowIcon = (columnName) => {
    if (sortColumn !== columnName) {
      return (
        <>
          <div className="arrow-flex">
            <FontAwesomeIcon icon={faSortUp} />
            <FontAwesomeIcon icon={faSortDown} />
          </div>
        </>
      );
    }

    if (sortOrder === "asc") {
      return (
        <>
          <div className="arrow-flex">
            <FontAwesomeIcon icon={faSortUp} color="green" />
            <FontAwesomeIcon icon={faSortDown} />
          </div>
        </>
      );
    }

    if (sortOrder === "desc") {
      return (
        <>
          <div className="arrow-flex">
            <FontAwesomeIcon icon={faSortUp} />
            <FontAwesomeIcon icon={faSortDown} color="green" />
          </div>
        </>
      );
    }

    return (
      <>
        <div className="arrow-flex">
          <FontAwesomeIcon icon={faSortUp} />
          <FontAwesomeIcon icon={faSortDown} />
        </div>
      </>
    );
  };

  return (
    <div>
      <div id="employee-div" className="container">
        <h1>Current Employees</h1>
        <EmployeeSearch onSearch={handleSearch} />

        <div className="items-per-page">
          <label htmlFor="itemsPerPage">Show</label>
          <select
            id="itemsPerPage"
            value={itemsPerPage}
            onChange={handleItemsPerPageChange}
          >
            {itemsPerPageOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          <p>employees</p>
        </div>
        <Table
          data={currentItems}
          sortColumn={sortColumn}
          sortOrder={sortOrder}
          handleSort={handleSort}
          renderArrowIcon={renderArrowIcon}
        />
        <Pagination
          totalItems={filteredEmployees.length}
          itemsPerPage={itemsPerPage}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
        <a href="/">Home</a>
      </div>
    </div>
  );
};

export default CurrentEmployee;
