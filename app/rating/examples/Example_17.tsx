"use client";
import React, { useState } from 'react';
import Rating from '../_components/Rating_17';

export default function RatingExample() {
  const [rating, setRating] = useState(0);
  const [gaugeColor, setGaugeColor] = useState("#6366F1");
  
  const colorOptions = [
    { name: "Indigo", value: "#6366F1" },
    { name: "Red", value: "#EF4444" },
    { name: "Green", value: "#10B981" },
    { name: "Blue", value: "#3B82F6" },
    { name: "Orange", value: "#F97316" }
  ];
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-md p-6 bg-white rounded-xl shadow-lg">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Gauge Rating
        </h1>
        
        <div className="space-y-8">
          <div className="flex flex-col items-center gap-4">
            <div className="flex flex-wrap justify-center gap-2 mb-4">
              {colorOptions.map((option) => (
                <button 
                  key={option.value}
                  onClick={() => setGaugeColor(option.value)}
                  className="px-3 py-1 rounded-md text-sm text-white"
                  style={{ backgroundColor: option.value }}
                >
                  {option.name}
                </button>
              ))}
            </div>
            
            <div className="flex justify-center">
              <Rating 
                max={5}
                onRatingChange={setRating}
                initialRating={rating}
                gaugeColor={gaugeColor}
                size={220}
              />
            </div>
            
            <div className="mt-16 p-4 bg-gray-100 rounded-md text-center">
              <p className="text-gray-700">
                Current reading: <span className="font-semibold">{rating}</span> of 5
              </p>
              <p className="text-sm text-gray-500 mt-1">
                {rating === 0 ? "Not rated yet" :
                 rating === 1 ? "Very low" :
                 rating === 2 ? "Low" :
                 rating === 3 ? "Medium" :
                 rating === 4 ? "High" :
                 "Very high"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 