"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

interface ColorPickerProps {
  initialColor?: string;
  className?: string;
}

const natureAnimation = `
  @keyframes leafSway {
    0%, 100% { transform: rotate(-5deg); }
    50% { transform: rotate(5deg); }
  }

  @keyframes fadeScale {
    from { transform: scale(0.95); opacity: 0; }
    to { transform: scale(1); opacity: 1; }
  }
`;

const ColorPicker: React.FC<ColorPickerProps> = ({ initialColor = "#ffffff", className = "" }) => {
  const [color, setColor] = useState(initialColor);
  const [activeCategory, setActiveCategory] = useState('spring');

  const naturePalettes = {
    spring: {
      name: 'Spring Garden',
      icon: '🌸',
      colors: [
        { name: 'Cherry Blossom', value: '#ffb7c5' },
        { name: 'Fresh Leaf', value: '#4caf50' },
        { name: 'Morning Dew', value: '#b2ebf2' },
        { name: 'Spring Sky', value: '#64b5f6' },
        { name: 'New Growth', value: '#81c784' },
      ],
    },
    summer: {
      name: 'Summer Beach',
      icon: '🏖️',
      colors: [
        { name: 'Ocean Blue', value: '#1976d2' },
        { name: 'Sandy Shore', value: '#ffd54f' },
        { name: 'Coral Reef', value: '#ff7043' },
        { name: 'Palm Leaf', value: '#2e7d32' },
        { name: 'Sunset', value: '#ff4081' },
      ],
    },
    autumn: {
      name: 'Autumn Forest',
      icon: '🍁',
      colors: [
        { name: 'Maple Red', value: '#d32f2f' },
        { name: 'Golden Leaf', value: '#ffa000' },
        { name: 'Forest Brown', value: '#795548' },
        { name: 'Rustic Orange', value: '#f57c00' },
        { name: 'Deep Moss', value: '#33691e' },
      ],
    },
    winter: {
      name: 'Winter Frost',
      icon: '❄️',
      colors: [
        { name: 'Snow White', value: '#eceff1' },
        { name: 'Ice Blue', value: '#90caf9' },
        { name: 'Winter Sky', value: '#546e7a' },
        { name: 'Evergreen', value: '#1b5e20' },
        { name: 'Berry Red', value: '#c62828' },
      ],
    },
    forest: {
      name: 'Deep Forest',
      icon: '🌲',
      colors: [
        { name: 'Pine Needle', value: '#2e7d32' },
        { name: 'Forest Floor', value: '#5d4037' },
        { name: 'Wild Mushroom', value: '#bcaaa4' },
        { name: 'Moss Stone', value: '#558b2f' },
        { name: 'Tree Bark', value: '#4e342e' },
      ],
    },
    ocean: {
      name: 'Ocean Depths',
      icon: '🌊',
      colors: [
        { name: 'Deep Blue', value: '#0d47a1' },
        { name: 'Coral Pink', value: '#ff80ab' },
        { name: 'Sea Foam', value: '#80deea' },
        { name: 'Teal Wave', value: '#00796b' },
        { name: 'Ocean Mist', value: '#b2ebf2' },
      ],
    },
  };

  // Handle color change
  const handleColorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setColor(event.target.value);
  };

  const handleColorSelect = (color: string) => {
    setColor(color);
  };

  return (
    <div className={`flex flex-col items-center ${className}`}>
      <style>{natureAnimation}</style>

      <motion.div
        className="relative mb-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Swinging Color Box */}
        <motion.div
          className="w-32 h-32 rounded-full"
          style={{
            backgroundColor: color,
          }}
          animate={{
            rotate: [0, 10, -10, 0],
            transition: {
              repeat: Infinity,
              repeatType: "mirror",
              duration: 1.5,
            },
          }}
        />
      </motion.div>

      {/* Color Input with Pulse Hover Effect */}
      <motion.input
        type="color"
        value={color}
        onChange={handleColorChange}
        className="w-16 h-16 cursor-pointer rounded-full border-4 border-transparent"
        whileHover={{
          scale: 1.3,
          boxShadow: "0 0 15px rgba(0, 0, 0, 0.4)",
          transition: { duration: 0.3 },
        }}
        whileTap={{
          scale: 0.9,
          transition: { duration: 0.2 },
        }}
        transition={{ duration: 0.3 }}
      />

      {/* Category selector */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '8px',
        marginBottom: '24px',
      }}>
        {Object.entries(naturePalettes).map(([key, { name, icon }]) => (
          <button
            key={key}
            onClick={() => setActiveCategory(key)}
            style={{
              padding: '12px',
              background: activeCategory === key ? '#f3f4f6' : 'transparent',
              border: '2px solid',
              borderColor: activeCategory === key ? '#6366f1' : '#e5e7eb',
              borderRadius: '8px',
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
              animation: activeCategory === key ? 'leafSway 2s ease-in-out infinite' : 'none',
            }}>
              {icon}
            </span>
            <span style={{
              fontSize: '0.8rem',
              color: '#4b5563',
            }}>
              {name}
            </span>
          </button>
        ))}
      </div>

      {/* Color palette */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '12px',
      }}>
        {naturePalettes[activeCategory as keyof typeof naturePalettes].colors.map(({ name, value }) => (
          <button
            key={value}
            onClick={() => handleColorSelect(value)}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              padding: '12px',
              background: '#f9fafb',
              border: color === value ? '2px solid #000' : '2px solid transparent',
              borderRadius: '8px',
              cursor: 'pointer',
              animation: 'fadeScale 0.3s ease-out',
            }}
          >
            <div style={{
              width: '40px',
              height: '40px',
              borderRadius: '8px',
              background: value,
              boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
            }} />
            <div style={{
              flex: 1,
              textAlign: 'left',
            }}>
              <div style={{
                fontSize: '0.9rem',
                color: '#1f2937',
                marginBottom: '2px',
              }}>
                {name}
              </div>
              <div style={{
                fontSize: '0.8rem',
                color: '#6b7280',
                fontFamily: 'monospace',
              }}>
                {value}
              </div>
            </div>
          </button>
        ))}
      </div>

      {/* Selected color display */}
      <div style={{
        marginTop: '24px',
        padding: '16px',
        background: color,
        borderRadius: '12px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: isLightColor(color) ? '#1f2937' : '#ffffff',
        fontSize: '0.9rem',
        fontFamily: 'monospace',
        transition: 'all 0.3s ease',
      }}>
        {color}
      </div>
    </div>
  );
};

// Helper function to determine if a color is light
const isLightColor = (color: string): boolean => {
  const hex = color.replace('#', '');
  const r = parseInt(hex.substr(0, 2), 16);
  const g = parseInt(hex.substr(2, 2), 16);
  const b = parseInt(hex.substr(4, 2), 16);
  const brightness = (r * 299 + g * 587 + b * 114) / 1000;
  return brightness > 128;
};

export default ColorPicker;
