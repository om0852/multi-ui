"use client";
import React, { useState } from 'react';
import ProgressBar_6 from '../_components/ProgressBar_6';

export default function ProgressBarExample() {
  const [progress, setProgress] = useState(0);
  const [showOverlay, setShowOverlay] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  // Function to simulate a video rendering process
  const startRendering = () => {
    setProgress(0);
    setShowOverlay(true);
    setIsComplete(false);
    
    // Simulate a rendering process with consistent progress
    const interval = setInterval(() => {
      setProgress(prev => {
        const newProgress = prev + 2;
        
        if (newProgress >= 100) {
          clearInterval(interval);
          
          // Simulate a delay before marking as complete
          setTimeout(() => {
            setIsComplete(true);
          }, 1000);
          
          return 100;
        }
        
        return newProgress;
      });
    }, 300);
  };

  // Close the overlay
  const handleClose = () => {
    setShowOverlay(false);
    if (isComplete) {
      setIsComplete(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-md p-6 bg-white rounded-xl shadow-lg">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Video Rendering Progress
        </h1>
        
        <div className="space-y-6">
          <div className="flex justify-center">
            <div className="w-full h-40 bg-gray-200 rounded-lg flex items-center justify-center">
              {isComplete ? (
                <div className="text-center">
                  <span className="text-5xl block mb-2">🎬</span>
                  <span className="text-green-600 font-medium">Video Ready</span>
                </div>
              ) : (
                <span className="text-gray-400">Video preview</span>
              )}
            </div>
          </div>
          
          <div className="flex justify-center">
            <button
              onClick={startRendering}
              disabled={showOverlay && !isComplete}
              className={`px-4 py-2 rounded-md font-medium text-white ${
                showOverlay && !isComplete 
                  ? 'bg-gray-400 cursor-not-allowed' 
                  : 'bg-indigo-600 hover:bg-indigo-700'
              }`}
            >
              {showOverlay && !isComplete ? 'Rendering...' : 'Render Video'}
            </button>
          </div>
          
          {isComplete && (
            <div className="mt-4 p-3 bg-green-100 text-green-800 rounded-md text-center">
              <p className="font-medium">Video rendered successfully!</p>
              <p className="text-sm mt-1">Your video is ready for download.</p>
            </div>
          )}
        </div>
      </div>
      
      {/* Overlay Progress Bar */}
      <ProgressBar_6 
        progress={progress}
        show={showOverlay}
        onClose={isComplete ? handleClose : undefined}
        barColor="bg-indigo-500"
        overlayColor="bg-black bg-opacity-70"
      />
    </div>
  );
}
