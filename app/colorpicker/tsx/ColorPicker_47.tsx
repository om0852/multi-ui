'use client';
import React, { useState } from 'react';

const oceanAnimation = `
  @keyframes wave {
    0%, 100% { transform: translateY(0) rotate(0deg); }
    25% { transform: translateY(-3px) rotate(2deg); }
    75% { transform: translateY(3px) rotate(-2deg); }
  }

  @keyframes bubble {
    0% { transform: scale(1) translateY(0); }
    50% { transform: scale(1.1) translateY(-5px); }
    100% { transform: scale(1) translateY(0); }
  }
`;

interface OceanTheme {
  name: string;
  depth: string;
  icon: string;
  description: string;
  colors: Array<{
    name: string;
    value: string;
    creature: string;
  }>;
}

const ColorPicker_47: React.FC<{ onChange?: (color: string) => void }> = ({ onChange }) => {
  const [selectedZone, setSelectedZone] = useState<string>('reef');
  const [selectedColor, setSelectedColor] = useState<string>('#ff7f50');

  const oceanThemes: { [key: string]: OceanTheme } = {
    reef: {
      name: 'Coral Reef',
      depth: 'Shallow Waters',
      icon: '🐠',
      description: 'Vibrant colors of tropical reefs',
      colors: [
        { name: 'Coral Pink', value: '#ff7f50', creature: 'Coral polyps' },
        { name: 'Clownfish Orange', value: '#ff6b35', creature: 'Anemonefish' },
        { name: 'Sea Fan Purple', value: '#9370db', creature: 'Gorgonian coral' },
        { name: 'Parrotfish Blue', value: '#40e0d0', creature: 'Reef fish' },
        { name: 'Anemone Green', value: '#98ff98', creature: 'Sea anemone' },
      ],
    },
    deep: {
      name: 'Deep Ocean',
      depth: 'Abyssal Zone',
      icon: '🦑',
      description: 'Mysterious colors of the abyss',
      colors: [
        { name: 'Midnight Blue', value: '#191970', creature: 'Deep water' },
        { name: 'Bioluminescent', value: '#00ffff', creature: 'Lanternfish' },
        { name: 'Squid Ink', value: '#000080', creature: 'Giant squid' },
        { name: 'Ghost White', value: '#f8f8ff', creature: 'Deep creatures' },
        { name: 'Anglerfish Black', value: '#1a1a1a', creature: 'Anglerfish' },
      ],
    },
    coastal: {
      name: 'Coastal',
      depth: 'Tidal Zone',
      icon: '🐚',
      description: 'Colors of shoreline life',
      colors: [
        { name: 'Shell Pink', value: '#ffd1dc', creature: 'Seashells' },
        { name: 'Sand Dollar', value: '#f5deb3', creature: 'Echinoderms' },
        { name: 'Seaweed Green', value: '#2e8b57', creature: 'Coastal algae' },
        { name: 'Starfish Orange', value: '#ffa500', creature: 'Sea stars' },
        { name: 'Barnacle Gray', value: '#a9a9a9', creature: 'Crustaceans' },
      ],
    },
    arctic: {
      name: 'Arctic',
      depth: 'Polar Waters',
      icon: '🐋',
      description: 'Cool colors of polar seas',
      colors: [
        { name: 'Glacier Blue', value: '#b0e0e6', creature: 'Ice formations' },
        { name: 'Whale Gray', value: '#708090', creature: 'Humpback whales' },
        { name: 'Arctic White', value: '#f0f8ff', creature: 'Beluga whales' },
        { name: 'Seal Black', value: '#2f4f4f', creature: 'Arctic seals' },
        { name: 'Krill Pink', value: '#ffb6c1', creature: 'Plankton' },
      ],
    },
    kelp: {
      name: 'Kelp Forest',
      depth: 'Temperate Zone',
      icon: '🌿',
      description: 'Colors of underwater forests',
      colors: [
        { name: 'Kelp Green', value: '#556b2f', creature: 'Giant kelp' },
        { name: 'Sea Otter Brown', value: '#8b4513', creature: 'Sea otters' },
        { name: 'Garibaldi Orange', value: '#ff4500', creature: 'Garibaldi fish' },
        { name: 'Sea Bass Silver', value: '#c0c0c0', creature: 'Bass schools' },
        { name: 'Algae Green', value: '#8fbc8f', creature: 'Sea lettuce' },
      ],
    },
    lagoon: {
      name: 'Lagoon',
      depth: 'Protected Waters',
      icon: '🐢',
      description: 'Tranquil colors of sheltered waters',
      colors: [
        { name: 'Lagoon Blue', value: '#20b2aa', creature: 'Clear waters' },
        { name: 'Turtle Green', value: '#2e8b57', creature: 'Sea turtles' },
        { name: 'Ray Gray', value: '#778899', creature: 'Manta rays' },
        { name: 'Mangrove Brown', value: '#8b4513', creature: 'Root systems' },
        { name: 'Pearl White', value: '#fdfff5', creature: 'Oyster beds' },
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
      <style>{oceanAnimation}</style>

      {/* Ocean zone selector */}
      <div style={{
        marginBottom: '24px',
      }}>
        <label style={{
          display: 'block',
          marginBottom: '8px',
          color: '#e5e7eb',
          fontSize: '0.9rem',
        }}>
          Marine Zone
        </label>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '8px',
        }}>
          {Object.entries(oceanThemes).map(([key, { name, icon }]) => (
            <button
              key={key}
              onClick={() => setSelectedZone(key)}
              style={{
                padding: '12px 8px',
                background: selectedZone === key ? '#2d2d2d' : 'transparent',
                border: '2px solid',
                borderColor: selectedZone === key ? '#6366f1' : '#4b5563',
                borderRadius: '6px',
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '4px',
                animation: selectedZone === key ? 'wave 3s infinite ease-in-out' : 'none',
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
                fontWeight: selectedZone === key ? 500 : 400,
              }}>
                {name}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Ocean info */}
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
          {oceanThemes[selectedZone].depth}
        </div>
        <div style={{
          fontSize: '0.9rem',
          color: '#e5e7eb',
        }}>
          {oceanThemes[selectedZone].description}
        </div>
      </div>

      {/* Color palette */}
      <div style={{
        display: 'grid',
        gap: '12px',
        marginBottom: '24px',
      }}>
        {oceanThemes[selectedZone].colors.map((color) => (
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
              animation: selectedColor === color.value ? 'bubble 2s infinite ease-in-out' : 'none',
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
                {color.creature}
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

export default ColorPicker_47; 