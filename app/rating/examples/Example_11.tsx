"use client";
import React, { useState } from 'react';
import Rating from '../_components/Rating_11';

export default function RatingExample() {
  const [rating, setRating] = useState(3);
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-md p-6 bg-white rounded-xl shadow-lg">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Mood Rating
        </h1>
        
        <div className="space-y-8">
          <div className="flex flex-col items-center gap-4">
            <p className="text-gray-700 mb-2">How was your experience today?</p>
            
            <Rating 
              onRatingChange={setRating}
              initialRating={rating}
            />
            
            <div className="mt-6 p-4 bg-gray-100 rounded-md text-center">
              <p className="text-gray-700">
                Thank you for your feedback!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 