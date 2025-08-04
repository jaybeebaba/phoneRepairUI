import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

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
            <label htmlFor="name" className="font-semibold text-sm">
              Name*
            </label>
            <input type="text" id="name" placeholder="Usman" className="input" />
          </div>

          {/* Email */}
          <div className="space-y-1">
            <label htmlFor="email" className="font-semibold text-sm">
              Email*
            </label>
            <input type="text" id="email" placeholder="email@email.com" className="input" />
          </div>

          {/* Country */}
          <div className="space-y-1">
            <label htmlFor="country" className="font-semibold text-sm">
              Country*
            </label>
            <input type="text" id="country" placeholder="Country" className="input" />
          </div>

          {/* Phone */}
          <div className="space-y-1">
            <label htmlFor="phone" className="font-semibold text-sm">
              Phone*
            </label>
            <input type="text" id="phone" placeholder="+1 3323 422" className="input" />
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
        </div>

        {/* Submit Button */}
        <button className="mx-auto py-2 bg-green-400 rounded-full text-gray-900 font-semibold my-4 w-full text-center">
          Create Account
        </button>

        {/* Login Link */}
        <p className="text-sm text-center">
          Already have an account? <Link to="/signin" className="text-green-300">Sign in</Link>
        </p>
      </div>
    </form>
  );
};

export default SignUp;
