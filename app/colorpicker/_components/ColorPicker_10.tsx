"use client";
import React, { useState, useEffect } from 'react';

const accessibilityAnimation = `
  @keyframes checkmarkDraw {
    from { stroke-dashoffset: 100; }
    to { stroke-dashoffset: 0; }
  }

  @keyframes slideUp {
    from { transform: translateY(10px); opacity: 0; }
    to { transform: translateY(0); opacity: 1; }
  }
`;

interface WCAGResult {
  level: string;
  pass: boolean;
  ratio: number;
}

const ColorPicker_10: React.FC<{ onChange?: (color: string) => void }> = ({ onChange }) => {
  const [textColor, setTextColor] = useState('#000000');
  const [backgroundColor, setBackgroundColor] = useState('#ffffff');
  const [fontSize, setFontSize] = useState(16);
  const [wcagResults, setWcagResults] = useState<WCAGResult[]>([]);
  const [previewText, setPreviewText] = useState('Preview Text');

  const calculateRelativeLuminance = (hex: string) => {
    const rgb = hex.match(/[A-Za-z0-9]{2}/g)?.map(v => parseInt(v, 16) / 255) || [0, 0, 0];
    const [r, g, b] = rgb.map(v => v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4));
    return 0.2126 * r + 0.7152 * g + 0.0722 * b;
  };

  const calculateContrastRatio = (l1: number, l2: number) => {
    const lighter = Math.max(l1, l2);
    const darker = Math.min(l1, l2);
    return (lighter + 0.05) / (darker + 0.05);
  };

  useEffect(() => {
    const textLuminance = calculateRelativeLuminance(textColor);
    const bgLuminance = calculateRelativeLuminance(backgroundColor);
    const ratio = calculateContrastRatio(textLuminance, bgLuminance);

    const results: WCAGResult[] = [
      { level: 'AA Large', pass: ratio >= 3, ratio },
      { level: 'AA Normal', pass: ratio >= 4.5, ratio },
      { level: 'AAA Large', pass: ratio >= 4.5, ratio },
      { level: 'AAA Normal', pass: ratio >= 7, ratio },
    ];

    setWcagResults(results);
    onChange?.(textColor);
  }, [textColor, backgroundColor]);

  return (
    <div style={{
      padding: '24px',
      background: '#ffffff',
      borderRadius: '16px',
      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
      width: '320px',
    }}>
      <style>{accessibilityAnimation}</style>

      {/* Text preview */}
      <div style={{
        padding: '20px',
        borderRadius: '12px',
        background: backgroundColor,
        marginBottom: '24px',
        minHeight: '150px',
        display: 'flex',
        flexDirection: 'column',
        gap: '12px',
        animation: 'slideUp 0.3s ease-out',
      }}>
        <p style={{
          color: textColor,
          fontSize: `${fontSize}px`,
          margin: 0,
          transition: 'all 0.3s ease',
        }}>
          {previewText}
        </p>
        <input
          type="text"
          value={previewText}
          onChange={(e) => setPreviewText(e.target.value)}
          style={{
            background: 'transparent',
            border: `1px solid ${textColor}`,
            color: textColor,
            padding: '8px',
            borderRadius: '6px',
            fontSize: '0.9rem',
          }}
          placeholder="Enter preview text"
        />
      </div>

      {/* Color controls */}
      <div style={{
        display: 'flex',
        gap: '12px',
        marginBottom: '24px',
      }}>
        <div style={{ flex: 1 }}>
          <label style={{
            display: 'block',
            marginBottom: '8px',
            color: '#4b5563',
            fontSize: '0.9rem',
          }}>
            Text Color
          </label>
          <div style={{
            display: 'flex',
            gap: '8px',
          }}>
            <input
              type="color"
              value={textColor}
              onChange={(e) => setTextColor(e.target.value)}
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
              type="text"
              value={textColor}
              onChange={(e) => setTextColor(e.target.value)}
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
        <div style={{ flex: 1 }}>
          <label style={{
            display: 'block',
            marginBottom: '8px',
            color: '#4b5563',
            fontSize: '0.9rem',
          }}>
            Background
          </label>
          <div style={{
            display: 'flex',
            gap: '8px',
          }}>
            <input
              type="color"
              value={backgroundColor}
              onChange={(e) => setBackgroundColor(e.target.value)}
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
              type="text"
              value={backgroundColor}
              onChange={(e) => setBackgroundColor(e.target.value)}
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
      </div>

      {/* Font size control */}
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
            Font Size
          </label>
          <span style={{
            color: '#6b7280',
            fontSize: '0.9rem',
            fontFamily: 'monospace',
          }}>
            {fontSize}px
          </span>
        </div>
        <input
          type="range"
          min="12"
          max="32"
          value={fontSize}
          onChange={(e) => setFontSize(Number(e.target.value))}
          style={{
            width: '100%',
            height: '6px',
            borderRadius: '3px',
            appearance: 'none',
            background: '#e5e7eb',
            cursor: 'pointer',
          }}
        />
      </div>

      {/* WCAG results */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: '12px',
      }}>
        {wcagResults.map((result, index) => (
          <div
            key={result.level}
            style={{
              padding: '12px',
              background: '#f3f4f6',
              borderRadius: '8px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '8px',
              animation: `slideUp 0.3s ease-out ${index * 0.1}s`,
            }}
          >
            <div style={{
              fontSize: '0.8rem',
              color: '#4b5563',
              fontWeight: 500,
            }}>
              {result.level}
            </div>
            <div style={{
              width: '24px',
              height: '24px',
              borderRadius: '50%',
              background: result.pass ? '#34d399' : '#f87171',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'background-color 0.3s ease',
            }}>
              {result.pass ? '✓' : '×'}
            </div>
            <div style={{
              fontSize: '0.8rem',
              color: '#6b7280',
              fontFamily: 'monospace',
            }}>
              {result.ratio.toFixed(2)}:1
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ColorPicker_10;
