'use client';
import React, { useState } from 'react';

const spaceAnimation = `
  @keyframes twinkle {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.5; }
  }

  @keyframes orbit {
    from { transform: rotate(0deg) translateX(3px) rotate(0deg); }
    to { transform: rotate(360deg) translateX(3px) rotate(-360deg); }
  }
`;

interface SpaceTheme {
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

const ColorPicker_44: React.FC<{ onChange?: (color: string) => void }> = ({ onChange }) => {
  const [selectedSpace, setSelectedSpace] = useState<string>('nebula');
  const [selectedColor, setSelectedColor] = useState<string>('#663399');

  const spaceThemes: { [key: string]: SpaceTheme } = {
    nebula: {
      name: 'Nebula',
      type: 'Deep Space',
      icon: '🌌',
      description: 'Colorful clouds of cosmic gas and dust',
      colors: [
        { name: 'Cosmic Purple', value: '#663399', feature: 'Ionized hydrogen' },
        { name: 'Stellar Pink', value: '#ff69b4', feature: 'Star formation' },
        { name: 'Nebula Blue', value: '#4169e1', feature: 'Oxygen clouds' },
        { name: 'Space Teal', value: '#008080', feature: 'Nitrogen bands' },
        { name: 'Dark Matter', value: '#1a1a1a', feature: 'Cosmic void' },
      ],
    },
    galaxy: {
      name: 'Galaxy',
      type: 'Star System',
      icon: '🌀',
      description: 'Spiral arms of distant galaxies',
      colors: [
        { name: 'Core Gold', value: '#ffd700', feature: 'Galactic center' },
        { name: 'Arm Blue', value: '#4b0082', feature: 'Spiral structure' },
        { name: 'Star White', value: '#f8f8ff', feature: 'Star clusters' },
        { name: 'Dust Lane', value: '#8b4513', feature: 'Dark matter' },
        { name: 'Space Black', value: '#000000', feature: 'Intergalactic void' },
      ],
    },
    planet: {
      name: 'Planets',
      type: 'Solar System',
      icon: '🪐',
      description: 'Colors of our cosmic neighbors',
      colors: [
        { name: 'Mars Red', value: '#b22222', feature: 'Red planet' },
        { name: 'Jupiter Band', value: '#cd853f', feature: 'Gas giant' },
        { name: 'Saturn Ring', value: '#deb887', feature: 'Ring system' },
        { name: 'Neptune Blue', value: '#00008b', feature: 'Ice giant' },
        { name: 'Venus Gold', value: '#daa520', feature: 'Morning star' },
      ],
    },
    supernova: {
      name: 'Supernova',
      type: 'Stellar Event',
      icon: '💥',
      description: 'Explosive death of massive stars',
      colors: [
        { name: 'Blast White', value: '#ffffff', feature: 'Initial explosion' },
        { name: 'Nova Orange', value: '#ff4500', feature: 'Expanding shell' },
        { name: 'Plasma Yellow', value: '#ffd700', feature: 'Hot gas' },
        { name: 'Remnant Red', value: '#8b0000', feature: 'Cooling debris' },
        { name: 'X-Ray Blue', value: '#00ffff', feature: 'High energy' },
      ],
    },
    blackhole: {
      name: 'Black Hole',
      type: 'Gravitational',
      icon: '⚫',
      description: 'Colors around the event horizon',
      colors: [
        { name: 'Event Horizon', value: '#000000', feature: 'Point of no return' },
        { name: 'Accretion Red', value: '#ff0000', feature: 'Infalling matter' },
        { name: 'Hawking Ray', value: '#4b0082', feature: 'Radiation' },
        { name: 'Quantum Foam', value: '#483d8b', feature: 'Space-time fabric' },
        { name: 'Gravity Lens', value: '#1e90ff', feature: 'Light distortion' },
      ],
    },
    comet: {
      name: 'Comet',
      type: 'Solar Object',
      icon: '☄️',
      description: 'Ice and dust of cosmic travelers',
      colors: [
        { name: 'Nucleus Ice', value: '#f0ffff', feature: 'Frozen core' },
        { name: 'Coma Blue', value: '#87ceeb', feature: 'Gas cloud' },
        { name: 'Tail White', value: '#f5f5f5', feature: 'Dust trail' },
        { name: 'Solar Wind', value: '#ffd700', feature: 'Particle stream' },
        { name: 'Space Dark', value: '#1a1a1a', feature: 'Background void' },
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
      <style>{spaceAnimation}</style>

      {/* Space selector */}
      <div style={{
        marginBottom: '24px',
      }}>
        <label style={{
          display: 'block',
          marginBottom: '8px',
          color: '#e5e7eb',
          fontSize: '0.9rem',
        }}>
          Cosmic Object
        </label>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '8px',
        }}>
          {Object.entries(spaceThemes).map(([key, { name, icon }]) => (
            <button
              key={key}
              onClick={() => setSelectedSpace(key)}
              style={{
                padding: '12px 8px',
                background: selectedSpace === key ? '#2d2d2d' : 'transparent',
                border: '2px solid',
                borderColor: selectedSpace === key ? '#6366f1' : '#4b5563',
                borderRadius: '6px',
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '4px',
                animation: selectedSpace === key ? 'twinkle 1.5s infinite' : 'none',
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
                fontWeight: selectedSpace === key ? 500 : 400,
              }}>
                {name}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Space info */}
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
          {spaceThemes[selectedSpace].type}
        </div>
        <div style={{
          fontSize: '0.9rem',
          color: '#e5e7eb',
        }}>
          {spaceThemes[selectedSpace].description}
        </div>
      </div>

      {/* Color palette */}
      <div style={{
        display: 'grid',
        gap: '12px',
        marginBottom: '24px',
      }}>
        {spaceThemes[selectedSpace].colors.map((color) => (
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
              animation: selectedColor === color.value ? 'orbit 3s linear infinite' : 'none',
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

export default ColorPicker_44; 