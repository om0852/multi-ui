"use client";
import React, { useState } from 'react';
import ProgressBar_9 from '../_components/ProgressBar_9';

export default function ProgressBarExample() {
  const [progress, setProgress] = useState(0);
  const [showOverlay, setShowOverlay] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [photoCount, setPhotoCount] = useState(12);

  // Function to simulate a photo import process
  const startPhotoImport = () => {
    setProgress(0);
    setShowOverlay(true);
    setIsComplete(false);
    
    // Generate a random number of photos between 8 and 24
    const randomPhotoCount = Math.floor(Math.random() * 17) + 8;
    setPhotoCount(randomPhotoCount);
    
    // Simulate importing photos one by one
    let importedCount = 0;
    const interval = setInterval(() => {
      importedCount++;
      const newProgress = Math.round((importedCount / randomPhotoCount) * 100);
      
      setProgress(newProgress);
      
      if (importedCount >= randomPhotoCount) {
        clearInterval(interval);
        setTimeout(() => {
          setIsComplete(true);
        }, 500);
      }
    }, 300);
  };

  // Close the overlay
  const handleClose = () => {
    setShowOverlay(false);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-md p-6 bg-white rounded-xl shadow-lg">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Photo Import
        </h1>
        
        <div className="space-y-6">
          <div className="grid grid-cols-3 gap-2">
            {[...Array(6)].map((_, index) => (
              <div 
                key={index} 
                className="aspect-square bg-gray-200 rounded-md flex items-center justify-center"
              >
                <span className="text-gray-400 text-2xl">📷</span>
              </div>
            ))}
          </div>
          
          <div className="flex justify-center">
            <button
              onClick={startPhotoImport}
              disabled={showOverlay && !isComplete}
              className={`px-6 py-2 rounded-md font-medium text-white ${
                showOverlay && !isComplete 
                  ? 'bg-gray-400 cursor-not-allowed' 
                  : 'bg-gradient-to-r from-pink-500 to-yellow-500 hover:from-pink-600 hover:to-yellow-600'
              }`}
            >
              {showOverlay && !isComplete ? 'Importing...' : 'Import Photos'}
            </button>
          </div>
          
          {isComplete && (
            <div className="mt-4 p-3 bg-green-100 text-green-800 rounded-md text-center">
              <p className="font-medium">Import complete!</p>
              <p className="text-sm mt-1">{photoCount} photos have been imported to your library.</p>
            </div>
          )}
        </div>
      </div>
      
      {/* Overlay Progress Bar */}
      <ProgressBar_9 
        progress={progress}
        show={showOverlay}
        onClose={isComplete ? handleClose : undefined}
        barColor="bg-gradient-to-r from-pink-500 to-yellow-500"
        overlayColor="bg-black bg-opacity-70"
      />
    </div>
  );
}
