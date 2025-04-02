'use client';
import React, { useState } from 'react';

const sportsAnimation = `
  @keyframes bounce {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-5px); }
  }

  @keyframes pulse {
    0% { transform: scale(1); }
    50% { transform: scale(1.05); }
    100% { transform: scale(1); }
  }
`;

const ColorPicker_39 = ({ onChange }) => {
  const [selectedLeague, setSelectedLeague] = useState('nba');
  const [selectedColor, setSelectedColor] = useState('#552583');

  const sportsLeagues = {
    nba: {
      name: 'NBA',
      sport: 'Basketball',
      icon: '🏀',
      description: 'Iconic colors of basketball legends',
      colors: [
        { name: 'Lakers Purple', value: '#552583', team: 'Los Angeles Lakers' },
        { name: 'Celtics Green', value: '#007a33', team: 'Boston Celtics' },
        { name: 'Bulls Red', value: '#ce1141', team: 'Chicago Bulls' },
        { name: 'Warriors Blue', value: '#1d428a', team: 'Golden State Warriors' },
        { name: 'Heat Black', value: '#1a1a1a', team: 'Miami Heat' },
      ],
    },
    premier: {
      name: 'Premier League',
      sport: 'Football',
      icon: '⚽',
      description: 'Classic colors of English football',
      colors: [
        { name: 'United Red', value: '#da291c', team: 'Manchester United' },
        { name: 'Chelsea Blue', value: '#034694', team: 'Chelsea FC' },
        { name: 'Arsenal Red', value: '#ef0107', team: 'Arsenal FC' },
        { name: 'City Blue', value: '#6caddf', team: 'Manchester City' },
        { name: 'Liverpool Red', value: '#c8102e', team: 'Liverpool FC' },
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
      <style>{sportsAnimation}</style>
      <div style={{ marginBottom: '24px' }}>
        <label style={{ display: 'block', marginBottom: '8px', color: '#e5e7eb', fontSize: '0.9rem' }}>
          Sports League
        </label>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '8px' }}>
          {Object.entries(sportsLeagues).map(([key, { name, icon }]) => (
            <button
              key={key}
              onClick={() => setSelectedLeague(key)}
              style={{
                padding: '12px 8px',
                background: selectedLeague === key ? '#2d2d2d' : 'transparent',
                border: '2px solid',
                borderColor: selectedLeague === key ? '#6366f1' : '#4b5563',
                borderRadius: '6px',
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '4px',
                animation: selectedLeague === key ? 'bounce 1s infinite' : 'none',
              }}
            >
              <span style={{ fontSize: '1.5rem' }}>{icon}</span>
              <span style={{ fontSize: '0.8rem', color: '#e5e7eb', fontWeight: selectedLeague === key ? 500 : 400 }}>
                {name}
              </span>
            </button>
          ))}
        </div>
      </div>
      <div style={{ padding: '16px', background: '#2d2d2d', borderRadius: '8px', marginBottom: '24px' }}>
        <div style={{ fontSize: '0.8rem', color: '#9ca3af', marginBottom: '4px', fontFamily: 'monospace' }}>
          {sportsLeagues[selectedLeague].sport}
        </div>
        <div style={{ fontSize: '0.9rem', color: '#e5e7eb' }}>
          {sportsLeagues[selectedLeague].description}
        </div>
      </div>
      <div style={{ display: 'grid', gap: '12px', marginBottom: '24px' }}>
        {sportsLeagues[selectedLeague].colors.map((color) => (
          <button
            key={color.value}
            onClick={() => handleColorSelect(color.value)}
            style={{
              display: 'grid',
              gridTemplateColumns: '48px 1fr',
              gap: '12px',
              padding: '8px',
              background: '#2d2d2d',
              border: '2px solid',
              borderColor: selectedColor === color.value ? '#6366f1' : 'transparent',
              borderRadius: '8px',
              cursor: 'pointer',
              alignItems: 'center',
              animation: selectedColor === color.value ? 'pulse 2s infinite' : 'none',
            }}
          >
            <div style={{ width: '48px', height: '48px', background: color.value, borderRadius: '6px' }} />
            <div>
              <div style={{ fontSize: '0.9rem', color: '#e5e7eb', fontWeight: 500 }}>{color.name}</div>
              <div style={{ fontSize: '0.8rem', color: '#9ca3af' }}>{color.team}</div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default ColorPicker_39;
