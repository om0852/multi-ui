'use client';
import React, { useState } from 'react';
import ColorPicker_41 from './_components/ColorPicker_41';
import ColorPicker_42 from './_components/ColorPicker_42';
import ColorPicker_43 from './_components/ColorPicker_43';
import ColorPicker_44 from './_components/ColorPicker_44';
import ColorPicker_45 from './_components/ColorPicker_45';
import ColorPicker_46 from './_components/ColorPicker_46';
import ColorPicker_47 from './_components/ColorPicker_47';
import ColorPicker_48 from './_components/ColorPicker_48';
import ColorPicker_49 from './_components/ColorPicker_49';
import ColorPicker_50 from './_components/ColorPicker_50';
import ColorPicker_51 from './_components/ColorPicker_51';
import ColorPicker_52 from './_components/ColorPicker_52';
import ColorPicker_53 from './_components/ColorPicker_53';
import ColorPicker_54 from './_components/ColorPicker_54';
import ColorPicker_55 from './_components/ColorPicker_55';
import ColorPicker_56 from './_components/ColorPicker_56';
import ColorPicker_57 from './_components/ColorPicker_57';
import ColorPicker_58 from './_components/ColorPicker_58';
import ColorPicker_59 from './_components/ColorPicker_59';
import ColorPicker_60 from './_components/ColorPicker_60';

const ColorPickerPage = () => {
  const [selectedTheme, setSelectedTheme] = useState('desserts');
  const [selectedColor, setSelectedColor] = useState('#fdd1d1');

  const themes = [
    { id: 'desserts', name: 'Sweet Treats', component: ColorPicker_41 },
    { id: 'gems', name: 'Gemstones', component: ColorPicker_42 },
    { id: 'weather', name: 'Weather', component: ColorPicker_43 },
    { id: 'space', name: 'Cosmic', component: ColorPicker_44 },
    { id: 'fashion', name: 'Fashion Eras', component: ColorPicker_45 },
    { id: 'nature', name: 'Nature', component: ColorPicker_46 },
    { id: 'ocean', name: 'Ocean Life', component: ColorPicker_47 },
    { id: 'art', name: 'Art History', component: ColorPicker_48 },
    { id: 'minerals', name: 'Minerals', component: ColorPicker_49 },
    { id: 'seasons', name: 'Seasons', component: ColorPicker_50 },
    { id: 'music', name: 'Music', component: ColorPicker_51 },
    { id: 'cuisine', name: 'Cuisine', component: ColorPicker_52 },
    { id: 'architecture', name: 'Architecture', component: ColorPicker_53 },
    { id: 'sports', name: 'Sports', component: ColorPicker_54 },
    { id: 'gaming', name: 'Gaming', component: ColorPicker_55 },
    { id: 'books', name: 'Books & Literature', component: ColorPicker_56 },
    { id: 'science', name: 'Science & Chemistry', component: ColorPicker_57 },
    { id: 'transport', name: 'Transportation', component: ColorPicker_58 },
    { id: 'photo', name: 'Photography', component: ColorPicker_59 },
    { id: 'dance', name: 'Dance & Performance', component: ColorPicker_60 },
  ];

  const handleColorChange = (color: string) => {
    setSelectedColor(color);
  };

  const SelectedColorPicker = themes.find(theme => theme.id === selectedTheme)?.component;

  return (
    <div style={{
      minHeight: '100vh',
      background: '#0f172a',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '48px 24px',
    }}>
      <h1 style={{
        fontSize: '2.5rem',
        color: '#e5e7eb',
        marginBottom: '32px',
        textAlign: 'center',
      }}>
        Themed Color Pickers
      </h1>

      {/* Theme selector */}
      <div style={{
        display: 'flex',
        gap: '12px',
        marginBottom: '48px',
        flexWrap: 'wrap',
        justifyContent: 'center',
        maxWidth: '1200px',
      }}>
        {themes.map(theme => (
          <button
            key={theme.id}
            onClick={() => setSelectedTheme(theme.id)}
            style={{
              padding: '12px 24px',
              background: selectedTheme === theme.id ? '#3b82f6' : '#1e293b',
              border: 'none',
              borderRadius: '8px',
              color: '#e5e7eb',
              cursor: 'pointer',
              fontSize: '1rem',
              transition: 'all 0.2s ease',
            }}
          >
            {theme.name}
          </button>
        ))}
      </div>

      {/* Selected color picker */}
      {SelectedColorPicker && (
        <div style={{
          marginBottom: '48px',
        }}>
          <SelectedColorPicker onChange={handleColorChange} />
        </div>
      )}

      {/* Selected color display */}
      <div style={{
        padding: '24px',
        background: '#1e293b',
        borderRadius: '12px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '16px',
      }}>
        <div style={{
          fontSize: '1.2rem',
          color: '#e5e7eb',
          marginBottom: '8px',
        }}>
          Selected Color
        </div>
        <div style={{
          width: '100px',
          height: '100px',
          borderRadius: '12px',
          background: selectedColor,
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
        }} />
        <div style={{
          fontSize: '1rem',
          color: '#e5e7eb',
          fontFamily: 'monospace',
        }}>
          {selectedColor}
        </div>
      </div>
    </div>
  );
};

export default ColorPickerPage;
