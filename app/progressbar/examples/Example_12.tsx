"use client";
import React, { useState } from 'react';
import ProgressBar_12 from '../_components/ProgressBar_12';

export default function ProgressBarExample() {
  const [progress, setProgress] = useState(0);
  const [showOverlay, setShowOverlay] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [fileSize, setFileSize] = useState('24.3 MB');

  // Function to simulate a file conversion process
  const startConversion = () => {
    setProgress(0);
    setShowOverlay(true);
    setIsComplete(false);
    
    // Generate a random file size between 10 and 50 MB
    const randomSize = (Math.random() * 40 + 10).toFixed(1);
    setFileSize(`${randomSize} MB`);
    
    // Simulate a conversion process with varying speeds
    const interval = setInterval(() => {
      setProgress(prev => {
        // Simulate processing with variable speed
        const increment = Math.floor(Math.random() * 6) + 2;
        const newProgress = prev + increment;
        
        if (newProgress >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsComplete(true);
          }, 500);
          return 100;
        }
        
        return newProgress;
      });
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
          File Converter
        </h1>
        
        <div className="space-y-6">
          <div className="flex items-center justify-between p-3 bg-gray-100 rounded-md">
            <div className="flex items-center">
              <span className="text-2xl mr-3">📄</span>
              <div>
                <h3 className="font-medium text-gray-800">document.docx</h3>
                <p className="text-sm text-gray-600">{fileSize}</p>
              </div>
            </div>
            <span className="text-sm bg-yellow-100 text-yellow-800 px-2 py-1 rounded">DOCX</span>
          </div>
          
          <div className="flex items-center justify-center space-x-4">
            <div className="text-center">
              <span className="text-3xl">📄</span>
              <p className="text-xs mt-1">DOCX</p>
            </div>
            <span className="text-xl">→</span>
            <div className="text-center">
              <span className="text-3xl">📑</span>
              <p className="text-xs mt-1">PDF</p>
            </div>
          </div>
          
          <div className="flex justify-center">
            <button
              onClick={startConversion}
              disabled={showOverlay && !isComplete}
              className={`px-6 py-2 rounded-md font-medium text-white ${
                showOverlay && !isComplete 
                  ? 'bg-gray-400 cursor-not-allowed' 
                  : 'bg-yellow-500 hover:bg-yellow-600'
              }`}
            >
              {showOverlay && !isComplete ? 'Converting...' : 'Convert to PDF'}
            </button>
          </div>
          
          {isComplete && (
            <div className="mt-4 p-3 bg-green-100 text-green-800 rounded-md text-center">
              <p className="font-medium">Conversion complete!</p>
              <p className="text-sm mt-1">Your PDF file is ready for download.</p>
            </div>
          )}
        </div>
      </div>
      
      {/* Overlay Progress Bar */}
      <ProgressBar_12 
        progress={progress}
        show={showOverlay}
        onClose={isComplete ? handleClose : undefined}
        barColor="bg-yellow-400"
        overlayColor="bg-black bg-opacity-70"
      />
    </div>
  );
}
