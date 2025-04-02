'use client';
import React, { useState, useEffect } from 'react';

// Paper digit that appears folded
const PaperDigit = ({ digit, prevDigit }) => {
  const [folding, setFolding] = useState(false);
  
  useEffect(() => {
    if (digit !== prevDigit) {
      setFolding(true);
      const timer = setTimeout(() => setFolding(false), 600);
      return () => clearTimeout(timer);
    }
  }, [digit, prevDigit]);
  
  return (
    <div className="relative w-16 h-28 mx-1">
      {/* Paper background with fold lines */}
      <div className={`absolute inset-0 bg-white rounded shadow-md 
                      ${folding ? 'animate-[paperFold_0.6s_ease-in-out]' : ''}`}>
        
        {/* Paper texture */}
        <div className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5z' fill='%23CCC' fill-opacity='0.25' fill-rule='evenodd'/%3E%3C/svg%3E")`,
            backgroundSize: '100px 100px'
          }}
        ></div>
        
        {/* Horizontal fold line */}
        <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-gray-300"></div>
        
        {/* Vertical fold lines */}
        <div className="absolute top-0 bottom-0 left-1/3 w-[1px] bg-gray-300"></div>
        <div className="absolute top-0 bottom-0 right-1/3 w-[1px] bg-gray-300"></div>
        
        {/* Corners that look like folds */}
        <div className="absolute top-0 left-0 w-6 h-6">
          <div className="absolute bottom-0 right-0 w-6 h-6 bg-gray-100"
               style={{ clipPath: 'polygon(100% 0, 0 100%, 100% 100%)' }}></div>
        </div>
        <div className="absolute top-0 right-0 w-6 h-6">
          <div className="absolute bottom-0 left-0 w-6 h-6 bg-gray-100"
               style={{ clipPath: 'polygon(0 0, 0 100%, 100% 100%)' }}></div>
        </div>
      </div>
      
      {/* Digit display */}
      <div className={`absolute inset-0 flex items-center justify-center
                     text-5xl font-bold text-gray-800 transition-opacity duration-300
                     ${folding ? 'opacity-0' : 'opacity-100'}`}>
        {digit}
      </div>
      
      {/* Shadow effect that moves during folding */}
      <div className={`absolute inset-0 bg-gradient-to-br from-transparent to-gray-200/50 rounded ${
        folding ? 'animate-[shadowMove_0.6s_ease-in-out]' : ''
      }`}></div>
    </div>
  );
};

// Origami bird decoration
const OrigamiBird = ({ position }) => {
  return (
    <div className={`absolute ${position} w-14 h-14 transform hover:scale-110 transition-transform duration-300`}>
      <div className="relative w-full h-full animate-[float_4s_ease-in-out_infinite_alternate]">
        {/* Bird body */}
        <div className="absolute inset-0 bg-orange-50" 
             style={{ clipPath: 'polygon(0% 50%, 40% 0%, 80% 50%, 40% 100%)' }}>
          {/* Fold lines */}
          <div className="absolute top-0 bottom-0 left-[40%] w-[1px] bg-orange-200"></div>
          <div className="absolute left-0 right-0 top-[50%] h-[1px] bg-orange-200"></div>
        </div>
        
        {/* Bird wings */}
        <div className="absolute top-[15%] left-[15%] w-[70%] h-[70%] bg-orange-100"
             style={{ clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)', 
                     transform: 'rotate(45deg)' }}>
          {/* Wing fold lines */}
          <div className="absolute top-0 bottom-0 left-1/2 w-[1px] bg-orange-200"></div>
          <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-orange-200"></div>
        </div>
        
        {/* Bird head */}
        <div className="absolute top-[30%] right-0 w-[30%] h-[40%] bg-orange-100"
             style={{ clipPath: 'polygon(0% 0%, 100% 50%, 0% 100%)' }}>
          {/* Head fold line */}
          <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-orange-200"></div>
        </div>
      </div>
    </div>
  );
};

// Paper crane decoration
const PaperCrane = ({ position, size = 'w-16 h-16', color = 'bg-sky-100' }) => {
  return (
    <div className={`absolute ${position} ${size} transform hover:scale-110 transition-transform duration-300`}>
      <div className="relative w-full h-full animate-[float_5s_ease-in-out_infinite_alternate]">
        {/* Crane body */}
        <div className={`absolute inset-0 ${color}`}
             style={{ clipPath: 'polygon(0% 25%, 50% 0%, 100% 25%, 50% 100%)' }}>
          {/* Fold lines */}
          <div className="absolute top-0 bottom-0 left-1/2 w-[1px] bg-white/50"></div>
          <div className="absolute top-1/4 left-0 right-0 h-[1px] bg-white/50"></div>
        </div>
        
        {/* Wings */}
        <div className={`absolute top-[25%] left-0 w-[50%] h-[50%] ${color} opacity-90`}
             style={{ clipPath: 'polygon(0% 0%, 100% 0%, 0% 100%)', 
                    transform: 'rotate(-10deg)' }}>
        </div>
        <div className={`absolute top-[25%] right-0 w-[50%] h-[50%] ${color} opacity-90`}
             style={{ clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%)', 
                    transform: 'rotate(10deg)' }}>
        </div>
      </div>
    </div>
  );
};

// Paper boat decoration
const PaperBoat = ({ position, color = 'bg-violet-100' }) => {
  return (
    <div className={`absolute ${position} w-12 h-8 transform hover:scale-110 transition-transform duration-300`}>
      <div className="relative w-full h-full animate-[bobUpDown_3s_ease-in-out_infinite]">
        {/* Boat body */}
        <div className={`absolute inset-0 ${color}`}
             style={{ clipPath: 'polygon(0% 0%, 100% 0%, 80% 100%, 20% 100%)' }}>
          {/* Fold lines */}
          <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-white/50"></div>
        </div>
        
        {/* Boat sail */}
        <div className={`absolute -top-6 left-1/4 w-1/2 h-8 ${color} opacity-90`}
             style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)', 
                    transform: 'rotate(0deg)' }}>
          {/* Sail fold line */}
          <div className="absolute top-0 bottom-0 left-1/2 w-[1px] bg-white/50"></div>
        </div>
      </div>
    </div>
  );
};

// Paper separator
const PaperSeparator = () => {
  return (
    <div className="relative h-28 mx-2 flex items-center">
      <div className="h-16 w-[2px] bg-gray-200 rounded-full">
        {/* Fold shadows */}
        <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 w-3 h-[1px] bg-gray-300"></div>
        <div className="absolute top-3/4 left-1/2 transform -translate-x-1/2 w-3 h-[1px] bg-gray-300"></div>
      </div>
    </div>
  );
};

// Main clock component
const Clock_83 = () => {
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
  
  const date = time.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
  
  return (
    <div className="relative bg-orange-50 p-10 rounded-xl shadow-lg border border-gray-200 overflow-hidden">
      {/* Paper texture background */}
      <div className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5z' fill='%23DDD' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E")`,
          backgroundSize: '200px 200px'
        }}
      ></div>
      
      {/* Decorative elements */}
      <OrigamiBird position="top-8 left-8" />
      <PaperCrane position="top-12 right-12" color="bg-pink-100" />
      <PaperCrane position="bottom-8 left-32" size="w-10 h-10" color="bg-cyan-100" />
      <PaperBoat position="bottom-10 right-16" color="bg-purple-100" />
      
      {/* Title */}
      <div className="text-center mb-6 relative">
        <h1 className="text-2xl font-light tracking-wide text-gray-700">Paper Time</h1>
        <div className="w-24 h-[2px] bg-gray-300 mx-auto mt-1"></div>
      </div>
      
      {/* Clock display */}
      <div className="flex justify-center items-center mb-4">
        {/* Hours */}
        <div className="flex">
          <PaperDigit digit={hours[0]} prevDigit={prevHours[0]} />
          <PaperDigit digit={hours[1]} prevDigit={prevHours[1]} />
        </div>
        
        <PaperSeparator />
        
        {/* Minutes */}
        <div className="flex">
          <PaperDigit digit={minutes[0]} prevDigit={prevMinutes[0]} />
          <PaperDigit digit={minutes[1]} prevDigit={prevMinutes[1]} />
        </div>
        
        <PaperSeparator />
        
        {/* Seconds */}
        <div className="flex">
          <PaperDigit digit={seconds[0]} prevDigit={prevSeconds[0]} />
          <PaperDigit digit={seconds[1]} prevDigit={prevSeconds[1]} />
        </div>
      </div>
      
      {/* Date display */}
      <div className="text-center text-gray-600 text-sm mt-4">
        <div className="px-4 py-1 bg-white inline-block rounded-md shadow-sm border border-gray-100">
          {date}
        </div>
      </div>
      
      {/* Paper corner fold decoration */}
      <div className="absolute top-0 right-0 w-16 h-16">
        <div className="absolute top-0 right-0 w-full h-full bg-orange-100"
             style={{ clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%)' }}></div>
        <div className="absolute top-0 right-0 w-[90%] h-[90%] bg-orange-50"
             style={{ clipPath: 'polygon(100% 0%, 0% 100%, 100% 100%)' }}></div>
        <div className="absolute top-0 right-0 w-full h-full" 
             style={{ background: 'linear-gradient(135deg, transparent 47%, rgba(0,0,0,0.05) 48%, transparent 52%)' }}></div>
      </div>
      
      {/* Bottom paper tear decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-4 overflow-hidden">
        <div className="absolute bottom-0 left-0 right-0 h-16"
             style={{ 
               backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0C 20 10, 30 30, 60 30 S 100 10, 100 0 Z' fill='%23FFF5E1' fill-opacity='0.5'/%3E%3C/svg%3E")`,
               backgroundSize: '100px 100px',
               backgroundRepeat: 'repeat-x'
             }}
        ></div>
      </div>
    </div>
  );
};

export default Clock_83;

// Add these keyframes to your globals.css:
/*
@keyframes paperFold {
  0% { transform: perspective(500px) rotateY(0); }
  50% { transform: perspective(500px) rotateY(90deg); }
  50.1% { transform: perspective(500px) rotateY(-90deg); }
  100% { transform: perspective(500px) rotateY(0); }
}

@keyframes shadowMove {
  0% { opacity: 0.1; }
  50% { opacity: 0; }
  100% { opacity: 0.1; }
}

@keyframes float {
  0%, 100% { transform: translateY(0) rotate(0); }
  50% { transform: translateY(-10px) rotate(5deg); }
}

@keyframes bobUpDown {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-5px); }
}
*/ 