"use client";
import React, { useState, useEffect } from 'react';
import ProgressBar_16 from '../tsx/ProgressBar_16';

export default function ProgressBarExample() {
  const [progress, setProgress] = useState(75);
  const [heartRate, setHeartRate] = useState(72);
  const [isMonitoring, setIsMonitoring] = useState(false);
  const [batteryLevel, setBatteryLevel] = useState(75);
  const [status, setStatus] = useState('Normal');
  
  // Function to simulate heart rate monitoring
  const toggleMonitoring = () => {
    setIsMonitoring(!isMonitoring);
  };
  
  // Effect to simulate heart rate changes when monitoring is active
  useEffect(() => {
    if (!isMonitoring) return;
    
    const interval = setInterval(() => {
      // Simulate heart rate fluctuations
      setHeartRate(prev => {
        // Random fluctuation between -3 and +3 BPM
        const fluctuation = Math.floor(Math.random() * 7) - 3;
        const newRate = prev + fluctuation;
        
        // Keep heart rate within reasonable bounds (60-100 BPM for resting)
        if (newRate < 60) return 60;
        if (newRate > 100) return 100;
        
        return newRate;
      });
      
      // Simulate battery drain
      setBatteryLevel(prev => {
        if (prev <= 0) return 0;
        return prev - 0.1; // Drain battery slowly
      });
      
      // Update progress bar based on heart rate
      // Map heart rate from 60-100 BPM to 50-100% on progress bar
      const mappedProgress = Math.min(100, Math.max(50, ((heartRate - 60) * 1.25) + 50));
      setProgress(mappedProgress);
      
      // Update status based on heart rate
      if (heartRate < 65) {
        setStatus('Low');
      } else if (heartRate > 90) {
        setStatus('Elevated');
      } else {
        setStatus('Normal');
      }
      
    }, 1000);
    
    return () => clearInterval(interval);
  }, [isMonitoring, heartRate]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-md p-6 bg-white rounded-xl shadow-lg">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Heart Rate Monitor
        </h1>
        
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <span className="text-2xl mr-3">❤️</span>
              <div>
                <h3 className="font-medium text-gray-800">Heart Rate</h3>
                <p className="text-sm text-gray-600">Real-time monitoring</p>
              </div>
            </div>
            <div className="flex items-center">
              <span className={`text-sm px-2 py-1 rounded font-medium ${
                status === 'Normal' ? 'bg-green-100 text-green-800' :
                status === 'Low' ? 'bg-blue-100 text-blue-800' :
                'bg-yellow-100 text-yellow-800'
              }`}>
                {status}
              </span>
            </div>
          </div>
          
          <div className="flex flex-col items-center justify-center py-6 bg-gray-50 rounded-lg">
            <div className="text-5xl font-bold text-red-500 mb-2 flex items-center">
              {heartRate}
              <span className="text-lg ml-1 text-gray-500">BPM</span>
            </div>
            
            <div className="w-full px-6 mt-4">
              <ProgressBar_16 
                progress={progress}
                height="h-4"
                color={
                  status === 'Normal' ? 'bg-green-500' :
                  status === 'Low' ? 'bg-blue-500' :
                  'bg-yellow-500'
                }
                backgroundColor="bg-gray-200"
                rounded={true}
                animationDuration={0.5}
                showCounter={false}
              />
              
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>60</span>
                <span>80</span>
                <span>100</span>
              </div>
            </div>
          </div>
          
          <div className="flex items-center justify-between px-4 py-3 bg-gray-100 rounded-lg">
            <div className="flex items-center">
              <span className="text-lg mr-2">🔋</span>
              <span className="text-sm text-gray-600">Battery</span>
            </div>
            <div className="flex items-center">
              <div className="w-24 h-2 bg-gray-300 rounded-full overflow-hidden">
                <div 
                  className={`h-full rounded-full ${
                    batteryLevel > 50 ? 'bg-green-500' :
                    batteryLevel > 20 ? 'bg-yellow-500' :
                    'bg-red-500'
                  }`}
                  style={{ width: `${batteryLevel}%` }}
                ></div>
              </div>
              <span className="text-sm ml-2 font-medium">{Math.round(batteryLevel)}%</span>
            </div>
          </div>
          
          <div className="flex justify-center">
            <button
              onClick={toggleMonitoring}
              className={`px-6 py-2 rounded-md font-medium text-white ${
                isMonitoring 
                  ? 'bg-red-500 hover:bg-red-600' 
                  : 'bg-green-500 hover:bg-green-600'
              }`}
            >
              {isMonitoring ? 'Stop Monitoring' : 'Start Monitoring'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
