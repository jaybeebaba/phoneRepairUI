import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// Optional modules
import StarRating from './starRatings.jsx';

const Slide = () => {
    const slideData = [
        {
            rating: 5,
            text: "HAPPILY SATISFIED WITH THEIR TEAM",
            description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam et illo, ea architecto vitae, aut eligendi magnam earum libero numquam minima maiores! Suscipit vero veritatis esse quisquam quaerat eveniet dolore?",
            name: "John Doe"
        },
        {
            rating: 4,
            text: "HAPPILY SATISFIED WITH THEIR TEAM",
            description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam et illo, ea architecto vitae, aut eligendi magnam earum libero numquam minima maiores! Suscipit vero veritatis esse quisquam quaerat eveniet dolore?",
            name: "John Doe"
        },
        {
            rating: 2,
            text: "HAPPILY SATISFIED WITH THEIR TEAM",
            description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam et illo, ea architecto vitae, aut eligendi magnam earum libero numquam minima maiores! Suscipit vero veritatis esse quisquam quaerat eveniet dolore?",
            name: "John Doe"
        },
        {
            rating: 3,
            text: "HAPPILY SATISFIED WITH THEIR TEAM",
            description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam et illo, ea architecto vitae, aut eligendi magnam earum libero numquam minima maiores! Suscipit vero veritatis esse quisquam quaerat eveniet dolore?",
            name: "John Doe"
        },
        {
            rating: 5,
            text: "HAPPILY SATISFIED WITH THEIR TEAM",
            description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam et illo, ea architecto vitae, aut eligendi magnam earum libero numquam minima maiores! Suscipit vero veritatis esse quisquam quaerat eveniet dolore?",
            name: "John Doe"
        },
        {
            rating: 2,
            text: "HAPPILY SATISFIED WITH THEIR TEAM",
            description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam et illo, ea architecto vitae, aut eligendi magnam earum libero numquam minima maiores! Suscipit vero veritatis esse quisquam quaerat eveniet dolore?",
            name: "John Doe"
        },
        {
            rating: 1,
            text: "HAPPILY SATISFIED WITH THEIR TEAM",
            description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam et illo, ea architecto vitae, aut eligendi magnam earum libero numquam minima maiores! Suscipit vero veritatis esse quisquam quaerat eveniet dolore?",
            name: "John Doe"
        },


    ]
    return (
        <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={20}
            breakpoints={{
                640: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3.3 },
            }}
            centeredSlides={true}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            loop={true}
            className="mySwiper"
        >
            {slideData.map((slide, index) => (
                <SwiperSlide key={index} className="flex flex-col text-center px-10 py-6 gap-4 items-center justify-center bg-gray-300 rounded-xl">
                    <StarRating rating={slide.rating}/>
                    <p className="font-bold">{slide.text}</p>
                    <p className="text-sm text-gray-600 font-medium">{slide.description}</p>
                    <p className="text-medium font-semibold">{slide.name}</p>
                </SwiperSlide>
            ))}


        </Swiper>
    )
}

export default Slide