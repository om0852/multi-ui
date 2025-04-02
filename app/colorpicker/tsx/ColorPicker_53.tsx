'use client';
import React, { useState } from 'react';

const architectureAnimation = `
  @keyframes construct {
    0% { transform: translateY(0) scale(1); }
    50% { transform: translateY(-3px) scale(1.02); }
    100% { transform: translateY(0) scale(1); }
  }

  @keyframes blueprint {
    0% { box-shadow: 0 0 0 rgba(99, 102, 241, 0.4); }
    50% { box-shadow: 0 0 15px rgba(99, 102, 241, 0.6); }
    100% { box-shadow: 0 0 0 rgba(99, 102, 241, 0.4); }
  }
`;

interface ArchitectureTheme {
  name: string;
  style: string;
  icon: string;
  description: string;
  colors: Array<{
    name: string;
    value: string;
    element: string;
  }>;
}

const ColorPicker_53: React.FC<{ onChange?: (color: string) => void }> = ({ onChange }) => {
  const [selectedStyle, setSelectedStyle] = useState<string>('modern');
  const [selectedColor, setSelectedColor] = useState<string>('#a9a9a9');

  const architectureThemes: { [key: string]: ArchitectureTheme } = {
    modern: {
      name: 'Modern',
      style: 'Contemporary',
      icon: '🏢',
      description: 'Clean lines and minimalist design',
      colors: [
        { name: 'Concrete Gray', value: '#a9a9a9', element: 'Exposed concrete' },
        { name: 'Steel Blue', value: '#4682b4', element: 'Metal frames' },
        { name: 'Glass White', value: '#f5f5f5', element: 'Glass panels' },
        { name: 'Matte Black', value: '#2f2f2f', element: 'Metal accents' },
        { name: 'Chrome Silver', value: '#c0c0c0', element: 'Steel details' },
      ],
    },
    classical: {
      name: 'Classical',
      style: 'Greco-Roman',
      icon: '🏛️',
      description: 'Traditional architectural elements',
      colors: [
        { name: 'Marble White', value: '#f2f3f4', element: 'Marble columns' },
        { name: 'Stone Gray', value: '#8b8589', element: 'Stone walls' },
        { name: 'Gold Leaf', value: '#daa520', element: 'Decorative details' },
        { name: 'Terra Cotta', value: '#e2725b', element: 'Roof tiles' },
        { name: 'Bronze Patina', value: '#8b4513', element: 'Metal work' },
      ],
    },
    gothic: {
      name: 'Gothic',
      style: 'Medieval',
      icon: '⛪',
      description: 'Dark and dramatic elements',
      colors: [
        { name: 'Cathedral Gray', value: '#4a4a4a', element: 'Stone walls' },
        { name: 'Stained Glass', value: '#4b0082', element: 'Windows' },
        { name: 'Gargoyle Stone', value: '#696969', element: 'Sculptures' },
        { name: 'Rose Window', value: '#8b0000', element: 'Decorative glass' },
        { name: 'Lead Gray', value: '#2f4f4f', element: 'Metal work' },
      ],
    },
    japanese: {
      name: 'Japanese',
      style: 'Traditional',
      icon: '🏯',
      description: 'Zen-inspired architecture',
      colors: [
        { name: 'Shoji White', value: '#faf0e6', element: 'Paper screens' },
        { name: 'Bamboo Green', value: '#556b2f', element: 'Garden elements' },
        { name: 'Wood Brown', value: '#8b4513', element: 'Timber frames' },
        { name: 'Stone Gray', value: '#708090', element: 'Rock gardens' },
        { name: 'Tile Black', value: '#2f4f4f', element: 'Roof tiles' },
      ],
    },
    industrial: {
      name: 'Industrial',
      style: 'Urban',
      icon: '🏭',
      description: 'Raw and functional design',
      colors: [
        { name: 'Rust Orange', value: '#b7410e', element: 'Metal surfaces' },
        { name: 'Iron Gray', value: '#708090', element: 'Steel beams' },
        { name: 'Brick Red', value: '#b22222', element: 'Exposed brick' },
        { name: 'Pipe Black', value: '#2f2f2f', element: 'Metal pipes' },
        { name: 'Concrete Gray', value: '#a9a9a9', element: 'Floor surfaces' },
      ],
    },
    sustainable: {
      name: 'Sustainable',
      style: 'Eco-friendly',
      icon: '🌱',
      description: 'Environmental conscious design',
      colors: [
        { name: 'Living Wall', value: '#228b22', element: 'Green walls' },
        { name: 'Solar Panel', value: '#1e90ff', element: 'Energy systems' },
        { name: 'Bamboo Beige', value: '#deb887', element: 'Natural materials' },
        { name: 'Rain Water', value: '#87ceeb', element: 'Water features' },
        { name: 'Earth Brown', value: '#8b4513', element: 'Natural finishes' },
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
      <style>{architectureAnimation}</style>

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
          Architectural Style
        </label>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '8px',
        }}>
          {Object.entries(architectureThemes).map(([key, { name, icon }]) => (
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
                animation: selectedStyle === key ? 'construct 3s infinite ease-in-out' : 'none',
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

      {/* Architecture info */}
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
          {architectureThemes[selectedStyle].style}
        </div>
        <div style={{
          fontSize: '0.9rem',
          color: '#e5e7eb',
        }}>
          {architectureThemes[selectedStyle].description}
        </div>
      </div>

      {/* Color palette */}
      <div style={{
        display: 'grid',
        gap: '12px',
        marginBottom: '24px',
      }}>
        {architectureThemes[selectedStyle].colors.map((color) => (
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
              animation: selectedColor === color.value ? 'blueprint 2s infinite ease-in-out' : 'none',
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

export default ColorPicker_53; 