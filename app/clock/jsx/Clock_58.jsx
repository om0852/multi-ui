'use client';
import React, { useEffect, useState } from 'react';

const PopArtDigit = ({ digit, prevDigit }) => {
  const [isChanging, setIsChanging] = useState(false);
  const colors = [
    'bg-pink-500', 'bg-yellow-400', 'bg-blue-500', 
    'bg-green-500', 'bg-purple-500', 'bg-red-500'
  ];
  
  // Select a random color when digit changes
  const [bgColor, setBgColor] = useState(colors[0]);
  
  useEffect(() => {
    if (digit !== prevDigit) {
      setIsChanging(true);
      setBgColor(colors[Math.floor(Math.random() * colors.length)]);
      
      const timer = setTimeout(() => {
        setIsChanging(false);
      }, 300);
      
      return () => clearTimeout(timer);
    }
  }, [digit, prevDigit, colors]);

  return (
    <div className={`relative w-16 h-24 ${bgColor} rounded-lg overflow-hidden transition-all duration-300 border-4 border-black`}
         style={{ 
           transform: isChanging ? 'scale(1.1)' : 'scale(1)',
           boxShadow: isChanging ? '0 0 15px rgba(0,0,0,0.5)' : '4px 4px 0 rgba(0,0,0,0.8)'
         }}>
      
      {/* Ben-Day dots pattern */}
      <div className="absolute inset-0 opacity-20"
           style={{
             backgroundImage: `radial-gradient(circle, black 2px, transparent 2px)`,
             backgroundSize: '10px 10px'
           }}>
      </div>
      
      {/* Comic-style text */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className={`text-5xl font-extrabold text-white transition-all duration-300 ${
          isChanging ? 'scale-150 opacity-0' : 'scale-100 opacity-100'
        }`}
        style={{
          textShadow: '3px 3px 0 rgba(0,0,0,0.8)'
        }}>
          {digit}
        </div>
      </div>
      
      {/* Comic burst effect */}
      {isChanging && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="absolute w-28 h-28 bg-yellow-300 rotate-45"
               style={{ animation: 'pop-burst 0.3s ease-out' }}></div>
          <div className="relative text-5xl font-extrabold text-black z-10"
               style={{ fontFamily: 'comic sans ms, cursive' }}>
            {digit}
          </div>
        </div>
      )}
      
      {/* White highlight */}
      <div className="absolute top-2 left-2 w-4 h-4 bg-white/40 rounded-full"></div>
    </div>
  );
};

const Clock_58 = () => {
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
    <div className="bg-white p-10 rounded-xl shadow-2xl border-8 border-black relative">
      {/* Comic header */}
      <div className="absolute -top-7 left-1/2 -translate-x-1/2 px-4 py-1 bg-yellow-400 text-black font-extrabold rounded-md border-4 border-black transform rotate-2">
        TIME!
      </div>
      
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10"
           style={{
             backgroundImage: `repeating-linear-gradient(45deg, #ff6b6b 0, #ff6b6b 10px, transparent 10px, transparent 20px, #4ecdc4 20px, #4ecdc4 30px, transparent 30px, transparent 40px)`,
           }}>
      </div>
      
      <div className="flex items-center space-x-4">
        <div className="flex space-x-2">
          <PopArtDigit digit={hours[0]} prevDigit={prevHours[0]} />
          <PopArtDigit digit={hours[1]} prevDigit={prevHours[1]} />
        </div>
        
        <div className="relative text-4xl font-extrabold">
          <div className="text-black">:</div>
          <div className="absolute -top-1 -left-1 text-pink-500 opacity-50">:</div>
        </div>
        
        <div className="flex space-x-2">
          <PopArtDigit digit={minutes[0]} prevDigit={prevMinutes[0]} />
          <PopArtDigit digit={minutes[1]} prevDigit={prevMinutes[1]} />
        </div>
        
        <div className="relative text-4xl font-extrabold">
          <div className="text-black">:</div>
          <div className="absolute -top-1 -left-1 text-blue-500 opacity-50">:</div>
        </div>
        
        <div className="flex space-x-2">
          <PopArtDigit digit={seconds[0]} prevDigit={prevSeconds[0]} />
          <PopArtDigit digit={seconds[1]} prevDigit={prevSeconds[1]} />
        </div>
      </div>
      
      {/* Comic elements */}
      <div className="absolute top-2 right-2 px-3 py-1 bg-yellow-300 text-black font-bold transform rotate-12 border-2 border-black">
        WOW!
      </div>
      <div className="absolute bottom-2 left-2 px-3 py-1 bg-red-500 text-white font-bold transform -rotate-6 border-2 border-black">
        TICK!
      </div>
    </div>
  );
};

export default Clock_58;

// Add to globals.css:
/*
@keyframes pop-burst {
  0% { transform: scale(0) rotate(45deg); }
  90% { transform: scale(1.2) rotate(45deg); }
  100% { transform: scale(1) rotate(45deg); }
}
*/ 