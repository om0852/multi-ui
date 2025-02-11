 'use client';
import React, { useState } from 'react';

const gameAnimation = `
  @keyframes pixelate {
    0% { transform: scale(1); }
    50% { transform: scale(1.1); }
    100% { transform: scale(1); }
  }

  @keyframes powerUp {
    0% { filter: brightness(1); }
    50% { filter: brightness(1.3); }
    100% { filter: brightness(1); }
  }
`;

interface GameTheme {
  name: string;
  genre: string;
  icon: string;
  description: string;
  colors: Array<{
    name: string;
    value: string;
    element: string;
  }>;
}

const ColorPicker_40: React.FC<{ onChange?: (color: string) => void }> = ({ onChange }) => {
  const [selectedTheme, setSelectedTheme] = useState<string>('retro');
  const [selectedColor, setSelectedColor] = useState<string>('#e60012');

  const gameThemes: { [key: string]: GameTheme } = {
    retro: {
      name: 'Classic Nintendo',
      genre: 'Retro Gaming',
      icon: '🎮',
      description: 'Iconic colors from Nintendo classics',
      colors: [
        { name: 'Mario Red', value: '#e60012', element: 'Mario\'s cap' },
        { name: 'Link Green', value: '#00a859', element: 'Hero\'s tunic' },
        { name: 'Star Yellow', value: '#ffd700', element: 'Power star' },
        { name: 'Mushroom Spot', value: '#ff4444', element: 'Power-up' },
        { name: 'Block Brown', value: '#8b4513', element: 'Question block' },
      ],
    },
    playstation: {
      name: 'PlayStation',
      genre: 'Modern Console',
      icon: '🕹️',
      description: 'Colors from PlayStation franchises',
      colors: [
        { name: 'PS Blue', value: '#003791', element: 'Brand color' },
        { name: 'Crash Orange', value: '#ff6b00', element: 'Bandicoot fur' },
        { name: 'Drake Sand', value: '#c2b280', element: 'Uncharted terrain' },
        { name: 'Kratos Red', value: '#ff0000', element: 'Blades of Chaos' },
        { name: 'Shadow Black', value: '#1a1a1a', element: 'Colossus fur' },
      ],
    },
    fantasy: {
      name: 'Fantasy RPG',
      genre: 'Role Playing',
      icon: '⚔️',
      description: 'Colors from magical realms',
      colors: [
        { name: 'Mana Blue', value: '#4169e1', element: 'Magic energy' },
        { name: 'Dragon Scale', value: '#2e8b57', element: 'Ancient beast' },
        { name: 'Guild Gold', value: '#ffd700', element: 'Rare loot' },
        { name: 'Potion Red', value: '#ff1493', element: 'Health restore' },
        { name: 'Shadow Purple', value: '#483d8b', element: 'Dark magic' },
      ],
    },
    scifi: {
      name: 'Sci-Fi Future',
      genre: 'Science Fiction',
      icon: '🚀',
      description: 'Colors of futuristic worlds',
      colors: [
        { name: 'Neon Blue', value: '#00ffff', element: 'Hologram' },
        { name: 'Plasma Green', value: '#39ff14', element: 'Energy beam' },
        { name: 'Tech Gray', value: '#1a1a1a', element: 'Ship hull' },
        { name: 'Warning Red', value: '#ff4500', element: 'Alert status' },
        { name: 'Shield Purple', value: '#9400d3', element: 'Force field' },
      ],
    },
    racing: {
      name: 'Racing Games',
      genre: 'Sports & Racing',
      icon: '🏎️',
      description: 'Colors from the racetrack',
      colors: [
        { name: 'Speed Red', value: '#ff0000', element: 'Sports car' },
        { name: 'Track Gray', value: '#808080', element: 'Asphalt' },
        { name: 'Nitro Blue', value: '#0000ff', element: 'Boost effect' },
        { name: 'Warning Yellow', value: '#ffff00', element: 'Caution flag' },
        { name: 'Carbon Black', value: '#1a1a1a', element: 'Carbon fiber' },
      ],
    },
    survival: {
      name: 'Survival Horror',
      genre: 'Horror',
      icon: '🧟',
      description: 'Colors of fear and darkness',
      colors: [
        { name: 'Blood Red', value: '#8b0000', element: 'Gore effects' },
        { name: 'Shadow Black', value: '#1a1a1a', element: 'Dark corners' },
        { name: 'Fog Gray', value: '#708090', element: 'Atmosphere' },
        { name: 'Toxic Green', value: '#00ff00', element: 'Mutant glow' },
        { name: 'Rust Brown', value: '#8b4513', element: 'Decay' },
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
      <style>{gameAnimation}</style>

      {/* Theme selector */}
      <div style={{
        marginBottom: '24px',
      }}>
        <label style={{
          display: 'block',
          marginBottom: '8px',
          color: '#e5e7eb',
          fontSize: '0.9rem',
        }}>
          Game Theme
        </label>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '8px',
        }}>
          {Object.entries(gameThemes).map(([key, { name, icon }]) => (
            <button
              key={key}
              onClick={() => setSelectedTheme(key)}
              style={{
                padding: '12px 8px',
                background: selectedTheme === key ? '#2d2d2d' : 'transparent',
                border: '2px solid',
                borderColor: selectedTheme === key ? '#6366f1' : '#4b5563',
                borderRadius: '6px',
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '4px',
                animation: selectedTheme === key ? 'pixelate 1s infinite' : 'none',
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
                fontWeight: selectedTheme === key ? 500 : 400,
              }}>
                {name}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Theme info */}
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
          {gameThemes[selectedTheme].genre}
        </div>
        <div style={{
          fontSize: '0.9rem',
          color: '#e5e7eb',
        }}>
          {gameThemes[selectedTheme].description}
        </div>
      </div>

      {/* Color palette */}
      <div style={{
        display: 'grid',
        gap: '12px',
        marginBottom: '24px',
      }}>
        {gameThemes[selectedTheme].colors.map((color) => (
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
              animation: selectedColor === color.value ? 'powerUp 1s infinite' : 'none',
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
                {color.element}
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

export default ColorPicker_40;