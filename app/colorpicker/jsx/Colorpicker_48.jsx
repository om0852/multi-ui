'use client';
import React, { useState } from 'react';

const artAnimation = `
  @keyframes brush {
    0% { transform: rotate(0deg) scale(1); }
    25% { transform: rotate(-5deg) scale(1.05); }
    75% { transform: rotate(5deg) scale(0.95); }
    100% { transform: rotate(0deg) scale(1); }
  }

  @keyframes palette {
    0% { filter: saturate(1); }
    50% { filter: saturate(1.3); }
    100% { filter: saturate(1); }
  }
`;

const ColorPicker_48 = ({ onChange }) => {
  const [selectedStyle, setSelectedStyle] = useState('impressionism');
  const [selectedColor, setSelectedColor] = useState('#4682b4');

  const artThemes = {
    impressionism: {
      name: 'Impressionism',
      style: '19th Century',
      icon: '🎨',
      description: 'Light and atmospheric colors',
      colors: [
        { name: 'Monet Blue', value: '#4682b4', medium: 'Water lilies' },
        { name: 'Sunlit Yellow', value: '#ffd700', medium: 'Haystacks' },
        { name: 'Garden Green', value: '#98fb98', medium: 'Spring gardens' },
        { name: 'Sunset Orange', value: '#ffa07a', medium: 'Evening sky' },
        { name: 'Lavender Mist', value: '#e6e6fa', medium: 'Morning light' },
      ],
    },
    renaissance: {
      name: 'Renaissance',
      style: '15th-16th Century',
      icon: '👨‍🎨',
      description: 'Rich, classical pigments',
      colors: [
        { name: 'Venetian Red', value: '#c71585', medium: 'Oil paint' },
        { name: 'Ultramarine', value: '#120a8f', medium: 'Lapis lazuli' },
        { name: 'Verdigris', value: '#43b3ae', medium: 'Copper patina' },
        { name: 'Ochre', value: '#cc7722', medium: 'Earth pigment' },
        { name: 'Lead White', value: '#fffaf0', medium: 'Lead carbonate' },
      ],
    },
    modernism: {
      name: 'Modernism',
      style: '20th Century',
      icon: '🎯',
      description: 'Bold, abstract colors',
      colors: [
        { name: 'Mondrian Red', value: '#ff0000', medium: 'Primary color' },
        { name: 'Kandinsky Blue', value: '#0000ff', medium: 'Geometric forms' },
        { name: 'Bauhaus Yellow', value: '#ffff00', medium: 'Color theory' },
        { name: 'Cubist Gray', value: '#808080', medium: 'Fragmented forms' },
        { name: 'Abstract Black', value: '#000000', medium: 'Negative space' },
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
      <style>{artAnimation}</style>
      <div style={{ marginBottom: '24px' }}>
        <label style={{
          display: 'block',
          marginBottom: '8px',
          color: '#e5e7eb',
          fontSize: '0.9rem',
        }}>Art Movement</label>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '8px' }}>
          {Object.entries(artThemes).map(([key, { name, icon }]) => (
            <button
              key={key}
              onClick={() => setSelectedStyle(key)}
              style={{
                padding: '12px 8px',
                background: selectedStyle === key ? '#2d2d2d' : 'transparent',
                border: '2px solid',
                borderColor: selectedStyle === key ? '#6366f1' : '#4b5563',
                borderRadius: '6px',
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '4px',
              }}
            >
              <span style={{ fontSize: '1.5rem' }}>{icon}</span>
              <span style={{ fontSize: '0.8rem', color: '#e5e7eb', fontWeight: selectedStyle === key ? 500 : 400 }}>{name}</span>
            </button>
          ))}
        </div>
      </div>
      <div style={{ padding: '12px', background: '#2d2d2d', borderRadius: '8px', display: 'flex', alignItems: 'center', gap: '12px' }}>
        <div style={{ width: '40px', height: '40px', borderRadius: '6px', background: selectedColor }} />
        <input
          type="text"
          value={selectedColor}
          onChange={(e) => handleColorSelect(e.target.value)}
          style={{
            flex: 1,
            padding: '8px',
            border: '2px solid #4b5563',
            borderRadius: '6px',
            fontSize: '0.9rem',
            color: '#e5e7eb',
            background: '#1f2937',
          }}
        />
      </div>
    </div>
  );
};

export default ColorPicker_48;
