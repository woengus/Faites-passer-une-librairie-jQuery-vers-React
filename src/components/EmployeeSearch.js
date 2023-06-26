import React, { useState } from "react";

const EmployeeSearch = ({ employees, onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    onSearch(event.target.value);
  };

  return (
    <div className="employee-search">
      <label for="search">Search</label>
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
