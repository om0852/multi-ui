"use client";
import React, { useState } from 'react';
import Rating from '../tsx/Rating_4';

export default function RatingExample() {
  const [rating, setRating] = useState(0);
  
  const getFeedbackText = (value: number) => {
    if (value === 1) return "Liked";
    if (value === -1) return "Disliked";
    return "No feedback yet";
  };
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-md p-6 bg-white rounded-xl shadow-lg">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Thumbs Rating
        </h1>
        
        <div className="space-y-8">
          <div className="flex flex-col items-center gap-4">
            <p className="text-gray-700 mb-2">Was this content helpful?</p>
            
            <Rating 
              onRatingChange={setRating}
              initialRating={rating}
            />
            
            <div className={`mt-4 px-4 py-2 rounded-md font-medium ${
              rating === 1 ? "bg-green-100 text-green-800" : 
              rating === -1 ? "bg-red-100 text-red-800" : 
              "bg-gray-100 text-gray-800"
            }`}>
              {getFeedbackText(rating)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 