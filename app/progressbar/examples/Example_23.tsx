"use client";
import React, { useState } from 'react';
import ProgressBar_23 from '../tsx/ProgressBar_23';

export default function ProgressBarExample() {
  const [progress, setProgress] = useState(0);
  const [isTraining, setIsTraining] = useState(false);
  const [epoch, setEpoch] = useState(0);
  const [totalEpochs, setTotalEpochs] = useState(10);
  const [accuracy, setAccuracy] = useState(0);
  const [loss, setLoss] = useState(1.0);
  const [modelType, setModelType] = useState('Neural Network');
  const [statusText, setStatusText] = useState('Ready to train');
  
  // Array of model types
  const modelTypes = [
    'Neural Network',
    'Convolutional Neural Network',
    'Recurrent Neural Network',
    'Transformer',
    'Random Forest'
  ];
  
  // Function to simulate AI model training
  const startTraining = () => {
    if (isTraining) return;
    
    // Reset state
    setProgress(0);
    setIsTraining(true);
    setEpoch(0);
    setAccuracy(0);
    setLoss(1.0);
    
    // Choose a random model type and number of epochs
    const randomModel = modelTypes[Math.floor(Math.random() * modelTypes.length)];
    const randomEpochs = Math.floor(Math.random() * 15) + 5;
    setModelType(randomModel);
    setTotalEpochs(randomEpochs);
    
    // Simulate training process
    let currentEpoch = 0;
    setStatusText(`Initializing ${randomModel} model...`);
    
    // Delay to simulate initialization
    setTimeout(() => {
      const interval = setInterval(() => {
        currentEpoch++;
        setEpoch(currentEpoch);
        
        // Calculate progress percentage
        const newProgress = Math.min(100, Math.floor((currentEpoch / randomEpochs) * 100));
        setProgress(newProgress);
        
        // Update metrics
        const newAccuracy = Math.min(0.98, accuracy + (Math.random() * 0.1));
        const newLoss = Math.max(0.02, loss - (Math.random() * 0.15));
        setAccuracy(newAccuracy);
        setLoss(newLoss);
        
        // Update status text
        setStatusText(`Training epoch ${currentEpoch}/${randomEpochs}`);
        
        if (currentEpoch >= randomEpochs || newProgress >= 100) {
          clearInterval(interval);
          setIsTraining(false);
          setProgress(100);
          setStatusText('Training complete');
        }
      }, 1000);
    }, 1500);
  };
  
  // Function to reset the training
  const resetTraining = () => {
    setProgress(0);
    setIsTraining(false);
    setEpoch(0);
    setAccuracy(0);
    setLoss(1.0);
    setStatusText('Ready to train');
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 p-4">
      <div className="w-full max-w-lg p-6 bg-gray-800 rounded-xl shadow-lg border border-gray-700">
        <h1 className="text-2xl font-bold text-center text-gray-100 mb-6">
          AI Model Training
        </h1>
        
        <div className="space-y-6">
          <div className="flex items-center justify-between p-3 bg-gray-700 rounded-md">
            <div className="flex items-center">
              <span className="text-2xl mr-3">🧠</span>
              <div>
                <h3 className="font-medium text-gray-100">{modelType}</h3>
                <p className="text-sm text-gray-400">Training Configuration</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm font-medium text-gray-100">{totalEpochs} Epochs</p>
              <p className="text-xs text-gray-400">Batch Size: 32</p>
            </div>
          </div>
          
          <div className="space-y-4">
            <ProgressBar_23 
              progress={progress}
              text={statusText}
              animationDuration={0.5}
              showCounter={true}
            />
            
            <div className="grid grid-cols-2 gap-4">
              <div className="p-3 bg-gray-700 rounded-md">
                <p className="text-sm text-gray-400 mb-1">Accuracy</p>
                <div className="flex items-end justify-between">
                  <p className="text-xl font-bold text-green-400">
                    {(accuracy * 100).toFixed(2)}%
                  </p>
                  {epoch > 1 && (
                    <p className="text-xs text-green-500">
                      ↑ {(Math.random() * 2).toFixed(2)}%
                    </p>
                  )}
                </div>
              </div>
              <div className="p-3 bg-gray-700 rounded-md">
                <p className="text-sm text-gray-400 mb-1">Loss</p>
                <div className="flex items-end justify-between">
                  <p className="text-xl font-bold text-red-400">
                    {loss.toFixed(4)}
                  </p>
                  {epoch > 1 && (
                    <p className="text-xs text-red-500">
                      ↓ {(Math.random() * 0.1).toFixed(4)}
                    </p>
                  )}
                </div>
              </div>
            </div>
            
            <div className="p-3 bg-gray-700 rounded-md">
              <div className="flex justify-between mb-2">
                <p className="text-sm text-gray-400">Training Progress</p>
                <p className="text-sm text-gray-400">Epoch {epoch}/{totalEpochs}</p>
              </div>
              <div className="h-16 bg-gray-900 rounded-md overflow-hidden">
                {epoch > 0 && (
                  <div className="h-full w-full flex items-end">
                    {[...Array(Math.min(epoch, 20))].map((_, i) => (
                      <div 
                        key={i}
                        className="flex-1 bg-gradient-to-t from-blue-600 to-purple-600"
                        style={{ 
                          height: `${Math.min(95, 30 + Math.random() * 65)}%`,
                          margin: '0 1px'
                        }}
                      ></div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
          
          <div className="flex justify-center space-x-4">
            <button
              onClick={startTraining}
              disabled={isTraining}
              className={`px-6 py-2 rounded-md font-medium text-white ${
                isTraining 
                  ? 'bg-gray-600 cursor-not-allowed' 
                  : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700'
              }`}
            >
              {isTraining ? 'Training...' : progress === 100 ? 'Train Again' : 'Start Training'}
            </button>
            
            <button
              onClick={resetTraining}
              disabled={isTraining || (progress === 0 && epoch === 0)}
              className={`px-6 py-2 rounded-md font-medium ${
                isTraining || (progress === 0 && epoch === 0)
                  ? 'bg-gray-700 text-gray-500 cursor-not-allowed' 
                  : 'bg-gray-700 text-gray-200 hover:bg-gray-600'
              }`}
            >
              Reset
            </button>
          </div>
          
          {progress === 100 && (
            <div className="mt-4 p-3 bg-green-900/30 text-green-400 rounded-md text-center border border-green-800/50">
              <p className="font-medium">Training complete!</p>
              <p className="text-sm mt-1">Model achieved {(accuracy * 100).toFixed(2)}% accuracy with {loss.toFixed(4)} loss.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
