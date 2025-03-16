"use client";
import React, { useState } from 'react';
import Rating from '../_components/Rating_25';

export default function RatingExample() {
  const [rating, setRating] = useState(0);
  
  const handleRatingChange = (value: number) => {
    setRating(value);
  };

  return (
    <div className="p-6 max-w-md mx-auto bg-white rounded-xl shadow-md">
      <h2 className="text-2xl font-bold text-center mb-6">Rating Component</h2>
      
      <div className="flex flex-col items-center">
        <Rating 
          max={5}
          onRatingChange={handleRatingChange}
          initialRating={rating}
        />
        
        <div className="mt-6 text-center">
          <p className="text-gray-700">
            {rating === 0
              ? "Please select a rating"
              : `Your rating: ${rating} of 5`}
          </p>
        </div>
      </div>
    </div>
  );
} 