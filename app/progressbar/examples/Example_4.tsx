"use client";
import React, { useState } from 'react';
import ProgressBar_4 from '../tsx/ProgressBar_4';

export default function ProgressBarExample() {
  const [progress, setProgress] = useState(0);
  const [showOverlay, setShowOverlay] = useState(false);
  const [operationComplete, setOperationComplete] = useState(false);

  // Function to simulate a file processing operation
  const startProcessing = () => {
    setProgress(0);
    setShowOverlay(true);
    setOperationComplete(false);
    
    // Simulate a processing operation with variable speed
    const interval = setInterval(() => {
      setProgress(prev => {
        // Slow down progress as it approaches completion
        const increment = Math.max(1, Math.floor((100 - prev) / 10));
        const newProgress = prev + increment;
        
        if (newProgress >= 100) {
          clearInterval(interval);
          
          // Simulate a delay before hiding the overlay
          setTimeout(() => {
            setOperationComplete(true);
          }, 500);
          
          return 100;
        }
        
        return newProgress;
      });
    }, 300);
  };

  // Close the overlay when operation is complete
  const handleClose = () => {
    setShowOverlay(false);
    setOperationComplete(false);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-md p-6 bg-white rounded-xl shadow-lg">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Overlay Progress Indicator
        </h1>
        
        <div className="space-y-6">
          <p className="text-center text-gray-600">
            Click the button below to start processing a file. An overlay will appear showing the progress.
          </p>
          
          <div className="flex justify-center">
            <button
              onClick={startProcessing}
              disabled={showOverlay}
              className={`px-6 py-3 rounded-md font-medium text-white ${
                showOverlay ? 'bg-gray-400 cursor-not-allowed' : 'bg-purple-600 hover:bg-purple-700'
              }`}
            >
              Process File
            </button>
          </div>
          
          {operationComplete && (
            <div className="mt-4 p-3 bg-green-100 text-green-800 rounded-md text-center">
              <p className="font-medium">Processing complete!</p>
            </div>
          )}
        </div>
      </div>
      
      {/* Overlay Progress Bar */}
      <ProgressBar_4 
        progress={progress}
        show={showOverlay}
        onClose={progress === 100 ? handleClose : undefined}
        overlayColor="bg-black bg-opacity-70"
        circleColor="stroke-purple-500"
        trackColor="stroke-gray-400"
      />
    </div>
  );
}
