'use client';
import React, { useState } from 'react';

const artAnimation = `
  @keyframes brushStroke {
    0% { transform: scaleX(1); }
    50% { transform: scaleX(1.1); }
    100% { transform: scaleX(1); }
  }

  @keyframes fadeSlide {
    from { opacity: 0; transform: translateX(-10px); }
    to { opacity: 1; transform: translateX(0); }
  }
`;

const ColorPicker_27 = ({ onChange }) => {
  const [selectedMovement, setSelectedMovement] = useState('impressionism');
  const [selectedColor, setSelectedColor] = useState('#ffd700');

  const artMovements = {
    impressionism: {
      name: 'Impressionism',
      period: '1867-1886',
      description: 'Capturing light and its changing qualities',
      artist: 'Claude Monet',
      colors: [
        { name: 'Sunlit Yellow', value: '#ffd700', usage: 'Sunlight and brightness' },
        { name: 'Sky Blue', value: '#87ceeb', usage: 'Atmospheric effects' },
        { name: 'Lavender Mist', value: '#e6e6fa', usage: 'Natural shadows' },
        { name: 'Spring Green', value: '#90ee90', usage: 'Vegetation' },
        { name: 'Sunset Orange', value: '#ffa07a', usage: 'Evening light' },
      ],
    },
    artNouveau: {
      name: 'Art Nouveau',
      period: '1890-1910',
      description: 'Organic, flowing lines and natural forms',
      artist: 'Alphonse Mucha',
      colors: [
        { name: 'Gold Leaf', value: '#daa520', usage: 'Decorative elements' },
        { name: 'Deep Green', value: '#006400', usage: 'Plant motifs' },
        { name: 'Burgundy', value: '#800020', usage: 'Rich accents' },
        { name: 'Ivory', value: '#fffff0', usage: 'Background tones' },
        { name: 'Peacock Blue', value: '#33a1c9', usage: 'Flowing patterns' },
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
      background: '#ffffff',
      borderRadius: '16px',
      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
      width: '320px',
    }}>
      <style>{artAnimation}</style>
      <div style={{ marginBottom: '24px' }}>
        <label style={{ display: 'block', marginBottom: '8px', color: '#4b5563', fontSize: '0.9rem' }}>
          Art Movement
        </label>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '8px' }}>
          {Object.entries(artMovements).map(([key, { name }]) => (
            <button
              key={key}
              onClick={() => setSelectedMovement(key)}
              style={{
                padding: '12px 8px',
                background: selectedMovement === key ? '#f3f4f6' : 'transparent',
                border: '2px solid',
                borderColor: selectedMovement === key ? '#6366f1' : '#e5e7eb',
                borderRadius: '6px',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                animation: selectedMovement === key ? 'brushStroke 2s infinite' : 'none',
              }}
            >
              <span style={{ fontSize: '0.9rem', color: '#4b5563', fontWeight: selectedMovement === key ? 500 : 400 }}>
                {name}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ColorPicker_27;
