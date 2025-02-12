import React, { useEffect, useState } from 'react';

const Header = (props) => {
  const [username, setUsername] = useState('');

  // Set username based on props.data when component mounts or updates
  useEffect(() => {
    if (!props.data) {
      setUsername('Admin');  // Default if no user data is available
    } else {
      setUsername(props.data.firstName || 'Admin');  // Fallback to 'Admin' if firstName is missing
    }
  }, [props.data]);  // Re-run when props.data changes

  const logOutUser = () => {
    localStorage.removeItem('loggedInUser');
    if (props.changeUser) {
      props.changeUser(null); // This will trigger a re-render in App.js
    }
  };
  
  

  return (
    <div className="flex items-end justify-between">
      <h1 className="text-2xl font-medium">
        Hello 🙌<br />
        <span className="text-3xl font-semibold">{username}</span>
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
