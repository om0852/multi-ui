'use client';
import React, { useState } from 'react';

const culinaryAnimation = `
  @keyframes bubble {
    0% { transform: scale(1); }
    50% { transform: scale(1.05); }
    100% { transform: scale(1); }
  }

  @keyframes steam {
    0% { opacity: 0; transform: translateY(0); }
    50% { opacity: 1; transform: translateY(-5px); }
    100% { opacity: 0; transform: translateY(-10px); }
  }
`;

const ColorPicker_33 = ({ onChange }) => {
  const [selectedTheme, setSelectedTheme] = useState('spices');
  const [selectedColor, setSelectedColor] = useState('#c41e3a');

  const culinaryThemes = {
    spices: {
      name: 'Spice Market',
      cuisine: 'Indian',
      icon: '🌶️',
      description: 'Vibrant colors of exotic spices and seasonings',
      colors: [
        { name: 'Saffron Gold', value: '#ffa500', ingredient: 'Saffron threads' },
        { name: 'Chili Red', value: '#c41e3a', ingredient: 'Kashmiri chilies' },
        { name: 'Turmeric', value: '#ffc30b', ingredient: 'Ground turmeric' },
        { name: 'Cardamom', value: '#3f704d', ingredient: 'Green cardamom' },
        { name: 'Cinnamon', value: '#8b4513', ingredient: 'Ceylon cinnamon' },
      ],
    },
    sushi: {
      name: 'Sushi Bar',
      cuisine: 'Japanese',
      icon: '🍱',
      description: 'Fresh colors from Japanese sushi ingredients',
      colors: [
        { name: 'Salmon Pink', value: '#ff8c69', ingredient: 'Fresh salmon' },
        { name: 'Wasabi', value: '#7ba05b', ingredient: 'Wasabi paste' },
        { name: 'Rice White', value: '#f7f7f7', ingredient: 'Sushi rice' },
        { name: 'Nori Green', value: '#242424', ingredient: 'Dried seaweed' },
        { name: 'Tuna Red', value: '#ff4d4d', ingredient: 'Maguro tuna' },
      ],
    },
  };

  const handleColorSelect = (color) => {
    setSelectedColor(color);
    if (onChange) {
      onChange(color);
    }
  };

  return (
    <div style={{
      padding: '24px',
      background: '#ffffff',
      borderRadius: '16px',
      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
      width: '320px',
    }}>
      <style>{culinaryAnimation}</style>
      <div>
        {Object.entries(culinaryThemes).map(([key, { name, icon }]) => (
          <button key={key} onClick={() => setSelectedTheme(key)}>
            {icon} {name}
          </button>
        ))}
      </div>
      <div>
        {culinaryThemes[selectedTheme].colors.map((color) => (
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

export default ColorPicker_33;
