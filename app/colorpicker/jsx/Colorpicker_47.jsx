'use client';
import React, { useState } from 'react';

const oceanAnimation = `
  @keyframes wave {
    0%, 100% { transform: translateY(0) rotate(0deg); }
    25% { transform: translateY(-3px) rotate(2deg); }
    75% { transform: translateY(3px) rotate(-2deg); }
  }

  @keyframes bubble {
    0% { transform: scale(1) translateY(0); }
    50% { transform: scale(1.1) translateY(-5px); }
    100% { transform: scale(1) translateY(0); }
  }
`;

const oceanThemes = {
  reef: {
    name: 'Coral Reef',
    depth: 'Shallow Waters',
    icon: '🐠',
    description: 'Vibrant colors of tropical reefs',
    colors: [
      { name: 'Coral Pink', value: '#ff7f50', creature: 'Coral polyps' },
      { name: 'Clownfish Orange', value: '#ff6b35', creature: 'Anemonefish' },
      { name: 'Sea Fan Purple', value: '#9370db', creature: 'Gorgonian coral' },
      { name: 'Parrotfish Blue', value: '#40e0d0', creature: 'Reef fish' },
      { name: 'Anemone Green', value: '#98ff98', creature: 'Sea anemone' },
    ],
  },
  deep: {
    name: 'Deep Ocean',
    depth: 'Abyssal Zone',
    icon: '🦑',
    description: 'Mysterious colors of the abyss',
    colors: [
      { name: 'Midnight Blue', value: '#191970', creature: 'Deep water' },
      { name: 'Bioluminescent', value: '#00ffff', creature: 'Lanternfish' },
      { name: 'Squid Ink', value: '#000080', creature: 'Giant squid' },
      { name: 'Ghost White', value: '#f8f8ff', creature: 'Deep creatures' },
      { name: 'Anglerfish Black', value: '#1a1a1a', creature: 'Anglerfish' },
    ],
  },
};

const ColorPicker = ({ onChange }) => {
  const [selectedZone, setSelectedZone] = useState('reef');
  const [selectedColor, setSelectedColor] = useState('#ff7f50');

  const handleColorSelect = (color) => {
    setSelectedColor(color);
    if (onChange) {
      onChange(color);
    }
  };

  return (
    <div style={{
      padding: '24px',
      background: '#1a1a1a',
      borderRadius: '16px',
      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
      width: '320px',
    }}>
      <style>{oceanAnimation}</style>

      <div style={{ marginBottom: '24px' }}>
        <label style={{
          display: 'block',
          marginBottom: '8px',
          color: '#e5e7eb',
          fontSize: '0.9rem',
        }}>
          Marine Zone
        </label>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '8px' }}>
          {Object.entries(oceanThemes).map(([key, { name, icon }]) => (
            <button
              key={key}
              onClick={() => setSelectedZone(key)}
              style={{
                padding: '12px 8px',
                background: selectedZone === key ? '#2d2d2d' : 'transparent',
                border: '2px solid',
                borderColor: selectedZone === key ? '#6366f1' : '#4b5563',
                borderRadius: '6px',
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '4px',
                animation: selectedZone === key ? 'wave 3s infinite ease-in-out' : 'none',
              }}
            >
              <span style={{ fontSize: '1.5rem' }}>{icon}</span>
              <span style={{ fontSize: '0.8rem', color: '#e5e7eb', fontWeight: selectedZone === key ? 500 : 400 }}>
                {name}
              </span>
            </button>
          ))}
        </div>
      </div>

      <div style={{ padding: '16px', background: '#2d2d2d', borderRadius: '8px', marginBottom: '24px' }}>
        <div style={{ fontSize: '0.8rem', color: '#9ca3af', marginBottom: '4px', fontFamily: 'monospace' }}>
          {oceanThemes[selectedZone].depth}
        </div>
        <div style={{ fontSize: '0.9rem', color: '#e5e7eb' }}>
          {oceanThemes[selectedZone].description}
        </div>
      </div>

      <div style={{ display: 'grid', gap: '12px', marginBottom: '24px' }}>
        {oceanThemes[selectedZone].colors.map((color) => (
          <button
            key={color.value}
            onClick={() => handleColorSelect(color.value)}
            style={{
              padding: '8px',
              background: '#2d2d2d',
              border: '2px solid',
              borderColor: selectedColor === color.value ? '#6366f1' : 'transparent',
              borderRadius: '8px',
              cursor: 'pointer',
              display: 'grid',
              gridTemplateColumns: '48px 1fr',
              gap: '12px',
            }}
          >
            <div style={{ width: '48px', height: '48px', background: color.value, borderRadius: '6px' }} />
            <div>
              <div style={{ fontSize: '0.9rem', color: '#e5e7eb', fontWeight: 500 }}>{color.name}</div>
              <div style={{ fontSize: '0.8rem', color: '#9ca3af' }}>{color.creature}</div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default ColorPicker;
