import React from 'react';
import errors from "../assets/error.gif";
import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <div className="w-full h-screen bg-[#FBB82E] relative">
      <img 
        src={errors} 
        alt="no gif found" 
        className="object-contain w-full h-full" 
      />
      <Link 
        to="/" 
        className="absolute bottom-[80%] left-1/2 transform -translate-x-1/2 text-white text-xl font-semibold bg-[#0f6f14] md:px-6 md:py-2 px-3 py-4 rounded"
      >
        Go Back to Home
      </Link>
    </div>
  );
}

export default ErrorPage;

