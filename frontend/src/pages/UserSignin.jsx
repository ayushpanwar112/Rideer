import React,{useContext} from 'react';
import promo from '../assets/promo.mp4';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { userDataContext } from '../context/UserContext';




const UserSignin = () => {
              const navigator = useNavigate()

        const {user,setUser} =useContext(userDataContext)
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const submitHandler = async(data) => {
    const formData = {
      email: data.email,
      password: data.password,
      fullname: {
        firstname: data.firstname,
        lastname: data.lastname,

    }
  }
      
       try {
         const response =  await axios.post(`${import.meta.env.VITE_BASE_URL}/user/register`,formData);
        const data= response.data;
       
          setUser(data.user);
          localStorage.setItem('token',data.token);
            navigator("/home")
       } catch (error) {
        alert(error.response.data.message)
        
       }
        

       
      
        
   
       
   // console.log(formData); 
    reset(); 

  };

  return (
    <div className="w-full h-screen relative">
      {/* Video Background */}
      <video 
        src={promo} 
        autoPlay 
        muted 
        loop 
        className="absolute top-0 left-0 w-full h-full object-cover" 
      />

      {/* Form Content */}
      <div className="relative z-10 flex flex-col justify-center items-center w-full h-full">
        {/* Home Link */}
        <Link to="/" className="absolute top-4 left-4 text-white bg-black/50 px-4 py-2 rounded shadow-md z-20">
          Home
        </Link>

        {/* Sign-Up Form */}
        <form className="flex flex-col md:bg-[#00000052] p-8 rounded shadow-lg" onSubmit={handleSubmit(submitHandler)}>
          <h2 className="text-lg font-serif mb-4">What's your Name</h2>
          <div className="flex gap-2 mb-4">
            {/* First Name */}
            <input
              type="text"
              placeholder="First name"
              className="text-[16px] md:text-[20px] border bg-[#fbfbfb52] placeholder-black rounded px-2 py-2 font-serif w-[50%]"
              {...register('firstname', { required: 'First name is required' })}
            />
            {errors.firstname && <p className="text-red-500 text-sm">{errors.firstname.message}</p>}

            {/* Last Name */}
            <input
              type="text"
              placeholder="Last name"
              className="text-[16px] md:text-[20px] border bg-[#fbfbfb52] placeholder-black rounded px-2 py-2 font-serif w-[50%]"
              {...register('lastname', { required: 'Last name is required' })}
            />
            {errors.lastname && <p className="text-red-500 text-sm">{errors.lastname.message}</p>}
          </div>

          {/* Email */}
          <h2 className="text-lg font-serif mb-2">What's your Email</h2>
          <input
            type="email"
            placeholder="email@example.com"
            className="text-[16px] md:text-[20px] border bg-[#fbfbfb52] placeholder-black rounded px-2 py-2 font-serif mb-4 w-full"
            {...register('email', { 
              required: 'Email is required', 
              pattern: { value: /^\S+@\S+$/i, message: 'Invalid email address' }
            })}
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}

          {/* Password */}
          <h2 className="text-lg font-serif mb-2">Your Password</h2>
          <input
            type="password"
            placeholder="password"
            className="text-[16px] md:text-[20px] border bg-[#fbfbfb52] placeholder-black rounded px-2 py-2 font-serif mb-6 w-full"
            {...register('password', { 
              required: 'Password is required', 
              minLength: { value: 6, message: 'Password must be at least 6 characters' }
            })}
          />
          {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-black text-white px-4 py-2 rounded hover:bg-blue-600 transition"
          >
            Create User
          </button>
        </form>

        {/* Redirect to Login */}
        <p className="mt-4">
          <span className="text-white">Already have an account?</span>{' '}
          <Link to="/userlogin" className="text-orange-500 underline">
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default UserSignin;
