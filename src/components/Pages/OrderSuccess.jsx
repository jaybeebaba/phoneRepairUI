import React from 'react'
import { Link } from 'react-router-dom'
const OrderSuccess = () => {
  return (
    <div className="py-16 px-3 lg:px-80 flex flex-col items-center justify-center space-y-5 text-center">
        <div className='flex items-center justify-center w-16 h-16 md:w-28 md:h-28 bg-green-200 rounded-full'>

        </div>

        <h2 className='text-2xl md:text-4xl font-bold '>
            Thank you for your order!
        </h2>

        <p className='text-sm font-semibold'>
            Your mobile repair order has been successfully placed. <br/> We will contact you shortly to confirm the details. Get ready for amazing amazing experience with us!
        </p>

         <div className='flex justify-end'>
              <Link
                to="/"
                className="inline-block bg-green-400 text-blue-900 font-semibold px-3 py-2 text-xs rounded-full hover:bg-green-300 transition mt-4 justify-right"
              >
                Back to website
              </Link>
            </div>
    </div>
  )
}

export default OrderSuccess