'use client';
import React, { useState } from 'react';

const archAnimation = `
  @keyframes buildUp {
    0% { transform: scaleY(0); }
    100% { transform: scaleY(1); }
  }

  @keyframes fadeSlide {
    0% { opacity: 0; transform: translateX(-10px); }
    100% { opacity: 1; transform: translateX(0); }
  }
`;

interface ArchStyle {
  name: string;
  period: string;
  icon: string;
  description: string;
  colors: Array<{
    name: string;
    value: string;
    material: string;
  }>;
}

const ColorPicker_38: React.FC<{ onChange?: (color: string) => void }> = ({ onChange }) => {
  const [selectedStyle, setSelectedStyle] = useState<string>('gothic');
  const [selectedColor, setSelectedColor] = useState<string>('#4a4a4a');

  const archStyles: { [key: string]: ArchStyle } = {
    gothic: {
      name: 'Gothic',
      period: '12th-16th Century',
      icon: '⛪',
      description: 'Dramatic colors of medieval cathedrals',
      colors: [
        { name: 'Stone Gray', value: '#4a4a4a', material: 'Flying buttresses' },
        { name: 'Stained Rose', value: '#c41e3a', material: 'Glass windows' },
        { name: 'Royal Purple', value: '#4b0082', material: 'Church vestments' },
        { name: 'Gold Leaf', value: '#daa520', material: 'Altar decorations' },
        { name: 'Deep Blue', value: '#00008b', material: 'Cathedral ceiling' },
      ],
    },
    modernist: {
      name: 'Modernist',
      period: '20th Century',
      icon: '🏢',
      description: 'Clean lines and industrial materials',
      colors: [
        { name: 'Concrete Gray', value: '#808080', material: 'Raw concrete' },
        { name: 'Steel Blue', value: '#4682b4', material: 'Glass facades' },
        { name: 'White Wall', value: '#f5f5f5', material: 'Minimalist surfaces' },
        { name: 'Black Frame', value: '#1a1a1a', material: 'Steel structure' },
        { name: 'Chrome Silver', value: '#c0c0c0', material: 'Metal details' },
      ],
    },
    artDeco: {
      name: 'Art Deco',
      period: '1920s-1930s',
      icon: '🏨',
      description: 'Luxurious colors of the Jazz Age',
      colors: [
        { name: 'Gatsby Gold', value: '#ffd700', material: 'Decorative elements' },
        { name: 'Emerald Green', value: '#008b8b', material: 'Geometric patterns' },
        { name: 'Velvet Black', value: '#1a1a1a', material: 'Lacquered surfaces' },
        { name: 'Pearl White', value: '#f0f8ff', material: 'Marble floors' },
        { name: 'Bronze Age', value: '#cd853f', material: 'Metal fixtures' },
      ],
    },
    mediterranean: {
      name: 'Mediterranean',
      period: 'Traditional',
      icon: '🏠',
      description: 'Sun-washed colors of coastal villas',
      colors: [
        { name: 'Terra Cotta', value: '#e2725b', material: 'Roof tiles' },
        { name: 'Stucco White', value: '#f5f5f5', material: 'Wall finish' },
        { name: 'Azure Blue', value: '#007fff', material: 'Sea views' },
        { name: 'Olive Green', value: '#808000', material: 'Garden plants' },
        { name: 'Sand Stone', value: '#deb887', material: 'Natural stone' },
      ],
    },
    japanese: {
      name: 'Japanese',
      period: 'Traditional',
      icon: '🏯',
      description: 'Zen-inspired natural palette',
      colors: [
        { name: 'Rice Paper', value: '#f5f5dc', material: 'Shoji screens' },
        { name: 'Bamboo Green', value: '#789262', material: 'Garden elements' },
        { name: 'Cedar Brown', value: '#8b4513', material: 'Wood structure' },
        { name: 'Stone Gray', value: '#708090', material: 'Rock gardens' },
        { name: 'Ink Black', value: '#1a1a1a', material: 'Calligraphy' },
      ],
    },
    industrial: {
      name: 'Industrial',
      period: 'Modern',
      icon: '🏭',
      description: 'Raw materials and urban aesthetics',
      colors: [
        { name: 'Rust Orange', value: '#b7410e', material: 'Oxidized metal' },
        { name: 'Concrete Gray', value: '#808080', material: 'Exposed concrete' },
        { name: 'Pipe Black', value: '#1a1a1a', material: 'Metal ducts' },
        { name: 'Brick Red', value: '#b22222', material: 'Exposed brick' },
        { name: 'Steel Blue', value: '#4682b4', material: 'Metal fixtures' },
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
      <style>{archAnimation}</style>

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
          {Object.entries(archStyles).map(([key, { name, icon }]) => (
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
                transform: 'scaleY(1)',
                transformOrigin: 'bottom',
                animation: selectedStyle === key ? 'buildUp 0.3s ease-out' : 'none',
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

      {/* Style info */}
      <div style={{
        padding: '16px',
        background: '#2d2d2d',
        borderRadius: '8px',
        marginBottom: '24px',
        animation: 'fadeSlide 0.3s ease-out',
      }}>
        <div style={{
          fontSize: '0.8rem',
          color: '#9ca3af',
          marginBottom: '4px',
          fontFamily: 'monospace',
        }}>
          {archStyles[selectedStyle].period}
        </div>
        <div style={{
          fontSize: '0.9rem',
          color: '#e5e7eb',
        }}>
          {archStyles[selectedStyle].description}
        </div>
      </div>

      {/* Color palette */}
      <div style={{
        display: 'grid',
        gap: '12px',
        marginBottom: '24px',
      }}>
        {archStyles[selectedStyle].colors.map((color, index) => (
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
              animation: `fadeSlide 0.3s ease-out ${index * 0.1}s`,
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
                {color.material}
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

export default ColorPicker_38; 