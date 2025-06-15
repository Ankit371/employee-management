import React from 'react'
import Header from '../Other/Header'
import TaskList from '../Other/TaskList'

function EmployeeDashboard() {
  return (
    <div className='p-10 bg-[#1C1C1C] h-screen'>
      <Header/>
      <TaskList/>
    </div>
  )
}

export default EmployeeDashboard
