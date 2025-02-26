'use client';
import React, { useState } from 'react';

const eyedropperAnimation = `
  @keyframes dropperPulse {
    0% { transform: scale(1); }
    50% { transform: scale(1.1); }
    100% { transform: scale(1); }
  }

  @keyframes fadeInUp {
    from { transform: translateY(10px); opacity: 0; }
    to { transform: translateY(0); opacity: 1; }
  }

  @keyframes shake {
    0%, 100% { transform: rotate(0deg); }
    25% { transform: rotate(-10deg); }
    75% { transform: rotate(10deg); }
  }
`;

const ColorPicker_14: React.FC<{ onChange?: (color: string) => void }> = ({ onChange }) => {
  const [selectedColor, setSelectedColor] = useState('#000000');
  const [recentColors, setRecentColors] = useState<string[]>([]);
  const [isEyedropperActive, setIsEyedropperActive] = useState(false);

  const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const color = e.target.value;
    updateColor(color);
  };

  const updateColor = (color: string) => {
    setSelectedColor(color);
    if (!recentColors.includes(color)) {
      setRecentColors(prev => [color, ...prev].slice(0, 5));
    }
    onChange?.(color);
  };

  const handleEyedropper = async () => {
    if (!window.EyeDropper) {
      alert('Eyedropper is not supported in your browser');
      return;
    }

    try {
      setIsEyedropperActive(true);
      const eyeDropper = new window.EyeDropper();
      const result = await eyeDropper.open();
      updateColor(result.sRGBHex);
    } catch (e) {
      console.log('User canceled the eyedropper');
    } finally {
      setIsEyedropperActive(false);
    }
  };

  return (
    <div style={{
      padding: '24px',
      background: '#ffffff',
      borderRadius: '16px',
      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
      width: '280px',
      animation: 'fadeInUp 0.3s ease-out',
    }}>
      <style>{eyedropperAnimation}</style>

      {/* Color preview and input */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '16px',
        marginBottom: '20px',
      }}>
        <div style={{
          width: '60px',
          height: '60px',
          borderRadius: '12px',
          background: selectedColor,
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
          transition: 'all 0.3s ease',
        }} />
        <div style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          gap: '8px',
        }}>
          <input
            type="color"
            value={selectedColor}
            onChange={handleColorChange}
            style={{
              width: '100%',
              height: '32px',
              padding: 0,
              border: '2px solid #e5e7eb',
              borderRadius: '6px',
              cursor: 'pointer',
            }}
          />
          <input
            type="text"
            value={selectedColor}
            onChange={(e) => updateColor(e.target.value)}
            style={{
              width: '100%',
              padding: '6px',
              border: '2px solid #e5e7eb',
              borderRadius: '6px',
              fontSize: '0.9rem',
              color: '#4b5563',
              fontFamily: 'monospace',
            }}
          />
        </div>
      </div>

      {/* Eyedropper button */}
      <button
        onClick={handleEyedropper}
        style={{
          width: '100%',
          padding: '12px',
          background: '#f3f4f6',
          border: '2px solid #e5e7eb',
          borderRadius: '8px',
          color: '#4b5563',
          fontSize: '0.9rem',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '8px',
          transition: 'all 0.2s ease',
          animation: isEyedropperActive ? 'shake 0.5s ease infinite' : 'none',
        }}
      >
        <span style={{
          fontSize: '1.2rem',
          animation: isEyedropperActive ? 'dropperPulse 1s ease infinite' : 'none',
        }}>
          💉
        </span>
        Pick Color
      </button>

      {/* Recent colors */}
      {recentColors.length > 0 && (
        <div style={{
          marginTop: '20px',
        }}>
          <div style={{
            fontSize: '0.8rem',
            color: '#6b7280',
            marginBottom: '8px',
          }}>
            Recent Colors
          </div>
          <div style={{
            display: 'flex',
            gap: '8px',
          }}>
            {recentColors.map((color, index) => (
              <button
                key={index}
                onClick={() => updateColor(color)}
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '6px',
                  background: color,
                  border: selectedColor === color ? '2px solid #000' : '2px solid transparent',
                  cursor: 'pointer',
                  transition: 'transform 0.2s ease',
                  animation: 'fadeInUp 0.3s ease-out',
                  animationDelay: `${index * 0.1}s`,
                }}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ColorPicker_14; 