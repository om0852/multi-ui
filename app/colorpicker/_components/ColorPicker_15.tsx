'use client';
import React, { useState } from 'react';

const neumorphicAnimation = `
  @keyframes pressIn {
    from { 
      box-shadow: 6px 6px 12px #a8b1c1,
                 -6px -6px 12px #ffffff;
    }
    to { 
      box-shadow: inset 2px 2px 5px #a8b1c1,
                 inset -2px -2px 5px #ffffff;
    }
  }

  @keyframes pressOut {
    from { 
      box-shadow: inset 2px 2px 5px #a8b1c1,
                 inset -2px -2px 5px #ffffff;
    }
    to { 
      box-shadow: 6px 6px 12px #a8b1c1,
                 -6px -6px 12px #ffffff;
    }
  }

  @keyframes colorPop {
    0% { transform: scale(1); }
    50% { transform: scale(1.05); }
    100% { transform: scale(1); }
  }
`;

const ColorPicker_15: React.FC<{ onChange?: (color: string) => void }> = ({ onChange }) => {
  const [selectedColor, setSelectedColor] = useState('#6366f1');
  const [activeButton, setActiveButton] = useState<string | null>(null);

  const colors = [
    { name: 'Indigo', value: '#6366f1' },
    { name: 'Rose', value: '#f43f5e' },
    { name: 'Amber', value: '#f59e0b' },
    { name: 'Emerald', value: '#10b981' },
    { name: 'Sky', value: '#0ea5e9' },
    { name: 'Violet', value: '#8b5cf6' },
  ];

  const handleColorChange = (color: string) => {
    setSelectedColor(color);
    onChange?.(color);
  };

  return (
    <div style={{
      padding: '24px',
      background: '#e0e5ec',
      borderRadius: '20px',
      boxShadow: `
        8px 8px 16px #a8b1c1,
        -8px -8px 16px #ffffff
      `,
      width: '300px',
    }}>
      <style>{neumorphicAnimation}</style>

      {/* Color preview */}
      <div style={{
        marginBottom: '24px',
        padding: '3px',
        borderRadius: '16px',
        background: '#e0e5ec',
        boxShadow: `
          inset 2px 2px 5px #a8b1c1,
          inset -2px -2px 5px #ffffff
        `,
      }}>
        <div style={{
          height: '100px',
          borderRadius: '14px',
          background: selectedColor,
          transition: 'all 0.3s ease',
          animation: 'colorPop 0.3s ease',
        }} />
      </div>

      {/* Color buttons */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '16px',
      }}>
        {colors.map(({ name, value }) => (
          <button
            key={value}
            onClick={() => handleColorChange(value)}
            onMouseDown={() => setActiveButton(value)}
            onMouseUp={() => setActiveButton(null)}
            onMouseLeave={() => setActiveButton(null)}
            style={{
              padding: '16px',
              background: '#e0e5ec',
              border: 'none',
              borderRadius: '12px',
              color: selectedColor === value ? value : '#666',
              fontSize: '0.9rem',
              fontWeight: 500,
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              boxShadow: activeButton === value
                ? `
                    inset 2px 2px 5px #a8b1c1,
                    inset -2px -2px 5px #ffffff
                  `
                : `
                    6px 6px 12px #a8b1c1,
                    -6px -6px 12px #ffffff
                  `,
              animation: activeButton === value
                ? 'pressIn 0.2s ease forwards'
                : activeButton === null
                  ? 'pressOut 0.2s ease'
                  : 'none',
            }}
          >
            {name}
          </button>
        ))}
      </div>

      {/* Color input */}
      <div style={{
        marginTop: '24px',
        padding: '3px',
        borderRadius: '12px',
        background: '#e0e5ec',
        boxShadow: `
          inset 2px 2px 5px #a8b1c1,
          inset -2px -2px 5px #ffffff
        `,
      }}>
        <input
          type="text"
          value={selectedColor}
          onChange={(e) => handleColorChange(e.target.value)}
          style={{
            width: '100%',
            padding: '12px',
            background: 'transparent',
            border: 'none',
            borderRadius: '10px',
            color: '#666',
            fontSize: '0.9rem',
            fontFamily: 'monospace',
            textAlign: 'center',
            outline: 'none',
          }}
        />
      </div>

      {/* Color slider */}
      <div style={{
        marginTop: '24px',
        padding: '3px',
        borderRadius: '12px',
        background: '#e0e5ec',
        boxShadow: `
          inset 2px 2px 5px #a8b1c1,
          inset -2px -2px 5px #ffffff
        `,
      }}>
        <input
          type="color"
          value={selectedColor}
          onChange={(e) => handleColorChange(e.target.value)}
          style={{
            width: '100%',
            height: '40px',
            padding: '0',
            border: 'none',
            borderRadius: '10px',
            cursor: 'pointer',
            background: 'transparent',
          }}
        />
      </div>
    </div>
  );
};

export default ColorPicker_15; 