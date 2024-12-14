import React from 'react'
import car from "../../assets/car.png"
import human from "../../assets/human.jpg"

const WaitingForDriver = () => {
  return (
    <div className='w-full h-[50vh] '>
                       
             <div className='flex absolute flex-col     bg-white w-full h-full  ml-[2px]'  >
                     <div className='flex justify-between w-full pr-14 items-center'>
 <div className='flex  justify-start '>
                        <img src={car} className='h-24'/> 
                        <div className=' relative top-3 right-10 w-16 h-16 rounded-full overflow-hidden'>
  <img src={human} className='w-full h-full object-cover' />
</div>
                        
                       </div>
                       <div className='flex flex-col'>
                         <h2 className='font-bold'>Driver name</h2>
                         <p>plate</p>
                         <p>Car name</p>
                       </div>
                        
                     </div>
                      <div className=' flex flex-col md:flex-row gap-[5px]  justify-start md:gap-6 '>
                       
                       <h4 className='text-2xl font-medium'>Ride way <span><i className="ri-user-smile-line"></i></span>
                       <span>4</span>
                       </h4>
                       <h4 className='text-lg font-medium'>2min away</h4>
                       <h4 className='font-semibold'><span><i class="ri-focus-3-line "></i></span>Jolly grant</h4>
                       <h5 className='font-semibold'><span><i class="ri-focus-3-line"></i></span>Doiwala</h5>
                       <h4 className=' text-lg'>Affordable ride</h4>
                      </div>
                        <h2 className='text-2xl font-bold mr-2 mt-5 mb-5'>₹193</h2>
                         
                   </div>
                          
           
           </div>
  )
}

export default WaitingForDriver
