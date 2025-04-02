'use client';
import React, { useState } from 'react';

const retroAnimation = `
  @keyframes groovy {
    0% { transform: rotate(0deg) scale(1); }
    25% { transform: rotate(3deg) scale(1.02); }
    75% { transform: rotate(-3deg) scale(0.98); }
    100% { transform: rotate(0deg) scale(1); }
  }

  @keyframes fadeRetro {
    from { opacity: 0; transform: translateY(-10px); }
    to { opacity: 1; transform: translateY(0); }
  }
`;

const ColorPicker_32 = ({ onChange }) => {
  const [selectedEra, setSelectedEra] = useState('psychedelic');
  const [selectedColor, setSelectedColor] = useState('#ff6b6b');

  const retroEras = {
    psychedelic: {
      name: 'Psychedelic',
      decade: '1960s',
      style: 'Peace & Love',
      description: 'Vibrant, swirling colors of the hippie movement',
      colors: [
        { name: 'Electric Purple', value: '#8a2be2', element: 'Psychedelic posters' },
        { name: 'Acid Green', value: '#7fff00', element: 'Concert flyers' },
        { name: 'Love Pink', value: '#ff69b4', element: 'Flower power' },
        { name: 'Sunshine Yellow', value: '#ffd700', element: 'Peace symbols' },
        { name: 'Orange Dream', value: '#ff7f50', element: 'Tie-dye patterns' },
      ],
    },
    disco: {
      name: 'Disco Era',
      decade: '1970s',
      style: 'Dance & Glam',
      description: 'Glittering colors of the disco dance floor',
      colors: [
        { name: 'Mirror Ball', value: '#c0c0c0', element: 'Disco balls' },
        { name: 'Neon Blue', value: '#00ffff', element: 'Dance floor' },
        { name: 'Gold Lamé', value: '#daa520', element: 'Disco fashion' },
        { name: 'Studio Pink', value: '#ff1493', element: 'Neon signs' },
        { name: 'Ultra Violet', value: '#9400d3', element: 'Stage lights' },
      ],
    },
    memphis: {
      name: 'Memphis Design',
      decade: '1980s',
      style: 'Bold & Geometric',
      description: 'Playful patterns and bold geometric shapes',
      colors: [
        { name: 'Miami Pink', value: '#ff6b6b', element: 'Geometric shapes' },
        { name: 'Pool Blue', value: '#4dc9ff', element: 'Squiggly lines' },
        { name: 'Banana Yellow', value: '#ffd93d', element: 'Pattern blocks' },
        { name: 'Grid Black', value: '#2d3436', element: 'Background dots' },
        { name: 'Mint Pop', value: '#98ff98', element: 'Accent shapes' },
      ],
    },
  };

  const handleColorSelect = (color) => {
    setSelectedColor(color);
    if (onChange) onChange(color);
  };

  return (
    <div style={{
      padding: '24px',
      background: '#ffffff',
      borderRadius: '16px',
      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
      width: '320px',
    }}>
      <style>{retroAnimation}</style>
      <div style={{ marginBottom: '24px' }}>
        <label style={{ display: 'block', marginBottom: '8px', color: '#4b5563', fontSize: '0.9rem' }}>Retro Era</label>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '8px' }}>
          {Object.entries(retroEras).map(([key, { name }]) => (
            <button
              key={key}
              onClick={() => setSelectedEra(key)}
              style={{
                padding: '12px 8px',
                background: selectedEra === key ? '#f3f4f6' : 'transparent',
                border: '2px solid',
                borderColor: selectedEra === key ? '#6366f1' : '#e5e7eb',
                borderRadius: '6px',
                cursor: 'pointer',
              }}
            >
              <span style={{ fontSize: '0.9rem', color: '#4b5563', fontWeight: selectedEra === key ? 500 : 400 }}>
                {name}
              </span>
            </button>
          ))}
        </div>
      </div>
      <div style={{ padding: '12px', background: '#f3f4f6', borderRadius: '8px', display: 'flex', alignItems: 'center', gap: '12px' }}>
        <div style={{ width: '40px', height: '40px', borderRadius: '6px', background: selectedColor, boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }} />
        <input
          type="text"
          value={selectedColor}
          onChange={(e) => handleColorSelect(e.target.value)}
          style={{
            flex: 1,
            padding: '8px',
            border: '2px solid #e5e7eb',
            borderRadius: '6px',
            fontSize: '0.9rem',
            color: '#4b5563',
            fontFamily: 'monospace',
            background: '#ffffff',
          }}
        />
      </div>
    </div>
  );
};

export default ColorPicker_32;