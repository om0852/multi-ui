'use client';
import React, { useState } from 'react';

const emotionAnimation = `
  @keyframes pulseEmotion {
    0% { transform: scale(1); }
    50% { transform: scale(1.2); }
    100% { transform: scale(1); }
  }

  @keyframes slideIn {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
  }
`;

interface EmotionTheme {
  name: string;
  icon: string;
  description: string;
  intensity: number;
  colors: Array<{
    name: string;
    value: string;
    meaning: string;
  }>;
}

const ColorPicker_26: React.FC<{ onChange?: (color: string) => void }> = ({ onChange }) => {
  const [selectedEmotion, setSelectedEmotion] = useState<string>('joy');
  const [selectedColor, setSelectedColor] = useState<string>('#ffd700');
  const [intensityLevel, setIntensityLevel] = useState<number>(5);

  const emotions: { [key: string]: EmotionTheme } = {
    joy: {
      name: 'Joy & Happiness',
      icon: '😊',
      description: 'Bright and uplifting colors that spark happiness',
      intensity: 8,
      colors: [
        { name: 'Sunshine Yellow', value: '#ffd700', meaning: 'Optimism and cheerfulness' },
        { name: 'Coral Pink', value: '#ff7f50', meaning: 'Warmth and enthusiasm' },
        { name: 'Sky Blue', value: '#87ceeb', meaning: 'Freedom and lightness' },
        { name: 'Spring Green', value: '#98fb98', meaning: 'Growth and vitality' },
        { name: 'Bright Orange', value: '#ffa500', meaning: 'Energy and excitement' },
      ],
    },
    calm: {
      name: 'Calm & Serenity',
      icon: '😌',
      description: 'Soft and soothing colors that promote tranquility',
      intensity: 3,
      colors: [
        { name: 'Sage Green', value: '#9dc183', meaning: 'Peace and balance' },
        { name: 'Lavender', value: '#e6e6fa', meaning: 'Relaxation and comfort' },
        { name: 'Powder Blue', value: '#b0e0e6', meaning: 'Calmness and clarity' },
        { name: 'Soft Beige', value: '#f5f5dc', meaning: 'Stability and comfort' },
        { name: 'Misty Gray', value: '#c4c4c4', meaning: 'Neutrality and peace' },
      ],
    },
    passion: {
      name: 'Passion & Energy',
      icon: '🔥',
      description: 'Intense and vibrant colors that express strong emotions',
      intensity: 9,
      colors: [
        { name: 'Ruby Red', value: '#e31837', meaning: 'Passion and desire' },
        { name: 'Electric Purple', value: '#bf00ff', meaning: 'Creativity and power' },
        { name: 'Vivid Orange', value: '#ff4500', meaning: 'Enthusiasm and adventure' },
        { name: 'Hot Pink', value: '#ff69b4', meaning: 'Love and excitement' },
        { name: 'Bright Yellow', value: '#ffff00', meaning: 'Energy and spontaneity' },
      ],
    },
    melancholy: {
      name: 'Melancholy & Reflection',
      icon: '🌧️',
      description: 'Deep and thoughtful colors that evoke contemplation',
      intensity: 4,
      colors: [
        { name: 'Navy Blue', value: '#000080', meaning: 'Depth and introspection' },
        { name: 'Dusty Purple', value: '#996699', meaning: 'Nostalgia and mystery' },
        { name: 'Forest Green', value: '#228b22', meaning: 'Solitude and nature' },
        { name: 'Burgundy', value: '#800020', meaning: 'Deep emotions and complexity' },
        { name: 'Slate Gray', value: '#708090', meaning: 'Contemplation and wisdom' },
      ],
    },
    mystery: {
      name: 'Mystery & Wonder',
      icon: '✨',
      description: 'Enigmatic and dreamy colors that inspire curiosity',
      intensity: 6,
      colors: [
        { name: 'Deep Purple', value: '#483d8b', meaning: 'Mystery and magic' },
        { name: 'Midnight Blue', value: '#191970', meaning: 'Dreams and wonder' },
        { name: 'Emerald Green', value: '#50c878', meaning: 'Discovery and potential' },
        { name: 'Royal Purple', value: '#7851a9', meaning: 'Imagination and royalty' },
        { name: 'Starlight Silver', value: '#c0c0c0', meaning: 'Wonder and enchantment' },
      ],
    },
  };

  const handleColorSelect = (color: string) => {
    setSelectedColor(color);
    onChange?.(color);
  };

  const adjustColorIntensity = (color: string, intensity: number): string => {
    const hex = color.replace('#', '');
    const r = parseInt(hex.slice(0, 2), 16);
    const g = parseInt(hex.slice(2, 4), 16);
    const b = parseInt(hex.slice(4, 6), 16);

    const factor = intensity / 5;
    const adjustColor = (c: number) => {
      const adjusted = Math.round(c * factor);
      return Math.min(255, Math.max(0, adjusted));
    };

    const newR = adjustColor(r).toString(16).padStart(2, '0');
    const newG = adjustColor(g).toString(16).padStart(2, '0');
    const newB = adjustColor(b).toString(16).padStart(2, '0');

    return `#${newR}${newG}${newB}`;
  };

  return (
    <div style={{
      padding: '24px',
      background: '#ffffff',
      borderRadius: '16px',
      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
      width: '320px',
    }}>
      <style>{emotionAnimation}</style>

      {/* Emotion selector */}
      <div style={{
        marginBottom: '24px',
      }}>
        <label style={{
          display: 'block',
          marginBottom: '8px',
          color: '#4b5563',
          fontSize: '0.9rem',
        }}>
          Emotional State
        </label>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '8px',
        }}>
          {Object.entries(emotions).map(([key, { name, icon }]) => (
            <button
              key={key}
              onClick={() => setSelectedEmotion(key)}
              style={{
                padding: '8px',
                background: selectedEmotion === key ? '#f3f4f6' : 'transparent',
                border: '2px solid',
                borderColor: selectedEmotion === key ? '#6366f1' : '#e5e7eb',
                borderRadius: '6px',
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
                animation: selectedEmotion === key ? 'pulseEmotion 2s infinite' : 'none',
              }}>
                {icon}
              </span>
              <span style={{
                fontSize: '0.8rem',
                color: '#4b5563',
                textAlign: 'center',
              }}>
                {name}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Emotion description */}
      <div style={{
        padding: '12px',
        background: '#f3f4f6',
        borderRadius: '8px',
        marginBottom: '24px',
        animation: 'slideIn 0.3s ease-out',
      }}>
        <div style={{
          fontSize: '0.9rem',
          color: '#4b5563',
          marginBottom: '8px',
        }}>
          {emotions[selectedEmotion].description}
        </div>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
        }}>
          <span style={{
            fontSize: '0.8rem',
            color: '#6b7280',
          }}>
            Intensity:
          </span>
          <div style={{
            flex: 1,
            height: '4px',
            background: '#e5e7eb',
            borderRadius: '2px',
          }}>
            <div style={{
              width: `${(emotions[selectedEmotion].intensity / 10) * 100}%`,
              height: '100%',
              background: '#6366f1',
              borderRadius: '2px',
              transition: 'width 0.3s ease',
            }} />
          </div>
        </div>
      </div>

      {/* Color palette */}
      <div style={{
        display: 'grid',
        gap: '12px',
        marginBottom: '24px',
      }}>
        {emotions[selectedEmotion].colors.map((color, index) => (
          <button
            key={color.value}
            onClick={() => handleColorSelect(adjustColorIntensity(color.value, intensityLevel))}
            style={{
              display: 'grid',
              gridTemplateColumns: '48px 1fr',
              gap: '12px',
              padding: '8px',
              background: '#f9fafb',
              border: '2px solid',
              borderColor: selectedColor === adjustColorIntensity(color.value, intensityLevel) ? '#6366f1' : 'transparent',
              borderRadius: '8px',
              cursor: 'pointer',
              animation: `slideIn 0.3s ease-out ${index * 0.1}s`,
              alignItems: 'center',
            }}
          >
            <div style={{
              width: '48px',
              height: '48px',
              background: adjustColorIntensity(color.value, intensityLevel),
              borderRadius: '6px',
              boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
              transition: 'background-color 0.3s ease',
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
                {color.meaning}
              </div>
            </div>
          </button>
        ))}
      </div>

      {/* Intensity control */}
      <div style={{
        marginBottom: '24px',
      }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginBottom: '8px',
        }}>
          <label style={{
            color: '#4b5563',
            fontSize: '0.9rem',
          }}>
            Color Intensity
          </label>
          <span style={{
            color: '#6b7280',
            fontSize: '0.9rem',
            fontFamily: 'monospace',
          }}>
            {intensityLevel}/10
          </span>
        </div>
        <input
          type="range"
          min="1"
          max="10"
          value={intensityLevel}
          onChange={(e) => setIntensityLevel(Number(e.target.value))}
          style={{
            width: '100%',
            height: '6px',
            borderRadius: '3px',
            background: '#e5e7eb',
            appearance: 'none',
            cursor: 'pointer',
          }}
        />
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

export default ColorPicker_26; 