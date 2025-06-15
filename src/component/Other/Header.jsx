import React from 'react'

function Header() {
  return (
    <>
    <div className='flex items-end justify-between text-white '>
      <h1 className='text-2x font-medium'>hello <br></br><span className='font-semibold text-3xl'>Ankit</span></h1>
      <button className='bg-red-500 text-white px-5 py-2 rounded-smalling '>Log Out</button>
    </div>
    </>
  )
}

export default Header
