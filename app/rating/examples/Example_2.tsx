"use client";
import React, { useState } from 'react';
import Rating from '../tsx/Rating_2';

export default function RatingExample() {
  const [rating, setRating] = useState(0);
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-md p-6 bg-white rounded-xl shadow-lg">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Pulsing Heart Rating
        </h1>
        
        <div className="space-y-8">
          <div className="flex flex-col items-center gap-4">
            <Rating 
              max={5}
              onRatingChange={setRating}
              initialRating={rating}
            />
            
            <p className="text-gray-700">
              Selected rating: <span className="font-semibold">{rating}</span> of 5
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 