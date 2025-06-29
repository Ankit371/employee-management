import React from 'react'
import Header from '../Other/Header'
import CreateTask from '../Other/CreateTask'
import AllTask from '../Other/AllTask'

function AdminDashboard(props) {
  return (
    <div className='h-screen w-full'>
      <Header changeUser={props.changeUser} data={props.data} />
    <CreateTask/>
    <AllTask/>
    </div>
  )
}

export default AdminDashboard
