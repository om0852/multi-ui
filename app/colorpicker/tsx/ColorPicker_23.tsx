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

interface GradientStop {
  color: string;
  position: number;
}

interface GradientType {
  name: string;
  value: 'linear' | 'radial' | 'conic';
  icon: string;
}

const ColorPicker_23: React.FC<{ onChange?: (color: string) => void }> = ({ onChange }) => {
  const [gradientType, setGradientType] = useState<GradientType['value']>('linear');
  const [angle, setAngle] = useState(90);
  const [stops, setStops] = useState<GradientStop[]>([
    { color: '#6366f1', position: 0 },
    { color: '#ec4899', position: 100 },
  ]);

  const gradientTypes: GradientType[] = [
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
      const newPosition = 50;
      const newColor = '#00ff00';
      setStops([...stops, { color: newColor, position: newPosition }]);
    }
  };

  const removeStop = (index: number) => {
    if (stops.length > 2) {
      setStops(stops.filter((_, i) => i !== index));
    }
  };

  const updateStop = (index: number, updates: Partial<GradientStop>) => {
    const newStops = [...stops];
    newStops[index] = { ...newStops[index], ...updates };
    setStops(newStops);
  };

  useEffect(() => {
    onChange?.(getGradientString());
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

      {/* Gradient preview */}
      <div style={{
        height: '200px',
        borderRadius: '12px',
        marginBottom: '24px',
        background: getGradientString(),
        transition: 'background 0.3s ease',
      }} />

      {/* Gradient type selector */}
      <div style={{
        marginBottom: '24px',
      }}>
        <label style={{
          display: 'block',
          marginBottom: '8px',
          color: '#4b5563',
          fontSize: '0.9rem',
        }}>
          Gradient Type
        </label>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '8px',
        }}>
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

      {/* Angle control */}
      {gradientType !== 'radial' && (
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
              Angle
            </label>
            <span style={{
              color: '#6b7280',
              fontSize: '0.9rem',
              fontFamily: 'monospace',
            }}>
              {angle}°
            </span>
          </div>
          <input
            type="range"
            min="0"
            max="360"
            value={angle}
            onChange={(e) => setAngle(Number(e.target.value))}
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
      )}

      {/* Color stops */}
      <div style={{
        marginBottom: '16px',
      }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '8px',
        }}>
          <label style={{
            color: '#4b5563',
            fontSize: '0.9rem',
          }}>
            Color Stops
          </label>
          {stops.length < 5 && (
            <button
              onClick={addStop}
              style={{
                padding: '4px 8px',
                background: '#6366f1',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                fontSize: '0.8rem',
                cursor: 'pointer',
              }}
            >
              Add Stop
            </button>
          )}
        </div>
        {stops.map((stop, index) => (
          <div
            key={index}
            style={{
              display: 'grid',
              gridTemplateColumns: 'auto 1fr auto',
              gap: '8px',
              alignItems: 'center',
              marginBottom: '8px',
            }}
          >
            <input
              type="color"
              value={stop.color}
              onChange={(e) => updateStop(index, { color: e.target.value })}
              style={{
                width: '40px',
                height: '40px',
                padding: '0',
                border: '2px solid #e5e7eb',
                borderRadius: '6px',
                cursor: 'pointer',
              }}
            />
            <input
              type="range"
              min="0"
              max="100"
              value={stop.position}
              onChange={(e) => updateStop(index, { position: Number(e.target.value) })}
              style={{
                width: '100%',
                height: '6px',
                borderRadius: '3px',
                background: '#e5e7eb',
                appearance: 'none',
                cursor: 'pointer',
              }}
            />
            {stops.length > 2 && (
              <button
                onClick={() => removeStop(index)}
                style={{
                  padding: '4px 8px',
                  background: '#ef4444',
                  color: 'white',
                  border: 'none',
                  borderRadius: '4px',
                  fontSize: '0.8rem',
                  cursor: 'pointer',
                }}
              >
                ×
              </button>
            )}
          </div>
        ))}
      </div>

      {/* Gradient string */}
      <div style={{
        padding: '12px',
        background: '#f3f4f6',
        borderRadius: '8px',
        fontSize: '0.8rem',
        color: '#4b5563',
        fontFamily: 'monospace',
        wordBreak: 'break-all',
      }}>
        {getGradientString()}
      </div>
    </div>
  );
};

export default ColorPicker_23; 