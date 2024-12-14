import React from 'react'
import car from "../../assets/car.png"

const ConfirmRide = ({setVehiclePanal,setConfirmRide,setLookingDriver}) => {
  return (
    <div className='w-full h-[70vh]'>
                
      <div className='flex absolute  items-center   bg-white w-full h-full  ml-[2px] flex-col'  >
               <h2 className='text-2xl font-semibold py-5 '>Confirm Your Ride</h2>
                <hr className=' relative text-3xl text-black border-2 w-screen mr-9'/>  
                 <img src={car} className='h-32 w-auto'/>
             
               <div className=' flex flex-col md:flex-row gap-[5px] text-center  md:gap-6'>
                
                <h4 className='text-2xl font-medium'>Ride way <span><i className="ri-user-smile-line"></i></span>
                <span>4</span>
                </h4>
                <h4 className='text-lg font-medium'>2min away</h4>
                <h4 className='text-center text-lg'>Affordable ride</h4>
               </div>
                 <h2 className='text-2xl font-bold mr-2 mt-5 mb-5'>₹193</h2>
                  <button className='bg-black text-white p-4 rounded-md' onClick={()=>{
                    setVehiclePanal(false);
                    setConfirmRide(false);
                    setLookingDriver(true);
                    
                  }}>BOOK Ride</button>
            </div>
                   {/* motocycle */}
    
    </div>
  )
}

export default ConfirmRide
