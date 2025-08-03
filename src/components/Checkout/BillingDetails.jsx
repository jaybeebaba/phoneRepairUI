import React from 'react';
import { Link } from 'react-router-dom'

const BillingDetails = ({auth}) => {

 return (
   <div className={`bg-[#F2F2F2]  rounded-lg shadow-lg ${!auth ? 'pt-2 px-6 ' : 'p-6'}`}>
    <div className={`flex justify-between items-center  ${!auth ? 'mb-0' : 'mb-6 '}`}>
      {/* Heading */}
      <h2 className="text-xl font-semibold mb-2">Billing Details</h2>
      </div>
      {auth &&
      <>
      <p className="text-sm text-gray-600 mb-6">
        We collect and use personal data in accordance with our{' '}
        <a href="#" className="text-blue-600 underline">Privacy Policy</a>. By creating an account,
        you agree to our{' '}
        <a href="#" className="text-blue-600 underline">Terms and Conditions</a>.
      </p>

      {/* Form */}
      <form className="space-y-4">
        {/* Name Fields */}
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">First Name <span className="text-red-500">*</span></label>
            <input type="text" placeholder="Usman" className="w-full px-4 py-2 rounded-full border border-gray-300 focus:outline-none" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Last Name <span className="text-red-500">*</span></label>
            <input type="text" placeholder="Tariq" className="w-full px-4 py-2 rounded-full border border-gray-300 focus:outline-none" />
          </div>
        </div>

        {/* Company */}
        <div>
          <label className="block text-sm font-medium mb-1">Company Name<span className="text-red-500">*</span></label>
          <input type="text" placeholder="Saudi Arabia" className="w-full px-4 py-2 rounded-full border border-gray-300 focus:outline-none" />
        </div>

        {/* Country */}
        <div>
          <label className="block text-sm font-medium mb-1">Country<span className="text-red-500">*</span></label>
          <input type="text" placeholder="Saudi Arabia" className="w-full px-4 py-2 rounded-full border border-gray-300 focus:outline-none" />
        </div>

        {/* Address 1 */}
        <div>
          <label className="block text-sm font-medium mb-1">Address Line 1<span className="text-red-500">*</span></label>
          <input type="text" placeholder="Saudi Arabia" className="w-full px-4 py-2 rounded-full border border-gray-300 focus:outline-none" />
        </div>

        {/* Address 2 */}
        <div>
          <label className="block text-sm font-medium mb-1">Address Line 2</label>
          <input type="text" placeholder="Saudi Arabia" className="w-full px-4 py-2 rounded-full border border-gray-300 focus:outline-none" />
        </div>

        {/* City / State / Zip */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">City<span className="text-red-500">*</span></label>
            <input type="text" placeholder="Saudi Arabia" className="w-full px-4 py-2 rounded-full border border-gray-300 focus:outline-none" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">State / Province / Region</label>
            <input type="text" placeholder="Saudi Arabia" className="w-full px-4 py-2 rounded-full border border-gray-300 focus:outline-none" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Zip / Postal Code</label>
            <input type="text" placeholder="12345" className="w-full px-4 py-2 rounded-full border border-gray-300 focus:outline-none" />
          </div>
        </div>

        {/* Button */}
        <div className='flex justify-end'>
              <Link
                to=""
                className="inline-block bg-green-400 text-blue-900 font-semibold px-3 py-2 text-xs rounded-full hover:bg-green-300 transition mt-4 justify-right"
              >
                Save & Continue
              </Link>
            </div>
      </form>
      </>
      }
    </div>
  );
};

export default BillingDetails;
