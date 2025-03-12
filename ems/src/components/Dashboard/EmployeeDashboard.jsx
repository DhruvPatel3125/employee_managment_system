import React, { useEffect, useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';
import Header from '../Others/Header';
import TaskListNumber from '../Others/TaskListNumber';
import TaskList from '../Tasklist/TaskList';

const EmployeeDashboard = ({ changeUser, data }) => {
  const { employees } = useContext(AuthContext);
  
  // Get fresh data from context
  const currentEmployeeData = employees.find(
    emp => emp.firstName === data.firstName
  ) || data;

  return (
    <div className="p-10 bg-[#1c1c1c] h-screen">
      <Header changeUser={changeUser} data={currentEmployeeData} />
      <TaskListNumber data={currentEmployeeData} />
      <TaskList data={currentEmployeeData} />
    </div>
  );
};

export default EmployeeDashboard;

