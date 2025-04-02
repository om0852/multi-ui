"use client";
import React, { useState } from 'react';
import Rating from '../tsx/Rating_6';

export default function RatingExample() {
  const [rating, setRating] = useState(0);
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-md p-6 bg-white rounded-xl shadow-lg">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Rainbow Rating
        </h1>
        
        <div className="space-y-8">
          <div className="flex flex-col items-center gap-4">
            <p className="text-gray-700 mb-2">How magical was your experience?</p>
            
            <Rating 
              max={5}
              onRatingChange={setRating}
              initialRating={rating}
            />
            
            <div className="mt-4 p-3 bg-gradient-to-r from-red-100 via-yellow-100 to-blue-100 rounded-md text-center">
              <p className="font-medium text-gray-800">
                {rating === 0 ? "Waiting for your rating..." : 
                 rating === 1 ? "Not so magical" :
                 rating === 2 ? "A little magical" :
                 rating === 3 ? "Somewhat magical" :
                 rating === 4 ? "Very magical" :
                 "Extremely magical!"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 