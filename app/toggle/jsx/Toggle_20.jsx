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
        id="wave-toggle"
        checked={isChecked}
        onChange={handleToggle}
        className="toggle-input"
      />
      <label htmlFor="wave-toggle" className="toggle-label">
        <div className="wave-container">
          <div className="wave"></div>
          <div className="wave"></div>
          <div className="wave"></div>
          <div className="bubble bubble-1"></div>
          <div className="bubble bubble-2"></div>
          <div className="bubble bubble-3"></div>
          <div className="status-text">{isChecked ? 'ON' : 'OFF'}</div>
        </div>
      </label>
    </div>
  );
};

export default Toggle;
