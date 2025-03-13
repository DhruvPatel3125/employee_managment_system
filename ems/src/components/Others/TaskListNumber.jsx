import React from 'react'

const TaskListNumber = ({data}) => {
  return (
    <div className='flex mt-10 justify-between gap-5'>
      <div className="rounded-xl w-1/4 py-6 px-9 bg-red-500 shadow-lg">
        <h2 className='text-3xl font-semibold'>{data.taskCounts.newTask}</h2>
        <h3 className='text-xl font-medium'>New Task</h3>
      </div> 
      <div className="rounded-xl w-1/4 py-6 px-9 bg-blue-500 shadow-lg">
        <h2 className='text-3xl font-semibold'>{data.taskCounts.completed}</h2>
        <h3 className='text-xl font-medium'>Completed Task</h3>
      </div> 
      <div className="rounded-xl w-1/4 py-6 px-9 bg-green-500 shadow-lg">
        <h2 className='text-3xl font-semibold'>{data.taskCounts.active}</h2>
        <h3 className='text-xl font-medium'>Active Task</h3>
      </div> 
      <div className="rounded-xl w-1/4 py-6 px-9 bg-yellow-500 shadow-lg">
        <h2 className='text-3xl font-semibold'>{data.taskCounts.failed}</h2>
        <h3 className='text-xl font-medium'>Failed Task</h3>
      </div> 
    </div>
  )
}

export default TaskListNumber
