'use client';
import React, { useState } from 'react';

const paletteAnimation = `
  @keyframes scaleIn {
    from { transform: scale(0.9); opacity: 0; }
    to { transform: scale(1); opacity: 1; }
  }

  @keyframes ripple {
    0% { transform: scale(1); opacity: 0.4; }
    100% { transform: scale(2); opacity: 0; }
  }
`;

const ColorPicker_13: React.FC<{ onChange?: (color: string) => void }> = ({ onChange }) => {
  const [selectedColor, setSelectedColor] = useState('#2196f3');
  const [rippleColor, setRippleColor] = useState('');

  // Material Design color palettes
  const colorPalettes = {
    'Red': ['#ffebee', '#ffcdd2', '#ef9a9a', '#e57373', '#ef5350', '#f44336', '#e53935', '#d32f2f', '#c62828', '#b71c1c'],
    'Blue': ['#e3f2fd', '#bbdefb', '#90caf9', '#64b5f6', '#42a5f5', '#2196f3', '#1e88e5', '#1976d2', '#1565c0', '#0d47a1'],
    'Green': ['#e8f5e9', '#c8e6c9', '#a5d6a7', '#81c784', '#66bb6a', '#4caf50', '#43a047', '#388e3c', '#2e7d32', '#1b5e20'],
    'Purple': ['#f3e5f5', '#e1bee7', '#ce93d8', '#ba68c8', '#ab47bc', '#9c27b0', '#8e24aa', '#7b1fa2', '#6a1b9a', '#4a148c'],
    'Orange': ['#fff3e0', '#ffe0b2', '#ffcc80', '#ffb74d', '#ffa726', '#ff9800', '#fb8c00', '#f57c00', '#ef6c00', '#e65100'],
  };

  const handleColorSelect = (color: string) => {
    setSelectedColor(color);
    setRippleColor(color);
    onChange?.(color);
    setTimeout(() => setRippleColor(''), 500);
  };

  return (
    <div style={{
      padding: '24px',
      background: '#ffffff',
      borderRadius: '16px',
      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
      width: '320px',
      animation: 'scaleIn 0.3s ease-out',
    }}>
      <style>{paletteAnimation}</style>

      {/* Selected color preview */}
      <div style={{
        height: '80px',
        borderRadius: '12px',
        background: selectedColor,
        marginBottom: '20px',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {rippleColor && (
          <div style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            width: '20px',
            height: '20px',
            background: rippleColor,
            borderRadius: '50%',
            transform: 'translate(-50%, -50%)',
            animation: 'ripple 0.5s ease-out',
          }} />
        )}
      </div>

      {/* Color palettes */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
      }}>
        {Object.entries(colorPalettes).map(([name, colors]) => (
          <div key={name}>
            <h3 style={{
              margin: '0 0 8px 0',
              fontSize: '0.9rem',
              color: '#4b5563',
              fontWeight: 500,
            }}>
              {name}
            </h3>
            <div style={{
              display: 'flex',
              gap: '8px',
              flexWrap: 'wrap',
            }}>
              {colors.map((color) => (
                <button
                  key={color}
                  onClick={() => handleColorSelect(color)}
                  style={{
                    width: '24px',
                    height: '24px',
                    borderRadius: '6px',
                    background: color,
                    border: selectedColor === color ? '2px solid #000' : '2px solid transparent',
                    cursor: 'pointer',
                    transition: 'transform 0.2s ease',
                    transform: selectedColor === color ? 'scale(1.1)' : 'scale(1)',
                  }}
                />
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Color code */}
      <div style={{
        marginTop: '20px',
        padding: '12px',
        background: '#f3f4f6',
        borderRadius: '8px',
        fontFamily: 'monospace',
        fontSize: '0.9rem',
        color: '#4b5563',
        textAlign: 'center',
        transition: 'all 0.3s ease',
      }}>
        {selectedColor}
      </div>
    </div>
  );
};

export default ColorPicker_13; 