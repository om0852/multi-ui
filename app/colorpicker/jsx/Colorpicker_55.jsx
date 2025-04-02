'use client';
import React, { useState } from 'react';

const techAnimation = `
  @keyframes glow {
    0% { filter: brightness(1); }
    50% { filter: brightness(1.3); }
    100% { filter: brightness(1); }
  }

  @keyframes pixel {
    0% { transform: scale(1); }
    25% { transform: scale(1.1); }
    50% { transform: scale(1); }
    75% { transform: scale(0.9); }
    100% { transform: scale(1); }
  }
`;

const ColorPicker_55 = ({ onChange }) => {
  const [selectedPlatform, setSelectedPlatform] = useState('cyberpunk');
  const [selectedColor, setSelectedColor] = useState('#00ff00');

  const techThemes = {
    cyberpunk: {
      name: 'Cyberpunk',
      platform: 'Sci-Fi Gaming',
      icon: '🌆',
      description: 'Neon-lit future aesthetics',
      colors: [
        { name: 'Matrix Green', value: '#00ff00', element: 'Digital rain' },
        { name: 'Neon Pink', value: '#ff1493', element: 'Hologram' },
        { name: 'Cyber Blue', value: '#00ffff', element: 'Interface' },
        { name: 'Night Black', value: '#1a1a1a', element: 'Dark city' },
        { name: 'Electric Purple', value: '#9400d3', element: 'Neon signs' },
      ],
    },
    retro: {
      name: 'Retro Gaming',
      platform: '8-bit Era',
      icon: '👾',
      description: 'Classic arcade colors',
      colors: [
        { name: 'Pixel Red', value: '#ff0000', element: 'Game character' },
        { name: 'Console Gray', value: '#808080', element: 'Game system' },
        { name: 'Screen Green', value: '#32cd32', element: 'Game display' },
        { name: 'Power Blue', value: '#0000ff', element: 'Power LED' },
        { name: 'Score Yellow', value: '#ffff00', element: 'High score' },
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
      <style>{techAnimation}</style>

      <div>
        {Object.entries(techThemes).map(([key, { name, icon }]) => (
          <button
            key={key}
            onClick={() => setSelectedPlatform(key)}
            style={{
              background: selectedPlatform === key ? '#2d2d2d' : 'transparent',
              borderColor: selectedPlatform === key ? '#6366f1' : '#4b5563',
            }}
          >
            {icon} {name}
          </button>
        ))}
      </div>

      <div>{techThemes[selectedPlatform].description}</div>

      <div>
        {techThemes[selectedPlatform].colors.map((color) => (
          <button
            key={color.value}
            onClick={() => handleColorSelect(color.value)}
            style={{
              background: color.value,
              borderColor: selectedColor === color.value ? '#6366f1' : 'transparent',
            }}
          >
            {color.name}
          </button>
        ))}
      </div>

      <div>
        <input
          type="text"
          value={selectedColor}
          onChange={(e) => handleColorSelect(e.target.value)}
        />
      </div>
    </div>
  );
};

export default ColorPicker_55;
