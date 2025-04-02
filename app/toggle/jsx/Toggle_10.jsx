'use client';

import React, { useState, useEffect } from 'react';

const Toggle = ({ defaultChecked = false, onChange }) => {
  const [mounted, setMounted] = useState(false);
  const [isChecked, setIsChecked] = useState(defaultChecked);
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleToggle = () => {
    if (!isDragging) {
      const newValue = !isChecked;
      setIsChecked(newValue);
      onChange?.(newValue);
    }
  };

  const handleMouseDown = () => {
    setIsDragging(true);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    document.addEventListener('mouseup', handleMouseUp);
    return () => {
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  if (!mounted) return null;

  return (
    <div className="toggle-wrapper" data-checked={isChecked}>
      <input
        type="checkbox"
        id="magnetic-toggle"
        checked={isChecked}
        onChange={handleToggle}
        className="toggle-input"
      />
      <label 
        htmlFor="magnetic-toggle" 
        className="toggle-label"
        onMouseDown={handleMouseDown}
      >
        <div className="toggle-track">
          <div className="magnetic-points">
            <div className="point point-left"></div>
            <div className="point point-right"></div>
          </div>
          <div className="toggle-thumb" style={{ transform: `translateX(${isChecked ? '50px' : '0'})` }}>
            <div className="thumb-content" style={{ color: isChecked ? '#4ade80' : '#f87171' }}>
              <span className="icon">{isChecked ? '✓' : '✕'}</span>
            </div>
          </div>
        </div>
      </label>
      <style jsx>{`
        .toggle-input {
          display: none;
        }

        .toggle-label {
          position: relative;
          display: block;
          width: 100px;
          height: 50px;
          cursor: pointer;
        }

        .toggle-track {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: ${isChecked ? '#4ade80' : '#f87171'};
          border-radius: 25px;
          transition: background 0.3s ease;
        }

        .magnetic-points {
          position: absolute;
          width: 100%;
          height: 100%;
        }

        .point {
          position: absolute;
          width: 12px;
          height: 12px;
          background: rgba(255, 255, 255, 0.5);
          border-radius: 50%;
          top: 50%;
          transform: translateY(-50%);
          transition: transform 0.3s ease, opacity 0.3s ease;
        }

        .point-left {
          left: 10px;
          opacity: ${isChecked ? 0 : 1};
          transform: ${isChecked 
            ? 'translate(-5px, -50%) scale(0.5)' 
            : 'translateY(-50%) scale(1)'};
        }

        .point-right {
          right: 10px;
          opacity: ${isChecked ? 1 : 0};
          transform: ${isChecked 
            ? 'translateY(-50%) scale(1)' 
            : 'translate(5px, -50%) scale(0.5)'};
        }

        .toggle-thumb {
          position: absolute;
          top: 5px;
          left: 5px;
          width: 40px;
          height: 40px;
          background: white;
          border-radius: 50%;
          transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
        }

        .thumb-content {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 20px;
          transition: color 0.3s ease;
        }
      `}</style>
    </div>
  );
};

export default Toggle;
