'use client';
import React, { useState } from 'react';

const culturalAnimation = `
  @keyframes floatIn {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
  }

  @keyframes symbolRotate {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
`;

interface CulturalTheme {
  name: string;
  region: string;
  symbol: string;
  description: string;
  colors: Array<{
    name: string;
    value: string;
    significance: string;
  }>;
}

const ColorPicker_28: React.FC<{ onChange?: (color: string) => void }> = ({ onChange }) => {
  const [selectedCulture, setSelectedCulture] = useState<string>('japanese');
  const [selectedColor, setSelectedColor] = useState<string>('#bc002d');

  const culturalThemes: { [key: string]: CulturalTheme } = {
    japanese: {
      name: 'Japanese Traditional',
      region: 'East Asia',
      symbol: '🎌',
      description: 'Traditional Japanese colors reflecting nature and seasons',
      colors: [
        { name: 'Shinku (Deep Red)', value: '#bc002d', significance: 'Vitality and good fortune' },
        { name: 'Kon (Navy)', value: '#223a70', significance: 'Depth and stability' },
        { name: 'Sakura (Cherry Blossom)', value: '#ffd1dc', significance: 'Renewal and beauty' },
        { name: 'Matcha (Green Tea)', value: '#b7ba6b', significance: 'Harmony and peace' },
        { name: 'Kincha (Gold)', value: '#e6b422', significance: 'Prosperity and elegance' },
      ],
    },
    indian: {
      name: 'Indian Heritage',
      region: 'South Asia',
      symbol: '🕉️',
      description: 'Vibrant colors inspired by Indian festivals and traditions',
      colors: [
        { name: 'Kumkuma (Saffron)', value: '#ff7f00', significance: 'Sacred and auspicious' },
        { name: 'Neelam (Royal Blue)', value: '#4169e1', significance: 'Divinity and power' },
        { name: 'Mehendi (Henna)', value: '#937a62', significance: 'Earth and tradition' },
        { name: 'Gulabi (Pink)', value: '#ff91af', significance: 'Love and care' },
        { name: 'Haldi (Turmeric)', value: '#ffc000', significance: 'Purity and prosperity' },
      ],
    },
    moroccan: {
      name: 'Moroccan Palette',
      region: 'North Africa',
      symbol: '🕌',
      description: 'Rich colors from Moroccan architecture and textiles',
      colors: [
        { name: 'Majorelle Blue', value: '#6050dc', significance: 'Protection and spirituality' },
        { name: 'Terracotta', value: '#c04000', significance: 'Earth and warmth' },
        { name: 'Mint Tea', value: '#98ff98', significance: 'Hospitality and friendship' },
        { name: 'Desert Gold', value: '#edc967', significance: 'Luxury and abundance' },
        { name: 'Atlas Cedar', value: '#4a5d23', significance: 'Nature and strength' },
      ],
    },
    scandinavian: {
      name: 'Nordic Design',
      region: 'Northern Europe',
      symbol: '❄️',
      description: 'Clean, minimal colors inspired by Nordic landscapes',
      colors: [
        { name: 'Arctic White', value: '#f8f8ff', significance: 'Purity and space' },
        { name: 'Fjord Blue', value: '#87ceeb', significance: 'Water and sky' },
        { name: 'Pine Forest', value: '#2e4347', significance: 'Nature and depth' },
        { name: 'Granite Gray', value: '#808080', significance: 'Stability and calm' },
        { name: 'Birch Wood', value: '#deb887', significance: 'Warmth and comfort' },
      ],
    },
    aztec: {
      name: 'Aztec Heritage',
      region: 'Mesoamerica',
      symbol: '🌞',
      description: 'Bold colors from ancient Aztec art and culture',
      colors: [
        { name: 'Turquoise', value: '#40e0d0', significance: 'Divinity and royalty' },
        { name: 'Blood Red', value: '#8b0000', significance: 'Life and sacrifice' },
        { name: 'Jade Green', value: '#00a86b', significance: 'Wealth and nature' },
        { name: 'Sun Gold', value: '#ffd700', significance: 'Power and deity' },
        { name: 'Obsidian', value: '#1a1110', significance: 'Mystery and protection' },
      ],
    },
    persian: {
      name: 'Persian Art',
      region: 'Middle East',
      symbol: '🕯️',
      description: 'Elegant colors from Persian miniatures and carpets',
      colors: [
        { name: 'Lapis Blue', value: '#191970', significance: 'Royalty and wisdom' },
        { name: 'Pomegranate', value: '#c41e3a', significance: 'Life and fertility' },
        { name: 'Isfahan Turquoise', value: '#00ced1', significance: 'Paradise and protection' },
        { name: 'Persian Rose', value: '#fe28a2', significance: 'Love and poetry' },
        { name: 'Saffron Gold', value: '#ffa500', significance: 'Wealth and spice' },
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
      background: '#ffffff',
      borderRadius: '16px',
      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
      width: '320px',
    }}>
      <style>{culturalAnimation}</style>

      {/* Culture selector */}
      <div style={{
        marginBottom: '24px',
      }}>
        <label style={{
          display: 'block',
          marginBottom: '8px',
          color: '#4b5563',
          fontSize: '0.9rem',
        }}>
          Cultural Heritage
        </label>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '8px',
        }}>
          {Object.entries(culturalThemes).map(([key, { name, symbol }]) => (
            <button
              key={key}
              onClick={() => setSelectedCulture(key)}
              style={{
                padding: '12px 8px',
                background: selectedCulture === key ? '#f3f4f6' : 'transparent',
                border: '2px solid',
                borderColor: selectedCulture === key ? '#6366f1' : '#e5e7eb',
                borderRadius: '6px',
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '4px',
                transition: 'all 0.2s ease',
              }}
            >
              <span style={{
                fontSize: '1.5rem',
                animation: selectedCulture === key ? 'symbolRotate 4s linear infinite' : 'none',
              }}>
                {symbol}
              </span>
              <span style={{
                fontSize: '0.8rem',
                color: '#4b5563',
                textAlign: 'center',
              }}>
                {name}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Culture info */}
      <div style={{
        padding: '16px',
        background: '#f3f4f6',
        borderRadius: '8px',
        marginBottom: '24px',
        animation: 'floatIn 0.3s ease-out',
      }}>
        <div style={{
          fontSize: '0.8rem',
          color: '#6b7280',
          marginBottom: '4px',
          fontFamily: 'monospace',
        }}>
          {culturalThemes[selectedCulture].region}
        </div>
        <div style={{
          fontSize: '0.9rem',
          color: '#4b5563',
        }}>
          {culturalThemes[selectedCulture].description}
        </div>
      </div>

      {/* Color palette */}
      <div style={{
        display: 'grid',
        gap: '12px',
        marginBottom: '24px',
      }}>
        {culturalThemes[selectedCulture].colors.map((color, index) => (
          <button
            key={color.value}
            onClick={() => handleColorSelect(color.value)}
            style={{
              display: 'grid',
              gridTemplateColumns: '48px 1fr',
              gap: '12px',
              padding: '8px',
              background: '#f9fafb',
              border: '2px solid',
              borderColor: selectedColor === color.value ? '#6366f1' : 'transparent',
              borderRadius: '8px',
              cursor: 'pointer',
              animation: `floatIn 0.3s ease-out ${index * 0.1}s`,
              alignItems: 'center',
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
                color: '#1f2937',
                fontWeight: 500,
                marginBottom: '2px',
              }}>
                {color.name}
              </div>
              <div style={{
                fontSize: '0.8rem',
                color: '#6b7280',
              }}>
                {color.significance}
              </div>
            </div>
          </button>
        ))}
      </div>

      {/* Selected color display */}
      <div style={{
        padding: '12px',
        background: '#f3f4f6',
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
            border: '2px solid #e5e7eb',
            borderRadius: '6px',
            fontSize: '0.9rem',
            color: '#4b5563',
            fontFamily: 'monospace',
            background: '#ffffff',
          }}
        />
      </div>
    </div>
  );
};

export default ColorPicker_28; 