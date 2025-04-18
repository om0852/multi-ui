"use client";
import React, { useState } from 'react';
import ProgressBar_19 from '../_components/ProgressBar_19';

export default function ProgressBarExample() {
  const [progress, setProgress] = useState(0);
  const [isProcessing, setIsProcessing] = useState(false);
  const [processedRecords, setProcessedRecords] = useState(0);
  const [totalRecords, setTotalRecords] = useState(1000);
  const [processingSpeed, setProcessingSpeed] = useState(0);
  
  // Function to simulate data processing
  const startProcessing = () => {
    if (isProcessing) return;
    
    // Reset state
    setProgress(0);
    setIsProcessing(true);
    setProcessedRecords(0);
    
    // Generate a random number of records between 800 and 1500
    const randomTotal = Math.floor(Math.random() * 700) + 800;
    setTotalRecords(randomTotal);
    
    let lastTimestamp = Date.now();
    let recordsProcessed = 0;
    
    // Simulate processing with varying speeds
    const interval = setInterval(() => {
      // Calculate processing speed (records per second)
      const now = Date.now();
      const timeElapsed = now - lastTimestamp;
      
      // Random batch size between 5 and 20 records
      const batchSize = Math.floor(Math.random() * 15) + 5;
      recordsProcessed += batchSize;
      
      // Update processed records
      setProcessedRecords(recordsProcessed);
      
      // Calculate speed (records per second)
      const speed = Math.round((batchSize / timeElapsed) * 1000);
      setProcessingSpeed(speed);
      
      // Update progress percentage
      const newProgress = Math.min(100, Math.floor((recordsProcessed / randomTotal) * 100));
      setProgress(newProgress);
      
      // Update timestamp for next calculation
      lastTimestamp = now;
      
      if (recordsProcessed >= randomTotal || newProgress >= 100) {
        clearInterval(interval);
        setIsProcessing(false);
        setProgress(100);
        setProcessedRecords(randomTotal);
      }
    }, 300);
  };
  
  // Reset the process
  const resetProcess = () => {
    setProgress(0);
    setIsProcessing(false);
    setProcessedRecords(0);
    setProcessingSpeed(0);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-md p-6 bg-white rounded-xl shadow-lg">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Data Processing
        </h1>
        
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <span className="text-2xl mr-3">📊</span>
              <div>
                <h3 className="font-medium text-gray-800">Processing Records</h3>
                <p className="text-sm text-gray-600">Total: {totalRecords.toLocaleString()} records</p>
              </div>
            </div>
            <div className="text-right">
              <p className="font-medium text-gray-800">{processedRecords.toLocaleString()}</p>
              <p className="text-xs text-gray-500">Records processed</p>
            </div>
          </div>
          
          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-600">
              <span>Progress</span>
              <span>{progress}%</span>
            </div>
            
            <ProgressBar_19 
              progress={progress}
              height="h-5"
              color="bg-blue-500"
              backgroundColor="bg-gray-200"
              animationDuration={0.5}
              showCounter={false}
            />
            
            {isProcessing && (
              <p className="text-xs text-gray-500 text-right">
                Processing at {processingSpeed} records/sec
              </p>
            )}
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="p-3 bg-gray-100 rounded-lg text-center">
              <p className="text-sm text-gray-600">Processed</p>
              <p className="text-xl font-bold text-gray-800">{processedRecords.toLocaleString()}</p>
            </div>
            <div className="p-3 bg-gray-100 rounded-lg text-center">
              <p className="text-sm text-gray-600">Remaining</p>
              <p className="text-xl font-bold text-gray-800">
                {Math.max(0, totalRecords - processedRecords).toLocaleString()}
              </p>
            </div>
          </div>
          
          <div className="flex justify-center space-x-4">
            <button
              onClick={startProcessing}
              disabled={isProcessing}
              className={`px-6 py-2 rounded-md font-medium text-white ${
                isProcessing 
                  ? 'bg-gray-400 cursor-not-allowed' 
                  : 'bg-blue-600 hover:bg-blue-700'
              }`}
            >
              {isProcessing ? 'Processing...' : 'Start Processing'}
            </button>
            
            <button
              onClick={resetProcess}
              disabled={isProcessing || progress === 0}
              className={`px-6 py-2 rounded-md font-medium ${
                isProcessing || progress === 0
                  ? 'bg-gray-200 text-gray-400 cursor-not-allowed' 
                  : 'bg-red-100 text-red-600 hover:bg-red-200'
              }`}
            >
              Reset
            </button>
          </div>
          
          {progress === 100 && (
            <div className="mt-4 p-3 bg-green-100 text-green-800 rounded-md text-center">
              <p className="font-medium">Processing complete!</p>
              <p className="text-sm mt-1">All {totalRecords.toLocaleString()} records have been processed.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
