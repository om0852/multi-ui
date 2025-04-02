"use client";

import React, { useState, useEffect } from 'react';
import './Toggle.css'; // Ensure you create this CSS file

const Toggle = ({ defaultChecked = false, onChange }) => {
  const [mounted, setMounted] = useState(false);
  const [isChecked, setIsChecked] = useState(defaultChecked);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleToggle = () => {
    const newValue = !isChecked;
    setIsChecked(newValue);
    if (onChange) {
      onChange(newValue);
    }
  };

  if (!mounted) return null;

  return (
    <div className="toggle-wrapper">
      <input
        type="checkbox"
        id="card-toggle"
        checked={isChecked}
        onChange={handleToggle}
        className="toggle-input"
      />
      <label htmlFor="card-toggle" className="toggle-label">
        <div className="slider">
          <div className="card">
            <div className="symbol">{isChecked ? '✓' : '✕'}</div>
          </div>
        </div>
      </label>
    </div>
  );
};

export default Toggle;
