'use client';
import React, { useState } from 'react';

const musicAnimation = `
  @keyframes soundWave {
    0% { transform: scaleY(1); }
    50% { transform: scaleY(1.5); }
    100% { transform: scaleY(1); }
  }

  @keyframes vinylSpin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
`;

const ColorPicker_37 = ({ onChange }) => {
  const [selectedGenre, setSelectedGenre] = useState('jazz');
  const [selectedColor, setSelectedColor] = useState('#b8860b');

  const musicGenres = {
    jazz: {
      name: 'Jazz & Blues',
      era: '1920s-Present',
      icon: '🎷',
      description: 'Smooth, soulful colors of late-night jazz clubs',
      colors: [
        { name: 'Brass Gold', value: '#b8860b', element: 'Saxophone shine' },
        { name: 'Midnight Blue', value: '#191970', element: 'Club atmosphere' },
        { name: 'Bourbon Brown', value: '#8b4513', element: 'Wooden stage' },
        { name: 'Smoke Gray', value: '#708090', element: 'Misty ambiance' },
        { name: 'Piano Black', value: '#000000', element: 'Grand piano' },
      ],
    },
    rock: {
      name: 'Rock & Metal',
      era: '1950s-Present',
      icon: '🎸',
      description: 'Bold, electric colors of rock concerts',
      colors: [
        { name: 'Electric Red', value: '#ff0000', element: 'Stage lights' },
        { name: 'Chrome Silver', value: '#c0c0c0', element: 'Guitar strings' },
        { name: 'Leather Black', value: '#1a1a1a', element: 'Jacket texture' },
        { name: 'Neon Blue', value: '#00ffff', element: 'Lightning effects' },
        { name: 'Purple Haze', value: '#4b0082', element: 'Smoke effects' },
      ],
    },
    classical: {
      name: 'Classical',
      era: '1700s-1900s',
      icon: '🎻',
      description: 'Elegant colors of concert halls',
      colors: [
        { name: 'Mahogany Red', value: '#8b0000', element: 'Violin wood' },
        { name: 'Gold Leaf', value: '#daa520', element: 'Ornate frames' },
        { name: 'Velvet Red', value: '#800000', element: 'Theater curtains' },
        { name: 'Ivory White', value: '#fffff0', element: 'Piano keys' },
        { name: 'Bronze Age', value: '#cd853f', element: 'Brass section' },
      ],
    },
  };

  const handleColorSelect = (color) => {
    setSelectedColor(color);
    onChange?.(color);
  };

  return (
    <div style={{ padding: '24px', background: '#1a1a1a', borderRadius: '16px', width: '320px' }}>
      <style>{musicAnimation}</style>
      <div style={{ marginBottom: '24px' }}>
        <label style={{ display: 'block', marginBottom: '8px', color: '#e5e7eb' }}>Music Genre</label>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '8px' }}>
          {Object.entries(musicGenres).map(([key, { name, icon }]) => (
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
              }}
            >
              <span style={{ fontSize: '1.5rem', animation: selectedGenre === key ? 'soundWave 1s infinite' : 'none' }}>{icon}</span>
              <span style={{ fontSize: '0.8rem', color: '#e5e7eb', fontWeight: selectedGenre === key ? 500 : 400 }}>{name}</span>
            </button>
          ))}
        </div>
      </div>

      <div style={{ padding: '16px', background: '#2d2d2d', borderRadius: '8px', marginBottom: '24px' }}>
        <div style={{ fontSize: '0.8rem', color: '#9ca3af', marginBottom: '4px' }}>{musicGenres[selectedGenre].era}</div>
        <div style={{ fontSize: '0.9rem', color: '#e5e7eb' }}>{musicGenres[selectedGenre].description}</div>
      </div>

      <div style={{ display: 'grid', gap: '12px', marginBottom: '24px' }}>
        {musicGenres[selectedGenre].colors.map((color) => (
          <button
            key={color.value}
            onClick={() => handleColorSelect(color.value)}
            style={{ display: 'grid', gridTemplateColumns: '48px 1fr', gap: '12px', padding: '8px', background: '#2d2d2d', borderRadius: '8px', cursor: 'pointer' }}
          >
            <div style={{ width: '48px', height: '48px', background: color.value, borderRadius: '6px' }} />
            <div>
              <div style={{ fontSize: '0.9rem', color: '#e5e7eb', fontWeight: 500 }}>{color.name}</div>
              <div style={{ fontSize: '0.8rem', color: '#9ca3af' }}>{color.element}</div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default ColorPicker_37;
