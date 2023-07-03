import React from "react";

const Table = ({
  data,
  sortColumn,
  sortOrder,
  handleSort,
  renderArrowIcon,
}) => {
  return (
    <table>
      <thead>
        <tr>
          <th onClick={() => handleSort("firstName")}>
            FirstName {renderArrowIcon("firstName")}
          </th>
          <th onClick={() => handleSort("lastName")}>
            LastName {renderArrowIcon("lastName")}
          </th>
          <th onClick={() => handleSort("startDate")}>
            Start Date {renderArrowIcon("startDate")}
          </th>
          <th onClick={() => handleSort("department")}>
            Department {renderArrowIcon("department")}
          </th>
          <th onClick={() => handleSort("dateOfBirth")}>
            Date of Birth {renderArrowIcon("dateOfBirth")}
          </th>
          <th onClick={() => handleSort("street")}>
            Street {renderArrowIcon("street")}
          </th>
          <th onClick={() => handleSort("city")}>
            City {renderArrowIcon("city")}
          </th>
          <th onClick={() => handleSort("state")}>
            State {renderArrowIcon("state")}
          </th>
          <th onClick={() => handleSort("zipCode")}>
            Zipcode {renderArrowIcon("zipCode")}
          </th>
        </tr>
      </thead>
      <tbody>
        {data.map((employee) => (
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
