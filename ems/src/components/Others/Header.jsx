import React, { useEffect, useState } from 'react';
import { getLocalStorage } from '../../utils/localStoreg'; // Ensure correct import

const Header = ({ changeUser }) => {
  const [username, setUsername] = useState('');

  // Fetch logged-in user details on component mount
  useEffect(() => {
    const { employees, admin } = getLocalStorage();
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

    if (loggedInUser) {
      if (loggedInUser.role === "employee") {
        const employeeData = employees.find(emp => emp.email === loggedInUser.data.email);
        if (employeeData) {
          setUsername(employeeData.firstName); // Update username state
        }
      } else if (loggedInUser.role === "admin") {
        setUsername("Admin"); // Set username to "Admin" for admin role
      }
    }
  }, []); // Empty dependency array ensures it runs only on mount

  const logOutUser = () => {
    localStorage.removeItem('loggedInUser');
    if (changeUser) {
      changeUser(null); // Trigger re-render in App.js
    }
  };

  return (
    <div className="flex items-center justify-between mb-8">
      <h1 className="text-2xl font-medium text-white">
        Hello 🙌<br />
        <span className="text-3xl font-semibold">{username || "User"}</span>
      </h1>
      <button
        onClick={logOutUser}
        className="bg-red-600 hover:bg-red-700 text-lg font-medium text-white px-5 py-2 rounded transition duration-300"
      >
        Log Out
      </button>
    </div>
  );
};

export default Header;
