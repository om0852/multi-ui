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
    <div className={`toggle-wrapper ${isChecked ? 'checked' : ''}`}>
      <input
        type="checkbox"
        id="pendulum-toggle"
        checked={isChecked}
        onChange={handleToggle}
        className="toggle-input"
      />
      <label htmlFor="pendulum-toggle" className="toggle-label">
        <div className="pendulum-box">
          <div className="pendulum">
            <div className="string"></div>
            <div className="weight">
              <div className="weight-shine"></div>
            </div>
          </div>
          <div className="scale-marks">
            <div className="mark left">OFF</div>
            <div className="mark center">|</div>
            <div className="mark right">ON</div>
          </div>
        </div>
      </label>
    </div>
  );
};

export default Toggle;