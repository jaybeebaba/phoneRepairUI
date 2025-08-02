import React from 'react'
import { FaStar } from 'react-icons/fa';

const StarRating = ({ rating, totalStars = 5 }) => {
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: totalStars }, (_, index) => (
        <FaStar
          key={index}
          className={`text-xl ${
            index < rating ? 'text-green-600' : 'text-white'
          }`}
        />
      ))}
    </div>
  );
};

export default StarRating;

