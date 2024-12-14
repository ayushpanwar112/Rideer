import React, { useEffect, useRef, useState } from 'react';
import map from "../assets/map.jpg";
import gsap from "gsap";
import 'remixicon/fonts/remixicon.css';
import LocationSearchPanal from '../components/user/LocationSearchPanal';
import VehiclePanal from '../components/user/VehiclePanal';
import ConfirmRide from '../components/user/ConfirmRide';
import LookingForDriver from '../components/user/LookingForDriver';
import WaitingForDriver from '../components/user/WaitingForDriver';

const Homepage = () => {  
  const [pickup, setPickup] = useState('');
  const [destination, setDestination] = useState('');
  const [panalOpen, setPanal] = useState(false);
  const panalRef = useRef(null);
  const [vehiclePanal, setVehiclePanal] = useState(false);
  const vehicleRef = useRef(null);
  const [confirmRide, setConfirmRide] = useState(false);
  const confirmRef = useRef(null);
  const [lookingDriver, setLookingDriver] = useState(false);
  const lookingRef = useRef(null);
  const waitingRef = useRef(null);
  const [waitingForDriver,setWaitingForDriver] =useState(false);

  const handleSubmit = (e) => { 
    e.preventDefault();
    console.log('Pickup Location:', pickup);
    console.log('Destination:', destination);
  };
  
  useEffect(() => {
    
    gsap.set(panalRef.current, { opacity: 0, height: '0%' });
    if (panalOpen) {
      gsap.to(panalRef.current, { opacity: 1, height: '60%', duration: 1 });
    } else {
      gsap.to(panalRef.current, { opacity: 0, height: '0%', duration: 0.5 });
    }
  }, [panalOpen]);

  useEffect(() => {
    if (vehicleRef.current) {
      if (vehiclePanal) {
        // Animate to visible state when vehiclePanal is true
        gsap.to(vehicleRef.current, {
          translateY: '0%',
          duration: 1.5,
          ease: 'power3.out',
        });
      } else {
        // Reset to hidden state when vehiclePanal is false
        gsap.to(vehicleRef.current, {
          translateY: '100%',
          duration: 1,
          ease: 'power3.in',
        });
      }
    }
  }, [vehiclePanal]);

  useEffect(() => {
    
    if (confirmRef.current) {
      gsap.to(confirmRef.current, {
        translateY: confirmRide?"0%":"100%",
        duration: 1.5, // Smooth transition
        ease: "power3.out",
      });
    }
  }, [confirmRide]);
  useEffect(()=>{
    if(lookingRef.current)
    {
      gsap.to(lookingRef.current,{
        translateY:lookingDriver?"0%":"100%",
        duration:1.5,

      })
    }
  },[lookingDriver])
  useEffect(()=>{
    if(waitingRef.current)
    {
      gsap.to(waitingRef.current,{
        translateY:waitingForDriver?"0%":"100%",
        duration:1.5,

      })
    }
  },[waitingForDriver])


  return (
    <div className="h-screen relative overflow-hidden"> 
      <div className="w-full h-full">
        <img src={map} alt="Map" className="w-full h-screen object-cover" />
      </div>
      <div className="absolute h-screen top-0 w-full justify-end flex flex-col">
        <div className="h-[30%] p-5 bg-white relative">
          <h3 className='text-2xl'>
            <i
              className="ri-arrow-down-s-line absolute right-3"
              onClick={() => {
                setPanal(false);
                setVehiclePanal(false);
              }}
            ></i>
          </h3>
          <h3 className="text-2xl font-semibold mb-5">Find a trip</h3>
          <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
            <div className="absolute line w-[2px] h-[100px] bottom-8 md:w-[3px] left-9 bg-gray-500 rounded-full"></div>
            <input 
              onClick={() => {
                setPanal(true);
                setVehiclePanal(false);
              }}
              type="text"
              placeholder="Add a pick-up location"
              value={pickup}
              onChange={(e) => setPickup(e.target.value)}
              className="bg-[#eee] px-8 py-2 rounded-md"
            />
            <input 
              onClick={() => {
                setPanal(true);
                setVehiclePanal(false);
              }}
              type="text"
              placeholder="Enter your destination"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              className="bg-[#eee] px-8 py-2 rounded-md"
            />
          </form>
        </div>
        <div
          className="bg-white"
          ref={panalRef}
          style={{ opacity: 0, height: '0%' }}
        >
          <LocationSearchPanal vehiclePanal={vehiclePanal} setVehiclePanal={setVehiclePanal} />
        </div>
      </div>

      <div ref={vehicleRef} className='fixed bottom-0 bg-white translate-y-full w-full px-3 pt-6'> 
        <VehiclePanal
          setVehiclePanal={setVehiclePanal}
          setPanal={setPanal}
          setConfirmRide={setConfirmRide}
        />
        
      </div> 
      <div ref={confirmRef} className='fixed bottom-0 bg-white translate-y-full w-full px-3 pt-6'> 
      <ConfirmRide
          setConfirmRide={setConfirmRide}
          setVehiclePanal={setVehiclePanal}
      
          setLookingDriver={setLookingDriver}
        />
      </div>
      <div ref={lookingRef}className='fixed bottom-0 bg-white translate-y-full w-full px-3 pt-6'>
    <LookingForDriver/>
      </div>

     <div ref={waitingRef} className='fixed bottom-0 bg-white translate-y-full w-full px-3 pt-6'>
      <WaitingForDriver/>
     </div>
    </div>
  );
};

export default Homepage;
