'use client';
import React, { useState } from 'react';

const seasonAnimation = `
  @keyframes celebrate {
    0% { transform: scale(1) rotate(0deg); }
    25% { transform: scale(1.1) rotate(-5deg); }
    75% { transform: scale(0.95) rotate(5deg); }
    100% { transform: scale(1) rotate(0deg); }
  }

  @keyframes festive {
    0% { opacity: 0.8; transform: translateY(0); }
    50% { opacity: 1; transform: translateY(-3px); }
    100% { opacity: 0.8; transform: translateY(0); }
  }
`;

const ColorPicker_50 = ({ onChange }) => {
  const [selectedSeason, setSelectedSeason] = useState('winter');
  const [selectedColor, setSelectedColor] = useState('#ff0000');

  const seasonThemes = {
    winter: {
      name: 'Winter',
      period: 'December-February',
      icon: '❄️',
      description: 'Festive holiday colors',
      colors: [
        { name: 'Christmas Red', value: '#ff0000', tradition: 'Santa Claus' },
        { name: 'Pine Green', value: '#2e8b57', tradition: 'Christmas tree' },
        { name: 'Snow White', value: '#fffafa', tradition: 'Winter snow' },
        { name: 'Gold Tinsel', value: '#ffd700', tradition: 'Decorations' },
        { name: 'Silver Bells', value: '#c0c0c0', tradition: 'Ornaments' },
      ],
    },
    spring: {
      name: 'Spring',
      period: 'March-May',
      icon: '🌸',
      description: 'Fresh renewal colors',
      colors: [
        { name: 'Easter Pink', value: '#ffb6c1', tradition: 'Easter eggs' },
        { name: 'Daffodil Yellow', value: '#ffff00', tradition: 'Spring flowers' },
        { name: 'New Leaf', value: '#98fb98', tradition: 'Fresh growth' },
        { name: 'Sky Blue', value: '#87ceeb', tradition: 'Clear skies' },
        { name: 'Lilac Purple', value: '#dda0dd', tradition: 'Spring blooms' },
      ],
    },
    summer: {
      name: 'Summer',
      period: 'June-August',
      icon: '☀️',
      description: 'Bright celebration colors',
      colors: [
        { name: 'Patriot Blue', value: '#002868', tradition: 'Independence Day' },
        { name: 'Firework Red', value: '#ff1744', tradition: 'Celebrations' },
        { name: 'Star White', value: '#f8f8ff', tradition: 'Summer stars' },
        { name: 'Beach Sand', value: '#f5deb3', tradition: 'Summer beach' },
        { name: 'Ocean Blue', value: '#00bfff', tradition: 'Vacation seas' },
      ],
    },
    autumn: {
      name: 'Autumn',
      period: 'September-November',
      icon: '🍁',
      description: 'Harvest celebration colors',
      colors: [
        { name: 'Pumpkin Orange', value: '#ff7518', tradition: 'Halloween' },
        { name: 'Turkey Brown', value: '#8b4513', tradition: 'Thanksgiving' },
        { name: 'Harvest Gold', value: '#daa520', tradition: 'Fall harvest' },
        { name: 'Maple Red', value: '#ff4500', tradition: 'Autumn leaves' },
        { name: 'Spice Brown', value: '#8b4513', tradition: 'Fall spices' },
      ],
    },
  };

  const handleColorSelect = (color) => {
    setSelectedColor(color);
    if (onChange) onChange(color);
  };

  return (
    <div style={{ padding: '24px', background: '#1a1a1a', borderRadius: '16px', width: '320px' }}>
      <style>{seasonAnimation}</style>

      <div style={{ marginBottom: '24px' }}>
        <label style={{ display: 'block', color: '#e5e7eb' }}>Season & Festival</label>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '8px' }}>
          {Object.entries(seasonThemes).map(([key, { name, icon }]) => (
            <button key={key} onClick={() => setSelectedSeason(key)}
              style={{
                padding: '12px 8px',
                background: selectedSeason === key ? '#2d2d2d' : 'transparent',
                border: `2px solid ${selectedSeason === key ? '#6366f1' : '#4b5563'}`,
                cursor: 'pointer',
                display: 'flex', flexDirection: 'column', alignItems: 'center',
              }}>
              <span style={{ fontSize: '1.5rem' }}>{icon}</span>
              <span style={{ fontSize: '0.8rem', color: '#e5e7eb' }}>{name}</span>
            </button>
          ))}
        </div>
      </div>

      <div style={{ padding: '16px', background: '#2d2d2d', borderRadius: '8px', marginBottom: '24px' }}>
        <div style={{ fontSize: '0.8rem', color: '#9ca3af' }}>{seasonThemes[selectedSeason].period}</div>
        <div style={{ fontSize: '0.9rem', color: '#e5e7eb' }}>{seasonThemes[selectedSeason].description}</div>
      </div>

      <div style={{ display: 'grid', gap: '12px' }}>
        {seasonThemes[selectedSeason].colors.map((color) => (
          <button key={color.value} onClick={() => handleColorSelect(color.value)}
            style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '8px', background: '#2d2d2d',
            border: `2px solid ${selectedColor === color.value ? '#6366f1' : 'transparent'}` }}>
            <div style={{ width: '48px', height: '48px', background: color.value, borderRadius: '6px' }} />
            <div>
              <div style={{ fontSize: '0.9rem', color: '#e5e7eb' }}>{color.name}</div>
              <div style={{ fontSize: '0.8rem', color: '#9ca3af' }}>{color.tradition}</div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default ColorPicker_50;
