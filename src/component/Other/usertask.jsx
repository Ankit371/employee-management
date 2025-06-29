import React from 'react'

const TaskList = ({data}) =>{
    if (!data || !data.taskCounts) {
    return <div className='text-white text-xl'>Loading task stats...</div>;
  }
  return (
    
     <div className='flex mt-10 justify-between gap-5 screen'>
      <div className='rounded-xl py-6 px-9 w-[45%] bg-red-400'>
          <h1 className='text-3xl font-semibold'>{data.taskCounts.newTask}</h1>
          <h3 className='text-xl font-medium'>New Task</h3>
      </div>
        <div className='rounded-xl py-6 px-9 w-[45%] bg-green-400'>
          <h1 className='text-3xl font-semibold'>{data.taskCounts.active}</h1>
          <h3 className='text-xl font-medium'>completed Task</h3>
      </div>
        <div className='rounded-xl py-6 px-9 w-[45%] bg-yellow-400'>
          <h1 className='text-3xl font-semibold'>{data.taskCounts.completed}</h1>
          <h3 className='text-xl font-medium'>Accepted Task</h3>
      </div>
        <div className='rounded-xl py-6 px-9 w-[45%] bg-blue-400'>
          <h1 className='text-3xl font-semibold'>{data.taskCounts.failed}</h1>
          <h3 className='text-xl font-medium'>Failed Task</h3>
      </div>
      
    </div>
  )
}

export default TaskList
