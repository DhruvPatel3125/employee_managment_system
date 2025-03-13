import React from 'react'

const FieldTask = ({data}) => {
  return (
    <div className="flex-shrink-0 h-64 w-80 p-5 bg-yellow-500 rounded-xl shadow-2xl transform transition duration-300 hover:scale-105">
        <div className="flex justify-between items-center">
          <h3 className="bg-white text-yellow-700 px-3 py-1 rounded">{data.category}</h3>
          <h4 className="text-base text-white">{data.taskDate}</h4>
        </div>
        <h2 className="mt-5 text-2xl font-semibold text-white">{data.taskTitle}</h2>
        <p className="text-sm mt-2 text-white">
        {data.taskDescription}
        </p>
        <div className='mt-2'>
            <button className='w-full bg-yellow-600 hover:bg-yellow-700 text-white py-2 rounded-full transition duration-300'>Failed</button>
        </div>
      </div>
  )
}

export default FieldTask
