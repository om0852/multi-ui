'use client';
import React, { useState } from 'react';

const literatureAnimation = `
  @keyframes pageFlip {
    0% { transform: rotateY(0deg); }
    50% { transform: rotateY(15deg); }
    100% { transform: rotateY(0deg); }
  }

  @keyframes inkSpread {
    0% { transform: scale(1); opacity: 1; }
    50% { transform: scale(1.1); opacity: 0.8; }
    100% { transform: scale(1); opacity: 1; }
  }
`;

const ColorPicker_56 = ({ onChange }) => {
  const [selectedGenre, setSelectedGenre] = useState('classic');
  const [selectedColor, setSelectedColor] = useState('#8b4513');

  const literatureThemes = {
    classic: {
      name: 'Classics',
      genre: 'Literary Fiction',
      icon: '📚',
      description: 'Traditional book elements',
      colors: [
        { name: 'Leather Brown', value: '#8b4513', element: 'Book binding' },
        { name: 'Parchment', value: '#fff8dc', element: 'Page color' },
        { name: 'Ink Black', value: '#2f2f2f', element: 'Text' },
        { name: 'Gold Leaf', value: '#daa520', element: 'Edge gilding' },
        { name: 'Bookmark Red', value: '#8b0000', element: 'Ribbon marker' },
      ],
    },
    fantasy: {
      name: 'Fantasy',
      genre: 'Magical Realms',
      icon: '🐉',
      description: 'Mystical and enchanted colors',
      colors: [
        { name: 'Dragon Green', value: '#228b22', element: 'Mythical creatures' },
        { name: 'Magic Purple', value: '#9400d3', element: 'Spells' },
        { name: 'Royal Gold', value: '#ffd700', element: 'Crown jewels' },
        { name: 'Forest Mist', value: '#2f4f4f', element: 'Enchanted woods' },
        { name: 'Crystal Blue', value: '#4169e1', element: 'Magic portals' },
      ],
    },
    mystery: {
      name: 'Mystery',
      genre: 'Detective Fiction',
      icon: '🔍',
      description: 'Noir and suspense tones',
      colors: [
        { name: 'Shadow Gray', value: '#696969', element: 'Dark alleys' },
        { name: 'Blood Red', value: '#8b0000', element: 'Crime scenes' },
        { name: 'Fog White', value: '#f8f8ff', element: 'Misty nights' },
        { name: 'Noir Black', value: '#1a1a1a', element: 'Detective coat' },
        { name: 'Brass Gold', value: '#b8860b', element: 'Door handles' },
      ],
    },
    romance: {
      name: 'Romance',
      genre: 'Love Stories',
      icon: '💝',
      description: 'Passionate and tender hues',
      colors: [
        { name: 'Rose Pink', value: '#ff69b4', element: 'Love letters' },
        { name: 'Sunset Orange', value: '#ffa07a', element: 'Evening sky' },
        { name: 'Pearl White', value: '#fdfff5', element: 'Wedding dress' },
        { name: 'Heart Red', value: '#ff0000', element: 'Valentine' },
        { name: 'Lavender', value: '#e6e6fa', element: 'Spring flowers' },
      ],
    },
  };

  const handleColorSelect = (color) => {
    setSelectedColor(color);
    if (onChange) onChange(color);
  };

  return (
    <div style={{ padding: '24px', background: '#1a1a1a', borderRadius: '16px', width: '320px' }}>
      <style>{literatureAnimation}</style>
      <div style={{ marginBottom: '24px' }}>
        <label style={{ display: 'block', marginBottom: '8px', color: '#e5e7eb' }}>Literary Genre</label>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '8px' }}>
          {Object.entries(literatureThemes).map(([key, { name, icon }]) => (
            <button
              key={key}
              onClick={() => setSelectedGenre(key)}
              style={{
                padding: '12px 8px',
                background: selectedGenre === key ? '#2d2d2d' : 'transparent',
                border: `2px solid ${selectedGenre === key ? '#6366f1' : '#4b5563'}`,
                borderRadius: '6px',
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                animation: selectedGenre === key ? 'pageFlip 2s infinite' : 'none',
              }}
            >
              <span style={{ fontSize: '1.5rem' }}>{icon}</span>
              <span style={{ fontSize: '0.8rem', color: '#e5e7eb' }}>{name}</span>
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
          style={{ flex: 1, padding: '8px', border: '2px solid #4b5563', borderRadius: '6px', background: '#1f2937', color: '#e5e7eb' }}
        />
      </div>
    </div>
  );
};

export default ColorPicker_56;
