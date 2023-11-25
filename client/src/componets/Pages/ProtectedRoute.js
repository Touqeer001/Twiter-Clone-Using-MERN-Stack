import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import auth from '../../firebase.init'
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({children}) => {
    const[user,isLoading]=useAuthState(auth);
    if(!user){
        return <Navigate ></Navigate>
    }

  return (
    <div>ProtectedRoute</div>
  )
}

export default ProtectedRoute