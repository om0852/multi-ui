'use client';
import React, { useState } from 'react';

const artAnimation = `
  @keyframes brushStroke {
    0% { transform: scaleX(1); }
    50% { transform: scaleX(1.1); }
    100% { transform: scaleX(1); }
  }

  @keyframes fadeSlide {
    from { opacity: 0; transform: translateX(-10px); }
    to { opacity: 1; transform: translateX(0); }
  }
`;

interface ArtMovement {
  name: string;
  period: string;
  description: string;
  artist: string;
  colors: Array<{
    name: string;
    value: string;
    usage: string;
  }>;
}

const ColorPicker_27: React.FC<{ onChange?: (color: string) => void }> = ({ onChange }) => {
  const [selectedMovement, setSelectedMovement] = useState<string>('impressionism');
  const [selectedColor, setSelectedColor] = useState<string>('#ffd700');

  const artMovements: { [key: string]: ArtMovement } = {
    impressionism: {
      name: 'Impressionism',
      period: '1867-1886',
      description: 'Capturing light and its changing qualities',
      artist: 'Claude Monet',
      colors: [
        { name: 'Sunlit Yellow', value: '#ffd700', usage: 'Sunlight and brightness' },
        { name: 'Sky Blue', value: '#87ceeb', usage: 'Atmospheric effects' },
        { name: 'Lavender Mist', value: '#e6e6fa', usage: 'Natural shadows' },
        { name: 'Spring Green', value: '#90ee90', usage: 'Vegetation' },
        { name: 'Sunset Orange', value: '#ffa07a', usage: 'Evening light' },
      ],
    },
    artNouveau: {
      name: 'Art Nouveau',
      period: '1890-1910',
      description: 'Organic, flowing lines and natural forms',
      artist: 'Alphonse Mucha',
      colors: [
        { name: 'Gold Leaf', value: '#daa520', usage: 'Decorative elements' },
        { name: 'Deep Green', value: '#006400', usage: 'Plant motifs' },
        { name: 'Burgundy', value: '#800020', usage: 'Rich accents' },
        { name: 'Ivory', value: '#fffff0', usage: 'Background tones' },
        { name: 'Peacock Blue', value: '#33a1c9', usage: 'Flowing patterns' },
      ],
    },
    popart: {
      name: 'Pop Art',
      period: '1950s-1960s',
      description: 'Bold colors and popular culture imagery',
      artist: 'Andy Warhol',
      colors: [
        { name: 'Electric Yellow', value: '#ffff00', usage: 'Vibrant highlights' },
        { name: 'Hot Pink', value: '#ff69b4', usage: 'Bold statements' },
        { name: 'Comic Blue', value: '#0000ff', usage: 'Graphic elements' },
        { name: 'Neon Green', value: '#39ff14', usage: 'Dynamic accents' },
        { name: 'Cherry Red', value: '#ff0000', usage: 'Strong focus points' },
      ],
    },
    minimalism: {
      name: 'Minimalism',
      period: '1960s-1970s',
      description: 'Simple forms and monochromatic schemes',
      artist: 'Frank Stella',
      colors: [
        { name: 'Pure White', value: '#ffffff', usage: 'Clean space' },
        { name: 'Matte Black', value: '#2c2c2c', usage: 'Strong contrast' },
        { name: 'Steel Gray', value: '#71797e', usage: 'Subtle variation' },
        { name: 'Raw Sienna', value: '#d27d2d', usage: 'Natural accent' },
        { name: 'Slate', value: '#708090', usage: 'Neutral balance' },
      ],
    },
    fauvism: {
      name: 'Fauvism',
      period: '1904-1908',
      description: 'Wild, expressive use of intense color',
      artist: 'Henri Matisse',
      colors: [
        { name: 'Vivid Red', value: '#ff4d4d', usage: 'Emotional impact' },
        { name: 'Electric Blue', value: '#0066ff', usage: 'Bold expression' },
        { name: 'Bright Yellow', value: '#ffea00', usage: 'Visual energy' },
        { name: 'Deep Purple', value: '#9400d3', usage: 'Rich contrast' },
        { name: 'Emerald', value: '#50c878', usage: 'Natural vibrancy' },
      ],
    },
    bauhaus: {
      name: 'Bauhaus',
      period: '1919-1933',
      description: 'Geometric forms and primary colors',
      artist: 'Wassily Kandinsky',
      colors: [
        { name: 'Primary Red', value: '#ff0000', usage: 'Basic form' },
        { name: 'Primary Blue', value: '#0000ff', usage: 'Geometric shapes' },
        { name: 'Primary Yellow', value: '#ffff00', usage: 'Essential element' },
        { name: 'Pure Black', value: '#000000', usage: 'Strong structure' },
        { name: 'Clean White', value: '#ffffff', usage: 'Negative space' },
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
      <style>{artAnimation}</style>

      {/* Movement selector */}
      <div style={{
        marginBottom: '24px',
      }}>
        <label style={{
          display: 'block',
          marginBottom: '8px',
          color: '#4b5563',
          fontSize: '0.9rem',
        }}>
          Art Movement
        </label>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '8px',
        }}>
          {Object.entries(artMovements).map(([key, { name }]) => (
            <button
              key={key}
              onClick={() => setSelectedMovement(key)}
              style={{
                padding: '12px 8px',
                background: selectedMovement === key ? '#f3f4f6' : 'transparent',
                border: '2px solid',
                borderColor: selectedMovement === key ? '#6366f1' : '#e5e7eb',
                borderRadius: '6px',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                animation: selectedMovement === key ? 'brushStroke 2s infinite' : 'none',
              }}
            >
              <span style={{
                fontSize: '0.9rem',
                color: '#4b5563',
                fontWeight: selectedMovement === key ? 500 : 400,
              }}>
                {name}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Movement info */}
      <div style={{
        padding: '16px',
        background: '#f3f4f6',
        borderRadius: '8px',
        marginBottom: '24px',
        animation: 'fadeSlide 0.3s ease-out',
      }}>
        <div style={{
          fontSize: '0.8rem',
          color: '#6b7280',
          marginBottom: '4px',
          fontFamily: 'monospace',
        }}>
          {artMovements[selectedMovement].period}
        </div>
        <div style={{
          fontSize: '0.9rem',
          color: '#4b5563',
          marginBottom: '8px',
        }}>
          {artMovements[selectedMovement].description}
        </div>
        <div style={{
          fontSize: '0.8rem',
          color: '#6b7280',
          fontStyle: 'italic',
        }}>
          Notable Artist: {artMovements[selectedMovement].artist}
        </div>
      </div>

      {/* Color palette */}
      <div style={{
        display: 'grid',
        gap: '12px',
        marginBottom: '24px',
      }}>
        {artMovements[selectedMovement].colors.map((color, index) => (
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
              animation: `fadeSlide 0.3s ease-out ${index * 0.1}s`,
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
                {color.usage}
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

export default ColorPicker_27; 