'use client';
import React, { useState } from 'react';

const gemAnimation = `
  @keyframes sparkle {
    0% { transform: scale(1) rotate(0deg); }
    25% { transform: scale(1.1) rotate(5deg); }
    50% { transform: scale(1) rotate(0deg); }
    75% { transform: scale(1.1) rotate(-5deg); }
    100% { transform: scale(1) rotate(0deg); }
  }

  @keyframes shimmer {
    from { opacity: 0.7; }
    to { opacity: 1; }
  }
`;

const ColorPicker_31 = ({ onChange }) => {
  const [selectedGem, setSelectedGem] = useState('ruby');
  const [selectedColor, setSelectedColor] = useState('#e53e3e');

  const gemTypes = {
    ruby: {
      name: 'Ruby',
      category: 'Corundum',
      hardness: '9.0 Mohs',
      description: 'The king of gems, known for its deep red color',
      colors: [
        { name: 'Pigeon Blood', value: '#e53e3e', variety: 'Burmese Ruby' },
        { name: 'Rose Red', value: '#f56565', variety: 'Thai Ruby' },
        { name: 'Purple Red', value: '#c53030', variety: 'Mozambique Ruby' },
        { name: 'Raspberry', value: '#feb2b2', variety: 'Sri Lankan Ruby' },
        { name: 'Deep Crimson', value: '#9b2c2c', variety: 'Madagascar Ruby' },
      ],
    },
    sapphire: {
      name: 'Sapphire',
      category: 'Corundum',
      hardness: '9.0 Mohs',
      description: 'Classic blue gem with royal heritage',
      colors: [
        { name: 'Royal Blue', value: '#2c5282', variety: 'Kashmir Sapphire' },
        { name: 'Cornflower', value: '#4299e1', variety: 'Ceylon Sapphire' },
        { name: 'Ocean Blue', value: '#2b6cb0', variety: 'Australian Sapphire' },
        { name: 'Star Blue', value: '#63b3ed', variety: 'Star Sapphire' },
        { name: 'Midnight', value: '#1a365d', variety: 'Montana Sapphire' },
      ],
    },
  };

  const handleColorSelect = (color) => {
    setSelectedColor(color);
    if (onChange) onChange(color);
  };

  return (
    <div style={{ padding: '24px', background: '#ffffff', borderRadius: '16px', boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)', width: '320px' }}>
      <style>{gemAnimation}</style>
      <div style={{ marginBottom: '24px' }}>
        <label style={{ display: 'block', marginBottom: '8px', color: '#4b5563', fontSize: '0.9rem' }}>Precious Gem</label>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '8px' }}>
          {Object.entries(gemTypes).map(([key, { name }]) => (
            <button key={key} onClick={() => setSelectedGem(key)} style={{ padding: '12px 8px', background: selectedGem === key ? '#f3f4f6' : 'transparent', border: '2px solid', borderColor: selectedGem === key ? '#6366f1' : '#e5e7eb', borderRadius: '6px', cursor: 'pointer', animation: selectedGem === key ? 'sparkle 2s infinite' : 'none' }}>
              <span style={{ fontSize: '0.9rem', color: '#4b5563', fontWeight: selectedGem === key ? 500 : 400 }}>{name}</span>
            </button>
          ))}
        </div>
      </div>
      <div style={{ padding: '16px', background: '#f3f4f6', borderRadius: '8px', marginBottom: '24px', animation: 'shimmer 0.3s ease-out' }}>
        <div style={{ fontSize: '0.8rem', color: '#6b7280', marginBottom: '4px', fontFamily: 'monospace' }}>{gemTypes[selectedGem].category} • {gemTypes[selectedGem].hardness}</div>
        <div style={{ fontSize: '0.9rem', color: '#4b5563' }}>{gemTypes[selectedGem].description}</div>
      </div>
      <div style={{ display: 'grid', gap: '12px', marginBottom: '24px' }}>
        {gemTypes[selectedGem].colors.map((color) => (
          <button key={color.value} onClick={() => handleColorSelect(color.value)} style={{ display: 'grid', gridTemplateColumns: '48px 1fr', gap: '12px', padding: '8px', background: '#f9fafb', border: '2px solid', borderColor: selectedColor === color.value ? '#6366f1' : 'transparent', borderRadius: '8px', cursor: 'pointer' }}>
            <div style={{ width: '48px', height: '48px', background: color.value, borderRadius: '6px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }} />
            <div style={{ textAlign: 'left' }}>
              <div style={{ fontSize: '0.9rem', color: '#1f2937', fontWeight: 500, marginBottom: '2px' }}>{color.name}</div>
              <div style={{ fontSize: '0.8rem', color: '#6b7280' }}>{color.variety}</div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default ColorPicker_31;
