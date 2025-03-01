'use client';
import React, { useState,CSSProperties } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const StyledCard = styled.div`
  .card {
    width: 380px;
    background: linear-gradient(145deg, #020617, #1e1b4b);
    border-radius: 16px;
    padding: 24px;
    position: relative;
    overflow: hidden;
  }

  .starfield {
    position: absolute;
    inset: 0;
    background-image: radial-gradient(2px 2px at calc(100% * var(--x)) calc(100% * var(--y)),
      white,
      rgba(0, 0, 0, 0));
    background-size: 200px 200px;
    opacity: 0.3;
    mask-image: linear-gradient(black, transparent);
  }

  .orbital-ring {
    position: absolute;
    inset: -50%;
    border: 1px solid rgba(167, 139, 250, 0.1);
    border-radius: 50%;
    transform: rotate(0deg);
    transition: all 0.5s ease;
  }

  .brand {
    font-family: 'Space Mono', monospace;
    color: #a78bfa;
    font-size: 14px;
    margin-bottom: 20px;
    opacity: 0;
    transform: translateY(-10px);
    transition: all 0.3s ease;
  }

  .header {
    display: flex;
    align-items: center;
    margin-bottom: 24px;
  }

  .icon-wrapper {
    width: 48px;
    height: 48px;
    background: linear-gradient(135deg, #7c3aed, #a78bfa);
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 16px;
    position: relative;
    overflow: hidden;
  }

  .title-group {
    flex: 1;
  }

  .title {
    color: white;
    font-size: 24px;
    font-weight: 600;
    margin-bottom: 4px;
    font-family: 'Space Mono', monospace;
  }

  .subtitle {
    color: #c4b5fd;
    font-size: 14px;
  }

  .stats-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
    margin-bottom: 24px;
  }

  .stat-item {
    background: rgba(2, 6, 23, 0.6);
    border-radius: 12px;
    padding: 16px;
    border: 1px solid rgba(167, 139, 250, 0.1);
    transition: all 0.3s ease;
    backdrop-filter: blur(8px);
  }

  .stat-label {
    color: #c4b5fd;
    font-size: 12px;
    margin-bottom: 4px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .stat-value {
    color: white;
    font-size: 18px;
    font-weight: 600;
    font-family: 'Space Mono', monospace;
  }

  .actions {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .button {
    padding: 10px 20px;
    border-radius: 8px;
    font-weight: 500;
    transition: all 0.3s ease;
    cursor: pointer;
    font-family: 'Space Mono', monospace;
  }

  .primary-button {
    background: #7c3aed;
    color: white;
    border: none;
  }

  .secondary-button {
    background: transparent;
    color: #a78bfa;
    border: 1px solid #a78bfa;
  }

  .card:hover {
    transform: translateY(-5px);
  }

  .card:hover .starfield {
    opacity: 0.5;
    animation: twinkle 1s ease infinite;
  }

  .card:hover .orbital-ring {
    border-color: rgba(167, 139, 250, 0.3);
    transform: rotate(360deg);
  }

  .card:hover .brand {
    opacity: 1;
    transform: translateY(0);
  }

  .card:hover .stat-item {
    border-color: rgba(167, 139, 250, 0.3);
    transform: scale(1.02);
  }

  .card:hover .primary-button {
    background: #6d28d9;
  }

  .card:hover .secondary-button {
    background: rgba(167, 139, 250, 0.1);
  }

  @keyframes twinkle {
    0%, 100% { opacity: 0.5; }
    50% { opacity: 0.7; }
  }
`;

const Card_106: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <StyledCard>
      <motion.div
        className="card"
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >

<div
  className="starfield"
  style={
    {
      '--x': `${Math.random()}`,
      '--y': `${Math.random()}`
    } as CSSProperties
  }
/>
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="orbital-ring"
            style={{
              transform: `rotate(${i * 30}deg)`,
              transition: `all ${i * 0.5 + 1}s ease`,
            }}
          />
        ))}
        <div className="brand">multi-ui</div>
        
        <div className="header">
          <motion.div
            className="icon-wrapper"
            animate={isHovered ? {
              rotate: [0, 360],
              scale: [1, 1.2, 1],
            } : {}}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
            </svg>
          </motion.div>
          
          <div className="title-group">
            <motion.div
              className="title"
              animate={isHovered ? { color: '#a78bfa' } : { color: 'white' }}
            >
              Space Stats
            </motion.div>
            <div className="subtitle">Exploration Data</div>
          </div>
        </div>

        <motion.div
          className="stats-grid"
          animate={isHovered ? { y: -5 } : { y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {[
            { label: 'Distance', value: '384,400 km' },
            { label: 'Velocity', value: '7.67 km/s' },
            { label: 'Objects', value: '1,242' },
            { label: 'Status', value: 'Optimal' },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              className="stat-item"
              initial={false}
              animate={isHovered ? {
                scale: 1.02,
                transition: { delay: index * 0.1 },
              } : { scale: 1 }}
            >
              <div className="stat-label">{stat.label}</div>
              <div className="stat-value">{stat.value}</div>
            </motion.div>
          ))}
        </motion.div>

        <div className="actions">
          <motion.button
            className="button primary-button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Launch
          </motion.button>
          <motion.button
            className="button secondary-button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Mission
          </motion.button>
        </div>
      </motion.div>
    </StyledCard>
  );
};

export default Card_106; 