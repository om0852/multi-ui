"use client";
import React, { useState } from 'react';
import Rating from '../_components/Rating_21';

export default function RatingExample() {
  const [rating, setRating] = useState(0);
  const [barColor, setBarColor] = useState("#EC4899");

  const colorOptions = [
    { name: "Pink", value: "#EC4899" },
    { name: "Blue", value: "#3B82F6" },
    { name: "Green", value: "#10B981" },
    { name: "Purple", value: "#8B5CF6" },
  ];

  const handleRatingChange = (value: number) => {
    setRating(value);
  };

  return (
    <div className="p-6 max-w-md mx-auto bg-white rounded-xl shadow-md">
      <h2 className="text-2xl font-bold text-center mb-6">Loading Bar Rating</h2>
      
      <div className="mb-6">
        <p className="text-sm font-medium text-gray-700 mb-2">Bar Color:</p>
        <div className="flex flex-wrap gap-2">
          {colorOptions.map((color) => (
            <button
              key={color.name}
              onClick={() => setBarColor(color.value)}
              className={`px-3 py-1 rounded-full text-sm ${
                barColor === color.value
                  ? "bg-gray-800 text-white"
                  : "bg-gray-100 text-gray-800"
              }`}
            >
              {color.name}
            </button>
          ))}
        </div>
      </div>
      
      <Rating
        max={5}
        onRatingChange={handleRatingChange}
        initialRating={rating}
        barColor={barColor}
      />
      
      <div className="mt-6 text-center">
        <p className="text-gray-700">
          {rating === 0
            ? "Click a button to set your rating"
            : `Your rating: ${rating} - ${
                rating <= 1
                  ? "Just starting"
                  : rating <= 2
                  ? "Getting there"
                  : rating <= 3
                  ? "Halfway"
                  : rating <= 4
                  ? "Almost complete"
                  : "Excellent!"
              }`}
        </p>
      </div>
    </div>
  );
} 