import React, { createContext, useEffect, useState } from 'react';
import { getLocalStorage, setLocalStorage } from '../utils/localStoreg';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState({ employees: [], admin: {} });

  useEffect(() => {
    // Initialize data from localStorage
    setLocalStorage();
    const { employees, admin } = getLocalStorage();
    setUserData({ employees, admin });
  }, []);

  // Function to update employees in state and localStorage
  const updateEmployees = (updatedEmployees) => {
    setUserData((prevData) => ({
      ...prevData,
      employees: updatedEmployees,
    }));
    localStorage.setItem("employees", JSON.stringify(updatedEmployees));
  };

  return (
    <AuthContext.Provider value={{ employees: userData.employees, updateEmployees }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
