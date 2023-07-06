import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux"; // Pour dispatcher les actions
import { addEmployee } from "../store/employee.slice"; // Pour ajouter un employé
import { NavLink } from "react-router-dom";
import Modal from "./Modal";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Dropdown from "./Dropdown";

/**
 * Composant FormEmployee
 * @returns {JSX.Element} Composant FormEmployee
 */
const FormEmployee = () => {
  const dispatch = useDispatch();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [startDate, setStartDate] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("Alabama");
  const [zipCode, setZipCode] = useState("");
  const [department, setDepartment] = useState("Sales");
  //const [employeeCreated, setEmployeeCreated] = useState(false);
  // Pour le date picker
  const [dateBirth, setDateBirth] = useState(null);
  const [dateStart, setDateStart] = useState(null);
  const states = [
    {
      name: "Alabama",
      abbreviation: "AL",
    },
    {
      name: "Alaska",
      abbreviation: "AK",
    },
    {
      name: "American Samoa",
      abbreviation: "AS",
    },
    {
      name: "Arizona",
      abbreviation: "AZ",
    },
    {
      name: "Arkansas",
      abbreviation: "AR",
    },
    {
      name: "California",
      abbreviation: "CA",
    },
    {
      name: "Colorado",
      abbreviation: "CO",
    },
    {
      name: "Connecticut",
      abbreviation: "CT",
    },
    {
      name: "Delaware",
      abbreviation: "DE",
    },
    {
      name: "District Of Columbia",
      abbreviation: "DC",
    },
    {
      name: "Federated States Of Micronesia",
      abbreviation: "FM",
    },
    {
      name: "Florida",
      abbreviation: "FL",
    },
    {
      name: "Georgia",
      abbreviation: "GA",
    },
    {
      name: "Guam",
      abbreviation: "GU",
    },
    {
      name: "Hawaii",
      abbreviation: "HI",
    },
    {
      name: "Idaho",
      abbreviation: "ID",
    },
    {
      name: "Illinois",
      abbreviation: "IL",
    },
    {
      name: "Indiana",
      abbreviation: "IN",
    },
    {
      name: "Iowa",
      abbreviation: "IA",
    },
    {
      name: "Kansas",
      abbreviation: "KS",
    },
    {
      name: "Kentucky",
      abbreviation: "KY",
    },
    {
      name: "Louisiana",
      abbreviation: "LA",
    },
    {
      name: "Maine",
      abbreviation: "ME",
    },
    {
      name: "Marshall Islands",
      abbreviation: "MH",
    },
    {
      name: "Maryland",
      abbreviation: "MD",
    },
    {
      name: "Massachusetts",
      abbreviation: "MA",
    },
    {
      name: "Michigan",
      abbreviation: "MI",
    },
    {
      name: "Minnesota",
      abbreviation: "MN",
    },
    {
      name: "Mississippi",
      abbreviation: "MS",
    },
    {
      name: "Missouri",
      abbreviation: "MO",
    },
    {
      name: "Montana",
      abbreviation: "MT",
    },
    {
      name: "Nebraska",
      abbreviation: "NE",
    },
    {
      name: "Nevada",
      abbreviation: "NV",
    },
    {
      name: "New Hampshire",
      abbreviation: "NH",
    },
    {
      name: "New Jersey",
      abbreviation: "NJ",
    },
    {
      name: "New Mexico",
      abbreviation: "NM",
    },
    {
      name: "New York",
      abbreviation: "NY",
    },
    {
      name: "North Carolina",
      abbreviation: "NC",
    },
    {
      name: "North Dakota",
      abbreviation: "ND",
    },
    {
      name: "Northern Mariana Islands",
      abbreviation: "MP",
    },
    {
      name: "Ohio",
      abbreviation: "OH",
    },
    {
      name: "Oklahoma",
      abbreviation: "OK",
    },
    {
      name: "Oregon",
      abbreviation: "OR",
    },
    {
      name: "Palau",
      abbreviation: "PW",
    },
    {
      name: "Pennsylvania",
      abbreviation: "PA",
    },
    {
      name: "Puerto Rico",
      abbreviation: "PR",
    },
    {
      name: "Rhode Island",
      abbreviation: "RI",
    },
    {
      name: "South Carolina",
      abbreviation: "SC",
    },
    {
      name: "South Dakota",
      abbreviation: "SD",
    },
    {
      name: "Tennessee",
      abbreviation: "TN",
    },
    {
      name: "Texas",
      abbreviation: "TX",
    },
    {
      name: "Utah",
      abbreviation: "UT",
    },
    {
      name: "Vermont",
      abbreviation: "VT",
    },
    {
      name: "Virgin Islands",
      abbreviation: "VI",
    },
    {
      name: "Virginia",
      abbreviation: "VA",
    },
    {
      name: "Washington",
      abbreviation: "WA",
    },
    {
      name: "West Virginia",
      abbreviation: "WV",
    },
    {
      name: "Wisconsin",
      abbreviation: "WI",
    },
    {
      name: "Wyoming",
      abbreviation: "WY",
    },
  ];
  const departmentOptions = [
    // Options du département
    { value: "Sales", label: "Sales" },
    { value: "Marketing", label: "Marketing" },
    { value: "Engineering", label: "Engineering" },
    { value: "Human Resources", label: "Human Resources" },
    { value: "Legal", label: "Legal" },
  ];
  const [isModalOpen, setIsModalOpen] = useState(false); // État du modal

  const formaterDate = (date) => {
    const mois = String(date.getMonth() + 1).padStart(2, "0"); // Ajoute un zéro devant si nécessaire
    const jour = String(date.getDate()).padStart(2, "0"); // Ajoute un zéro devant si nécessaire
    const annee = String(date.getFullYear());

    return `${annee}-${mois}-${jour}`;
  };
  /**
   * Gère le changement de la date de naissance
   * @param {Date} valueDate - Date sélectionnée
   */
  const handleDateOfBirthChange = (valueDate) => {
    const date = formaterDate(new Date(valueDate));
    setDateOfBirth(date);
    setDateBirth(valueDate);
  };
  /**
   * Gère le changement de la date de début
   * @param {Date} valueDate - Date sélectionnée
   */
  const handleStartDateChange = (valueDate) => {
    const date = formaterDate(new Date(valueDate));
    setStartDate(date);
    setDateStart(valueDate);
  };
  /**
   * Soumet le formulaire
   * @param {Object} e - Événement de soumission
   */
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      firstName,
      lastName,
      dateOfBirth,
      startDate,
      street,
      city,
      state,
      zipCode,
      department,
    });
    if (
      firstName === "" ||
      lastName === "" ||
      dateOfBirth === null ||
      startDate === null ||
      street === "" ||
      city === "" ||
      state === "" ||
      zipCode === "" ||
      department === ""
    ) {
      alert("Please fill in all fields");
      return;
    } else {
      // Créer un objet représentant les informations de l'employé
      const employee = {
        firstName,
        lastName,
        dateOfBirth,
        startDate,
        street,
        city,
        state,
        zipCode,
        department,
        id: Date.now(),
      };

      // Ajoute l'employé au tableau des employés
      dispatch(addEmployee(employee));
      setIsModalOpen(true);
      //setEmployeeCreated(true);
      // Réinitialiser les champs du formulaire
      setFirstName("");
      setLastName("");
      setDateOfBirth(null);
      setStartDate(null);
      setStreet("");
      setCity("");
      setState("Alabama");
      setZipCode("");
      setDepartment("Sales");
    }
  };
  //fix pour un message d'erreur bénin non impactant, comme dit ici: https://stackoverflow.com/questions/49384120/resizeobserver-loop-limit-exceeded/50387233#50387233
  useEffect(() => {
    window.addEventListener("error", (e) => {
      if (e.message === "ResizeObserver loop limit exceeded") {
        const resizeObserverErrDiv = document.getElementById(
          "webpack-dev-server-client-overlay-div"
        );
        const resizeObserverErr = document.getElementById(
          "webpack-dev-server-client-overlay"
        );
        if (resizeObserverErr) {
          resizeObserverErr.setAttribute("style", "display: none");
        }
        if (resizeObserverErrDiv) {
          resizeObserverErrDiv.setAttribute("style", "display: none");
        }
      }
    });
  }, []);
  return (
    <div>
      <div className="title">
        <h1>HRnet</h1>
      </div>
      <div className="container">
        <NavLink to="/Curentemployee">View Current Employees</NavLink>
        <h2>Create Employee</h2>
        <form onSubmit={handleSubmit} id="create-employee">
          <label htmlFor="first-name">First Name</label>
          <input
            type="text"
            id="first-name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />

          <label htmlFor="last-name">Last Name</label>
          <input
            type="text"
            id="last-name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />

          <label htmlFor="date-of-birth">Date of Birth</label>
          <DatePicker
            id="date-of-birth"
            selected={dateBirth}
            onChange={(date) => handleDateOfBirthChange(date)}
            placeholderText="Select a date"
            required
          />

          <label htmlFor="start-date">Start Date</label>
          <DatePicker
            id="start-date"
            selected={dateStart}
            onChange={(date) => handleStartDateChange(date)}
            placeholderText="Select a date"
            required
          />

          <fieldset className="address">
            <legend>Address</legend>

            <label htmlFor="street">Street</label>
            <input
              id="street"
              type="text"
              value={street}
              onChange={(e) => setStreet(e.target.value)}
              required
            />

            <label htmlFor="city">City</label>
            <input
              id="city"
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              required
            />

            <label htmlFor="state"></label>
            <Dropdown
              label="state"
              options={states.map((state) => ({
                value: state.name,
                label: state.name,
              }))}
              value={state}
              onSelect={(e) => setState(e.target.value)}
              required
            />

            <label htmlFor="zip-code">Zip Code</label>
            <input
              id="zip-code"
              type="number"
              value={zipCode}
              onChange={(e) => setZipCode(e.target.value)}
              required
            />
          </fieldset>

          <label htmlFor="department"></label>
          <Dropdown
            label="department"
            options={departmentOptions}
            value={department}
            onSelect={(e) => setDepartment(e.target.value)}
            required
          />

          <button type="submit">Save</button>
        </form>
        <Modal
          open={isModalOpen}
          message="Employee created !"
          toggleModal={() => setIsModalOpen(false)}
        />
      </div>
      <div id="confirmation" className="modal"></div>
    </div>
  );
};

export default FormEmployee;
