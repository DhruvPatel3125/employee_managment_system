import React, { createContext, useEffect, useState } from 'react';
import { getLocalStorage, setLocalStorage } from '../utils/localStoreg';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [userData, setUserData] = useState({ employees: [], admin: {} });

    useEffect(() => {
      if(!localStorage.getItem('employees')||!localStorage.getItem('admin')){
        setLocalStorage()
      }
        const { employees, admin } = getLocalStorage();
        setUserData({ employees, admin }); // ✅ Fix: Store both in an object
    }, []);
    

    return (
        <AuthContext.Provider value={userData}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
