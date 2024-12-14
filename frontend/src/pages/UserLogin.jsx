import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import promo from "../assets/promo.mp4";
import { userDataContext } from '../context/UserContext';
import axios from 'axios';

const UserLogin = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
       const {data,setData}=useContext(userDataContext);
        const navigator= useNavigate()

  const submitHandler = async(data) => {
   // console.log(data); // Handle form data (e.g., API call)
   try {
      const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/user/login`,data);
      console.log(response.data.user);
      localStorage.setItem('token',response.data.token);
        navigator("/home");
   } catch (error) {
       console.log(error.response.message);
   }
    reset(); 
  };

  return (
    <div className="w-full h-screen relative flex justify-center items-center">
      {/* Video Background */}
      <video 
        src={promo} 
        muted 
        autoPlay 
        loop 
        className="absolute top-0 left-0 w-full h-full object-cover"
      />
      <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-0" />

      {/* Home Link */}
      <Link 
        to="/" 
        className="absolute top-4 left-4 text-white bg-black/50 px-4 py-2 rounded shadow-md z-20"
      >
        Home
      </Link>

      {/* Form Content */}
      <div className="relative z-10  p-8 rounded shadow-lg max-w-md w-full">
        <form 
          className="flex flex-col"
          onSubmit={handleSubmit(submitHandler)}
        >
          <h2 className="text-lg font-serif mb-2">What's your Email</h2>
          <input
            type="email"
            className="text-base md:text-lg border bg-[#fbfbfb52] placeholder-black rounded px-3 py-2 mb-3"
            placeholder="email@example.com"
            {...register('email', { 
              required: 'Email is required', 
              pattern: { value: /^\S+@\S+$/i, message: 'Invalid email address' } 
            })}
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}

          <h2 className="text-lg font-serif mb-2">Password</h2>
          <input
            type="password"
            className="text-base md:text-lg border bg-[#fbfbfb52] placeholder-black0 rounded px-3 py-2 mb-3"
            placeholder="password"
            {...register('password', { 
              required: 'Password is required', 
              minLength: { value: 6, message: 'Password must be at least 6 characters' } 
            })}
          />
          {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}

          <button 
            type="submit" 
            className="bg-black text-white rounded py-2 text-lg mb-4 hover:bg-blue-700 transition duration-1000"
          >
            Login user
          </button>
        </form>

        <p className="text-center text-sm">
          <span className="font-serif">New Here?</span>{' '}
          <Link to="/Usersignin" className="text-white underline">
            Create new Account
          </Link>
        </p>
      </div>

      {/* Sign in as Car Operator Button */}
      <Link
        to="/captainlogin"
        className="absolute bottom-10 bg-yellow-500 text-white rounded py-2 px-4 text-lg font-medium hover:bg-yellow-600 transition"
      >
        Sign in as Car Operator
      </Link>
    </div>
  );
};

export default UserLogin;
