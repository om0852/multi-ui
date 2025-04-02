'use client';
import React, { useState } from 'react';

const artAnimation = `
  @keyframes brush {
    0% { transform: rotate(0deg) scale(1); }
    25% { transform: rotate(-5deg) scale(1.05); }
    75% { transform: rotate(5deg) scale(0.95); }
    100% { transform: rotate(0deg) scale(1); }
  }

  @keyframes palette {
    0% { filter: saturate(1); }
    50% { filter: saturate(1.3); }
    100% { filter: saturate(1); }
  }
`;

interface ArtTheme {
  name: string;
  style: string;
  icon: string;
  description: string;
  colors: Array<{
    name: string;
    value: string;
    medium: string;
  }>;
}

const ColorPicker_48: React.FC<{ onChange?: (color: string) => void }> = ({ onChange }) => {
  const [selectedStyle, setSelectedStyle] = useState<string>('impressionism');
  const [selectedColor, setSelectedColor] = useState<string>('#4682b4');

  const artThemes: { [key: string]: ArtTheme } = {
    impressionism: {
      name: 'Impressionism',
      style: '19th Century',
      icon: '🎨',
      description: 'Light and atmospheric colors',
      colors: [
        { name: 'Monet Blue', value: '#4682b4', medium: 'Water lilies' },
        { name: 'Sunlit Yellow', value: '#ffd700', medium: 'Haystacks' },
        { name: 'Garden Green', value: '#98fb98', medium: 'Spring gardens' },
        { name: 'Sunset Orange', value: '#ffa07a', medium: 'Evening sky' },
        { name: 'Lavender Mist', value: '#e6e6fa', medium: 'Morning light' },
      ],
    },
    renaissance: {
      name: 'Renaissance',
      style: '15th-16th Century',
      icon: '👨‍🎨',
      description: 'Rich, classical pigments',
      colors: [
        { name: 'Venetian Red', value: '#c71585', medium: 'Oil paint' },
        { name: 'Ultramarine', value: '#120a8f', medium: 'Lapis lazuli' },
        { name: 'Verdigris', value: '#43b3ae', medium: 'Copper patina' },
        { name: 'Ochre', value: '#cc7722', medium: 'Earth pigment' },
        { name: 'Lead White', value: '#fffaf0', medium: 'Lead carbonate' },
      ],
    },
    modernism: {
      name: 'Modernism',
      style: '20th Century',
      icon: '🎯',
      description: 'Bold, abstract colors',
      colors: [
        { name: 'Mondrian Red', value: '#ff0000', medium: 'Primary color' },
        { name: 'Kandinsky Blue', value: '#0000ff', medium: 'Geometric forms' },
        { name: 'Bauhaus Yellow', value: '#ffff00', medium: 'Color theory' },
        { name: 'Cubist Gray', value: '#808080', medium: 'Fragmented forms' },
        { name: 'Abstract Black', value: '#000000', medium: 'Negative space' },
      ],
    },
    postimpressionism: {
      name: 'Post-Impressionism',
      style: 'Late 19th Century',
      icon: '🌻',
      description: 'Emotional, expressive colors',
      colors: [
        { name: 'Van Gogh Yellow', value: '#ffd700', medium: 'Sunflowers' },
        { name: 'Starry Blue', value: '#4169e1', medium: 'Night sky' },
        { name: 'Cypress Green', value: '#013220', medium: 'Dark trees' },
        { name: 'Café Brown', value: '#8b4513', medium: 'Wooden chairs' },
        { name: 'Wheat Field', value: '#f5deb3', medium: 'Summer fields' },
      ],
    },
    surrealism: {
      name: 'Surrealism',
      style: '20th Century',
      icon: '🌙',
      description: 'Dreamlike color palettes',
      colors: [
        { name: 'Dream Blue', value: '#4b0082', medium: 'Night scenes' },
        { name: 'Melting Gold', value: '#daa520', medium: 'Soft watches' },
        { name: 'Desert Rose', value: '#ff69b4', medium: 'Strange flowers' },
        { name: 'Cloud White', value: '#f0f8ff', medium: 'Sky elements' },
        { name: 'Shadow Black', value: '#1a1a1a', medium: 'Dark symbols' },
      ],
    },
    contemporary: {
      name: 'Contemporary',
      style: '21st Century',
      icon: '🎪',
      description: 'Vibrant modern colors',
      colors: [
        { name: 'Neon Pink', value: '#ff1493', medium: 'Digital art' },
        { name: 'Electric Blue', value: '#00ffff', medium: 'LED lights' },
        { name: 'Urban Gray', value: '#696969', medium: 'Street art' },
        { name: 'Tech Green', value: '#39ff14', medium: 'Screen glow' },
        { name: 'Mixed Media', value: '#ff4500', medium: 'Installations' },
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
      <style>{artAnimation}</style>

      {/* Art style selector */}
      <div style={{
        marginBottom: '24px',
      }}>
        <label style={{
          display: 'block',
          marginBottom: '8px',
          color: '#e5e7eb',
          fontSize: '0.9rem',
        }}>
          Art Movement
        </label>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '8px',
        }}>
          {Object.entries(artThemes).map(([key, { name, icon }]) => (
            <button
              key={key}
              onClick={() => setSelectedStyle(key)}
              style={{
                padding: '12px 8px',
                background: selectedStyle === key ? '#2d2d2d' : 'transparent',
                border: '2px solid',
                borderColor: selectedStyle === key ? '#6366f1' : '#4b5563',
                borderRadius: '6px',
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '4px',
                animation: selectedStyle === key ? 'brush 2s infinite ease-in-out' : 'none',
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
                fontWeight: selectedStyle === key ? 500 : 400,
              }}>
                {name}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Art info */}
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
          {artThemes[selectedStyle].style}
        </div>
        <div style={{
          fontSize: '0.9rem',
          color: '#e5e7eb',
        }}>
          {artThemes[selectedStyle].description}
        </div>
      </div>

      {/* Color palette */}
      <div style={{
        display: 'grid',
        gap: '12px',
        marginBottom: '24px',
      }}>
        {artThemes[selectedStyle].colors.map((color) => (
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
              animation: selectedColor === color.value ? 'palette 2s infinite ease-in-out' : 'none',
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
                {color.medium}
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

export default ColorPicker_48; 