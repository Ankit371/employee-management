import React, { useState } from 'react'


function Login({handleLogin}) {

  // console.log(handleLogin)
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');

  const submitHandler = (e)=>{
    e.preventDefault()
    handleLogin(email,password)
    console.log("hello " , email)
    console.log("your pass " , password)

      setEmail('')
      setPassword('')
  }
  return (
    <div className='flex h-screen w-screen items-center justify-center'>
      <div className='border-2 border-red-600 p-20'>
        <form 
        onSubmit={(e)=>submitHandler(e)}
        className='flex flex-col item-center justify-center'>
          <input
          value={email}
          onChange={(e)=>{
          setEmail(e.target.value)
          }}
           required className='bg-black border-2 border-emerald-600 text-xl rounded-full py-4 px-5' type='email' placeholder='Enter Your Email' />
          <input
          value={password}
          onChange={(e)=>{
            setPassword(e.target.value)
          }}
          required className='bg-black border-2 border-emerald-600 text-xl rounded-full py-4 px-5' type='password' placeholder=' Enter Your password' />
          <button className='mt-4 outline-none hover:bg-emerald-350 border-emerald-600 bg-emerald-600 text-xl rounded-full py-4 px-5'>Log In</button>
        </form>
      </div>
    </div>
  )
}

export default Login
