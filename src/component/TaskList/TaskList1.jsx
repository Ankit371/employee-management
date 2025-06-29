import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'

function TaskList1({data}) {
   if (!data || !data.tasks) {
    return <div className='text-white'>Loading tasks...</div>;
  }
  return (
    <div id="tasklist" className='h-[55%] w-full overflow-x-auto flex items-center flex-nowrap justify-start gap-5 py-5  mt-10 '>
      {/* <AcceptTask/>
      <NewTask/>
    <CompleteTask/>
    <FailedTask/> */}

    {data.tasks.map((item,idx)=>{
      console.log(item)
      if(item.active){
        return <AcceptTask key={idx} data={item} />
      }
      if(item.newTask){
        return <NewTask key={idx} data={item} />
      }
      if(item.completed){
        return <CompleteTask key={idx} data={item} />
      }
      if(item.failed){
        return <FailedTask key={idx} data={item} />
      }
    })}
     
    </div>
  )
}

export default TaskList1
