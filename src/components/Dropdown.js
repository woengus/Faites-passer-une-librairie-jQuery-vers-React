import React from "react";

const Dropdown = ({ label, options, value, onSelect, required }) => {
  // Vérifie si le label est "Department"
  const isDepartment = label.toLowerCase() === "department";

  return (
    <div>
      <label htmlFor={label}>{label}</label>
      <select
        id={label}
        value={value}
        onChange={(e) => onSelect(e)}
        required={required}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
        {/* Si le label est "Department", ajoutez une option par défaut */}
        {isDepartment && <option value="" disabled></option>}
      </select>
    </div>
  );
};

export default Dropdown;
