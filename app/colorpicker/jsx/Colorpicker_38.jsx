'use client';
import React, { useState } from 'react';

const archAnimation = `
  @keyframes buildUp {
    0% { transform: scaleY(0); }
    100% { transform: scaleY(1); }
  }

  @keyframes fadeSlide {
    0% { opacity: 0; transform: translateX(-10px); }
    100% { opacity: 1; transform: translateX(0); }
  }
`;

const ColorPicker_38 = ({ onChange }) => {
  const [selectedStyle, setSelectedStyle] = useState('gothic');
  const [selectedColor, setSelectedColor] = useState('#4a4a4a');

  const archStyles = {
    gothic: {
      name: 'Gothic',
      period: '12th-16th Century',
      icon: '⛪',
      description: 'Dramatic colors of medieval cathedrals',
      colors: [
        { name: 'Stone Gray', value: '#4a4a4a', material: 'Flying buttresses' },
        { name: 'Stained Rose', value: '#c41e3a', material: 'Glass windows' },
        { name: 'Royal Purple', value: '#4b0082', material: 'Church vestments' },
        { name: 'Gold Leaf', value: '#daa520', material: 'Altar decorations' },
        { name: 'Deep Blue', value: '#00008b', material: 'Cathedral ceiling' },
      ],
    },
    modernist: {
      name: 'Modernist',
      period: '20th Century',
      icon: '🏢',
      description: 'Clean lines and industrial materials',
      colors: [
        { name: 'Concrete Gray', value: '#808080', material: 'Raw concrete' },
        { name: 'Steel Blue', value: '#4682b4', material: 'Glass facades' },
        { name: 'White Wall', value: '#f5f5f5', material: 'Minimalist surfaces' },
        { name: 'Black Frame', value: '#1a1a1a', material: 'Steel structure' },
        { name: 'Chrome Silver', value: '#c0c0c0', material: 'Metal details' },
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
      <style>{archAnimation}</style>

      <div style={{ marginBottom: '24px' }}>
        <label style={{ display: 'block', marginBottom: '8px', color: '#e5e7eb', fontSize: '0.9rem' }}>
          Architectural Style
        </label>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '8px' }}>
          {Object.entries(archStyles).map(([key, { name, icon }]) => (
            <button
              key={key}
              onClick={() => setSelectedStyle(key)}
              style={{
                padding: '12px 8px',
                background: selectedStyle === key ? '#2d2d2d' : 'transparent',
                border: '2px solid',
                borderColor: selectedStyle === key ? '#6366f1' : '#4b5563',
                borderRadius: '6px',
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '4px',
              }}
            >
              <span style={{ fontSize: '1.5rem' }}>{icon}</span>
              <span style={{ fontSize: '0.8rem', color: '#e5e7eb', fontWeight: selectedStyle === key ? 500 : 400 }}>
                {name}
              </span>
            </button>
          ))}
        </div>
      </div>

      <div style={{ padding: '16px', background: '#2d2d2d', borderRadius: '8px', marginBottom: '24px' }}>
        <div style={{ fontSize: '0.8rem', color: '#9ca3af', marginBottom: '4px', fontFamily: 'monospace' }}>
          {archStyles[selectedStyle].period}
        </div>
        <div style={{ fontSize: '0.9rem', color: '#e5e7eb' }}>
          {archStyles[selectedStyle].description}
        </div>
      </div>
    </div>
  );
};

export default ColorPicker_38;