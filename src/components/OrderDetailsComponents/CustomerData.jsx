import React from 'react'
import { Link } from 'react-router-dom';
import { FaCheckCircle } from 'react-icons/fa';


const CustomerData = () => {
  return (
    <form className="relative z-20 bg-[#F2F2F2] rounded-2xl shadow-md px-6 py-8 max-w-2xl  mx-auto space-y-8 -mt-20 -mb-20">
      {/* Customer Data */}
      <div>
        <h2 className="font-bold text-gray-800 mb-4">Customer Data</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input placeholder="Company name (optional)" className="input" />
          <input placeholder="First & Last name*" className="input" />
          <input placeholder="Email address*" className="input" />
          <input placeholder="Billing address*" className="input" />
        </div>
        <div className='grid grid-cols-1 md:grid-cols-3 mt-4 gap-4'>
          <input placeholder="Postcode*" className="input" />
          <input placeholder="Location*" className="input " />
          <input placeholder="Phone number*" className="input " />
        </div>
      </div>

      {/* Repair Data */}
      <div>
        <h2 className="font-bold text-gray-800 mb-4">Repair data</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <select className="input">
            <option>Mobile Brand*</option>
            <option>Apple</option>
            <option>Samsung</option>
            <option>Google</option>
            <option>OnePlus</option>
            <option>Xiaomi</option>
            <option>Huawei</option>
            <option>Oppo</option>
            <option>Vivo</option>
            <option>Lenovo</option>
          </select>
          <select className="input"><option>Model*</option></select>
          <input placeholder="Colour*" className="input" />
          <input placeholder="IMEI number (15 digit)*" className="input" />
          <input placeholder="Serial number (When no IMEI)*" className="input" />
          <input placeholder="Access code*" className="input" />
        </div>
      </div>

      {/* Complaint of device */}
      <div>
        <h2 className="font-bold text-gray-800 mb-2">Complaint of device</h2>
        <div className="flex  flex-wrap gap-1 font-semibold bg-white py-6 px-4 rounded-2xl shadow-lg">
          {[
            { label: 'Display defective', price: 40 },
            { label: 'Battery/charging problem', price: 50 },
            { label: 'Microphone/speaker problem', price: 50 },
            { label: 'Switching on/off', price: 40 },
            { label: 'Software', price: 50 },
            { label: 'Forgotten device security code', price: 50 },
            { label: 'Does not read SIM card', price: 50 },
          ].map((item, i) => (
            <label key={i} className="flex items-center gap-2 px-1 py-1 rounded-full text-xs cursor-pointer">
              <input type="checkbox" className="accent-green-600" />
              {item.label} <span className="text-red-500">${item.price}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Return Address */}
      <div>
        <h2 className="font-bold text-gray-800 mb-4">Return address</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input placeholder="First & Last name*" className="input" />
          <input placeholder="Email address*" className="input" />
          <input placeholder="Post Code*" className="input" />
          <input placeholder="Location*" className="input" />
        </div>
      </div>

      {/* Instructions */}
      <div>
        <h2 className="font-bold text-gray-800 mb-4">Any Instructions</h2>
        <textarea placeholder="Type your message*" className="input h-24 resize-none" />
      </div>

      {/* Note */}
      <p className="text-xs font-semibold text-gray-500 leading-relaxed">
        After Processing Payment, the repair will be registered with us and you will receive the corresponding form via
        email, which should be printed and brought with it. You should send the device properly packaged and registered
        to the address below.
        <br /><br />
        <strong>Company Address</strong><br />
        A MobileRepair Ltd<br />
        202 High Street B3<br />
        London
      </p>

      {/* Button */}
      <Link
        to="/checkout"
        className="inline-block bg-green-400 text-blue-900 font-semibold px-3 py-2 text-xs rounded-full hover:bg-green-300 transition"
      >
        Proceed to Payment
        <FaCheckCircle className="inline ml-2" />
      </Link>
    </form>
  )
}

export default CustomerData