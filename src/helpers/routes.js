import React from 'react';
import { Navigate,Outlet } from 'react-router-dom'

function IsUserRedirect({ user, redirect }) {

             return(
                 user? <Navigate to={redirect}/>:<Outlet/>
             )
        }

function ProtectedRoute({user}){
    return(
        user?<Outlet/> : <Navigate to='/signin'/>
    )
}
        
  
export {IsUserRedirect,ProtectedRoute}