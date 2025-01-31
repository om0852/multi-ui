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

interface SportsLeague {
  name: string;
  sport: string;
  icon: string;
  description: string;
  colors: Array<{
    name: string;
    value: string;
    team: string;
  }>;
}

const ColorPicker_39: React.FC<{ onChange?: (color: string) => void }> = ({ onChange }) => {
  const [selectedLeague, setSelectedLeague] = useState<string>('nba');
  const [selectedColor, setSelectedColor] = useState<string>('#552583');

  const sportsLeagues: { [key: string]: SportsLeague } = {
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
    nfl: {
      name: 'NFL',
      sport: 'American Football',
      icon: '🏈',
      description: 'Bold colors of gridiron teams',
      colors: [
        { name: 'Packers Green', value: '#203731', team: 'Green Bay Packers' },
        { name: 'Cowboys Blue', value: '#003594', team: 'Dallas Cowboys' },
        { name: 'Steelers Gold', value: '#ffb612', team: 'Pittsburgh Steelers' },
        { name: '49ers Red', value: '#aa0000', team: 'San Francisco 49ers' },
        { name: 'Raiders Silver', value: '#a5acaf', team: 'Las Vegas Raiders' },
      ],
    },
    mlb: {
      name: 'MLB',
      sport: 'Baseball',
      icon: '⚾',
      description: 'Traditional colors of baseball',
      colors: [
        { name: 'Yankees Navy', value: '#003087', team: 'New York Yankees' },
        { name: 'Red Sox Red', value: '#bd3039', team: 'Boston Red Sox' },
        { name: 'Dodgers Blue', value: '#005a9c', team: 'LA Dodgers' },
        { name: 'Cubs Blue', value: '#0e3386', team: 'Chicago Cubs' },
        { name: 'Giants Orange', value: '#fd5a1e', team: 'SF Giants' },
      ],
    },
    nhl: {
      name: 'NHL',
      sport: 'Ice Hockey',
      icon: '🏒',
      description: 'Colors from the ice rink',
      colors: [
        { name: 'Canadiens Red', value: '#af1e2d', team: 'Montreal Canadiens' },
        { name: 'Maple Blue', value: '#00205b', team: 'Toronto Maple Leafs' },
        { name: 'Bruins Gold', value: '#ffb81c', team: 'Boston Bruins' },
        { name: 'Rangers Blue', value: '#0038a8', team: 'NY Rangers' },
        { name: 'Kings Silver', value: '#a2aaad', team: 'LA Kings' },
      ],
    },
    laliga: {
      name: 'La Liga',
      sport: 'Football',
      icon: '⚽',
      description: 'Colors of Spanish football',
      colors: [
        { name: 'Madrid White', value: '#ffffff', team: 'Real Madrid' },
        { name: 'Barca Blue', value: '#004d98', team: 'FC Barcelona' },
        { name: 'Atleti Red', value: '#cb3524', team: 'Atletico Madrid' },
        { name: 'Valencia Orange', value: '#f1721b', team: 'Valencia CF' },
        { name: 'Sevilla Red', value: '#d70f21', team: 'Sevilla FC' },
      ],
    },
  };

  const handleColorSelect = (color: string) => {
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
      <style>{sportsAnimation}</style>

      {/* League selector */}
      <div style={{
        marginBottom: '24px',
      }}>
        <label style={{
          display: 'block',
          marginBottom: '8px',
          color: '#e5e7eb',
          fontSize: '0.9rem',
        }}>
          Sports League
        </label>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '8px',
        }}>
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
              <span style={{
                fontSize: '1.5rem',
              }}>
                {icon}
              </span>
              <span style={{
                fontSize: '0.8rem',
                color: '#e5e7eb',
                fontWeight: selectedLeague === key ? 500 : 400,
              }}>
                {name}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* League info */}
      <div style={{
        padding: '16px',
        background: '#2d2d2d',
        borderRadius: '8px',
        marginBottom: '24px',
      }}>
        <div style={{
          fontSize: '0.8rem',
          color: '#9ca3af',
          marginBottom: '4px',
          fontFamily: 'monospace',
        }}>
          {sportsLeagues[selectedLeague].sport}
        </div>
        <div style={{
          fontSize: '0.9rem',
          color: '#e5e7eb',
        }}>
          {sportsLeagues[selectedLeague].description}
        </div>
      </div>

      {/* Color palette */}
      <div style={{
        display: 'grid',
        gap: '12px',
        marginBottom: '24px',
      }}>
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
            <div style={{
              width: '48px',
              height: '48px',
              background: color.value,
              borderRadius: '6px',
              boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
            }} />
            <div style={{
              textAlign: 'left',
            }}>
              <div style={{
                fontSize: '0.9rem',
                color: '#e5e7eb',
                fontWeight: 500,
                marginBottom: '2px',
              }}>
                {color.name}
              </div>
              <div style={{
                fontSize: '0.8rem',
                color: '#9ca3af',
              }}>
                {color.team}
              </div>
            </div>
          </button>
        ))}
      </div>

      {/* Selected color display */}
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
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
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
            fontFamily: 'monospace',
            background: '#1f2937',
          }}
        />
      </div>
    </div>
  );
};

export default ColorPicker_39; 