'use client';
import React, { useState, useEffect } from 'react';

const timeAnimation = `
  @keyframes sunMove {
    0% { transform: translateY(0) scale(1); }
    50% { transform: translateY(-5px) scale(1.1); }
    100% { transform: translateY(0) scale(1); }
  }

  @keyframes colorTransition {
    from { opacity: 0; transform: translateX(-10px); }
    to { opacity: 1; transform: translateX(0); }
  }
`;

const ColorPicker_25 = ({ onChange }) => {
  const [selectedTime, setSelectedTime] = useState('sunrise');
  const [selectedColor, setSelectedColor] = useState('#ff7e5f');
  const [currentTime, setCurrentTime] = useState('');

  const timeThemes = {
    sunrise: {
      name: 'Sunrise',
      icon: '🌅',
      description: 'Warm and gentle colors of the early morning',
      timeRange: '5:00 AM - 8:00 AM',
      colors: [
        { name: 'Dawn Orange', value: '#ff7e5f', description: 'Early morning sun' },
        { name: 'Morning Gold', value: '#feb47b', description: 'Golden horizon' },
        { name: 'Sky Blue', value: '#87ceeb', description: 'Morning sky' },
        { name: 'Misty Rose', value: '#ffe4e1', description: 'Morning fog' },
        { name: 'Pale Yellow', value: '#ffefd5', description: 'First light' },
      ],
    },
    morning: {
      name: 'Morning',
      icon: '☀️',
      description: 'Bright and energetic colors of mid-morning',
      timeRange: '8:00 AM - 11:00 AM',
      colors: [
        { name: 'Clear Blue', value: '#4a90e2', description: 'Clear morning sky' },
        { name: 'Fresh Green', value: '#98fb98', description: 'Morning dew' },
        { name: 'Warm White', value: '#fdfbf9', description: 'Morning light' },
        { name: 'Soft Gold', value: '#ffd700', description: 'Morning sun' },
        { name: 'Light Peach', value: '#ffdab9', description: 'Morning glow' },
      ],
    },
    noon: {
      name: 'Noon',
      icon: '🌞',
      description: 'Vibrant and intense colors of midday',
      timeRange: '11:00 AM - 2:00 PM',
      colors: [
        { name: 'Bright Blue', value: '#00bfff', description: 'Midday sky' },
        { name: 'Sunlight Yellow', value: '#ffff00', description: 'Direct sunlight' },
        { name: 'Pure White', value: '#ffffff', description: 'Intense light' },
        { name: 'Shadow Gray', value: '#a9a9a9', description: 'Sharp shadows' },
        { name: 'Vivid Green', value: '#32cd32', description: 'Sun-lit foliage' },
      ],
    },
    afternoon: {
      name: 'Afternoon',
      icon: '⛅',
      description: 'Warm and relaxing colors of late afternoon',
      timeRange: '2:00 PM - 5:00 PM',
      colors: [
        { name: 'Warm Blue', value: '#6495ed', description: 'Afternoon sky' },
        { name: 'Mellow Yellow', value: '#f0e68c', description: 'Afternoon sun' },
        { name: 'Soft Orange', value: '#ffa07a', description: 'Warm light' },
        { name: 'Dusty Rose', value: '#dda0dd', description: 'Soft shadows' },
        { name: 'Sage Green', value: '#9dc183', description: 'Afternoon nature' },
      ],
    },
  };

  useEffect(() => {
    const updateCurrentTime = () => {
      const now = new Date();
      setCurrentTime(now.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
      }));
    };

    updateCurrentTime();
    const interval = setInterval(updateCurrentTime, 60000);
    return () => clearInterval(interval);
  }, []);

  const handleColorSelect = (color) => {
    setSelectedColor(color);
    if (onChange) onChange(color);
  };

  return (
    <div>
      <style>{timeAnimation}</style>
      <div>{currentTime}</div>
      <div>
        {Object.entries(timeThemes).map(([key, { name, icon }]) => (
          <button key={key} onClick={() => setSelectedTime(key)}>
            <span>{icon}</span>
            <span>{name}</span>
          </button>
        ))}
      </div>
      <div>
        {timeThemes[selectedTime].colors.map((color) => (
          <button key={color.value} onClick={() => handleColorSelect(color.value)}>
            <div style={{ background: color.value }}>{color.name}</div>
          </button>
        ))}
      </div>
      <div>
        <input type="text" value={selectedColor} onChange={(e) => handleColorSelect(e.target.value)} />
      </div>
    </div>
  );
};

export default ColorPicker_25;