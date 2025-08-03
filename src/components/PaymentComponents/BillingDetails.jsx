import React from 'react';

const BillingDetails = () => {

  const Auth = true;

  return (
   <div className={`bg-[#F2F2F2]  rounded-lg shadow-lg ${!Auth ? 'pt-2 px-6 ' : 'p-6'}`}>
    <div className={`flex justify-between items-center  ${!Auth ? 'mb-0' : 'mb-6 '}`}>
      {/* Heading */}
      <h2 className="text-xl font-semibold mb-2">Billing Details</h2>
      </div>
      {Auth &&
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
        <div className="flex justify-end pt-4">
          <button
            type="submit"
            className="bg-green-400 hover:bg-green-300 text-white font-semibold text-sm px-6 py-2 rounded-full transition"
          >
            Save & Continue
          </button>
        </div>
      </form>
      </>
      }
    </div>
  );
};

export default BillingDetails;
