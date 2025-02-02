'use client';
import React, { useEffect, useState } from 'react';

const Clock_27 = () => {
  const [time, setTime] = useState(new Date());
  const [gradientAngle, setGradientAngle] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    const gradientTimer = setInterval(() => {
      setGradientAngle(prev => (prev + 1) % 360);
    }, 50);

    return () => {
      clearInterval(timer);
      clearInterval(gradientTimer);
    };
  }, []);

  return (
    <div className="relative p-8 rounded-2xl overflow-hidden bg-white shadow-xl">
      {/* Animated gradient background */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          background: `linear-gradient(${gradientAngle}deg, #ec4899, #8b5cf6, #3b82f6)`,
          filter: 'blur(20px)',
        }}
      />

      {/* Glass effect container */}
      <div className="relative backdrop-blur-sm bg-white/30 p-6 rounded-xl">
        <div className="grid grid-cols-3 gap-4 text-center">
          {/* Hours */}
          <div className="bg-white/40 backdrop-blur-md p-4 rounded-lg shadow-lg">
            <div className="text-4xl font-light text-gray-800">
              {time.getHours().toString().padStart(2, '0')}
            </div>
            <div className="text-xs text-gray-600 mt-1">HOURS</div>
          </div>

          {/* Minutes */}
          <div className="bg-white/40 backdrop-blur-md p-4 rounded-lg shadow-lg">
            <div className="text-4xl font-light text-gray-800">
              {time.getMinutes().toString().padStart(2, '0')}
            </div>
            <div className="text-xs text-gray-600 mt-1">MINUTES</div>
          </div>

          {/* Seconds */}
          <div className="bg-white/40 backdrop-blur-md p-4 rounded-lg shadow-lg">
            <div className="text-4xl font-light text-gray-800">
              {time.getSeconds().toString().padStart(2, '0')}
            </div>
            <div className="text-xs text-gray-600 mt-1">SECONDS</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clock_27; 