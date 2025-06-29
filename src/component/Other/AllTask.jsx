import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

function AllTask() {

  const authData = useContext(AuthContext)

  return (
    <div className='bg-[#1c1c1c] p-5 mt-5 '>
         <div className='bg-red-400 mb-2 px-4 py-2 flex justify-between rounded'>
            <h2 className=' text-lg font-medium w-1/5 '>Employee Name</h2>
            <h3 className=' text-lg font-medium w-1/5 ' >New Task</h3>
            <h5 className=' text-lg font-medium w-1/5 ' >Active task</h5>
            <h5 className=' text-lg font-medium w-1/5 ' >Complete </h5>
            <h5 className=' text-lg font-medium w-1/5 ' > Failed </h5>

        </div>
      <div className=''>
        {authData.employee.map(function(item,idx){
         return  <div key={idx} className='border-2 border-emerald-500 mb-2 px-4 py-2 flex justify-between rounded'>
           <h2 className=' text-lg font-medium w-1/6 ' >{item.firstName}</h2>
          <h3 className=' text-lg font-medium w-1/5 text-blue-600' >{item.taskCounts.newTask}</h3>
          <h5 className=' text-lg font-medium w-1/5 text-yellow-400' >{item.taskCounts.active}</h5>
          <h5 className=' text-lg font-medium w-1/5 text-green-600' >{item.taskCounts.completed}</h5>
          <h5 className=' text-lg font-medium w-1/5 text-red-600' >{item.taskCounts.failed}</h5>
        </div>
              })}
      </div>

    </div>
  )
}

export default AllTask
