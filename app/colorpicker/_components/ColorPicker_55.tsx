 'use client';
import React, { useState } from 'react';

const techAnimation = `
  @keyframes glow {
    0% { filter: brightness(1); }
    50% { filter: brightness(1.3); }
    100% { filter: brightness(1); }
  }

  @keyframes pixel {
    0% { transform: scale(1); }
    25% { transform: scale(1.1); }
    50% { transform: scale(1); }
    75% { transform: scale(0.9); }
    100% { transform: scale(1); }
  }
`;

interface TechTheme {
  name: string;
  platform: string;
  icon: string;
  description: string;
  colors: Array<{
    name: string;
    value: string;
    element: string;
  }>;
}

const ColorPicker_55: React.FC<{ onChange?: (color: string) => void }> = ({ onChange }) => {
  const [selectedPlatform, setSelectedPlatform] = useState<string>('cyberpunk');
  const [selectedColor, setSelectedColor] = useState<string>('#00ff00');

  const techThemes: { [key: string]: TechTheme } = {
    cyberpunk: {
      name: 'Cyberpunk',
      platform: 'Sci-Fi Gaming',
      icon: '🌆',
      description: 'Neon-lit future aesthetics',
      colors: [
        { name: 'Matrix Green', value: '#00ff00', element: 'Digital rain' },
        { name: 'Neon Pink', value: '#ff1493', element: 'Hologram' },
        { name: 'Cyber Blue', value: '#00ffff', element: 'Interface' },
        { name: 'Night Black', value: '#1a1a1a', element: 'Dark city' },
        { name: 'Electric Purple', value: '#9400d3', element: 'Neon signs' },
      ],
    },
    retro: {
      name: 'Retro Gaming',
      platform: '8-bit Era',
      icon: '👾',
      description: 'Classic arcade colors',
      colors: [
        { name: 'Pixel Red', value: '#ff0000', element: 'Game character' },
        { name: 'Console Gray', value: '#808080', element: 'Game system' },
        { name: 'Screen Green', value: '#32cd32', element: 'Game display' },
        { name: 'Power Blue', value: '#0000ff', element: 'Power LED' },
        { name: 'Score Yellow', value: '#ffff00', element: 'High score' },
      ],
    },
    modern: {
      name: 'Modern Tech',
      platform: 'Contemporary',
      icon: '📱',
      description: 'Current tech aesthetics',
      colors: [
        { name: 'Apple White', value: '#f5f5f5', element: 'Device body' },
        { name: 'Android Green', value: '#a4c639', element: 'OS theme' },
        { name: 'Dark Mode', value: '#2c2c2c', element: 'UI theme' },
        { name: 'Accent Blue', value: '#007aff', element: 'Buttons' },
        { name: 'Status Red', value: '#ff3b30', element: 'Notifications' },
      ],
    },
    fantasy: {
      name: 'Fantasy RPG',
      platform: 'Role Playing',
      icon: '⚔️',
      description: 'Magical realm colors',
      colors: [
        { name: 'Mana Blue', value: '#4169e1', element: 'Magic power' },
        { name: 'Health Red', value: '#ff0000', element: 'Life bar' },
        { name: 'Experience Gold', value: '#ffd700', element: 'XP points' },
        { name: 'Poison Green', value: '#32cd32', element: 'Status effect' },
        { name: 'Ancient Purple', value: '#800080', element: 'Rare items' },
      ],
    },
    space: {
      name: 'Space Games',
      platform: 'Sci-Fi',
      icon: '🚀',
      description: 'Cosmic gaming palette',
      colors: [
        { name: 'Star White', value: '#ffffff', element: 'Stars' },
        { name: 'Nebula Purple', value: '#9370db', element: 'Space clouds' },
        { name: 'Laser Red', value: '#ff4500', element: 'Weapons' },
        { name: 'Shield Blue', value: '#4169e1', element: 'Force field' },
        { name: 'Void Black', value: '#000000', element: 'Deep space' },
      ],
    },
    racing: {
      name: 'Racing',
      platform: 'Sports',
      icon: '🏎️',
      description: 'High-speed gaming colors',
      colors: [
        { name: 'Speed Red', value: '#ff0000', element: 'Race car' },
        { name: 'Track Gray', value: '#808080', element: 'Race track' },
        { name: 'Nitro Blue', value: '#00ffff', element: 'Boost effect' },
        { name: 'Warning Yellow', value: '#ffff00', element: 'Caution flag' },
        { name: 'Finish White', value: '#ffffff', element: 'Checkered flag' },
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
      <style>{techAnimation}</style>

      {/* Platform selector */}
      <div style={{
        marginBottom: '24px',
      }}>
        <label style={{
          display: 'block',
          marginBottom: '8px',
          color: '#e5e7eb',
          fontSize: '0.9rem',
        }}>
          Gaming Theme
        </label>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '8px',
        }}>
          {Object.entries(techThemes).map(([key, { name, icon }]) => (
            <button
              key={key}
              onClick={() => setSelectedPlatform(key)}
              style={{
                padding: '12px 8px',
                background: selectedPlatform === key ? '#2d2d2d' : 'transparent',
                border: '2px solid',
                borderColor: selectedPlatform === key ? '#6366f1' : '#4b5563',
                borderRadius: '6px',
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '4px',
                animation: selectedPlatform === key ? 'pixel 2s infinite ease-in-out' : 'none',
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
                fontWeight: selectedPlatform === key ? 500 : 400,
              }}>
                {name}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Tech info */}
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
          {techThemes[selectedPlatform].platform}
        </div>
        <div style={{
          fontSize: '0.9rem',
          color: '#e5e7eb',
        }}>
          {techThemes[selectedPlatform].description}
        </div>
      </div>

      {/* Color palette */}
      <div style={{
        display: 'grid',
        gap: '12px',
        marginBottom: '24px',
      }}>
        {techThemes[selectedPlatform].colors.map((color) => (
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
              animation: selectedColor === color.value ? 'glow 2s infinite ease-in-out' : 'none',
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

export default ColorPicker_55;