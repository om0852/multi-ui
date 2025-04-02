'use client';
import React, { useState } from 'react';

interface Pattern {
  name: string;
  value: string;
  size?: string;
}

interface Patterns {
  [key: string]: Pattern;
}

const patternAnimation = `
  @keyframes patternSlide {
    0% { background-position: 0% 0%; }
    100% { background-position: 100% 100%; }
  }

  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
`;

const ColorPicker_7: React.FC<{ onChange?: (color: string) => void }> = ({ onChange }) => {
  const [baseColor, setBaseColor] = useState('#6366f1');
  const [selectedPattern, setSelectedPattern] = useState('none');
  const [patternOpacity, setPatternOpacity] = useState(0.2);
  const [patternScale, setPatternScale] = useState(1);

  const patterns: Patterns = {
    none: {
      name: 'None',
      value: 'none',
    },
    dots: {
      name: 'Polka Dots',
      value: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
      size: '10px 10px',
    },
    stripes: {
      name: 'Diagonal Stripes',
      value: `repeating-linear-gradient(45deg, white 0, white 2px, transparent 0, transparent 8px)`,
    },
    crosshatch: {
      name: 'Crosshatch',
      value: `repeating-linear-gradient(45deg, white 0, white 1px, transparent 0, transparent 8px),
              repeating-linear-gradient(-45deg, white 0, white 1px, transparent 0, transparent 8px)`,
    },
    zigzag: {
      name: 'Zigzag',
      value: `linear-gradient(135deg, white 25%, transparent 25%) -10px 0,
              linear-gradient(225deg, white 25%, transparent 25%) -10px 0,
              linear-gradient(315deg, white 25%, transparent 25%),
              linear-gradient(45deg, white 25%, transparent 25%)`,
      size: '20px 20px',
    },
    waves: {
      name: 'Waves',
      value: `radial-gradient(circle at 100% 50%, transparent 20%, rgba(255,255,255,0.3) 21%, rgba(255,255,255,0.3) 34%, transparent 35%, transparent),
              radial-gradient(circle at 0% 50%, transparent 20%, rgba(255,255,255,0.3) 21%, rgba(255,255,255,0.3) 34%, transparent 35%, transparent)`,
      size: '20px 20px',
    },
  };

  const handleColorChange = (color: string) => {
    setBaseColor(color);
    onChange?.(color);
  };

  const getPatternStyle = () => {
    if (selectedPattern === 'none') return {};

    const pattern = patterns[selectedPattern as keyof typeof patterns];
    return {
      backgroundImage: pattern.value,
      backgroundSize: pattern.size || '8px 8px',
      backgroundPosition: '0 0',
      animation: selectedPattern !== 'none' ? 'patternSlide 20s linear infinite' : 'none',
    };
  };

  return (
    <div style={{
      padding: '24px',
      background: '#ffffff',
      borderRadius: '16px',
      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
      width: '320px',
    }}>
      <style>{patternAnimation}</style>

      {/* Color preview with pattern */}
      <div style={{
        height: '200px',
        borderRadius: '12px',
        background: baseColor,
        marginBottom: '24px',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute',
          inset: 0,
          opacity: patternOpacity,
          transform: `scale(${patternScale})`,
          transition: 'all 0.3s ease',
          ...getPatternStyle(),
        }} />
      </div>

      {/* Color selector */}
      <div style={{
        marginBottom: '24px',
      }}>
        <label style={{
          display: 'block',
          marginBottom: '8px',
          color: '#4b5563',
          fontSize: '0.9rem',
        }}>
          Base Color
        </label>
        <div style={{
          display: 'flex',
          gap: '8px',
        }}>
          <input
            type="color"
            value={baseColor}
            onChange={(e) => handleColorChange(e.target.value)}
            style={{
              width: '60px',
              height: '36px',
              padding: '0',
              border: '2px solid #e5e7eb',
              borderRadius: '6px',
              cursor: 'pointer',
            }}
          />
          <input
            type="text"
            value={baseColor}
            onChange={(e) => handleColorChange(e.target.value)}
            style={{
              flex: 1,
              padding: '8px',
              border: '2px solid #e5e7eb',
              borderRadius: '6px',
              fontSize: '0.9rem',
              color: '#4b5563',
              fontFamily: 'monospace',
            }}
          />
        </div>
      </div>

      {/* Pattern selector */}
      <div style={{
        marginBottom: '24px',
      }}>
        <label style={{
          display: 'block',
          marginBottom: '8px',
          color: '#4b5563',
          fontSize: '0.9rem',
        }}>
          Pattern
        </label>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '8px',
        }}>
          {Object.entries(patterns).map(([key, { name }]) => (
            <button
              key={key}
              onClick={() => setSelectedPattern(key)}
              style={{
                padding: '8px',
                background: selectedPattern === key ? '#f3f4f6' : 'transparent',
                border: '2px solid',
                borderColor: selectedPattern === key ? '#6366f1' : '#e5e7eb',
                borderRadius: '6px',
                fontSize: '0.8rem',
                color: '#4b5563',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
              }}
            >
              {name}
            </button>
          ))}
        </div>
      </div>

      {/* Pattern controls */}
      {selectedPattern !== 'none' && (
        <div style={{
          animation: 'fadeIn 0.3s ease-out',
        }}>
          {/* Opacity control */}
          <div style={{
            marginBottom: '16px',
          }}>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              marginBottom: '4px',
            }}>
              <label style={{
                fontSize: '0.9rem',
                color: '#4b5563',
              }}>
                Pattern Opacity
              </label>
              <span style={{
                fontSize: '0.9rem',
                color: '#6b7280',
                fontFamily: 'monospace',
              }}>
                {Math.round(patternOpacity * 100)}%
              </span>
            </div>
            <input
              type="range"
              min="0"
              max="100"
              value={patternOpacity * 100}
              onChange={(e) => setPatternOpacity(Number(e.target.value) / 100)}
              style={{
                width: '100%',
                height: '6px',
                borderRadius: '3px',
                background: `linear-gradient(to right, ${baseColor}40, ${baseColor})`,
                appearance: 'none',
                cursor: 'pointer',
              }}
            />
          </div>

          {/* Scale control */}
          <div>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              marginBottom: '4px',
            }}>
              <label style={{
                fontSize: '0.9rem',
                color: '#4b5563',
              }}>
                Pattern Scale
              </label>
              <span style={{
                fontSize: '0.9rem',
                color: '#6b7280',
                fontFamily: 'monospace',
              }}>
                {patternScale.toFixed(1)}x
              </span>
            </div>
            <input
              type="range"
              min="0.5"
              max="2"
              step="0.1"
              value={patternScale}
              onChange={(e) => setPatternScale(Number(e.target.value))}
              style={{
                width: '100%',
                height: '6px',
                borderRadius: '3px',
                background: `linear-gradient(to right, ${baseColor}40, ${baseColor})`,
                appearance: 'none',
                cursor: 'pointer',
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ColorPicker_7;