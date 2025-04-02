'use client';
import React, { useState } from 'react';

const gemAnimation = `
  @keyframes sparkle {
    0%, 100% { filter: brightness(1); }
    50% { filter: brightness(1.3); }
  }

  @keyframes rotate {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
`;

interface GemTheme {
  name: string;
  type: string;
  icon: string;
  description: string;
  colors: Array<{
    name: string;
    value: string;
    variety: string;
  }>;
}

const ColorPicker_42: React.FC<{ onChange?: (color: string) => void }> = ({ onChange }) => {
  const [selectedGem, setSelectedGem] = useState<string>('ruby');
  const [selectedColor, setSelectedColor] = useState<string>('#e0115f');

  const gemThemes: { [key: string]: GemTheme } = {
    ruby: {
      name: 'Ruby',
      type: 'Precious Stone',
      icon: '💎',
      description: 'Deep reds of the king of gems',
      colors: [
        { name: 'Pigeon Blood', value: '#e0115f', variety: 'Burmese Ruby' },
        { name: 'Rose Red', value: '#c21e56', variety: 'Thai Ruby' },
        { name: 'Wine Red', value: '#722f37', variety: 'African Ruby' },
        { name: 'Pink Flash', value: '#ff69b4', variety: 'Sri Lankan Ruby' },
        { name: 'Deep Crimson', value: '#dc143c', variety: 'Mozambique Ruby' },
      ],
    },
    sapphire: {
      name: 'Sapphire',
      type: 'Precious Stone',
      icon: '💠',
      description: 'Royal blues of corundum',
      colors: [
        { name: 'Kashmir Blue', value: '#0066cc', variety: 'Kashmir Sapphire' },
        { name: 'Ceylon Blue', value: '#4169e1', variety: 'Sri Lankan Sapphire' },
        { name: 'Royal Blue', value: '#002366', variety: 'Burma Sapphire' },
        { name: 'Star Blue', value: '#4682b4', variety: 'Star Sapphire' },
        { name: 'Cornflower', value: '#6495ed', variety: 'Montana Sapphire' },
      ],
    },
    emerald: {
      name: 'Emerald',
      type: 'Precious Stone',
      icon: '🟢',
      description: 'Lush greens of beryl',
      colors: [
        { name: 'Colombian Green', value: '#046307', variety: 'Colombian Emerald' },
        { name: 'Muzo Green', value: '#50c878', variety: 'Muzo Mine' },
        { name: 'Forest Green', value: '#228b22', variety: 'Zambian Emerald' },
        { name: 'Vivid Green', value: '#00a550', variety: 'Brazilian Emerald' },
        { name: 'Garden Green', value: '#355e3b', variety: 'Russian Emerald' },
      ],
    },
    opal: {
      name: 'Opal',
      type: 'Precious Stone',
      icon: '🌈',
      description: 'Play of colors in silica',
      colors: [
        { name: 'Fire Flash', value: '#ff4500', variety: 'Fire Opal' },
        { name: 'Aurora Blue', value: '#40e0d0', variety: 'Black Opal' },
        { name: 'Pearl White', value: '#faebd7', variety: 'White Opal' },
        { name: 'Rainbow Pink', value: '#ff69b4', variety: 'Pink Opal' },
        { name: 'Galaxy Blue', value: '#191970', variety: 'Boulder Opal' },
      ],
    },
    amethyst: {
      name: 'Amethyst',
      type: 'Semi-Precious',
      icon: '🟣',
      description: 'Purple hues of quartz',
      colors: [
        { name: 'Royal Purple', value: '#7b1fa2', variety: 'Siberian Amethyst' },
        { name: 'Deep Violet', value: '#9400d3', variety: 'Uruguay Amethyst' },
        { name: 'Rose de France', value: '#dda0dd', variety: 'Brazilian Amethyst' },
        { name: 'Grape Purple', value: '#4b0082', variety: 'African Amethyst' },
        { name: 'Lavender', value: '#e6e6fa', variety: 'Vera Cruz Amethyst' },
      ],
    },
    topaz: {
      name: 'Topaz',
      type: 'Semi-Precious',
      icon: '✨',
      description: 'Brilliant colors of fluorine aluminium silicate',
      colors: [
        { name: 'Imperial', value: '#ff9966', variety: 'Imperial Topaz' },
        { name: 'London Blue', value: '#0066cc', variety: 'Blue Topaz' },
        { name: 'Champagne', value: '#fad6a5', variety: 'Precious Topaz' },
        { name: 'Swiss Blue', value: '#00bfff', variety: 'Treated Topaz' },
        { name: 'Sherry', value: '#b8860b', variety: 'Natural Topaz' },
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
      <style>{gemAnimation}</style>

      {/* Gem selector */}
      <div style={{
        marginBottom: '24px',
      }}>
        <label style={{
          display: 'block',
          marginBottom: '8px',
          color: '#e5e7eb',
          fontSize: '0.9rem',
        }}>
          Gemstone
        </label>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '8px',
        }}>
          {Object.entries(gemThemes).map(([key, { name, icon }]) => (
            <button
              key={key}
              onClick={() => setSelectedGem(key)}
              style={{
                padding: '12px 8px',
                background: selectedGem === key ? '#2d2d2d' : 'transparent',
                border: '2px solid',
                borderColor: selectedGem === key ? '#6366f1' : '#4b5563',
                borderRadius: '6px',
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '4px',
                animation: selectedGem === key ? 'sparkle 1.5s infinite' : 'none',
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
                fontWeight: selectedGem === key ? 500 : 400,
              }}>
                {name}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Gem info */}
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
          {gemThemes[selectedGem].type}
        </div>
        <div style={{
          fontSize: '0.9rem',
          color: '#e5e7eb',
        }}>
          {gemThemes[selectedGem].description}
        </div>
      </div>

      {/* Color palette */}
      <div style={{
        display: 'grid',
        gap: '12px',
        marginBottom: '24px',
      }}>
        {gemThemes[selectedGem].colors.map((color) => (
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
              animation: selectedColor === color.value ? 'rotate 3s linear infinite' : 'none',
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
                {color.variety}
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

export default ColorPicker_42; 