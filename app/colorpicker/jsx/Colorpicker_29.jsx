'use client';
import React, { useState } from 'react';

const cinemaAnimation = `
  @keyframes fadeZoom {
    from { opacity: 0; transform: scale(0.95); }
    to { opacity: 1; transform: scale(1); }
  }

  @keyframes projectorFlicker {
    0% { opacity: 1; }
    95% { opacity: 1; }
    96% { opacity: 0.8; }
    97% { opacity: 1; }
    98% { opacity: 0.9; }
    100% { opacity: 1; }
  }
`;

const ColorPicker_29 = ({ onChange }) => {
  const [selectedStyle, setSelectedStyle] = useState('neoNoir');
  const [selectedColor, setSelectedColor] = useState('#ff6b6b');

  const filmStyles = {
    neoNoir: {
      name: 'Neo-Noir',
      director: 'Blade Runner (1982)',
      year: '1980s-Present',
      description: 'High contrast with neon accents and deep shadows',
      colors: [
        { name: 'Neon Pink', value: '#ff6b6b', usage: 'Vibrant city lights' },
        { name: 'Cyber Blue', value: '#00ffff', usage: 'Holographic elements' },
        { name: 'Night Black', value: '#1a1a1a', usage: 'Deep shadows' },
        { name: 'Acid Rain', value: '#7fff00', usage: 'Digital accents' },
        { name: 'Smog Purple', value: '#4b0082', usage: 'Urban atmosphere' },
      ],
    },
    wesAnderson: {
      name: 'Symmetrical Pastels',
      director: 'The Grand Budapest Hotel (2014)',
      year: '2000s-Present',
      description: 'Carefully curated pastels with symmetrical compositions',
      colors: [
        { name: 'Millennial Pink', value: '#ff9ecd', usage: 'Primary theme' },
        { name: 'Lobby Gold', value: '#deb887', usage: 'Architectural details' },
        { name: "Mendl's Blue", value: '#84c0ff', usage: 'Secondary accents' },
        { name: 'Pistachio', value: '#93c572', usage: 'Natural elements' },
        { name: 'Custard Yellow', value: '#ffdb58', usage: 'Highlight details' },
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
      <style>{cinemaAnimation}</style>
      <div style={{ marginBottom: '24px' }}>
        <label style={{
          display: 'block',
          marginBottom: '8px',
          color: '#4b5563',
          fontSize: '0.9rem',
        }}>
          Cinematic Style
        </label>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '8px',
        }}>
          {Object.entries(filmStyles).map(([key, { name }]) => (
            <button
              key={key}
              onClick={() => setSelectedStyle(key)}
              style={{
                padding: '12px 8px',
                background: selectedStyle === key ? '#f3f4f6' : 'transparent',
                border: '2px solid',
                borderColor: selectedStyle === key ? '#6366f1' : '#e5e7eb',
                borderRadius: '6px',
                cursor: 'pointer',
              }}
            >
              <span style={{
                fontSize: '0.9rem',
                color: '#4b5563',
                fontWeight: selectedStyle === key ? 500 : 400,
              }}>
                {name}
              </span>
            </button>
          ))}
        </div>
      </div>
      <div style={{
        padding: '16px',
        background: '#f3f4f6',
        borderRadius: '8px',
        marginBottom: '24px',
      }}>
        <div style={{ fontSize: '0.8rem', color: '#6b7280', marginBottom: '4px', fontFamily: 'monospace' }}>
          {filmStyles[selectedStyle].director} • {filmStyles[selectedStyle].year}
        </div>
        <div style={{ fontSize: '0.9rem', color: '#4b5563' }}>
          {filmStyles[selectedStyle].description}
        </div>
      </div>
    </div>
  );
};

export default ColorPicker_29;
