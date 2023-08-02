import React from 'react';
import { useAuthContext } from '../../context/authContext';
import {useNavigate} from "react-router-dom";

const EmpList = () => {
    const navigate = useNavigate();
    const {user, logOut} = useAuthContext();
    const handleLogout=async(e)=>{
        e.preventDefault();
        try {
            await logOut();
            navigate('/');
        } catch (error) {
            console.log("error",error)
        }
    }
  return (
    <>
        {
        user &&(
            <>
            <div>{user.email}</div>
            <button className='btn btn-danger' onClick={handleLogout}>Logout</button>
            </>
        )
    }
    </>

  )
}

export default EmpList;