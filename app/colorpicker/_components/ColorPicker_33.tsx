'use client';
import React, { useState } from 'react';

const culinaryAnimation = `
  @keyframes bubble {
    0% { transform: scale(1); }
    50% { transform: scale(1.05); }
    100% { transform: scale(1); }
  }

  @keyframes steam {
    0% { opacity: 0; transform: translateY(0); }
    50% { opacity: 1; transform: translateY(-5px); }
    100% { opacity: 0; transform: translateY(-10px); }
  }
`;

interface CulinaryTheme {
  name: string;
  cuisine: string;
  icon: string;
  description: string;
  colors: Array<{
    name: string;
    value: string;
    ingredient: string;
  }>;
}

const ColorPicker_33: React.FC<{ onChange?: (color: string) => void }> = ({ onChange }) => {
  const [selectedTheme, setSelectedTheme] = useState<string>('spices');
  const [selectedColor, setSelectedColor] = useState<string>('#c41e3a');

  const culinaryThemes: { [key: string]: CulinaryTheme } = {
    spices: {
      name: 'Spice Market',
      cuisine: 'Indian',
      icon: '🌶️',
      description: 'Vibrant colors of exotic spices and seasonings',
      colors: [
        { name: 'Saffron Gold', value: '#ffa500', ingredient: 'Saffron threads' },
        { name: 'Chili Red', value: '#c41e3a', ingredient: 'Kashmiri chilies' },
        { name: 'Turmeric', value: '#ffc30b', ingredient: 'Ground turmeric' },
        { name: 'Cardamom', value: '#3f704d', ingredient: 'Green cardamom' },
        { name: 'Cinnamon', value: '#8b4513', ingredient: 'Ceylon cinnamon' },
      ],
    },
    sushi: {
      name: 'Sushi Bar',
      cuisine: 'Japanese',
      icon: '🍱',
      description: 'Fresh colors from Japanese sushi ingredients',
      colors: [
        { name: 'Salmon Pink', value: '#ff8c69', ingredient: 'Fresh salmon' },
        { name: 'Wasabi', value: '#7ba05b', ingredient: 'Wasabi paste' },
        { name: 'Rice White', value: '#f7f7f7', ingredient: 'Sushi rice' },
        { name: 'Nori Green', value: '#242424', ingredient: 'Dried seaweed' },
        { name: 'Tuna Red', value: '#ff4d4d', ingredient: 'Maguro tuna' },
      ],
    },
    patisserie: {
      name: 'French Patisserie',
      cuisine: 'French',
      icon: '🧁',
      description: 'Delicate pastry and dessert shades',
      colors: [
        { name: 'Macaron Pink', value: '#ffb6c1', ingredient: 'Raspberry macaron' },
        { name: 'Vanilla Cream', value: '#fff8dc', ingredient: 'Crème pâtissière' },
        { name: 'Chocolate', value: '#4a3728', ingredient: 'Dark chocolate' },
        { name: 'Pistachio', value: '#93c572', ingredient: 'Ground pistachios' },
        { name: 'Caramel', value: '#c68e17', ingredient: 'Caramel sauce' },
      ],
    },
    mediterranean: {
      name: 'Mediterranean',
      cuisine: 'Greek & Italian',
      icon: '🫒',
      description: 'Sun-kissed colors of Mediterranean ingredients',
      colors: [
        { name: 'Olive Green', value: '#708238', ingredient: 'Kalamata olives' },
        { name: 'Tomato Red', value: '#ff6347', ingredient: 'Fresh tomatoes' },
        { name: 'Feta White', value: '#f5f5f5', ingredient: 'Feta cheese' },
        { name: 'Grape Purple', value: '#6f2da8', ingredient: 'Wine grapes' },
        { name: 'Herb Green', value: '#4f7942', ingredient: 'Fresh basil' },
      ],
    },
    streetFood: {
      name: 'Street Food',
      cuisine: 'Global',
      icon: '🌮',
      description: 'Bold colors from world street cuisine',
      colors: [
        { name: 'Taco Yellow', value: '#ffd700', ingredient: 'Corn tortilla' },
        { name: 'Sriracha Red', value: '#ff3b3b', ingredient: 'Hot sauce' },
        { name: 'Falafel Brown', value: '#c2a385', ingredient: 'Fried falafel' },
        { name: 'Pickle Green', value: '#66b032', ingredient: 'Pickled vegetables' },
        { name: 'Curry Yellow', value: '#e3a857', ingredient: 'Thai curry' },
      ],
    },
    chocolate: {
      name: 'Chocolate Shop',
      cuisine: 'Belgian',
      icon: '🍫',
      description: 'Rich tones of fine chocolate varieties',
      colors: [
        { name: 'Dark Truffle', value: '#3c1321', ingredient: 'Dark chocolate' },
        { name: 'Milk Chocolate', value: '#7b3f00', ingredient: 'Milk chocolate' },
        { name: 'White Ganache', value: '#eee6d8', ingredient: 'White chocolate' },
        { name: 'Cocoa Powder', value: '#4a2c2a', ingredient: 'Dutch cocoa' },
        { name: 'Praline', value: '#967969', ingredient: 'Hazelnut praline' },
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
      <style>{culinaryAnimation}</style>

      {/* Theme selector */}
      <div style={{
        marginBottom: '24px',
      }}>
        <label style={{
          display: 'block',
          marginBottom: '8px',
          color: '#4b5563',
          fontSize: '0.9rem',
        }}>
          Culinary Theme
        </label>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '8px',
        }}>
          {Object.entries(culinaryThemes).map(([key, { name, icon }]) => (
            <button
              key={key}
              onClick={() => setSelectedTheme(key)}
              style={{
                padding: '12px 8px',
                background: selectedTheme === key ? '#f3f4f6' : 'transparent',
                border: '2px solid',
                borderColor: selectedTheme === key ? '#6366f1' : '#e5e7eb',
                borderRadius: '6px',
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '4px',
              }}
            >
              <span style={{
                fontSize: '1.5rem',
                animation: selectedTheme === key ? 'bubble 2s infinite' : 'none',
              }}>
                {icon}
              </span>
              <span style={{
                fontSize: '0.8rem',
                color: '#4b5563',
                fontWeight: selectedTheme === key ? 500 : 400,
              }}>
                {name}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Theme info */}
      <div style={{
        padding: '16px',
        background: '#f3f4f6',
        borderRadius: '8px',
        marginBottom: '24px',
        animation: 'steam 2s ease-out infinite',
      }}>
        <div style={{
          fontSize: '0.8rem',
          color: '#6b7280',
          marginBottom: '4px',
          fontFamily: 'monospace',
        }}>
          {culinaryThemes[selectedTheme].cuisine} Cuisine
        </div>
        <div style={{
          fontSize: '0.9rem',
          color: '#4b5563',
        }}>
          {culinaryThemes[selectedTheme].description}
        </div>
      </div>

      {/* Color palette */}
      <div style={{
        display: 'grid',
        gap: '12px',
        marginBottom: '24px',
      }}>
        {culinaryThemes[selectedTheme].colors.map((color, index) => (
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
              animation: `bubble 0.3s ease-out ${index * 0.1}s`,
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
                {color.ingredient}
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

export default ColorPicker_33; 