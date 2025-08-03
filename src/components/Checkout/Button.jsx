import React from 'react'

const Button = ({ icon, text }) => {

    
  return (
    <button className="w-full flex items-center  gap-3 px-4 py-2 border rounded-full hover:bg-gray-50 text-gray-700 font-semibold text-sm shadow-md bg-white">
      {icon}
      <span className="text-sm">{text}</span>
    </button>


  )
}

export default Button