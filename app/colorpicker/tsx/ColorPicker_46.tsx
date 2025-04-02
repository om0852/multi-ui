'use client';
import React, { useState } from 'react';

const natureAnimation = `
  @keyframes sway {
    0%, 100% { transform: rotate(-5deg); }
    50% { transform: rotate(5deg); }
  }

  @keyframes grow {
    0% { transform: scale(1); }
    50% { transform: scale(1.05); }
    100% { transform: scale(1); }
  }
`;

interface NatureTheme {
  name: string;
  type: string;
  icon: string;
  description: string;
  colors: Array<{
    name: string;
    value: string;
    plant: string;
  }>;
}

const ColorPicker_46: React.FC<{ onChange?: (color: string) => void }> = ({ onChange }) => {
  const [selectedNature, setSelectedNature] = useState<string>('forest');
  const [selectedColor, setSelectedColor] = useState<string>('#2e8b57');

  const natureThemes: { [key: string]: NatureTheme } = {
    forest: {
      name: 'Forest',
      type: 'Woodland',
      icon: '🌲',
      description: 'Deep colors of ancient forests',
      colors: [
        { name: 'Pine Green', value: '#2e8b57', plant: 'Evergreen trees' },
        { name: 'Moss Green', value: '#8fbc8f', plant: 'Forest floor' },
        { name: 'Bark Brown', value: '#8b4513', plant: 'Tree trunks' },
        { name: 'Fern Green', value: '#4f7942', plant: 'Undergrowth' },
        { name: 'Mushroom Gray', value: '#c4aead', plant: 'Forest fungi' },
      ],
    },
    meadow: {
      name: 'Meadow',
      type: 'Grassland',
      icon: '🌸',
      description: 'Vibrant colors of wildflower fields',
      colors: [
        { name: 'Lavender', value: '#e6e6fa', plant: 'Wild herbs' },
        { name: 'Daisy White', value: '#fffafa', plant: 'Field flowers' },
        { name: 'Grass Green', value: '#90ee90', plant: 'Summer grass' },
        { name: 'Poppy Red', value: '#ff4040', plant: 'Wild poppies' },
        { name: 'Buttercup', value: '#ffef00', plant: 'Spring flowers' },
      ],
    },
    tropical: {
      name: 'Tropical',
      type: 'Rainforest',
      icon: '🌴',
      description: 'Exotic colors of jungle flora',
      colors: [
        { name: 'Palm Green', value: '#00a86b', plant: 'Palm leaves' },
        { name: 'Orchid Pink', value: '#da70d6', plant: 'Exotic flowers' },
        { name: 'Banana Yellow', value: '#ffe135', plant: 'Tropical fruits' },
        { name: 'Bird of Paradise', value: '#ff8c00', plant: 'Strelitzia' },
        { name: 'Vine Green', value: '#32cd32', plant: 'Jungle vines' },
      ],
    },
    desert: {
      name: 'Desert',
      type: 'Arid Zone',
      icon: '🌵',
      description: 'Subtle colors of desert plants',
      colors: [
        { name: 'Cactus Green', value: '#5f9ea0', plant: 'Succulents' },
        { name: 'Sand Beige', value: '#f5deb3', plant: 'Desert brush' },
        { name: 'Agave Blue', value: '#7cb9e8', plant: 'Desert agave' },
        { name: 'Terra Cotta', value: '#e2725b', plant: 'Red rocks' },
        { name: 'Yucca White', value: '#f5f5f5', plant: 'Desert flowers' },
      ],
    },
    garden: {
      name: 'Garden',
      type: 'Cultivated',
      icon: '🌺',
      description: 'Classic colors of garden flowers',
      colors: [
        { name: 'Rose Pink', value: '#ff69b4', plant: 'Garden roses' },
        { name: 'Lily White', value: '#fffaf0', plant: 'Easter lilies' },
        { name: 'Tulip Red', value: '#ff4040', plant: 'Spring tulips' },
        { name: 'Iris Purple', value: '#9932cc', plant: 'Bearded iris' },
        { name: 'Marigold', value: '#ffa500', plant: 'Border flowers' },
      ],
    },
    autumn: {
      name: 'Autumn',
      type: 'Seasonal',
      icon: '🍁',
      description: 'Warm colors of fall foliage',
      colors: [
        { name: 'Maple Red', value: '#ff4500', plant: 'Maple leaves' },
        { name: 'Oak Brown', value: '#8b4513', plant: 'Oak leaves' },
        { name: 'Aspen Gold', value: '#ffd700', plant: 'Aspen trees' },
        { name: 'Pumpkin', value: '#ff7f00', plant: 'Fall gourds' },
        { name: 'Berry Red', value: '#8b0000', plant: 'Fall berries' },
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
      <style>{natureAnimation}</style>

      {/* Nature selector */}
      <div style={{
        marginBottom: '24px',
      }}>
        <label style={{
          display: 'block',
          marginBottom: '8px',
          color: '#e5e7eb',
          fontSize: '0.9rem',
        }}>
          Natural Environment
        </label>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '8px',
        }}>
          {Object.entries(natureThemes).map(([key, { name, icon }]) => (
            <button
              key={key}
              onClick={() => setSelectedNature(key)}
              style={{
                padding: '12px 8px',
                background: selectedNature === key ? '#2d2d2d' : 'transparent',
                border: '2px solid',
                borderColor: selectedNature === key ? '#6366f1' : '#4b5563',
                borderRadius: '6px',
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '4px',
                animation: selectedNature === key ? 'sway 3s infinite ease-in-out' : 'none',
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
                fontWeight: selectedNature === key ? 500 : 400,
              }}>
                {name}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Nature info */}
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
          {natureThemes[selectedNature].type}
        </div>
        <div style={{
          fontSize: '0.9rem',
          color: '#e5e7eb',
        }}>
          {natureThemes[selectedNature].description}
        </div>
      </div>

      {/* Color palette */}
      <div style={{
        display: 'grid',
        gap: '12px',
        marginBottom: '24px',
      }}>
        {natureThemes[selectedNature].colors.map((color) => (
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
              animation: selectedColor === color.value ? 'grow 2s infinite ease-in-out' : 'none',
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
                {color.plant}
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

export default ColorPicker_46; 