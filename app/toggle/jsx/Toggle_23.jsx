"use client";

import React, { useState, useEffect } from 'react';

const Toggle = ({ defaultChecked = false, onChange }) => {
  const [mounted, setMounted] = useState(false);
  const [isChecked, setIsChecked] = useState(defaultChecked);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleToggle = () => {
    const newValue = !isChecked;
    setIsChecked(newValue);
    onChange?.(newValue);
  };

  if (!mounted) return null;

  return (
    <div className="flex flex-col items-center">
      <input
        type="checkbox"
        id="lock-toggle"
        checked={isChecked}
        onChange={handleToggle}
        className="hidden"
      />
      <label htmlFor="lock-toggle" className="relative w-24 h-24 cursor-pointer">
        <div className="relative w-full h-full bg-gray-800 rounded-lg shadow-lg flex flex-col items-center justify-center p-3">
          <div className="relative w-20 h-20 bg-gray-500 rounded-full flex items-center justify-center transition-transform" style={{ transform: `rotate(${isChecked ? 360 : 0}deg)` }}>
            {[...Array(10)].map((_, i) => (
              <div key={i} className="absolute w-5 h-5 text-white text-xs font-bold" style={{ transform: `rotate(${i * 36}deg) translateY(-40px)` }}>{i}</div>
            ))}
            <div className="absolute w-7 h-7 bg-gray-600 rounded-full"></div>
            <div className="absolute top-0 w-1 h-4 bg-red-500 rounded"></div>
          </div>
          <div className="mt-2 text-sm font-bold text-white">
            {isChecked ? 'UNLOCKED' : 'LOCKED'}
          </div>
        </div>
      </label>
    </div>
  );
};

export default Toggle;
