"use client";
import React, { useState } from 'react';
import Rating from '../tsx/Rating_10';

export default function RatingExample() {
  const [rating, setRating] = useState(0);
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-md p-6 bg-white rounded-xl shadow-lg">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Circular Rating
        </h1>
        
        <div className="space-y-8">
          <div className="flex flex-col items-center gap-4">
            <Rating 
              max={5}
              onRatingChange={setRating}
              initialRating={rating}
              size={180}
              strokeWidth={15}
            />
            
            <div className="mt-16 p-4 bg-gray-100 rounded-md text-center">
              <p className="text-gray-700">
                You rated: <span className="font-semibold">{rating}</span> of 5
              </p>
              <p className="text-sm text-gray-500 mt-1">
                {rating === 0 ? "Please select a rating" :
                 rating === 1 ? "Poor" :
                 rating === 2 ? "Fair" :
                 rating === 3 ? "Good" :
                 rating === 4 ? "Very Good" :
                 "Excellent"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 