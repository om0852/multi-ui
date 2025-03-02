'use client';
import React, { useState } from 'react';

const gemAnimation = `
  @keyframes sparkle {
    0% { transform: scale(1) rotate(0deg); }
    25% { transform: scale(1.1) rotate(5deg); }
    50% { transform: scale(1) rotate(0deg); }
    75% { transform: scale(1.1) rotate(-5deg); }
    100% { transform: scale(1) rotate(0deg); }
  }

  @keyframes shimmer {
    from { opacity: 0.7; }
    to { opacity: 1; }
  }
`;

interface GemType {
  name: string;
  category: string;
  hardness: string;
  description: string;
  colors: Array<{
    name: string;
    value: string;
    variety: string;
  }>;
}

const ColorPicker_31: React.FC<{ onChange?: (color: string) => void }> = ({ onChange }) => {
  const [selectedGem, setSelectedGem] = useState<string>('ruby');
  const [selectedColor, setSelectedColor] = useState<string>('#e53e3e');

  const gemTypes: { [key: string]: GemType } = {
    ruby: {
      name: 'Ruby',
      category: 'Corundum',
      hardness: '9.0 Mohs',
      description: 'The king of gems, known for its deep red color',
      colors: [
        { name: 'Pigeon Blood', value: '#e53e3e', variety: 'Burmese Ruby' },
        { name: 'Rose Red', value: '#f56565', variety: 'Thai Ruby' },
        { name: 'Purple Red', value: '#c53030', variety: 'Mozambique Ruby' },
        { name: 'Raspberry', value: '#feb2b2', variety: 'Sri Lankan Ruby' },
        { name: 'Deep Crimson', value: '#9b2c2c', variety: 'Madagascar Ruby' },
      ],
    },
    sapphire: {
      name: 'Sapphire',
      category: 'Corundum',
      hardness: '9.0 Mohs',
      description: 'Classic blue gem with royal heritage',
      colors: [
        { name: 'Royal Blue', value: '#2c5282', variety: 'Kashmir Sapphire' },
        { name: 'Cornflower', value: '#4299e1', variety: 'Ceylon Sapphire' },
        { name: 'Ocean Blue', value: '#2b6cb0', variety: 'Australian Sapphire' },
        { name: 'Star Blue', value: '#63b3ed', variety: 'Star Sapphire' },
        { name: 'Midnight', value: '#1a365d', variety: 'Montana Sapphire' },
      ],
    },
    emerald: {
      name: 'Emerald',
      category: 'Beryl',
      hardness: '7.5-8.0 Mohs',
      description: 'Prized green gem with garden-fresh color',
      colors: [
        { name: 'Colombian Green', value: '#276749', variety: 'Colombian Emerald' },
        { name: 'Forest Green', value: '#2f855a', variety: 'Zambian Emerald' },
        { name: 'Spring Green', value: '#48bb78', variety: 'Brazilian Emerald' },
        { name: 'Mint', value: '#9ae6b4', variety: 'Pakistani Emerald' },
        { name: 'Deep Green', value: '#22543d', variety: 'Russian Emerald' },
      ],
    },
    diamond: {
      name: 'Diamond',
      category: 'Diamond',
      hardness: '10.0 Mohs',
      description: 'Pure carbon crystals with exceptional brilliance',
      colors: [
        { name: 'Ice White', value: '#f7fafc', variety: 'Type IIa' },
        { name: 'Canary Yellow', value: '#faf089', variety: 'Fancy Yellow' },
        { name: 'Pink Heart', value: '#fbb6ce', variety: 'Fancy Pink' },
        { name: 'Ocean Blue', value: '#90cdf4', variety: 'Fancy Blue' },
        { name: 'Champagne', value: '#f6e05e', variety: 'Light Brown' },
      ],
    },
    opal: {
      name: 'Opal',
      category: 'Opal',
      hardness: '5.5-6.5 Mohs',
      description: 'Play-of-color phenomenon gem',
      colors: [
        { name: 'Fire Flash', value: '#fc8181', variety: 'Fire Opal' },
        { name: 'Rainbow White', value: '#e2e8f0', variety: 'White Opal' },
        { name: 'Ocean Play', value: '#4fd1c5', variety: 'Black Opal' },
        { name: 'Aurora', value: '#b794f4', variety: 'Crystal Opal' },
        { name: 'Sunset', value: '#f6ad55', variety: 'Boulder Opal' },
      ],
    },
    amethyst: {
      name: 'Amethyst',
      category: 'Quartz',
      hardness: '7.0 Mohs',
      description: 'Purple variety of crystalline quartz',
      colors: [
        { name: 'Royal Purple', value: '#6b46c1', variety: 'Siberian Amethyst' },
        { name: 'Lavender', value: '#9f7aea', variety: 'Rose de France' },
        { name: 'Deep Purple', value: '#553c9a', variety: 'Uruguay Amethyst' },
        { name: 'Violet', value: '#805ad5', variety: 'Brazilian Amethyst' },
        { name: 'Light Purple', value: '#d6bcfa', variety: 'Mexican Amethyst' },
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
      background: '#ffffff',
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
          color: '#4b5563',
          fontSize: '0.9rem',
        }}>
          Precious Gem
        </label>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '8px',
        }}>
          {Object.entries(gemTypes).map(([key, { name }]) => (
            <button
              key={key}
              onClick={() => setSelectedGem(key)}
              style={{
                padding: '12px 8px',
                background: selectedGem === key ? '#f3f4f6' : 'transparent',
                border: '2px solid',
                borderColor: selectedGem === key ? '#6366f1' : '#e5e7eb',
                borderRadius: '6px',
                cursor: 'pointer',
                animation: selectedGem === key ? 'sparkle 2s infinite' : 'none',
              }}
            >
              <span style={{
                fontSize: '0.9rem',
                color: '#4b5563',
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
        background: '#f3f4f6',
        borderRadius: '8px',
        marginBottom: '24px',
        animation: 'shimmer 0.3s ease-out',
      }}>
        <div style={{
          fontSize: '0.8rem',
          color: '#6b7280',
          marginBottom: '4px',
          fontFamily: 'monospace',
        }}>
          {gemTypes[selectedGem].category} • {gemTypes[selectedGem].hardness}
        </div>
        <div style={{
          fontSize: '0.9rem',
          color: '#4b5563',
        }}>
          {gemTypes[selectedGem].description}
        </div>
      </div>

      {/* Color palette */}
      <div style={{
        display: 'grid',
        gap: '12px',
        marginBottom: '24px',
      }}>
        {gemTypes[selectedGem].colors.map((color, index) => (
          <button
            key={color.value}
            onClick={() => handleColorSelect(color.value)}
            style={{
              display: 'grid',
              gridTemplateColumns: '48px 1fr',
              gap: '12px',
              padding: '8px',
              background: '#f9fafb',
              border: '2px solid',
              borderColor: selectedColor === color.value ? '#6366f1' : 'transparent',
              borderRadius: '8px',
              cursor: 'pointer',
              animation: `shimmer 0.3s ease-out ${index * 0.1}s`,
              alignItems: 'center',
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
                color: '#1f2937',
                fontWeight: 500,
                marginBottom: '2px',
              }}>
                {color.name}
              </div>
              <div style={{
                fontSize: '0.8rem',
                color: '#6b7280',
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
        background: '#f3f4f6',
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

export default ColorPicker_31; 