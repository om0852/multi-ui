'use client';
import React, { useState } from 'react';

const spaceAnimation = `
  @keyframes twinkle {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.5; }
  }

  @keyframes orbit {
    from { transform: rotate(0deg) translateX(3px) rotate(0deg); }
    to { transform: rotate(360deg) translateX(3px) rotate(-360deg); }
  }
`;

const ColorPicker_44 = ({ onChange }) => {
  const [selectedSpace, setSelectedSpace] = useState('nebula');
  const [selectedColor, setSelectedColor] = useState('#663399');

  const spaceThemes = {
    nebula: {
      name: 'Nebula',
      type: 'Deep Space',
      icon: '🌌',
      description: 'Colorful clouds of cosmic gas and dust',
      colors: [
        { name: 'Cosmic Purple', value: '#663399', feature: 'Ionized hydrogen' },
        { name: 'Stellar Pink', value: '#ff69b4', feature: 'Star formation' },
        { name: 'Nebula Blue', value: '#4169e1', feature: 'Oxygen clouds' },
        { name: 'Space Teal', value: '#008080', feature: 'Nitrogen bands' },
        { name: 'Dark Matter', value: '#1a1a1a', feature: 'Cosmic void' },
      ],
    },
    galaxy: {
      name: 'Galaxy',
      type: 'Star System',
      icon: '🌀',
      description: 'Spiral arms of distant galaxies',
      colors: [
        { name: 'Core Gold', value: '#ffd700', feature: 'Galactic center' },
        { name: 'Arm Blue', value: '#4b0082', feature: 'Spiral structure' },
        { name: 'Star White', value: '#f8f8ff', feature: 'Star clusters' },
        { name: 'Dust Lane', value: '#8b4513', feature: 'Dark matter' },
        { name: 'Space Black', value: '#000000', feature: 'Intergalactic void' },
      ],
    },
    planet: {
      name: 'Planets',
      type: 'Solar System',
      icon: '🪐',
      description: 'Colors of our cosmic neighbors',
      colors: [
        { name: 'Mars Red', value: '#b22222', feature: 'Red planet' },
        { name: 'Jupiter Band', value: '#cd853f', feature: 'Gas giant' },
        { name: 'Saturn Ring', value: '#deb887', feature: 'Ring system' },
        { name: 'Neptune Blue', value: '#00008b', feature: 'Ice giant' },
        { name: 'Venus Gold', value: '#daa520', feature: 'Morning star' },
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
      background: '#1a1a1a',
      borderRadius: '16px',
      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
      width: '320px',
    }}>
      <style>{spaceAnimation}</style>
      <div style={{ marginBottom: '24px' }}>
        <label style={{
          display: 'block',
          marginBottom: '8px',
          color: '#e5e7eb',
          fontSize: '0.9rem',
        }}>
          Cosmic Object
        </label>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '8px',
        }}>
          {Object.entries(spaceThemes).map(([key, { name, icon }]) => (
            <button
              key={key}
              onClick={() => setSelectedSpace(key)}
              style={{
                padding: '12px 8px',
                background: selectedSpace === key ? '#2d2d2d' : 'transparent',
                border: '2px solid',
                borderColor: selectedSpace === key ? '#6366f1' : '#4b5563',
                borderRadius: '6px',
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '4px',
              }}
            >
              <span style={{ fontSize: '1.5rem' }}>{icon}</span>
              <span style={{ fontSize: '0.8rem', color: '#e5e7eb' }}>{name}</span>
            </button>
          ))}
        </div>
      </div>
      <div>
        {spaceThemes[selectedSpace].colors.map((color) => (
          <button
            key={color.value}
            onClick={() => handleColorSelect(color.value)}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              padding: '8px',
              background: '#2d2d2d',
              border: '2px solid',
              borderColor: selectedColor === color.value ? '#6366f1' : 'transparent',
              borderRadius: '8px',
              cursor: 'pointer',
            }}
          >
            <div style={{ width: '48px', height: '48px', background: color.value, borderRadius: '6px' }} />
            <div>
              <div style={{ fontSize: '0.9rem', color: '#e5e7eb' }}>{color.name}</div>
              <div style={{ fontSize: '0.8rem', color: '#9ca3af' }}>{color.feature}</div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default ColorPicker_44;
