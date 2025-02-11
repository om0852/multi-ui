'use client';
import React, { useState } from 'react';

const cinemaAnimation = `
  @keyframes fadeZoom {
    from { opacity: 0; transform: scale(0.95); }
    to { opacity: 1; transform: scale(1); }
  }

  @keyframes projectorFlicker {
    0% { opacity: 1; }
    95% { opacity: 1; }
    96% { opacity: 0.8; }
    97% { opacity: 1; }
    98% { opacity: 0.9; }
    100% { opacity: 1; }
  }
`;

interface FilmStyle {
  name: string;
  director: string;
  year: string;
  description: string;
  colors: Array<{
    name: string;
    value: string;
    usage: string;
  }>;
}

const ColorPicker_29: React.FC<{ onChange?: (color: string) => void }> = ({ onChange }) => {
  const [selectedStyle, setSelectedStyle] = useState<string>('neoNoir');
  const [selectedColor, setSelectedColor] = useState<string>('#ff6b6b');

  const filmStyles: { [key: string]: FilmStyle } = {
    neoNoir: {
      name: 'Neo-Noir',
      director: 'Blade Runner (1982)',
      year: '1980s-Present',
      description: 'High contrast with neon accents and deep shadows',
      colors: [
        { name: 'Neon Pink', value: '#ff6b6b', usage: 'Vibrant city lights' },
        { name: 'Cyber Blue', value: '#00ffff', usage: 'Holographic elements' },
        { name: 'Night Black', value: '#1a1a1a', usage: 'Deep shadows' },
        { name: 'Acid Rain', value: '#7fff00', usage: 'Digital accents' },
        { name: 'Smog Purple', value: '#4b0082', usage: 'Urban atmosphere' },
      ],
    },
    wesAnderson: {
      name: 'Symmetrical Pastels',
      director: 'The Grand Budapest Hotel (2014)',
      year: '2000s-Present',
      description: 'Carefully curated pastels with symmetrical compositions',
      colors: [
        { name: 'Millennial Pink', value: '#ff9ecd', usage: 'Primary theme' },
        { name: 'Lobby Gold', value: '#deb887', usage: 'Architectural details' },
        { name: 'Mendl\'s Blue', value: '#84c0ff', usage: 'Secondary accents' },
        { name: 'Pistachio', value: '#93c572', usage: 'Natural elements' },
        { name: 'Custard Yellow', value: '#ffdb58', usage: 'Highlight details' },
      ],
    },
    frenchNew: {
      name: 'French New Wave',
      director: 'Jean-Luc Godard',
      year: '1960s',
      description: 'Bold primary colors with high contrast black and white',
      colors: [
        { name: 'Nouvelle Red', value: '#ff0000', usage: 'Emotional emphasis' },
        { name: 'Paris Blue', value: '#0000cd', usage: 'Cool tones' },
        { name: 'Modernist White', value: '#ffffff', usage: 'Clean space' },
        { name: 'Cinema Black', value: '#000000', usage: 'Strong contrast' },
        { name: 'Accent Yellow', value: '#ffd700', usage: 'Visual punctuation' },
      ],
    },
    horror: {
      name: 'Modern Horror',
      director: 'Hereditary (2018)',
      year: '2010s-Present',
      description: 'Desaturated palette with stark emotional accents',
      colors: [
        { name: 'Blood Crimson', value: '#8b0000', usage: 'Violence and tension' },
        { name: 'Shadow Gray', value: '#2f4f4f', usage: 'Lurking darkness' },
        { name: 'Pale Flesh', value: '#ffe4c4', usage: 'Unsettling warmth' },
        { name: 'Decay Green', value: '#556b2f', usage: 'Natural horror' },
        { name: 'Void Black', value: '#0c0c0c', usage: 'Ultimate darkness' },
      ],
    },
    kubrick: {
      name: 'Kubrickian',
      director: '2001: A Space Odyssey (1968)',
      year: '1960s-1990s',
      description: 'Clinical whites with bold color statements',
      colors: [
        { name: 'HAL Red', value: '#ff0000', usage: 'Artificial intelligence' },
        { name: 'Space White', value: '#f8f8ff', usage: 'Sterile environments' },
        { name: 'Stargate Blue', value: '#4169e1', usage: 'Cosmic journey' },
        { name: 'Warning Orange', value: '#ff4500', usage: 'Caution elements' },
        { name: 'Monolith Black', value: '#000000', usage: 'Mystery and void' },
      ],
    },
    neonRealism: {
      name: 'Neon Realism',
      director: 'Drive (2011)',
      year: '2010s',
      description: 'Natural tones punctuated by electric colors',
      colors: [
        { name: 'Electric Pink', value: '#ff69b4', usage: 'Night city glow' },
        { name: 'Street Orange', value: '#ff8c00', usage: 'Urban lights' },
        { name: 'LA Night', value: '#483d8b', usage: 'City darkness' },
        { name: 'Sunset Gold', value: '#daa520', usage: 'Magic hour' },
        { name: 'Violence Red', value: '#dc143c', usage: 'Dramatic moments' },
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
      <style>{cinemaAnimation}</style>

      {/* Style selector */}
      <div style={{
        marginBottom: '24px',
      }}>
        <label style={{
          display: 'block',
          marginBottom: '8px',
          color: '#4b5563',
          fontSize: '0.9rem',
        }}>
          Cinematic Style
        </label>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '8px',
        }}>
          {Object.entries(filmStyles).map(([key, { name }]) => (
            <button
              key={key}
              onClick={() => setSelectedStyle(key)}
              style={{
                padding: '12px 8px',
                background: selectedStyle === key ? '#f3f4f6' : 'transparent',
                border: '2px solid',
                borderColor: selectedStyle === key ? '#6366f1' : '#e5e7eb',
                borderRadius: '6px',
                cursor: 'pointer',
                animation: selectedStyle === key ? 'projectorFlicker 4s infinite' : 'none',
              }}
            >
              <span style={{
                fontSize: '0.9rem',
                color: '#4b5563',
                fontWeight: selectedStyle === key ? 500 : 400,
              }}>
                {name}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Style info */}
      <div style={{
        padding: '16px',
        background: '#f3f4f6',
        borderRadius: '8px',
        marginBottom: '24px',
        animation: 'fadeZoom 0.3s ease-out',
      }}>
        <div style={{
          fontSize: '0.8rem',
          color: '#6b7280',
          marginBottom: '4px',
          fontFamily: 'monospace',
        }}>
          {filmStyles[selectedStyle].director} • {filmStyles[selectedStyle].year}
        </div>
        <div style={{
          fontSize: '0.9rem',
          color: '#4b5563',
        }}>
          {filmStyles[selectedStyle].description}
        </div>
      </div>

      {/* Color palette */}
      <div style={{
        display: 'grid',
        gap: '12px',
        marginBottom: '24px',
      }}>
        {filmStyles[selectedStyle].colors.map((color, index) => (
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
              animation: `fadeZoom 0.3s ease-out ${index * 0.1}s`,
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

export default ColorPicker_29; 