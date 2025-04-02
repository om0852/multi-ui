'use client';
import React, { useState } from 'react';

const emotionAnimation = `
  @keyframes pulseEmotion {
    0% { transform: scale(1); }
    50% { transform: scale(1.2); }
    100% { transform: scale(1); }
  }

  @keyframes slideIn {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
  }
`;

const ColorPicker_26 = ({ onChange }) => {
  const [selectedEmotion, setSelectedEmotion] = useState('joy');
  const [selectedColor, setSelectedColor] = useState('#ffd700');
  const [intensityLevel, setIntensityLevel] = useState(5);

  const emotions = {
    joy: {
      name: 'Joy & Happiness',
      icon: '😊',
      description: 'Bright and uplifting colors that spark happiness',
      intensity: 8,
      colors: [
        { name: 'Sunshine Yellow', value: '#ffd700', meaning: 'Optimism and cheerfulness' },
        { name: 'Coral Pink', value: '#ff7f50', meaning: 'Warmth and enthusiasm' },
        { name: 'Sky Blue', value: '#87ceeb', meaning: 'Freedom and lightness' },
        { name: 'Spring Green', value: '#98fb98', meaning: 'Growth and vitality' },
        { name: 'Bright Orange', value: '#ffa500', meaning: 'Energy and excitement' },
      ],
    },
    calm: {
      name: 'Calm & Serenity',
      icon: '😌',
      description: 'Soft and soothing colors that promote tranquility',
      intensity: 3,
      colors: [
        { name: 'Sage Green', value: '#9dc183', meaning: 'Peace and balance' },
        { name: 'Lavender', value: '#e6e6fa', meaning: 'Relaxation and comfort' },
        { name: 'Powder Blue', value: '#b0e0e6', meaning: 'Calmness and clarity' },
        { name: 'Soft Beige', value: '#f5f5dc', meaning: 'Stability and comfort' },
        { name: 'Misty Gray', value: '#c4c4c4', meaning: 'Neutrality and peace' },
      ],
    },
  };

  const handleColorSelect = (color) => {
    setSelectedColor(color);
    if (onChange) onChange(color);
  };

  return (
    <div style={{ padding: '24px', background: '#ffffff', borderRadius: '16px', boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)', width: '320px' }}>
      <style>{emotionAnimation}</style>
      <div>
        <label style={{ display: 'block', marginBottom: '8px', color: '#4b5563', fontSize: '0.9rem' }}>Emotional State</label>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '8px' }}>
          {Object.entries(emotions).map(([key, { name, icon }]) => (
            <button key={key} onClick={() => setSelectedEmotion(key)} style={{ padding: '8px', background: selectedEmotion === key ? '#f3f4f6' : 'transparent', border: '2px solid', borderColor: selectedEmotion === key ? '#6366f1' : '#e5e7eb', borderRadius: '6px', cursor: 'pointer', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px', transition: 'all 0.2s ease' }}>
              <span style={{ fontSize: '1.5rem', animation: selectedEmotion === key ? 'pulseEmotion 2s infinite' : 'none' }}>{icon}</span>
              <span style={{ fontSize: '0.8rem', color: '#4b5563', textAlign: 'center' }}>{name}</span>
            </button>
          ))}
        </div>
      </div>
      <div style={{ padding: '12px', background: '#f3f4f6', borderRadius: '8px', marginBottom: '24px', animation: 'slideIn 0.3s ease-out' }}>{emotions[selectedEmotion].description}</div>
      <div style={{ display: 'grid', gap: '12px', marginBottom: '24px' }}>
        {emotions[selectedEmotion].colors.map((color) => (
          <button key={color.value} onClick={() => handleColorSelect(color.value)} style={{ display: 'grid', gridTemplateColumns: '48px 1fr', gap: '12px', padding: '8px', background: '#f9fafb', border: '2px solid', borderColor: selectedColor === color.value ? '#6366f1' : 'transparent', borderRadius: '8px', cursor: 'pointer', alignItems: 'center' }}>
            <div style={{ width: '48px', height: '48px', background: color.value, borderRadius: '6px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }} />
            <div>
              <div style={{ fontSize: '0.9rem', color: '#1f2937', fontWeight: 500, marginBottom: '2px' }}>{color.name}</div>
              <div style={{ fontSize: '0.8rem', color: '#6b7280' }}>{color.meaning}</div>
            </div>
          </button>
        ))}
      </div>
      <div style={{ padding: '12px', background: '#f3f4f6', borderRadius: '8px', display: 'flex', alignItems: 'center', gap: '12px' }}>
        <div style={{ width: '40px', height: '40px', borderRadius: '6px', background: selectedColor, boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }} />
        <input type="text" value={selectedColor} onChange={(e) => handleColorSelect(e.target.value)} style={{ flex: 1, padding: '8px', border: '2px solid #e5e7eb', borderRadius: '6px', fontSize: '0.9rem', color: '#4b5563', fontFamily: 'monospace', background: '#ffffff' }} />
      </div>
    </div>
  );
};

export default ColorPicker_26;
