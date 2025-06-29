import React, { createContext, useEffect, useState } from 'react'
import { getLocalStorage, setLocalStorage } from '../util/localStorage'


export const AuthContext = createContext()


const AuthProvider = ({children})=> {

    const [userData,setUserData]=useState(null)

    // useEffect(()=>{
    //     setLocalStorage()
        
    //     const {employee,admin} = getLocalStorage();
    //     setUserData({employee,admin})

    //     // const data = getLocalStorage()
    //     // console.log(data)
    // },[])
    const loadData = ()=>{

      const { employee, admin } = getLocalStorage();
      setUserData({ employee, admin });
    }
    
    useEffect(() => {
      const existingData = localStorage.getItem("employee")
      if (!existingData) {
        setLocalStorage()
      }
      loadData()
    }, []);

  return (  
    <div>
        <AuthContext.Provider value={{...userData,refreshData:loadData}} >
            {children}
        </AuthContext.Provider>
    </div>
  )
}

export default AuthProvider