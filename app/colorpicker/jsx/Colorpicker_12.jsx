'use client';
import React, { useState } from 'react';

const sliderAnimation = `
  @keyframes slideIn {
    from { transform: translateX(-10px); opacity: 0; }
    to { transform: translateX(0); opacity: 1; }
  }

  @keyframes glow {
    0%, 100% { box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); }
    50% { box-shadow: 0 0 20px rgba(0, 0, 0, 0.2); }
  }
`;

const ColorPicker_12 = ({ onChange }) => {
  const [hue, setHue] = useState(180);
  const [saturation, setSaturation] = useState(50);
  const [lightness, setLightness] = useState(50);
  const [alpha, setAlpha] = useState(100);

  const currentColor = `hsla(${hue}, ${saturation}%, ${lightness}%, ${alpha / 100})`;

  const handleChange = (value, type) => {
    if (type === 'hue') setHue(value);
    else if (type === 'saturation') setSaturation(value);
    else if (type === 'lightness') setLightness(value);
    else if (type === 'alpha') setAlpha(value);
    
    if (onChange) onChange(currentColor);
  };

  return (
    <div style={{
      padding: '24px',
      background: '#ffffff',
      borderRadius: '16px',
      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
      width: '300px',
      animation: 'glow 3s infinite',
    }}>
      <style>{sliderAnimation}</style>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <div style={{
          height: '80px',
          borderRadius: '12px',
          background: currentColor,
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
          animation: 'slideIn 0.3s ease-out',
        }} />

        {[['Hue', hue, 0, 360], ['Saturation', saturation, 0, 100], ['Lightness', lightness, 0, 100], ['Opacity', alpha, 0, 100]].map(([label, value, min, max], index) => (
          <div key={index}>
            <label style={{ display: 'block', marginBottom: '8px', color: '#4b5563', fontSize: '0.9rem' }}>
              {label}: {value}{label === 'Hue' ? '°' : '%'}
            </label>
            <div style={{
              position: 'relative',
              height: '24px',
              borderRadius: '12px',
              background: label === 'Hue' 
                ? `linear-gradient(to right, hsl(0, ${saturation}%, ${lightness}%), hsl(60, ${saturation}%, ${lightness}%), hsl(120, ${saturation}%, ${lightness}%), hsl(180, ${saturation}%, ${lightness}%), hsl(240, ${saturation}%, ${lightness}%), hsl(300, ${saturation}%, ${lightness}%), hsl(360, ${saturation}%, ${lightness}%))`
                : label === 'Saturation' 
                ? `linear-gradient(to right, hsl(${hue}, 0%, ${lightness}%), hsl(${hue}, 100%, ${lightness}%))`
                : label === 'Lightness' 
                ? `linear-gradient(to right, hsl(${hue}, ${saturation}%, 0%), hsl(${hue}, ${saturation}%, 50%), hsl(${hue}, ${saturation}%, 100%))`
                : `linear-gradient(to right, hsla(${hue}, ${saturation}%, ${lightness}%, 0), hsla(${hue}, ${saturation}%, ${lightness}%, 1))`,
              cursor: 'pointer',
            }}>
              <input
                type="range"
                min={min}
                max={max}
                value={value}
                onChange={(e) => handleChange(Number(e.target.value), label.toLowerCase())}
                style={{
                  width: '100%',
                  height: '100%',
                  appearance: 'none',
                  background: 'transparent',
                  cursor: 'pointer',
                }}
              />
            </div>
          </div>
        ))}

        <div style={{
          padding: '12px',
          background: '#f3f4f6',
          borderRadius: '8px',
          fontFamily: 'monospace',
          fontSize: '0.9rem',
          color: '#4b5563',
          textAlign: 'center',
        }}>
          {currentColor}
        </div>
      </div>
    </div>
  );
};

export default ColorPicker_12;
