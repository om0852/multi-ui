'use client';
import React, { useState } from 'react';

const gemAnimation = `
  @keyframes sparkle {
    0%, 100% { filter: brightness(1); }
    50% { filter: brightness(1.3); }
  }

  @keyframes rotate {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
`;

const ColorPicker_42 = ({ onChange }) => {
  const [selectedGem, setSelectedGem] = useState('ruby');
  const [selectedColor, setSelectedColor] = useState('#e0115f');

  const gemThemes = {
    ruby: {
      name: 'Ruby',
      type: 'Precious Stone',
      icon: '💎',
      description: 'Deep reds of the king of gems',
      colors: [
        { name: 'Pigeon Blood', value: '#e0115f', variety: 'Burmese Ruby' },
        { name: 'Rose Red', value: '#c21e56', variety: 'Thai Ruby' },
        { name: 'Wine Red', value: '#722f37', variety: 'African Ruby' },
        { name: 'Pink Flash', value: '#ff69b4', variety: 'Sri Lankan Ruby' },
        { name: 'Deep Crimson', value: '#dc143c', variety: 'Mozambique Ruby' },
      ],
    },
    sapphire: {
      name: 'Sapphire',
      type: 'Precious Stone',
      icon: '💠',
      description: 'Royal blues of corundum',
      colors: [
        { name: 'Kashmir Blue', value: '#0066cc', variety: 'Kashmir Sapphire' },
        { name: 'Ceylon Blue', value: '#4169e1', variety: 'Sri Lankan Sapphire' },
        { name: 'Royal Blue', value: '#002366', variety: 'Burma Sapphire' },
        { name: 'Star Blue', value: '#4682b4', variety: 'Star Sapphire' },
        { name: 'Cornflower', value: '#6495ed', variety: 'Montana Sapphire' },
      ],
    },
    emerald: {
      name: 'Emerald',
      type: 'Precious Stone',
      icon: '🟢',
      description: 'Lush greens of beryl',
      colors: [
        { name: 'Colombian Green', value: '#046307', variety: 'Colombian Emerald' },
        { name: 'Muzo Green', value: '#50c878', variety: 'Muzo Mine' },
        { name: 'Forest Green', value: '#228b22', variety: 'Zambian Emerald' },
        { name: 'Vivid Green', value: '#00a550', variety: 'Brazilian Emerald' },
        { name: 'Garden Green', value: '#355e3b', variety: 'Russian Emerald' },
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
      <style>{gemAnimation}</style>
      <div style={{ marginBottom: '24px' }}>
        <label style={{
          display: 'block',
          marginBottom: '8px',
          color: '#e5e7eb',
          fontSize: '0.9rem',
        }}>Gemstone</label>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '8px',
        }}>
          {Object.entries(gemThemes).map(([key, { name, icon }]) => (
            <button
              key={key}
              onClick={() => setSelectedGem(key)}
              style={{
                padding: '12px 8px',
                background: selectedGem === key ? '#2d2d2d' : 'transparent',
                border: '2px solid',
                borderColor: selectedGem === key ? '#6366f1' : '#4b5563',
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

      <div style={{
        padding: '16px',
        background: '#2d2d2d',
        borderRadius: '8px',
        marginBottom: '24px',
      }}>
        <div style={{ fontSize: '0.8rem', color: '#9ca3af' }}>{gemThemes[selectedGem].type}</div>
        <div style={{ fontSize: '0.9rem', color: '#e5e7eb' }}>{gemThemes[selectedGem].description}</div>
      </div>

      <div style={{ display: 'grid', gap: '12px' }}>
        {gemThemes[selectedGem].colors.map((color) => (
          <button
            key={color.value}
            onClick={() => handleColorSelect(color.value)}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              padding: '8px',
              background: '#2d2d2d',
              borderRadius: '8px',
            }}
          >
            <div style={{ width: '40px', height: '40px', background: color.value, borderRadius: '6px' }} />
            <span style={{ color: '#e5e7eb' }}>{color.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default ColorPicker_42;
