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

interface TimeTheme {
  name: string;
  icon: string;
  description: string;
  timeRange: string;
  colors: Array<{
    name: string;
    value: string;
    description: string;
  }>;
}

const ColorPicker_25: React.FC<{ onChange?: (color: string) => void }> = ({ onChange }) => {
  const [selectedTime, setSelectedTime] = useState<string>('sunrise');
  const [selectedColor, setSelectedColor] = useState<string>('#ff7e5f');
  const [currentTime, setCurrentTime] = useState<string>('');

  const timeThemes: { [key: string]: TimeTheme } = {
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
    sunset: {
      name: 'Sunset',
      icon: '🌇',
      description: 'Rich and dramatic colors of the setting sun',
      timeRange: '5:00 PM - 8:00 PM',
      colors: [
        { name: 'Sunset Orange', value: '#ff4500', description: 'Setting sun' },
        { name: 'Purple Haze', value: '#9370db', description: 'Evening sky' },
        { name: 'Rose Gold', value: '#b76e79', description: 'Sunset glow' },
        { name: 'Deep Gold', value: '#daa520', description: 'Golden hour' },
        { name: 'Twilight Blue', value: '#4b0082', description: 'Approaching night' },
      ],
    },
    night: {
      name: 'Night',
      icon: '🌙',
      description: 'Deep and mysterious colors of nighttime',
      timeRange: '8:00 PM - 5:00 AM',
      colors: [
        { name: 'Midnight Blue', value: '#191970', description: 'Night sky' },
        { name: 'Moon Silver', value: '#c0c0c0', description: 'Moonlight' },
        { name: 'Star White', value: '#fffafa', description: 'Starlight' },
        { name: 'Deep Purple', value: '#483d8b', description: 'Dark shadows' },
        { name: 'Navy Blue', value: '#000080', description: 'Night depth' },
      ],
    },
  };

  useEffect(() => {
    const updateCurrentTime = () => {
      const now = new Date();
      setCurrentTime(now.toLocaleTimeString('en-US', { 
        hour: '2-digit', 
        minute: '2-digit',
        hour12: true 
      }));
    };

    updateCurrentTime();
    const interval = setInterval(updateCurrentTime, 60000);
    return () => clearInterval(interval);
  }, []);

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
      <style>{timeAnimation}</style>

      {/* Current time display */}
      <div style={{
        textAlign: 'center',
        marginBottom: '20px',
        color: '#4b5563',
        fontSize: '1.2rem',
        fontFamily: 'monospace',
      }}>
        {currentTime}
      </div>

      {/* Time selector */}
      <div style={{
        marginBottom: '24px',
      }}>
        <label style={{
          display: 'block',
          marginBottom: '8px',
          color: '#4b5563',
          fontSize: '0.9rem',
        }}>
          Time of Day
        </label>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '8px',
        }}>
          {Object.entries(timeThemes).map(([key, { name, icon }]) => (
            <button
              key={key}
              onClick={() => setSelectedTime(key)}
              style={{
                padding: '8px',
                background: selectedTime === key ? '#f3f4f6' : 'transparent',
                border: '2px solid',
                borderColor: selectedTime === key ? '#6366f1' : '#e5e7eb',
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
                animation: selectedTime === key ? 'sunMove 2s ease-in-out infinite' : 'none',
              }}>
                {icon}
              </span>
              <span style={{
                fontSize: '0.8rem',
                color: '#4b5563',
              }}>
                {name}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Time range and description */}
      <div style={{
        padding: '12px',
        background: '#f3f4f6',
        borderRadius: '8px',
        marginBottom: '24px',
      }}>
        <div style={{
          fontSize: '0.8rem',
          color: '#6b7280',
          marginBottom: '4px',
          fontFamily: 'monospace',
        }}>
          {timeThemes[selectedTime].timeRange}
        </div>
        <div style={{
          fontSize: '0.9rem',
          color: '#4b5563',
        }}>
          {timeThemes[selectedTime].description}
        </div>
      </div>

      {/* Color palette */}
      <div style={{
        display: 'grid',
        gap: '12px',
        marginBottom: '24px',
      }}>
        {timeThemes[selectedTime].colors.map((color, index) => (
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
              animation: `colorTransition 0.3s ease-out ${index * 0.1}s`,
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
                {color.description}
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

export default ColorPicker_25; 