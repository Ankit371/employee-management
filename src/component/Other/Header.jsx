import React, { useState } from 'react'

const Header = (props) => {

//   const [userName,setUserName] = useState('')

// if(!data){
//   setUserName('admin')
// }
// else{
//   setUserName(data.firstName)
// }
const logOutUser = ()=>{
localStorage.setItem('loggedInUser','')
// window.location.reload()
// console.log(props.changeUser)
    props.changeUser('')
}

  return (
    <>
    <div className='flex items-end justify-between text-white '>
      <h1 className='text-2x font-medium'>hello <br></br><span className='font-semibold text-3xl'>{props.data.firstName || "admin"}</span></h1>
      <button onClick={logOutUser} className='bg-red-500 text-white px-5 py-2 rounded-smalling '>Log Out</button>
    </div>
    </>
  )
}

export default Header
