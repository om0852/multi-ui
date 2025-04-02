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

const ColorPicker_22 = ({ onChange }) => {
  const [baseColor, setBaseColor] = useState('#6366f1');
  const [selectedHarmony, setSelectedHarmony] = useState('complementary');
  const [generatedColors, setGeneratedColors] = useState([]);

  const harmonies = {
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

  const hexToHSL = (hex) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    if (!result) return 0;
    
    const r = parseInt(result[1], 16) / 255;
    const g = parseInt(result[2], 16) / 255;
    const b = parseInt(result[3], 16) / 255;
    
    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    let h = 0;

    if (max !== min) {
      if (max === r) {
        h = 60 * ((g - b) / (max - min));
      } else if (max === g) {
        h = 60 * (2 + (b - r) / (max - min));
      } else {
        h = 60 * (4 + (r - g) / (max - min));
      }
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
    <div>
      <style>{colorTheoryAnimation}</style>
      <input type="color" value={baseColor} onChange={(e) => setBaseColor(e.target.value)} />
      <select onChange={(e) => setSelectedHarmony(e.target.value)} value={selectedHarmony}>
        {Object.keys(harmonies).map((key) => (
          <option key={key} value={key}>{harmonies[key].name}</option>
        ))}
      </select>
      <div>
        {generatedColors.map((color, index) => (
          <div key={index} style={{ background: color, width: '50px', height: '50px' }}></div>
        ))}
      </div>
    </div>
  );
};

export default ColorPicker_22;
