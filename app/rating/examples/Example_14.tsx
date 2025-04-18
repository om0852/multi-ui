"use client";
import React, { useState } from 'react';
import Rating from '../_components/Rating_14';

export default function RatingExample() {
  const [rating, setRating] = useState(0);
  const [keyColor, setKeyColor] = useState("#1F2937");
  
  const colorOptions = [
    { name: "Dark Gray", value: "#1F2937" },
    { name: "Blue", value: "#2563EB" },
    { name: "Red", value: "#DC2626" },
    { name: "Green", value: "#059669" },
    { name: "Purple", value: "#7C3AED" }
  ];
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-md p-6 bg-white rounded-xl shadow-lg">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Keyboard Rating
        </h1>
        
        <div className="space-y-8">
          <div className="flex flex-col items-center gap-4">
            <p className="text-gray-700 mb-2">Click or use your keyboard (1-5)</p>
            
            <div className="flex flex-wrap justify-center gap-2 mb-4">
              {colorOptions.map((option) => (
                <button 
                  key={option.value}
                  onClick={() => setKeyColor(option.value)}
                  className="px-3 py-1 rounded-md text-sm text-white"
                  style={{ backgroundColor: option.value }}
                >
                  {option.name}
                </button>
              ))}
            </div>
            
            <Rating 
              max={5}
              onRatingChange={setRating}
              initialRating={rating}
              keyColor={keyColor}
            />
            
            <div className="mt-6 p-4 bg-gray-100 rounded-md text-center">
              <p className="text-gray-700">
                You can also use your keyboard to rate!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 