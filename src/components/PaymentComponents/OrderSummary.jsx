import React from 'react'
import { FaInfoCircle } from 'react-icons/fa';

const OrderSummary = () => {
  return (
     <div className="bg-[#F2F2F2] p-6 rounded-lg shadow-lg space-y-4 h-fit">
          <h2 className="text-lg font-semibold">Order Summary</h2>

          <div className="flex justify-between text-sm">
            <span>Display defective</span>
            <span><s className="text-gray-400">$40.00</s> <span className="text-red-500 font-bold">$33.00</span></span>
          </div>

          <div className="flex justify-between text-sm text-red-600 font-semibold">
            <span>Total Discounts:</span>
            <span>$7.00</span>
          </div>

          <div className="flex justify-between text-sm">
            <span className="flex items-center gap-1">Handling Fee <FaInfoCircle className="text-blue-400" /></span>
            <span>$0.00</span>
          </div>

          <div className="flex justify-between font-bold text-lg pt-2 border-t">
            <span>Total:</span>
            <span>US$ 33.00</span>
          </div>

          <div className="flex items-center gap-2 text-sm text-gray-600">
            <FaInfoCircle className="text-gray-400" />
            Secure Checkout
          </div>
        </div>
  )
}

export default OrderSummary