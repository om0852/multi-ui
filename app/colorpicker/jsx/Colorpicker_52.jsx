'use client';
import React, { useState } from 'react';

const foodAnimation = `
  @keyframes steam {
    0% { transform: translateY(0) scale(1); opacity: 0.8; }
    50% { transform: translateY(-5px) scale(1.1); opacity: 1; }
    100% { transform: translateY(0) scale(1); opacity: 0.8; }
  }

  @keyframes sizzle {
    0% { transform: rotate(-1deg) scale(1); }
    25% { transform: rotate(1deg) scale(1.02); }
    75% { transform: rotate(-1deg) scale(0.98); }
    100% { transform: rotate(1deg) scale(1); }
  }
`;

const ColorPicker_52 = ({ onChange }) => {
  const [selectedCuisine, setSelectedCuisine] = useState('italian');
  const [selectedColor, setSelectedColor] = useState('#ff6b6b');

  const cuisineThemes = {
    italian: {
      name: 'Italian',
      origin: 'Mediterranean',
      icon: '🍝',
      description: 'Colors of traditional Italian dishes',
      colors: [
        { name: 'Tomato Red', value: '#ff6b6b', dish: 'Marinara sauce' },
        { name: 'Pasta Gold', value: '#ffd700', dish: 'Fresh pasta' },
        { name: 'Basil Green', value: '#228b22', dish: 'Fresh herbs' },
        { name: 'Mozzarella White', value: '#f5f5f5', dish: 'Fresh cheese' },
        { name: 'Olive Green', value: '#556b2f', dish: 'Extra virgin olive oil' },
      ],
    },
    japanese: {
      name: 'Japanese',
      origin: 'East Asia',
      icon: '🍱',
      description: 'Elegant colors of Japanese cuisine',
      colors: [
        { name: 'Salmon Pink', value: '#fa8072', dish: 'Fresh sashimi' },
        { name: 'Rice White', value: '#fafafa', dish: 'Steamed rice' },
        { name: 'Nori Green', value: '#2f4f4f', dish: 'Seaweed wrap' },
        { name: 'Wasabi Green', value: '#7fff00', dish: 'Wasabi paste' },
        { name: 'Soy Brown', value: '#8b4513', dish: 'Soy sauce' },
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
      width: '320px',
    }}>
      <style>{foodAnimation}</style>

      <div style={{ marginBottom: '24px' }}>
        <label style={{ display: 'block', marginBottom: '8px', color: '#e5e7eb', fontSize: '0.9rem' }}>
          Cuisine Type
        </label>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '8px' }}>
          {Object.entries(cuisineThemes).map(([key, { name, icon }]) => (
            <button
              key={key}
              onClick={() => setSelectedCuisine(key)}
              style={{
                padding: '12px 8px',
                background: selectedCuisine === key ? '#2d2d2d' : 'transparent',
                border: '2px solid',
                borderColor: selectedCuisine === key ? '#6366f1' : '#4b5563',
                borderRadius: '6px',
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '4px',
              }}
            >
              <span style={{ fontSize: '1.5rem' }}>{icon}</span>
              <span style={{ fontSize: '0.8rem', color: '#e5e7eb' }}>{name}</span>
            </button>
          ))}
        </div>
      </div>

      <div style={{ padding: '16px', background: '#2d2d2d', borderRadius: '8px', marginBottom: '24px' }}>
        <div style={{ fontSize: '0.8rem', color: '#9ca3af', marginBottom: '4px', fontFamily: 'monospace' }}>
          {cuisineThemes[selectedCuisine].origin}
        </div>
        <div style={{ fontSize: '0.9rem', color: '#e5e7eb' }}>
          {cuisineThemes[selectedCuisine].description}
        </div>
      </div>
    </div>
  );
};

export default ColorPicker_52;