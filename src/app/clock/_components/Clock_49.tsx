'use client';
import React, { useEffect, useState } from 'react';

const LCDSegment = ({ active, glitch = false }: { active: boolean; glitch?: boolean }) => (
  <div
    className={`transition-all duration-200 ${
      active ? 'bg-emerald-400' : 'bg-emerald-900'
    } ${glitch ? 'animate-flicker' : ''}`}
    style={{
      opacity: active ? 0.9 : 0.15,
      boxShadow: active
        ? '0 0 5px rgba(52, 211, 153, 0.5), 0 0 10px rgba(52, 211, 153, 0.3)'
        : 'none',
    }}
  />
);

const LCDDigit = ({ value }: { value: string }) => {
  const [glitchSegments, setGlitchSegments] = useState<number[]>([]);

  useEffect(() => {
    const glitchInterval = setInterval(() => {
      if (Math.random() < 0.1) {
        const numGlitches = Math.floor(Math.random() * 3);
        const segments = Array.from({ length: numGlitches }, () =>
          Math.floor(Math.random() * 7)
        );
        setGlitchSegments(segments);
        setTimeout(() => setGlitchSegments([]), 150);
      }
    }, 2000);

    return () => clearInterval(glitchInterval);
  }, []);

  const segments = {
    '0': [1, 1, 1, 1, 1, 1, 0],
    '1': [0, 1, 1, 0, 0, 0, 0],
    '2': [1, 1, 0, 1, 1, 0, 1],
    '3': [1, 1, 1, 1, 0, 0, 1],
    '4': [0, 1, 1, 0, 0, 1, 1],
    '5': [1, 0, 1, 1, 0, 1, 1],
    '6': [1, 0, 1, 1, 1, 1, 1],
    '7': [1, 1, 1, 0, 0, 0, 0],
    '8': [1, 1, 1, 1, 1, 1, 1],
    '9': [1, 1, 1, 1, 0, 1, 1],
  }[value] || [0, 0, 0, 0, 0, 0, 0];

  return (
    <div className="relative w-16 h-24 bg-black rounded-lg p-2">
      <div className="relative h-full">
        {/* Horizontal segments */}
        <div className="absolute top-0 left-2 right-2 h-2">
          <LCDSegment
            active={segments[0] === 1}
            glitch={glitchSegments.includes(0)}
          />
        </div>
        <div className="absolute top-1/2 left-2 right-2 h-2 -mt-1">
          <LCDSegment
            active={segments[6] === 1}
            glitch={glitchSegments.includes(6)}
          />
        </div>
        <div className="absolute bottom-0 left-2 right-2 h-2">
          <LCDSegment
            active={segments[3] === 1}
            glitch={glitchSegments.includes(3)}
          />
        </div>

        {/* Vertical segments */}
        <div className="absolute top-1 left-0 w-2 h-[calc(50%-2px)]">
          <LCDSegment
            active={segments[5] === 1}
            glitch={glitchSegments.includes(5)}
          />
        </div>
        <div className="absolute top-1 right-0 w-2 h-[calc(50%-2px)]">
          <LCDSegment
            active={segments[1] === 1}
            glitch={glitchSegments.includes(1)}
          />
        </div>
        <div className="absolute bottom-1 left-0 w-2 h-[calc(50%-2px)]">
          <LCDSegment
            active={segments[4] === 1}
            glitch={glitchSegments.includes(4)}
          />
        </div>
        <div className="absolute bottom-1 right-0 w-2 h-[calc(50%-2px)]">
          <LCDSegment
            active={segments[2] === 1}
            glitch={glitchSegments.includes(2)}
          />
        </div>
      </div>
    </div>
  );
};

const Clock_49 = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const hours = time.getHours().toString().padStart(2, '0');
  const minutes = time.getMinutes().toString().padStart(2, '0');
  const seconds = time.getSeconds().toString().padStart(2, '0');

  return (
    <div className="bg-zinc-900 p-8 rounded-xl shadow-2xl">
      <div className="flex items-center space-x-4">
        <div className="flex space-x-2">
          <LCDDigit value={hours[0]} />
          <LCDDigit value={hours[1]} />
        </div>

        <div className="flex flex-col space-y-2 justify-center h-24">
          <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
          <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
        </div>

        <div className="flex space-x-2">
          <LCDDigit value={minutes[0]} />
          <LCDDigit value={minutes[1]} />
        </div>

        <div className="flex flex-col space-y-2 justify-center h-24">
          <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
          <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
        </div>

        <div className="flex space-x-2">
          <LCDDigit value={seconds[0]} />
          <LCDDigit value={seconds[1]} />
        </div>
      </div>
    </div>
  );
};

export default Clock_49; 