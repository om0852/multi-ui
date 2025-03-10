'use client';
import React, { useState } from 'react';

const seasonalAnimation = `
  @keyframes fadeScale {
    from { opacity: 0; transform: scale(0.95); }
    to { opacity: 1; transform: scale(1); }
  }

  @keyframes leafSway {
    0% { transform: rotate(0deg); }
    50% { transform: rotate(5deg); }
    100% { transform: rotate(0deg); }
  }
`;

interface Theme {
  name: string;
  icon: string;
  description: string;
  colors: Array<{
    name: string;
    value: string;
    inspiration: string;
  }>;
}

const ColorPicker_24: React.FC<{ onChange?: (color: string) => void }> = ({ onChange }) => {
  const [selectedTheme, setSelectedTheme] = useState<string>('spring');
  const [selectedColor, setSelectedColor] = useState<string>('#6366f1');

  const themes: { [key: string]: Theme } = {
    spring: {
      name: 'Spring Bloom',
      icon: '🌸',
      description: 'Fresh and vibrant colors inspired by spring flowers and new growth',
      colors: [
        { name: 'Cherry Blossom', value: '#ffb7c5', inspiration: 'Sakura petals' },
        { name: 'Fresh Leaf', value: '#98fb98', inspiration: 'New growth' },
        { name: 'Daffodil', value: '#fff700', inspiration: 'Spring flowers' },
        { name: 'Morning Sky', value: '#87ceeb', inspiration: 'Clear spring sky' },
        { name: 'Tulip Pink', value: '#ff69b4', inspiration: 'Garden tulips' },
      ],
    },
    summer: {
      name: 'Summer Heat',
      icon: '☀️',
      description: 'Warm and bright colors inspired by summer landscapes',
      colors: [
        { name: 'Ocean Blue', value: '#0077be', inspiration: 'Deep sea' },
        { name: 'Sandy Beach', value: '#f4d03f', inspiration: 'Warm sand' },
        { name: 'Tropical Green', value: '#32cd32', inspiration: 'Lush foliage' },
        { name: 'Sunset Orange', value: '#ff7f50', inspiration: 'Evening sky' },
        { name: 'Coral Pink', value: '#ff7f7f', inspiration: 'Ocean reefs' },
      ],
    },
    autumn: {
      name: 'Autumn Harvest',
      icon: '🍁',
      description: 'Rich and warm colors inspired by fall foliage',
      colors: [
        { name: 'Maple Red', value: '#c41e3a', inspiration: 'Fall leaves' },
        { name: 'Harvest Gold', value: '#e6b325', inspiration: 'Wheat fields' },
        { name: 'Forest Green', value: '#228b22', inspiration: 'Pine trees' },
        { name: 'Pumpkin', value: '#ff7518', inspiration: 'Autumn gourds' },
        { name: 'Russet Brown', value: '#8b4513', inspiration: 'Tree bark' },
      ],
    },
    winter: {
      name: 'Winter Frost',
      icon: '❄️',
      description: 'Cool and serene colors inspired by winter landscapes',
      colors: [
        { name: 'Ice Blue', value: '#a5f2f3', inspiration: 'Frozen lakes' },
        { name: 'Snow White', value: '#fffafa', inspiration: 'Fresh snow' },
        { name: 'Evergreen', value: '#165b33', inspiration: 'Winter pines' },
        { name: 'Berry Red', value: '#8b0000', inspiration: 'Winter berries' },
        { name: 'Twilight Blue', value: '#4a4e69', inspiration: 'Winter sky' },
      ],
    },
    forest: {
      name: 'Deep Forest',
      icon: '🌲',
      description: 'Rich and earthy colors inspired by woodland scenes',
      colors: [
        { name: 'Moss Green', value: '#8fbc8f', inspiration: 'Forest floor' },
        { name: 'Bark Brown', value: '#8b4513', inspiration: 'Tree trunks' },
        { name: 'Fern Green', value: '#4f7942', inspiration: 'Undergrowth' },
        { name: 'Mushroom Gray', value: '#c4aead', inspiration: 'Forest fungi' },
        { name: 'Wild Berry', value: '#904c77', inspiration: 'Forest fruits' },
      ],
    },
    ocean: {
      name: 'Ocean Depths',
      icon: '🌊',
      description: 'Deep and mysterious colors inspired by marine life',
      colors: [
        { name: 'Deep Blue', value: '#00008b', inspiration: 'Ocean depths' },
        { name: 'Coral Pink', value: '#ff7f50', inspiration: 'Sea life' },
        { name: 'Seafoam', value: '#98ff98', inspiration: 'Wave crests' },
        { name: 'Teal', value: '#008080', inspiration: 'Shallow waters' },
        { name: 'Pearl White', value: '#f5f5f5', inspiration: 'Sea shells' },
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
      <style>{seasonalAnimation}</style>

      {/* Theme selector */}
      <div style={{
        marginBottom: '24px',
      }}>
        <label style={{
          display: 'block',
          marginBottom: '8px',
          color: '#4b5563',
          fontSize: '0.9rem',
        }}>
          Nature Theme
        </label>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '8px',
        }}>
          {Object.entries(themes).map(([key, { name, icon }]) => (
            <button
              key={key}
              onClick={() => setSelectedTheme(key)}
              style={{
                padding: '8px',
                background: selectedTheme === key ? '#f3f4f6' : 'transparent',
                border: '2px solid',
                borderColor: selectedTheme === key ? '#6366f1' : '#e5e7eb',
                borderRadius: '6px',
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '4px',
                transition: 'all 0.2s ease',
              }}
            >
              <span style={{
                fontSize: '1.5rem',
                animation: selectedTheme === key ? 'leafSway 2s ease-in-out infinite' : 'none',
              }}>
                {icon}
              </span>
              <span style={{
                fontSize: '0.8rem',
                color: '#4b5563',
              }}>
                {name}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Theme description */}
      <div style={{
        padding: '12px',
        background: '#f3f4f6',
        borderRadius: '8px',
        marginBottom: '24px',
        fontSize: '0.9rem',
        color: '#4b5563',
        animation: 'fadeScale 0.3s ease-out',
      }}>
        {themes[selectedTheme].description}
      </div>

      {/* Color palette */}
      <div style={{
        display: 'grid',
        gap: '12px',
        marginBottom: '24px',
      }}>
        {themes[selectedTheme].colors.map((color, index) => (
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
              animation: `fadeScale 0.3s ease-out ${index * 0.1}s`,
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
                {color.inspiration}
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

export default ColorPicker_24; 