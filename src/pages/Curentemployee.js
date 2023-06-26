import React, { useState } from "react";
import { useSelector } from "react-redux";
import Table from "../components/Table";

const Curentemployee = () => {
  const employees = useSelector((state) => state.employee.employees);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10); // Nombre d'employés par page
  const itemsPerPageOptions = [10, 25, 50, 100];

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleItemsPerPageChange = (event) => {
    setItemsPerPage(parseInt(event.target.value));
    setCurrentPage(1); // Réinitialiser la page sélectionnée lorsque le nombre d'éléments par page change
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = employees.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div>
      <div id="employee-div" className="container">
        <h1>Current Employees</h1>
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
          <p>entries</p>
        </div>
        <Table employees={currentItems} />

        <a href="/">Home</a>
      </div>
    </div>
  );
};

export default Curentemployee;
