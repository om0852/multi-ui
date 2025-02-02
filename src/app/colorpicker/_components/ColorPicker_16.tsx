'use client';
import React, { useState } from 'react';

const radialAnimation = `
  @keyframes expand {
    from { transform: scale(0.95); opacity: 0; }
    to { transform: scale(1); opacity: 1; }
  }

  @keyframes glow {
    0%, 100% { box-shadow: 0 0 20px rgba(0, 0, 0, 0.1); }
    50% { box-shadow: 0 0 30px rgba(0, 0, 0, 0.2); }
  }
`;

const ColorPicker_16: React.FC<{ onChange?: (color: string) => void }> = ({ onChange }) => {
  const [centerColor, setCenterColor] = useState('#ff6b6b');
  const [outerColor, setOuterColor] = useState('#4ecdc4');
  const [size, setSize] = useState(50);

  const handleCenterColorChange = (color: string) => {
    setCenterColor(color);
    onChange?.(color);
  };

  const handleOuterColorChange = (color: string) => {
    setOuterColor(color);
    onChange?.(color);
  };

  return (
    <div style={{
      padding: '24px',
      background: '#ffffff',
      borderRadius: '16px',
      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
      width: '300px',
      animation: 'expand 0.3s ease-out',
    }}>
      <style>{radialAnimation}</style>

      {/* Gradient preview */}
      <div style={{
        height: '200px',
        borderRadius: '12px',
        background: `radial-gradient(circle at center, ${centerColor} ${size}%, ${outerColor})`,
        marginBottom: '20px',
        animation: 'glow 3s infinite',
      }} />

      {/* Controls */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
      }}>
        {/* Center color */}
        <div>
          <label style={{
            display: 'block',
            marginBottom: '8px',
            color: '#4b5563',
            fontSize: '0.9rem',
          }}>
            Center Color
          </label>
          <div style={{
            display: 'flex',
            gap: '8px',
          }}>
            <input
              type="color"
              value={centerColor}
              onChange={(e) => handleCenterColorChange(e.target.value)}
              style={{
                width: '60px',
                height: '36px',
                padding: '0',
                border: '2px solid #e5e7eb',
                borderRadius: '6px',
                cursor: 'pointer',
              }}
            />
            <input
              type="text"
              value={centerColor}
              onChange={(e) => handleCenterColorChange(e.target.value)}
              style={{
                flex: 1,
                padding: '8px',
                border: '2px solid #e5e7eb',
                borderRadius: '6px',
                fontSize: '0.9rem',
                color: '#4b5563',
                fontFamily: 'monospace',
              }}
            />
          </div>
        </div>

        {/* Outer color */}
        <div>
          <label style={{
            display: 'block',
            marginBottom: '8px',
            color: '#4b5563',
            fontSize: '0.9rem',
          }}>
            Outer Color
          </label>
          <div style={{
            display: 'flex',
            gap: '8px',
          }}>
            <input
              type="color"
              value={outerColor}
              onChange={(e) => handleOuterColorChange(e.target.value)}
              style={{
                width: '60px',
                height: '36px',
                padding: '0',
                border: '2px solid #e5e7eb',
                borderRadius: '6px',
                cursor: 'pointer',
              }}
            />
            <input
              type="text"
              value={outerColor}
              onChange={(e) => handleOuterColorChange(e.target.value)}
              style={{
                flex: 1,
                padding: '8px',
                border: '2px solid #e5e7eb',
                borderRadius: '6px',
                fontSize: '0.9rem',
                color: '#4b5563',
                fontFamily: 'monospace',
              }}
            />
          </div>
        </div>

        {/* Size control */}
        <div>
          <label style={{
            display: 'block',
            marginBottom: '8px',
            color: '#4b5563',
            fontSize: '0.9rem',
          }}>
            Center Size: {size}%
          </label>
          <input
            type="range"
            min="0"
            max="100"
            value={size}
            onChange={(e) => setSize(Number(e.target.value))}
            style={{
              width: '100%',
              height: '6px',
              borderRadius: '3px',
              background: `linear-gradient(to right, ${centerColor}, ${outerColor})`,
              appearance: 'none',
              cursor: 'pointer',
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default ColorPicker_16; 