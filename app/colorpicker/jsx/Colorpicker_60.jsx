'use client';
import React, { useState } from 'react';

const danceAnimation = `
  @keyframes dance {
    0% { transform: translateY(0); }
    25% { transform: translateY(-3px) rotate(2deg); }
    75% { transform: translateY(3px) rotate(-2deg); }
    100% { transform: translateY(0); }
  }

  @keyframes spotlight {
    0% { filter: brightness(1); }
    50% { filter: brightness(1.2); }
    100% { filter: brightness(1); }
  }
`;

const ColorPicker_60 = ({ onChange }) => {
  const [selectedStyle, setSelectedStyle] = useState('ballet');
  const [selectedColor, setSelectedColor] = useState('#ffc0cb');

  const danceThemes = {
    ballet: {
      name: 'Ballet',
      category: 'Classical Dance',
      icon: '🩰',
      description: 'Elegant colors of classical ballet',
      colors: [
        { name: 'Ballet Pink', value: '#ffc0cb', element: 'Pointe shoes' },
        { name: 'Tulle White', value: '#fff5ee', element: 'Tutu' },
        { name: 'Stage Light', value: '#fffacd', element: 'Spotlight' },
        { name: 'Velvet Red', value: '#8b0000', element: 'Curtain' },
        { name: 'Pearl Gray', value: '#e5e4e2', element: 'Practice wear' },
      ],
    },
    contemporary: {
      name: 'Contemporary',
      category: 'Modern Dance',
      icon: '💃',
      description: 'Bold colors of modern expression',
      colors: [
        { name: 'Earth Brown', value: '#8b4513', element: 'Floor work' },
        { name: 'Flow Blue', value: '#4169e1', element: 'Movement' },
        { name: 'Energy Red', value: '#dc143c', element: 'Passion' },
        { name: 'Shadow Gray', value: '#696969', element: 'Contrast' },
        { name: 'Spirit White', value: '#f8f8ff', element: 'Freedom' },
      ],
    },
    hiphop: {
      name: 'Hip Hop',
      category: 'Urban Dance',
      icon: '🕺',
      description: 'Street style and urban colors',
      colors: [
        { name: 'Street Black', value: '#2f2f2f', element: 'Street wear' },
        { name: 'Neon Green', value: '#39ff14', element: 'Accents' },
        { name: 'Beat Red', value: '#ff0000', element: 'Sneakers' },
        { name: 'Urban Gray', value: '#808080', element: 'Concrete' },
        { name: 'Gold', value: '#ffd700', element: 'Accessories' },
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
      width: '320px',
    }}>
      <style>{danceAnimation}</style>

      <div style={{ marginBottom: '24px' }}>
        <label style={{ color: '#e5e7eb', fontSize: '0.9rem' }}>Dance Style</label>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '8px' }}>
          {Object.entries(danceThemes).map(([key, { name, icon }]) => (
            <button
              key={key}
              onClick={() => setSelectedStyle(key)}
              style={{
                padding: '12px 8px',
                background: selectedStyle === key ? '#2d2d2d' : 'transparent',
                borderColor: selectedStyle === key ? '#6366f1' : '#4b5563',
                borderRadius: '6px',
                cursor: 'pointer',
              }}
            >
              <span style={{ fontSize: '1.5rem' }}>{icon}</span>
              <span style={{ fontSize: '0.8rem', color: '#e5e7eb' }}>{name}</span>
            </button>
          ))}
        </div>
      </div>

      <div style={{ padding: '16px', background: '#2d2d2d', borderRadius: '8px', marginBottom: '24px' }}>
        <div style={{ fontSize: '0.8rem', color: '#9ca3af' }}>{danceThemes[selectedStyle].category}</div>
        <div style={{ fontSize: '0.9rem', color: '#e5e7eb' }}>{danceThemes[selectedStyle].description}</div>
      </div>

      <div style={{ display: 'grid', gap: '12px', marginBottom: '24px' }}>
        {danceThemes[selectedStyle].colors.map((color) => (
          <button
            key={color.value}
            onClick={() => handleColorSelect(color.value)}
            style={{
              padding: '8px',
              background: '#2d2d2d',
              borderColor: selectedColor === color.value ? '#6366f1' : 'transparent',
              borderRadius: '8px',
              cursor: 'pointer',
            }}
          >
            <div style={{ width: '48px', height: '48px', background: color.value, borderRadius: '6px' }} />
            <div style={{ textAlign: 'left' }}>
              <div style={{ fontSize: '0.9rem', color: '#e5e7eb' }}>{color.name}</div>
              <div style={{ fontSize: '0.8rem', color: '#9ca3af' }}>{color.element}</div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default ColorPicker_60;
