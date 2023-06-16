import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  employees: [
    // Élément 1
    {
      firstName: "Emily",
      lastName: "Brown",
      dateOfBirth: "1991-08-27",
      startDate: "2022-02-15",
      street: "987 Pine Street",
      city: "Seattle",
      state: "WA",
      zipCode: "98101",
      department: "Human Resources",
      id: 26,
    },
    // Élément 2
    {
      firstName: "Michael",
      lastName: "Wilson",
      dateOfBirth: "1988-04-12",
      startDate: "2023-01-05",
      street: "654 Cedar Avenue",
      city: "San Francisco",
      state: "CA",
      zipCode: "94101",
      department: "Engineering",
      id: 27,
    },
    // Élément 3
    {
      firstName: "Sophia",
      lastName: "Jones",
      dateOfBirth: "1993-12-05",
      startDate: "2022-09-10",
      street: "321 Oakwood Drive",
      city: "Boston",
      state: "MA",
      zipCode: "02101",
      department: "Operations",
      id: 28,
    },
    // Élément 4
    {
      firstName: "Daniel",
      lastName: "Taylor",
      dateOfBirth: "1987-03-18",
      startDate: "2021-11-20",
      street: "789 Elm Street",
      city: "Denver",
      state: "CO",
      zipCode: "80201",
      department: "Sales",
      id: 29,
    },
    // Élément 5
    {
      firstName: "Olivia",
      lastName: "Thomas",
      dateOfBirth: "1994-06-30",
      startDate: "2023-04-02",
      street: "456 Maple Avenue",
      city: "Austin",
      state: "TX",
      zipCode: "73301",
      department: "Marketing",
      id: 30,
    },
    // ... les 20 éléments restants ...
  ],
};

export const employeeSlice = createSlice({
  //createSlice
  //A function that accepts an initial state, an object of reducer functions, and a "slice name", and automatically generates action creators and action types that correspond to the reducers and state.
  name: "employee",
  initialState,
  reducers: {
    addEmployee(state, { payload }) {
      state.employees.push(payload.employee);
    },
  },
});

export const { addEmployee } = employeeSlice.actions;

export default employeeSlice.reducer;
