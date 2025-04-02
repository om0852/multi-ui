'use client';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Checkbox_92 = ({ value, onChange, disabled = false, size = "medium" }) => {
  const [isClient, setIsClient] = useState(false);
  const shardColors = ['#CBD5E0', '#E2E8F0', '#EDF2F7', '#F7FAFC'];
  
  const generateShards = (count) => {
    return Array.from({ length: count }).map((_, i) => ({
      angle: (i * 360) / count,
      distance: Math.random() * 20 + 10,
      rotation: Math.random() * 360,
      delay: i * 0.02
    }));
  };

  const generateCracks = (count) => {
    return Array.from({ length: count }).map((_, i) => ({
      angle: (i * 360) / count,
      length: Math.random() * 10 + 5,
      delay: i * 0.03
    }));
  };

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return (
      <div style={{ display: 'inline-block', opacity: disabled ? 0.6 : 1, cursor: disabled ? 'not-allowed' : 'pointer' }}>
        <input type="checkbox" checked={value} readOnly style={{ display: 'none' }} />
        <div style={{
          width: size === 'small' ? '20px' : size === 'large' ? '32px' : '26px',
          height: size === 'small' ? '20px' : size === 'large' ? '32px' : '26px',
          background: value ? '#4A5568' : '#fff',
          border: '2px solid #333',
          borderRadius: '4px',
          position: 'relative',
          overflow: 'hidden',
          transition: 'background-color 0.3s ease'
        }} />
      </div>
    );
  }

  return (
    <div style={{ display: 'inline-block', opacity: disabled ? 0.6 : 1, cursor: disabled ? 'not-allowed' : 'pointer' }} onClick={() => !disabled && onChange(!value)}>
      <input type="checkbox" checked={value} readOnly style={{ display: 'none' }} />
      <motion.div
        style={{
          width: size === 'small' ? '20px' : size === 'large' ? '32px' : '26px',
          height: size === 'small' ? '20px' : size === 'large' ? '32px' : '26px',
          background: value ? '#4A5568' : '#fff',
          border: '2px solid #333',
          borderRadius: '4px',
          position: 'relative',
          overflow: 'hidden',
          transition: 'background-color 0.3s ease'
        }}
        animate={value ? { scale: [1, 0.95, 1], transition: { duration: 0.2 } } : {}}
      >
        {value && generateShards(12).map((shard, index) => (
          <motion.div
            key={index}
            style={{
              position: 'absolute',
              width: 0,
              height: 0,
              borderStyle: 'solid',
              borderWidth: '4px',
              borderColor: shardColors[index % shardColors.length],
              opacity: 0.8,
              transformOrigin: 'center',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)'
            }}
            initial={{ scale: 0, opacity: 0, x: 0, y: 0, rotate: 0 }}
            animate={{
              scale: [0, 1, 0],
              opacity: [0, 0.8, 0],
              x: [0, Math.cos(shard.angle * Math.PI / 180) * shard.distance],
              y: [0, Math.sin(shard.angle * Math.PI / 180) * shard.distance],
              rotate: [0, shard.rotation],
              transition: { duration: 0.5, delay: shard.delay, ease: [0.4, 0, 0.2, 1] }
            }}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default Checkbox_92;