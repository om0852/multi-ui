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

const ColorPicker_43 = ({ onChange }) => {
  const [selectedWeather, setSelectedWeather] = useState('storm');
  const [selectedColor, setSelectedColor] = useState('#4a5568');

  const weatherThemes = {
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
  };

  const handleColorSelect = (color) => {
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
      <div>
        {Object.entries(weatherThemes).map(([key, { name, icon }]) => (
          <button key={key} onClick={() => setSelectedWeather(key)}>
            <span>{icon}</span>
            <span>{name}</span>
          </button>
        ))}
      </div>
      {/* Color palette */}
      <div>
        {weatherThemes[selectedWeather].colors.map((color) => (
          <button key={color.value} onClick={() => handleColorSelect(color.value)}>
            <div style={{ background: color.value, width: '40px', height: '40px' }}></div>
            <div>{color.name}</div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default ColorPicker_43;
