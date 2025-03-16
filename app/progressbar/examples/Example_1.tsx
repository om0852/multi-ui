"use client";
import React, { useState, useEffect } from 'react';
import ProgressBar from '../_components/ProgressBar_1';

export default function ProgressBarExample() {
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  // Function to simulate loading process
  const startLoading = () => {
    setIsLoading(true);
    setProgress(0);
  };

  // Handle animation completion
  const handleComplete = () => {
    if (progress >= 100) {
      setIsLoading(false);
    }
  };

  // Simulate progress increment
  useEffect(() => {
    let timer: NodeJS.Timeout;
    
    if (isLoading && progress < 100) {
      timer = setTimeout(() => {
        const increment = Math.floor(Math.random() * 10) + 1;
        setProgress(prev => Math.min(prev + increment, 100));
      }, 500);
    }
    
    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [isLoading, progress]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-md p-6 bg-white rounded-xl shadow-lg">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Basic Progress Bar
        </h1>
        
        <div className="space-y-6">
          <div className="space-y-2">
            <p className="text-sm font-medium text-gray-700">
              File Upload Progress ({progress}%)
            </p>
            <ProgressBar 
              progress={progress} 
              height="h-6"
              color="bg-blue-500"
              backgroundColor="bg-gray-200"
              rounded={true}
              animationDuration={0.5}
              onComplete={handleComplete}
              showCounter={true}
            />
          </div>
          
          <div className="flex justify-center">
            <button
              onClick={startLoading}
              disabled={isLoading}
              className={`px-4 py-2 rounded-md font-medium text-white ${
                isLoading ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'
              }`}
            >
              {isLoading ? 'Uploading...' : 'Start Upload'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
