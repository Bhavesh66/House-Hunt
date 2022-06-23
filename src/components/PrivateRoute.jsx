import { Navigate,Outlet } from 'react-router-dom'
import { useAuthStatus } from '../hooks/useAuthStatus'
import React from 'react'
import Spinner from './Spinner'
export const PrivateRoute = () => {
   const{loggedIn, checkingStatus}=useAuthStatus()
 
 if(checkingStatus){


     return <Spinner />
    
 }

console.log(loggedIn)
 
   return loggedIn ? <Outlet/> : <Navigate to='/sign-in' />

  

}

export default PrivateRoute