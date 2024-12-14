import React, { useContext } from 'react';
import promo from "../assets/promo.mp4";
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { CaptainDataContext } from '../context/CaptainContext';

const CaptainSignin = () => {
    const navigator=useNavigate();
  const { captain, setCaptain } = useContext(CaptainDataContext);
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const submitHandler = async (data) => {
    const formData = {
      email: data.email,
      password: data.password,
      fullname: {
        firstname: data.firstname,
        lastname: data.lastname,
      },
      vehicle: {
        color: data.color,
        plate: data.plate,
        capacity: data.capacity,
        vehicleType: data.vehicleType,
      },
    };
    try {
      const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captain/register`, formData);
      const data = response.data;
      setCaptain(data.captain);
      localStorage.setItem('token',data.token);
      navigator('/captain-home');
    } catch (error) {
        alert(error.response.data.message);

    }
    console.log(formData);
    reset();
  };

  return (
    <div className="w-full h-screen relative">
      <video
        src={promo}
        autoPlay
        muted
        loop
        className="absolute top-0 left-0 w-full h-full object-cover"
      />
      <div className="relative z-10 flex flex-col justify-center items-center w-full h-full">
        <Link to="/" className="absolute top-4 left-4 text-white bg-black/50 px-4 py-2 rounded shadow-md z-20">
          Home
        </Link>
        <form className="flex flex-col md:bg-[#00000052] p-8 rounded shadow-lg" onSubmit={handleSubmit(submitHandler)}>
          {/* Name Fields */}
          <h2 className="text-lg font-serif mb-4">What's your Name</h2>
          <div className="flex gap-2 mb-4">
            <input
              type="text"
              placeholder="First name"
              className="text-[16px] md:text-[20px] border bg-[#fbfbfb52] placeholder-black rounded px-2 py-2 font-serif w-[50%]"
              {...register('firstname', { required: "First name is required" })}
            />
            <input
              type="text"
              placeholder="Last name"
              className="text-[16px] md:text-[20px] border bg-[#fbfbfb52] placeholder-black rounded px-2 py-2 font-serif w-[50%]"
              {...register('lastname', { required: "Last name is required" })}
            />
          </div>
          {/* Email */}
          <h2 className="text-lg font-serif mb-2">What's your Email</h2>
          <input
            type="email"
            placeholder="email@example.com"
            className="text-[16px] md:text-[20px] border bg-[#fbfbfb52] placeholder-black rounded px-2 py-2 font-serif mb-4 w-full"
            {...register('email', {
              required: "Email is required",
              pattern: { value: /^\S+@\S+$/i, message: "Invalid email address" },
            })}
          />
          {/* Password */}
          <h2 className="text-lg font-serif mb-2">Your Password</h2>
          <input
            type="password"
            placeholder="password"
            className="text-[16px] md:text-[20px] border bg-[#fbfbfb52] placeholder-black rounded px-2 py-2 font-serif mb-6 w-full"
            {...register('password', {
              required: "Password is required",
              minLength: { value: 6, message: "Password must be at least 6 characters long" },
            })}
          />
          {/* Vehicle Fields */}
          <h2 className="text-lg font-serif mb-2">Your Vehicle</h2>
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Vehicle's color"
              className="text-[16px] md:text-[20px] border bg-[#fbfbfb52] placeholder-black rounded px-2 py-2 font-serif mb-6 w-full"
              {...register('color', { required: "Vehicle color is required" })}
            />
            <input
              type="text"
              placeholder="Plate"
              className="text-[16px] md:text-[20px] border bg-[#fbfbfb52] placeholder-black rounded px-2 py-2 font-serif mb-6 w-full"
              {...register('plate', { required: "Vehicle number plate is required" })}
            />
          </div>
          <div className="flex gap-2">
            <input
              type="number"
              placeholder="Capacity"
              className="text-[16px] md:text-[20px] border bg-[#fbfbfb52] placeholder-black rounded px-2 py-2 font-serif mb-6 w-full"
              {...register('capacity', {
                required: "Vehicle capacity is required",
                min: { value: 1, message: "Capacity must be at least 1" },
              })}
            />
            <select
              className="h-9 mt-2 text-black"
              {...register('vehicleType', {
                required: "Vehicle type is required",
              })}
            >
              <option value="" disabled selected>
                Type
              </option>
              <option value="car">Car</option>
              <option value="motorcycle">Motorcycle</option>
              <option value="auto">Auto</option>
            </select>
          </div>
          {/* Submit */}
          <button
            type="submit"
            className="bg-black text-white px-4 py-2 rounded hover:bg-blue-600 transition"
          >
            Create Operator
          </button>
        </form>
      </div>
    </div>
  );
};

export default CaptainSignin;
