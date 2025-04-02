'use client';
import React, { useState, useEffect } from 'react';

const colorTheoryAnimation = `
  @keyframes rotatePalette {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }

  @keyframes colorPop {
    0% { transform: scale(1); }
    50% { transform: scale(1.1); }
    100% { transform: scale(1); }
  }
`;

interface ColorHarmony {
  name: string;
  description: string;
  getColors: (baseHue: number) => string[];
}

const ColorPicker_22: React.FC<{ onChange?: (color: string) => void }> = ({ onChange }) => {
  const [baseColor, setBaseColor] = useState('#6366f1');
  const [selectedHarmony, setSelectedHarmony] = useState<string>('complementary');
  const [generatedColors, setGeneratedColors] = useState<string[]>([]);

  const harmonies: { [key: string]: ColorHarmony } = {
    complementary: {
      name: 'Complementary',
      description: 'Colors opposite each other on the color wheel',
      getColors: (hue) => [
        `hsl(${hue}, 70%, 50%)`,
        `hsl(${(hue + 180) % 360}, 70%, 50%)`,
      ],
    },
    triadic: {
      name: 'Triadic',
      description: 'Three colors equally spaced on the color wheel',
      getColors: (hue) => [
        `hsl(${hue}, 70%, 50%)`,
        `hsl(${(hue + 120) % 360}, 70%, 50%)`,
        `hsl(${(hue + 240) % 360}, 70%, 50%)`,
      ],
    },
    splitComplementary: {
      name: 'Split Complementary',
      description: 'Base color and two colors adjacent to its complement',
      getColors: (hue) => [
        `hsl(${hue}, 70%, 50%)`,
        `hsl(${(hue + 150) % 360}, 70%, 50%)`,
        `hsl(${(hue + 210) % 360}, 70%, 50%)`,
      ],
    },
    analogous: {
      name: 'Analogous',
      description: 'Colors adjacent to each other on the color wheel',
      getColors: (hue) => [
        `hsl(${(hue - 30 + 360) % 360}, 70%, 50%)`,
        `hsl(${hue}, 70%, 50%)`,
        `hsl(${(hue + 30) % 360}, 70%, 50%)`,
      ],
    },
    square: {
      name: 'Square',
      description: 'Four colors evenly spaced on the color wheel',
      getColors: (hue) => [
        `hsl(${hue}, 70%, 50%)`,
        `hsl(${(hue + 90) % 360}, 70%, 50%)`,
        `hsl(${(hue + 180) % 360}, 70%, 50%)`,
        `hsl(${(hue + 270) % 360}, 70%, 50%)`,
      ],
    },
  };

  const hexToHSL = (hex: string): number => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    if (!result) return 0;
    
    const r = parseInt(result[1], 16) / 255;
    const g = parseInt(result[2], 16) / 255;
    const b = parseInt(result[3], 16) / 255;
    
    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    let h = 0;

    if (max === min) {
      h = 0;
    } else if (max === r) {
      h = 60 * ((g - b) / (max - min));
    } else if (max === g) {
      h = 60 * (2 + (b - r) / (max - min));
    } else {
      h = 60 * (4 + (r - g) / (max - min));
    }

    if (h < 0) h += 360;
    return h;
  };

  useEffect(() => {
    const hue = hexToHSL(baseColor);
    const colors = harmonies[selectedHarmony].getColors(hue);
    setGeneratedColors(colors);
    onChange?.(colors[0]);
  }, [baseColor, selectedHarmony]);

  return (
    <div style={{
      padding: '24px',
      background: '#ffffff',
      borderRadius: '16px',
      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
      width: '320px',
    }}>
      <style>{colorTheoryAnimation}</style>

      {/* Base color selector */}
      <div style={{
        marginBottom: '24px',
      }}>
        <label style={{
          display: 'block',
          marginBottom: '8px',
          color: '#4b5563',
          fontSize: '0.9rem',
        }}>
          Base Color
        </label>
        <div style={{
          display: 'flex',
          gap: '8px',
        }}>
          <input
            type="color"
            value={baseColor}
            onChange={(e) => setBaseColor(e.target.value)}
            style={{
              width: '60px',
              height: '36px',
              padding: '0',
              border: '2px solid #e5e7eb',
              borderRadius: '6px',
              cursor: 'pointer',
            }}
          />
          <input
            type="text"
            value={baseColor}
            onChange={(e) => setBaseColor(e.target.value)}
            style={{
              flex: 1,
              padding: '8px',
              border: '2px solid #e5e7eb',
              borderRadius: '6px',
              fontSize: '0.9rem',
              color: '#4b5563',
              fontFamily: 'monospace',
            }}
          />
        </div>
      </div>

      {/* Harmony selector */}
      <div style={{
        marginBottom: '24px',
      }}>
        <label style={{
          display: 'block',
          marginBottom: '8px',
          color: '#4b5563',
          fontSize: '0.9rem',
        }}>
          Color Harmony
        </label>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '8px',
        }}>
          {Object.entries(harmonies).map(([key, { name }]) => (
            <button
              key={key}
              onClick={() => setSelectedHarmony(key)}
              style={{
                padding: '8px',
                background: selectedHarmony === key ? '#f3f4f6' : 'transparent',
                border: '2px solid',
                borderColor: selectedHarmony === key ? '#6366f1' : '#e5e7eb',
                borderRadius: '6px',
                fontSize: '0.8rem',
                color: '#4b5563',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
              }}
            >
              {name}
            </button>
          ))}
        </div>
      </div>

      {/* Harmony description */}
      <div style={{
        padding: '12px',
        background: '#f3f4f6',
        borderRadius: '8px',
        marginBottom: '24px',
        fontSize: '0.9rem',
        color: '#4b5563',
      }}>
        {harmonies[selectedHarmony].description}
      </div>

      {/* Generated colors */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: `repeat(${generatedColors.length}, 1fr)`,
        gap: '8px',
        marginBottom: '16px',
      }}>
        {generatedColors.map((color, index) => (
          <button
            key={index}
            onClick={() => {
              setBaseColor(color);
              onChange?.(color);
            }}
            style={{
              width: '100%',
              aspectRatio: '1',
              background: color,
              border: color === baseColor ? '3px solid #000' : '3px solid transparent',
              borderRadius: '8px',
              cursor: 'pointer',
              transition: 'transform 0.2s ease',
              animation: `colorPop 0.3s ease-out ${index * 0.1}s`,
            }}
          />
        ))}
      </div>

      {/* Color values */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: `repeat(${generatedColors.length}, 1fr)`,
        gap: '8px',
      }}>
        {generatedColors.map((color, index) => (
          <div
            key={index}
            style={{
              fontSize: '0.8rem',
              color: '#6b7280',
              textAlign: 'center',
              fontFamily: 'monospace',
            }}
          >
            {color}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ColorPicker_22; 