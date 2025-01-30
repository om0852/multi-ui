'use client';
import React, { useEffect, useState } from 'react';

const CircuitDigit = ({ value }: { value: string }) => {
  const [pulseIntensity, setPulseIntensity] = useState(1);

  useEffect(() => {
    const pulseInterval = setInterval(() => {
      setPulseIntensity(0.8 + Math.random() * 0.4);
    }, 100);

    return () => clearInterval(pulseInterval);
  }, []);

  return (
    <div className="relative w-16 h-24">
      {/* Circuit board background */}
      <div className="absolute inset-0 bg-black rounded-lg overflow-hidden">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `
              linear-gradient(90deg, transparent 50%, rgba(0, 255, 0, 0.1) 50%),
              linear-gradient(0deg, transparent 50%, rgba(0, 255, 0, 0.1) 50%)
            `,
            backgroundSize: '4px 4px',
          }}
        />

        {/* Circuit paths */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(45deg, transparent 40%, rgba(0, 255, 0, ${0.1 * pulseIntensity}) 40%, rgba(0, 255, 0, ${0.1 * pulseIntensity}) 60%, transparent 60%),
              linear-gradient(-45deg, transparent 40%, rgba(0, 255, 0, ${0.1 * pulseIntensity}) 40%, rgba(0, 255, 0, ${0.1 * pulseIntensity}) 60%, transparent 60%)
            `,
            backgroundSize: '16px 16px',
          }}
        />
      </div>

      {/* Main digit display */}
      <div
        className="absolute inset-0 flex items-center justify-center text-4xl font-bold transition-all duration-100"
        style={{
          color: `rgba(0, 255, 0, ${0.8 * pulseIntensity})`,
          textShadow: `
            0 0 5px rgba(0, 255, 0, ${0.5 * pulseIntensity}),
            0 0 10px rgba(0, 255, 0, ${0.3 * pulseIntensity}),
            0 0 15px rgba(0, 255, 0, ${0.2 * pulseIntensity})
          `,
        }}
      >
        {value}
      </div>

      {/* Circuit nodes */}
      {Array.from({ length: 6 }).map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 rounded-full transition-all duration-100"
          style={{
            background: `rgba(0, 255, 0, ${0.6 * pulseIntensity})`,
            boxShadow: `0 0 4px rgba(0, 255, 0, ${0.4 * pulseIntensity})`,
            left: `${(i % 2) * 90 + 5}%`,
            top: `${Math.floor(i / 2) * 40 + 10}%`,
          }}
        />
      ))}

      {/* Connection lines */}
      <div
        className="absolute inset-0 transition-opacity duration-100"
        style={{
          opacity: 0.3 * pulseIntensity,
          backgroundImage: `
            linear-gradient(90deg, transparent 48%, rgba(0, 255, 0, 0.5) 48%, rgba(0, 255, 0, 0.5) 52%, transparent 52%),
            linear-gradient(0deg, transparent 48%, rgba(0, 255, 0, 0.5) 48%, rgba(0, 255, 0, 0.5) 52%, transparent 52%)
          `,
          backgroundSize: '100% 33.33%, 33.33% 100%',
        }}
      />
    </div>
  );
};

const Clock_59 = () => {
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
    <div className="relative bg-black p-12 rounded-xl shadow-2xl overflow-hidden">
      {/* Circuit board background pattern */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(90deg, transparent 49%, rgba(0, 255, 0, 0.2) 49%, rgba(0, 255, 0, 0.2) 51%, transparent 51%),
            linear-gradient(0deg, transparent 49%, rgba(0, 255, 0, 0.2) 49%, rgba(0, 255, 0, 0.2) 51%, transparent 51%)
          `,
          backgroundSize: '40px 40px',
        }}
      />

      {/* Main display container */}
      <div className="relative flex items-center space-x-6">
        <div className="flex space-x-2">
          <CircuitDigit value={hours[0]} />
          <CircuitDigit value={hours[1]} />
        </div>

        <div className="flex flex-col space-y-4">
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"
               style={{ boxShadow: '0 0 8px #00ff00' }} />
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"
               style={{ boxShadow: '0 0 8px #00ff00' }} />
        </div>

        <div className="flex space-x-2">
          <CircuitDigit value={minutes[0]} />
          <CircuitDigit value={minutes[1]} />
        </div>

        <div className="flex flex-col space-y-4">
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"
               style={{ boxShadow: '0 0 8px #00ff00' }} />
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"
               style={{ boxShadow: '0 0 8px #00ff00' }} />
        </div>

        <div className="flex space-x-2">
          <CircuitDigit value={seconds[0]} />
          <CircuitDigit value={seconds[1]} />
        </div>
      </div>

      {/* Power lines effect */}
      <div
        className="absolute inset-x-0 h-1 top-0 opacity-50"
        style={{
          background: 'linear-gradient(90deg, transparent, #00ff00, transparent)',
          animation: 'powerLine 2s linear infinite',
        }}
      />
      <div
        className="absolute inset-x-0 h-1 bottom-0 opacity-50"
        style={{
          background: 'linear-gradient(90deg, transparent, #00ff00, transparent)',
          animation: 'powerLine 2s linear infinite reverse',
        }}
      />
    </div>
  );
};

export default Clock_59; 