'use client';
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Checkbox = ({ value, onChange, disabled = false, size = 'medium' }) => {
  const [isClient, setIsClient] = useState(false);
  
  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return (
      <div style={{ display: 'inline-block', opacity: disabled ? 0.6 : 1, cursor: disabled ? 'not-allowed' : 'pointer', position: 'relative' }}>
        <input type="checkbox" checked={value} readOnly style={{ display: 'none' }} />
        <motion.div
          style={{
            width: size === 'small' ? '20px' : size === 'large' ? '32px' : '26px',
            height: size === 'small' ? '20px' : size === 'large' ? '32px' : '26px',
            background: value ? '#673AB7' : '#fff',
            border: '2px solid #333',
            position: 'relative',
            borderRadius: '4px',
            overflow: 'hidden',
            transition: 'background-color 0.3s ease'
          }}
        />
      </div>
    );
  }

  return (
    <div style={{ display: 'inline-block', opacity: disabled ? 0.6 : 1, cursor: disabled ? 'not-allowed' : 'pointer', position: 'relative' }} onClick={() => !disabled && onChange(!value)}>
      <input type="checkbox" checked={value} readOnly style={{ display: 'none' }} />
      <motion.div
        style={{
          width: size === 'small' ? '20px' : size === 'large' ? '32px' : '26px',
          height: size === 'small' ? '20px' : size === 'large' ? '32px' : '26px',
          background: '#1a1a1a',
          border: `2px solid ${value ? '#00ff00' : '#333'}`,
          position: 'relative',
          borderRadius: '4px',
          overflow: 'hidden',
          transition: 'border-color 0.3s ease',
          boxShadow: value ? '0 0 10px #00ff00, inset 0 0 10px #00ff00' : 'none'
        }}
        animate={value ? { scale: [1, 0.95, 1], transition: { duration: 0.2 } } : {}}
      />
    </div>
  );
};

export default Checkbox;
