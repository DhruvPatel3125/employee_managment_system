import React from 'react'

const FieldTask = () => {
  return (
    <div className="flex-shrink-0 h-full w-[300px] p-5 bg-yellow-400 rounded-xl">
        <div className="flex justify-between items-center">
          <h3 className="bg-gray-100 text-gray-500 px-3 py-1 rounded">high</h3>
          <h4 className="text-base">20 feb 2024</h4>
        </div>
        <h2 className="mt-5 text-2xl font-semibold">Make a youtube video</h2>
        <p className="text-sm mt-2">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam,
          ex accusantium quas, commodi esse facilis alias temporibus harum rerum
          maiores laudantium, repellendus aperiam voluptas ipsam voluptatibus
          dolore quidem deleniti ad!
        </p>
        <div className='mt-2'>
            <button className='w-full'>Faield</button>
        </div>
      </div>
  )
}

export default FieldTask
