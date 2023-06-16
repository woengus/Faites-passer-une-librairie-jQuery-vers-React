import React from "react";

const Table = ({ employees }) => {
  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col">FirstName</th>
          <th scope="col">Lastname</th>
          <th scope="col">Start date</th>
          <th scope="col">Department</th>
          <th scope="col">Date of birth</th>
          <th scope="col">Street</th>
          <th scope="col">City</th>
          <th scope="col">State</th>
          <th scope="col">Zipcode</th>
        </tr>
      </thead>
      <tbody>
        {employees.map((employee) => (
          <tr key={employee.id}>
            <td>{employee.firstName}</td>
            <td>{employee.lastName}</td>
            <td>{employee.startDate}</td>
            <td>{employee.department}</td>
            <td>{employee.dateOfBirth}</td>
            <td>{employee.street}</td>
            <td>{employee.city}</td>
            <td>{employee.state}</td>
            <td>{employee.zipCode}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
