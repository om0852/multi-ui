'use client';
import React, { useEffect, useState } from 'react';

const CircularProgress = ({ value, max, color, size, thickness }: { 
  value: number; 
  max: number; 
  color: string;
  size: number;
  thickness: number;
}) => {
  const radius = (size - thickness) / 2;
  const circumference = 2 * Math.PI * radius;
  const progress = (value / max) * circumference;

  return (
    <div className="relative" style={{ width: size, height: size }}>
      {/* Background circle */}
      <svg className="absolute transform -rotate-90" width={size} height={size}>
        <circle
          className="text-gray-200"
          strokeWidth={thickness}
          stroke="currentColor"
          fill="transparent"
          r={radius}
          cx={size / 2}
          cy={size / 2}
        />
      </svg>
      
      {/* Progress circle */}
      <svg className="absolute transform -rotate-90" width={size} height={size}>
        <circle
          className={`${color} transition-all duration-500`}
          strokeWidth={thickness}
          strokeDasharray={circumference}
          strokeDashoffset={circumference - progress}
          strokeLinecap="round"
          stroke="currentColor"
          fill="transparent"
          r={radius}
          cx={size / 2}
          cy={size / 2}
        />
      </svg>
    </div>
  );
};

const Clock_29 = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const hours = time.getHours();
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();

  return (
    <div className="bg-white p-8 rounded-xl shadow-xl">
      <div className="relative w-64 h-64">
        {/* Hours */}
        <div className="absolute inset-0">
          <CircularProgress 
            value={hours} 
            max={24} 
            color="text-blue-500" 
            size={256} 
            thickness={4}
          />
        </div>
        
        {/* Minutes */}
        <div className="absolute inset-0 scale-[0.85]">
          <CircularProgress 
            value={minutes} 
            max={60} 
            color="text-green-500" 
            size={256} 
            thickness={4}
          />
        </div>
        
        {/* Seconds */}
        <div className="absolute inset-0 scale-[0.7]">
          <CircularProgress 
            value={seconds} 
            max={60} 
            color="text-red-500" 
            size={256} 
            thickness={4}
          />
        </div>

        {/* Digital time display */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-3xl font-mono text-gray-800">
            {time.toLocaleTimeString('en-US', {
              hour12: true,
              hour: '2-digit',
              minute: '2-digit',
              second: '2-digit'
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clock_29; 