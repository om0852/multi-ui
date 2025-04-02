'use client';
import React, { useState } from 'react';

const botanicalAnimation = `
  @keyframes sway {
    0% { transform: rotate(0deg); }
    25% { transform: rotate(2deg); }
    75% { transform: rotate(-2deg); }
    100% { transform: rotate(0deg); }
  }

  @keyframes bloom {
    from { transform: scale(0.95); opacity: 0.7; }
    to { transform: scale(1); opacity: 1; }
  }
`;

const ColorPicker_34 = ({ onChange }) => {
  const [selectedFlower, setSelectedFlower] = useState('rose');
  const [selectedColor, setSelectedColor] = useState('#e31837');

  const botanicalThemes = {
    rose: {
      name: 'Rose Garden',
      family: 'Rosaceae',
      icon: '🌹',
      description: 'Classic rose varieties and their elegant hues',
      colors: [
        { name: 'Ruby Red', value: '#e31837', part: 'Red rose petals' },
        { name: 'Blush Pink', value: '#ffb6c1', part: 'Pink rose buds' },
        { name: 'Cream White', value: '#fffdd0', part: 'White rose bloom' },
        { name: 'Stem Green', value: '#4f7942', part: 'Fresh stems' },
        { name: 'Thorn Brown', value: '#8b4513', part: 'Woody thorns' },
      ],
    },
    lavender: {
      name: 'Lavender Fields',
      family: 'Lamiaceae',
      icon: '💜',
      description: 'Soothing purple tones of lavender plants',
      colors: [
        { name: 'French Lavender', value: '#967bb6', part: 'Flower spikes' },
        { name: 'Provence Purple', value: '#734f96', part: 'Dried buds' },
        { name: 'Silver Leaf', value: '#848482', part: 'Foliage' },
        { name: 'Field Green', value: '#556b2f', part: 'Young stems' },
        { name: 'Honey Gold', value: '#ffd700', part: 'Pollen' },
      ],
    },
    orchid: {
      name: 'Exotic Orchids',
      family: 'Orchidaceae',
      icon: '🌺',
      description: 'Delicate colors of tropical orchid species',
      colors: [
        { name: 'Fuchsia Dream', value: '#ff69b4', part: 'Phalaenopsis bloom' },
        { name: 'Tiger Orange', value: '#ff7f50', part: 'Spotted petals' },
        { name: 'Vanilla Cream', value: '#f5fffa', part: 'White varieties' },
        { name: 'Jungle Green', value: '#2e8b57', part: 'Thick leaves' },
        { name: 'Deep Purple', value: '#483d8b', part: 'Vanda orchid' },
      ],
    },
  };

  const handleColorSelect = (color) => {
    setSelectedColor(color);
    if (onChange) onChange(color);
  };

  return (
    <div style={{ padding: '24px', background: '#ffffff', borderRadius: '16px', boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)', width: '320px' }}>
      <style>{botanicalAnimation}</style>
      <div style={{ marginBottom: '24px' }}>
        <label style={{ display: 'block', marginBottom: '8px', color: '#4b5563', fontSize: '0.9rem' }}>Botanical Theme</label>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '8px' }}>
          {Object.entries(botanicalThemes).map(([key, { name, icon }]) => (
            <button
              key={key}
              onClick={() => setSelectedFlower(key)}
              style={{
                padding: '12px 8px',
                background: selectedFlower === key ? '#f3f4f6' : 'transparent',
                border: '2px solid',
                borderColor: selectedFlower === key ? '#6366f1' : '#e5e7eb',
                borderRadius: '6px',
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '4px',
              }}
            >
              <span style={{ fontSize: '1.5rem', animation: selectedFlower === key ? 'sway 3s ease-in-out infinite' : 'none' }}>{icon}</span>
              <span style={{ fontSize: '0.8rem', color: '#4b5563', fontWeight: selectedFlower === key ? 500 : 400 }}>{name}</span>
            </button>
          ))}
        </div>
      </div>
      <div style={{ padding: '16px', background: '#f3f4f6', borderRadius: '8px', marginBottom: '24px' }}>
        <div style={{ fontSize: '0.8rem', color: '#6b7280', marginBottom: '4px', fontFamily: 'monospace' }}>{botanicalThemes[selectedFlower].family}</div>
        <div style={{ fontSize: '0.9rem', color: '#4b5563' }}>{botanicalThemes[selectedFlower].description}</div>
      </div>
      <div style={{ display: 'grid', gap: '12px', marginBottom: '24px' }}>
        {botanicalThemes[selectedFlower].colors.map((color) => (
          <button
            key={color.value}
            onClick={() => handleColorSelect(color.value)}
            style={{
              display: 'grid',
              gridTemplateColumns: '48px 1fr',
              gap: '12px',
              padding: '8px',
              background: '#f9fafb',
              border: '2px solid',
              borderColor: selectedColor === color.value ? '#6366f1' : 'transparent',
              borderRadius: '8px',
              cursor: 'pointer',
              alignItems: 'center',
            }}
          >
            <div style={{ width: '48px', height: '48px', background: color.value, borderRadius: '6px' }} />
            <div>
              <div style={{ fontSize: '0.9rem', color: '#1f2937', fontWeight: 500 }}>{color.name}</div>
              <div style={{ fontSize: '0.8rem', color: '#6b7280' }}>{color.part}</div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default ColorPicker_34;
