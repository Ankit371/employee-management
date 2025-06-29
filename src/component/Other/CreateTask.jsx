import { useState , useContext } from "react"
import { AuthContext } from "../../context/AuthProvider";

function CreateTask() {
  const { refreshData } = useContext(AuthContext);

  const [taskTitle, settaskTitle] = useState("")
  const [taskDescription, settaskDescription] = useState("")
  const [taskDate, settaskDate] = useState("")
  const [assignTo, setassignTo] = useState("")
  const [category, setcategory] = useState("")

  const [newTask, setnewTask] = useState({})
  
  const handleSubmit = (e)=>{
      e.preventDefault()

      settask({taskTitle,taskDate,taskDescription,category,newTask:true,active:false,completed:false,failed:false})

      const data = JSON.parse(localStorage.getItem('employee'))
      // console.log(data)

      // data.forEach(function (item) {
      //       if(assignTo == item.firstName){
      //         // console.log(item)
      //         item.tasks.push(task)
      //         item.taskCounts.newTask += 1;
      //         console.log(item)
      //       }
      //       console.log(data)
      //     });
      //     localStorage.setItem('employee',JSON.stringify(data))
      //     refreshData()


    let taskAdded = false;

    const updatedData = data.map((item) => {
      if (assignTo.trim().toLowerCase() === item.firstName.toLowerCase()) {
        item.tasks.push(newTask);
        item.taskCounts.newTask += 1;
        taskAdded = true;
      }
      return item;
    });

    if (taskAdded) {
      localStorage.setItem("employee", JSON.stringify(updatedData));
      refreshData(); // important to update UI
      alert("Task assigned successfully!");
    } else {
      alert("No employee found with that name.");
    }


      
      setassignTo('')
      setcategory('')
      settaskDate('')
      settaskDescription('')
      settaskTitle('')
  }
  return (
        <div className='p-5 bg-[#1c1c1c] mt-7 rounded'>
        <form onSubmit={(e)=>{handleSubmit(e)}} className='flex flex-wrap w-full  items-start justify-between' >
            <div className='w-1/2'>
                 <div>
                <h3 className='text-sm text-gray-300 mb-0.5'>Task Title</h3>
            <input value={taskTitle} onChange={(e)=>{settaskTitle(e.target.value)}} 
            className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type='text' placeholder='Make a UI design'/>
            </div>
 <div>
                <h3 className='text-sm text-gray-300 mb-0.5'>Task Title</h3>
              <h3 className=''>Date</h3>
            <input value={taskDate} onChange={(e)=>{settaskDate(e.target.value)}}
            className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type='date'/>
          </div>
           <div>
             <h3 className='text-sm text-gray-300 mb-0.5'>Assign To</h3>
            <input value={assignTo} onChange={(e)=>{setassignTo(e.target.value)}} 
            className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="text" placeholder='Employee name' />
           </div>
            <div>
                <h3 className='text-sm text-gray-300 mb-0.5'>Category</h3>
            <input value={category} onChange={(e)=>{setcategory(e.target.value)}}
            className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="text" placeholder='Design , Dev , Etc' />
            </div>
            </div>
           
           <div className='w-1/2'>
             <h3 className='text-sm text-gray-300 mb-0.5'>Descreption</h3>
            <textarea value={taskDescription} onChange={(e)=>{settaskDescription(e.target.value)}}
             className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' name="" id="" cols={30} rows={10}></textarea>
            <button className='bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full '>Create Task</button>
           </div>
         
        </form>
      </div>
  )
}

export default CreateTask
