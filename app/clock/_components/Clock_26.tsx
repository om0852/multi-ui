'use client';
import React, { useEffect, useState } from 'react';

const Clock_26 = () => {
  const [time, setTime] = useState(new Date());
  const [blink, setBlink] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    const blinkTimer = setInterval(() => {
      setBlink(prev => !prev);
    }, 500);

    return () => {
      clearInterval(timer);
      clearInterval(blinkTimer);
    };
  }, []);

  return (
    <div className="bg-black p-8 rounded-xl border-4 border-green-500 shadow-[0_0_20px_rgba(34,197,94,0.5)]">
      <div className="relative font-mono">
        {/* Scanline effect */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-green-500/5 to-transparent 
                      animate-[scanline_4s_linear_infinite]"></div>
        
        {/* Main display */}
        <div className="text-5xl text-green-500 tracking-widest flex items-center justify-center space-x-2">
          <span>{time.getHours().toString().padStart(2, '0')}</span>
          <span className={blink ? 'opacity-100' : 'opacity-0'}>:</span>
          <span>{time.getMinutes().toString().padStart(2, '0')}</span>
          <span className={blink ? 'opacity-100' : 'opacity-0'}>:</span>
          <span>{time.getSeconds().toString().padStart(2, '0')}</span>
        </div>

        {/* CRT effect overlay */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-t from-green-500/5 via-transparent to-green-500/5"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_50%,_rgba(0,0,0,0.3)_100%)]"></div>
        </div>
      </div>
    </div>
  );
};

export default Clock_26; 