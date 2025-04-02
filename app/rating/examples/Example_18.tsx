"use client";
import React, { useState } from 'react';
import Rating from '../tsx/Rating_18';

export default function RatingExample() {
  const [rating, setRating] = useState(0);
  const [batteryColor, setBatteryColor] = useState("#22C55E");
  
  const colorOptions = [
    { name: "Green", value: "#22C55E" },
    { name: "Blue", value: "#3B82F6" },
    { name: "Red", value: "#EF4444" },
    { name: "Yellow", value: "#F59E0B" },
    { name: "Purple", value: "#8B5CF6" }
  ];
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-md p-6 bg-white rounded-xl shadow-lg">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Battery Rating
        </h1>
        
        <div className="space-y-8">
          <div className="flex flex-col items-center gap-4">
            <div className="flex flex-wrap justify-center gap-2 mb-4">
              {colorOptions.map((option) => (
                <button 
                  key={option.value}
                  onClick={() => setBatteryColor(option.value)}
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
              batteryColor={batteryColor}
            />
            
            <div className="mt-6 p-4 bg-gray-100 rounded-md text-center">
              <p className="text-gray-700">
                Battery Level: <span className="font-semibold">{rating}</span> of 5
              </p>
              <p className="text-sm text-gray-500 mt-1">
                {rating === 0 ? "Empty" :
                 rating === 1 ? "Very Low" :
                 rating === 2 ? "Low" :
                 rating === 3 ? "Medium" :
                 rating === 4 ? "High" :
                 "Full"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 