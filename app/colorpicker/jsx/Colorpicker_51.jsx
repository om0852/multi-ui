'use client';
import React, { useState } from 'react';

const musicAnimation = `
  @keyframes vibrate {
    0%, 100% { transform: rotate(-2deg); }
    50% { transform: rotate(2deg); }
  }

  @keyframes pulse {
    0% { transform: scale(1); }
    50% { transform: scale(1.05); }
    100% { transform: scale(1); }
  }
`;

const ColorPicker_51 = ({ onChange }) => {
  const [selectedFamily, setSelectedFamily] = useState('strings');
  const [selectedColor, setSelectedColor] = useState('#8b4513');

  const musicThemes = {
    strings: {
      name: 'Strings',
      family: 'Bowed & Plucked',
      icon: '🎻',
      description: 'Rich tones of string instruments',
      colors: [
        { name: 'Violin Brown', value: '#8b4513', instrument: 'Violin' },
        { name: 'Cello Gold', value: '#daa520', instrument: 'Cello' },
        { name: 'Guitar Amber', value: '#ffbf00', instrument: 'Classical guitar' },
        { name: 'Harp Bronze', value: '#cd7f32', instrument: 'Concert harp' },
        { name: 'Bass Wood', value: '#deb887', instrument: 'Double bass' },
      ],
    },
    brass: {
      name: 'Brass',
      family: 'Metal Wind',
      icon: '🎺',
      description: 'Metallic shades of brass instruments',
      colors: [
        { name: 'Trumpet Gold', value: '#ffd700', instrument: 'Trumpet' },
        { name: 'Trombone Brass', value: '#b8860b', instrument: 'Trombone' },
        { name: 'French Horn Bronze', value: '#cd853f', instrument: 'French horn' },
        { name: 'Tuba Copper', value: '#b87333', instrument: 'Tuba' },
        { name: 'Cornet Shine', value: '#d4af37', instrument: 'Cornet' },
      ],
    },
    woodwind: {
      name: 'Woodwind',
      family: 'Reed & Flute',
      icon: '🎷',
      description: 'Natural tones of woodwinds',
      colors: [
        { name: 'Clarinet Black', value: '#2f4f4f', instrument: 'Clarinet' },
        { name: 'Flute Silver', value: '#c0c0c0', instrument: 'Flute' },
        { name: 'Oboe Wood', value: '#a0522d', instrument: 'Oboe' },
        { name: 'Bassoon Red', value: '#8b0000', instrument: 'Bassoon' },
        { name: 'Saxophone Gold', value: '#ffd700', instrument: 'Saxophone' },
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
      background: '#1a1a1a',
      borderRadius: '16px',
      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
      width: '320px',
    }}>
      <style>{musicAnimation}</style>
      <div style={{ marginBottom: '24px' }}>
        <label style={{
          display: 'block',
          marginBottom: '8px',
          color: '#e5e7eb',
          fontSize: '0.9rem',
        }}>Instrument Family</label>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '8px',
        }}>
          {Object.entries(musicThemes).map(([key, { name, icon }]) => (
            <button
              key={key}
              onClick={() => setSelectedFamily(key)}
              style={{
                padding: '12px 8px',
                background: selectedFamily === key ? '#2d2d2d' : 'transparent',
                border: '2px solid',
                borderColor: selectedFamily === key ? '#6366f1' : '#4b5563',
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
        padding: '12px',
        background: '#2d2d2d',
        borderRadius: '8px',
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
      }}>
        <div style={{
          width: '40px',
          height: '40px',
          borderRadius: '6px',
          background: selectedColor,
        }} />
        <input
          type="text"
          value={selectedColor}
          onChange={(e) => handleColorSelect(e.target.value)}
          style={{
            flex: 1,
            padding: '8px',
            border: '2px solid #4b5563',
            borderRadius: '6px',
            fontSize: '0.9rem',
            color: '#e5e7eb',
            background: '#1f2937',
          }}
        />
      </div>
    </div>
  );
};

export default ColorPicker_51;
