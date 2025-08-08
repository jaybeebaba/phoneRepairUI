import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaCheckCircle } from 'react-icons/fa';
import {
  SiApple,
  SiSamsung,
  SiBlackberry,
  SiOppo,
  SiLenovo
} from 'react-icons/si';

const Hero = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const isOrderPage = location.pathname === '/order';

  return (
    <div className="text-white w-full">
      {isHomePage && (
        <section className="w-full px-4 py-10 lg:py-4 lg:px-20 max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          {/* Left: Text */}
          <div>
            <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold leading-tight mb-6 md:w-4/5">
              PAY MY MONEY BRO. 
              {/* <span className="text-green-400"> Broken Phones</span> */}
            </h1>

            <p className="text-sm sm:text-base text-gray-200 mb-6 leading-relaxed">
              Just Pay me
            </p>

            <Link
              to="/order"
              className="inline-flex items-center bg-green-400 text-blue-900 font-semibold p-3 text-xs md:px-6 md:py-3 rounded-full hover:bg-green-300 transition"
            >
              Fix My Phone
              <FaCheckCircle className="ml-2" />
            </Link>

            {/* Brands */}
            <div className="flex flex-wrap gap-6 items-center mt-8 text-white">
              <SiApple className="text-2xl md:text-4xl" />
              <SiSamsung className="text-5xl" />
              <SiBlackberry className="text-3xl md:text-4xl" />
              <SiOppo className="text-5xl" />
              <SiLenovo className="text-5xl" />
            </div>
          </div>

          {/* Right: Image */}
          <div className="w-full hidden md:flex justify-center md:justify-end ">
            <img
              src="/images/brokenscreen.png"
              alt="Broken Phone"
              className="max-w-xs sm:max-w-sm md:max-w-md w-full h-auto"
            />
          </div>
        </section>
      )}

      {isOrderPage && (
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center py-10">
          Fill your order details
        </h1>
      )}
    </div>
  );
};

export default Hero;
