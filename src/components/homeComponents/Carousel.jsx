import React from 'react';
import Slide from './Slide.jsx';


const MyCarousel = () => {
    return (

        <section className="w-full mx-auto overflow-hidden py-10 md:py-20">
            <h1 className="text-xl text-center md:text-4xl font-bold mb-5  md:mb-16">Happy Customers</h1>
            <Slide />
        </section>
    );
};

export default MyCarousel;
