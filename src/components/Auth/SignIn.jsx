import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaEye, FaEyeSlash, FaGoogle, FaTwitter, FaFacebook } from 'react-icons/fa';

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <form className="relative z-20 bg-[#F2F2F2] rounded-2xl shadow-md px-6 py-8 sm:max-w-md md:max-w-2xl mx-auto space-y-8 m-8 lg:-mt-20 lg:-mb-20">
      <div className="px-1 md:px-40">
        <h2 className="font-bold text-gray-800 mb-4 text-xl md:text-3xl md:mb-8">
          Registration Form
        </h2>

        <div className="space-y-3">
          {/* Name */}
          <div className="space-y-1">
            <label htmlFor="username" className="font-semibold text-sm">
              Username*
            </label>
            <input type="text" id="username" placeholder="Usman" className="input" />
          </div>
                 
          {/* Password */}
          <div className="space-y-1 relative">
            <label htmlFor="password" className="font-semibold text-sm">
              Password*
            </label>
            <input
              type={showPassword ? 'text' : 'password'}
              id="password"
              placeholder="*****"
              className="input pr-10"
            />
            <button
              type="button"
              className="absolute right-3 top-9 text-gray-500"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
          <Link to="" className='text-xs font-semibold text-center mr-auto w-full'>Forgot Password? </Link>
        </div>

        {/* Submit Button */}
        <button className="mx-auto py-2 bg-green-400 rounded-full text-gray-900 font-semibold my-4 w-full text-center">
          Login
        </button>

        <div className="text-center text-xs space-y-3 text-gray-600 font-semibold">
        <p>
          <Link to="/signup">SIGN UP</Link>
          </p>
          <p>
          <Link to="/signup">Or Sign Up with</Link>
          </p>
          <div className='flex justify-center space-x-6 text-3xl'>
            <Link to="/signup"><FaFacebook/></Link> 
            <Link to="/signup"><FaTwitter/></Link> 
            <Link to="/signup"><FaGoogle/></Link>
          </div>

          </div>

          
        
        
      </div>

    </form>
  );
};

export default SignUp;
