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
    // console.log(term);
    // setSearchTerm(term);
    // setCurrentPage(1); // Réinitialiser la page sélectionnée lorsque la recherche change
    const employees = allEmployees.filter((employee) => {
      if (
        employee.firstName.toLowerCase().includes(term.toLowerCase()) ||
        employee.lastName.toLowerCase().includes(term.toLowerCase()) ||
        employee.street.toLowerCase().includes(term.toLowerCase()) ||
        employee.city.toLowerCase().includes(term.toLowerCase()) ||
        employee.state.toLowerCase().includes(term.toLowerCase()) ||
        employee.department.toLowerCase().includes(term.toLowerCase())
      ) {
        return employee;
      }
    });

    setFilteredEmployees(employees);
  };

  // Filtrer les employés en fonction du terme de recherche, uniquement lorsque le terme est défini
  const [filteredEmployees, setFilteredEmployees] = useState(allEmployees);

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
