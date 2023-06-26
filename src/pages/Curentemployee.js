import React, { useState } from "react";
import { useSelector } from "react-redux";
import Table from "../components/Table";
import Pagination from "../components/Pagination";
import EmployeeSearch from "../components/EmployeeSearch";

const Curentemployee = () => {
  const allEmployees = useSelector((state) => state.employee.employees);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10); // Nombre d'employés par page
  const [searchTerm, setSearchTerm] = useState("");
  const itemsPerPageOptions = [10, 25, 50, 100];

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleItemsPerPageChange = (event) => {
    setItemsPerPage(parseInt(event.target.value));
    setCurrentPage(1); // Réinitialiser la page sélectionnée lorsque le nombre d'éléments par page change
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
    setCurrentPage(1); // Réinitialiser la page sélectionnée lorsque la recherche change
  };

  // Filtrer les employés en fonction du terme de recherche, uniquement lorsque le terme est défini
  const filteredEmployees = searchTerm
    ? allEmployees.filter(
        (employee) =>
          employee.name &&
          employee.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : allEmployees;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredEmployees.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  return (
    <div>
      <div id="employee-div" className="container">
        <h1>Current Employees</h1>
        <EmployeeSearch employees={allEmployees} onSearch={handleSearch} />

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
        <Table employees={currentItems} />
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

export default Curentemployee;
