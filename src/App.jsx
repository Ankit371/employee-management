/*
import React, { useContext, useEffect, useState } from 'react'
import Login from './component/Auth/Login'
import EmployeeDashboard from './component/Dashboard/EmployeeDashboard'
import AdminDashboard from './component/Dashboard/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './util/localStorage'
import { AuthContext } from './context/AuthProvider'

function App() {
  // useEffect(()=>{
  //   // setLocalStorage()
  //   getLocalStorage()
  // },[])

  const [user,setUser]=useState(null)
  const [loggedInUserData,setLoggedInUserData] = useState(null)
   const authData = useContext(AuthContext);
if (!authData) return <div className="text-white text-center mt-20">Loading user data...</div>;

  // console.log(authData)


  // useEffect(()=>{
  //   if(authData){
  //     const loggedInUser = localStorage.getItem("loggedInUser")
  //     if (loggedInUser) {
  //       setUser(loggedInUser.role)
  //     }
  //   }
  // },[authData])

  useEffect(()=>{
    const loggedInUser = localStorage.getItem('loggedInUser')
    if(loggedInUser){
    const userData = JSON.parse(loggedInUser)
    setUser(userData.role)
    setLoggedInUserData(userData.data) 
    // console.log(userData.data)
    }
  },[])

  const handleLogin = (email,password)=>{
    if(email == 'admin@example.com' && password == '123'){
      console.log("this is Admin")
      // Inside handleLogin:
      const { admin } = getLocalStorage()
      setUser('admin')
setLoggedInUserData(admin[0])
localStorage.setItem('loggedInUser', JSON.stringify({role:"admin", data:admin[0]}))

      // localStorage.setItem('loggedInUser',JSON.stringify({role:"admin",data:admin}))
    }else if(authData){
      const employee = authData.employee.find((e)=>email == e.email && e.password == password)
      console.log("thi is a user")
      if(employee){
      setUser('employee')
      setLoggedInUserData(employee)

      localStorage.setItem('loggedInUser',JSON.stringify({role:"employee", data:employee}))
      }

    }
    else{
      alert("invalid input")
    }
  }

  // handleLogin('admin@example.com',123)

 
  return (
    <>
    {
      !user ?  <Login handleLogin={handleLogin}/> : ''
    }
    { user == 'admin' ? <AdminDashboard changeUser={setUser} data={loggedInUserData} /> : (user == 'employee' ? <EmployeeDashboard changeUser={setUser} data={loggedInUserData} /> : null ) }
    </>
  )
}

export default App*/




import React, { useContext, useEffect, useState } from 'react';
import Login from './component/Auth/Login';
import EmployeeDashboard from './component/Dashboard/EmployeeDashboard';
import AdminDashboard from './component/Dashboard/AdminDashboard';
import { getLocalStorage } from './util/localStorage';
import { AuthContext } from './context/AuthProvider';

function App() {
  const [user, setUser] = useState(null);
  const [loggedInUserData, setLoggedInUserData] = useState(null);

  const authData = useContext(AuthContext);

  // ✅ Safe check before using authData
  // if (!authData) {
  //   return <div className="text-white text-center mt-20">Loading user data...</div>;
  // }

  // ✅ Load user info from localStorage on first load
  useEffect(() => {
    const loggedInUser = localStorage.getItem('loggedInUser');
    if (loggedInUser) {
      const userData = JSON.parse(loggedInUser);
      setUser(userData.role);
      setLoggedInUserData(userData.data);
    }
  }, []);

  // ✅ Login handler
  const handleLogin = (email, password) => {
    if (email === 'admin@example.com' && password === '123') {
      const { admin } = getLocalStorage();
      setUser('admin');
      setLoggedInUserData(admin[0]);
      localStorage.setItem('loggedInUser', JSON.stringify({ role: 'admin', data: admin[0] }));
    } else if (authData) {
      const employee = authData.employee.find(
        (e) => email === e.email && password === e.password
      );
      if (employee) {
        setUser('employee');
        setLoggedInUserData(employee);
        localStorage.setItem('loggedInUser', JSON.stringify({ role: 'employee', data: employee }));
      } else {
        alert('Invalid employee credentials');
      }
    } else {
      alert('Invalid input');
    }
  };

  return (
    <>
      {!user && <Login handleLogin={handleLogin} />}
      {user === 'admin' && (
        <AdminDashboard changeUser={setUser} data={loggedInUserData} />
      )}
      {user === 'employee' && (
        <EmployeeDashboard changeUser={setUser} data={loggedInUserData} />
      )}
    </>
  );
}

export default App;
