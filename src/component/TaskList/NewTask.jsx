import React from 'react'

function NewTask({data}) {
  return (
  <div className='flex-shrink-0 h-full w-[300px] bg-blue-400 rounded-xl '>
            
            <div className='flex justify-between items-center'>
                <h3 className='bg-red-600 px-3 py-1 text-sm rounded'>{data.category}</h3>
            <h4 className='text-sm'>{data.taskDate}</h4>
            </div>
            <h2 className='mt-5 text-xl font-semibold '>{data.taskTitle}</h2>
            <p className='text-sm mt-2'>{data.taskDescription}</p>     
      <div>
        <button>accept task</button>
      </div>
      </div>
  )
}

export default NewTask