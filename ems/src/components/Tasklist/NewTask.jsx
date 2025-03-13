import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';

const NewTask = ({data, employeeData}) => {
  const { updateEmployees, employees } = useContext(AuthContext);

  const handleAcceptTask = () => {
    const updatedEmployees = employees.map(employee => {
      if (employee.firstName.toLowerCase() === employeeData.firstName.toLowerCase()) {
        const updatedTasks = employee.tasks.map(task => {
          if (task.id === data.id) {
            return {
              ...task,
              newTask: false,
              active: true
            };
          }
          return task;
        });

        return {
          ...employee,
          tasks: updatedTasks,
          taskCounts: {
            ...employee.taskCounts,
            newTask: employee.taskCounts.newTask - 1,
            active: employee.taskCounts.active + 1
          }
        };
      }
      return employee;
    });

    updateEmployees(updatedEmployees);
  };

  return (
    <div className="flex-shrink-0 h-64 w-80 p-5 bg-gradient-to-r from-green-500 to-green-700 rounded-xl shadow-2xl transform transition duration-300 hover:scale-105">
      <div className="flex justify-between items-center">
        <h3 className="bg-white text-green-700 px-3 py-1 rounded">{data.category}</h3>
        <h4 className="text-base text-white">{data.taskDate}</h4>
      </div>
      <h2 className="mt-5 text-2xl font-semibold text-white">{data.taskTitle}</h2>
      <p className="text-sm mt-2 text-white">
        {data.taskDescription}
      </p>
      <div className='mt-4'>
        <button 
          className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-full w-full transition duration-300"
          onClick={handleAcceptTask}
        >
          Accept Task
        </button>
      </div>
    </div>
  );
};

export default NewTask;
