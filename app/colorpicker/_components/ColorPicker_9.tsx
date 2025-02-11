"use client";
import React, { useState } from 'react';

const brandAnimation = `
  @keyframes brandSlide {
    from { transform: translateX(-10px); opacity: 0; }
    to { transform: translateX(0); opacity: 1; }
  }

  @keyframes logoSpin {
    from { transform: rotateY(0deg); }
    to { transform: rotateY(360deg); }
  }
`;

const ColorPicker_9: React.FC<{ onChange?: (color: string) => void }> = ({ onChange }) => {
  const [selectedColor, setSelectedColor] = useState('#6366f1');
  const [activeBrand, setActiveBrand] = useState('tech');

  const brandPalettes = {
    tech: {
      name: 'Tech Giants',
      brands: [
        {
          name: 'Google',
          logo: '🔍',
          colors: ['#4285f4', '#34a853', '#fbbc05', '#ea4335'],
        },
        {
          name: 'Microsoft',
          logo: '⊞',
          colors: ['#f25022', '#7fba00', '#00a4ef', '#ffb900'],
        },
        {
          name: 'Apple',
          logo: '🍎',
          colors: ['#000000', '#555555', '#7d7d7d', '#ffffff'],
        },
      ],
    },
    social: {
      name: 'Social Media',
      brands: [
        {
          name: 'Facebook',
          logo: '📘',
          colors: ['#1877f2', '#ffffff', '#3b5998', '#8b9dc3'],
        },
        {
          name: 'Instagram',
          logo: '📸',
          colors: ['#405de6', '#5851db', '#833ab4', '#c13584', '#e1306c', '#fd1d1d'],
        },
        {
          name: 'Twitter',
          logo: '🐦',
          colors: ['#1da1f2', '#14171a', '#657786', '#aab8c2'],
        },
      ],
    },
    retail: {
      name: 'Retail',
      brands: [
        {
          name: 'Target',
          logo: '🎯',
          colors: ['#cc0000', '#ffffff', '#333333'],
        },
        {
          name: 'Walmart',
          logo: '🛒',
          colors: ['#0071ce', '#ffc220', '#ffffff'],
        },
        {
          name: 'Amazon',
          logo: '📦',
          colors: ['#ff9900', '#146eb4', '#232f3e'],
        },
      ],
    },
    food: {
      name: 'Food & Beverage',
      brands: [
        {
          name: 'Coca-Cola',
          logo: '🥤',
          colors: ['#f40009', '#ffffff', '#000000'],
        },
        {
          name: 'Starbucks',
          logo: '☕',
          colors: ['#00704a', '#27251f', '#f1f8f6'],
        },
        {
          name: "McDonald's",
          logo: '🍔',
          colors: ['#ffc72c', '#da291c', '#000000'],
        },
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
      <style>{brandAnimation}</style>

      {/* Category selector */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: '8px',
        marginBottom: '24px',
      }}>
        {Object.entries(brandPalettes).map(([key, { name }]) => (
          <button
            key={key}
            onClick={() => setActiveBrand(key)}
            style={{
              padding: '12px',
              background: activeBrand === key ? '#f3f4f6' : 'transparent',
              border: '2px solid',
              borderColor: activeBrand === key ? '#6366f1' : '#e5e7eb',
              borderRadius: '8px',
              cursor: 'pointer',
              fontSize: '0.9rem',
              color: '#4b5563',
              transition: 'all 0.2s ease',
            }}
          >
            {name}
          </button>
        ))}
      </div>

      {/* Brand palettes */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
      }}>
        {brandPalettes[activeBrand as keyof typeof brandPalettes].brands.map((brand) => (
          <div
            key={brand.name}
            style={{
              animation: 'brandSlide 0.3s ease-out',
            }}
          >
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              marginBottom: '12px',
            }}>
              <span style={{
                fontSize: '2rem',
                animation: 'logoSpin 2s ease-in-out infinite',
                display: 'inline-block',
              }}>
                {brand.logo}
              </span>
              <span style={{
                fontSize: '1rem',
                color: '#1f2937',
                fontWeight: 500,
              }}>
                {brand.name}
              </span>
            </div>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '8px',
            }}>
              {brand.colors.map((color) => (
                <button
                  key={color}
                  onClick={() => handleColorSelect(color)}
                  style={{
                    width: '100%',
                    aspectRatio: '1',
                    background: color,
                    border: selectedColor === color ? '3px solid #000' : '3px solid transparent',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    transition: 'transform 0.2s ease',
                  }}
                />
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Selected color display */}
      <div style={{
        marginTop: '24px',
        padding: '16px',
        background: '#f3f4f6',
        borderRadius: '12px',
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
      }}>
        <div style={{
          width: '48px',
          height: '48px',
          borderRadius: '8px',
          background: selectedColor,
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
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

export default ColorPicker_9;
