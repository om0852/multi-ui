'use client';
import React, { useEffect, useState } from 'react';

const NeonDigit = ({ value }: { value: string }) => {
  const [isPulsing, setIsPulsing] = useState(false);

  useEffect(() => {
    const pulseInterval = setInterval(() => {
      if (Math.random() < 0.1) {
        setIsPulsing(true);
        setTimeout(() => setIsPulsing(false), 200);
      }
    }, 3000);

    return () => clearInterval(pulseInterval);
  }, []);

  return (
    <div className="relative w-16 h-24">
      {/* Base layer */}
      <div
        className="absolute inset-0 flex items-center justify-center text-4xl font-bold blur-[2px] transition-opacity duration-200"
        style={{
          color: '#ff00ff',
          opacity: isPulsing ? 0.5 : 0.3,
        }}
      >
        {value}
      </div>

      {/* Main neon layer */}
      <div
        className="absolute inset-0 flex items-center justify-center text-4xl font-bold transition-all duration-200"
        style={{
          color: '#ff00ff',
          textShadow: isPulsing
            ? `0 0 7px #ff00ff,
               0 0 10px #ff00ff,
               0 0 21px #ff00ff,
               0 0 42px #ff00ff,
               0 0 82px #ff00ff,
               0 0 92px #ff00ff`
            : `0 0 5px #ff00ff,
               0 0 8px #ff00ff,
               0 0 15px #ff00ff,
               0 0 30px #ff00ff,
               0 0 60px #ff00ff,
               0 0 70px #ff00ff`,
        }}
      >
        {value}
      </div>

      {/* Flicker effect */}
      <div
        className={`absolute inset-0 flex items-center justify-center text-4xl font-bold transition-opacity duration-50 ${
          isPulsing ? 'opacity-70' : 'opacity-0'
        }`}
        style={{
          color: 'white',
          textShadow: '0 0 10px white',
        }}
      >
        {value}
      </div>
    </div>
  );
};

const Clock_51 = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const hours = time.getHours().toString().padStart(2, '0');
  const minutes = time.getMinutes().toString().padStart(2, '0');
  const seconds = time.getSeconds().toString().padStart(2, '0');

  return (
    <div className="relative bg-black p-12 rounded-xl shadow-2xl overflow-hidden">
      {/* Background effects */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            radial-gradient(circle at 50% 50%, rgba(255, 0, 255, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 0% 100%, rgba(255, 0, 255, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 100% 0%, rgba(255, 0, 255, 0.1) 0%, transparent 50%)
          `,
        }}
      />

      {/* Neon frame */}
      <div
        className="absolute inset-2 rounded-lg opacity-20"
        style={{
          border: '1px solid #ff00ff',
          boxShadow: `
            0 0 5px #ff00ff,
            inset 0 0 5px #ff00ff,
            0 0 20px #ff00ff,
            inset 0 0 20px #ff00ff
          `,
        }}
      />

      {/* Clock container */}
      <div className="relative">
        <div className="flex items-center space-x-4">
          <div className="flex space-x-2">
            <NeonDigit value={hours[0]} />
            <NeonDigit value={hours[1]} />
          </div>

          <div className="w-4 h-24 flex flex-col justify-center items-center space-y-4">
            <div className="w-2 h-2 rounded-full bg-fuchsia-500 shadow-lg animate-pulse" 
                 style={{ boxShadow: '0 0 10px #ff00ff' }} />
            <div className="w-2 h-2 rounded-full bg-fuchsia-500 shadow-lg animate-pulse"
                 style={{ boxShadow: '0 0 10px #ff00ff' }} />
          </div>

          <div className="flex space-x-2">
            <NeonDigit value={minutes[0]} />
            <NeonDigit value={minutes[1]} />
          </div>

          <div className="w-4 h-24 flex flex-col justify-center items-center space-y-4">
            <div className="w-2 h-2 rounded-full bg-fuchsia-500 shadow-lg animate-pulse"
                 style={{ boxShadow: '0 0 10px #ff00ff' }} />
            <div className="w-2 h-2 rounded-full bg-fuchsia-500 shadow-lg animate-pulse"
                 style={{ boxShadow: '0 0 10px #ff00ff' }} />
          </div>

          <div className="flex space-x-2">
            <NeonDigit value={seconds[0]} />
            <NeonDigit value={seconds[1]} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clock_51; 