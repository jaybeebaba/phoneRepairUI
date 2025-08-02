import React from 'react'
import Accordions from '../CommonComponents/Accordion.jsx'

const Faqs = () => {
    return (
        <section className='bg-[#0A3A5C] text-white p-10 md:p-20'>
            <h1 className="text-xl text-center md:text-4xl font-bold mb-8 md:mb-16">Faqs</h1>

            <div className='flex items-center justify-center md:px-40 gap-20'>
            <Accordions className="flex-1"/>
            <img src="" alt="" className='flex-1 hidden md:block '/>
            </div>
        </section>
    )
}

export default Faqs