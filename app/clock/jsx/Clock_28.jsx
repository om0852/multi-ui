'use client';
import React, { useEffect, useState } from 'react';

const Clock_28 = () => {
  const [time, setTime] = useState(new Date());
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    // Simulate HUD loading
    setTimeout(() => setLoading(false), 1000);

    return () => clearInterval(timer);
  }, []);

  if (loading) {
    return (
      <div className="bg-black/90 p-8 rounded-xl border border-blue-500/30">
        <div className="text-blue-500 text-2xl font-mono">INITIALIZING...</div>
      </div>
    );
  }

  return (
    <div className="bg-black/90 p-8 rounded-xl border border-blue-500/30">
      <div className="relative">
        {/* Top HUD elements */}
        <div className="absolute -top-2 left-0 right-0 h-1 bg-blue-500/20"></div>
        <div className="absolute -top-1 left-4 w-8 h-1 bg-blue-500"></div>
        
        {/* Main time display */}
        <div className="space-y-4 pt-4">
          <div className="flex items-center space-x-2">
            <div className="text-xs text-blue-500/70 font-mono">TIME_SYNC</div>
            <div className="h-0.5 flex-grow bg-blue-500/20">
              <div className="h-full w-full bg-blue-500/70 transition-all duration-1000"></div>
            </div>
          </div>
          
          <div className="text-5xl text-blue-500 font-mono tracking-wider flex items-baseline">
            <span className="text-sm text-blue-500/50 mr-2">[SYS]</span>
            {time.toLocaleTimeString('en-US', {
              hour12: false,
              hour: '2-digit',
              minute: '2-digit',
              second: '2-digit'
            })}
            <span className="text-sm text-blue-500/50 ml-2">UTC{(time.getTimezoneOffset() / -60) >= 0 ? '+' : ''}{time.getTimezoneOffset() / -60}</span>
          </div>
          
          <div className="text-sm text-blue-500/70 font-mono">
            {time.toLocaleDateString('en-US', {
              weekday: 'short',
              year: 'numeric',
              month: 'short',
              day: '2-digit'
            })}
          </div>
        </div>

        {/* Bottom HUD elements */}
        <div className="absolute -bottom-2 left-0 right-0 h-1 bg-blue-500/20"></div>
        <div className="absolute -bottom-1 right-4 w-8 h-1 bg-blue-500"></div>
      </div>
    </div>
  );
};

export default Clock_28; 