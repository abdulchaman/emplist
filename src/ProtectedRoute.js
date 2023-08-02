import React, { useEffect, useState } from 'react';
import { useAuthContext } from './context/authContext';
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
    // const [ltk,getLtk]= useState(sessionStorage.getItem('ltk'));
    // useEffect(()=>{
    //     const currentLtk = sessionStorage.getItem('ltk');
    //     getLtk(currentLtk)
    // },[])
    // const {user} = useAuthContext();;
    const atk = sessionStorage.getItem('atk');
    if(!atk){
        return <Navigate to="/"></Navigate>
    }else{
        return children;
    }
}

export default ProtectedRoute;