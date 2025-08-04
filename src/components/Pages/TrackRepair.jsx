import React from 'react';
import { Link } from "react-router-dom"
import { FaCheck, FaSearch, FaTools, FaBoxOpen, FaPhone, FaEnvelope, FaComments } from 'react-icons/fa';

const TrackRepair = () => {
  return (
    <div className="bg-white min-h-screen px-4 md:px-16 lg:px-72 py-10">
      {/* Heading */}
      <div className='space-y-4 md:space-y-0 md:flex items-center justify-between mb-10 gap-2'>
        <div className="flex flex-col gap-3 md:gap-8">
          <h1 className="text-2xl md:text-5xl font-bold ">Track your repair</h1>

          <input
            type="text"
            placeholder="Enter Repair ID/Reference Number"
            className="px-4 py-2 border border-gray-300 shadow-md rounded-full w-full "
          />
          <div className='flex '>
            <Link
              to=""
              className="inline-block bg-green-400 text-blue-900 font-semibold px-8 py-2 text-lg rounded-full hover:bg-green-300 transition "
            >
              Track
            </Link>
          </div>

        </div>
        <img
          src="/images/phone-repair.png"
          alt="Phone repair illustration"
          className="w-64 md:w-80"
        />
      </div>


      {/* tracking progress */}
      <div className="flex flex-col items-center justify-center ">


        <div className="flex gap-2 md:gap-8 rounded-lg border-gray-900 border-2  p-4 md:p-8 w-full">
          <div className="flex  flex-col gap-4 w-2/3 justify-between border-r-2 pr-4 md:pr-8 border-r-gray-900">
            <h2 className="font-semibold text-lg md:text-2xl">iPhone 13</h2>
            <div >
              <Link
                to=""
                className="inline-block bg-green-400 text-gray-900 font-semibold px-3 py-2 text-xs rounded-full  "
              >
                In Progress
              </Link>
            </div>
            <div className="bg-gray-200 h-2 rounded-full overflow-hidden ">
              <div className="bg-green-500 h-2 w-2/3"></div>
            </div>

            <p className="text-sm text-gray-900 font-semibold">Repair Status</p>
          </div>

          <div className="flex flex-col font-semibold gap-6 justify-center text-gray-900">

            <div className='space-y-1'>
              <p className="text-xs md:text-sm ">Estimated Completion</p>
              <p className="text-sm md:text-lg">July 22, 2025</p>
            </div>

            <div className='space-y-1'>
              <p className="text-xs md:text-sm ">Service Center</p>
              <p className="text-sm md:text-lg">TechFix</p>
            </div>

          </div>


        </div>

        {/* timeline */}
        <div className="">
          <ul className="border-l-2 border-gray-900 md:pt-4 space-y-8">
            <li className="-ml-3.5 flex items-center gap-4 justify-center">
              <div className=" bg-white rounded-full border-2 border-gray-600 p-1 text-sm ">
              <FaCheck  />
              </div>
              <div className='space-y-1'>
              <p className="font-semibold">Received</p>
              <p className="text-sm ">July 18, 2025 10:15 AM</p>
              </div>
            </li>
             <li className="-ml-3.5 flex items-center gap-4 justify-center">
              <div className=" bg-white rounded-full border-2 border-gray-600 p-1 text-sm ">
              <FaSearch  />
              </div>
              <div className='space-y-1'>
              <p className="font-semibold">Diagnosis</p>
              <p className="text-sm ">July 18, 2025 10:15 AM</p>
              </div>
            </li>
             <li className="-ml-3.5 flex items-center gap-4 justify-center">
              <div className=" bg-white rounded-full border-2 border-gray-600 p-1 text-sm ">
              <FaTools  />
              </div>
              <div className='space-y-1'>
              <p className="font-semibold">Repair</p>
              <p className="text-sm ">July 18, 2025 10:15 AM</p>
              </div>
            </li>
             <li className="-ml-3.5 flex items-center gap-4 justify-center">
              <div className=" bg-white rounded-full border-2 border-gray-600 p-1 text-sm ">
              <FaBoxOpen  />
              </div>
              <div className='space-y-1'>
              <p className="font-semibold">Ready for pickup</p>
              <p className="text-sm ">July 18, 2025 10:15 AM</p>
              </div>
            </li>
           
          </ul>
        </div>
      </div>




      {/* Help Section */}
      <div className="text-gray-900 font-bold mt-8 md:mt-12">
        <h3 className="text-xl md:text-3xl  mb-4">Need help with your repair?</h3>
        <div className="flex md:flex-row justify-between text-xl  md:text-3xl">
          <div className="flex items-center gap-3 justify-center">
            <FaComments className="" />
            <span className='text-sm'>Live Chat</span>
          </div>
          <div className="flex items-center gap-3 justify-center">
            <FaPhone className="" />
            <span className='text-sm'>Call Us</span>
          </div>
          <div className="flex items-center gap-3 justify-center">
            <FaEnvelope className="" />
            <span className='text-sm'>Email Us</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrackRepair; 