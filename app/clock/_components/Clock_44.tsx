'use client';
import React, { useEffect, useState } from 'react';

const PixelDigit = ({ digit, prevDigit }: { digit: string; prevDigit: string }) => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [pixels, setPixels] = useState<Array<{ x: number; y: number; delay: number }>>([]);

  useEffect(() => {
    if (digit !== prevDigit) {
      setIsAnimating(true);
      
      // Generate random pixels
      const newPixels = Array.from({ length: 20 }, () => ({
        x: Math.floor(Math.random() * 16),
        y: Math.floor(Math.random() * 24),
        delay: Math.random() * 0.5
      }));
      setPixels(newPixels);

      const timer = setTimeout(() => setIsAnimating(false), 1000);
      return () => clearTimeout(timer);
    }
  }, [digit, prevDigit]);

  return (
    <div className="relative w-16 h-24 bg-gradient-to-br from-teal-900 to-emerald-900 rounded-lg overflow-hidden">
      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(0,0,0,0.1)1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.1)1px,transparent_1px)] bg-[length:4px_4px]"></div>

      {/* Main digit */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-4xl font-bold text-teal-400">
          {digit}
        </div>
      </div>

      {/* Falling pixels */}
      {isAnimating && pixels.map((pixel, index) => (
        <div
          key={index}
          className="absolute w-1 h-1 bg-teal-400 rounded-sm animate-[pixel-fall_1s_linear_forwards]"
          style={{
            left: `${pixel.x * 6.25}%`,
            top: `${pixel.y * 4.16}%`,
            animationDelay: `${pixel.delay}s`,
            opacity: 0
          }}
        />
      ))}

      {/* Rising pixels */}
      {isAnimating && pixels.map((pixel, index) => (
        <div
          key={`rise-${index}`}
          className="absolute w-1 h-1 bg-teal-400 rounded-sm animate-[pixel-rise_1s_linear_forwards]"
          style={{
            left: `${pixel.x * 6.25}%`,
            bottom: `${pixel.y * 4.16}%`,
            animationDelay: `${pixel.delay}s`,
            opacity: 0
          }}
        />
      ))}

      {/* Glow overlay */}
      <div className={`absolute inset-0 bg-teal-400/10 transition-opacity duration-300 ${
        isAnimating ? 'opacity-100' : 'opacity-0'
      }`}></div>

      {/* Scan line */}
      <div 
        className="absolute inset-x-0 h-[2px] bg-teal-400/20 blur-[1px] transition-transform duration-1000"
        style={{
          transform: `translateY(${isAnimating ? '100%' : '0%'})`
        }}
      ></div>
    </div>
  );
};

const Clock_44 = () => {
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
    <div className="bg-gradient-to-br from-teal-950 to-emerald-950 p-8 rounded-xl shadow-2xl">
      <div className="flex items-center space-x-4">
        <div className="flex space-x-2">
          <PixelDigit digit={hours[0]} prevDigit={prevHours[0]} />
          <PixelDigit digit={hours[1]} prevDigit={prevHours[1]} />
        </div>
        
        <div className="text-4xl font-bold text-teal-500">:</div>
        
        <div className="flex space-x-2">
          <PixelDigit digit={minutes[0]} prevDigit={prevMinutes[0]} />
          <PixelDigit digit={minutes[1]} prevDigit={prevMinutes[1]} />
        </div>
        
        <div className="text-4xl font-bold text-teal-500">:</div>
        
        <div className="flex space-x-2">
          <PixelDigit digit={seconds[0]} prevDigit={prevSeconds[0]} />
          <PixelDigit digit={seconds[1]} prevDigit={prevSeconds[1]} />
        </div>
      </div>
    </div>
  );
};

export default Clock_44;

// Add to globals.css:
/*
@keyframes pixel-fall {
  0% {
    transform: translateY(-100%);
    opacity: 1;
  }
  100% {
    transform: translateY(100%);
    opacity: 0;
  }
}

@keyframes pixel-rise {
  0% {
    transform: translateY(100%);
    opacity: 1;
  }
  100% {
    transform: translateY(-100%);
    opacity: 0;
  }
}
*/ 