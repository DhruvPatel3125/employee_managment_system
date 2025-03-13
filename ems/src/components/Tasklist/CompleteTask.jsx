import React from 'react'

const CompleteTask = ({data}) => {
  return (
    <div className="flex-shrink-0 h-64 w-80 p-5 bg-gradient-to-r from-blue-500 to-blue-700 rounded-xl shadow-2xl transform transition duration-300 hover:scale-105">
      <div className="flex justify-between items-center">
        <h3 className="bg-white text-blue-700 px-3 py-1 rounded">{data.category}</h3>
        <h4 className="text-base text-white">{data.taskDate}</h4>
      </div>
      <h2 className="mt-5 text-2xl font-semibold text-white">{data.taskTitle}</h2>
      <p className="text-sm mt-2 text-white">
        {data.taskDescription}
      </p>
      <div className='mt-2'>
        <button className='w-full bg-blue-600 hover:bg-blue-800 text-white py-2 rounded-full transition duration-300'>
          Completed
        </button>
      </div>
    </div>
  )
}

export default CompleteTask
