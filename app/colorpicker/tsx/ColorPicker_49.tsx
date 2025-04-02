'use client';
import React, { useState } from 'react';

const mineralAnimation = `
  @keyframes shine {
    0% { filter: brightness(1) contrast(1); }
    50% { filter: brightness(1.2) contrast(1.1); }
    100% { filter: brightness(1) contrast(1); }
  }

  @keyframes crystallize {
    0% { transform: scale(1) rotate(0deg); }
    50% { transform: scale(1.05) rotate(2deg); }
    100% { transform: scale(1) rotate(0deg); }
  }
`;

interface MineralTheme {
  name: string;
  formation: string;
  icon: string;
  description: string;
  colors: Array<{
    name: string;
    value: string;
    mineral: string;
  }>;
}

const ColorPicker_49: React.FC<{ onChange?: (color: string) => void }> = ({ onChange }) => {
  const [selectedMineral, setSelectedMineral] = useState<string>('quartz');
  const [selectedColor, setSelectedColor] = useState<string>('#e6e6fa');

  const mineralThemes: { [key: string]: MineralTheme } = {
    quartz: {
      name: 'Quartz',
      formation: 'Igneous',
      icon: '💎',
      description: 'Colors of crystalline silica',
      colors: [
        { name: 'Clear Crystal', value: '#e6e6fa', mineral: 'Pure quartz' },
        { name: 'Rose Pink', value: '#ffc0cb', mineral: 'Rose quartz' },
        { name: 'Smoky Brown', value: '#8b4513', mineral: 'Smoky quartz' },
        { name: 'Amethyst Purple', value: '#9966cc', mineral: 'Amethyst' },
        { name: 'Citrine Gold', value: '#daa520', mineral: 'Citrine' },
      ],
    },
    beryl: {
      name: 'Beryl',
      formation: 'Pegmatite',
      icon: '✨',
      description: 'Precious beryl varieties',
      colors: [
        { name: 'Emerald Green', value: '#50c878', mineral: 'Emerald' },
        { name: 'Aqua Blue', value: '#00ffff', mineral: 'Aquamarine' },
        { name: 'Morganite Pink', value: '#ffb5c5', mineral: 'Morganite' },
        { name: 'Golden Beryl', value: '#ffd700', mineral: 'Heliodor' },
        { name: 'Sea Green', value: '#2e8b57', mineral: 'Green beryl' },
      ],
    },
    corundum: {
      name: 'Corundum',
      formation: 'Metamorphic',
      icon: '❤️',
      description: 'Hard crystalline oxides',
      colors: [
        { name: 'Ruby Red', value: '#e0115f', mineral: 'Ruby' },
        { name: 'Sapphire Blue', value: '#0f52ba', mineral: 'Blue sapphire' },
        { name: 'Pink Sapphire', value: '#ff69b4', mineral: 'Pink sapphire' },
        { name: 'Yellow Sapphire', value: '#ffd700', mineral: 'Yellow sapphire' },
        { name: 'Star White', value: '#f8f8ff', mineral: 'Star sapphire' },
      ],
    },
    garnet: {
      name: 'Garnet',
      formation: 'Metamorphic',
      icon: '🔮',
      description: 'Deep silicate colors',
      colors: [
        { name: 'Almandine Red', value: '#8b0000', mineral: 'Almandine' },
        { name: 'Spessartine Orange', value: '#ff4500', mineral: 'Spessartine' },
        { name: 'Tsavorite Green', value: '#00ff00', mineral: 'Tsavorite' },
        { name: 'Rhodolite Pink', value: '#e75480', mineral: 'Rhodolite' },
        { name: 'Andradite Brown', value: '#8b4513', mineral: 'Andradite' },
      ],
    },
    fluorite: {
      name: 'Fluorite',
      formation: 'Hydrothermal',
      icon: '🌈',
      description: 'Fluorescent crystal colors',
      colors: [
        { name: 'Purple Zone', value: '#9400d3', mineral: 'Purple fluorite' },
        { name: 'Green Band', value: '#98fb98', mineral: 'Green fluorite' },
        { name: 'Blue Ray', value: '#87ceeb', mineral: 'Blue fluorite' },
        { name: 'Yellow Core', value: '#ffff00', mineral: 'Yellow fluorite' },
        { name: 'Rainbow Mix', value: '#ff69b4', mineral: 'Rainbow fluorite' },
      ],
    },
    opal: {
      name: 'Opal',
      formation: 'Sedimentary',
      icon: '🌟',
      description: 'Play of color in silica',
      colors: [
        { name: 'Fire Flash', value: '#ff4500', mineral: 'Fire opal' },
        { name: 'Boulder Blue', value: '#4169e1', mineral: 'Boulder opal' },
        { name: 'Crystal White', value: '#f0f8ff', mineral: 'White opal' },
        { name: 'Black Flash', value: '#2f4f4f', mineral: 'Black opal' },
        { name: 'Matrix Pink', value: '#ffb6c1', mineral: 'Pink opal' },
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
      <style>{mineralAnimation}</style>

      {/* Mineral selector */}
      <div style={{
        marginBottom: '24px',
      }}>
        <label style={{
          display: 'block',
          marginBottom: '8px',
          color: '#e5e7eb',
          fontSize: '0.9rem',
        }}>
          Crystal Group
        </label>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '8px',
        }}>
          {Object.entries(mineralThemes).map(([key, { name, icon }]) => (
            <button
              key={key}
              onClick={() => setSelectedMineral(key)}
              style={{
                padding: '12px 8px',
                background: selectedMineral === key ? '#2d2d2d' : 'transparent',
                border: '2px solid',
                borderColor: selectedMineral === key ? '#6366f1' : '#4b5563',
                borderRadius: '6px',
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '4px',
                animation: selectedMineral === key ? 'crystallize 2s infinite ease-in-out' : 'none',
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
                fontWeight: selectedMineral === key ? 500 : 400,
              }}>
                {name}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Mineral info */}
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
          {mineralThemes[selectedMineral].formation}
        </div>
        <div style={{
          fontSize: '0.9rem',
          color: '#e5e7eb',
        }}>
          {mineralThemes[selectedMineral].description}
        </div>
      </div>

      {/* Color palette */}
      <div style={{
        display: 'grid',
        gap: '12px',
        marginBottom: '24px',
      }}>
        {mineralThemes[selectedMineral].colors.map((color) => (
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
              animation: selectedColor === color.value ? 'shine 2s infinite ease-in-out' : 'none',
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
                {color.mineral}
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

export default ColorPicker_49; 