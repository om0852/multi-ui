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
    <div className="toggle-wrapper">
      <input
        type="checkbox"
        id="pinball-toggle"
        checked={isChecked}
        onChange={handleToggle}
        className="toggle-input"
      />
      <label htmlFor="pinball-toggle" className="toggle-label">
        <div className="pinball-machine">
          <div className="ball" style={{ top: isChecked ? '70%' : '10%', left: isChecked ? '80%' : '20%' }}></div>
          <div className="bumper left-bumper"></div>
          <div className="bumper right-bumper"></div>
          <div className="flipper left-flipper" style={{ transform: `rotate(${isChecked ? '45deg' : '0deg'})` }}>
            <div className="flipper-base"></div>
          </div>
          <div className="flipper right-flipper" style={{ transform: `rotate(${isChecked ? '-45deg' : '0deg'}) scaleX(-1)` }}>
            <div className="flipper-base"></div>
          </div>
          <div className="score-display" style={{ color: isChecked ? '#4ade80' : '#f87171' }}>
            {isChecked ? '100' : '000'}
          </div>
        </div>
      </label>
    </div>
  );
};

export default Toggle;
