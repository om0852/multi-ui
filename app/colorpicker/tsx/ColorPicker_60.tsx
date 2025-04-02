'use client';
import React, { useState } from 'react';

const danceAnimation = `
  @keyframes dance {
    0% { transform: translateY(0); }
    25% { transform: translateY(-3px) rotate(2deg); }
    75% { transform: translateY(3px) rotate(-2deg); }
    100% { transform: translateY(0); }
  }

  @keyframes spotlight {
    0% { filter: brightness(1); }
    50% { filter: brightness(1.2); }
    100% { filter: brightness(1); }
  }
`;

interface DanceTheme {
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

const ColorPicker_60: React.FC<{ onChange?: (color: string) => void }> = ({ onChange }) => {
  const [selectedStyle, setSelectedStyle] = useState<string>('ballet');
  const [selectedColor, setSelectedColor] = useState<string>('#ffc0cb');

  const danceThemes: { [key: string]: DanceTheme } = {
    ballet: {
      name: 'Ballet',
      category: 'Classical Dance',
      icon: '🩰',
      description: 'Elegant colors of classical ballet',
      colors: [
        { name: 'Ballet Pink', value: '#ffc0cb', element: 'Pointe shoes' },
        { name: 'Tulle White', value: '#fff5ee', element: 'Tutu' },
        { name: 'Stage Light', value: '#fffacd', element: 'Spotlight' },
        { name: 'Velvet Red', value: '#8b0000', element: 'Curtain' },
        { name: 'Pearl Gray', value: '#e5e4e2', element: 'Practice wear' },
      ],
    },
    contemporary: {
      name: 'Contemporary',
      category: 'Modern Dance',
      icon: '💃',
      description: 'Bold colors of modern expression',
      colors: [
        { name: 'Earth Brown', value: '#8b4513', element: 'Floor work' },
        { name: 'Flow Blue', value: '#4169e1', element: 'Movement' },
        { name: 'Energy Red', value: '#dc143c', element: 'Passion' },
        { name: 'Shadow Gray', value: '#696969', element: 'Contrast' },
        { name: 'Spirit White', value: '#f8f8ff', element: 'Freedom' },
      ],
    },
    hiphop: {
      name: 'Hip Hop',
      category: 'Urban Dance',
      icon: '🕺',
      description: 'Street style and urban colors',
      colors: [
        { name: 'Street Black', value: '#2f2f2f', element: 'Street wear' },
        { name: 'Neon Green', value: '#39ff14', element: 'Accents' },
        { name: 'Beat Red', value: '#ff0000', element: 'Sneakers' },
        { name: 'Urban Gray', value: '#808080', element: 'Concrete' },
        { name: 'Gold', value: '#ffd700', element: 'Accessories' },
      ],
    },
    latin: {
      name: 'Latin',
      category: 'Ballroom Dance',
      icon: '💃',
      description: 'Vibrant Latin dance colors',
      colors: [
        { name: 'Salsa Red', value: '#ff4500', element: 'Dress' },
        { name: 'Passion Pink', value: '#ff69b4', element: 'Ruffles' },
        { name: 'Tropical Yellow', value: '#ffd700', element: 'Accessories' },
        { name: 'Deep Purple', value: '#800080', element: 'Evening wear' },
        { name: 'Sequin Silver', value: '#c0c0c0', element: 'Decorations' },
      ],
    },
    stage: {
      name: 'Stage',
      category: 'Theater Performance',
      icon: '🎭',
      description: 'Theatrical performance colors',
      colors: [
        { name: 'Spotlight Gold', value: '#ffd700', element: 'Main light' },
        { name: 'Curtain Red', value: '#8b0000', element: 'Stage curtain' },
        { name: 'Shadow Black', value: '#2f2f2f', element: 'Background' },
        { name: 'Makeup Beige', value: '#f5f5dc', element: 'Face paint' },
        { name: 'Stage Wood', value: '#deb887', element: 'Floor' },
      ],
    },
    costume: {
      name: 'Costume',
      category: 'Performance Wear',
      icon: '👗',
      description: 'Dance costume and attire colors',
      colors: [
        { name: 'Sequin Gold', value: '#ffd700', element: 'Decorations' },
        { name: 'Sparkle Silver', value: '#c0c0c0', element: 'Accents' },
        { name: 'Velvet Blue', value: '#191970', element: 'Fabric' },
        { name: 'Satin Pink', value: '#ffb6c1', element: 'Lining' },
        { name: 'Crystal Clear', value: '#f0f8ff', element: 'Rhinestones' },
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
      <style>{danceAnimation}</style>

      {/* Style selector */}
      <div style={{
        marginBottom: '24px',
      }}>
        <label style={{
          display: 'block',
          marginBottom: '8px',
          color: '#e5e7eb',
          fontSize: '0.9rem',
        }}>
          Dance Style
        </label>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '8px',
        }}>
          {Object.entries(danceThemes).map(([key, { name, icon }]) => (
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
                animation: selectedStyle === key ? 'dance 2s infinite ease-in-out' : 'none',
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

      {/* Dance info */}
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
          {danceThemes[selectedStyle].category}
        </div>
        <div style={{
          fontSize: '0.9rem',
          color: '#e5e7eb',
        }}>
          {danceThemes[selectedStyle].description}
        </div>
      </div>

      {/* Color palette */}
      <div style={{
        display: 'grid',
        gap: '12px',
        marginBottom: '24px',
      }}>
        {danceThemes[selectedStyle].colors.map((color) => (
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
              animation: selectedColor === color.value ? 'spotlight 1.5s infinite ease-in-out' : 'none',
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

export default ColorPicker_60; 