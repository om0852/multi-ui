'use client';
import React, { useEffect, useState } from 'react';

const Clock_24 = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-gradient-to-b from-gray-700 to-gray-900 p-8 rounded-xl shadow-2xl border-4 border-gray-600">
      <div className="bg-gradient-to-b from-green-200/90 to-green-300/90 p-6 rounded-lg shadow-inner relative overflow-hidden">
        {/* LCD Screen texture */}
        <div className="absolute inset-0 bg-black opacity-[0.02]" 
             style={{
               backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.1) 2px, rgba(0,0,0,0.1) 4px)`
             }}>
        </div>
        
        <div className="relative">
          <div className="font-mono text-5xl text-green-900/90 tracking-widest">
            {time.toLocaleTimeString('en-US', {
              hour12: true,
              hour: '2-digit',
              minute: '2-digit',
              second: '2-digit'
            })}
          </div>
          <div className="mt-2 text-xs text-green-800/90 font-mono">
            {time.toLocaleDateString('en-US', {
              weekday: 'short',
              month: 'short',
              day: 'numeric'
            })}
          </div>
        </div>
      </div>
      
      {/* Control buttons */}
      <div className="mt-4 flex justify-center space-x-4">
        <div className="w-8 h-2 bg-gray-600/50 rounded-full hover:bg-gray-500/50 transition-colors"></div>
        <div className="w-8 h-2 bg-gray-600/50 rounded-full hover:bg-gray-500/50 transition-colors"></div>
        <div className="w-8 h-2 bg-gray-600/50 rounded-full hover:bg-gray-500/50 transition-colors"></div>
      </div>
    </div>
  );
};

export default Clock_24; 