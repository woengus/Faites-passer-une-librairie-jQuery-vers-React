import React from "react";

const Dropdown = ({ label, options, value, onChange, required }) => {
  return (
    <div>
      <label htmlFor={label}>{label}</label>
      <select id={label} value={value} onChange={onChange} required={required}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
