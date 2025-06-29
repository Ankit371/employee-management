import React from 'react'

function AcceptTask({data}) {
    
  return (
    <>
    <div className='flex-shrink-0 h-full w-[300px] bg-yellow-400 rounded-xl '>
            
            <div className='flex justify-between items-center'>
                <h3 className='bg-red-600 px-3 py-1 text-sm rounded'>{data.category}</h3>
            <h4 className='text-sm'>{data.taskDate}</h4>
            </div>
            <h2 className='mt-5 text-xl font-semibold '>{data.taskTitle}</h2>
            <p className='text-sm mt-2'>{data.taskDescription}</p>

            <div className='flex justfiy-between mt-4'>
            <button className='bg-green-500 py-1 px-2 text-sm' >Mark is Completed</button>
            <button className='bg-red-500 py-1 px-2 text-sm' >mark as Failed</button>
      </div>
      
      </div>
      
      </>
  )
}

export default AcceptTask