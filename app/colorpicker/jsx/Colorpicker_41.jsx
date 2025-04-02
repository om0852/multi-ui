'use client';
import React, { useState } from 'react';

const dessertAnimation = `
  @keyframes float {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-5px); }
  }

  @keyframes drip {
    0% { transform: scaleY(1); }
    50% { transform: scaleY(1.1); }
    100% { transform: scaleY(1); }
  }
`;

const ColorPicker_41 = ({ onChange }) => {
  const [selectedDessert, setSelectedDessert] = useState('icecream');
  const [selectedColor, setSelectedColor] = useState('#fdd1d1');

  const dessertThemes = {
    icecream: {
      name: 'Ice Cream',
      type: 'Frozen Treats',
      icon: '🍦',
      description: 'Sweet colors of frozen delights',
      colors: [
        { name: 'Strawberry Pink', value: '#fdd1d1', ingredient: 'Fresh berries' },
        { name: 'Vanilla Bean', value: '#f3e5ab', ingredient: 'Madagascar vanilla' },
        { name: 'Mint Chip', value: '#98ff98', ingredient: 'Fresh mint' },
        { name: 'Chocolate Fudge', value: '#3b1c0a', ingredient: 'Dark chocolate' },
        { name: 'Blueberry Swirl', value: '#4f86f7', ingredient: 'Wild berries' },
      ],
    },
    macarons: {
      name: 'Macarons',
      type: 'French Pastry',
      icon: '🍪',
      description: 'Delicate colors of French confections',
      colors: [
        { name: 'Lavender Dream', value: '#e6e6fa', ingredient: 'Dried lavender' },
        { name: 'Pistachio Green', value: '#93c572', ingredient: 'Ground nuts' },
        { name: 'Rose Petal', value: '#ffb7c5', ingredient: 'Rose water' },
        { name: 'Lemon Zest', value: '#fff44f', ingredient: 'Citrus essence' },
        { name: 'Violet Cream', value: '#9a4eae', ingredient: 'Violet extract' },
      ],
    },
    chocolate: {
      name: 'Chocolate',
      type: 'Confectionery',
      icon: '🍫',
      description: 'Rich colors of fine chocolate',
      colors: [
        { name: 'Dark Truffle', value: '#2a1810', ingredient: 'Cocoa solids' },
        { name: 'Milk Chocolate', value: '#7b3f00', ingredient: 'Cocoa butter' },
        { name: 'White Ganache', value: '#f5deb3', ingredient: 'Heavy cream' },
        { name: 'Caramel Swirl', value: '#d4a017', ingredient: 'Burnt sugar' },
        { name: 'Ruby Chocolate', value: '#ff7f7f', ingredient: 'Ruby cocoa' },
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
      background: '#1a1a1a',
      borderRadius: '16px',
      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
      width: '320px',
    }}>
      <style>{dessertAnimation}</style>
      <div>
        {Object.entries(dessertThemes).map(([key, { name, icon }]) => (
          <button key={key} onClick={() => setSelectedDessert(key)}>
            {icon} {name}
          </button>
        ))}
      </div>
      <div>
        {dessertThemes[selectedDessert].description}
      </div>
      <div>
        {dessertThemes[selectedDessert].colors.map((color) => (
          <button key={color.value} onClick={() => handleColorSelect(color.value)}>
            <div style={{ background: color.value, width: '48px', height: '48px' }}></div>
            <div>{color.name}</div>
          </button>
        ))}
      </div>
      <div>
        <div style={{ background: selectedColor, width: '40px', height: '40px' }}></div>
        <input type="text" value={selectedColor} onChange={(e) => handleColorSelect(e.target.value)} />
      </div>
    </div>
  );
};

export default ColorPicker_41;
