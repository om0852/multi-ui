'use client';
import React, { useState } from 'react';

const scienceAnimation = `
  @keyframes bubble {
    0% { transform: translateY(0) scale(1); opacity: 0.8; }
    50% { transform: translateY(-5px) scale(1.1); opacity: 1; }
    100% { transform: translateY(0) scale(1); opacity: 0.8; }
  }

  @keyframes react {
    0% { transform: rotate(0deg) scale(1); }
    50% { transform: rotate(180deg) scale(1.1); }
    100% { transform: rotate(360deg) scale(1); }
  }
`;

interface ScienceTheme {
  name: string;
  field: string;
  icon: string;
  description: string;
  colors: Array<{
    name: string;
    value: string;
    element: string;
  }>;
}

const ColorPicker_57: React.FC<{ onChange?: (color: string) => void }> = ({ onChange }) => {
  const [selectedField, setSelectedField] = useState<string>('chemistry');
  const [selectedColor, setSelectedColor] = useState<string>('#00ff00');

  const scienceThemes: { [key: string]: ScienceTheme } = {
    chemistry: {
      name: 'Chemistry',
      field: 'Chemical Science',
      icon: '🧪',
      description: 'Laboratory colors and reactions',
      colors: [
        { name: 'Acid Green', value: '#00ff00', element: 'Chemical solution' },
        { name: 'Flame Orange', value: '#ff4500', element: 'Bunsen burner' },
        { name: 'Copper Blue', value: '#00ffff', element: 'Copper sulfate' },
        { name: 'Mercury Silver', value: '#c0c0c0', element: 'Metal elements' },
        { name: 'Iodine Purple', value: '#8b008b', element: 'Iodine vapor' },
      ],
    },
    physics: {
      name: 'Physics',
      field: 'Physical Science',
      icon: '⚛️',
      description: 'Energy and matter colors',
      colors: [
        { name: 'Quantum Blue', value: '#4169e1', element: 'Wave function' },
        { name: 'Plasma Pink', value: '#ff69b4', element: 'Ionized gas' },
        { name: 'Laser Red', value: '#ff0000', element: 'Light beam' },
        { name: 'Neutron Gray', value: '#696969', element: 'Particle' },
        { name: 'Field Green', value: '#98fb98', element: 'Force field' },
      ],
    },
    biology: {
      name: 'Biology',
      field: 'Life Science',
      icon: '🧬',
      description: 'Living system colors',
      colors: [
        { name: 'Cell Blue', value: '#87ceeb', element: 'Cell membrane' },
        { name: 'DNA Green', value: '#32cd32', element: 'Double helix' },
        { name: 'Blood Red', value: '#8b0000', element: 'Circulatory system' },
        { name: 'Tissue Pink', value: '#ffc0cb', element: 'Organic tissue' },
        { name: 'Chlorophyll', value: '#228b22', element: 'Plant cells' },
      ],
    },
    astronomy: {
      name: 'Astronomy',
      field: 'Space Science',
      icon: '🌌',
      description: 'Cosmic observation colors',
      colors: [
        { name: 'Nebula Purple', value: '#9370db', element: 'Gas clouds' },
        { name: 'Star White', value: '#ffffff', element: 'Stellar bodies' },
        { name: 'Galaxy Blue', value: '#191970', element: 'Deep space' },
        { name: 'Mars Red', value: '#b22222', element: 'Red planet' },
        { name: 'Solar Gold', value: '#ffd700', element: 'Sun surface' },
      ],
    },
    geology: {
      name: 'Geology',
      field: 'Earth Science',
      icon: '🌋',
      description: 'Mineral and rock colors',
      colors: [
        { name: 'Magma Red', value: '#ff4500', element: 'Molten rock' },
        { name: 'Slate Gray', value: '#708090', element: 'Sedimentary rock' },
        { name: 'Crystal Clear', value: '#f0f8ff', element: 'Quartz' },
        { name: 'Fossil Brown', value: '#8b4513', element: 'Petrified remains' },
        { name: 'Mineral Green', value: '#2e8b57', element: 'Malachite' },
      ],
    },
    laboratory: {
      name: 'Lab Equipment',
      field: 'Scientific Tools',
      icon: '🔬',
      description: 'Research instrument colors',
      colors: [
        { name: 'Steel Gray', value: '#b8b8b8', element: 'Lab equipment' },
        { name: 'Safety Orange', value: '#ff8c00', element: 'Warning signs' },
        { name: 'Glass Clear', value: '#f5f5f5', element: 'Beakers' },
        { name: 'Rubber Black', value: '#2f2f2f', element: 'Safety gear' },
        { name: 'Scale Blue', value: '#4682b4', element: 'Digital displays' },
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
      <style>{scienceAnimation}</style>

      {/* Field selector */}
      <div style={{
        marginBottom: '24px',
      }}>
        <label style={{
          display: 'block',
          marginBottom: '8px',
          color: '#e5e7eb',
          fontSize: '0.9rem',
        }}>
          Scientific Field
        </label>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '8px',
        }}>
          {Object.entries(scienceThemes).map(([key, { name, icon }]) => (
            <button
              key={key}
              onClick={() => setSelectedField(key)}
              style={{
                padding: '12px 8px',
                background: selectedField === key ? '#2d2d2d' : 'transparent',
                border: '2px solid',
                borderColor: selectedField === key ? '#6366f1' : '#4b5563',
                borderRadius: '6px',
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '4px',
                animation: selectedField === key ? 'bubble 3s infinite ease-in-out' : 'none',
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
                fontWeight: selectedField === key ? 500 : 400,
              }}>
                {name}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Science info */}
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
          {scienceThemes[selectedField].field}
        </div>
        <div style={{
          fontSize: '0.9rem',
          color: '#e5e7eb',
        }}>
          {scienceThemes[selectedField].description}
        </div>
      </div>

      {/* Color palette */}
      <div style={{
        display: 'grid',
        gap: '12px',
        marginBottom: '24px',
      }}>
        {scienceThemes[selectedField].colors.map((color) => (
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
              animation: selectedColor === color.value ? 'react 3s infinite linear' : 'none',
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

export default ColorPicker_57; 