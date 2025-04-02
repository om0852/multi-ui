'use client';
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Checkbox_98 = ({ value, onChange, disabled = false, size = "medium" }) => {
  const [isClient, setIsClient] = useState(false);
  const facetColors = [
    'rgba(159, 122, 234, 0.4)',
    'rgba(183, 148, 244, 0.4)',
    'rgba(214, 188, 250, 0.4)'
  ];

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div 
      style={{ display: 'inline-block', cursor: disabled ? 'not-allowed' : 'pointer', opacity: disabled ? 0.6 : 1, position: 'relative' }} 
      onClick={() => !disabled && onChange(!value)}
    >
      <input type="checkbox" checked={value} readOnly style={{ display: 'none' }} />
      <motion.div
        style={{
          width: size === 'small' ? '20px' : size === 'large' ? '32px' : '26px',
          height: size === 'small' ? '20px' : size === 'large' ? '32px' : '26px',
          background: value ? 'linear-gradient(135deg, #9F7AEA 0%, #B794F4 50%, #D6BCFA 100%)' : '#fff',
          border: '2px solid #9F7AEA',
          position: 'relative',
          borderRadius: '4px',
          overflow: 'hidden',
          transition: 'background 0.3s ease',
          backdropFilter: 'blur(4px)'
        }}
        animate={value ? {
          scale: [1, 0.95, 1],
          transition: { duration: 0.2 }
        } : {}}
      >
        {value && (
          <>
            <motion.div
              style={{
                position: 'absolute',
                inset: '-50%',
                background: 'radial-gradient(circle at center, rgba(159, 122, 234, 0.4) 0%, transparent 70%)',
                opacity: 0,
                mixBlendMode: 'screen'
              }}
              animate={{ opacity: [0, 0.5, 0.3], scale: [0.8, 1.2, 1], rotate: [0, 360] }}
              transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse' }}
            />
            <motion.svg
              viewBox="0 0 24 24"
              style={{
                position: 'absolute',
                width: '65%',
                height: '65%',
                top: '17.5%',
                left: '17.5%'
              }}
            >
              <motion.path
                d="M20 6L9 17L4 12"
                stroke="white"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
                filter="drop-shadow(0 0 2px rgba(255, 255, 255, 0.5))"
                animate={{ pathLength: value ? 1 : 0, opacity: value ? 1 : 0 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
              />
            </motion.svg>
          </>
        )}
      </motion.div>
    </div>
  );
};

export default Checkbox_98;
