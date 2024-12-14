import React from 'react'
import car from "../../assets/car.png"
import map from "../../assets/map.jpg"
import {  useNavigate } from 'react-router-dom';

const Riding = () => {
               const navigator=   useNavigate();
  return (
     <div className='absolute w-full h-[100vh]'>
        
                 <div className=' relative h-1/2'>
                    <img src={map} className='object-fit h-full' />
                    </div> 
          <div className='flex absolute  items-center   bg-white w-full h-1/2  ml-[2px] flex-col'  >
                
                    <hr className=' relative text-3xl text-black border-2 w-screen mr-9'/>  
                     
                 
                   <div className=' flex flex-col md:flex-row gap-[5px] text-center  md:gap-6'>
                    
                    <h4 className='text-2xl font-medium'>Ride way <span><i className="ri-user-smile-line"></i></span>
                    <span>4</span>
                    </h4>
                    <h4 className='text-lg font-medium'>2min away</h4>
                    <h4 className='text-center text-lg'>Affordable ride</h4>
                   </div>
                     <h2 className='text-2xl font-bold mr-2 mt-5 mb-5'>₹193</h2>
                     
                </div>
                       {/* motocycle */}
        
        </div>
  )
}

export default Riding
