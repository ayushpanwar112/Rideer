import React, { useEffect, useRef } from 'react';
import car from "../../assets/car.png";
import gsap from "gsap";



const LookingForDriver = () => {
    const hrRef = useRef(null);
    useEffect(() => {
    gsap.to(hrRef.current, {
      borderColor: "rgba(0, 0, 128, 0.7)", // Target color
      duration: 2, // Animation duration
      repeat: -1, // Infinite loop
      yoyo: true, // Reverse on completion
      ease: "power1.inOut", // Smooth easing
    });
  }, []);
  return (
    <div className='w-full h-[58vh]'>
                   
         <div className='flex absolute  items-center   bg-white w-full h-full  ml-[2px] flex-col'  >
                  <h2 className='text-2xl font-semibold py-5 '>Looking for Driver</h2>
                  <hr
      ref={hrRef}
      className="relative text-3xl border-2 w-screen mr-9"
      style={{ borderColor: "rgba(255, 255, 255, 1)" }} // Initial color
    />  
                    <img src={car} className='h-32 w-auto'/>
                
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
  );
};

export default LookingForDriver;
