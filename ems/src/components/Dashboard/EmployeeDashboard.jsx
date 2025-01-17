import React from 'react'
import Header from '../Others/Header'
import TaskListNumber from '../Others/TaskListNumber'
import TaskList from '../Tasklist/TaskList'

const EmployeeDashboard = () => {
  return (
    <div>
        <div className='p-10 bg-[#1c1c1c] h-screen'>
            <Header/>
            <TaskListNumber/>
            <TaskList/>
        </div>
    </div>
  )
}

export default EmployeeDashboard
