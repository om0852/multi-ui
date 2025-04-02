'use client';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Checkbox = ({ value, onChange, disabled = false, size = "medium" }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const rippleColors = ['rgba(49, 130, 206, 0.4)', 'rgba(49, 130, 206, 0.3)', 'rgba(49, 130, 206, 0.2)'];

  const generateDrops = (count) => {
    return Array.from({ length: count }).map((_, i) => ({
      angle: (i * 360) / count,
      delay: i * 0.1,
      distance: Math.random() * 10 + 5
    }));
  };

  const drops = generateDrops(8);

  const rippleVariants = {
    unchecked: { scale: 0, opacity: 0 },
    checked: (index) => ({
      scale: [0, 2],
      opacity: [0, 0.5, 0],
      transition: { duration: 1, delay: index * 0.2, repeat: Infinity, repeatDelay: 1 }
    })
  };

  const dropVariants = {
    unchecked: { scale: 0, opacity: 0, y: 0 },
    checked: ({ angle, distance, delay }) => ({
      scale: [0, 1, 0],
      opacity: [0, 1, 0],
      x: [0, Math.cos(angle * Math.PI / 180) * distance],
      y: [0, Math.sin(angle * Math.PI / 180) * distance],
      transition: { duration: 0.5, delay, ease: "easeOut" }
    })
  };

  const checkVariants = {
    unchecked: { pathLength: 0, opacity: 0 },
    checked: { pathLength: 1, opacity: 1, transition: { duration: 0.3, ease: "easeOut" } }
  };

  return (
    <div style={{ display: 'inline-block', position: 'relative', cursor: disabled ? 'not-allowed' : 'pointer', opacity: disabled ? 0.6 : 1 }}
      onClick={() => !disabled && onChange(!value)}>
      <input type="checkbox" checked={value} readOnly style={{ display: 'none' }} />
      <motion.div
        style={{
          width: size === 'small' ? '20px' : size === 'large' ? '32px' : '26px',
          height: size === 'small' ? '20px' : size === 'large' ? '32px' : '26px',
          background: value ? '#3182CE' : '#fff',
          border: '2px solid #333',
          position: 'relative',
          borderRadius: '4px',
          overflow: 'hidden',
          transition: 'background-color 0.3s ease'
        }}
        animate={value ? { scale: [1, 0.95, 1], transition: { duration: 0.2 } } : {}}
      >
        {value && (
          <>
            {rippleColors.map((color, index) => (
              <motion.div
                key={index}
                style={{
                  position: 'absolute',
                  borderRadius: '50%',
                  background: color,
                  opacity: 0,
                  width: '100%',
                  height: '100%',
                  top: 0,
                  left: 0
                }}
                variants={rippleVariants}
                custom={index}
                initial="unchecked"
                animate="checked"
              />
            ))}
            {drops.map((drop, index) => (
              <motion.div
                key={index}
                style={{
                  position: 'absolute',
                  width: '4px',
                  height: '4px',
                  background: rippleColors[0],
                  borderRadius: '50%',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)'
                }}
                variants={dropVariants}
                custom={drop}
                initial="unchecked"
                animate="checked"
              />
            ))}
            <motion.svg
              viewBox="0 0 24 24"
              style={{ position: 'absolute', width: '65%', height: '65%', top: '17.5%', left: '17.5%' }}
            >
              <motion.path
                d="M20 6L9 17L4 12"
                stroke="white"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
                variants={checkVariants}
                initial="unchecked"
                animate="checked"
              />
            </motion.svg>
          </>
        )}
      </motion.div>
    </div>
  );
};

export default Checkbox;
