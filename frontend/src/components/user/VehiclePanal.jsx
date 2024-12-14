import React from 'react';
import car from '../../assets/car.png';
import bike from '../../assets/bike.webp';
import auto from '../../assets/auto.png';

const VehiclePanal = ({ setPanal, setConfirmRide }) => {
  return (
    <div
      className="flex flex-col gap-4 p-4"
      onClick={() => {
        setConfirmRide(true);
        setPanal(false);
      }}
    >
      {/* Car Option */}
      <div className="flex items-center w-full border border-gray-300 rounded-md p-2 active:border-2">
        <img src={car} alt="Car" className="h-20" />
        <div className="flex flex-col md:flex-row gap-2 md:gap-6 text-center flex-grow px-4">
          <h4 className="text-lg font-medium">
            Ride way <span><i className="ri-user-smile-line"></i></span>
            <span> 4</span>
          </h4>
          <h4 className="text-lg font-medium">2 min away</h4>
          <h4 className="text-center text-lg">Affordable ride</h4>
        </div>
        <h2 className="text-2xl font-bold">₹193</h2>
      </div>

      {/* Bike Option */}
      <div className="flex items-center w-full border border-gray-300 rounded-md p-2 active:border-2">
        <img src={bike} alt="Bike" className="h-14" />
        <div className="flex flex-col md:flex-row gap-2 md:gap-6 text-center flex-grow px-4">
          <h4 className="text-lg font-medium">
            Ride way <span><i className="ri-user-smile-line"></i></span>
            <span> 1</span>
          </h4>
          <h4 className="text-lg font-medium">4 min away</h4>
          <h4 className="text-center text-lg">Affordable ride</h4>
        </div>
        <h2 className="text-2xl font-bold">₹19</h2>
      </div>

      {/* Auto Option */}
      <div className="flex items-center w-full border border-gray-300 rounded-md p-2 active:border-2">
        <img src={auto} alt="Auto" className="h-20" />
        <div className="flex flex-col md:flex-row gap-2 md:gap-6 text-center flex-grow px-4">
          <h4 className="text-lg font-medium">
            Ride way <span><i className="ri-user-smile-line"></i></span>
            <span> 3</span>
          </h4>
          <h4 className="text-lg font-medium">1 min away</h4>
          <h4 className="text-center text-lg">Affordable ride</h4>
        </div>
        <h2 className="text-2xl font-bold">₹70</h2>
      </div>
    </div>
  );
};

export default VehiclePanal;
