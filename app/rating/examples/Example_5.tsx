"use client";
import React, { useState } from 'react';
import Rating from '../tsx/Rating_5';

export default function RatingExample() {
  const [rating, setRating] = useState(0);
  const [selectedIcon, setSelectedIcon] = useState<"lightning" | "fire" | "diamond" | "star" | "crown">("star");
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-md p-6 bg-white rounded-xl shadow-lg">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Custom Icon Rating
        </h1>
        
        <div className="space-y-8">
          <div className="flex flex-col items-center gap-4">
            <div className="flex flex-wrap justify-center gap-2 mb-4">
              <button 
                onClick={() => setSelectedIcon("star")}
                className={`px-3 py-1 rounded-md text-sm ${selectedIcon === "star" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
              >
                Stars
              </button>
              <button 
                onClick={() => setSelectedIcon("lightning")}
                className={`px-3 py-1 rounded-md text-sm ${selectedIcon === "lightning" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
              >
                Lightning
              </button>
              <button 
                onClick={() => setSelectedIcon("fire")}
                className={`px-3 py-1 rounded-md text-sm ${selectedIcon === "fire" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
              >
                Fire
              </button>
              <button 
                onClick={() => setSelectedIcon("diamond")}
                className={`px-3 py-1 rounded-md text-sm ${selectedIcon === "diamond" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
              >
                Diamond
              </button>
              <button 
                onClick={() => setSelectedIcon("crown")}
                className={`px-3 py-1 rounded-md text-sm ${selectedIcon === "crown" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
              >
                Crown
              </button>
            </div>
            
            <Rating 
              max={5}
              onRatingChange={setRating}
              initialRating={rating}
              customIcon={selectedIcon}
              fillColor={selectedIcon === "fire" ? "#FF4500" : 
                         selectedIcon === "lightning" ? "#FFC107" : 
                         selectedIcon === "diamond" ? "#00BCD4" : 
                         selectedIcon === "crown" ? "#9C27B0" : "#FFD700"}
            />
            
            <p className="text-gray-700">
              Selected rating: <span className="font-semibold">{rating}</span> of 5
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 