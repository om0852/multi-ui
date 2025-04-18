"use client";
import React, { useState } from 'react';
import ProgressBar_11 from '../_components/ProgressBar_11';

export default function ProgressBarExample() {
  const [progress, setProgress] = useState(0);
  const [showOverlay, setShowOverlay] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  // Function to simulate a database backup process
  const startBackup = () => {
    setProgress(0);
    setShowOverlay(true);
    setIsComplete(false);
    
    // Simulate a backup process with consistent progress
    const interval = setInterval(() => {
      setProgress(prev => {
        const newProgress = prev + 5;
        
        if (newProgress >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsComplete(true);
          }, 500);
          return 100;
        }
        
        return newProgress;
      });
    }, 400);
  };

  // Close the overlay
  const handleClose = () => {
    setShowOverlay(false);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-md p-6 bg-white rounded-xl shadow-lg">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Database Backup
        </h1>
        
        <div className="space-y-6">
          <div className="p-4 bg-gray-100 rounded-lg">
            <div className="flex items-center mb-3">
              <span className="text-2xl mr-3">💾</span>
              <div>
                <h3 className="font-medium text-gray-800">System Database</h3>
                <p className="text-sm text-gray-600">Last backup: 3 days ago</p>
              </div>
            </div>
            <p className="text-sm text-gray-700">
              Regular backups help protect your data from loss or corruption.
            </p>
          </div>
          
          <div className="flex justify-center">
            <button
              onClick={startBackup}
              disabled={showOverlay && !isComplete}
              className={`px-6 py-2 rounded-md font-medium text-white ${
                showOverlay && !isComplete 
                  ? 'bg-gray-400 cursor-not-allowed' 
                  : 'bg-indigo-600 hover:bg-indigo-700'
              }`}
            >
              {showOverlay && !isComplete ? 'Backing up...' : 'Start Backup'}
            </button>
          </div>
          
          {isComplete && (
            <div className="mt-4 p-3 bg-green-100 text-green-800 rounded-md text-center">
              <p className="font-medium">Backup complete!</p>
              <p className="text-sm mt-1">Your database has been backed up successfully.</p>
            </div>
          )}
        </div>
      </div>
      
      {/* Overlay Progress Bar */}
      <ProgressBar_11 
        progress={progress}
        show={showOverlay}
        onClose={isComplete ? handleClose : undefined}
        barColor="bg-indigo-600"
        overlayColor="bg-black bg-opacity-70"
      />
    </div>
  );
}
