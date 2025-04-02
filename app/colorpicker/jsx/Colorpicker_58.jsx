'use client';
import React, { useState } from 'react';

const transportAnimation = `
  @keyframes drive {
    0% { transform: translateX(-5px); }
    50% { transform: translateX(5px); }
    100% { transform: translateX(-5px); }
  }

  @keyframes engine {
    0% { transform: scale(1); }
    25% { transform: scale(1.05); }
    50% { transform: scale(1); }
    75% { transform: scale(0.95); }
    100% { transform: scale(1); }
  }
`;

const ColorPicker_58 = ({ onChange }) => {
  const [selectedCategory, setSelectedCategory] = useState('cars');
  const [selectedColor, setSelectedColor] = useState('#ff0000');

  const transportThemes = {
    cars: {
      name: 'Cars',
      category: 'Road Vehicles',
      icon: '🚗',
      description: 'Classic automotive colors',
      colors: [
        { name: 'Racing Red', value: '#ff0000', component: 'Sports car' },
        { name: 'Metallic Silver', value: '#c0c0c0', component: 'Luxury sedan' },
        { name: 'Pearl White', value: '#f5f5f5', component: 'Electric vehicle' },
        { name: 'Midnight Black', value: '#2f2f2f', component: 'Executive car' },
        { name: 'Navy Blue', value: '#000080', component: 'Family SUV' },
      ],
    },
    aircraft: {
      name: 'Aircraft',
      category: 'Aviation',
      icon: '✈️',
      description: 'Aviation and aerospace colors',
      colors: [
        { name: 'Sky Blue', value: '#87ceeb', component: 'Fuselage' },
        { name: 'Cloud White', value: '#ffffff', component: 'Wings' },
        { name: 'Safety Orange', value: '#ff4500', component: 'Life vests' },
        { name: 'Cockpit Gray', value: '#808080', component: 'Instruments' },
        { name: 'Engine Silver', value: '#c0c0c0', component: 'Turbines' },
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
      <style>{transportAnimation}</style>
      <div>
        <label style={{ color: '#e5e7eb' }}>Vehicle Type</label>
        <div>
          {Object.entries(transportThemes).map(([key, { name, icon }]) => (
            <button key={key} onClick={() => setSelectedCategory(key)}>
              <span>{icon}</span>
              <span>{name}</span>
            </button>
          ))}
        </div>
      </div>
      <div>
        <div>{transportThemes[selectedCategory].category}</div>
        <div>{transportThemes[selectedCategory].description}</div>
      </div>
      <div>
        {transportThemes[selectedCategory].colors.map((color) => (
          <button key={color.value} onClick={() => handleColorSelect(color.value)}>
            <div style={{ background: color.value }} />
            <div>
              <div>{color.name}</div>
              <div>{color.component}</div>
            </div>
          </button>
        ))}
      </div>
      <div>
        <div style={{ background: selectedColor }} />
        <input
          type="text"
          value={selectedColor}
          onChange={(e) => handleColorSelect(e.target.value)}
        />
      </div>
    </div>
  );
};

export default ColorPicker_58;
