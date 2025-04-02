'use client';
import React, { useState } from 'react';

const transportAnimation = `
  @keyframes drive {
    0% { transform: translateX(-5px); }
    50% { transform: translateX(5px); }
    100% { transform: translateX(-5px); }
  }

  @keyframes engine {
    0% { transform: scale(1); }
    25% { transform: scale(1.05); }
    50% { transform: scale(1); }
    75% { transform: scale(0.95); }
    100% { transform: scale(1); }
  }
`;

interface TransportTheme {
  name: string;
  category: string;
  icon: string;
  description: string;
  colors: Array<{
    name: string;
    value: string;
    component: string;
  }>;
}

const ColorPicker_58: React.FC<{ onChange?: (color: string) => void }> = ({ onChange }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('cars');
  const [selectedColor, setSelectedColor] = useState<string>('#ff0000');

  const transportThemes: { [key: string]: TransportTheme } = {
    cars: {
      name: 'Cars',
      category: 'Road Vehicles',
      icon: '🚗',
      description: 'Classic automotive colors',
      colors: [
        { name: 'Racing Red', value: '#ff0000', component: 'Sports car' },
        { name: 'Metallic Silver', value: '#c0c0c0', component: 'Luxury sedan' },
        { name: 'Pearl White', value: '#f5f5f5', component: 'Electric vehicle' },
        { name: 'Midnight Black', value: '#2f2f2f', component: 'Executive car' },
        { name: 'Navy Blue', value: '#000080', component: 'Family SUV' },
      ],
    },
    aircraft: {
      name: 'Aircraft',
      category: 'Aviation',
      icon: '✈️',
      description: 'Aviation and aerospace colors',
      colors: [
        { name: 'Sky Blue', value: '#87ceeb', component: 'Fuselage' },
        { name: 'Cloud White', value: '#ffffff', component: 'Wings' },
        { name: 'Safety Orange', value: '#ff4500', component: 'Life vests' },
        { name: 'Cockpit Gray', value: '#808080', component: 'Instruments' },
        { name: 'Engine Silver', value: '#c0c0c0', component: 'Turbines' },
      ],
    },
    marine: {
      name: 'Marine',
      category: 'Watercraft',
      icon: '🚢',
      description: 'Nautical vessel colors',
      colors: [
        { name: 'Hull White', value: '#f5f5f5', component: 'Ship body' },
        { name: 'Ocean Blue', value: '#000080', component: 'Waterline' },
        { name: 'Deck Brown', value: '#8b4513', component: 'Wooden deck' },
        { name: 'Anchor Gray', value: '#708090', component: 'Metal fittings' },
        { name: 'Safety Yellow', value: '#ffd700', component: 'Life rafts' },
      ],
    },
    trains: {
      name: 'Trains',
      category: 'Rail Transport',
      icon: '🚂',
      description: 'Railway color schemes',
      colors: [
        { name: 'Engine Black', value: '#2f2f2f', component: 'Locomotive' },
        { name: 'Carriage Green', value: '#228b22', component: 'Passenger cars' },
        { name: 'Signal Red', value: '#ff0000', component: 'Warning lights' },
        { name: 'Rail Silver', value: '#c0c0c0', component: 'Train tracks' },
        { name: 'Cargo Brown', value: '#8b4513', component: 'Freight cars' },
      ],
    },
    bikes: {
      name: 'Bikes',
      category: 'Two Wheelers',
      icon: '🏍️',
      description: 'Motorcycle and bicycle colors',
      colors: [
        { name: 'Sport Red', value: '#ff0000', component: 'Racing bike' },
        { name: 'Chrome Silver', value: '#c0c0c0', component: 'Exhaust pipes' },
        { name: 'Matte Black', value: '#2f2f2f', component: 'Frame' },
        { name: 'Neon Green', value: '#39ff14', component: 'Street bike' },
        { name: 'Leather Brown', value: '#8b4513', component: 'Seat' },
      ],
    },
    emergency: {
      name: 'Emergency',
      category: 'Service Vehicles',
      icon: '🚑',
      description: 'Emergency vehicle colors',
      colors: [
        { name: 'Ambulance White', value: '#ffffff', component: 'Medical vehicle' },
        { name: 'Fire Engine Red', value: '#ff0000', component: 'Fire truck' },
        { name: 'Police Blue', value: '#0000ff', component: 'Police car' },
        { name: 'Hazard Yellow', value: '#ffff00', component: 'Warning stripes' },
        { name: 'Rescue Orange', value: '#ff4500', component: 'Search vehicle' },
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
      <style>{transportAnimation}</style>

      {/* Category selector */}
      <div style={{
        marginBottom: '24px',
      }}>
        <label style={{
          display: 'block',
          marginBottom: '8px',
          color: '#e5e7eb',
          fontSize: '0.9rem',
        }}>
          Vehicle Type
        </label>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '8px',
        }}>
          {Object.entries(transportThemes).map(([key, { name, icon }]) => (
            <button
              key={key}
              onClick={() => setSelectedCategory(key)}
              style={{
                padding: '12px 8px',
                background: selectedCategory === key ? '#2d2d2d' : 'transparent',
                border: '2px solid',
                borderColor: selectedCategory === key ? '#6366f1' : '#4b5563',
                borderRadius: '6px',
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '4px',
                animation: selectedCategory === key ? 'drive 2s infinite ease-in-out' : 'none',
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
                fontWeight: selectedCategory === key ? 500 : 400,
              }}>
                {name}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Transport info */}
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
          {transportThemes[selectedCategory].category}
        </div>
        <div style={{
          fontSize: '0.9rem',
          color: '#e5e7eb',
        }}>
          {transportThemes[selectedCategory].description}
        </div>
      </div>

      {/* Color palette */}
      <div style={{
        display: 'grid',
        gap: '12px',
        marginBottom: '24px',
      }}>
        {transportThemes[selectedCategory].colors.map((color) => (
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
              animation: selectedColor === color.value ? 'engine 1s infinite ease-in-out' : 'none',
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
                {color.component}
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

export default ColorPicker_58; 