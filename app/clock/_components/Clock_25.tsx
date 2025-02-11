'use client';
import React, { useEffect, useState } from 'react';

const Clock_25 = () => {
  const [time, setTime] = useState(new Date());
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    const scanEffect = setInterval(() => {
      setOffset(prev => (prev + 1) % 200);
    }, 20);

    return () => {
      clearInterval(timer);
      clearInterval(scanEffect);
    };
  }, []);

  return (
    <div className="bg-gray-900 p-8 rounded-xl shadow-2xl relative overflow-hidden">
      <div className="relative">
        {/* Main time display */}
        <div className="text-6xl font-bold font-mono tracking-wider text-cyan-400 transition-colors duration-300 hover:text-cyan-300">
          {time.toLocaleTimeString('en-US', {
            hour12: true,
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
          })}
        </div>

        {/* Holographic effects */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/10 to-transparent"
             style={{ transform: `translateX(${offset - 100}%)` }}>
        </div>
        
        {/* Glow effects */}
        <div className="absolute inset-0 text-6xl font-bold font-mono tracking-wider text-cyan-400/30 blur-[2px]">
          {time.toLocaleTimeString('en-US', {
            hour12: true,
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
          })}
        </div>
        
        {/* Red offset effect */}
        <div className="absolute -inset-0.5 text-6xl font-bold font-mono tracking-wider text-red-400/20 blur-sm transition-transform hover:translate-x-0.5">
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

export default Clock_25;

// Add to globals.css:
/*
@keyframes scan {
  0%, 100% { transform: translateX(-100%); }
  50% { transform: translateX(100%); }
}

@keyframes scanVertical {
  0%, 100% { transform: translateY(-100%); }
  50% { transform: translateY(100%); }
}

@keyframes glitch {
  0%, 100% { transform: translate(0); }
  20% { transform: translate(-2px, 2px); }
  40% { transform: translate(-2px, -2px); }
  60% { transform: translate(2px, 2px); }
  80% { transform: translate(2px, -2px); }
}

.animate-scan {
  animation: scan 4s linear infinite;
}

.animate-scanVertical {
  animation: scanVertical 6s linear infinite;
}

.animate-glitch {
  animation: glitch 0.3s linear infinite;
}
*/ 