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
        id="clock-toggle"
        checked={isChecked}
        onChange={handleToggle}
        className="hidden"
      />
      <label htmlFor="clock-toggle" className="relative w-20 h-20 cursor-pointer">
        <div className="absolute top-0 left-0 w-full h-full bg-gray-200 rounded-full shadow-lg flex items-center justify-center p-2 transition-all">
          <div className="relative w-full h-full bg-white rounded-full flex items-center justify-center transition-all">
            <div
              className={`absolute bottom-1/2 left-1/2 w-1 h-10 bg-black rounded transform origin-bottom transition-transform ${isChecked ? 'rotate-[360deg]' : 'rotate-0'}`}
            ></div>
            <div
              className={`absolute bottom-1/2 left-1/2 w-1 h-14 bg-gray-600 rounded transform origin-bottom transition-transform ${isChecked ? 'rotate-[540deg]' : 'rotate-0'}`}
            ></div>
            <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-black rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute top-1 left-1/2 transform -translate-x-1/2 text-xs font-bold text-gray-600">12</div>
            <div className="absolute right-1 top-1/2 transform -translate-y-1/2 text-xs font-bold text-gray-600">3</div>
            <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 text-xs font-bold text-gray-600">6</div>
            <div className="absolute left-1 top-1/2 transform -translate-y-1/2 text-xs font-bold text-gray-600">9</div>
          </div>
        </div>
      </label>
      <div className={`mt-2 text-sm font-bold ${isChecked ? 'text-green-500' : 'text-red-500'} transition-colors`}>
        {isChecked ? 'ON' : 'OFF'}
      </div>
    </div>
  );
};

export default Toggle;
