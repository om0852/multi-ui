'use client';
import React, { useState } from 'react';

const cosmicAnimation = `
  @keyframes twinkle {
    0% { opacity: 1; }
    50% { opacity: 0.5; }
    100% { opacity: 1; }
  }

  @keyframes orbit {
    from { transform: rotate(0deg) translateX(2px) rotate(0deg); }
    to { transform: rotate(360deg) translateX(2px) rotate(-360deg); }
  }
`;

interface CelestialTheme {
  name: string;
  type: string;
  icon: string;
  description: string;
  colors: Array<{
    name: string;
    value: string;
    feature: string;
  }>;
}

const ColorPicker_35: React.FC<{ onChange?: (color: string) => void }> = ({ onChange }) => {
  const [selectedCelestial, setSelectedCelestial] = useState<string>('nebula');
  const [selectedColor, setSelectedColor] = useState<string>('#4b0082');

  const celestialThemes: { [key: string]: CelestialTheme } = {
    nebula: {
      name: 'Nebula Dreams',
      type: 'Gas Cloud',
      icon: '🌌',
      description: 'Vibrant colors of stellar nurseries and gas clouds',
      colors: [
        { name: 'Cosmic Purple', value: '#4b0082', feature: 'Ionized gas' },
        { name: 'Stellar Pink', value: '#ff69b4', feature: 'Hydrogen alpha' },
        { name: 'Nova Blue', value: '#4169e1', feature: 'Oxygen emission' },
        { name: 'Space Dust', value: '#deb887', feature: 'Cosmic dust' },
        { name: 'Nebula Green', value: '#32cd32', feature: 'Nitrogen bands' },
      ],
    },
    galaxy: {
      name: 'Galaxy Spiral',
      type: 'Galaxy',
      icon: '🌀',
      description: 'Colors from spiral galaxy structures',
      colors: [
        { name: 'Core Gold', value: '#ffd700', feature: 'Galactic core' },
        { name: 'Arm Blue', value: '#4682b4', feature: 'Spiral arms' },
        { name: 'Star White', value: '#f8f8ff', feature: 'Star clusters' },
        { name: 'Dark Matter', value: '#1a1a1a', feature: 'Space void' },
        { name: 'Red Shift', value: '#dc143c', feature: 'Distant stars' },
      ],
    },
    aurora: {
      name: 'Aurora Lights',
      type: 'Atmospheric',
      icon: '✨',
      description: 'Dancing colors of the northern lights',
      colors: [
        { name: 'Aurora Green', value: '#7fff00', feature: 'Main curtain' },
        { name: 'Polar Blue', value: '#00bfff', feature: 'Upper rays' },
        { name: 'Night Purple', value: '#9370db', feature: 'Dawn display' },
        { name: 'Arctic Pink', value: '#ffb6c1', feature: 'Lower bands' },
        { name: 'Star Field', value: '#483d8b', feature: 'Night sky' },
      ],
    },
    planets: {
      name: 'Planet Parade',
      type: 'Planetary',
      icon: '🪐',
      description: 'Colors of our solar system planets',
      colors: [
        { name: 'Mars Red', value: '#b22222', feature: 'Red planet' },
        { name: 'Saturn Gold', value: '#daa520', feature: 'Ring system' },
        { name: 'Neptune Blue', value: '#00008b', feature: 'Ice giant' },
        { name: 'Venus Yellow', value: '#ffd700', feature: 'Cloud tops' },
        { name: 'Jupiter Storm', value: '#8b4513', feature: 'Great spot' },
      ],
    },
    comet: {
      name: 'Comet Trail',
      type: 'Small Body',
      icon: '☄️',
      description: 'Ethereal colors of cometary phenomena',
      colors: [
        { name: 'Nucleus Ice', value: '#e0ffff', feature: 'Frozen core' },
        { name: 'Dust Tail', value: '#ffdab9', feature: 'Debris trail' },
        { name: 'Ion Blue', value: '#87ceeb', feature: 'Gas tail' },
        { name: 'Coma Glow', value: '#fff8dc', feature: 'Head glow' },
        { name: 'Space Black', value: '#0c0c0c', feature: 'Background' },
      ],
    },
    supernova: {
      name: 'Supernova Burst',
      type: 'Stellar Event',
      icon: '💥',
      description: 'Explosive colors of dying stars',
      colors: [
        { name: 'Blast White', value: '#fffafa', feature: 'Initial flash' },
        { name: 'Plasma Orange', value: '#ff4500', feature: 'Hot gas' },
        { name: 'Shock Wave', value: '#4169e1', feature: 'Expanding shell' },
        { name: 'Element Gold', value: '#ffd700', feature: 'Heavy elements' },
        { name: 'Remnant Red', value: '#8b0000', feature: 'Cooling debris' },
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
      background: '#000000',
      borderRadius: '16px',
      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
      width: '320px',
    }}>
      <style>{cosmicAnimation}</style>

      {/* Celestial selector */}
      <div style={{
        marginBottom: '24px',
      }}>
        <label style={{
          display: 'block',
          marginBottom: '8px',
          color: '#e5e7eb',
          fontSize: '0.9rem',
        }}>
          Cosmic Phenomenon
        </label>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '8px',
        }}>
          {Object.entries(celestialThemes).map(([key, { name, icon }]) => (
            <button
              key={key}
              onClick={() => setSelectedCelestial(key)}
              style={{
                padding: '12px 8px',
                background: selectedCelestial === key ? '#1f2937' : 'transparent',
                border: '2px solid',
                borderColor: selectedCelestial === key ? '#6366f1' : '#374151',
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
                animation: selectedCelestial === key ? 'orbit 4s linear infinite' : 'none',
              }}>
                {icon}
              </span>
              <span style={{
                fontSize: '0.8rem',
                color: '#e5e7eb',
                fontWeight: selectedCelestial === key ? 500 : 400,
              }}>
                {name}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Celestial info */}
      <div style={{
        padding: '16px',
        background: '#1f2937',
        borderRadius: '8px',
        marginBottom: '24px',
        animation: 'twinkle 2s ease-in-out infinite',
      }}>
        <div style={{
          fontSize: '0.8rem',
          color: '#9ca3af',
          marginBottom: '4px',
          fontFamily: 'monospace',
        }}>
          {celestialThemes[selectedCelestial].type}
        </div>
        <div style={{
          fontSize: '0.9rem',
          color: '#e5e7eb',
        }}>
          {celestialThemes[selectedCelestial].description}
        </div>
      </div>

      {/* Color palette */}
      <div style={{
        display: 'grid',
        gap: '12px',
        marginBottom: '24px',
      }}>
        {celestialThemes[selectedCelestial].colors.map((color, index) => (
          <button
            key={color.value}
            onClick={() => handleColorSelect(color.value)}
            style={{
              display: 'grid',
              gridTemplateColumns: '48px 1fr',
              gap: '12px',
              padding: '8px',
              background: '#1f2937',
              border: '2px solid',
              borderColor: selectedColor === color.value ? '#6366f1' : 'transparent',
              borderRadius: '8px',
              cursor: 'pointer',
              animation: `twinkle 2s ease-in-out ${index * 0.2}s infinite`,
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
                {color.feature}
              </div>
            </div>
          </button>
        ))}
      </div>

      {/* Selected color display */}
      <div style={{
        padding: '12px',
        background: '#1f2937',
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
            border: '2px solid #374151',
            borderRadius: '6px',
            fontSize: '0.9rem',
            color: '#e5e7eb',
            fontFamily: 'monospace',
            background: '#111827',
          }}
        />
      </div>
    </div>
  );
};

export default ColorPicker_35; 