'use client';
import React, { useState } from 'react';

const colorAnimation = `
  @keyframes rotate {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }

  @keyframes pulse {
    0% { transform: scale(1); }
    50% { transform: scale(1.05); }
    100% { transform: scale(1); }
  }
`;

const ColorPicker_11: React.FC<{ onChange?: (color: string) => void }> = ({ onChange }) => {
  const [selectedColor, setSelectedColor] = useState('#6366f1');
  const [isRotating, setIsRotating] = useState(false);

  const colors = [
    '#6366f1', '#ec4899', '#14b8a6', '#f59e0b', '#8b5cf6',
    '#ef4444', '#22c55e', '#3b82f6', '#f97316', '#06b6d4'
  ];

  const handleColorChange = (color: string) => {
    setSelectedColor(color);
    onChange?.(color);
    setIsRotating(true);
    setTimeout(() => setIsRotating(false), 1000);
  };

  return (
    <div style={{
      padding: '24px',
      background: '#ffffff',
      borderRadius: '16px',
      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
      width: 'fit-content',
    }}>
      <style>{colorAnimation}</style>

      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '20px',
      }}>
        {/* Selected color preview */}
        <div style={{
          width: '80px',
          height: '80px',
          borderRadius: '50%',
          background: selectedColor,
          boxShadow: `0 0 20px ${selectedColor}40`,
          transition: 'all 0.3s ease',
          animation: isRotating ? 'pulse 1s ease' : 'none',
        }} />

        {/* Color wheel */}
        <div style={{
          position: 'relative',
          width: '200px',
          height: '200px',
          animation: isRotating ? 'rotate 1s ease' : 'none',
        }}>
          {colors.map((color, index) => {
            const angle = (index * 360) / colors.length;
            const radius = 80;
            const x = radius * Math.cos((angle * Math.PI) / 180);
            const y = radius * Math.sin((angle * Math.PI) / 180);

            return (
              <button
                key={color}
                onClick={() => handleColorChange(color)}
                style={{
                  position: 'absolute',
                  left: '50%',
                  top: '50%',
                  transform: `translate(-50%, -50%) translate(${x}px, ${y}px)`,
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  background: color,
                  border: selectedColor === color ? '3px solid white' : 'none',
                  boxShadow: selectedColor === color 
                    ? `0 0 15px ${color}80, 0 0 0 3px ${color}`
                    : `0 4px 10px ${color}40`,
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                }}
              />
            );
          })}
        </div>

        {/* Color code */}
        <div style={{
          fontSize: '1rem',
          color: '#4b5563',
          fontFamily: 'monospace',
          padding: '8px 16px',
          background: '#f3f4f6',
          borderRadius: '8px',
          transition: 'all 0.3s ease',
        }}>
          {selectedColor}
        </div>
      </div>
    </div>
  );
};

export default ColorPicker_11; 