'use client';
import React, { useState } from 'react';

const dessertAnimation = `
  @keyframes float {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-5px); }
  }

  @keyframes drip {
    0% { transform: scaleY(1); }
    50% { transform: scaleY(1.1); }
    100% { transform: scaleY(1); }
  }
`;

interface DessertTheme {
  name: string;
  type: string;
  icon: string;
  description: string;
  colors: Array<{
    name: string;
    value: string;
    ingredient: string;
  }>;
}

const ColorPicker_41: React.FC<{ onChange?: (color: string) => void }> = ({ onChange }) => {
  const [selectedDessert, setSelectedDessert] = useState<string>('icecream');
  const [selectedColor, setSelectedColor] = useState<string>('#fdd1d1');

  const dessertThemes: { [key: string]: DessertTheme } = {
    icecream: {
      name: 'Ice Cream',
      type: 'Frozen Treats',
      icon: '🍦',
      description: 'Sweet colors of frozen delights',
      colors: [
        { name: 'Strawberry Pink', value: '#fdd1d1', ingredient: 'Fresh berries' },
        { name: 'Vanilla Bean', value: '#f3e5ab', ingredient: 'Madagascar vanilla' },
        { name: 'Mint Chip', value: '#98ff98', ingredient: 'Fresh mint' },
        { name: 'Chocolate Fudge', value: '#3b1c0a', ingredient: 'Dark chocolate' },
        { name: 'Blueberry Swirl', value: '#4f86f7', ingredient: 'Wild berries' },
      ],
    },
    macarons: {
      name: 'Macarons',
      type: 'French Pastry',
      icon: '🍪',
      description: 'Delicate colors of French confections',
      colors: [
        { name: 'Lavender Dream', value: '#e6e6fa', ingredient: 'Dried lavender' },
        { name: 'Pistachio Green', value: '#93c572', ingredient: 'Ground nuts' },
        { name: 'Rose Petal', value: '#ffb7c5', ingredient: 'Rose water' },
        { name: 'Lemon Zest', value: '#fff44f', ingredient: 'Citrus essence' },
        { name: 'Violet Cream', value: '#9a4eae', ingredient: 'Violet extract' },
      ],
    },
    chocolate: {
      name: 'Chocolate',
      type: 'Confectionery',
      icon: '🍫',
      description: 'Rich colors of fine chocolate',
      colors: [
        { name: 'Dark Truffle', value: '#2a1810', ingredient: 'Cocoa solids' },
        { name: 'Milk Chocolate', value: '#7b3f00', ingredient: 'Cocoa butter' },
        { name: 'White Ganache', value: '#f5deb3', ingredient: 'Heavy cream' },
        { name: 'Caramel Swirl', value: '#d4a017', ingredient: 'Burnt sugar' },
        { name: 'Ruby Chocolate', value: '#ff7f7f', ingredient: 'Ruby cocoa' },
      ],
    },
    candy: {
      name: 'Candy',
      type: 'Sweet Treats',
      icon: '🍬',
      description: 'Vibrant colors of sugary delights',
      colors: [
        { name: 'Cotton Candy', value: '#ffb7d5', ingredient: 'Spun sugar' },
        { name: 'Lollipop Red', value: '#ff1744', ingredient: 'Cherry flavor' },
        { name: 'Grape Pop', value: '#9370db', ingredient: 'Grape extract' },
        { name: 'Lime Twist', value: '#32cd32', ingredient: 'Lime essence' },
        { name: 'Orange Drop', value: '#ffa500', ingredient: 'Orange zest' },
      ],
    },
    cake: {
      name: 'Cake',
      type: 'Baked Goods',
      icon: '🎂',
      description: 'Classic colors of celebration cakes',
      colors: [
        { name: 'Buttercream', value: '#fffdd0', ingredient: 'Fresh butter' },
        { name: 'Red Velvet', value: '#c41e3a', ingredient: 'Cocoa powder' },
        { name: 'Fondant Pink', value: '#ff9ecd', ingredient: 'Sugar paste' },
        { name: 'Matcha Layer', value: '#90ee90', ingredient: 'Green tea' },
        { name: 'Gold Leaf', value: '#ffd700', ingredient: 'Edible gold' },
      ],
    },
    donuts: {
      name: 'Donuts',
      type: 'Pastries',
      icon: '🍩',
      description: 'Fun colors of glazed treats',
      colors: [
        { name: 'Pink Frosting', value: '#ff69b4', ingredient: 'Berry glaze' },
        { name: 'Chocolate Glaze', value: '#3c1414', ingredient: 'Dark chocolate' },
        { name: 'Vanilla Drizzle', value: '#fff8dc', ingredient: 'Vanilla bean' },
        { name: 'Blueberry Fill', value: '#4169e1', ingredient: 'Berry jam' },
        { name: 'Sprinkle Mix', value: '#ff6b6b', ingredient: 'Sugar pearls' },
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
      <style>{dessertAnimation}</style>

      {/* Dessert selector */}
      <div style={{
        marginBottom: '24px',
      }}>
        <label style={{
          display: 'block',
          marginBottom: '8px',
          color: '#e5e7eb',
          fontSize: '0.9rem',
        }}>
          Sweet Treats
        </label>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '8px',
        }}>
          {Object.entries(dessertThemes).map(([key, { name, icon }]) => (
            <button
              key={key}
              onClick={() => setSelectedDessert(key)}
              style={{
                padding: '12px 8px',
                background: selectedDessert === key ? '#2d2d2d' : 'transparent',
                border: '2px solid',
                borderColor: selectedDessert === key ? '#6366f1' : '#4b5563',
                borderRadius: '6px',
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '4px',
                animation: selectedDessert === key ? 'float 2s infinite' : 'none',
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
                fontWeight: selectedDessert === key ? 500 : 400,
              }}>
                {name}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Dessert info */}
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
          {dessertThemes[selectedDessert].type}
        </div>
        <div style={{
          fontSize: '0.9rem',
          color: '#e5e7eb',
        }}>
          {dessertThemes[selectedDessert].description}
        </div>
      </div>

      {/* Color palette */}
      <div style={{
        display: 'grid',
        gap: '12px',
        marginBottom: '24px',
      }}>
        {dessertThemes[selectedDessert].colors.map((color) => (
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
              animation: selectedColor === color.value ? 'drip 1.5s infinite' : 'none',
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
                {color.ingredient}
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

export default ColorPicker_41; 