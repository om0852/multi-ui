'use client';
import React, { useEffect, useState } from 'react';

const RippleNumber = ({ number, prevNumber }: { number: string; prevNumber: string }) => {
  const [isRippling, setIsRippling] = useState(false);

  useEffect(() => {
    if (number !== prevNumber) {
      setIsRippling(true);
      const timer = setTimeout(() => setIsRippling(false), 1000);
      return () => clearTimeout(timer);
    }
  }, [number, prevNumber]);

  return (
    <div className="relative w-16 h-24 bg-gradient-to-br from-sky-500 to-blue-600 rounded-lg overflow-hidden">
      {/* Main number */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-4xl font-bold text-white">
          {number}
        </div>
      </div>

      {/* Ripple effects */}
      {isRippling && (
        <>
          <div className="absolute inset-0 animate-[ripple_1s_ease-out]">
            <div className="absolute inset-0 rounded-full bg-white/30 scale-0 animate-[ripple_1s_ease-out]"></div>
          </div>
          <div className="absolute inset-0 animate-[ripple_1s_ease-out_0.2s]">
            <div className="absolute inset-0 rounded-full bg-white/20 scale-0 animate-[ripple_1s_ease-out]"></div>
          </div>
        </>
      )}

      {/* Wave effect */}
      <div className="absolute inset-x-0 bottom-0 h-full bg-gradient-to-t from-white/20 to-transparent 
                    transform transition-transform duration-500"
           style={{
             transform: `translateY(${isRippling ? '0%' : '100%'})`,
             transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)'
           }}>
      </div>

      {/* Shine overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-black/20"></div>
    </div>
  );
};

const Clock_35 = () => {
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
    <div className="bg-gradient-to-br from-sky-900 to-blue-900 p-8 rounded-xl shadow-2xl">
      <div className="flex items-center space-x-4">
        <div className="flex space-x-2">
          <RippleNumber number={hours[0]} prevNumber={prevHours[0]} />
          <RippleNumber number={hours[1]} prevNumber={prevHours[1]} />
        </div>
        
        <div className="text-4xl font-bold text-sky-400">:</div>
        
        <div className="flex space-x-2">
          <RippleNumber number={minutes[0]} prevNumber={prevMinutes[0]} />
          <RippleNumber number={minutes[1]} prevNumber={prevMinutes[1]} />
        </div>
        
        <div className="text-4xl font-bold text-sky-400">:</div>
        
        <div className="flex space-x-2">
          <RippleNumber number={seconds[0]} prevNumber={prevSeconds[0]} />
          <RippleNumber number={seconds[1]} prevNumber={prevSeconds[1]} />
        </div>
      </div>
    </div>
  );
};

export default Clock_35; 