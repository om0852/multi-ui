'use client';
import React, { useState } from 'react';

const photoAnimation = `
  @keyframes shutter {
    0% { transform: scale(1); opacity: 1; }
    50% { transform: scale(0.95); opacity: 0.8; }
    100% { transform: scale(1); opacity: 1; }
  }

  @keyframes develop {
    0% { filter: brightness(1) contrast(1); }
    50% { filter: brightness(1.1) contrast(1.1); }
    100% { filter: brightness(1) contrast(1); }
  }
`;

const ColorPicker_59 = ({ onChange }) => {
  const [selectedGenre, setSelectedGenre] = useState('blackwhite');
  const [selectedColor, setSelectedColor] = useState('#000000');

  const photoThemes = {
    blackwhite: {
      name: 'Black & White',
      category: 'Classic Photography',
      icon: '📷',
      description: 'Monochromatic tones of traditional photography',
      colors: [
        { name: 'Pure Black', value: '#000000', element: 'Deep shadows' },
        { name: 'Dark Gray', value: '#404040', element: 'Mid-tones' },
        { name: 'Silver', value: '#c0c0c0', element: 'Highlights' },
        { name: 'Light Gray', value: '#e0e0e0', element: 'High key' },
        { name: 'Pure White', value: '#ffffff', element: 'Bright areas' },
      ],
    },
    vintage: {
      name: 'Vintage',
      category: 'Retro Film',
      icon: '🎞️',
      description: 'Warm, aged tones of classic film',
      colors: [
        { name: 'Sepia', value: '#704214', element: 'Aged photo' },
        { name: 'Faded Brown', value: '#8b7355', element: 'Old print' },
        { name: 'Cream', value: '#fffdd0', element: 'Paper' },
        { name: 'Antique', value: '#faebd7', element: 'Background' },
        { name: 'Amber', value: '#ffbf00', element: 'Tinting' },
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
      <style>{photoAnimation}</style>
      <div style={{ marginBottom: '24px' }}>
        <label style={{ display: 'block', marginBottom: '8px', color: '#e5e7eb', fontSize: '0.9rem' }}>
          Photography Style
        </label>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '8px' }}>
          {Object.entries(photoThemes).map(([key, { name, icon }]) => (
            <button
              key={key}
              onClick={() => setSelectedGenre(key)}
              style={{
                padding: '12px 8px',
                background: selectedGenre === key ? '#2d2d2d' : 'transparent',
                border: '2px solid',
                borderColor: selectedGenre === key ? '#6366f1' : '#4b5563',
                borderRadius: '6px',
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '4px',
                animation: selectedGenre === key ? 'shutter 1.5s infinite ease-in-out' : 'none',
              }}
            >
              <span style={{ fontSize: '1.5rem' }}>{icon}</span>
              <span style={{ fontSize: '0.8rem', color: '#e5e7eb', fontWeight: selectedGenre === key ? 500 : 400 }}>
                {name}
              </span>
            </button>
          ))}
        </div>
      </div>
      <div style={{ display: 'grid', gap: '12px', marginBottom: '24px' }}>
        {photoThemes[selectedGenre].colors.map((color) => (
          <button
            key={color.value}
            onClick={() => handleColorSelect(color.value)}
            style={{
              display: 'grid',
              gridTemplateColumns: '48px 1fr',
              gap: '12px',
              padding: '8px',
              background: '#2d2d2d',
              border: '2px solid',
              borderColor: selectedColor === color.value ? '#6366f1' : 'transparent',
              borderRadius: '8px',
              cursor: 'pointer',
              alignItems: 'center',
              animation: selectedColor === color.value ? 'develop 2s infinite ease-in-out' : 'none',
            }}
          >
            <div style={{ width: '48px', height: '48px', background: color.value, borderRadius: '6px' }} />
            <div>
              <div style={{ fontSize: '0.9rem', color: '#e5e7eb', fontWeight: 500, marginBottom: '2px' }}>
                {color.name}
              </div>
              <div style={{ fontSize: '0.8rem', color: '#9ca3af' }}>{color.element}</div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default ColorPicker_59;
