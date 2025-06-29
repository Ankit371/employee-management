import React from 'react'
import Header from '../Other/Header'
import TaskList from '../Other/usertask'
import TaskList1 from '../TaskList/TaskList1'

function EmployeeDashboard(props) {
  return (
    <div className='p-10 bg-[#1C1C1C] h-screen'>
      <Header changeUser={props.changeUser} data={props.data} />
      <TaskList data={props.data} />
    <TaskList1 data={props.data} />
    </div>
  )
}

export default EmployeeDashboard
