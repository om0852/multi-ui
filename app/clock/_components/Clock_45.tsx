'use client';
import React, { useEffect, useState } from 'react';

const ShatterDigit = ({ digit, prevDigit }: { digit: string; prevDigit: string }) => {
  const [isShattered, setIsShattered] = useState(false);
  const shards = Array(12).fill(0);

  useEffect(() => {
    if (digit !== prevDigit) {
      setIsShattered(true);
      const timer = setTimeout(() => setIsShattered(false), 600);
      return () => clearTimeout(timer);
    }
  }, [digit, prevDigit]);


  return (
    <div className="relative w-16 h-24 bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg overflow-hidden">
      {/* Glass background */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5"></div>

      {/* Main digit */}
      <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
        isShattered ? 'opacity-0' : 'opacity-100'
      }`}>
        <div className="text-4xl font-bold text-slate-300">
          {digit}
        </div>
      </div>

      {/* Shattered pieces */}
      {isShattered && shards.map((_, index) => {
        const delay = (index / shards.length) * 0.2;
        
        return (
          <div
            key={index}
            className="absolute w-8 h-8 bg-gradient-to-br from-slate-300/30 to-white/10 backdrop-blur-sm"
            style={{
              left: '50%',
              top: '50%',
              clipPath: `polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)`,
              transform: `translate(-50%, -50%) rotate(${(index / shards.length) * 360}deg)`,
              animation: `shard-fly-${index % 4} 0.6s forwards`,
              animationDelay: `${delay}s`,
            }}
          >
            {/* Shine effect on shard */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent"></div>
          </div>
        );
      })}

      {/* New digit appearing */}
      <div className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${
        isShattered ? 'opacity-100 scale-110' : 'opacity-0 scale-90'
      }`}>
        <div className="text-4xl font-bold text-slate-300">
          {digit}
        </div>
      </div>

      {/* Glass reflections */}
      <div className="absolute inset-0">
        <div className="absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-white/10 to-transparent"></div>
        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/20 to-transparent"></div>
      </div>
    </div>
  );
};

const Clock_45 = () => {
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
    <div className="bg-gradient-to-br from-slate-900 to-slate-950 p-8 rounded-xl shadow-2xl">
      <div className="flex items-center space-x-4">
        <div className="flex space-x-2">
          <ShatterDigit digit={hours[0]} prevDigit={prevHours[0]} />
          <ShatterDigit digit={hours[1]} prevDigit={prevHours[1]} />
        </div>
        
        <div className="text-4xl font-bold text-slate-400">:</div>
        
        <div className="flex space-x-2">
          <ShatterDigit digit={minutes[0]} prevDigit={prevMinutes[0]} />
          <ShatterDigit digit={minutes[1]} prevDigit={prevMinutes[1]} />
        </div>
        
        <div className="text-4xl font-bold text-slate-400">:</div>
        
        <div className="flex space-x-2">
          <ShatterDigit digit={seconds[0]} prevDigit={prevSeconds[0]} />
          <ShatterDigit digit={seconds[1]} prevDigit={prevSeconds[1]} />
        </div>
      </div>
    </div>
  );
};

export default Clock_45;

// Add to globals.css:
/*
@keyframes shard-fly-0 {
  0% { transform: translate(-50%, -50%) rotate(0deg) scale(1); opacity: 1; }
  100% { transform: translate(-150%, -150%) rotate(360deg) scale(0); opacity: 0; }
}

@keyframes shard-fly-1 {
  0% { transform: translate(-50%, -50%) rotate(0deg) scale(1); opacity: 1; }
  100% { transform: translate(150%, -150%) rotate(360deg) scale(0); opacity: 0; }
}

@keyframes shard-fly-2 {
  0% { transform: translate(-50%, -50%) rotate(0deg) scale(1); opacity: 1; }
  100% { transform: translate(-150%, 150%) rotate(360deg) scale(0); opacity: 0; }
}

@keyframes shard-fly-3 {
  0% { transform: translate(-50%, -50%) rotate(0deg) scale(1); opacity: 1; }
  100% { transform: translate(150%, 150%) rotate(360deg) scale(0); opacity: 0; }
}
*/ 