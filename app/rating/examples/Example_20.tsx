"use client";
import React, { useState } from "react";
import Rating from "../tsx/Rating_20";

export default function RatingExample() {
  const [rating, setRating] = useState(0);
  const [waveColor, setWaveColor] = useState("#8B5CF6");

  const colorOptions = [
    { name: "Purple", value: "#8B5CF6" },
    { name: "Blue", value: "#3B82F6" },
    { name: "Green", value: "#10B981" },
    { name: "Red", value: "#EF4444" },
  ];

  const handleRatingChange = (value: number) => {
    setRating(value);
  };

  return (
    <div className="p-6 max-w-md mx-auto bg-white rounded-xl shadow-md">
      <h2 className="text-2xl font-bold text-center mb-6">Sound Wave Rating</h2>
      
      <div className="mb-6">
        <p className="text-sm font-medium text-gray-700 mb-2">Wave Color:</p>
        <div className="flex flex-wrap gap-2">
          {colorOptions.map((color) => (
            <button
              key={color.name}
              onClick={() => setWaveColor(color.value)}
              className={`px-3 py-1 rounded-full text-sm ${
                waveColor === color.value
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
        waveColor={waveColor}
      />
      
      <div className="mt-6 text-center">
        <p className="text-gray-700">
          {rating === 0
            ? "Click a button to set the volume"
            : `Volume set to ${rating} - ${
                rating === 1
                  ? "Very quiet"
                  : rating === 2
                  ? "Quiet"
                  : rating === 3
                  ? "Medium"
                  : rating === 4
                  ? "Loud"
                  : "Very loud"
              }`}
        </p>
      </div>
    </div>
  );
} 