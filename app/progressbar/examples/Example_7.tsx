"use client";
import React, { useState } from 'react';
import ProgressBar_7 from '../_components/ProgressBar_7';

export default function ProgressBarExample() {
  const [progress, setProgress] = useState(0);
  const [showOverlay, setShowOverlay] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [fileName, setFileName] = useState('document.pdf');

  // Function to simulate a file download process
  const startDownload = () => {
    setProgress(0);
    setShowOverlay(true);
    setIsComplete(false);
    
    // Simulate a download with varying speeds
    const interval = setInterval(() => {
      setProgress(prev => {
        // Simulate network fluctuations
        const increment = Math.floor(Math.random() * 8) + 1;
        const newProgress = prev + increment;
        
        if (newProgress >= 100) {
          clearInterval(interval);
          setIsComplete(true);
          return 100;
        }
        
        return newProgress;
      });
    }, 250);
  };

  // Close the overlay
  const handleClose = () => {
    setShowOverlay(false);
  };

  // Generate a random file name
  const generateRandomFileName = () => {
    const fileTypes = ['report', 'presentation', 'document', 'spreadsheet', 'image'];
    const fileType = fileTypes[Math.floor(Math.random() * fileTypes.length)];
    const randomNum = Math.floor(Math.random() * 1000);
    setFileName(`${fileType}_${randomNum}.pdf`);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-md p-6 bg-white rounded-xl shadow-lg">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
          File Download Progress
        </h1>
        
        <div className="space-y-6">
          <div className="flex items-center justify-between p-3 bg-gray-100 rounded-md">
            <div className="flex items-center">
              <span className="text-2xl mr-3">📄</span>
              <span className="font-medium">{fileName}</span>
            </div>
            <span className="text-sm text-gray-500">2.4 MB</span>
          </div>
          
          <div className="flex justify-between">
            <button
              onClick={generateRandomFileName}
              className="px-4 py-2 rounded-md font-medium text-gray-700 bg-gray-200 hover:bg-gray-300"
            >
              Change File
            </button>
            
            <button
              onClick={startDownload}
              disabled={showOverlay && !isComplete}
              className={`px-4 py-2 rounded-md font-medium text-white ${
                showOverlay && !isComplete 
                  ? 'bg-gray-400 cursor-not-allowed' 
                  : 'bg-purple-600 hover:bg-purple-700'
              }`}
            >
              {showOverlay && !isComplete ? 'Downloading...' : 'Download File'}
            </button>
          </div>
          
          {isComplete && (
            <div className="mt-4 p-3 bg-green-100 text-green-800 rounded-md text-center">
              <p className="font-medium">Download complete!</p>
              <p className="text-sm mt-1">File saved to your downloads folder.</p>
            </div>
          )}
        </div>
      </div>
      
      {/* Overlay Progress Bar */}
      <ProgressBar_7 
        progress={progress}
        show={showOverlay}
        onClose={isComplete ? handleClose : undefined}
        barColor="bg-purple-500"
        overlayColor="bg-black bg-opacity-60"
      />
    </div>
  );
}
