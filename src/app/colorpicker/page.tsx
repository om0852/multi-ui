'use client';
import React, { useState } from 'react';
import ColorPicker_11 from './_components/ColorPicker_11';
import ColorPicker_12 from './_components/ColorPicker_12';
import ColorPicker_13 from './_components/ColorPicker_13';
import ColorPicker_14 from './_components/ColorPicker_14';
import ColorPicker_15 from './_components/ColorPicker_15';

const pageStyles = `
  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 32px;
    padding: 32px;
  }

  .picker-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
  }

  .title {
    font-size: 1.2rem;
    color: #4b5563;
    margin: 0;
    text-align: center;
  }

  .description {
    font-size: 0.9rem;
    color: #6b7280;
    margin: 0;
    text-align: center;
  }

  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }
`;

export default function ColorPickerPage() {
  const [selectedColors, setSelectedColors] = useState({
    picker11: '#6366f1',
    picker12: 'hsla(180, 50%, 50%, 1)',
    picker13: '#2196f3',
    picker14: '#000000',
    picker15: '#6366f1',
  });

  const handleColorChange = (picker: keyof typeof selectedColors, color: string) => {
    setSelectedColors(prev => ({ ...prev, [picker]: color }));
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: '#f9fafb',
      padding: '40px 20px',
    }}>
      <style>{pageStyles}</style>

      <header style={{
        textAlign: 'center',
        marginBottom: '40px',
        animation: 'fadeIn 0.5s ease-out',
      }}>
        <h1 style={{
          fontSize: '2.5rem',
          color: '#1f2937',
          margin: '0 0 16px 0',
          fontWeight: 600,
        }}>
          Color Picker Components
        </h1>
        <p style={{
          fontSize: '1.1rem',
          color: '#6b7280',
          maxWidth: '600px',
          margin: '0 auto',
        }}>
          A collection of beautiful and interactive color picker components with different styles and animations.
        </p>
      </header>

      <div className="grid">
        <div className="picker-container" style={{ animation: 'fadeIn 0.5s ease-out' }}>
          <h2 className="title">Circular Color Picker</h2>
          <p className="description">Interactive circular design with smooth animations</p>
          <ColorPicker_11 onChange={(color) => handleColorChange('picker11', color)} />
        </div>

        <div className="picker-container" style={{ animation: 'fadeIn 0.5s ease-out 0.1s' }}>
          <h2 className="title">Gradient Slider Picker</h2>
          <p className="description">HSLA color control with live preview</p>
          <ColorPicker_12 onChange={(color) => handleColorChange('picker12', color)} />
        </div>

        <div className="picker-container" style={{ animation: 'fadeIn 0.5s ease-out 0.2s' }}>
          <h2 className="title">Material Palette Picker</h2>
          <p className="description">Material Design color palettes with ripple effect</p>
          <ColorPicker_13 onChange={(color) => handleColorChange('picker13', color)} />
        </div>

        <div className="picker-container" style={{ animation: 'fadeIn 0.5s ease-out 0.3s' }}>
          <h2 className="title">Minimalist Eyedropper</h2>
          <p className="description">Simple picker with eyedropper functionality</p>
          <ColorPicker_14 onChange={(color) => handleColorChange('picker14', color)} />
        </div>

        <div className="picker-container" style={{ animation: 'fadeIn 0.5s ease-out 0.4s' }}>
          <h2 className="title">Neumorphic Color Picker</h2>
          <p className="description">Soft UI design with interactive shadows</p>
          <ColorPicker_15 onChange={(color) => handleColorChange('picker15', color)} />
        </div>
      </div>

      {/* Selected colors display */}
      <div style={{
        position: 'fixed',
        bottom: '20px',
        left: '50%',
        transform: 'translateX(-50%)',
        background: 'white',
        padding: '16px 24px',
        borderRadius: '12px',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
        display: 'flex',
        gap: '16px',
        animation: 'fadeIn 0.5s ease-out 0.5s',
      }}>
        {Object.entries(selectedColors).map(([key, color]) => (
          <div
            key={key}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
            }}
          >
            <div style={{
              width: '24px',
              height: '24px',
              borderRadius: '6px',
              background: color,
              border: '2px solid #e5e7eb',
            }} />
            <span style={{
              fontSize: '0.9rem',
              color: '#4b5563',
              fontFamily: 'monospace',
            }}>
              {color}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
