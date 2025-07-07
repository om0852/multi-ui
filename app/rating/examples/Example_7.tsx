"use client";
import React, { useState } from 'react';
import Rating from '../tsx/Rating_7';

export default function RatingExample() {
  const [rating, setRating] = useState(0);
  const [color, setColor] = useState("#4F46E5");
  
  const colorOptions = [
    { name: "Indigo", value: "#4F46E5" },
    { name: "Red", value: "#EF4444" },
    { name: "Green", value: "#10B981" },
    { name: "Blue", value: "#3B82F6" },
    { name: "Purple", value: "#8B5CF6" }
  ];
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-md p-6 bg-white rounded-xl shadow-lg">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Number Rating
        </h1>
        
        <div className="space-y-8">
          <div className="flex flex-col items-center gap-4">
            <div className="flex flex-wrap justify-center gap-2 mb-4">
              {colorOptions.map((option) => (
                <button 
                  key={option.value}
                  onClick={() => setColor(option.value)}
                  className="w-8 h-8 rounded-full border border-gray-300"
                  style={{ backgroundColor: option.value }}
                  aria-label={`Select ${option.name} color`}
                />
              ))}
            </div>
            
            <Rating 
              max={5}
              onRatingChange={setRating}
              initialRating={rating}
              backgroundColor={color}
            />
            
            <p className="text-gray-700 mt-2">
              Selected rating: <span className="font-semibold">{rating}</span> of 5
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 