'use client';
import React, { useEffect, useState } from 'react';

const ParticleDigit = ({ digit, prevDigit }: { digit: string; prevDigit: string }) => {
  const [isExploding, setIsExploding] = useState(false);
  const particles = Array(20).fill(0);

  useEffect(() => {
    if (digit !== prevDigit) {
      setIsExploding(true);
      const timer = setTimeout(() => setIsExploding(false), 500);
      return () => clearTimeout(timer);
    }
  }, [digit, prevDigit]);

  return (
    <div className="relative w-16 h-24 bg-gradient-to-br from-lime-900 to-green-900 rounded-lg overflow-hidden">
      {/* Main digit */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div 
          className={`text-4xl font-bold text-lime-400 transition-all duration-500 ${
            isExploding ? 'scale-150 opacity-0' : 'scale-100 opacity-100'
          }`}
        >
          {prevDigit}
        </div>
        <div 
          className={`text-4xl font-bold text-lime-400 transition-all duration-500 ${
            isExploding ? 'scale-50 opacity-100' : 'scale-100 opacity-100'
          }`}
        >
          {digit}
        </div>
      </div>

      {/* Particles */}
      {isExploding && particles.map((_, i) => {
        const angle = (i / particles.length) * 360;
        const delay = (i / particles.length) * 0.2;
        return (
          <div
            key={i}
            className="absolute w-1 h-1 bg-lime-400 rounded-full"
            style={{
              left: '50%',
              top: '50%',
              transform: `translate(-50%, -50%)`,
              animation: `
                particle-fade 0.5s ease-out ${delay}s forwards,
                particle-move-${Math.floor(i % 4)} 0.5s ease-out ${delay}s forwards
              `,
            }}
          />
        );
      })}

      {/* Glow effect */}
      <div className={`absolute inset-0 bg-lime-400/20 transition-opacity duration-300 ${
        isExploding ? 'opacity-100' : 'opacity-0'
      }`}></div>

      {/* Shine overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none"></div>
    </div>
  );
};

const Clock_39 = () => {
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
    <div className="bg-gradient-to-br from-lime-950 to-green-950 p-8 rounded-xl shadow-2xl">
      <div className="flex items-center space-x-4">
        <div className="flex space-x-2">
          <ParticleDigit digit={hours[0]} prevDigit={prevHours[0]} />
          <ParticleDigit digit={hours[1]} prevDigit={prevHours[1]} />
        </div>
        
        <div className="text-4xl font-bold text-lime-500">:</div>
        
        <div className="flex space-x-2">
          <ParticleDigit digit={minutes[0]} prevDigit={prevMinutes[0]} />
          <ParticleDigit digit={minutes[1]} prevDigit={prevMinutes[1]} />
        </div>
        
        <div className="text-4xl font-bold text-lime-500">:</div>
        
        <div className="flex space-x-2">
          <ParticleDigit digit={seconds[0]} prevDigit={prevSeconds[0]} />
          <ParticleDigit digit={seconds[1]} prevDigit={prevSeconds[1]} />
        </div>
      </div>
    </div>
  );
};

export default Clock_39;

// Add to your globals.css:
/*
@keyframes particle-fade {
  0% { opacity: 1; }
  100% { opacity: 0; }
}

@keyframes particle-move-0 {
  0% { transform: translate(-50%, -50%) scale(1); }
  100% { transform: translate(-50%, -50%) translate(20px, -20px) scale(0); }
}

@keyframes particle-move-1 {
  0% { transform: translate(-50%, -50%) scale(1); }
  100% { transform: translate(-50%, -50%) translate(-20px, -20px) scale(0); }
}

@keyframes particle-move-2 {
  0% { transform: translate(-50%, -50%) scale(1); }
  100% { transform: translate(-50%, -50%) translate(-20px, 20px) scale(0); }
}

@keyframes particle-move-3 {
  0% { transform: translate(-50%, -50%) scale(1); }
  100% { transform: translate(-50%, -50%) translate(20px, 20px) scale(0); }
}
*/ 