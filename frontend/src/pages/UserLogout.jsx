import axios from 'axios';
import React from 'react'
import {useNavigate } from 'react-router-dom';
const UserLogout = () => {
    const navigator= useNavigate()
    const token = localStorage.getItem('token');

    const clickHandle=async()=>{
        try {
            const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/user/logout`,{
        headers:{
            authorization:`Bearer ${token}`
        }
    })       
    localStorage.removeItem('token'); 
      navigator('/')

    // console.log("logout successfully")
        } catch (error) {
             console.log(error)
        }

   
    }

    
  return (
    <div>
       <button  onClick={clickHandle}>click me</button>
    </div>
  )
}

export default UserLogout

