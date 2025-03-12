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
    <div className="flex-shrink-0 h-full w-[300px] p-5 bg-green-400 rounded-xl">
      <div className="flex justify-between items-center">
        <h3 className="bg-gray-100 text-gray-500 px-3 py-1 rounded">{data.category}</h3>
        <h4 className="text-base">{data.taskDate}</h4>
      </div>
      <h2 className="mt-5 text-2xl font-semibold">{data.taskTitle}</h2>
      <p className="text-sm mt-2">
        {data.taskDescription}
      </p>
      <div className='mt-4'>
        <button 
          className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded w-full"
          onClick={handleAcceptTask}
        >
          Accept Task
        </button>
      </div>
    </div>
  );
};

export default NewTask;
