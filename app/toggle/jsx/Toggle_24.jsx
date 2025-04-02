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
        id="slot-toggle"
        checked={isChecked}
        onChange={handleToggle}
        className="toggle-input"
      />
      <label htmlFor="slot-toggle" className="toggle-label">
        <div className="slot-machine">
          <div className="display-window">
            {[...Array(3)].map((_, index) => (
              <div key={index} className="reel">
                <div className="symbol">❌</div>
                <div className="symbol">✓</div>
                <div className="symbol">❌</div>
              </div>
            ))}
          </div>
          <div className="lever">
            <div className="lever-base"></div>
            <div className="lever-handle" style={{ top: isChecked ? '70%' : '0' }}></div>
          </div>
          <div className="status-text" style={{ color: isChecked ? '#4ade80' : '#f87171' }}>
            {isChecked ? 'JACKPOT!' : 'TRY AGAIN'}
          </div>
        </div>
      </label>
    </div>
  );
};

export default Toggle;