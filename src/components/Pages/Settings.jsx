import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const Settings = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [notifications, setNotifications] = useState({
    repairUpdates: true,
    promotionalOffers: false,
    newDevices: true,
  });

  const toggleNotification = (key) => {
    setNotifications((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <div className="max-w-2xl bg-[#F2F2F2] mx-auto p-8 md:p-16 space-y-6 text-sm md:text-base rounded-3xl">
      {/* Profile Section */}
      <div className="bg-white rounded-2xl shadow p-6 space-y-4 md:space-y-0  md:flex md:space-x-20 ">
        <h2 className="font-bold text-xl md:text-2xl">Profile</h2>
        <form action="" className='space-y-4 '>
          <div className="space-y-1">
            <label className="font-semibold block">Name*</label>
            <input
              type="text"

              className="w-full border rounded-full px-4 py-2 outline-none focus:ring"
            />
          </div>

          <div className="space-y-1">
            <label className="font-semibold block">Email*</label>
            <input
              type="email"

              className="w-full border rounded-full px-4 py-2 outline-none focus:ring"
            />
          </div>

          <div className="space-y-1">
            <label className="font-semibold block">Phone*</label>
            <input
              type="text"
              className="w-full border rounded-full px-4 py-2 outline-none focus:ring"
            />
          </div>

          <div className="space-y-1 relative">
            <label className="font-semibold block">Password*</label>
            <input
              type={showPassword ? 'text' : 'password'}
              className="w-full border rounded-full px-4 py-2 pr-10 outline-none focus:ring"
            />
            <button
              type="button"
              className="absolute right-3 top-9 text-gray-500"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
        </form>
      </div>
      {/* Change Password Section */}
      <div className="bg-white rounded-2xl shadow p-6 flex justify-between">
        <h2 className="font-bold text-xl md:text-2xl">Password</h2>
        <button className="bg-green-700 text-white font-semibold px-4 py-1 rounded-lg ">
          Change password
        </button>
      </div>

      {/* Notifications */}
      <div className="bg-white rounded-2xl shadow p-6 md:flex space-y-4 md:space-y-0 md:justify-between">
        <h2 className="font-bold text-xl md:text-2xl">Notifications</h2>
        <div className="space-y-5">
        {[
          { label: 'Repair Updates', key: 'repairUpdates' },
          { label: 'Promotional Offers', key: 'promotionalOffers' },
          { label: 'New Devices & Services', key: 'newDevices' },
        ].map(({ label, key }) => (
          <div key={key} className="flex justify-between md:space-x-4" >
            <span className='font-semibold text-sm'>{label}</span>
            <button
              onClick={() => toggleNotification(key)}
              className={`w-12 h-6 flex items-center rounded-full p-1 transition-colors duration-300 ${notifications[key] ? 'bg-green-500' : 'bg-gray-400'
                }`}
            >
              <div
                className={`bg-white w-4 h-4 rounded-full shadow-md transform duration-300 ${notifications[key] ? 'translate-x-6' : 'translate-x-0'
                  }`}
              />
            </button>
          </div>
        ))}

        </div>
      </div>

      {/* Danger Zone */}
      <div className="bg-white rounded-2xl shadow p-6 flex justify-between items-center">
        <h2 className="font-bold text-xl md:text-2xl text-red-600">Danger zone</h2>
        <button className="bg-red-600 text-white font-semibold px-4 py-1 rounded-full">
          Delete account
        </button>
      </div>
    </div>
  );
};

export default Settings;
