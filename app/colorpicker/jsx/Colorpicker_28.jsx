'use client';
import React, { useState } from 'react';

const culturalAnimation = `
  @keyframes floatIn {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
  }

  @keyframes symbolRotate {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
`;

const ColorPicker_28 = ({ onChange }) => {
  const [selectedCulture, setSelectedCulture] = useState('japanese');
  const [selectedColor, setSelectedColor] = useState('#bc002d');

  const culturalThemes = {
    japanese: {
      name: 'Japanese Traditional',
      region: 'East Asia',
      symbol: '🎌',
      description: 'Traditional Japanese colors reflecting nature and seasons',
      colors: [
        { name: 'Shinku (Deep Red)', value: '#bc002d', significance: 'Vitality and good fortune' },
        { name: 'Kon (Navy)', value: '#223a70', significance: 'Depth and stability' },
        { name: 'Sakura (Cherry Blossom)', value: '#ffd1dc', significance: 'Renewal and beauty' },
        { name: 'Matcha (Green Tea)', value: '#b7ba6b', significance: 'Harmony and peace' },
        { name: 'Kincha (Gold)', value: '#e6b422', significance: 'Prosperity and elegance' },
      ],
    },
    indian: {
      name: 'Indian Heritage',
      region: 'South Asia',
      symbol: '🕉️',
      description: 'Vibrant colors inspired by Indian festivals and traditions',
      colors: [
        { name: 'Kumkuma (Saffron)', value: '#ff7f00', significance: 'Sacred and auspicious' },
        { name: 'Neelam (Royal Blue)', value: '#4169e1', significance: 'Divinity and power' },
        { name: 'Mehendi (Henna)', value: '#937a62', significance: 'Earth and tradition' },
        { name: 'Gulabi (Pink)', value: '#ff91af', significance: 'Love and care' },
        { name: 'Haldi (Turmeric)', value: '#ffc000', significance: 'Purity and prosperity' },
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
      <style>{culturalAnimation}</style>

      <div style={{ marginBottom: '24px' }}>
        <label style={{
          display: 'block',
          marginBottom: '8px',
          color: '#4b5563',
          fontSize: '0.9rem',
        }}>Cultural Heritage</label>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '8px',
        }}>
          {Object.entries(culturalThemes).map(([key, { name, symbol }]) => (
            <button
              key={key}
              onClick={() => setSelectedCulture(key)}
              style={{
                padding: '12px 8px',
                background: selectedCulture === key ? '#f3f4f6' : 'transparent',
                border: '2px solid',
                borderColor: selectedCulture === key ? '#6366f1' : '#e5e7eb',
                borderRadius: '6px',
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '4px',
                transition: 'all 0.2s ease',
              }}
            >
              <span style={{
                fontSize: '1.5rem',
                animation: selectedCulture === key ? 'symbolRotate 4s linear infinite' : 'none',
              }}>{symbol}</span>
              <span style={{
                fontSize: '0.8rem',
                color: '#4b5563',
                textAlign: 'center',
              }}>{name}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ColorPicker_28;
