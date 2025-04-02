'use client';
import React, { useState } from 'react';

const photoAnimation = `
  @keyframes shutter {
    0% { transform: scale(1); opacity: 1; }
    50% { transform: scale(0.95); opacity: 0.8; }
    100% { transform: scale(1); opacity: 1; }
  }

  @keyframes develop {
    0% { filter: brightness(1) contrast(1); }
    50% { filter: brightness(1.1) contrast(1.1); }
    100% { filter: brightness(1) contrast(1); }
  }
`;

interface PhotoTheme {
  name: string;
  category: string;
  icon: string;
  description: string;
  colors: Array<{
    name: string;
    value: string;
    element: string;
  }>;
}

const ColorPicker_59: React.FC<{ onChange?: (color: string) => void }> = ({ onChange }) => {
  const [selectedGenre, setSelectedGenre] = useState<string>('blackwhite');
  const [selectedColor, setSelectedColor] = useState<string>('#000000');

  const photoThemes: { [key: string]: PhotoTheme } = {
    blackwhite: {
      name: 'Black & White',
      category: 'Classic Photography',
      icon: '📷',
      description: 'Monochromatic tones of traditional photography',
      colors: [
        { name: 'Pure Black', value: '#000000', element: 'Deep shadows' },
        { name: 'Dark Gray', value: '#404040', element: 'Mid-tones' },
        { name: 'Silver', value: '#c0c0c0', element: 'Highlights' },
        { name: 'Light Gray', value: '#e0e0e0', element: 'High key' },
        { name: 'Pure White', value: '#ffffff', element: 'Bright areas' },
      ],
    },
    vintage: {
      name: 'Vintage',
      category: 'Retro Film',
      icon: '🎞️',
      description: 'Warm, aged tones of classic film',
      colors: [
        { name: 'Sepia', value: '#704214', element: 'Aged photo' },
        { name: 'Faded Brown', value: '#8b7355', element: 'Old print' },
        { name: 'Cream', value: '#fffdd0', element: 'Paper' },
        { name: 'Antique', value: '#faebd7', element: 'Background' },
        { name: 'Amber', value: '#ffbf00', element: 'Tinting' },
      ],
    },
    cinema: {
      name: 'Cinema',
      category: 'Film Production',
      icon: '🎬',
      description: 'Professional cinematography colors',
      colors: [
        { name: 'Director Black', value: '#1a1a1a', element: 'Slate board' },
        { name: 'Studio Gray', value: '#808080', element: 'Equipment' },
        { name: 'Action Red', value: '#ff0000', element: 'Recording light' },
        { name: 'Spotlight', value: '#ffd700', element: 'Set lighting' },
        { name: 'Greenscreen', value: '#00b140', element: 'Background' },
      ],
    },
    darkroom: {
      name: 'Darkroom',
      category: 'Film Development',
      icon: '🌗',
      description: 'Colors of photo processing',
      colors: [
        { name: 'Safelight Red', value: '#8b0000', element: 'Safety lamp' },
        { name: 'Chemical', value: '#4b0082', element: 'Developer' },
        { name: 'Paper White', value: '#f5f5f5', element: 'Photo paper' },
        { name: 'Solution', value: '#696969', element: 'Fixer' },
        { name: 'Tray Black', value: '#2f4f4f', element: 'Equipment' },
      ],
    },
    digital: {
      name: 'Digital',
      category: 'Modern Photography',
      icon: '📱',
      description: 'Contemporary digital imaging',
      colors: [
        { name: 'LCD Black', value: '#000000', element: 'Screen' },
        { name: 'Sensor Gray', value: '#a9a9a9', element: 'Camera body' },
        { name: 'Menu Blue', value: '#4169e1', element: 'Interface' },
        { name: 'Status Green', value: '#32cd32', element: 'Indicators' },
        { name: 'Warning Red', value: '#dc143c', element: 'Alerts' },
      ],
    },
    effects: {
      name: 'Effects',
      category: 'Post-Processing',
      icon: '✨',
      description: 'Color effects and filters',
      colors: [
        { name: 'Vignette', value: '#2f2f2f', element: 'Edge darkening' },
        { name: 'Warm Filter', value: '#ff8c00', element: 'Color cast' },
        { name: 'Cool Tone', value: '#4682b4', element: 'Temperature' },
        { name: 'Split Tone', value: '#9370db', element: 'Highlights' },
        { name: 'Fade', value: '#dcdcdc', element: 'Muting' },
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
      <style>{photoAnimation}</style>

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
          Photography Style
        </label>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '8px',
        }}>
          {Object.entries(photoThemes).map(([key, { name, icon }]) => (
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
                animation: selectedGenre === key ? 'shutter 1.5s infinite ease-in-out' : 'none',
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

      {/* Photo info */}
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
          {photoThemes[selectedGenre].category}
        </div>
        <div style={{
          fontSize: '0.9rem',
          color: '#e5e7eb',
        }}>
          {photoThemes[selectedGenre].description}
        </div>
      </div>

      {/* Color palette */}
      <div style={{
        display: 'grid',
        gap: '12px',
        marginBottom: '24px',
      }}>
        {photoThemes[selectedGenre].colors.map((color) => (
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
              animation: selectedColor === color.value ? 'develop 2s infinite ease-in-out' : 'none',
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

export default ColorPicker_59; 