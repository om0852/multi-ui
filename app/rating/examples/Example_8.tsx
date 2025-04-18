"use client";
import React, { useState } from 'react';
import Rating from '../_components/Rating_8';

export default function RatingExample() {
  const [rating, setRating] = useState(0);
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-md p-6 bg-white rounded-xl shadow-lg">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Dot Rating
        </h1>
        
        <div className="space-y-8">
          <div className="flex flex-col items-center gap-6">
            <div className="flex flex-col items-center">
              <p className="text-gray-700 mb-3">Default Purple</p>
              <Rating 
                max={5}
                onRatingChange={setRating}
                initialRating={rating}
              />
            </div>
            
            <div className="flex flex-col items-center">
              <p className="text-gray-700 mb-3">Custom Red</p>
              <Rating 
                max={5}
                onRatingChange={setRating}
                initialRating={rating}
                activeColor="#EF4444"
              />
            </div>
            
            <div className="flex flex-col items-center">
              <p className="text-gray-700 mb-3">Custom Green</p>
              <Rating 
                max={5}
                onRatingChange={setRating}
                initialRating={rating}
                activeColor="#10B981"
              />
            </div>
            
            <div className="flex flex-col items-center">
              <p className="text-gray-700 mb-3">Custom Blue</p>
              <Rating 
                max={7}
                onRatingChange={setRating}
                initialRating={rating}
                activeColor="#3B82F6"
              />
            </div>
            
            <p className="text-gray-700 mt-2">
              Selected rating: <span className="font-semibold">{rating}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 