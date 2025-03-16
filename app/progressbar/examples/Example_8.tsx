"use client";
import React, { useState } from 'react';
import ProgressBar_8 from '../_components/ProgressBar_8';

export default function ProgressBarExample() {
  const [progress, setProgress] = useState(0);
  const [showOverlay, setShowOverlay] = useState(false);
  const [isComplete, setIsComplete] = useState(false);


  // Function to simulate a software installation process
  const startInstallation = () => {
    setProgress(0);
    setShowOverlay(true);
    setIsComplete(false);
    
    // Simulate an installation with tasks
    const interval = setInterval(() => {
      setProgress(prev => {
        const newProgress = prev + 1;
        
        // Update current task based on progress
        
        if (newProgress >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsComplete(true);
          }, 500);
          return 100;
        }
        
        return newProgress;
      });
    }, 150);
  };

  // Close the overlay
  const handleClose = () => {
    setShowOverlay(false);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-md p-6 bg-white rounded-xl shadow-lg">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Software Installation
        </h1>
        
        <div className="space-y-6">
          <div className="p-4 bg-gray-100 rounded-lg text-center">
            <span className="text-4xl block mb-2">💻</span>
            <h2 className="text-lg font-semibold">App Installer</h2>
            <p className="text-sm text-gray-600">Version 2.0</p>
          </div>
          
          <div className="flex justify-center">
            <button
              onClick={startInstallation}
              disabled={showOverlay && !isComplete}
              className={`px-6 py-2 rounded-md font-medium text-white ${
                showOverlay && !isComplete 
                  ? 'bg-gray-400 cursor-not-allowed' 
                  : 'bg-gradient-to-r from-teal-500 to-indigo-600 hover:from-teal-600 hover:to-indigo-700'
              }`}
            >
              {showOverlay && !isComplete ? 'Installing...' : 'Install Now'}
            </button>
          </div>
          
          {isComplete && (
            <div className="mt-4 p-3 bg-green-100 text-green-800 rounded-md text-center">
              <p className="font-medium">Installation complete!</p>
              <p className="text-sm mt-1">Your software is ready to use.</p>
            </div>
          )}
        </div>
      </div>
      
      {/* Overlay Progress Bar */}
      <ProgressBar_8 
        progress={progress}
        show={showOverlay}
        onClose={isComplete ? handleClose : undefined}
        barColor="bg-gradient-to-r from-teal-400 to-indigo-600"
        overlayColor="bg-black bg-opacity-70"
      />
    </div>
  );
}
