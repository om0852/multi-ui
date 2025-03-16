"use client";
import React, { useState } from 'react';
import Rating from '../_components/Rating_22';

export default function RatingExample() {
  const [rating, setRating] = useState(0);
  const [clockColor, setClockColor] = useState("#2563EB");

  const colorOptions = [
    { name: "Blue", value: "#2563EB" },
    { name: "Red", value: "#DC2626" },
    { name: "Green", value: "#059669" },
    { name: "Gold", value: "#D97706" },
  ];

  const handleRatingChange = (value: number) => {
    setRating(value);
  };

  return (
    <div className="p-6 max-w-md mx-auto bg-white rounded-xl shadow-md">
      <h2 className="text-2xl font-bold text-center mb-6">Clock Rating</h2>
      
      <div className="mb-6">
        <p className="text-sm font-medium text-gray-700 mb-2">Clock Color:</p>
        <div className="flex flex-wrap gap-2">
          {colorOptions.map((color) => (
            <button
              key={color.name}
              onClick={() => setClockColor(color.value)}
              className={`px-3 py-1 rounded-full text-sm ${
                clockColor === color.value
                  ? "bg-gray-800 text-white"
                  : "bg-gray-100 text-gray-800"
              }`}
              style={{ borderLeft: `4px solid ${color.value}` }}
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
        clockColor={clockColor}
      />
      
      <div className="mt-6 text-center">
        <p className="text-gray-700">
          {rating === 0
            ? "Click a button to set the time"
            : `Time set to ${rating} - ${
                rating === 0
                  ? "Midnight"
                  : rating === 1
                  ? "Dawn"
                  : rating === 2
                  ? "Morning"
                  : rating === 3
                  ? "Afternoon"
                  : rating === 4
                  ? "Evening"
                  : "Night"
              }`}
        </p>
      </div>
    </div>
  );
} 