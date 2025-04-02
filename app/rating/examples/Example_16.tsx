"use client";
import React, { useState } from 'react';
import Rating from '../tsx/Rating_16';

export default function RatingExample() {
  const [rating, setRating] = useState(0);
  const [theme, setTheme] = useState<{star: string, line: string}>({
    star: "#FCD34D",
    line: "#93C5FD"
  });
  
  const themes = [
    { name: "Default", star: "#FCD34D", line: "#93C5FD" },
    { name: "Cosmic", star: "#8B5CF6", line: "#C4B5FD" },
    { name: "Fire", star: "#F97316", line: "#FDBA74" },
    { name: "Ocean", star: "#06B6D4", line: "#67E8F9" },
    { name: "Forest", star: "#10B981", line: "#6EE7B7" }
  ];
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-md p-6 bg-white rounded-xl shadow-lg">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Constellation Rating
        </h1>
        
        <div className="space-y-8">
          <div className="flex flex-col items-center gap-4">
            <div className="flex flex-wrap justify-center gap-2 mb-4">
              {themes.map((t) => (
                <button 
                  key={t.name}
                  onClick={() => setTheme({ star: t.star, line: t.line })}
                  className="px-3 py-1 rounded-md text-sm text-white"
                  style={{ 
                    background: `linear-gradient(to right, ${t.star}, ${t.line})` 
                  }}
                >
                  {t.name}
                </button>
              ))}
            </div>
            
            <div className="flex justify-center">
              <Rating 
                max={5}
                onRatingChange={setRating}
                initialRating={rating}
                starColor={theme.star}
                lineColor={theme.line}
              />
            </div>
            
            <div className="mt-8 p-4 bg-gray-100 rounded-md text-center">
              <p className="text-gray-700">
                {rating === 0 
                  ? "Click on a star to rate" 
                  : `You rated ${rating} of 5 stars`}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 