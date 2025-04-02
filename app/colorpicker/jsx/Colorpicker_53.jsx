'use client';
import React, { useState } from 'react';

const architectureAnimation = `
  @keyframes construct {
    0% { transform: translateY(0) scale(1); }
    50% { transform: translateY(-3px) scale(1.02); }
    100% { transform: translateY(0) scale(1); }
  }

  @keyframes blueprint {
    0% { box-shadow: 0 0 0 rgba(99, 102, 241, 0.4); }
    50% { box-shadow: 0 0 15px rgba(99, 102, 241, 0.6); }
    100% { box-shadow: 0 0 0 rgba(99, 102, 241, 0.4); }
  }
`;

const ColorPicker_53 = ({ onChange }) => {
  const [selectedStyle, setSelectedStyle] = useState('modern');
  const [selectedColor, setSelectedColor] = useState('#a9a9a9');

  const architectureThemes = {
    modern: {
      name: 'Modern',
      style: 'Contemporary',
      icon: '🏢',
      description: 'Clean lines and minimalist design',
      colors: [
        { name: 'Concrete Gray', value: '#a9a9a9', element: 'Exposed concrete' },
        { name: 'Steel Blue', value: '#4682b4', element: 'Metal frames' },
        { name: 'Glass White', value: '#f5f5f5', element: 'Glass panels' },
        { name: 'Matte Black', value: '#2f2f2f', element: 'Metal accents' },
        { name: 'Chrome Silver', value: '#c0c0c0', element: 'Steel details' },
      ],
    },
    classical: {
      name: 'Classical',
      style: 'Greco-Roman',
      icon: '🏛️',
      description: 'Traditional architectural elements',
      colors: [
        { name: 'Marble White', value: '#f2f3f4', element: 'Marble columns' },
        { name: 'Stone Gray', value: '#8b8589', element: 'Stone walls' },
        { name: 'Gold Leaf', value: '#daa520', element: 'Decorative details' },
        { name: 'Terra Cotta', value: '#e2725b', element: 'Roof tiles' },
        { name: 'Bronze Patina', value: '#8b4513', element: 'Metal work' },
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
      <style>{architectureAnimation}</style>

      {/* Style selector */}
      <div style={{ marginBottom: '24px' }}>
        <label style={{
          display: 'block',
          marginBottom: '8px',
          color: '#e5e7eb',
          fontSize: '0.9rem',
        }}>
          Architectural Style
        </label>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '8px' }}>
          {Object.entries(architectureThemes).map(([key, { name, icon }]) => (
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
    </div>
  );
};

export default ColorPicker_53;
