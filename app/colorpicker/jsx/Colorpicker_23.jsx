'use client';
import React, { useState, useEffect } from 'react';

const gradientAnimation = `
  @keyframes shimmer {
    0% { background-position: 100% 0; }
    100% { background-position: -100% 0; }
  }

  @keyframes rotate {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
`;

const ColorPicker_23 = ({ onChange }) => {
  const [gradientType, setGradientType] = useState('linear');
  const [angle, setAngle] = useState(90);
  const [stops, setStops] = useState([
    { color: '#6366f1', position: 0 },
    { color: '#ec4899', position: 100 },
  ]);

  const gradientTypes = [
    { name: 'Linear', value: 'linear', icon: '↗️' },
    { name: 'Radial', value: 'radial', icon: '⭕' },
    { name: 'Conic', value: 'conic', icon: '🌀' },
  ];

  const getGradientString = () => {
    const stopString = stops
      .sort((a, b) => a.position - b.position)
      .map(stop => `${stop.color} ${stop.position}%`)
      .join(', ');

    switch (gradientType) {
      case 'linear':
        return `linear-gradient(${angle}deg, ${stopString})`;
      case 'radial':
        return `radial-gradient(circle at center, ${stopString})`;
      case 'conic':
        return `conic-gradient(from ${angle}deg at center, ${stopString})`;
      default:
        return '';
    }
  };

  const addStop = () => {
    if (stops.length < 5) {
      setStops([...stops, { color: '#00ff00', position: 50 }]);
    }
  };

  const removeStop = (index) => {
    if (stops.length > 2) {
      setStops(stops.filter((_, i) => i !== index));
    }
  };

  const updateStop = (index, updates) => {
    const newStops = [...stops];
    newStops[index] = { ...newStops[index], ...updates };
    setStops(newStops);
  };

  useEffect(() => {
    if (onChange) onChange(getGradientString());
  }, [gradientType, angle, stops]);

  return (
    <div style={{
      padding: '24px',
      background: '#ffffff',
      borderRadius: '16px',
      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
      width: '320px',
    }}>
      <style>{gradientAnimation}</style>

      <div style={{
        height: '200px',
        borderRadius: '12px',
        marginBottom: '24px',
        background: getGradientString(),
        transition: 'background 0.3s ease',
      }} />

      <div style={{ marginBottom: '24px' }}>
        <label style={{
          display: 'block',
          marginBottom: '8px',
          color: '#4b5563',
          fontSize: '0.9rem',
        }}>
          Gradient Type
        </label>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '8px' }}>
          {gradientTypes.map(type => (
            <button
              key={type.value}
              onClick={() => setGradientType(type.value)}
              style={{
                padding: '8px',
                background: gradientType === type.value ? '#f3f4f6' : 'transparent',
                border: '2px solid',
                borderColor: gradientType === type.value ? '#6366f1' : '#e5e7eb',
                borderRadius: '6px',
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '4px',
                transition: 'all 0.2s ease',
              }}
            >
              <span style={{ fontSize: '1.2rem' }}>{type.icon}</span>
              <span style={{ fontSize: '0.8rem', color: '#4b5563' }}>{type.name}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ColorPicker_23;
