'use client';
import React, { useState } from 'react';

const mythAnimation = `
  @keyframes magicGlow {
    0% { filter: drop-shadow(0 0 2px rgba(255, 255, 255, 0.5)); }
    50% { filter: drop-shadow(0 0 8px rgba(255, 255, 255, 0.8)); }
    100% { filter: drop-shadow(0 0 2px rgba(255, 255, 255, 0.5)); }
  }

  @keyframes mysticalFloat {
    0% { transform: translateY(0); }
    50% { transform: translateY(-5px); }
    100% { transform: translateY(0); }
  }
`;

interface MythTheme {
  name: string;
  origin: string;
  icon: string;
  description: string;
  colors: Array<{
    name: string;
    value: string;
    symbolism: string;
  }>;
}

const ColorPicker_36: React.FC<{ onChange?: (color: string) => void }> = ({ onChange }) => {
  const [selectedMyth, setSelectedMyth] = useState<string>('dragons');
  const [selectedColor, setSelectedColor] = useState<string>('#8b0000');

  const mythThemes: { [key: string]: MythTheme } = {
    dragons: {
      name: 'Dragon Lore',
      origin: 'Various Cultures',
      icon: '🐉',
      description: 'Majestic colors of mythical dragons',
      colors: [
        { name: 'Dragon Blood', value: '#8b0000', symbolism: 'Power and strength' },
        { name: 'Scale Gold', value: '#ffd700', symbolism: 'Treasure and wealth' },
        { name: 'Smoke Gray', value: '#708090', symbolism: 'Dragon\'s breath' },
        { name: 'Wing Black', value: '#2f4f4f', symbolism: 'Night flight' },
        { name: 'Flame Orange', value: '#ff4500', symbolism: 'Dragon fire' },
      ],
    },
    unicorns: {
      name: 'Unicorn Magic',
      origin: 'European',
      icon: '🦄',
      description: 'Enchanted colors of mystical unicorns',
      colors: [
        { name: 'Horn Pearl', value: '#e6e6fa', symbolism: 'Pure magic' },
        { name: 'Mane Silver', value: '#c0c0c0', symbolism: 'Moonlight grace' },
        { name: 'Rainbow Prism', value: '#ff69b4', symbolism: 'Magical aura' },
        { name: 'Cloud White', value: '#f0ffff', symbolism: 'Divine presence' },
        { name: 'Star Dust', value: '#ffd700', symbolism: 'Celestial power' },
      ],
    },
    phoenix: {
      name: 'Phoenix Fire',
      origin: 'Egyptian/Greek',
      icon: '🔥',
      description: 'Vibrant colors of the immortal firebird',
      colors: [
        { name: 'Rebirth Flame', value: '#ff4500', symbolism: 'Resurrection' },
        { name: 'Solar Gold', value: '#ffd700', symbolism: 'Immortality' },
        { name: 'Ember Red', value: '#dc143c', symbolism: 'Life force' },
        { name: 'Ash Gray', value: '#696969', symbolism: 'Renewal cycle' },
        { name: 'Dawn Orange', value: '#ff7f50', symbolism: 'New beginning' },
      ],
    },
    merfolk: {
      name: 'Merfolk Depths',
      origin: 'Global Maritime',
      icon: '🧜‍♀️',
      description: 'Shimmering colors of underwater kingdoms',
      colors: [
        { name: 'Scale Teal', value: '#008080', symbolism: 'Ocean depths' },
        { name: 'Pearl White', value: '#f5fffa', symbolism: 'Sea treasures' },
        { name: 'Coral Pink', value: '#ff7f50', symbolism: 'Reef life' },
        { name: 'Abyss Blue', value: '#000080', symbolism: 'Deep waters' },
        { name: 'Kelp Green', value: '#2e8b57', symbolism: 'Sea forests' },
      ],
    },
    fae: {
      name: 'Faerie Court',
      origin: 'Celtic',
      icon: '🧚‍♀️',
      description: 'Enchanted colors of the fairy realm',
      colors: [
        { name: 'Wing Shimmer', value: '#e6e6fa', symbolism: 'Fairy wings' },
        { name: 'Forest Heart', value: '#228b22', symbolism: 'Woodland magic' },
        { name: 'Pixie Dust', value: '#ffd700', symbolism: 'Magic powder' },
        { name: 'Twilight Purple', value: '#483d8b', symbolism: 'Mystic hour' },
        { name: 'Mushroom Ring', value: '#8b4513', symbolism: 'Fairy circle' },
      ],
    },
    titans: {
      name: 'Titan Realm',
      origin: 'Greek',
      icon: '⚡',
      description: 'Primordial colors of ancient titans',
      colors: [
        { name: 'Thunder Gray', value: '#4f4f4f', symbolism: 'Storm power' },
        { name: 'Earth Brown', value: '#8b4513', symbolism: 'Primal earth' },
        { name: 'Sky Bronze', value: '#cd853f', symbolism: 'Ancient metal' },
        { name: 'Ocean Deep', value: '#191970', symbolism: 'Sea titans' },
        { name: 'Mountain Stone', value: '#696969', symbolism: 'Titan strength' },
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
      <style>{mythAnimation}</style>

      {/* Myth selector */}
      <div style={{
        marginBottom: '24px',
      }}>
        <label style={{
          display: 'block',
          marginBottom: '8px',
          color: '#e5e7eb',
          fontSize: '0.9rem',
        }}>
          Mythical Theme
        </label>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '8px',
        }}>
          {Object.entries(mythThemes).map(([key, { name, icon }]) => (
            <button
              key={key}
              onClick={() => setSelectedMyth(key)}
              style={{
                padding: '12px 8px',
                background: selectedMyth === key ? '#2d2d2d' : 'transparent',
                border: '2px solid',
                borderColor: selectedMyth === key ? '#6366f1' : '#4b5563',
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
                animation: selectedMyth === key ? 'magicGlow 2s infinite' : 'none',
              }}>
                {icon}
              </span>
              <span style={{
                fontSize: '0.8rem',
                color: '#e5e7eb',
                fontWeight: selectedMyth === key ? 500 : 400,
              }}>
                {name}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Myth info */}
      <div style={{
        padding: '16px',
        background: '#2d2d2d',
        borderRadius: '8px',
        marginBottom: '24px',
        animation: 'mysticalFloat 3s ease-in-out infinite',
      }}>
        <div style={{
          fontSize: '0.8rem',
          color: '#9ca3af',
          marginBottom: '4px',
          fontFamily: 'monospace',
        }}>
          {mythThemes[selectedMyth].origin}
        </div>
        <div style={{
          fontSize: '0.9rem',
          color: '#e5e7eb',
        }}>
          {mythThemes[selectedMyth].description}
        </div>
      </div>

      {/* Color palette */}
      <div style={{
        display: 'grid',
        gap: '12px',
        marginBottom: '24px',
      }}>
        {mythThemes[selectedMyth].colors.map((color, index) => (
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
              animation: `mysticalFloat 3s ease-in-out ${index * 0.2}s infinite`,
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
                {color.symbolism}
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

export default ColorPicker_36; 