"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

interface ColorPickerProps {
  initialColor?: string;
  className?: string;
}

const materialAnimation = `
  @keyframes ripple {
    0% { transform: scale(0); opacity: 0.4; }
    100% { transform: scale(2); opacity: 0; }
  }

  @keyframes slideIn {
    from { transform: translateY(10px); opacity: 0; }
    to { transform: translateY(0); opacity: 1; }
  }
`;

const ColorPicker: React.FC<ColorPickerProps> = ({ initialColor = "#ffffff", className = "" }) => {
  const [selectedColor, setSelectedColor] = useState(initialColor);
  const [selectedShade, setSelectedShade] = useState('500');
  const [rippleColor, setRippleColor] = useState('');

  const materialColors = {
    'Blue': {
      '50': '#e3f2fd',
      '100': '#bbdefb',
      '200': '#90caf9',
      '300': '#64b5f6',
      '400': '#42a5f5',
      '500': '#2196f3',
      '600': '#1e88e5',
      '700': '#1976d2',
      '800': '#1565c0',
      '900': '#0d47a1',
    },
    'Red': {
      '50': '#ffebee',
      '100': '#ffcdd2',
      '200': '#ef9a9a',
      '300': '#e57373',
      '400': '#ef5350',
      '500': '#f44336',
      '600': '#e53935',
      '700': '#d32f2f',
      '800': '#c62828',
      '900': '#b71c1c',
    },
    'Green': {
      '50': '#e8f5e9',
      '100': '#c8e6c9',
      '200': '#a5d6a7',
      '300': '#81c784',
      '400': '#66bb6a',
      '500': '#4caf50',
      '600': '#43a047',
      '700': '#388e3c',
      '800': '#2e7d32',
      '900': '#1b5e20',
    },
    'Purple': {
      '50': '#f3e5f5',
      '100': '#e1bee7',
      '200': '#ce93d8',
      '300': '#ba68c8',
      '400': '#ab47bc',
      '500': '#9c27b0',
      '600': '#8e24aa',
      '700': '#7b1fa2',
      '800': '#6a1b9a',
      '900': '#4a148c',
    },
  };

  const handleColorSelect = (color: string, shade: string) => {
    setSelectedColor(color);
    setSelectedShade(shade);
    setRippleColor(color);
    setTimeout(() => setRippleColor(''), 500);
  };

  return (
    <div className={`flex flex-col items-center ${className}`}>
      <style>{materialAnimation}</style>

      <motion.div
        className="relative mb-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Display Color Box with Gradient Animation */}
        <div
          className="w-32 h-32 rounded-lg"
          style={{
            backgroundColor: selectedColor,
            transition: "background-color 0.3s ease",
          }}
        >
          {rippleColor && (
            <div
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                width: '20px',
                height: '20px',
                background: rippleColor,
                borderRadius: '50%',
                transform: 'translate(-50%, -50%)',
                animation: 'ripple 0.5s ease-out',
              }}
            />
          )}
        </div>
      </motion.div>

      <motion.input
        type="color"
        value={selectedColor}
        onChange={(e) => handleColorSelect(e.target.value, selectedShade)}
        className="w-16 h-16 cursor-pointer rounded-full border-4 border-transparent"
        whileHover={{
          scale: 1.2,
          rotate: 90,
          transition: { duration: 0.5 },
        }}
        whileTap={{
          scale: 0.9,
          rotate: -90,
          transition: { duration: 0.2 },
        }}
        transition={{ duration: 0.3 }}
      />

      {/* Color palettes */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '24px',
      }}>
        {Object.entries(materialColors).map(([colorName, shades]) => (
          <div key={colorName} style={{
            animation: 'slideIn 0.3s ease-out',
          }}>
            <div style={{
              fontSize: '0.9rem',
              color: '#4b5563',
              marginBottom: '8px',
            }}>
              {colorName}
            </div>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(5, 1fr)',
              gap: '4px',
            }}>
              {Object.entries(shades).map(([shade, color]) => (
                <button
                  key={shade}
                  onClick={() => handleColorSelect(color, shade)}
                  style={{
                    width: '100%',
                    height: '32px',
                    background: color,
                    border: selectedColor === color ? '2px solid #000' : 'none',
                    borderRadius: '4px',
                    cursor: 'pointer',
                    position: 'relative',
                    overflow: 'hidden',
                  }}
                  title={`${colorName} ${shade}`}
                />
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Selected color info */}
      <div style={{
        marginTop: '24px',
        padding: '16px',
        background: '#f3f4f6',
        borderRadius: '12px',
        display: 'flex',
        flexDirection: 'column',
        gap: '8px',
      }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          fontSize: '0.9rem',
          color: '#4b5563',
        }}>
          <span>Selected Color</span>
          <span>{selectedShade}</span>
        </div>
        <input
          type="text"
          value={selectedColor}
          onChange={(e) => handleColorSelect(e.target.value, selectedShade)}
          style={{
            width: '100%',
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

export default ColorPicker;
