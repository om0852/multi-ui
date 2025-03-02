'use client';
import React, { useState } from 'react';

const sportsAnimation = `
  @keyframes bounce {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-5px); }
  }

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

interface SportsTheme {
  name: string;
  category: string;
  icon: string;
  description: string;
  colors: Array<{
    name: string;
    value: string;
    equipment: string;
  }>;
}

const ColorPicker_54: React.FC<{ onChange?: (color: string) => void }> = ({ onChange }) => {
  const [selectedSport, setSelectedSport] = useState<string>('basketball');
  const [selectedColor, setSelectedColor] = useState<string>('#ff6b00');

  const sportsThemes: { [key: string]: SportsTheme } = {
    basketball: {
      name: 'Basketball',
      category: 'Court Sports',
      icon: '🏀',
      description: 'Classic basketball colors',
      colors: [
        { name: 'Ball Orange', value: '#ff6b00', equipment: 'Basketball' },
        { name: 'Court Brown', value: '#8b4513', equipment: 'Hardwood floor' },
        { name: 'Jersey White', value: '#ffffff', equipment: 'Home jersey' },
        { name: 'Line Black', value: '#000000', equipment: 'Court lines' },
        { name: 'Net Gray', value: '#c0c0c0', equipment: 'Basketball net' },
      ],
    },
    soccer: {
      name: 'Soccer',
      category: 'Field Sports',
      icon: '⚽',
      description: 'Soccer field and equipment',
      colors: [
        { name: 'Grass Green', value: '#228b22', equipment: 'Field turf' },
        { name: 'Ball White', value: '#f5f5f5', equipment: 'Soccer ball' },
        { name: 'Goal Silver', value: '#c0c0c0', equipment: 'Goal posts' },
        { name: 'Line White', value: '#ffffff', equipment: 'Field lines' },
        { name: 'Cleat Black', value: '#2f2f2f', equipment: 'Soccer cleats' },
      ],
    },
    tennis: {
      name: 'Tennis',
      category: 'Racquet Sports',
      icon: '🎾',
      description: 'Tennis court colors',
      colors: [
        { name: 'Ball Yellow', value: '#ffff00', equipment: 'Tennis ball' },
        { name: 'Court Green', value: '#355e3b', equipment: 'Court surface' },
        { name: 'Line White', value: '#ffffff', equipment: 'Court lines' },
        { name: 'Net Black', value: '#2f2f2f', equipment: 'Tennis net' },
        { name: 'Racquet Red', value: '#ff0000', equipment: 'Tennis racquet' },
      ],
    },
    swimming: {
      name: 'Swimming',
      category: 'Aquatics',
      icon: '🏊',
      description: 'Pool and water sports',
      colors: [
        { name: 'Pool Blue', value: '#00bfff', equipment: 'Pool water' },
        { name: 'Lane White', value: '#ffffff', equipment: 'Lane lines' },
        { name: 'Tile Blue', value: '#4169e1', equipment: 'Pool tiles' },
        { name: 'Cap Red', value: '#ff0000', equipment: 'Swim cap' },
        { name: 'Suit Navy', value: '#000080', equipment: 'Swimsuit' },
      ],
    },
    athletics: {
      name: 'Athletics',
      category: 'Track & Field',
      icon: '🏃',
      description: 'Track and field colors',
      colors: [
        { name: 'Track Red', value: '#b22222', equipment: 'Running track' },
        { name: 'Lane White', value: '#ffffff', equipment: 'Track lines' },
        { name: 'Field Green', value: '#228b22', equipment: 'Field area' },
        { name: 'Hurdle Orange', value: '#ffa500', equipment: 'Hurdles' },
        { name: 'Pole Blue', value: '#4682b4', equipment: 'Pole vault' },
      ],
    },
    baseball: {
      name: 'Baseball',
      category: 'Diamond Sports',
      icon: '⚾',
      description: 'Baseball field elements',
      colors: [
        { name: 'Ball White', value: '#f5f5f5', equipment: 'Baseball' },
        { name: 'Diamond Brown', value: '#deb887', equipment: 'Infield dirt' },
        { name: 'Grass Green', value: '#228b22', equipment: 'Outfield' },
        { name: 'Base White', value: '#ffffff', equipment: 'Bases' },
        { name: 'Bat Brown', value: '#8b4513', equipment: 'Baseball bat' },
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
      <style>{sportsAnimation}</style>

      {/* Sport selector */}
      <div style={{
        marginBottom: '24px',
      }}>
        <label style={{
          display: 'block',
          marginBottom: '8px',
          color: '#e5e7eb',
          fontSize: '0.9rem',
        }}>
          Sport Type
        </label>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '8px',
        }}>
          {Object.entries(sportsThemes).map(([key, { name, icon }]) => (
            <button
              key={key}
              onClick={() => setSelectedSport(key)}
              style={{
                padding: '12px 8px',
                background: selectedSport === key ? '#2d2d2d' : 'transparent',
                border: '2px solid',
                borderColor: selectedSport === key ? '#6366f1' : '#4b5563',
                borderRadius: '6px',
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '4px',
                animation: selectedSport === key ? 'bounce 1s infinite ease-in-out' : 'none',
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
                fontWeight: selectedSport === key ? 500 : 400,
              }}>
                {name}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Sport info */}
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
          {sportsThemes[selectedSport].category}
        </div>
        <div style={{
          fontSize: '0.9rem',
          color: '#e5e7eb',
        }}>
          {sportsThemes[selectedSport].description}
        </div>
      </div>

      {/* Color palette */}
      <div style={{
        display: 'grid',
        gap: '12px',
        marginBottom: '24px',
      }}>
        {sportsThemes[selectedSport].colors.map((color) => (
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
              animation: selectedColor === color.value ? 'spin 4s infinite linear' : 'none',
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
                {color.equipment}
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

export default ColorPicker_54; 