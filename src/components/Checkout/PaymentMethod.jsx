import React, { useState } from 'react';
import { FaCcVisa, FaCcMastercard, FaCcAmex, FaCcDiscover, FaPaypal } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Button from './Button.jsx'


const PaymentMethod = ({auth, added}) => {
  const [paymentMethod, setPaymentMethod] = useState('card');
  return (
   <div >
     
      <div className={`bg-[#F2F2F2]  rounded-lg shadow-lg ${!auth && !added ? 'py-2 px-6 ' : 'px-6 py-6'}`}>
        <div className={`flex justify-between items-center  ${!auth && !added ? 'mb-0' : ' '}`}>
          <h2 className="text-lg font-semibold">Select Payment Method</h2>
        </div>
        {auth && added  &&
          <>
            <div className="border border-gray-300 rounded-xl p-4 space-y-4">
        {/* Card Option */}
        <div className="flex items-center gap-2">
          <input
            type="radio"
            name="payment"
            value="card"
            checked={paymentMethod === 'card'}
            onChange={() => setPaymentMethod('card')}
            className="accent-green-500"
          />
          <label className="font-medium">Cards</label>
          <div className="flex gap-2 ml-auto text-xl text-gray-500">
            <FaCcVisa />
            <FaCcMastercard />
            <FaCcAmex />
            <FaCcDiscover />
          </div>
        </div>

        {/* Card Input Fields */}
        {paymentMethod === 'card' && (
          <div className="space-y-3">
            <input
              type="text"
              placeholder="1234 1234 1234 1234"
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none"
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="MM / YY"
                className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none"
              />
              <div className="relative">
                <input
                  type="text"
                  placeholder="CVC"
                  className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none"
                />
                <span className="absolute right-3 top-2.5 text-sm text-gray-400">123</span>
              </div>
            </div>
            <p className="text-xs text-gray-500">
              By providing your card information, you allow generation to charge your card for
              future payments in accordance with their terms.
            </p>
          </div>
        )}

        {/* PayPal Option */}
        <div className="flex items-center gap-2 border-t border-gray-300 pt-4">
          <input
            type="radio"
            name="payment"
            value="paypal"
            checked={paymentMethod === 'paypal'}
            onChange={() => setPaymentMethod('paypal')}
            className="accent-green-500"
          />
          <label className="font-medium flex items-center gap-1">PayPal <FaPaypal className="text-blue-600 text-lg" /></label>
        </div>
      </div>

      {/* Footer Note */}
      <p className="text-xs text-gray-600 mt-4">
        Your personal data will be used to process your order, support your experience throughout
        this website, and for other purposes described in our{' '}
        <a href="#" className="text-green-600 underline">privacy policy</a>.
      </p>

      {/* Submit Button */}
      <div className="pt-6 text-center">
        <button
          type="submit"
          className="w-full bg-green-400 hover:bg-green-300 text-white font-bold py-3 rounded-full transition"
        >
          Place Your Order
        </button>
      </div>
          </>
        }

      </div>

    </div>
  )
}

export default PaymentMethod