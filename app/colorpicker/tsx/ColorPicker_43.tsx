'use client';
import React, { useState } from 'react';

const weatherAnimation = `
  @keyframes drift {
    0% { transform: translateX(0); }
    50% { transform: translateX(5px); }
    100% { transform: translateX(0); }
  }

  @keyframes fade {
    0% { opacity: 0.7; }
    50% { opacity: 1; }
    100% { opacity: 0.7; }
  }
`;

interface WeatherTheme {
  name: string;
  condition: string;
  icon: string;
  description: string;
  colors: Array<{
    name: string;
    value: string;
    element: string;
  }>;
}

const ColorPicker_43: React.FC<{ onChange?: (color: string) => void }> = ({ onChange }) => {
  const [selectedWeather, setSelectedWeather] = useState<string>('storm');
  const [selectedColor, setSelectedColor] = useState<string>('#4a5568');

  const weatherThemes: { [key: string]: WeatherTheme } = {
    storm: {
      name: 'Thunderstorm',
      condition: 'Severe Weather',
      icon: '⛈️',
      description: 'Dramatic colors of electrical storms',
      colors: [
        { name: 'Thunder Gray', value: '#4a5568', element: 'Storm clouds' },
        { name: 'Lightning Flash', value: '#ffd700', element: 'Lightning bolt' },
        { name: 'Rain Blue', value: '#1e90ff', element: 'Heavy rain' },
        { name: 'Cloud Dark', value: '#2d3748', element: 'Thunder head' },
        { name: 'Electric Purple', value: '#9f7aea', element: 'Distant flash' },
      ],
    },
    sunset: {
      name: 'Sunset Sky',
      condition: 'Clear Evening',
      icon: '🌅',
      description: 'Warm colors of dusk',
      colors: [
        { name: 'Horizon Gold', value: '#ffa500', element: 'Setting sun' },
        { name: 'Sky Pink', value: '#ff69b4', element: 'Scattered clouds' },
        { name: 'Dusk Purple', value: '#483d8b', element: 'Fading light' },
        { name: 'Cloud Orange', value: '#ff7f50', element: 'Illuminated clouds' },
        { name: 'Night Blue', value: '#191970', element: 'Approaching night' },
      ],
    },
    fog: {
      name: 'Foggy Day',
      condition: 'Low Visibility',
      icon: '🌫️',
      description: 'Muted colors of misty weather',
      colors: [
        { name: 'Mist Gray', value: '#b8c2cc', element: 'Dense fog' },
        { name: 'Pearl White', value: '#f5f5f5', element: 'Light haze' },
        { name: 'Shadow Blue', value: '#778899', element: 'Distant objects' },
        { name: 'Fog Green', value: '#98fb98', element: 'Filtered sunlight' },
        { name: 'Steel Gray', value: '#708090', element: 'Heavy mist' },
      ],
    },
    rainbow: {
      name: 'Rainbow',
      condition: 'After Rain',
      icon: '🌈',
      description: 'Spectrum of light in water droplets',
      colors: [
        { name: 'Prism Red', value: '#ff0000', element: 'Primary band' },
        { name: 'Solar Orange', value: '#ff7f00', element: 'Secondary band' },
        { name: 'Rain Yellow', value: '#ffff00', element: 'Third band' },
        { name: 'Sky Blue', value: '#00bfff', element: 'Fourth band' },
        { name: 'Violet Arc', value: '#8b00ff', element: 'Final band' },
      ],
    },
    aurora: {
      name: 'Aurora',
      condition: 'Polar Night',
      icon: '✨',
      description: 'Dancing lights of the polar sky',
      colors: [
        { name: 'Northern Green', value: '#00ff87', element: 'Main curtain' },
        { name: 'Polar Blue', value: '#00ffff', element: 'Lower band' },
        { name: 'Arctic Purple', value: '#9932cc', element: 'Upper rays' },
        { name: 'Ice Pink', value: '#ffb6c1', element: 'Corona' },
        { name: 'Star White', value: '#f8f8ff', element: 'Background stars' },
      ],
    },
    snow: {
      name: 'Snowfall',
      condition: 'Winter Weather',
      icon: '❄️',
      description: 'Pristine colors of fresh snow',
      colors: [
        { name: 'Fresh Snow', value: '#fffafa', element: 'New snowfall' },
        { name: 'Ice Blue', value: '#f0f8ff', element: 'Frozen crystals' },
        { name: 'Shadow White', value: '#f5f5f5', element: 'Drifting snow' },
        { name: 'Winter Sky', value: '#87ceeb', element: 'Clear sky' },
        { name: 'Glacier Blue', value: '#b0e0e6', element: 'Packed snow' },
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
      <style>{weatherAnimation}</style>

      {/* Weather selector */}
      <div style={{
        marginBottom: '24px',
      }}>
        <label style={{
          display: 'block',
          marginBottom: '8px',
          color: '#e5e7eb',
          fontSize: '0.9rem',
        }}>
          Weather Condition
        </label>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '8px',
        }}>
          {Object.entries(weatherThemes).map(([key, { name, icon }]) => (
            <button
              key={key}
              onClick={() => setSelectedWeather(key)}
              style={{
                padding: '12px 8px',
                background: selectedWeather === key ? '#2d2d2d' : 'transparent',
                border: '2px solid',
                borderColor: selectedWeather === key ? '#6366f1' : '#4b5563',
                borderRadius: '6px',
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '4px',
                animation: selectedWeather === key ? 'drift 2s infinite' : 'none',
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
                fontWeight: selectedWeather === key ? 500 : 400,
              }}>
                {name}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Weather info */}
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
          {weatherThemes[selectedWeather].condition}
        </div>
        <div style={{
          fontSize: '0.9rem',
          color: '#e5e7eb',
        }}>
          {weatherThemes[selectedWeather].description}
        </div>
      </div>

      {/* Color palette */}
      <div style={{
        display: 'grid',
        gap: '12px',
        marginBottom: '24px',
      }}>
        {weatherThemes[selectedWeather].colors.map((color) => (
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
              animation: selectedColor === color.value ? 'fade 2s infinite' : 'none',
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
                {color.element}
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

export default ColorPicker_43; 