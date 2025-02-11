'use client';
import React, { useState } from 'react';

const moodAnimation = `
  @keyframes pulseGlow {
    0%, 100% { box-shadow: 0 0 20px rgba(0, 0, 0, 0.1); }
    50% { box-shadow: 0 0 30px rgba(0, 0, 0, 0.2); }
  }

  @keyframes floatIn {
    from { transform: translateY(10px); opacity: 0; }
    to { transform: translateY(0); opacity: 1; }
  }
`;

const ColorPicker_8: React.FC<{ onChange?: (color: string) => void }> = ({ onChange }) => {
  const [selectedColor, setSelectedColor] = useState('#6366f1');
  const [activeMood, setActiveMood] = useState('calm');

  const moodPalettes = {
    calm: {
      name: 'Calm & Peaceful',
      icon: '😌',
      description: 'Soothing and tranquil colors that promote relaxation',
      colors: [
        { name: 'Ocean Blue', value: '#4a90e2' },
        { name: 'Sage Green', value: '#98b4a6' },
        { name: 'Lavender', value: '#e6e6fa' },
        { name: 'Soft Gray', value: '#d4d4d4' },
        { name: 'Sky Blue', value: '#87ceeb' },
      ],
    },
    energetic: {
      name: 'Energetic & Vibrant',
      icon: '⚡',
      description: 'Bold and dynamic colors that inspire action',
      colors: [
        { name: 'Electric Yellow', value: '#fff200' },
        { name: 'Vibrant Orange', value: '#ff7f50' },
        { name: 'Hot Pink', value: '#ff69b4' },
        { name: 'Lime Green', value: '#32cd32' },
        { name: 'Bright Purple', value: '#9370db' },
      ],
    },
    romantic: {
      name: 'Romantic & Dreamy',
      icon: '🌸',
      description: 'Soft and tender colors that evoke love',
      colors: [
        { name: 'Rose Pink', value: '#ffb6c1' },
        { name: 'Peach', value: '#ffdab9' },
        { name: 'Lilac', value: '#dcd0ff' },
        { name: 'Blush', value: '#ffe4e1' },
        { name: 'Dusty Rose', value: '#dcb4b4' },
      ],
    },
    mysterious: {
      name: 'Mysterious & Deep',
      icon: '🌙',
      description: 'Rich and enigmatic colors that create intrigue',
      colors: [
        { name: 'Deep Purple', value: '#483d8b' },
        { name: 'Midnight Blue', value: '#191970' },
        { name: 'Forest Green', value: '#2e4033' },
        { name: 'Burgundy', value: '#800020' },
        { name: 'Dark Teal', value: '#004d4d' },
      ],
    },
    cheerful: {
      name: 'Cheerful & Playful',
      icon: '😊',
      description: 'Fun and uplifting colors that spark joy',
      colors: [
        { name: 'Sunny Yellow', value: '#ffd700' },
        { name: 'Coral', value: '#ff6b6b' },
        { name: 'Turquoise', value: '#40e0d0' },
        { name: 'Bright Pink', value: '#ff69b4' },
        { name: 'Spring Green', value: '#98fb98' },
      ],
    },
    focused: {
      name: 'Focused & Professional',
      icon: '💼',
      description: 'Clean and professional colors that aid concentration',
      colors: [
        { name: 'Navy Blue', value: '#000080' },
        { name: 'Charcoal', value: '#36454f' },
        { name: 'Steel Blue', value: '#4682b4' },
        { name: 'Cool Gray', value: '#808a87' },
        { name: 'Slate', value: '#708090' },
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
      <style>{moodAnimation}</style>

      {/* Color preview */}
      <div style={{
        height: '120px',
        borderRadius: '12px',
        background: selectedColor,
        marginBottom: '24px',
        animation: 'pulseGlow 2s infinite',
        transition: 'background-color 0.3s ease',
      }} />

      {/* Mood selector */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '8px',
        marginBottom: '20px',
      }}>
        {Object.entries(moodPalettes).map(([key, { name, icon }]) => (
          <button
            key={key}
            onClick={() => setActiveMood(key)}
            style={{
              padding: '12px 8px',
              background: activeMood === key ? '#f3f4f6' : 'transparent',
              border: '2px solid',
              borderColor: activeMood === key ? '#6366f1' : '#e5e7eb',
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
            }}>
              {icon}
            </span>
            <span style={{
              fontSize: '0.7rem',
              color: '#4b5563',
              textAlign: 'center',
            }}>
              {name}
            </span>
          </button>
        ))}
      </div>

      {/* Mood description */}
      <div style={{
        padding: '12px',
        background: '#f3f4f6',
        borderRadius: '8px',
        marginBottom: '20px',
        fontSize: '0.9rem',
        color: '#4b5563',
        animation: 'floatIn 0.3s ease-out',
      }}>
        {moodPalettes[activeMood as keyof typeof moodPalettes].description}
      </div>

      {/* Color palette */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(5, 1fr)',
        gap: '8px',
        marginBottom: '20px',
      }}>
        {moodPalettes[activeMood as keyof typeof moodPalettes].colors.map(({ value, name }) => (
          <button
            key={value}
            onClick={() => handleColorSelect(value)}
            title={name}
            style={{
              width: '100%',
              aspectRatio: '1',
              background: value,
              border: selectedColor === value ? '3px solid #000' : '3px solid transparent',
              borderRadius: '8px',
              cursor: 'pointer',
              transition: 'transform 0.2s ease',
              animation: 'floatIn 0.3s ease-out',
            }}
          />
        ))}
      </div>

      {/* Selected color info */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        padding: '12px',
        background: '#f3f4f6',
        borderRadius: '8px',
      }}>
        <div style={{
          width: '40px',
          height: '40px',
          borderRadius: '6px',
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

export default ColorPicker_8;