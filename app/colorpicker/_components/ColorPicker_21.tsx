'use client';
import React, { useState, useEffect } from 'react';

const mixerAnimation = `
  @keyframes gradientFlow {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }

  @keyframes scaleIn {
    from { transform: scale(0.95); opacity: 0; }
    to { transform: scale(1); opacity: 1; }
  }
`;

const ColorPicker_21: React.FC<{ onChange?: (color: string) => void }> = ({ onChange }) => {
  const [colors, setColors] = useState([
    { value: '#ff6b6b', weight: 50 },
    { value: '#4ecdc4', weight: 50 },
  ]);
  const [mixedColor, setMixedColor] = useState('#ff6b6b');

  // Convert hex to RGB
  const hexToRgb = (hex: string): [number, number, number] => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result
      ? [
          parseInt(result[1], 16),
          parseInt(result[2], 16),
          parseInt(result[3], 16),
        ]
      : [0, 0, 0];
  };

  // Convert RGB to hex
  const rgbToHex = (r: number, g: number, b: number): string => {
    return '#' + [r, g, b]
      .map(x => Math.round(x).toString(16).padStart(2, '0'))
      .join('');
  };

  // Mix colors based on weights
  const mixColors = () => {
    const totalWeight = colors.reduce((sum, color) => sum + color.weight, 0);
    const normalizedColors = colors.map(color => ({
      rgb: hexToRgb(color.value),
      weight: color.weight / totalWeight,
    }));

    const mixed = normalizedColors.reduce(
      (acc, { rgb, weight }) => {
        return [
          acc[0] + rgb[0] * weight,
          acc[1] + rgb[1] * weight,
          acc[2] + rgb[2] * weight,
        ];
      },
      [0, 0, 0]
    );

    const hexColor = rgbToHex(mixed[0], mixed[1], mixed[2]);
    setMixedColor(hexColor);
    onChange?.(hexColor);
  };

  useEffect(() => {
    mixColors();
  }, [colors]);

  const handleColorChange = (index: number, value: string) => {
    const newColors = [...colors];
    newColors[index].value = value;
    setColors(newColors);
  };

  const handleWeightChange = (index: number, weight: number) => {
    const newColors = [...colors];
    newColors[index].weight = weight;
    setColors(newColors);
  };

  const addColor = () => {
    if (colors.length < 4) {
      setColors([...colors, { value: '#6366f1', weight: 50 }]);
    }
  };

  const removeColor = (index: number) => {
    if (colors.length > 2) {
      const newColors = colors.filter((_, i) => i !== index);
      setColors(newColors);
    }
  };

  return (
    <div style={{
      padding: '24px',
      background: '#ffffff',
      borderRadius: '16px',
      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
      width: '320px',
    }}>
      <style>{mixerAnimation}</style>

      {/* Color preview */}
      <div style={{
        height: '100px',
        borderRadius: '12px',
        background: `linear-gradient(45deg, ${colors.map(c => c.value).join(', ')})`,
        backgroundSize: '200% 200%',
        animation: 'gradientFlow 5s ease infinite',
        marginBottom: '24px',
      }} />

      {/* Mixed color result */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        marginBottom: '24px',
        padding: '16px',
        background: '#f3f4f6',
        borderRadius: '12px',
      }}>
        <div style={{
          width: '50px',
          height: '50px',
          borderRadius: '8px',
          background: mixedColor,
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
          animation: 'scaleIn 0.3s ease-out',
        }} />
        <input
          type="text"
          value={mixedColor}
          readOnly
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

      {/* Color inputs */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
      }}>
        {colors.map((color, index) => (
          <div
            key={index}
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '8px',
              animation: 'scaleIn 0.3s ease-out',
            }}
          >
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
            }}>
              <input
                type="color"
                value={color.value}
                onChange={(e) => handleColorChange(index, e.target.value)}
                style={{
                  width: '50px',
                  height: '36px',
                  padding: '0',
                  border: '2px solid #e5e7eb',
                  borderRadius: '6px',
                  cursor: 'pointer',
                }}
              />
              <input
                type="text"
                value={color.value}
                onChange={(e) => handleColorChange(index, e.target.value)}
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
              {colors.length > 2 && (
                <button
                  onClick={() => removeColor(index)}
                  style={{
                    padding: '8px',
                    border: 'none',
                    background: '#fee2e2',
                    color: '#991b1b',
                    borderRadius: '6px',
                    cursor: 'pointer',
                    fontSize: '1.2rem',
                    lineHeight: 1,
                  }}
                >
                  ×
                </button>
              )}
            </div>
            <div>
              <label style={{
                display: 'block',
                marginBottom: '4px',
                fontSize: '0.8rem',
                color: '#6b7280',
              }}>
                Weight: {color.weight}%
              </label>
              <input
                type="range"
                min="0"
                max="100"
                value={color.weight}
                onChange={(e) => handleWeightChange(index, Number(e.target.value))}
                style={{
                  width: '100%',
                  height: '6px',
                  borderRadius: '3px',
                  background: `linear-gradient(to right, ${color.value}20, ${color.value})`,
                  appearance: 'none',
                  cursor: 'pointer',
                }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Add color button */}
      {colors.length < 4 && (
        <button
          onClick={addColor}
          style={{
            width: '100%',
            marginTop: '16px',
            padding: '12px',
            border: '2px dashed #e5e7eb',
            borderRadius: '8px',
            background: 'transparent',
            color: '#6b7280',
            fontSize: '0.9rem',
            cursor: 'pointer',
            transition: 'all 0.2s ease',
          }}
        >
          Add Color
        </button>
      )}
    </div>
  );
};

export default ColorPicker_21; 