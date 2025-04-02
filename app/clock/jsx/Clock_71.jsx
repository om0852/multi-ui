'use client';
import React, { useEffect, useState } from 'react';

// Brush stroke component that animates when the digit changes
const BrushStrokeDigit = ({ digit, prevDigit }) => {
  const [isAnimating, setIsAnimating] = useState(false);
  
  useEffect(() => {
    if (digit !== prevDigit) {
      setIsAnimating(true);
      const timer = setTimeout(() => setIsAnimating(false), 1500);
      return () => clearTimeout(timer);
    }
  }, [digit, prevDigit]);

  return (
    <div className="relative w-20 h-32 flex items-center justify-center">
      {/* Background paper texture */}
      <div className="absolute inset-0 bg-amber-50 rounded-md shadow-inner"></div>
      
      {/* Brush stroke animation container */}
      <div className="relative z-10">
        {/* Animated ink splash */}
        {isAnimating && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="absolute w-full h-full opacity-0 animate-[inkSplash_1.5s_ease-out]">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-black"></div>
              <div className="absolute top-1/3 left-1/4 w-2 h-2 rounded-full bg-black"></div>
              <div className="absolute bottom-1/3 right-1/4 w-3 h-3 rounded-full bg-black"></div>
              <div className="absolute top-1/4 right-1/3 w-1 h-1 rounded-full bg-black"></div>
            </div>
          </div>
        )}
        
        {/* The digit itself drawn in calligraphy style */}
        <div 
          className={`text-6xl text-black transition-opacity duration-700 ${
            isAnimating ? 'opacity-0' : 'opacity-100'
          }`}
          style={{ 
            fontFamily: "'Noto Serif', serif",
            transform: "rotate(-5deg)",
            filter: "drop-shadow(0 1px 1px rgba(0,0,0,0.3))"
          }}
        >
          {digit}
        </div>
        
        {/* Ink drip effect */}
        {isAnimating && (
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0.5 h-0 bg-black rounded-b-full animate-[inkDrip_2s_ease-in]"></div>
        )}
      </div>
      
      {/* Slight paper texture overlay */}
      <div 
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: "url('data:image/svg+xml,%3Csvg width=\"100\" height=\"100\" viewBox=\"0 0 100 100\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cpath d=\"M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z\" fill=\"%23000000\" fill-opacity=\"0.1\" fill-rule=\"evenodd\"/%3E%3C/svg%3E')"
        }}
      ></div>
    </div>
  );
};

// Separator with ink brush style
const InkDot = () => (
  <div className="flex flex-col items-center justify-center space-y-2">
    <div className="w-1.5 h-3 bg-black rounded-full transform rotate-45"></div>
    <div className="w-1.5 h-3 bg-black rounded-full transform -rotate-45"></div>
  </div>
);

// Decorative ink stroke element
const InkStroke = ({ width, height, rotation }) => (
  <div 
    className="absolute bg-black rounded-full opacity-80"
    style={{ 
      width: `${width}px`, 
      height: `${height}px`, 
      transform: `rotate(${rotation}deg)` 
    }}
  ></div>
);

const Clock_71 = () => {
  const [time, setTime] = useState(new Date());
  const [prevTime, setPrevTime] = useState(new Date());
  
  useEffect(() => {
    const timer = setInterval(() => {
      setPrevTime(time);
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, [time]);

  const hours = time.getHours().toString().padStart(2, '0');
  const minutes = time.getMinutes().toString().padStart(2, '0');
  const seconds = time.getSeconds().toString().padStart(2, '0');

  const prevHours = prevTime.getHours().toString().padStart(2, '0');
  const prevMinutes = prevTime.getMinutes().toString().padStart(2, '0');
  const prevSeconds = prevTime.getSeconds().toString().padStart(2, '0');

  return (
    <div className="bg-stone-100 p-10 rounded-xl shadow-xl border border-stone-300 relative overflow-hidden">
      {/* Background with rice paper texture */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: "url('data:image/svg+xml,%3Csvg width=\"100\" height=\"100\" viewBox=\"0 0 100 100\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cpath d=\"M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z\" fill=\"%23000000\" fill-opacity=\"0.1\" fill-rule=\"evenodd\"/%3E%3C/svg%3E')"
        }}
      ></div>
      
      {/* Decorative ink strokes */}
      <div className="absolute -top-10 -right-5">
        <InkStroke width={60} height={8} rotation={15} />
      </div>
      <div className="absolute -bottom-5 -left-10">
        <InkStroke width={80} height={10} rotation={-10} />
      </div>
      
      {/* Title */}
      <div className="text-center mb-8">
        <h2 className="text-2xl text-black opacity-80" style={{ fontFamily: "'Noto Serif', serif" }}>時間</h2>
      </div>
      
      {/* Clock display */}
      <div className="flex items-center justify-center space-x-2">
        {/* Hours */}
        <div className="flex space-x-2">
          <BrushStrokeDigit digit={hours[0]} prevDigit={prevHours[0]} />
          <BrushStrokeDigit digit={hours[1]} prevDigit={prevHours[1]} />
        </div>
        
        <InkDot />
        
        {/* Minutes */}
        <div className="flex space-x-2">
          <BrushStrokeDigit digit={minutes[0]} prevDigit={prevMinutes[0]} />
          <BrushStrokeDigit digit={minutes[1]} prevDigit={prevMinutes[1]} />
        </div>
        
        <InkDot />
        
        {/* Seconds */}
        <div className="flex space-x-2">
          <BrushStrokeDigit digit={seconds[0]} prevDigit={prevSeconds[0]} />
          <BrushStrokeDigit digit={seconds[1]} prevDigit={prevSeconds[1]} />
        </div>
      </div>
      
      {/* Date stamp */}
      <div className="mt-8 flex justify-center">
        <div 
          className="px-6 py-1 border border-black text-black text-xs relative"
          style={{ 
            fontFamily: "'Noto Serif', serif",
            borderRadius: '1px' 
          }}
        >
          {time.toLocaleDateString('en-US', { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric'
          })}
          
          {/* Stamp effect */}
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-800 rounded-full opacity-80"></div>
        </div>
      </div>
    </div>
  );
};

export default Clock_71;

// Add to globals.css:
/*
@keyframes inkSplash {
  0% { transform: scale(0); opacity: 0; }
  20% { transform: scale(1.2); opacity: 0.8; }
  100% { transform: scale(2.5); opacity: 0; }
}

@keyframes inkDrip {
  0% { height: 0; opacity: 0; }
  20% { height: 10px; opacity: 0.8; }
  80% { height: 20px; opacity: 0.6; }
  100% { height: 30px; opacity: 0; }
}
*/ 