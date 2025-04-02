'use client';
import React, { useState } from 'react';

const mythAnimation = `
  @keyframes magicGlow {
    0% { filter: drop-shadow(0 0 2px rgba(255, 255, 255, 0.5)); }
    50% { filter: drop-shadow(0 0 8px rgba(255, 255, 255, 0.8)); }
    100% { filter: drop-shadow(0 0 2px rgba(255, 255, 255, 0.5)); }
  }

  @keyframes mysticalFloat {
    0% { transform: translateY(0); }
    50% { transform: translateY(-5px); }
    100% { transform: translateY(0); }
  }
`;

const mythThemes = {
  dragons: {
    name: 'Dragon Lore',
    origin: 'Various Cultures',
    icon: '🐉',
    description: 'Majestic colors of mythical dragons',
    colors: [
      { name: 'Dragon Blood', value: '#8b0000', symbolism: 'Power and strength' },
      { name: 'Scale Gold', value: '#ffd700', symbolism: 'Treasure and wealth' },
      { name: 'Smoke Gray', value: '#708090', symbolism: "Dragon's breath" },
      { name: 'Wing Black', value: '#2f4f4f', symbolism: 'Night flight' },
      { name: 'Flame Orange', value: '#ff4500', symbolism: 'Dragon fire' },
    ],
  },
  unicorns: {
    name: 'Unicorn Magic',
    origin: 'European',
    icon: '🦄',
    description: 'Enchanted colors of mystical unicorns',
    colors: [
      { name: 'Horn Pearl', value: '#e6e6fa', symbolism: 'Pure magic' },
      { name: 'Mane Silver', value: '#c0c0c0', symbolism: 'Moonlight grace' },
      { name: 'Rainbow Prism', value: '#ff69b4', symbolism: 'Magical aura' },
      { name: 'Cloud White', value: '#f0ffff', symbolism: 'Divine presence' },
      { name: 'Star Dust', value: '#ffd700', symbolism: 'Celestial power' },
    ],
  },
};

const ColorPicker_36 = ({ onChange }) => {
  const [selectedMyth, setSelectedMyth] = useState('dragons');
  const [selectedColor, setSelectedColor] = useState('#8b0000');

  const handleColorSelect = (color) => {
    setSelectedColor(color);
    if (onChange) onChange(color);
  };

  return (
    <div style={{ padding: '24px', background: '#1a1a1a', borderRadius: '16px', width: '320px' }}>
      <style>{mythAnimation}</style>
      <div style={{ marginBottom: '24px' }}>
        <label style={{ color: '#e5e7eb', fontSize: '0.9rem' }}>Mythical Theme</label>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '8px' }}>
          {Object.entries(mythThemes).map(([key, { name, icon }]) => (
            <button key={key} onClick={() => setSelectedMyth(key)}
              style={{ background: selectedMyth === key ? '#2d2d2d' : 'transparent' }}>
              <span style={{ fontSize: '1.5rem' }}>{icon}</span>
              <span style={{ color: '#e5e7eb' }}>{name}</span>
            </button>
          ))}
        </div>
      </div>
      <div>
        <div style={{ color: '#9ca3af' }}>{mythThemes[selectedMyth].origin}</div>
        <div style={{ color: '#e5e7eb' }}>{mythThemes[selectedMyth].description}</div>
      </div>
      <div>
        {mythThemes[selectedMyth].colors.map((color) => (
          <button key={color.value} onClick={() => handleColorSelect(color.value)}
            style={{ background: selectedColor === color.value ? '#6366f1' : 'transparent' }}>
            <div style={{ background: color.value, width: '48px', height: '48px' }} />
            <div>
              <div style={{ color: '#e5e7eb' }}>{color.name}</div>
              <div style={{ color: '#9ca3af' }}>{color.symbolism}</div>
            </div>
          </button>
        ))}
      </div>
      <div>
        <div style={{ background: selectedColor, width: '40px', height: '40px' }} />
        <input type="text" value={selectedColor} onChange={(e) => handleColorSelect(e.target.value)}
          style={{ background: '#1f2937', color: '#e5e7eb' }} />
      </div>
    </div>
  );
};

export default ColorPicker_36;