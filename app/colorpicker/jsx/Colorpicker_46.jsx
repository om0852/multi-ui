'use client';
import React, { useState } from 'react';

const natureAnimation = `
  @keyframes sway {
    0%, 100% { transform: rotate(-5deg); }
    50% { transform: rotate(5deg); }
  }

  @keyframes grow {
    0% { transform: scale(1); }
    50% { transform: scale(1.05); }
    100% { transform: scale(1); }
  }
`;

const ColorPicker_46 = ({ onChange }) => {
  const [selectedNature, setSelectedNature] = useState('forest');
  const [selectedColor, setSelectedColor] = useState('#2e8b57');

  const natureThemes = {
    forest: {
      name: 'Forest',
      type: 'Woodland',
      icon: '🌲',
      description: 'Deep colors of ancient forests',
      colors: [
        { name: 'Pine Green', value: '#2e8b57', plant: 'Evergreen trees' },
        { name: 'Moss Green', value: '#8fbc8f', plant: 'Forest floor' },
        { name: 'Bark Brown', value: '#8b4513', plant: 'Tree trunks' },
        { name: 'Fern Green', value: '#4f7942', plant: 'Undergrowth' },
        { name: 'Mushroom Gray', value: '#c4aead', plant: 'Forest fungi' },
      ],
    },
    meadow: {
      name: 'Meadow',
      type: 'Grassland',
      icon: '🌸',
      description: 'Vibrant colors of wildflower fields',
      colors: [
        { name: 'Lavender', value: '#e6e6fa', plant: 'Wild herbs' },
        { name: 'Daisy White', value: '#fffafa', plant: 'Field flowers' },
        { name: 'Grass Green', value: '#90ee90', plant: 'Summer grass' },
        { name: 'Poppy Red', value: '#ff4040', plant: 'Wild poppies' },
        { name: 'Buttercup', value: '#ffef00', plant: 'Spring flowers' },
      ],
    },
    tropical: {
      name: 'Tropical',
      type: 'Rainforest',
      icon: '🌴',
      description: 'Exotic colors of jungle flora',
      colors: [
        { name: 'Palm Green', value: '#00a86b', plant: 'Palm leaves' },
        { name: 'Orchid Pink', value: '#da70d6', plant: 'Exotic flowers' },
        { name: 'Banana Yellow', value: '#ffe135', plant: 'Tropical fruits' },
        { name: 'Bird of Paradise', value: '#ff8c00', plant: 'Strelitzia' },
        { name: 'Vine Green', value: '#32cd32', plant: 'Jungle vines' },
      ],
    },
  };

  const handleColorSelect = (color) => {
    setSelectedColor(color);
    if (onChange) onChange(color);
  };

  return (
    <div style={{ padding: '24px', background: '#1a1a1a', borderRadius: '16px', boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)', width: '320px' }}>
      <style>{natureAnimation}</style>
      <div style={{ marginBottom: '24px' }}>
        <label style={{ display: 'block', marginBottom: '8px', color: '#e5e7eb', fontSize: '0.9rem' }}>Natural Environment</label>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '8px' }}>
          {Object.entries(natureThemes).map(([key, { name, icon }]) => (
            <button key={key} onClick={() => setSelectedNature(key)} style={{ padding: '12px 8px', background: selectedNature === key ? '#2d2d2d' : 'transparent', border: '2px solid', borderColor: selectedNature === key ? '#6366f1' : '#4b5563', borderRadius: '6px', cursor: 'pointer', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}>
              <span style={{ fontSize: '1.5rem' }}>{icon}</span>
              <span style={{ fontSize: '0.8rem', color: '#e5e7eb', fontWeight: selectedNature === key ? 500 : 400 }}>{name}</span>
            </button>
          ))}
        </div>
      </div>
      <div style={{ display: 'grid', gap: '12px', marginBottom: '24px' }}>
        {natureThemes[selectedNature].colors.map((color) => (
          <button key={color.value} onClick={() => handleColorSelect(color.value)} style={{ display: 'grid', gridTemplateColumns: '48px 1fr', gap: '12px', padding: '8px', background: '#2d2d2d', border: '2px solid', borderColor: selectedColor === color.value ? '#6366f1' : 'transparent', borderRadius: '8px', cursor: 'pointer', alignItems: 'center' }}>
            <div style={{ width: '48px', height: '48px', background: color.value, borderRadius: '6px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }} />
            <div style={{ textAlign: 'left' }}>
              <div style={{ fontSize: '0.9rem', color: '#e5e7eb', fontWeight: 500, marginBottom: '2px' }}>{color.name}</div>
              <div style={{ fontSize: '0.8rem', color: '#9ca3af' }}>{color.plant}</div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default ColorPicker_46;
