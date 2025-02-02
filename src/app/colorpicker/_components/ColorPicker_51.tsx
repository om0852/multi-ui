'use client';
import React, { useState } from 'react';

const musicAnimation = `
  @keyframes vibrate {
    0%, 100% { transform: rotate(-2deg); }
    50% { transform: rotate(2deg); }
  }

  @keyframes pulse {
    0% { transform: scale(1); }
    50% { transform: scale(1.05); }
    100% { transform: scale(1); }
  }
`;

interface MusicTheme {
  name: string;
  family: string;
  icon: string;
  description: string;
  colors: Array<{
    name: string;
    value: string;
    instrument: string;
  }>;
}

const ColorPicker_51: React.FC<{ onChange?: (color: string) => void }> = ({ onChange }) => {
  const [selectedFamily, setSelectedFamily] = useState<string>('strings');
  const [selectedColor, setSelectedColor] = useState<string>('#8b4513');

  const musicThemes: { [key: string]: MusicTheme } = {
    strings: {
      name: 'Strings',
      family: 'Bowed & Plucked',
      icon: '🎻',
      description: 'Rich tones of string instruments',
      colors: [
        { name: 'Violin Brown', value: '#8b4513', instrument: 'Violin' },
        { name: 'Cello Gold', value: '#daa520', instrument: 'Cello' },
        { name: 'Guitar Amber', value: '#ffbf00', instrument: 'Classical guitar' },
        { name: 'Harp Bronze', value: '#cd7f32', instrument: 'Concert harp' },
        { name: 'Bass Wood', value: '#deb887', instrument: 'Double bass' },
      ],
    },
    brass: {
      name: 'Brass',
      family: 'Metal Wind',
      icon: '🎺',
      description: 'Metallic shades of brass instruments',
      colors: [
        { name: 'Trumpet Gold', value: '#ffd700', instrument: 'Trumpet' },
        { name: 'Trombone Brass', value: '#b8860b', instrument: 'Trombone' },
        { name: 'French Horn Bronze', value: '#cd853f', instrument: 'French horn' },
        { name: 'Tuba Copper', value: '#b87333', instrument: 'Tuba' },
        { name: 'Cornet Shine', value: '#d4af37', instrument: 'Cornet' },
      ],
    },
    woodwind: {
      name: 'Woodwind',
      family: 'Reed & Flute',
      icon: '🎷',
      description: 'Natural tones of woodwinds',
      colors: [
        { name: 'Clarinet Black', value: '#2f4f4f', instrument: 'Clarinet' },
        { name: 'Flute Silver', value: '#c0c0c0', instrument: 'Flute' },
        { name: 'Oboe Wood', value: '#a0522d', instrument: 'Oboe' },
        { name: 'Bassoon Red', value: '#8b0000', instrument: 'Bassoon' },
        { name: 'Saxophone Gold', value: '#ffd700', instrument: 'Saxophone' },
      ],
    },
    percussion: {
      name: 'Percussion',
      family: 'Struck & Shaken',
      icon: '🥁',
      description: 'Dynamic colors of rhythm instruments',
      colors: [
        { name: 'Drum Shell', value: '#f4a460', instrument: 'Drum kit' },
        { name: 'Cymbal Bronze', value: '#cd7f32', instrument: 'Cymbals' },
        { name: 'Timpani Copper', value: '#b87333', instrument: 'Timpani' },
        { name: 'Xylophone Rainbow', value: '#ff69b4', instrument: 'Xylophone' },
        { name: 'Marimba Wood', value: '#8b4513', instrument: 'Marimba' },
      ],
    },
    keyboard: {
      name: 'Keyboard',
      family: 'Keyed',
      icon: '🎹',
      description: 'Classic piano and organ colors',
      colors: [
        { name: 'Piano Black', value: '#000000', instrument: 'Grand piano' },
        { name: 'Ivory White', value: '#fffff0', instrument: 'Piano keys' },
        { name: 'Organ Gold', value: '#ffd700', instrument: 'Pipe organ' },
        { name: 'Harpsichord Brown', value: '#8b4513', instrument: 'Harpsichord' },
        { name: 'Synth Electric', value: '#00ffff', instrument: 'Synthesizer' },
      ],
    },
    electronic: {
      name: 'Electronic',
      family: 'Digital',
      icon: '🎛️',
      description: 'Modern electronic music colors',
      colors: [
        { name: 'Synth Blue', value: '#00ff00', instrument: 'Synthesizer' },
        { name: 'Digital Red', value: '#ff0000', instrument: 'Digital pad' },
        { name: 'Beat Purple', value: '#9400d3', instrument: 'Drum machine' },
        { name: 'Mix Yellow', value: '#ffff00', instrument: 'Mixer' },
        { name: 'Tech White', value: '#ffffff', instrument: 'Controller' },
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

      {/* Instrument family selector */}
      <div style={{
        marginBottom: '24px',
      }}>
        <label style={{
          display: 'block',
          marginBottom: '8px',
          color: '#e5e7eb',
          fontSize: '0.9rem',
        }}>
          Instrument Family
        </label>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '8px',
        }}>
          {Object.entries(musicThemes).map(([key, { name, icon }]) => (
            <button
              key={key}
              onClick={() => setSelectedFamily(key)}
              style={{
                padding: '12px 8px',
                background: selectedFamily === key ? '#2d2d2d' : 'transparent',
                border: '2px solid',
                borderColor: selectedFamily === key ? '#6366f1' : '#4b5563',
                borderRadius: '6px',
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '4px',
                animation: selectedFamily === key ? 'vibrate 2s infinite ease-in-out' : 'none',
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
                fontWeight: selectedFamily === key ? 500 : 400,
              }}>
                {name}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Music info */}
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
          {musicThemes[selectedFamily].family}
        </div>
        <div style={{
          fontSize: '0.9rem',
          color: '#e5e7eb',
        }}>
          {musicThemes[selectedFamily].description}
        </div>
      </div>

      {/* Color palette */}
      <div style={{
        display: 'grid',
        gap: '12px',
        marginBottom: '24px',
      }}>
        {musicThemes[selectedFamily].colors.map((color) => (
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
              animation: selectedColor === color.value ? 'pulse 2s infinite ease-in-out' : 'none',
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
                {color.instrument}
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

export default ColorPicker_51; 