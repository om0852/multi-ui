'use client';
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const smokeColors = [
  'rgba(160, 174, 192, 0.4)',
  'rgba(160, 174, 192, 0.3)',
  'rgba(160, 174, 192, 0.2)',
  'rgba(160, 174, 192, 0.1)'
];

const generateSmoke = (count) => {
  return Array.from({ length: count }).map((_, i) => ({
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: i * 0.1,
    duration: 0.8 + Math.random() * 0.4
  }));
};

const smokeVariants = {
  unchecked: { scale: 0, opacity: 0, y: 0 },
  checked: ({ delay, duration }) => ({
    scale: [0, 1.5, 0],
    opacity: [0, 0.8, 0],
    y: [0, -20],
    x: [0, Math.random() * 10 - 5],
    transition: { duration, delay, ease: "easeOut", repeat: Infinity, repeatDelay: Math.random() * 0.5 }
  })
};

const checkVariants = {
  unchecked: { pathLength: 0, opacity: 0 },
  checked: {
    pathLength: 1,
    opacity: [0, 1, 0.8],
    transition: { duration: 0.3, opacity: { duration: 0.5, repeat: Infinity, repeatType: "reverse" } }
  }
};

export default function Checkbox_94({ value, onChange, disabled = false, size = "medium" }) {
  const [isClient, setIsClient] = useState(false);
  const smokeParticles = generateSmoke(12);

  useEffect(() => { setIsClient(true); }, []);

  if (!isClient) {
    return (
      <div style={{ display: 'inline-block', cursor: disabled ? 'not-allowed' : 'pointer', opacity: disabled ? 0.6 : 1, position: 'relative' }}>
        <input type="checkbox" checked={value} readOnly style={{ display: 'none' }} />
        <motion.div style={{ width: size === 'small' ? '20px' : size === 'large' ? '32px' : '26px', height: size === 'small' ? '20px' : size === 'large' ? '32px' : '26px', background: value ? '#2D3748' : '#fff', border: '2px solid #333', position: 'relative', borderRadius: '4px', overflow: 'hidden', transition: 'background-color 0.3s ease' }} />
      </div>
    );
  }

  return (
    <div style={{ display: 'inline-block', cursor: disabled ? 'not-allowed' : 'pointer', opacity: disabled ? 0.6 : 1, position: 'relative' }} onClick={() => !disabled && onChange(!value)}>
      <input type="checkbox" checked={value} readOnly style={{ display: 'none' }} />
      <motion.div style={{ width: size === 'small' ? '20px' : size === 'large' ? '32px' : '26px', height: size === 'small' ? '20px' : size === 'large' ? '32px' : '26px', background: value ? '#2D3748' : '#fff', border: '2px solid #333', position: 'relative', borderRadius: '4px', overflow: 'hidden', transition: 'background-color 0.3s ease' }} animate={value ? { scale: [1, 0.95, 1], transition: { duration: 0.2 } } : {}}>
        {value && (
          <>
            {smokeParticles.map((particle, index) => (
              <motion.div key={index} style={{ position: 'absolute', width: '8px', height: '8px', background: smokeColors[index % smokeColors.length], borderRadius: '50%', filter: 'blur(2px)', opacity: 0, left: `${particle.x}%`, top: `${particle.y}%` }} variants={smokeVariants} custom={{ delay: particle.delay, duration: particle.duration }} initial="unchecked" animate="checked" />
            ))}
            <svg viewBox="0 0 24 24" style={{ position: 'absolute', width: '65%', height: '65%', top: '17.5%', left: '17.5%', stroke: 'white', strokeWidth: '3', strokeLinecap: 'round', strokeLinejoin: 'round', fill: 'none' }}>
              <motion.path d="M20 6L9 17L4 12" variants={checkVariants} initial="unchecked" animate="checked" />
            </svg>
          </>
        )}
      </motion.div>
    </div>
  );
}
