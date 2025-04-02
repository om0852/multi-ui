'use client';
import React, { useState } from 'react';

const gameAnimation = `
  @keyframes pixelate {
    0% { transform: scale(1); }
    50% { transform: scale(1.1); }
    100% { transform: scale(1); }
  }

  @keyframes powerUp {
    0% { filter: brightness(1); }
    50% { filter: brightness(1.3); }
    100% { filter: brightness(1); }
  }
`;

const ColorPicker_40 = ({ onChange }) => {
  const [selectedTheme, setSelectedTheme] = useState('retro');
  const [selectedColor, setSelectedColor] = useState('#e60012');

  const gameThemes = {
    retro: {
      name: 'Classic Nintendo',
      genre: 'Retro Gaming',
      icon: '🎮',
      description: 'Iconic colors from Nintendo classics',
      colors: [
        { name: 'Mario Red', value: '#e60012', element: "Mario's cap" },
        { name: 'Link Green', value: '#00a859', element: "Hero's tunic" },
        { name: 'Star Yellow', value: '#ffd700', element: 'Power star' },
        { name: 'Mushroom Spot', value: '#ff4444', element: 'Power-up' },
        { name: 'Block Brown', value: '#8b4513', element: 'Question block' },
      ],
    },
  };

  const handleColorSelect = (color) => {
    setSelectedColor(color);
    onChange?.(color);
  };

  return (
    <div style={{
      padding: '24px',
      background: '#1a1a1a',
      borderRadius: '16px',
      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
      width: '320px',
    }}>
      <style>{gameAnimation}</style>
      <div>
        {gameThemes[selectedTheme].colors.map((color) => (
          <button
            key={color.value}
            onClick={() => handleColorSelect(color.value)}
            style={{ background: color.value, padding: '10px', margin: '5px' }}
          >
            {color.name}
          </button>
        ))}
      </div>
      <input
        type="text"
        value={selectedColor}
        onChange={(e) => handleColorSelect(e.target.value)}
        style={{
          padding: '8px',
          border: '2px solid #4b5563',
          borderRadius: '6px',
          fontSize: '0.9rem',
          color: '#e5e7eb',
          background: '#1f2937',
        }}
      />
    </div>
  );
};

export default ColorPicker_40;
