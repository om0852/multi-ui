"use client";
import React, { useState } from 'react';
import Rating from '../tsx/Rating_15';

export default function RatingExample() {
  const [rating, setRating] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  
  const handleRatingChange = (value: number) => {
    setRating(value);
    setSubmitted(false);
  };
  
  const handleSubmit = () => {
    setSubmitted(true);
  };
  
  const getFeedbackMessage = () => {
    if (rating === 0) return "Please select a rating";
    if (rating === 1) return "We're sorry to hear that. We'll work to improve.";
    if (rating === 2) return "Thank you for your feedback. We'll try to do better.";
    if (rating === 3) return "Thanks for your feedback. We're glad we met your expectations.";
    if (rating === 4) return "Great! We're happy you had a good experience.";
    return "Excellent! We're thrilled you had an outstanding experience.";
  };
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-md p-6 bg-white rounded-xl shadow-lg">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Tag Rating
        </h1>
        
        <div className="space-y-8">
          <div className="flex flex-col items-center gap-4">
            <p className="text-gray-700 mb-2">How would you rate your experience?</p>
            
            <Rating 
              onRatingChange={handleRatingChange}
              initialRating={rating}
            />
            
            <button
              onClick={handleSubmit}
              disabled={rating === 0}
              className={`mt-4 px-6 py-2 rounded-md font-medium ${
                rating === 0 
                  ? 'bg-gray-200 text-gray-500 cursor-not-allowed' 
                  : 'bg-blue-500 text-white hover:bg-blue-600'
              }`}
            >
              Submit Feedback
            </button>
            
            {submitted && (
              <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-md text-center">
                <p className="text-blue-800 font-medium">
                  {getFeedbackMessage()}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
} 