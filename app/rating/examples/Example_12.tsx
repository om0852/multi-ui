"use client";
import React, { useState } from 'react';
import Rating from '../tsx/Rating_12';

export default function RatingExample() {
  const [rating, setRating] = useState(0);
  const [waveColor, setWaveColor] = useState("#6366F1");
  
  const colorOptions = [
    { name: "Indigo", value: "#6366F1" },
    { name: "Blue", value: "#3B82F6" },
    { name: "Teal", value: "#14B8A6" },
    { name: "Purple", value: "#8B5CF6" },
    { name: "Pink", value: "#EC4899" }
  ];
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-md p-6 bg-white rounded-xl shadow-lg">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Wave Rating
        </h1>
        
        <div className="space-y-8">
          <div className="flex flex-col items-center gap-4">
            <div className="flex flex-wrap justify-center gap-2 mb-4">
              {colorOptions.map((option) => (
                <button 
                  key={option.value}
                  onClick={() => setWaveColor(option.value)}
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
              waveColor={waveColor}
            />
            
            <p className="text-gray-700 mt-8">
              Selected rating: <span className="font-semibold">{rating}</span> of 5
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 