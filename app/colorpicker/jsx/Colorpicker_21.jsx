'use client';
import React, { useState, useEffect } from 'react';

const mixerAnimation = `
  @keyframes gradientFlow {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }

  @keyframes scaleIn {
    from { transform: scale(0.95); opacity: 0; }
    to { transform: scale(1); opacity: 1; }
  }
`;

const ColorPicker_21 = ({ onChange }) => {
  const [colors, setColors] = useState([
    { value: '#ff6b6b', weight: 50 },
    { value: '#4ecdc4', weight: 50 },
  ]);
  const [mixedColor, setMixedColor] = useState('#ff6b6b');

  const hexToRgb = (hex) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? [
      parseInt(result[1], 16),
      parseInt(result[2], 16),
      parseInt(result[3], 16),
    ] : [0, 0, 0];
  };

  const rgbToHex = (r, g, b) => {
    return '#' + [r, g, b]
      .map(x => Math.round(x).toString(16).padStart(2, '0'))
      .join('');
  };

  const mixColors = () => {
    const totalWeight = colors.reduce((sum, color) => sum + color.weight, 0);
    const normalizedColors = colors.map(color => ({
      rgb: hexToRgb(color.value),
      weight: color.weight / totalWeight,
    }));

    const mixed = normalizedColors.reduce((acc, { rgb, weight }) => [
      acc[0] + rgb[0] * weight,
      acc[1] + rgb[1] * weight,
      acc[2] + rgb[2] * weight,
    ], [0, 0, 0]);

    const hexColor = rgbToHex(mixed[0], mixed[1], mixed[2]);
    setMixedColor(hexColor);
    onChange?.(hexColor);
  };

  useEffect(() => {
    mixColors();
  }, [colors]);

  return (
    <div style={{
      padding: '24px',
      background: '#ffffff',
      borderRadius: '16px',
      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
      width: '320px',
    }}>
      <style>{mixerAnimation}</style>
      <div style={{
        height: '100px',
        borderRadius: '12px',
        background: `linear-gradient(45deg, ${colors.map(c => c.value).join(', ')})`,
        backgroundSize: '200% 200%',
        animation: 'gradientFlow 5s ease infinite',
        marginBottom: '24px',
      }} />
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        marginBottom: '24px',
        padding: '16px',
        background: '#f3f4f6',
        borderRadius: '12px',
      }}>
        <div style={{
          width: '50px',
          height: '50px',
          borderRadius: '8px',
          background: mixedColor,
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
          animation: 'scaleIn 0.3s ease-out',
        }} />
        <input type="text" value={mixedColor} readOnly style={{
          flex: 1,
          padding: '8px',
          border: '2px solid #e5e7eb',
          borderRadius: '6px',
          fontSize: '0.9rem',
          color: '#4b5563',
          fontFamily: 'monospace',
          background: '#ffffff',
        }} />
      </div>
    </div>
  );
};

export default ColorPicker_21;
