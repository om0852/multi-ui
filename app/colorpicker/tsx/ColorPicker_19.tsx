'use client';
import React, { useState, useEffect } from 'react';

const accessibilityAnimation = `
  @keyframes slideUp {
    from { transform: translateY(10px); opacity: 0; }
    to { transform: translateY(0); opacity: 1; }
  }

  @keyframes pulse {
    0% { transform: scale(1); }
    50% { transform: scale(1.02); }
    100% { transform: scale(1); }
  }
`;

const ColorPicker_19: React.FC<{ onChange?: (color: string) => void }> = ({ onChange }) => {
  const [foregroundColor, setForegroundColor] = useState('#000000');
  const [backgroundColor, setBackgroundColor] = useState('#ffffff');
  const [contrastRatio, setContrastRatio] = useState(21);
  const [wcagResults, setWcagResults] = useState({
    AALarge: true,
    AASmall: true,
    AAALarge: true,
    AAASmall: true,
  });

  // Calculate relative luminance
  const getLuminance = (hex: string): number => {
    const rgb = hex.match(/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i);
    if (!rgb) return 0;

    const [r, g, b] = [
      parseInt(rgb[1], 16) / 255,
      parseInt(rgb[2], 16) / 255,
      parseInt(rgb[3], 16) / 255,
    ].map(val => {
      return val <= 0.03928
        ? val / 12.92
        : Math.pow((val + 0.055) / 1.055, 2.4);
    });

    return 0.2126 * r + 0.7152 * g + 0.0722 * b;
  };

  // Calculate contrast ratio
  const calculateContrastRatio = (l1: number, l2: number): number => {
    const lighter = Math.max(l1, l2);
    const darker = Math.min(l1, l2);
    return (lighter + 0.05) / (darker + 0.05);
  };

  // Update contrast calculations
  useEffect(() => {
    const luminance1 = getLuminance(foregroundColor);
    const luminance2 = getLuminance(backgroundColor);
    const ratio = calculateContrastRatio(luminance1, luminance2);
    setContrastRatio(ratio);

    setWcagResults({
      AALarge: ratio >= 3,
      AASmall: ratio >= 4.5,
      AAALarge: ratio >= 4.5,
      AAASmall: ratio >= 7,
    });

    onChange?.(foregroundColor);
  }, [foregroundColor, backgroundColor]);

  const ComplianceBadge = ({ level, passes }: { level: string; passes: boolean }) => (
    <div style={{
      padding: '8px 12px',
      borderRadius: '6px',
      background: passes ? '#dcfce7' : '#fee2e2',
      color: passes ? '#166534' : '#991b1b',
      fontSize: '0.9rem',
      fontWeight: 500,
      display: 'flex',
      alignItems: 'center',
      gap: '6px',
      animation: 'slideUp 0.3s ease-out',
    }}>
      <span style={{
        fontSize: '1.2rem',
      }}>
        {passes ? '✓' : '×'}
      </span>
      {level}
    </div>
  );

  return (
    <div style={{
      padding: '24px',
      background: '#ffffff',
      borderRadius: '16px',
      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
      width: '320px',
    }}>
      <style>{accessibilityAnimation}</style>

      {/* Preview area */}
      <div style={{
        padding: '24px',
        borderRadius: '12px',
        background: backgroundColor,
        marginBottom: '24px',
        animation: 'pulse 2s infinite',
      }}>
        <p style={{
          margin: 0,
          color: foregroundColor,
          fontSize: '1rem',
          fontWeight: 500,
        }}>
          Preview Text
        </p>
        <p style={{
          margin: '8px 0 0 0',
          color: foregroundColor,
          fontSize: '0.9rem',
        }}>
          This is a sample text to demonstrate the contrast between the selected colors.
        </p>
      </div>

      {/* Color controls */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
        marginBottom: '24px',
      }}>
        {/* Text color */}
        <div>
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
              value={foregroundColor}
              onChange={(e) => setForegroundColor(e.target.value)}
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
              value={foregroundColor}
              onChange={(e) => setForegroundColor(e.target.value)}
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

        {/* Background color */}
        <div>
          <label style={{
            display: 'block',
            marginBottom: '8px',
            color: '#4b5563',
            fontSize: '0.9rem',
          }}>
            Background Color
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

      {/* Contrast ratio */}
      <div style={{
        padding: '16px',
        background: '#f3f4f6',
        borderRadius: '12px',
        marginBottom: '24px',
      }}>
        <div style={{
          fontSize: '2rem',
          fontWeight: 600,
          color: '#1f2937',
          textAlign: 'center',
          marginBottom: '4px',
        }}>
          {contrastRatio.toFixed(2)}:1
        </div>
        <div style={{
          fontSize: '0.9rem',
          color: '#6b7280',
          textAlign: 'center',
        }}>
          Contrast Ratio
        </div>
      </div>

      {/* WCAG compliance */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '12px',
      }}>
        <ComplianceBadge level="AA Large" passes={wcagResults.AALarge} />
        <ComplianceBadge level="AA Small" passes={wcagResults.AASmall} />
        <ComplianceBadge level="AAA Large" passes={wcagResults.AAALarge} />
        <ComplianceBadge level="AAA Small" passes={wcagResults.AAASmall} />
      </div>
    </div>
  );
};

export default ColorPicker_19; 