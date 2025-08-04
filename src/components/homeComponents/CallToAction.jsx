import React from 'react'
import { Link } from 'react-router-dom';
import { FaCheckCircle } from 'react-icons/fa';

const CallToAction = () => {
    return (
        <section className="relative z-20 p-6 lg:px-80 md:py-12 text-center ">
            <div className='bg-slate-200 flex flex-col gap-8 p-4 md:py-14 lg:-mb-32 items-center justify-center text-gray-900  border-2 border-white rounded-3xl'>
                <h1 className='text-xl md:text-3xl max-w-sm font-bold md:px-7'>Your Trusted Mobile Repair Experts</h1>
                <Link
                    to="/order"
                    className="inline-block bg-green-400 text-blue-900 font-semibold px-3 py-2 text-xs rounded-full hover:bg-green-300 transition"
                >
                    Fix My Phone
                    <FaCheckCircle className="inline ml-2" />
                </Link>
            </div>
        </section>
    )
}

export default CallToAction