'use client';
import React, { useState } from 'react';

const fashionAnimation = `
  @keyframes swing {
    0%, 100% { transform: rotate(-3deg); }
    50% { transform: rotate(3deg); }
  }

  @keyframes shimmer {
    0% { filter: brightness(1); }
    50% { filter: brightness(1.2); }
    100% { filter: brightness(1); }
  }
`;

interface FashionEra {
  name: string;
  period: string;
  icon: string;
  description: string;
  colors: Array<{
    name: string;
    value: string;
    garment: string;
  }>;
}

const ColorPicker_45: React.FC<{ onChange?: (color: string) => void }> = ({ onChange }) => {
  const [selectedEra, setSelectedEra] = useState<string>('victorian');
  const [selectedColor, setSelectedColor] = useState<string>('#800020');

  const fashionEras: { [key: string]: FashionEra } = {
    victorian: {
      name: 'Victorian',
      period: '1837-1901',
      icon: '👒',
      description: 'Elegant colors of the Victorian age',
      colors: [
        { name: 'Burgundy', value: '#800020', garment: 'Velvet dress' },
        { name: 'Royal Purple', value: '#4b0082', garment: 'Silk gown' },
        { name: 'Forest Green', value: '#228b22', garment: 'Walking suit' },
        { name: 'Navy Blue', value: '#000080', garment: 'Evening coat' },
        { name: 'Pearl White', value: '#f5f5f5', garment: 'Lace collar' },
      ],
    },
    artdeco: {
      name: 'Art Deco',
      period: '1920s-1930s',
      icon: '💃',
      description: 'Glamorous colors of the Jazz Age',
      colors: [
        { name: 'Gold Metallic', value: '#ffd700', garment: 'Flapper dress' },
        { name: 'Silver Screen', value: '#c0c0c0', garment: 'Evening gown' },
        { name: 'Jade Green', value: '#00a86b', garment: 'Cocktail dress' },
        { name: 'Black Onyx', value: '#0c0c0c', garment: 'Beaded dress' },
        { name: 'Pearl Cream', value: '#eae0c8', garment: 'Silk scarf' },
      ],
    },
    fifties: {
      name: '1950s',
      period: '1950-1959',
      icon: '👗',
      description: 'Vibrant colors of post-war optimism',
      colors: [
        { name: 'Powder Pink', value: '#ffd1dc', garment: 'Poodle skirt' },
        { name: 'Mint Green', value: '#98ff98', garment: 'Summer dress' },
        { name: 'Cherry Red', value: '#dc143c', garment: 'Swing dress' },
        { name: 'Baby Blue', value: '#89cff0', garment: 'Cardigan' },
        { name: 'Canary Yellow', value: '#ffef00', garment: 'Sundress' },
      ],
    },
    sixties: {
      name: '1960s',
      period: '1960-1969',
      icon: '✌️',
      description: 'Psychedelic colors of the mod era',
      colors: [
        { name: 'Go Go White', value: '#ffffff', garment: 'Mini dress' },
        { name: 'Mod Orange', value: '#ff4500', garment: 'A-line dress' },
        { name: 'Space Age Silver', value: '#c0c0c0', garment: 'Metallic suit' },
        { name: 'Hot Pink', value: '#ff69b4', garment: 'Shift dress' },
        { name: 'Electric Yellow', value: '#ffff00', garment: 'Geometric print' },
      ],
    },
    seventies: {
      name: '1970s',
      period: '1970-1979',
      icon: '🌸',
      description: 'Earth tones and disco glamour',
      colors: [
        { name: 'Disco Gold', value: '#ffd700', garment: 'Jumpsuit' },
        { name: 'Avocado Green', value: '#568203', garment: 'Bell bottoms' },
        { name: 'Burnt Orange', value: '#cc5500', garment: 'Peasant blouse' },
        { name: 'Brown Sugar', value: '#8b4513', garment: 'Suede vest' },
        { name: 'Platform White', value: '#fffaf0', garment: 'Disco suit' },
      ],
    },
    eighties: {
      name: '1980s',
      period: '1980-1989',
      icon: '🎸',
      description: 'Bold colors of the power era',
      colors: [
        { name: 'Neon Pink', value: '#ff1493', garment: 'Leg warmers' },
        { name: 'Power Blue', value: '#00bfff', garment: 'Shoulder pads' },
        { name: 'Electric Purple', value: '#9370db', garment: 'Spandex' },
        { name: 'Miami Green', value: '#98ff98', garment: 'Track suit' },
        { name: 'Flash Yellow', value: '#ffff00', garment: 'Workout gear' },
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
      <style>{fashionAnimation}</style>

      {/* Era selector */}
      <div style={{
        marginBottom: '24px',
      }}>
        <label style={{
          display: 'block',
          marginBottom: '8px',
          color: '#e5e7eb',
          fontSize: '0.9rem',
        }}>
          Fashion Era
        </label>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '8px',
        }}>
          {Object.entries(fashionEras).map(([key, { name, icon }]) => (
            <button
              key={key}
              onClick={() => setSelectedEra(key)}
              style={{
                padding: '12px 8px',
                background: selectedEra === key ? '#2d2d2d' : 'transparent',
                border: '2px solid',
                borderColor: selectedEra === key ? '#6366f1' : '#4b5563',
                borderRadius: '6px',
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '4px',
                animation: selectedEra === key ? 'swing 2s infinite' : 'none',
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
                fontWeight: selectedEra === key ? 500 : 400,
              }}>
                {name}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Era info */}
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
          {fashionEras[selectedEra].period}
        </div>
        <div style={{
          fontSize: '0.9rem',
          color: '#e5e7eb',
        }}>
          {fashionEras[selectedEra].description}
        </div>
      </div>

      {/* Color palette */}
      <div style={{
        display: 'grid',
        gap: '12px',
        marginBottom: '24px',
      }}>
        {fashionEras[selectedEra].colors.map((color) => (
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
              animation: selectedColor === color.value ? 'shimmer 2s infinite' : 'none',
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
                {color.garment}
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

export default ColorPicker_45; 