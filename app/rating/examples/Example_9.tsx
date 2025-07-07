"use client";
import React, { useState } from 'react';
import Rating from '../tsx/Rating_9';

export default function RatingExample() {
  const [rating, setRating] = useState(0);
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-md p-6 bg-white rounded-xl shadow-lg">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Slider Rating
        </h1>
        
        <div className="space-y-12">
          <div className="flex flex-col items-center">
            <p className="text-gray-700 mb-8">Default Emerald</p>
            <Rating 
              max={5}
              onRatingChange={setRating}
              initialRating={rating}
            />
          </div>
          
          <div className="flex flex-col items-center">
            <p className="text-gray-700 mb-8">Custom Blue (10-point scale)</p>
            <Rating 
              max={10}
              onRatingChange={setRating}
              initialRating={rating}
              activeColor="#3B82F6"
            />
          </div>
          
          <div className="flex flex-col items-center">
            <p className="text-gray-700 mb-8">Custom Purple</p>
            <Rating 
              max={5}
              onRatingChange={setRating}
              initialRating={rating}
              activeColor="#8B5CF6"
              trackColor="#EDE9FE"
            />
          </div>
          
          <div className="mt-6 p-4 bg-gray-100 rounded-md text-center">
            <p className="text-gray-700">
              Selected rating: <span className="font-semibold">{rating}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 