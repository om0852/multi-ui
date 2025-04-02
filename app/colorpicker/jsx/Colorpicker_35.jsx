'use client';
import React, { useState } from 'react';

const cosmicAnimation = `
  @keyframes twinkle {
    0% { opacity: 1; }
    50% { opacity: 0.5; }
    100% { opacity: 1; }
  }

  @keyframes orbit {
    from { transform: rotate(0deg) translateX(2px) rotate(0deg); }
    to { transform: rotate(360deg) translateX(2px) rotate(-360deg); }
  }
`;

const ColorPicker_35 = ({ onChange }) => {
  const [selectedCelestial, setSelectedCelestial] = useState('nebula');
  const [selectedColor, setSelectedColor] = useState('#4b0082');

  const celestialThemes = {
    nebula: {
      name: 'Nebula Dreams',
      type: 'Gas Cloud',
      icon: '🌌',
      description: 'Vibrant colors of stellar nurseries and gas clouds',
      colors: [
        { name: 'Cosmic Purple', value: '#4b0082', feature: 'Ionized gas' },
        { name: 'Stellar Pink', value: '#ff69b4', feature: 'Hydrogen alpha' },
        { name: 'Nova Blue', value: '#4169e1', feature: 'Oxygen emission' },
        { name: 'Space Dust', value: '#deb887', feature: 'Cosmic dust' },
        { name: 'Nebula Green', value: '#32cd32', feature: 'Nitrogen bands' },
      ],
    },
    galaxy: {
      name: 'Galaxy Spiral',
      type: 'Galaxy',
      icon: '🌀',
      description: 'Colors from spiral galaxy structures',
      colors: [
        { name: 'Core Gold', value: '#ffd700', feature: 'Galactic core' },
        { name: 'Arm Blue', value: '#4682b4', feature: 'Spiral arms' },
        { name: 'Star White', value: '#f8f8ff', feature: 'Star clusters' },
        { name: 'Dark Matter', value: '#1a1a1a', feature: 'Space void' },
        { name: 'Red Shift', value: '#dc143c', feature: 'Distant stars' },
      ],
    },
  };

  const handleColorSelect = (color) => {
    setSelectedColor(color);
    if (onChange) onChange(color);
  };

  return (
    <div style={{
      padding: '24px',
      background: '#000000',
      borderRadius: '16px',
      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
      width: '320px',
    }}>
      <style>{cosmicAnimation}</style>
      <div style={{
        marginBottom: '24px',
      }}>
        <label style={{
          display: 'block',
          marginBottom: '8px',
          color: '#e5e7eb',
          fontSize: '0.9rem',
        }}>
          Cosmic Phenomenon
        </label>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '8px',
        }}>
          {Object.entries(celestialThemes).map(([key, { name, icon }]) => (
            <button
              key={key}
              onClick={() => setSelectedCelestial(key)}
              style={{
                padding: '12px 8px',
                background: selectedCelestial === key ? '#1f2937' : 'transparent',
                border: '2px solid',
                borderColor: selectedCelestial === key ? '#6366f1' : '#374151',
                borderRadius: '6px',
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '4px',
              }}
            >
              <span style={{
                fontSize: '1.5rem',
                animation: selectedCelestial === key ? 'orbit 4s linear infinite' : 'none',
              }}>
                {icon}
              </span>
              <span style={{
                fontSize: '0.8rem',
                color: '#e5e7eb',
                fontWeight: selectedCelestial === key ? 500 : 400,
              }}>
                {name}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ColorPicker_35;
