'use client';
import React, { useEffect, useState } from 'react';

const GlitchDigit = ({ digit, prevDigit }: { digit: string; prevDigit: string }) => {
  const [isGlitching, setIsGlitching] = useState(false);
  const [glitchText, setGlitchText] = useState(digit);

  useEffect(() => {
    if (digit !== prevDigit) {
      setIsGlitching(true);
      
      // Random character animation
      let iterations = 0;
      const interval = setInterval(() => {
        setGlitchText(Math.floor(Math.random() * 10).toString());
        iterations++;
        
        if (iterations > 5) {
          clearInterval(interval);
          setGlitchText(digit);
          setIsGlitching(false);
        }
      }, 50);

      return () => clearInterval(interval);
    }
  }, [digit, prevDigit]);

  return (
    <div className="relative w-16 h-24 bg-black rounded-lg overflow-hidden">
      {/* Main digit */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div 
          className={`text-4xl font-bold font-mono text-cyan-500 transition-all duration-100 ${
            isGlitching ? 'blur-[2px]' : ''
          }`}
          style={{
            textShadow: isGlitching 
              ? '2px 0 #f0f, -2px 0 #0ff, 0 0 20px rgba(0, 255, 255, 0.5)'
              : '0 0 10px rgba(0, 255, 255, 0.3)'
          }}
        >
          {glitchText}
        </div>
      </div>

      {/* Glitch effects */}
      {isGlitching && (
        <>
          {/* Red offset */}
          <div 
            className="absolute inset-0 flex items-center justify-center text-4xl font-bold font-mono text-red-500/50"
            style={{ 
              transform: `translate(${Math.random() * 4 - 2}px, ${Math.random() * 4 - 2}px)`,
              clipPath: 'inset(0 0 50% 0)'
            }}
          >
            {glitchText}
          </div>

          {/* Blue offset */}
          <div 
            className="absolute inset-0 flex items-center justify-center text-4xl font-bold font-mono text-blue-500/50"
            style={{ 
              transform: `translate(${Math.random() * 4 - 2}px, ${Math.random() * 4 - 2}px)`,
              clipPath: 'inset(50% 0 0 0)'
            }}
          >
            {glitchText}
          </div>

          {/* Scan lines */}
          <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,_rgba(0,0,0,0.5)_50%)] bg-[length:100%_4px]"></div>
        </>
      )}

      {/* Static noise overlay */}
      <div 
        className="absolute inset-0 mix-blend-overlay opacity-10"
        style={{
          backgroundImage: 'url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyBAMAAADsEZWCAAAAElBMVEUAAAD8/vz08vT09PT8+vz///+Tb6O2AAAABnRSTlMA2AhYGAgYfXUyAAAASUlEQVQ4y2NgQAX8DIxg6sTAwMgPYjCBWfwMjGAGExDjn4QBzPBnYAIzGP4BMQMTmMEApv4zQhj/GBj+wRn/EIwBDEjGQDIGABxGDr3G1RPqAAAAAElFTkSuQmCC")',
          backgroundSize: '50px'
        }}
      ></div>
    </div>
  );
};

const Clock_41 = () => {
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
    <div className="bg-gray-900 p-8 rounded-xl shadow-2xl">
      <div className="flex items-center space-x-4">
        <div className="flex space-x-2">
          <GlitchDigit digit={hours[0]} prevDigit={prevHours[0]} />
          <GlitchDigit digit={hours[1]} prevDigit={prevHours[1]} />
        </div>
        
        <div className="text-4xl font-bold text-cyan-500">:</div>
        
        <div className="flex space-x-2">
          <GlitchDigit digit={minutes[0]} prevDigit={prevMinutes[0]} />
          <GlitchDigit digit={minutes[1]} prevDigit={prevMinutes[1]} />
        </div>
        
        <div className="text-4xl font-bold text-cyan-500">:</div>
        
        <div className="flex space-x-2">
          <GlitchDigit digit={seconds[0]} prevDigit={prevSeconds[0]} />
          <GlitchDigit digit={seconds[1]} prevDigit={prevSeconds[1]} />
        </div>
      </div>
    </div>
  );
};

export default Clock_41; 