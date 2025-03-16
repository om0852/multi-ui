"use client";
import React, { useState } from 'react';
import Rating from '../_components/Rating_13';

export default function RatingExample() {
  const [rating, setRating] = useState(0);
  const [colorScheme, setColorScheme] = useState<string[]>(
    ["#EF4444", "#F59E0B", "#FCD34D", "#34D399", "#3B82F6"]
  );
  
  const colorSchemes = {
    default: ["#EF4444", "#F59E0B", "#FCD34D", "#34D399", "#3B82F6"],
    sunset: ["#F43F5E", "#FB7185", "#FDA4AF", "#FECDD3", "#FFF1F2"],
    ocean: ["#0C4A6E", "#0369A1", "#0EA5E9", "#7DD3FC", "#E0F2FE"],
    forest: ["#064E3B", "#047857", "#10B981", "#6EE7B7", "#D1FAE5"],
    purple: ["#4C1D95", "#6D28D9", "#8B5CF6", "#A78BFA", "#DDD6FE"]
  };
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-md p-6 bg-white rounded-xl shadow-lg">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Pie Chart Rating
        </h1>
        
        <div className="space-y-8">
          <div className="flex flex-col items-center gap-4">
            <div className="flex flex-wrap justify-center gap-2 mb-4">
              <button 
                onClick={() => setColorScheme(colorSchemes.default)}
                className="px-3 py-1 rounded-md text-sm bg-gradient-to-r from-red-500 via-yellow-500 to-blue-500 text-white"
              >
                Default
              </button>
              <button 
                onClick={() => setColorScheme(colorSchemes.sunset)}
                className="px-3 py-1 rounded-md text-sm bg-gradient-to-r from-red-500 to-pink-200 text-white"
              >
                Sunset
              </button>
              <button 
                onClick={() => setColorScheme(colorSchemes.ocean)}
                className="px-3 py-1 rounded-md text-sm bg-gradient-to-r from-blue-900 to-blue-200 text-white"
              >
                Ocean
              </button>
              <button 
                onClick={() => setColorScheme(colorSchemes.forest)}
                className="px-3 py-1 rounded-md text-sm bg-gradient-to-r from-green-900 to-green-200 text-white"
              >
                Forest
              </button>
              <button 
                onClick={() => setColorScheme(colorSchemes.purple)}
                className="px-3 py-1 rounded-md text-sm bg-gradient-to-r from-purple-900 to-purple-200 text-white"
              >
                Purple
              </button>
            </div>
            
            <Rating 
              max={5}
              onRatingChange={setRating}
              initialRating={rating}
              colors={colorScheme}
              size={180}
            />
            
            <p className="text-gray-700 mt-8">
              Your rating: <span className="font-semibold">{rating}</span> of 5
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 