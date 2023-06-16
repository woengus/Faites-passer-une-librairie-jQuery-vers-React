import React from "react";
import { useSelector } from "react-redux";
import Table from "../components/Table";
const Curentemployee = () => {
  const employees = useSelector((state) => state.employee.employees);
  return (
    <div>
      <div id="employee-div" className="container">
        <h1>Current Employees</h1>
        <Table employees={employees} />
        <a href="/">Home</a>
      </div>
    </div>
  );
};

export default Curentemployee;
