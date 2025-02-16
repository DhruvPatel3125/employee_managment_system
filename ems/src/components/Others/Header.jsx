import React, { useEffect, useState } from 'react';
import { getLocalStorage } from '../../utils/localStoreg'; // Ensure correct import

const Header = (props) => {
  const [username, setUsername] = useState('');

  // Fetch logged-in user details on component mount
  useEffect(() => {
    const { employees } = getLocalStorage();
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

    if (loggedInUser && loggedInUser.role === "employee") {
      const employeeData = employees.find(emp => emp.email === loggedInUser.data.email);
      if (employeeData) {
        setUsername(employeeData.firstName); // Update username state
      }
    }
  }, []); // Empty dependency array ensures it runs only on mount

  const logOutUser = () => {
    localStorage.removeItem('loggedInUser');
    if (props.changeUser) {
      props.changeUser(null); // Trigger re-render in App.js
    }
  };

  return (
    <div className="flex items-end justify-between">
      <h1 className="text-2xl font-medium">
        Hello 🙌<br />
        <span className="text-3xl font-semibold">{username || "User"}</span>
      </h1>
      <button
        onClick={logOutUser}
        className="bg-red-700 text-lg font-medium text-white px-5 py-2 rounded-sm"
      >
        Log Out
      </button>
    </div>
  );
};

export default Header;
