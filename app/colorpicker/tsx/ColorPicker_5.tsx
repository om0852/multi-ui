'use client';
import React, { useState } from 'react';

const retroAnimation = `
  @keyframes groovy {
    0% { transform: rotate(0deg) scale(1); }
    25% { transform: rotate(3deg) scale(1.02); }
    75% { transform: rotate(-3deg) scale(0.98); }
    100% { transform: rotate(0deg) scale(1); }
  }

  @keyframes fadeRetro {
    from { opacity: 0; transform: translateY(-10px); }
    to { opacity: 1; transform: translateY(0); }
  }
`;

interface RetroEra {
  name: string;
  decade: string;
  style: string;
  description: string;
  colors: Array<{
    name: string;
    value: string;
    element: string;
  }>;
}

const ColorPicker_5: React.FC<{ onChange?: (color: string) => void }> = ({ onChange }) => {
  const [selectedEra, setSelectedEra] = useState<string>('psychedelic');
  const [selectedColor, setSelectedColor] = useState<string>('#ff6b6b');

  const retroEras: { [key: string]: RetroEra } = {
    psychedelic: {
      name: 'Psychedelic',
      decade: '1960s',
      style: 'Peace & Love',
      description: 'Vibrant, swirling colors of the hippie movement',
      colors: [
        { name: 'Electric Purple', value: '#8a2be2', element: 'Psychedelic posters' },
        { name: 'Acid Green', value: '#7fff00', element: 'Concert flyers' },
        { name: 'Love Pink', value: '#ff69b4', element: 'Flower power' },
        { name: 'Sunshine Yellow', value: '#ffd700', element: 'Peace symbols' },
        { name: 'Orange Dream', value: '#ff7f50', element: 'Tie-dye patterns' },
      ],
    },
    disco: {
      name: 'Disco Era',
      decade: '1970s',
      style: 'Dance & Glam',
      description: 'Glittering colors of the disco dance floor',
      colors: [
        { name: 'Mirror Ball', value: '#c0c0c0', element: 'Disco balls' },
        { name: 'Neon Blue', value: '#00ffff', element: 'Dance floor' },
        { name: 'Gold Lamé', value: '#daa520', element: 'Disco fashion' },
        { name: 'Studio Pink', value: '#ff1493', element: 'Neon signs' },
        { name: 'Ultra Violet', value: '#9400d3', element: 'Stage lights' },
      ],
    },
    memphis: {
      name: 'Memphis Design',
      decade: '1980s',
      style: 'Bold & Geometric',
      description: 'Playful patterns and bold geometric shapes',
      colors: [
        { name: 'Miami Pink', value: '#ff6b6b', element: 'Geometric shapes' },
        { name: 'Pool Blue', value: '#4dc9ff', element: 'Squiggly lines' },
        { name: 'Banana Yellow', value: '#ffd93d', element: 'Pattern blocks' },
        { name: 'Grid Black', value: '#2d3436', element: 'Background dots' },
        { name: 'Mint Pop', value: '#98ff98', element: 'Accent shapes' },
      ],
    },
    grunge: {
      name: 'Grunge',
      decade: '1990s',
      style: 'Raw & Rebellious',
      description: 'Distressed and muted alternative culture colors',
      colors: [
        { name: 'Flannel Red', value: '#8b4513', element: 'Worn clothing' },
        { name: 'Dirty Denim', value: '#4a5568', element: 'Faded jeans' },
        { name: 'Army Surplus', value: '#556b2f', element: 'Military gear' },
        { name: 'Thrift Brown', value: '#8b7355', element: 'Vintage leather' },
        { name: 'Faded Black', value: '#2d3436', element: 'Band t-shirts' },
      ],
    },
    atomic: {
      name: 'Atomic Age',
      decade: '1950s',
      style: 'Retro Futurism',
      description: 'Optimistic colors of post-war modernism',
      colors: [
        { name: 'Diner Red', value: '#ff0000', element: 'Vinyl booths' },
        { name: 'Turquoise Dream', value: '#40e0d0', element: 'Car finish' },
        { name: 'Formica Yellow', value: '#ffd700', element: 'Kitchen tables' },
        { name: 'Mint Julep', value: '#98ff98', element: 'Appliances' },
        { name: 'Chrome Silver', value: '#c0c0c0', element: 'Car details' },
      ],
    },
    vaporwave: {
      name: 'Vaporwave',
      decade: '2010s',
      style: 'Digital Nostalgia',
      description: 'Retro-futuristic digital aesthetic',
      colors: [
        { name: 'Cyber Pink', value: '#ff6fff', element: 'Neon grids' },
        { name: 'Virtual Blue', value: '#00ffff', element: 'Digital space' },
        { name: 'Palm Purple', value: '#9370db', element: 'Sunset vibes' },
        { name: 'Glitch Teal', value: '#40e0d0', element: 'CRT effects' },
        { name: 'Web Safe', value: '#ff00ff', element: 'Early web' },
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
      <style>{retroAnimation}</style>

      {/* Era selector */}
      <div style={{
        marginBottom: '24px',
      }}>
        <label style={{
          display: 'block',
          marginBottom: '8px',
          color: '#4b5563',
          fontSize: '0.9rem',
        }}>
          Retro Era
        </label>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '8px',
        }}>
          {Object.entries(retroEras).map(([key, { name }]) => (
            <button
              key={key}
              onClick={() => setSelectedEra(key)}
              style={{
                padding: '12px 8px',
                background: selectedEra === key ? '#f3f4f6' : 'transparent',
                border: '2px solid',
                borderColor: selectedEra === key ? '#6366f1' : '#e5e7eb',
                borderRadius: '6px',
                cursor: 'pointer',
                animation: selectedEra === key ? 'groovy 2s infinite' : 'none',
              }}
            >
              <span style={{
                fontSize: '0.9rem',
                color: '#4b5563',
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
        background: '#f3f4f6',
        borderRadius: '8px',
        marginBottom: '24px',
        animation: 'fadeRetro 0.3s ease-out',
      }}>
        <div style={{
          fontSize: '0.8rem',
          color: '#6b7280',
          marginBottom: '4px',
          fontFamily: 'monospace',
        }}>
          {retroEras[selectedEra].decade} • {retroEras[selectedEra].style}
        </div>
        <div style={{
          fontSize: '0.9rem',
          color: '#4b5563',
        }}>
          {retroEras[selectedEra].description}
        </div>
      </div>

      {/* Color palette */}
      <div style={{
        display: 'grid',
        gap: '12px',
        marginBottom: '24px',
      }}>
        {retroEras[selectedEra].colors.map((color, index) => (
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
              animation: `fadeRetro 0.3s ease-out ${index * 0.1}s`,
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
                {color.element}
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

export default ColorPicker_5; 