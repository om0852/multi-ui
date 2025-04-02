"use client";
import React, { useState } from 'react';
import ProgressBar_5 from '../tsx/ProgressBar_5';

export default function ProgressBarExample() {
  const [progress, setProgress] = useState(0);
  const [showOverlay, setShowOverlay] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  // Function to simulate an image upload process
  const startUpload = () => {
    setProgress(0);
    setShowOverlay(true);
    setIsComplete(false);
    
    // Simulate an upload with random progress increments
    const interval = setInterval(() => {
      setProgress(prev => {
        const newProgress = prev + Math.floor(Math.random() * 5) + 1;
        
        if (newProgress >= 100) {
          clearInterval(interval);
          setIsComplete(true);
          return 100;
        }
        
        return newProgress;
      });
    }, 200);
  };

  // Close the overlay
  const handleClose = () => {
    setShowOverlay(false);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-md p-6 bg-white rounded-xl shadow-lg">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Image Upload Progress
        </h1>
        
        <div className="space-y-6">
          <div className="flex justify-center">
            <div className="w-32 h-32 bg-gray-200 rounded-lg flex items-center justify-center">
              {isComplete ? (
                <span className="text-5xl">🖼️</span>
              ) : (
                <span className="text-gray-400">No image</span>
              )}
            </div>
          </div>
          
          <div className="flex justify-center">
            <button
              onClick={startUpload}
              disabled={showOverlay && !isComplete}
              className={`px-4 py-2 rounded-md font-medium text-white ${
                showOverlay && !isComplete 
                  ? 'bg-gray-400 cursor-not-allowed' 
                  : 'bg-green-600 hover:bg-green-700'
              }`}
            >
              {showOverlay && !isComplete ? 'Uploading...' : 'Upload Image'}
            </button>
          </div>
          
          {isComplete && (
            <div className="mt-4 p-3 bg-green-100 text-green-800 rounded-md text-center">
              <p className="font-medium">Image uploaded successfully!</p>
            </div>
          )}
        </div>
      </div>
      
      {/* Overlay Progress Bar */}
      <ProgressBar_5 
        progress={progress}
        show={showOverlay && !isComplete}
        onClose={isComplete ? handleClose : undefined}
        barColor="bg-green-500"
        overlayColor="bg-black bg-opacity-60"
      />
    </div>
  );
}
