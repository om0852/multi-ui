'use client';
import React, { useState } from 'react';

const musicAnimation = `
  @keyframes soundWave {
    0% { transform: scaleY(1); }
    50% { transform: scaleY(1.5); }
    100% { transform: scaleY(1); }
  }

  @keyframes vinylSpin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
`;

interface MusicGenre {
  name: string;
  era: string;
  icon: string;
  description: string;
  colors: Array<{
    name: string;
    value: string;
    element: string;
  }>;
}

const ColorPicker_14: React.FC<{ onChange?: (color: string) => void }> = ({ onChange }) => {
  const [selectedGenre, setSelectedGenre] = useState<string>('jazz');
  const [selectedColor, setSelectedColor] = useState<string>('#b8860b');

  const musicGenres: { [key: string]: MusicGenre } = {
    jazz: {
      name: 'Jazz & Blues',
      era: '1920s-Present',
      icon: '🎷',
      description: 'Smooth, soulful colors of late-night jazz clubs',
      colors: [
        { name: 'Brass Gold', value: '#b8860b', element: 'Saxophone shine' },
        { name: 'Midnight Blue', value: '#191970', element: 'Club atmosphere' },
        { name: 'Bourbon Brown', value: '#8b4513', element: 'Wooden stage' },
        { name: 'Smoke Gray', value: '#708090', element: 'Misty ambiance' },
        { name: 'Piano Black', value: '#000000', element: 'Grand piano' },
      ],
    },
    rock: {
      name: 'Rock & Metal',
      era: '1950s-Present',
      icon: '🎸',
      description: 'Bold, electric colors of rock concerts',
      colors: [
        { name: 'Electric Red', value: '#ff0000', element: 'Stage lights' },
        { name: 'Chrome Silver', value: '#c0c0c0', element: 'Guitar strings' },
        { name: 'Leather Black', value: '#1a1a1a', element: 'Jacket texture' },
        { name: 'Neon Blue', value: '#00ffff', element: 'Lightning effects' },
        { name: 'Purple Haze', value: '#4b0082', element: 'Smoke effects' },
      ],
    },
    classical: {
      name: 'Classical',
      era: '1700s-1900s',
      icon: '🎻',
      description: 'Elegant colors of concert halls',
      colors: [
        { name: 'Mahogany Red', value: '#8b0000', element: 'Violin wood' },
        { name: 'Gold Leaf', value: '#daa520', element: 'Ornate frames' },
        { name: 'Velvet Red', value: '#800000', element: 'Theater curtains' },
        { name: 'Ivory White', value: '#fffff0', element: 'Piano keys' },
        { name: 'Bronze Age', value: '#cd853f', element: 'Brass section' },
      ],
    },
    electronic: {
      name: 'Electronic',
      era: '1970s-Present',
      icon: '🎹',
      description: 'Vibrant colors of digital soundscapes',
      colors: [
        { name: 'Neon Pink', value: '#ff1493', element: 'LED lights' },
        { name: 'Cyber Blue', value: '#00ffff', element: 'Digital waves' },
        { name: 'Grid Green', value: '#00ff00', element: 'Matrix patterns' },
        { name: 'UV Purple', value: '#9400d3', element: 'Blacklight glow' },
        { name: 'Tech Black', value: '#0a0a0a', element: 'Digital void' },
      ],
    },
    reggae: {
      name: 'Reggae',
      era: '1960s-Present',
      icon: '🥁',
      description: 'Vibrant colors of Caribbean rhythm',
      colors: [
        { name: 'Rasta Red', value: '#ff0000', element: 'Cultural symbol' },
        { name: 'Island Green', value: '#008000', element: 'Palm leaves' },
        { name: 'Sun Gold', value: '#ffd700', element: 'Tropical light' },
        { name: 'Ocean Blue', value: '#00bfff', element: 'Caribbean sea' },
        { name: 'Earth Brown', value: '#8b4513', element: 'Wooden drums' },
      ],
    },
    hiphop: {
      name: 'Hip Hop',
      era: '1970s-Present',
      icon: '🎤',
      description: 'Urban colors of street culture',
      colors: [
        { name: 'Graffiti Gold', value: '#ffd700', element: 'Street art' },
        { name: 'Concrete Gray', value: '#808080', element: 'City streets' },
        { name: 'Night Black', value: '#0a0a0a', element: 'Urban nights' },
        { name: 'Brick Red', value: '#b22222', element: 'City walls' },
        { name: 'Chain Silver', value: '#c0c0c0', element: 'Bling aesthetic' },
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
      <style>{musicAnimation}</style>

      {/* Genre selector */}
      <div style={{
        marginBottom: '24px',
      }}>
        <label style={{
          display: 'block',
          marginBottom: '8px',
          color: '#e5e7eb',
          fontSize: '0.9rem',
        }}>
          Music Genre
        </label>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '8px',
        }}>
          {Object.entries(musicGenres).map(([key, { name, icon }]) => (
            <button
              key={key}
              onClick={() => setSelectedGenre(key)}
            style={{
                padding: '12px 8px',
                background: selectedGenre === key ? '#2d2d2d' : 'transparent',
                border: '2px solid',
                borderColor: selectedGenre === key ? '#6366f1' : '#4b5563',
              borderRadius: '6px',
              cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '4px',
              }}
            >
              <span style={{
                fontSize: '1.5rem',
                animation: selectedGenre === key ? 'soundWave 1s infinite' : 'none',
              }}>
                {icon}
              </span>
              <span style={{
                fontSize: '0.8rem',
                color: '#e5e7eb',
                fontWeight: selectedGenre === key ? 500 : 400,
              }}>
                {name}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Genre info */}
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
          {musicGenres[selectedGenre].era}
        </div>
        <div style={{
          fontSize: '0.9rem',
          color: '#e5e7eb',
        }}>
          {musicGenres[selectedGenre].description}
        </div>
      </div>

      {/* Color palette */}
      <div style={{
        display: 'grid',
        gap: '12px',
        marginBottom: '24px',
      }}>
        {musicGenres[selectedGenre].colors.map((color) => (
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
            }}
          >
            <div style={{
              width: '48px',
              height: '48px',
              background: color.value,
              borderRadius: '6px',
              boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
              animation: selectedColor === color.value ? 'vinylSpin 4s linear infinite' : 'none',
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

export default ColorPicker_14; 