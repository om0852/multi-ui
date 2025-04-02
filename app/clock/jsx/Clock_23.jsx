'use client';
import React, { useEffect, useState } from 'react';

const MatrixRain = () => {
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  return (
    <div className="absolute inset-0 overflow-hidden opacity-20">
      <div className="grid grid-cols-20 gap-2">
        {[...Array(100)].map((_, i) => (
          <div
            key={i}
            className="text-green-500 text-opacity-50 transition-transform duration-1000 hover:-translate-y-full"
            style={{
              transform: `translateY(${Math.random() * 100}%)`,
              transitionDelay: `${Math.random() * 2}s`
            }}
          >
            {characters[Math.floor(Math.random() * characters.length)]}
          </div>
        ))}
      </div>
    </div>
  );
};

const Clock_23 = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-black p-8 rounded-xl shadow-2xl relative overflow-hidden min-h-[120px]">
      <div className="relative z-10">
        <div className="text-5xl font-mono font-bold text-green-500 tracking-widest transition-opacity duration-500 hover:text-green-400">
          {time.toLocaleTimeString('en-US', {
            hour12: false,
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
          })}
        </div>
      </div>
      <MatrixRain />
      {/* Glow overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-green-500/5 to-transparent pointer-events-none"></div>
    </div>
  );
};

export default Clock_23;

// Add this to your globals.css
/*
@keyframes matrix {
  0% {
    transform: translateY(-100%);
  }
  100% {
    transform: translateY(1000%);
  }
}

.animate-matrix {
  animation: matrix 4s linear infinite;
}
*/ 