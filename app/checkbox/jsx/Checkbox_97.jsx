'use client';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Checkbox = ({ value, onChange, disabled = false, size = "medium" }) => {
  const [isClient, setIsClient] = useState(false);
  const ripples = Array.from({ length: 3 });
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePosition({ x, y });
  };

  if (!isClient) {
    return (
      <div style={{ display: 'inline-block', opacity: disabled ? 0.6 : 1, cursor: disabled ? 'not-allowed' : 'pointer' }}>
        <input type="checkbox" checked={value} readOnly hidden />
        <div style={{
          width: size === 'small' ? '20px' : size === 'large' ? '32px' : '26px',
          height: size === 'small' ? '20px' : size === 'large' ? '32px' : '26px',
          background: value ? 'linear-gradient(135deg, #4A5568 0%, #718096 50%, #A0AEC0 100%)' : '#fff',
          border: '2px solid #4A5568',
          borderRadius: '4px',
          overflow: 'hidden',
          transition: 'background 0.3s ease',
        }} />
      </div>
    );
  }

  return (
    <div 
      style={{ display: 'inline-block', opacity: disabled ? 0.6 : 1, cursor: disabled ? 'not-allowed' : 'pointer' }}
      onClick={() => !disabled && onChange(!value)}
      onMouseMove={handleMouseMove}
    >
      <input type="checkbox" checked={value} readOnly hidden />
      <motion.div
        style={{
          width: size === 'small' ? '20px' : size === 'large' ? '32px' : '26px',
          height: size === 'small' ? '20px' : size === 'large' ? '32px' : '26px',
          background: value ? 'linear-gradient(135deg, #4A5568 0%, #718096 50%, #A0AEC0 100%)' : '#fff',
          border: '2px solid #4A5568',
          borderRadius: '4px',
          overflow: 'hidden',
          transition: 'background 0.3s ease',
        }}
        animate={value ? { scale: [1, 0.95, 1], transition: { duration: 0.2 } } : {}}
      >
        {value && (
          <motion.svg
            viewBox="0 0 24 24"
            style={{
              position: 'absolute',
              width: '65%',
              height: '65%',
              top: '17.5%',
              left: '17.5%',
            }}
          >
            <motion.path
              d="M20 6L9 17L4 12"
              stroke="#fff"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1, transition: { duration: 0.3, ease: "easeOut" } }}
            />
          </motion.svg>
        )}
      </motion.div>
    </div>
  );
};

export default Checkbox;