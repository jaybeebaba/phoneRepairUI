import React from 'react'
import Button from './Button.jsx'
import { FaGoogle, FaApple, FaFacebook, FaEnvelope } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const AuthForm = () => {
  return (
    <div >
      {/* Create Account */}
      <div className="bg-[#F2F2F2] p-6 rounded-lg shadow-lg">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Create Account</h2>
          <div className='flex items-center space-x-2 text-sm text-gray-700'>
            <p>Already have an account?</p>
            <button className="  border-2 px-4 py-1 rounded-3xl">Sign In</button>
          </div>
        </div>

        <div className="space-y-3 pr-8">
          <Button icon={<FaGoogle />} text="Continue with Google" />
          <Button icon={<FaApple />} text="Continue with Apple" />
          <Button icon={<FaFacebook />} text="Continue with Facebook" />
          <Button icon={<FaEnvelope />} text="Continue with Email" />
        </div>

        <div className="flex items-start mt-4 space-x-2">
          <input type="checkbox" className="mt-1" />
          <p className="text-sm text-gray-700">
            Send me tips, trends, updates & offers. <br />
            <span className="text-gray-500">You can unsubscribe at any time.</span>
          </p>
        </div>

        <p className="text-xs text-gray-500 mt-3">
          By continuing, you confirm you are 18 or over and agree to our{" "}
          <a href="#" className="text-blue-500 underline">Privacy Policy</a> and{" "}
          <a href="#" className="text-blue-500 underline">Terms of Use</a>.
        </p>

        <div className='flex justify-end'>
          <Link
            to=""
            className="inline-block bg-green-400 text-blue-900 font-semibold px-3 py-2 text-xs rounded-full hover:bg-green-300 transition mt-4 justify-right"
          >
            Create & Continue
          </Link>
        </div>
      </div>

    </div>
  )
}

export default AuthForm