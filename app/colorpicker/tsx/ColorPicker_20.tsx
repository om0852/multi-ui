'use client';
import React, { useState } from 'react';

const imageAnimation = `
  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }

  @keyframes colorPop {
    0% { transform: scale(1); }
    50% { transform: scale(1.1); }
    100% { transform: scale(1); }
  }
`;

const ColorPicker_20: React.FC<{ onChange?: (color: string) => void }> = ({ onChange }) => {
  const [selectedColor, setSelectedColor] = useState('#6366f1');
  const [activeImage, setActiveImage] = useState(0);

  const images = [
    {
      src: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e',
      alt: 'Beach sunset',
      colors: ['#FF7E5F', '#FEB47B', '#FFE66D', '#4ECDC4', '#45B7D1'],
    },
    {
      src: 'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86',
      alt: 'Mountain landscape',
      colors: ['#2C3E50', '#3498DB', '#ECF0F1', '#BDC3C7', '#6D7B8D'],
    },
    {
      src: 'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc',
      alt: 'Spring flowers',
      colors: ['#FF4E50', '#FC913A', '#F9D423', '#EDE574', '#E1F5C4'],
    },
  ];

  const handleColorSelect = (color: string) => {
    setSelectedColor(color);
    onChange?.(color);
  };

  return (
    <div style={{
      padding: '24px',
      background: '#ffffff',
      borderRadius: '16px',
      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
      width: '320px',
    }}>
      <style>{imageAnimation}</style>

      {/* Image preview */}
      <div style={{
        position: 'relative',
        height: '200px',
        borderRadius: '12px',
        overflow: 'hidden',
        marginBottom: '20px',
      }}>
        <img
          src={images[activeImage].src}
          alt={images[activeImage].alt}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            animation: 'fadeIn 0.3s ease-out',
          }}
        />
        <div style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          padding: '40px 16px 16px',
          background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 100%)',
          color: '#ffffff',
          fontSize: '0.9rem',
        }}>
          {images[activeImage].alt}
        </div>
      </div>

      {/* Image selector */}
      <div style={{
        display: 'flex',
        gap: '8px',
        marginBottom: '20px',
      }}>
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setActiveImage(index)}
            style={{
              width: '60px',
              height: '60px',
              padding: 0,
              border: activeImage === index ? '3px solid #6366f1' : '3px solid transparent',
              borderRadius: '8px',
              overflow: 'hidden',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
            }}
          >
            <img
              src={image.src}
              alt={image.alt}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
            />
          </button>
        ))}
      </div>

      {/* Color palette */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
      }}>
        <div style={{
          fontSize: '0.9rem',
          color: '#4b5563',
        }}>
          Extracted Colors
        </div>
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '8px',
        }}>
          {images[activeImage].colors.map((color, index) => (
            <button
              key={index}
              onClick={() => handleColorSelect(color)}
              style={{
                width: '50px',
                height: '50px',
                padding: 0,
                border: selectedColor === color ? '3px solid #000' : 'none',
                borderRadius: '8px',
                background: color,
                cursor: 'pointer',
                transition: 'transform 0.2s ease',
                animation: selectedColor === color ? 'colorPop 0.3s ease' : 'none',
              }}
            />
          ))}
        </div>
      </div>

      {/* Selected color */}
      <div style={{
        marginTop: '20px',
        padding: '16px',
        background: '#f3f4f6',
        borderRadius: '12px',
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
      }}>
        <div style={{
          width: '40px',
          height: '40px',
          borderRadius: '8px',
          background: selectedColor,
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
        }} />
        <input
          type="text"
          value={selectedColor}
          onChange={(e) => handleColorSelect(e.target.value)}
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
  );
};

export default ColorPicker_20; 