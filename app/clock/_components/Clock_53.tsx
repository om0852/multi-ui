'use client';
import React, { useEffect, useState } from 'react';

const PaperDigit = ({ value }: { value: string }) => {
  const layers = Array(5).fill(0);
  
  return (
    <div className="relative w-16 h-24">
      {layers.map((_, index) => (
        <div
          key={index}
          className="absolute inset-0 flex items-center justify-center text-4xl font-bold transition-all duration-300"
          style={{
            color: index === 0 ? '#ffffff' : 'transparent',
            transform: `translateY(${index * 2}px)`,
            textShadow: index === 0 ? 'none' : '0 0 1px rgba(0, 0, 0, 0.3)',
            filter: `blur(${index * 0.5}px)`,
            opacity: 1 - index * 0.15,
          }}
        >
          {value}
        </div>
      ))}
      
      {/* Highlight layer */}
      <div
        className="absolute inset-0 flex items-center justify-center text-4xl font-bold"
        style={{
          background: 'linear-gradient(135deg, transparent 0%, transparent 50%, rgba(255, 255, 255, 0.1) 50%, transparent 51%, transparent 100%)',
          clipPath: 'text',
          WebkitClipPath: 'text',
        }}
      >
        {value}
      </div>
    </div>
  );
};

const Clock_53 = () => {
  const [time, setTime] = useState(new Date());
  const [isHovered, setIsHovered] = useState(false);

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
    <div 
      className="relative bg-gradient-to-br from-blue-50 to-gray-100 p-12 rounded-xl shadow-2xl overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        transition: 'all 0.3s ease',
        transform: isHovered ? 'translateY(-5px)' : 'translateY(0)',
      }}
    >
      {/* Paper texture overlay */}
      <div
        className="absolute inset-0 opacity-50"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          filter: 'contrast(10%) brightness(150%)',
        }}
      />

      {/* Main container with shadow effect */}
      <div className="relative bg-white p-8 rounded-lg shadow-lg">
        <div className="flex items-center space-x-6">
          <div className="flex space-x-2">
            <PaperDigit value={hours[0]} />
            <PaperDigit value={hours[1]} />
          </div>

          <div className="flex flex-col space-y-2">
            <div className="w-2 h-2 rounded-full bg-gray-300" />
            <div className="w-2 h-2 rounded-full bg-gray-300" />
          </div>

          <div className="flex space-x-2">
            <PaperDigit value={minutes[0]} />
            <PaperDigit value={minutes[1]} />
          </div>

          <div className="flex flex-col space-y-2">
            <div className="w-2 h-2 rounded-full bg-gray-300" />
            <div className="w-2 h-2 rounded-full bg-gray-300" />
          </div>

          <div className="flex space-x-2">
            <PaperDigit value={seconds[0]} />
            <PaperDigit value={seconds[1]} />
          </div>
        </div>

        {/* Shadow overlay */}
        <div
          className="absolute -inset-1 rounded-lg transition-opacity duration-300"
          style={{
            background: 'radial-gradient(circle at 30% 30%, transparent 0%, rgba(0, 0, 0, 0.05) 100%)',
            opacity: isHovered ? 0.8 : 0.5,
          }}
        />
      </div>

      {/* Decorative corner fold */}
      <div
        className="absolute top-0 right-0 w-16 h-16 transition-all duration-300"
        style={{
          background: 'linear-gradient(135deg, transparent 50%, rgba(0, 0, 0, 0.1) 50%)',
          transform: isHovered ? 'scale(1.1)' : 'scale(1)',
        }}
      />
    </div>
  );
};

export default Clock_53; 