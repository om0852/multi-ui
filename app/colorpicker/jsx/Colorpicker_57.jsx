'use client';
import React, { useState } from 'react';

const scienceAnimation = `
  @keyframes bubble {
    0% { transform: translateY(0) scale(1); opacity: 0.8; }
    50% { transform: translateY(-5px) scale(1.1); opacity: 1; }
    100% { transform: translateY(0) scale(1); opacity: 0.8; }
  }

  @keyframes react {
    0% { transform: rotate(0deg) scale(1); }
    50% { transform: rotate(180deg) scale(1.1); }
    100% { transform: rotate(360deg) scale(1); }
  }
`;

const ColorPicker_57 = ({ onChange }) => {
  const [selectedField, setSelectedField] = useState('chemistry');
  const [selectedColor, setSelectedColor] = useState('#00ff00');

  const scienceThemes = {
    chemistry: {
      name: 'Chemistry',
      field: 'Chemical Science',
      icon: '🧪',
      description: 'Laboratory colors and reactions',
      colors: [
        { name: 'Acid Green', value: '#00ff00', element: 'Chemical solution' },
        { name: 'Flame Orange', value: '#ff4500', element: 'Bunsen burner' },
        { name: 'Copper Blue', value: '#00ffff', element: 'Copper sulfate' },
        { name: 'Mercury Silver', value: '#c0c0c0', element: 'Metal elements' },
        { name: 'Iodine Purple', value: '#8b008b', element: 'Iodine vapor' },
      ],
    },
    physics: {
      name: 'Physics',
      field: 'Physical Science',
      icon: '⚛️',
      description: 'Energy and matter colors',
      colors: [
        { name: 'Quantum Blue', value: '#4169e1', element: 'Wave function' },
        { name: 'Plasma Pink', value: '#ff69b4', element: 'Ionized gas' },
        { name: 'Laser Red', value: '#ff0000', element: 'Light beam' },
        { name: 'Neutron Gray', value: '#696969', element: 'Particle' },
        { name: 'Field Green', value: '#98fb98', element: 'Force field' },
      ],
    },
  };

  const handleColorSelect = (color) => {
    setSelectedColor(color);
    if (onChange) onChange(color);
  };

  return (
    <div style={{ padding: '24px', background: '#1a1a1a', borderRadius: '16px', width: '320px' }}>
      <style>{scienceAnimation}</style>
      <div>
        {Object.entries(scienceThemes).map(([key, { name, icon }]) => (
          <button key={key} onClick={() => setSelectedField(key)}>
            {icon} {name}
          </button>
        ))}
      </div>
      <div>{scienceThemes[selectedField].description}</div>
      <div>
        {scienceThemes[selectedField].colors.map((color) => (
          <button key={color.value} onClick={() => handleColorSelect(color.value)}>
            {color.name}
          </button>
        ))}
      </div>
      <div>
        <input type="text" value={selectedColor} onChange={(e) => handleColorSelect(e.target.value)} />
      </div>
    </div>
  );
};

export default ColorPicker_57;
