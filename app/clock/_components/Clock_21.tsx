'use client';
import React, { useEffect, useState } from 'react';

const Clock_21 = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-gradient-to-br from-gray-900 to-black p-8 rounded-2xl shadow-2xl border border-purple-500/20">
      <div className="relative">
        <div className="text-6xl font-bold font-mono tracking-wider bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent transition-all duration-500 hover:scale-105">
          {time.toLocaleTimeString('en-US', {
            hour12: true,
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
          })}
        </div>
        {/* Glow effect using multiple shadows */}
        <div className="absolute inset-0 text-6xl font-bold font-mono tracking-wider text-blue-500/30 blur-[2px]">
          {time.toLocaleTimeString('en-US', {
            hour12: true,
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
          })}
        </div>
        <div className="absolute inset-0 text-6xl font-bold font-mono tracking-wider text-purple-500/20 blur-[4px]">
          {time.toLocaleTimeString('en-US', {
            hour12: true,
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
          })}
        </div>
      </div>
    </div>
  );
};

export default Clock_21; 