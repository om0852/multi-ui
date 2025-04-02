'use client';
import React, { useState } from 'react';

const sportsAnimation = `
  @keyframes bounce {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-5px); }
  }

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

const ColorPicker_54 = ({ onChange }) => {
  const [selectedSport, setSelectedSport] = useState('basketball');
  const [selectedColor, setSelectedColor] = useState('#ff6b00');

  const sportsThemes = {
    basketball: {
      name: 'Basketball',
      category: 'Court Sports',
      icon: '🏀',
      description: 'Classic basketball colors',
      colors: [
        { name: 'Ball Orange', value: '#ff6b00', equipment: 'Basketball' },
        { name: 'Court Brown', value: '#8b4513', equipment: 'Hardwood floor' },
        { name: 'Jersey White', value: '#ffffff', equipment: 'Home jersey' },
        { name: 'Line Black', value: '#000000', equipment: 'Court lines' },
        { name: 'Net Gray', value: '#c0c0c0', equipment: 'Basketball net' },
      ],
    },
    soccer: {
      name: 'Soccer',
      category: 'Field Sports',
      icon: '⚽',
      description: 'Soccer field and equipment',
      colors: [
        { name: 'Grass Green', value: '#228b22', equipment: 'Field turf' },
        { name: 'Ball White', value: '#f5f5f5', equipment: 'Soccer ball' },
        { name: 'Goal Silver', value: '#c0c0c0', equipment: 'Goal posts' },
        { name: 'Line White', value: '#ffffff', equipment: 'Field lines' },
        { name: 'Cleat Black', value: '#2f2f2f', equipment: 'Soccer cleats' },
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
      <style>{sportsAnimation}</style>

      <div style={{ marginBottom: '24px' }}>
        <label style={{ display: 'block', marginBottom: '8px', color: '#e5e7eb', fontSize: '0.9rem' }}>
          Sport Type
        </label>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '8px' }}>
          {Object.entries(sportsThemes).map(([key, { name, icon }]) => (
            <button
              key={key}
              onClick={() => setSelectedSport(key)}
              style={{
                padding: '12px 8px',
                background: selectedSport === key ? '#2d2d2d' : 'transparent',
                border: '2px solid',
                borderColor: selectedSport === key ? '#6366f1' : '#4b5563',
                borderRadius: '6px',
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '4px',
                animation: selectedSport === key ? 'bounce 1s infinite ease-in-out' : 'none',
              }}
            >
              <span style={{ fontSize: '1.5rem' }}>{icon}</span>
              <span style={{ fontSize: '0.8rem', color: '#e5e7eb', fontWeight: selectedSport === key ? 500 : 400 }}>
                {name}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ColorPicker_54;
