"use client";
import React, { useState, useEffect } from 'react';
import ProgressBar_25 from '../tsx/ProgressBar_25';

export default function ProgressBarExample() {
  const [progress, setProgress] = useState(20);
  const [isCharging, setIsCharging] = useState(false);
  const [batteryLevel, setBatteryLevel] = useState(20);
  const [timeRemaining, setTimeRemaining] = useState('');
  const [chargingSpeed, setChargingSpeed] = useState('Standard');
  const [statusText, setStatusText] = useState('Connect charger to begin');
  
  // Charging speeds
  const chargingSpeeds = [
    { name: 'Standard', rate: 1 },
    { name: 'Fast', rate: 2 },
    { name: 'Turbo', rate: 3 }
  ];
  
  // Function to simulate battery charging
  const toggleCharging = () => {
    if (isCharging) {
      // Stop charging
      setIsCharging(false);
      setStatusText('Charging paused');
      return;
    }
    
    // Start charging
    setIsCharging(true);
    
    // Choose a random charging speed
    const randomSpeed = chargingSpeeds[Math.floor(Math.random() * chargingSpeeds.length)];
    setChargingSpeed(randomSpeed.name);
    
    // Update status text
    setStatusText(`Charging at ${randomSpeed.name} speed`);
    
    // Calculate time remaining
    const minutesRemaining = Math.ceil((100 - batteryLevel) / (randomSpeed.rate * 5)) * 5;
    const hours = Math.floor(minutesRemaining / 60);
    const minutes = minutesRemaining % 60;
    setTimeRemaining(`${hours ? hours + 'h ' : ''}${minutes}m remaining`);
  };
  
  // Function to reset the battery level
  const resetBattery = () => {
    if (isCharging) {
      setIsCharging(false);
    }
    
    // Set to a random low battery level (5-25%)
    const randomLevel = Math.floor(Math.random() * 20) + 5;
    setProgress(randomLevel);
    setBatteryLevel(randomLevel);
    setStatusText('Low battery. Connect charger.');
    setTimeRemaining('');
  };
  
  // Effect to simulate battery charging
  useEffect(() => {
    if (!isCharging || batteryLevel >= 100) return;
    
    const chargingRate = chargingSpeeds.find(s => s.name === chargingSpeed)?.rate || 1;
    
    const interval = setInterval(() => {
      setBatteryLevel(prev => {
        // Calculate new battery level
        const newLevel = Math.min(100, prev + 1);
        
        // Update progress
        setProgress(newLevel);
        
        // Update time remaining
        if (newLevel < 100) {
          const minutesRemaining = Math.ceil((100 - newLevel) / (chargingRate * 5)) * 5;
          const hours = Math.floor(minutesRemaining / 60);
          const minutes = minutesRemaining % 60;
          setTimeRemaining(`${hours ? hours + 'h ' : ''}${minutes}m remaining`);
        } else {
          setTimeRemaining('');
          setStatusText('Fully charged');
          setIsCharging(false);
        }
        
        return newLevel;
      });
    }, 1000 / chargingRate); // Adjust speed based on charging rate
    
    return () => clearInterval(interval);
  }, [isCharging, batteryLevel, chargingSpeed]);

  // Get battery color based on level
  const getBatteryColor = (level: number) => {
    if (level < 20) return 'text-red-500';
    if (level < 50) return 'text-yellow-500';
    return 'text-green-500';
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-md p-6 bg-white rounded-xl shadow-lg">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Battery Charging
        </h1>
        
        <div className="space-y-6">
          <div className="flex justify-center">
            <div className="relative w-32 h-64 border-2 border-gray-300 rounded-lg p-2 flex flex-col">
              {/* Battery body */}
              <div className="flex-1 border-2 border-gray-400 rounded-md overflow-hidden">
                <div 
                  className={`w-full bg-gradient-to-t ${
                    batteryLevel < 20 ? 'from-red-500 to-red-400' :
                    batteryLevel < 50 ? 'from-yellow-500 to-yellow-400' :
                    'from-green-500 to-green-400'
                  } transition-all duration-1000 ease-in-out`}
                  style={{ height: `${batteryLevel}%`, marginTop: `${100 - batteryLevel}%` }}
                ></div>
              </div>
              
              {/* Battery tip */}
              <div className="h-3 w-10 bg-gray-400 rounded-t-md mx-auto -mb-2"></div>
              
              {/* Battery level indicator */}
              <div className="absolute inset-0 flex items-center justify-center">
                <span className={`text-2xl font-bold ${getBatteryColor(batteryLevel)}`}>
                  {batteryLevel}%
                </span>
              </div>
              
              {/* Charging indicator */}
              {isCharging && (
                <div className="absolute top-2 right-2">
                  <span className="text-yellow-500 text-lg">⚡</span>
                </div>
              )}
            </div>
          </div>
          
          <div className="space-y-3">
            <ProgressBar_25 
              progress={progress}
              text={statusText}
              animationDuration={0.5}
              showCounter={false}
            />
            
            <p className="text-center text-sm text-gray-600">
              {isCharging ? timeRemaining : batteryLevel >= 100 ? 'Fully charged' : 'Not charging'}
            </p>
          </div>
          
          <div className="flex justify-between items-center p-3 bg-gray-100 rounded-md">
            <div>
              <p className="text-sm font-medium text-gray-700">Charging Speed</p>
              <p className="text-xs text-gray-500">{chargingSpeed}</p>
            </div>
            <div className="flex items-center">
              <span className={`inline-block w-3 h-3 rounded-full mr-2 ${
                chargingSpeed === 'Standard' ? 'bg-blue-500' :
                chargingSpeed === 'Fast' ? 'bg-yellow-500' :
                'bg-red-500'
              }`}></span>
              <span className="text-sm text-gray-700">
                {chargingSpeed === 'Standard' ? '5W' :
                 chargingSpeed === 'Fast' ? '15W' : '25W'}
              </span>
            </div>
          </div>
          
          <div className="flex justify-center space-x-4">
            <button
              onClick={toggleCharging}
              disabled={batteryLevel >= 100}
              className={`px-6 py-2 rounded-md font-medium text-white ${
                batteryLevel >= 100 
                  ? 'bg-gray-400 cursor-not-allowed' 
                  : isCharging
                    ? 'bg-red-500 hover:bg-red-600'
                    : 'bg-green-500 hover:bg-green-600'
              }`}
            >
              {isCharging ? 'Stop Charging' : 'Start Charging'}
            </button>
            
            <button
              onClick={resetBattery}
              className="px-6 py-2 rounded-md font-medium text-gray-700 bg-gray-200 hover:bg-gray-300"
            >
              Drain Battery
            </button>
          </div>
          
          {batteryLevel >= 100 && (
            <div className="mt-4 p-3 bg-green-100 text-green-800 rounded-md text-center">
              <p className="font-medium">Battery fully charged!</p>
              <p className="text-sm mt-1">You can unplug your device now.</p>
            </div>
          )}
          
          {batteryLevel <= 20 && !isCharging && (
            <div className="mt-4 p-3 bg-red-100 text-red-800 rounded-md text-center">
              <p className="font-medium">Low battery warning!</p>
              <p className="text-sm mt-1">Please connect your device to a charger.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
