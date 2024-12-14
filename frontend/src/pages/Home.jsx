import React from 'react';
import logo from "../assets/logo.png";
import hero from "../assets/back.mp4"
import mobile from "../assets/mobile.mp4"
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="h-screen w-full relative overflow-hidden">
      {/* Video Background */}
      <video
        className="absolute top-0 left-0 w-full h-full object-fill"
        src={hero} // Replace with the correct path to your video
        autoPlay
        loop
        muted
      ></video>
       <video
        className="absolute top-0 left-0 w-full h-full object-fill md:hidden"
        src={mobile} // Replace with the correct path to your video
        autoPlay
        loop
        muted
      ></video>

      {/* Content */}
      <div className="relative h-screen w-full pt-8 flex flex-col justify-between sm:justify-start">
        <img
          src={logo}
          alt="no img"
          className="w-20 ml-8 sm:w-24 md:w-32 lg:w-40 xl:w-48"
        />
        <div className="flex flex-col items-center pb-4 gap-5 bg-white bg-opacity-80 md:bg-transparent md:mt-[30%]">
          <h2 className="sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl font-bold mt-1">
            Book your Rider
          </h2>
          <Link to="/userlogin" className="bg-black md:bg-[rgba(0,0,0,0.4)] md:text-white text-white py-3 w-1/2 rounded text-base md:text-2xl md:font-semibold flex items-center justify-center  ">
            Get start
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
