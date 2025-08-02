import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaCheckCircle } from 'react-icons/fa';
import { SiApple, SiSamsung, SiBlackberry, SiOppo, SiLenovo } from 'react-icons/si';



const Hero = () => {
    const location = useLocation();
    const isHomePage = location.pathname === '/';
    const isOrderPage = location.pathname === '/order';

  return (
    
  
      <div className=' text-white'>
        {isHomePage && <div className=" px-6  py-16 md:px-40 md:py-10 max-w-7xl mx-auto grid md:grid-cols-2 items-center justify-center gap-2">
          {/* Text Content */}
          <div className=''>
            <h1 className="text-3xl md:text-5xl font-bold mb-6">
              Repairing Your <div className='mt-2'>Broken Phones </div>
            </h1>
            <p className="text-sm md:text-base mb-10 max-w-md leading-5 md:w-2/3">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text.
            </p>
            <Link
              to="/order"
              className="inline-block bg-green-400 text-blue-900 font-semibold px-6 py-3 rounded-full hover:bg-green-300 transition"
            >
              Fix My Phone
              <FaCheckCircle className="inline ml-2" />
            </Link>

            {/* Brands */}
            <div className=" flex flex-wrap gap-4 mt-2  items-center">
    
                
                  <SiApple className='text-4xl'/>
                  <SiSamsung className='text-8xl'/>
                  <SiBlackberry className='text-5xl'/>
                  <SiOppo className='text-6xl'/>
                  <SiLenovo className='text-6xl'/>
                
       
            </div>
          </div>

          {/* Phone Images */}
          <div className="">
            { <img src="/images/brokenscreen.png" alt="Broken Phone 2" className='md:phonesize' /> }
          </div>
        </div>}
        {isOrderPage && <h1 className='text-4xl md:py-10 font-bold text-center'>Fill your order details</h1>}
      </div>
  
  );
};

export default Hero;
