'use client';
import React, { useState } from 'react';

const foodAnimation = `
  @keyframes steam {
    0% { transform: translateY(0) scale(1); opacity: 0.8; }
    50% { transform: translateY(-5px) scale(1.1); opacity: 1; }
    100% { transform: translateY(0) scale(1); opacity: 0.8; }
  }

  @keyframes sizzle {
    0% { transform: rotate(-1deg) scale(1); }
    25% { transform: rotate(1deg) scale(1.02); }
    75% { transform: rotate(-1deg) scale(0.98); }
    100% { transform: rotate(1deg) scale(1); }
  }
`;

interface CuisineTheme {
  name: string;
  origin: string;
  icon: string;
  description: string;
  colors: Array<{
    name: string;
    value: string;
    dish: string;
  }>;
}

const ColorPicker_52: React.FC<{ onChange?: (color: string) => void }> = ({ onChange }) => {
  const [selectedCuisine, setSelectedCuisine] = useState<string>('italian');
  const [selectedColor, setSelectedColor] = useState<string>('#ff6b6b');

  const cuisineThemes: { [key: string]: CuisineTheme } = {
    italian: {
      name: 'Italian',
      origin: 'Mediterranean',
      icon: '🍝',
      description: 'Colors of traditional Italian dishes',
      colors: [
        { name: 'Tomato Red', value: '#ff6b6b', dish: 'Marinara sauce' },
        { name: 'Pasta Gold', value: '#ffd700', dish: 'Fresh pasta' },
        { name: 'Basil Green', value: '#228b22', dish: 'Fresh herbs' },
        { name: 'Mozzarella White', value: '#f5f5f5', dish: 'Fresh cheese' },
        { name: 'Olive Green', value: '#556b2f', dish: 'Extra virgin olive oil' },
      ],
    },
    japanese: {
      name: 'Japanese',
      origin: 'East Asia',
      icon: '🍱',
      description: 'Elegant colors of Japanese cuisine',
      colors: [
        { name: 'Salmon Pink', value: '#fa8072', dish: 'Fresh sashimi' },
        { name: 'Rice White', value: '#fafafa', dish: 'Steamed rice' },
        { name: 'Nori Green', value: '#2f4f4f', dish: 'Seaweed wrap' },
        { name: 'Wasabi Green', value: '#7fff00', dish: 'Wasabi paste' },
        { name: 'Soy Brown', value: '#8b4513', dish: 'Soy sauce' },
      ],
    },
    mexican: {
      name: 'Mexican',
      origin: 'Latin America',
      icon: '🌮',
      description: 'Vibrant colors of Mexican dishes',
      colors: [
        { name: 'Salsa Red', value: '#ff4500', dish: 'Fresh salsa' },
        { name: 'Corn Yellow', value: '#ffd700', dish: 'Corn tortillas' },
        { name: 'Avocado Green', value: '#32cd32', dish: 'Guacamole' },
        { name: 'Bean Brown', value: '#8b4513', dish: 'Refried beans' },
        { name: 'Lime Green', value: '#32cd32', dish: 'Fresh lime' },
      ],
    },
    indian: {
      name: 'Indian',
      origin: 'South Asia',
      icon: '🍛',
      description: 'Rich colors of Indian spices',
      colors: [
        { name: 'Turmeric Yellow', value: '#ffa500', dish: 'Curry powder' },
        { name: 'Tandoori Red', value: '#ff4500', dish: 'Tandoori dishes' },
        { name: 'Mint Green', value: '#98ff98', dish: 'Mint chutney' },
        { name: 'Masala Brown', value: '#8b4513', dish: 'Garam masala' },
        { name: 'Saffron Orange', value: '#ff8c00', dish: 'Saffron rice' },
      ],
    },
    french: {
      name: 'French',
      origin: 'Western Europe',
      icon: '🥖',
      description: 'Sophisticated French palette',
      colors: [
        { name: 'Wine Red', value: '#722f37', dish: 'Red wine sauce' },
        { name: 'Butter Yellow', value: '#fff68f', dish: 'Fresh butter' },
        { name: 'Truffle Black', value: '#2f4f4f', dish: 'Black truffles' },
        { name: 'Cream White', value: '#fffdd0', dish: 'Crème fraîche' },
        { name: 'Herb Green', value: '#355e3b', dish: 'Herbs de Provence' },
      ],
    },
    chinese: {
      name: 'Chinese',
      origin: 'East Asia',
      icon: '🥢',
      description: 'Traditional Chinese flavors',
      colors: [
        { name: 'Duck Brown', value: '#8b4513', dish: 'Peking duck' },
        { name: 'Jade Green', value: '#00a86b', dish: 'Bok choy' },
        { name: 'Ginger Beige', value: '#deb887', dish: 'Fresh ginger' },
        { name: 'Chili Red', value: '#dc143c', dish: 'Chili sauce' },
        { name: 'Tea Green', value: '#d0f0c0', dish: 'Green tea' },
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
      <style>{foodAnimation}</style>

      {/* Cuisine selector */}
      <div style={{
        marginBottom: '24px',
      }}>
        <label style={{
          display: 'block',
          marginBottom: '8px',
          color: '#e5e7eb',
          fontSize: '0.9rem',
        }}>
          Cuisine Type
        </label>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '8px',
        }}>
          {Object.entries(cuisineThemes).map(([key, { name, icon }]) => (
            <button
              key={key}
              onClick={() => setSelectedCuisine(key)}
              style={{
                padding: '12px 8px',
                background: selectedCuisine === key ? '#2d2d2d' : 'transparent',
                border: '2px solid',
                borderColor: selectedCuisine === key ? '#6366f1' : '#4b5563',
                borderRadius: '6px',
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '4px',
                animation: selectedCuisine === key ? 'steam 3s infinite ease-in-out' : 'none',
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
                fontWeight: selectedCuisine === key ? 500 : 400,
              }}>
                {name}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Cuisine info */}
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
          {cuisineThemes[selectedCuisine].origin}
        </div>
        <div style={{
          fontSize: '0.9rem',
          color: '#e5e7eb',
        }}>
          {cuisineThemes[selectedCuisine].description}
        </div>
      </div>

      {/* Color palette */}
      <div style={{
        display: 'grid',
        gap: '12px',
        marginBottom: '24px',
      }}>
        {cuisineThemes[selectedCuisine].colors.map((color) => (
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
              animation: selectedColor === color.value ? 'sizzle 2s infinite ease-in-out' : 'none',
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
                {color.dish}
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

export default ColorPicker_52; 