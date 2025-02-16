import React, { createContext, useEffect, useState } from 'react';
import { getLocalStorage, setLocalStorage } from '../utils/localStoreg';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState({ employees: [], admin: {} });

  useEffect(() => {
    // If data is not found in localStorage, initialize it
    if (!localStorage.getItem('employees') || !localStorage.getItem('admin')) {
      setLocalStorage();
    }
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
    <AuthContext.Provider value={{ ...userData, updateEmployees }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
