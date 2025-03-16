"use client";
import React, { useState } from 'react';
import Rating from '../_components/Rating_23';

export default function RatingExample() {
  const [rating, setRating] = useState(0);
  const [diceColor, setDiceColor] = useState("#7C3AED");

  const colorOptions = [
    { name: "Purple", value: "#7C3AED" },
    { name: "Red", value: "#EF4444" },
    { name: "Blue", value: "#3B82F6" },
    { name: "Green", value: "#10B981" },
  ];

  const handleRatingChange = (value: number) => {
    setRating(value);
  };

  return (
    <div className="p-6 max-w-md mx-auto bg-white rounded-xl shadow-md">
      <h2 className="text-2xl font-bold text-center mb-6">Dice Rating</h2>
      
      <div className="mb-6">
        <p className="text-sm font-medium text-gray-700 mb-2">Dice Color:</p>
        <div className="flex flex-wrap gap-2">
          {colorOptions.map((color) => (
            <button
              key={color.name}
              onClick={() => setDiceColor(color.value)}
              className={`px-3 py-1 rounded-full text-sm ${
                diceColor === color.value
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
        diceColor={diceColor}
      />
      
      <div className="mt-6 text-center">
        <p className="text-gray-700">
          {rating === 0
            ? "Click a die to roll"
            : `You rolled a ${rating}! ${
                rating === 1
                  ? "Better luck next time"
                  : rating === 2
                  ? "Not bad"
                  : rating === 3
                  ? "Good roll"
                  : rating === 4
                  ? "Great roll!"
                  : "Perfect roll! 🎯"
              }`}
        </p>
      </div>
    </div>
  );
} 