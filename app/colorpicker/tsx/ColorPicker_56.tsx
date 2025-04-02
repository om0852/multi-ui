'use client';
import React, { useState } from 'react';

const literatureAnimation = `
  @keyframes pageFlip {
    0% { transform: rotateY(0deg); }
    50% { transform: rotateY(15deg); }
    100% { transform: rotateY(0deg); }
  }

  @keyframes inkSpread {
    0% { transform: scale(1); opacity: 1; }
    50% { transform: scale(1.1); opacity: 0.8; }
    100% { transform: scale(1); opacity: 1; }
  }
`;

interface LiteratureTheme {
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

const ColorPicker_56: React.FC<{ onChange?: (color: string) => void }> = ({ onChange }) => {
  const [selectedGenre, setSelectedGenre] = useState<string>('classic');
  const [selectedColor, setSelectedColor] = useState<string>('#8b4513');

  const literatureThemes: { [key: string]: LiteratureTheme } = {
    classic: {
      name: 'Classics',
      genre: 'Literary Fiction',
      icon: '📚',
      description: 'Traditional book elements',
      colors: [
        { name: 'Leather Brown', value: '#8b4513', element: 'Book binding' },
        { name: 'Parchment', value: '#fff8dc', element: 'Page color' },
        { name: 'Ink Black', value: '#2f2f2f', element: 'Text' },
        { name: 'Gold Leaf', value: '#daa520', element: 'Edge gilding' },
        { name: 'Bookmark Red', value: '#8b0000', element: 'Ribbon marker' },
      ],
    },
    fantasy: {
      name: 'Fantasy',
      genre: 'Magical Realms',
      icon: '🐉',
      description: 'Mystical and enchanted colors',
      colors: [
        { name: 'Dragon Green', value: '#228b22', element: 'Mythical creatures' },
        { name: 'Magic Purple', value: '#9400d3', element: 'Spells' },
        { name: 'Royal Gold', value: '#ffd700', element: 'Crown jewels' },
        { name: 'Forest Mist', value: '#2f4f4f', element: 'Enchanted woods' },
        { name: 'Crystal Blue', value: '#4169e1', element: 'Magic portals' },
      ],
    },
    mystery: {
      name: 'Mystery',
      genre: 'Detective Fiction',
      icon: '🔍',
      description: 'Noir and suspense tones',
      colors: [
        { name: 'Shadow Gray', value: '#696969', element: 'Dark alleys' },
        { name: 'Blood Red', value: '#8b0000', element: 'Crime scenes' },
        { name: 'Fog White', value: '#f8f8ff', element: 'Misty nights' },
        { name: 'Noir Black', value: '#1a1a1a', element: 'Detective coat' },
        { name: 'Brass Gold', value: '#b8860b', element: 'Door handles' },
      ],
    },
    romance: {
      name: 'Romance',
      genre: 'Love Stories',
      icon: '💝',
      description: 'Passionate and tender hues',
      colors: [
        { name: 'Rose Pink', value: '#ff69b4', element: 'Love letters' },
        { name: 'Sunset Orange', value: '#ffa07a', element: 'Evening sky' },
        { name: 'Pearl White', value: '#fdfff5', element: 'Wedding dress' },
        { name: 'Heart Red', value: '#ff0000', element: 'Valentine' },
        { name: 'Lavender', value: '#e6e6fa', element: 'Spring flowers' },
      ],
    },
    scifi: {
      name: 'Sci-Fi',
      genre: 'Science Fiction',
      icon: '🚀',
      description: 'Futuristic color schemes',
      colors: [
        { name: 'Plasma Blue', value: '#00ffff', element: 'Energy fields' },
        { name: 'Tech Green', value: '#00ff00', element: 'Computer screens' },
        { name: 'Space Black', value: '#000000', element: 'Deep space' },
        { name: 'Robot Gray', value: '#808080', element: 'Machinery' },
        { name: 'Warning Red', value: '#ff4500', element: 'Alert signals' },
      ],
    },
    poetry: {
      name: 'Poetry',
      genre: 'Verse & Rhythm',
      icon: '🎨',
      description: 'Lyrical color expressions',
      colors: [
        { name: 'Moonlight Silver', value: '#c0c0c0', element: 'Night verses' },
        { name: 'Ocean Blue', value: '#4682b4', element: 'Water metaphors' },
        { name: 'Autumn Gold', value: '#daa520', element: 'Seasonal poems' },
        { name: 'Forest Green', value: '#228b22', element: 'Nature themes' },
        { name: 'Dawn Pink', value: '#ffc0cb', element: 'Morning poems' },
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
      <style>{literatureAnimation}</style>

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
          Literary Genre
        </label>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '8px',
        }}>
          {Object.entries(literatureThemes).map(([key, { name, icon }]) => (
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
                animation: selectedGenre === key ? 'pageFlip 2s infinite ease-in-out' : 'none',
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
                fontWeight: selectedGenre === key ? 500 : 400,
              }}>
                {name}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Literature info */}
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
          {literatureThemes[selectedGenre].genre}
        </div>
        <div style={{
          fontSize: '0.9rem',
          color: '#e5e7eb',
        }}>
          {literatureThemes[selectedGenre].description}
        </div>
      </div>

      {/* Color palette */}
      <div style={{
        display: 'grid',
        gap: '12px',
        marginBottom: '24px',
      }}>
        {literatureThemes[selectedGenre].colors.map((color) => (
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
              animation: selectedColor === color.value ? 'inkSpread 2s infinite ease-in-out' : 'none',
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

export default ColorPicker_56; 