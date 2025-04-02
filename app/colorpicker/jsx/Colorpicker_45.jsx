'use client';
import React, { useState } from 'react';

const fashionAnimation = `
  @keyframes swing {
    0%, 100% { transform: rotate(-3deg); }
    50% { transform: rotate(3deg); }
  }

  @keyframes shimmer {
    0% { filter: brightness(1); }
    50% { filter: brightness(1.2); }
    100% { filter: brightness(1); }
  }
`;

const ColorPicker_45 = ({ onChange }) => {
  const [selectedEra, setSelectedEra] = useState('victorian');
  const [selectedColor, setSelectedColor] = useState('#800020');

  const fashionEras = {
    victorian: {
      name: 'Victorian',
      period: '1837-1901',
      icon: '👒',
      description: 'Elegant colors of the Victorian age',
      colors: [
        { name: 'Burgundy', value: '#800020', garment: 'Velvet dress' },
        { name: 'Royal Purple', value: '#4b0082', garment: 'Silk gown' },
        { name: 'Forest Green', value: '#228b22', garment: 'Walking suit' },
        { name: 'Navy Blue', value: '#000080', garment: 'Evening coat' },
        { name: 'Pearl White', value: '#f5f5f5', garment: 'Lace collar' },
      ],
    },
    artdeco: {
      name: 'Art Deco',
      period: '1920s-1930s',
      icon: '💃',
      description: 'Glamorous colors of the Jazz Age',
      colors: [
        { name: 'Gold Metallic', value: '#ffd700', garment: 'Flapper dress' },
        { name: 'Silver Screen', value: '#c0c0c0', garment: 'Evening gown' },
        { name: 'Jade Green', value: '#00a86b', garment: 'Cocktail dress' },
        { name: 'Black Onyx', value: '#0c0c0c', garment: 'Beaded dress' },
        { name: 'Pearl Cream', value: '#eae0c8', garment: 'Silk scarf' },
      ],
    },
    fifties: {
      name: '1950s',
      period: '1950-1959',
      icon: '👗',
      description: 'Vibrant colors of post-war optimism',
      colors: [
        { name: 'Powder Pink', value: '#ffd1dc', garment: 'Poodle skirt' },
        { name: 'Mint Green', value: '#98ff98', garment: 'Summer dress' },
        { name: 'Cherry Red', value: '#dc143c', garment: 'Swing dress' },
        { name: 'Baby Blue', value: '#89cff0', garment: 'Cardigan' },
        { name: 'Canary Yellow', value: '#ffef00', garment: 'Sundress' },
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
      <style>{fashionAnimation}</style>

      {/* Era selector */}
      <div style={{ marginBottom: '24px' }}>
        <label style={{ color: '#e5e7eb', fontSize: '0.9rem', marginBottom: '8px', display: 'block' }}>Fashion Era</label>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '8px' }}>
          {Object.entries(fashionEras).map(([key, { name, icon }]) => (
            <button key={key} onClick={() => setSelectedEra(key)} style={{
              padding: '12px 8px', background: selectedEra === key ? '#2d2d2d' : 'transparent',
              border: '2px solid', borderColor: selectedEra === key ? '#6366f1' : '#4b5563',
              borderRadius: '6px', cursor: 'pointer', display: 'flex', flexDirection: 'column',
              alignItems: 'center', gap: '4px', animation: selectedEra === key ? 'swing 2s infinite' : 'none',
            }}>
              <span style={{ fontSize: '1.5rem' }}>{icon}</span>
              <span style={{ fontSize: '0.8rem', color: '#e5e7eb', fontWeight: selectedEra === key ? 500 : 400 }}>{name}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ColorPicker_45;
