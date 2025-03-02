"use client";
import React, { useState, useEffect, useRef } from 'react';

const wheelAnimation = `
  @keyframes rotateWheel {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }

  @keyframes pulseGlow {
    0%, 100% { box-shadow: 0 0 20px rgba(0, 0, 0, 0.1); }
    50% { box-shadow: 0 0 30px rgba(0, 0, 0, 0.2); }
  }
`;

const ColorPicker_1: React.FC<{ onChange?: (color: string) => void }> = ({ onChange }) => {
  const [hue, setHue] = useState(0);
  const [saturation, setSaturation] = useState(100);
  const [lightness, setLightness] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const wheelRef = useRef<HTMLDivElement>(null);
  const slRef = useRef<HTMLDivElement>(null);

  const currentColor = `hsl(${hue}, ${saturation}%, ${lightness}%)`;

  const handleWheelMouseDown = (e: React.MouseEvent) => {
    if (!wheelRef.current) return;
    const rect = wheelRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const angle = Math.atan2(e.clientY - centerY, e.clientX - centerX);
    const hue = ((angle * 180) / Math.PI + 360) % 360;
    setHue(hue);
    setIsDragging(true);
  };

  const handleSLMouseDown = (e: React.MouseEvent) => {
    if (!slRef.current) return;
    const rect = slRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
    const y = Math.max(0, Math.min(1, (e.clientY - rect.top) / rect.height));
    setSaturation(x * 100);
    setLightness((1 - y) * 100);
    setIsDragging(true);
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;

      if (wheelRef.current) {
        const rect = wheelRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const angle = Math.atan2(e.clientY - centerY, e.clientX - centerX);
        const hue = ((angle * 180) / Math.PI + 360) % 360;
        setHue(hue);
      }

      if (slRef.current) {
        const rect = slRef.current.getBoundingClientRect();
        const x = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
        const y = Math.max(0, Math.min(1, (e.clientY - rect.top) / rect.height));
        setSaturation(x * 100);
        setLightness((1 - y) * 100);
      }
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging]);

  useEffect(() => {
    onChange?.(currentColor);
  }, [currentColor, onChange]);

  return (
    <div style={{
      padding: '24px',
      background: '#ffffff',
      borderRadius: '16px',
      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
      width: '320px',
    }}>
      <style>{wheelAnimation}</style>

      {/* Color wheel */}
      <div
        ref={wheelRef}
        onMouseDown={handleWheelMouseDown}
        style={{
          width: '200px',
          height: '200px',
          margin: '0 auto 24px',
          borderRadius: '50%',
          position: 'relative',
          background: 'conic-gradient(from 0deg, hsl(0, 100%, 50%), hsl(60, 100%, 50%), hsl(120, 100%, 50%), hsl(180, 100%, 50%), hsl(240, 100%, 50%), hsl(300, 100%, 50%), hsl(360, 100%, 50%))',
          cursor: 'pointer',
          animation: 'pulseGlow 2s infinite',
        }}
      >
        {/* Hue indicator */}
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          width: '4px',
          height: '4px',
          background: '#ffffff',
          borderRadius: '50%',
          transform: `translate(-50%, -50%) rotate(${hue}deg) translateX(90px)`,
          boxShadow: '0 0 4px rgba(0, 0, 0, 0.3)',
        }} />
      </div>

      {/* Saturation/Lightness picker */}
      <div
        ref={slRef}
        onMouseDown={handleSLMouseDown}
        style={{
          width: '200px',
          height: '200px',
          margin: '0 auto 24px',
          position: 'relative',
          background: `linear-gradient(to right, #fff, hsl(${hue}, 100%, 50%))`,
          cursor: 'pointer',
          borderRadius: '8px',
        }}
      >
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(to bottom, transparent, #000)',
          borderRadius: '8px',
        }} />
        {/* SL indicator */}
        <div style={{
          position: 'absolute',
          left: `${saturation}%`,
          top: `${100 - lightness}%`,
          width: '12px',
          height: '12px',
          background: currentColor,
          border: '2px solid #ffffff',
          borderRadius: '50%',
          transform: 'translate(-50%, -50%)',
          boxShadow: '0 0 4px rgba(0, 0, 0, 0.3)',
        }} />
      </div>

      {/* Color display */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        padding: '16px',
        background: '#f3f4f6',
        borderRadius: '12px',
      }}>
        <div style={{
          width: '48px',
          height: '48px',
          borderRadius: '8px',
          background: currentColor,
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
        }} />
        <div style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          gap: '4px',
        }}>
          <input
            type="text"
            value={currentColor}
            readOnly
            style={{
              width: '100%',
              padding: '8px',
              border: '2px solid #e5e7eb',
              borderRadius: '6px',
              fontSize: '0.9rem',
              color: '#4b5563',
              fontFamily: 'monospace',
              background: '#ffffff',
            }}
          />
          <div style={{
            display: 'flex',
            gap: '8px',
            fontSize: '0.8rem',
            color: '#6b7280',
          }}>
            <span>H: {Math.round(hue)}°</span>
            <span>S: {Math.round(saturation)}%</span>
            <span>L: {Math.round(lightness)}%</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ColorPicker_1;
