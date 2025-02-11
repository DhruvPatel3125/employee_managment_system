import React, { useEffect, useState } from 'react';

const Header = ({ data }) => {
  const [username, setUsername] = useState('');

  // Set username based on data when the component mounts or when data changes
  useEffect(() => {
    if (!data) {
      setUsername('Admin');  // Default to 'Admin' if no data is available
    } else {
      setUsername(data.firstName);  // Use data.firstName if data is available
    }
  }, [data]);  // Dependency on data, re-run when data changes
const logOutUser = ()=>{
  localStorage.setItem('loggedInUser','')
  window.location.reload()
}
  return (
    <div className="flex items-end justify-between">
      <h1 className='text-2xl font-medium'>
        Hello 🙌<br />
        <span className='text-3xl font-semibold'>{username}</span>
      </h1>
      <button onClick={logOutUser} className='bg-red-700 text-lg font-medium text-white px-5 py-2 rounded-sm'>
        Log Out
      </button>
    </div>
  );
};

export default Header;
