'use client';
import React, { useEffect, useState } from 'react';

const FlipCard = ({ digit }: { digit: string }) => {
  return (
    <div className="relative w-16 h-24 bg-gray-800 rounded-lg mx-1 overflow-hidden">
      {/* Top half (static) */}
      <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-gray-700 to-gray-800 flex items-end justify-center overflow-hidden rounded-t-lg">
        <span className="text-4xl font-bold text-white -mb-[22px]">{digit}</span>
      </div>
      
      {/* Bottom half (static) */}
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-b from-gray-800 to-gray-900 flex items-start justify-center overflow-hidden rounded-b-lg">
        <span className="text-4xl font-bold text-white -mt-[22px]">{digit}</span>
      </div>
      
      {/* Divider line */}
      <div className="absolute inset-x-0 top-1/2 h-[1px] bg-black/30 z-10"></div>
      
      {/* Flip effect shadow */}
      <div className="absolute inset-x-0 top-1/2 h-[2px] bg-black/20 z-10"></div>
    </div>
  );
};

const Clock_22 = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, [time]);

  const hours = time.getHours().toString().padStart(2, '0');
  const minutes = time.getMinutes().toString().padStart(2, '0');
  const seconds = time.getSeconds().toString().padStart(2, '0');

  
  return (
    <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-xl shadow-2xl">
      <div className="flex items-center">
        <FlipCard digit={hours[0]} />
        <FlipCard digit={hours[1]} />
        <div className="text-4xl font-bold text-white/80 mx-2">:</div>
        <FlipCard digit={minutes[0]} />
        <FlipCard digit={minutes[1]} />
        <div className="text-4xl font-bold text-white/80 mx-2">:</div>
        <FlipCard digit={seconds[0]} />
        <FlipCard digit={seconds[1]} />
      </div>
    </div>
  );
};

export default Clock_22; 