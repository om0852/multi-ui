'use client';
import React, { useState } from 'react';

const mineralAnimation = `
  @keyframes shine {
    0% { filter: brightness(1) contrast(1); }
    50% { filter: brightness(1.2) contrast(1.1); }
    100% { filter: brightness(1) contrast(1); }
  }

  @keyframes crystallize {
    0% { transform: scale(1) rotate(0deg); }
    50% { transform: scale(1.05) rotate(2deg); }
    100% { transform: scale(1) rotate(0deg); }
  }
`;

const ColorPicker_49 = ({ onChange }) => {
  const [selectedMineral, setSelectedMineral] = useState('quartz');
  const [selectedColor, setSelectedColor] = useState('#e6e6fa');

  const mineralThemes = {
    quartz: {
      name: 'Quartz',
      formation: 'Igneous',
      icon: '💎',
      description: 'Colors of crystalline silica',
      colors: [
        { name: 'Clear Crystal', value: '#e6e6fa', mineral: 'Pure quartz' },
        { name: 'Rose Pink', value: '#ffc0cb', mineral: 'Rose quartz' },
        { name: 'Smoky Brown', value: '#8b4513', mineral: 'Smoky quartz' },
        { name: 'Amethyst Purple', value: '#9966cc', mineral: 'Amethyst' },
        { name: 'Citrine Gold', value: '#daa520', mineral: 'Citrine' },
      ],
    },
    beryl: {
      name: 'Beryl',
      formation: 'Pegmatite',
      icon: '✨',
      description: 'Precious beryl varieties',
      colors: [
        { name: 'Emerald Green', value: '#50c878', mineral: 'Emerald' },
        { name: 'Aqua Blue', value: '#00ffff', mineral: 'Aquamarine' },
        { name: 'Morganite Pink', value: '#ffb5c5', mineral: 'Morganite' },
        { name: 'Golden Beryl', value: '#ffd700', mineral: 'Heliodor' },
        { name: 'Sea Green', value: '#2e8b57', mineral: 'Green beryl' },
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
      <style>{mineralAnimation}</style>
      <div>
        {Object.entries(mineralThemes).map(([key, { name, icon }]) => (
          <button key={key} onClick={() => setSelectedMineral(key)}>
            {icon} {name}
          </button>
        ))}
      </div>
      <div>
        {mineralThemes[selectedMineral].colors.map((color) => (
          <button key={color.value} onClick={() => handleColorSelect(color.value)}>
            <div style={{ background: color.value, width: '48px', height: '48px' }} />
            {color.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ColorPicker_49;
