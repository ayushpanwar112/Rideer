import React from 'react'

const LocationSearchPanal = ({vehiclePanal,setVehiclePanal}) => {
  const location = [
    "23B,Near Bhaniyawala Jolly grant Lorem ipsum.",
    "23B,Near Bhaniyawala Jolly grant.",
    "23B,Near smile Store 24812 lorem30.",
  ];

  return (
    <div className='flex flex-col gap-4 justify-center' >
      {location.map((item, index) => (
        <div onClick={()=>setVehiclePanal(!vehiclePanal)}
          key={index} // Add a unique key for each list item
          className='flex justify-start ml-2 active:border-2 border-black rounded-md gap-4 text-center w-[90%]'
        >
          <i className="ri-map-pin-fill bg-slate-200 w-7 h-7 text-center rounded-[50px]"></i>
          <h4 className='font-medium text-start'>{item}</h4>
        </div>
      ))}
    </div>
  );
};

export default LocationSearchPanal;
