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

const ColorPicker_12: React.FC<{ onChange?: (color: string) => void }> = ({ onChange }) => {
  const [hue, setHue] = useState(180);
  const [saturation, setSaturation] = useState(50);
  const [lightness, setLightness] = useState(50);
  const [alpha, setAlpha] = useState(100);

  const currentColor = `hsla(${hue}, ${saturation}%, ${lightness}%, ${alpha / 100})`;

  const handleChange = (value: number, type: 'hue' | 'saturation' | 'lightness' | 'alpha') => {
    switch (type) {
      case 'hue':
        setHue(value);
        break;
      case 'saturation':
        setSaturation(value);
        break;
      case 'lightness':
        setLightness(value);
        break;
      case 'alpha':
        setAlpha(value);
        break;
    }
    onChange?.(currentColor);
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

      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
      }}>
        {/* Color preview */}
        <div style={{
          height: '80px',
          borderRadius: '12px',
          background: currentColor,
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
          animation: 'slideIn 0.3s ease-out',
        }} />

        {/* Sliders */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
        }}>
          {/* Hue slider */}
          <div>
            <label style={{
              display: 'block',
              marginBottom: '8px',
              color: '#4b5563',
              fontSize: '0.9rem',
            }}>
              Hue: {hue}°
            </label>
            <div style={{
              position: 'relative',
              height: '24px',
              borderRadius: '12px',
              background: `linear-gradient(to right, 
                hsl(0, ${saturation}%, ${lightness}%),
                hsl(60, ${saturation}%, ${lightness}%),
                hsl(120, ${saturation}%, ${lightness}%),
                hsl(180, ${saturation}%, ${lightness}%),
                hsl(240, ${saturation}%, ${lightness}%),
                hsl(300, ${saturation}%, ${lightness}%),
                hsl(360, ${saturation}%, ${lightness}%)
              )`,
              cursor: 'pointer',
            }}>
              <input
                type="range"
                min="0"
                max="360"
                value={hue}
                onChange={(e) => handleChange(Number(e.target.value), 'hue')}
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

          {/* Saturation slider */}
          <div>
            <label style={{
              display: 'block',
              marginBottom: '8px',
              color: '#4b5563',
              fontSize: '0.9rem',
            }}>
              Saturation: {saturation}%
            </label>
            <div style={{
              position: 'relative',
              height: '24px',
              borderRadius: '12px',
              background: `linear-gradient(to right, 
                hsl(${hue}, 0%, ${lightness}%),
                hsl(${hue}, 100%, ${lightness}%)
              )`,
              cursor: 'pointer',
            }}>
              <input
                type="range"
                min="0"
                max="100"
                value={saturation}
                onChange={(e) => handleChange(Number(e.target.value), 'saturation')}
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

          {/* Lightness slider */}
          <div>
            <label style={{
              display: 'block',
              marginBottom: '8px',
              color: '#4b5563',
              fontSize: '0.9rem',
            }}>
              Lightness: {lightness}%
            </label>
            <div style={{
              position: 'relative',
              height: '24px',
              borderRadius: '12px',
              background: `linear-gradient(to right, 
                hsl(${hue}, ${saturation}%, 0%),
                hsl(${hue}, ${saturation}%, 50%),
                hsl(${hue}, ${saturation}%, 100%)
              )`,
              cursor: 'pointer',
            }}>
              <input
                type="range"
                min="0"
                max="100"
                value={lightness}
                onChange={(e) => handleChange(Number(e.target.value), 'lightness')}
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

          {/* Alpha slider */}
          <div>
            <label style={{
              display: 'block',
              marginBottom: '8px',
              color: '#4b5563',
              fontSize: '0.9rem',
            }}>
              Opacity: {alpha}%
            </label>
            <div style={{
              position: 'relative',
              height: '24px',
              borderRadius: '12px',
              background: `linear-gradient(to right, 
                hsla(${hue}, ${saturation}%, ${lightness}%, 0),
                hsla(${hue}, ${saturation}%, ${lightness}%, 1)
              )`,
              cursor: 'pointer',
            }}>
              <input
                type="range"
                min="0"
                max="100"
                value={alpha}
                onChange={(e) => handleChange(Number(e.target.value), 'alpha')}
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
        </div>

        {/* Color code */}
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