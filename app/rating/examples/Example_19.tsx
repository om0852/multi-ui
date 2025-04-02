"use client";
import React, { useState } from 'react';
import Rating from '../tsx/Rating_19';

export default function RatingExample() {
  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState("");
  
  const handleRatingChange = (value: number) => {
    setRating(value);
    
    // Set feedback based on rating
    if (value === 1) setFeedback("We're sorry you had a terrible experience.");
    else if (value === 2) setFeedback("We'll work to improve your experience.");
    else if (value === 3) setFeedback("Thank you for your fair feedback.");
    else if (value === 4) setFeedback("We're glad you had a good experience!");
    else if (value === 5) setFeedback("Excellent! We're thrilled you had an amazing experience!");
  };
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-md p-6 bg-white rounded-xl shadow-lg">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Weather Rating
        </h1>
        
        <div className="space-y-8">
          <div className="flex flex-col items-center gap-4">
            <p className="text-gray-700 mb-2">How was your experience?</p>
            
            <Rating 
              onRatingChange={handleRatingChange}
              initialRating={rating}
            />
            
            {rating > 0 && (
              <div className="mt-6 p-4 bg-gray-100 rounded-md text-center">
                <p className="text-gray-700 font-medium">
                  {feedback}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
} 