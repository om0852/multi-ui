'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const StyledCard = styled.div`
  .card {
    width: 380px;
    background: linear-gradient(145deg, #18181b, #27272a);
    border-radius: 16px;
    padding: 24px;
    position: relative;
    overflow: hidden;
  }

  .rgb-border {
    position: absolute;
    inset: 0;
    border: 2px solid transparent;
    border-radius: 16px;
    background: linear-gradient(90deg, #ff0000, #00ff00, #0000ff, #ff0000);
    background-size: 400% 100%;
    mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    mask-composite: exclude;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  .brand {
    font-family: 'Inter', sans-serif;
    color: #22c55e;
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
    background: linear-gradient(135deg, #22c55e, #4ade80);
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 16px;
  }

  .title-group {
    flex: 1;
  }

  .title {
    color: white;
    font-size: 24px;
    font-weight: 600;
    margin-bottom: 4px;
    font-family: 'Space Grotesk', sans-serif;
  }

  .subtitle {
    color: #a1a1aa;
    font-size: 14px;
  }

  .stats-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
    margin-bottom: 24px;
  }

  .stat-item {
    background: rgba(24, 24, 27, 0.6);
    border-radius: 12px;
    padding: 16px;
    border: 1px solid rgba(34, 197, 94, 0.1);
    transition: all 0.3s ease;
  }

  .stat-label {
    color: #a1a1aa;
    font-size: 12px;
    margin-bottom: 4px;
  }

  .stat-value {
    color: white;
    font-size: 18px;
    font-weight: 600;
    font-family: 'Space Grotesk', sans-serif;
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
    font-family: 'Space Grotesk', sans-serif;
  }

  .primary-button {
    background: #22c55e;
    color: white;
    border: none;
  }

  .secondary-button {
    background: transparent;
    color: #22c55e;
    border: 1px solid #22c55e;
  }

  .card:hover {
    transform: translateY(-5px);
  }

  .card:hover .rgb-border {
    opacity: 1;
    animation: rgb-shift 3s linear infinite;
  }

  .card:hover .brand {
    opacity: 1;
    transform: translateY(0);
  }

  .card:hover .stat-item {
    border-color: rgba(34, 197, 94, 0.3);
    transform: scale(1.02);
  }

  .card:hover .primary-button {
    background: #16a34a;
  }

  .card:hover .secondary-button {
    background: rgba(34, 197, 94, 0.1);
  }

  @keyframes rgb-shift {
    0% { background-position: 0% 50%; }
    100% { background-position: 400% 50%; }
  }
`;

const Card_102: React.FC = () => {
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
        <div className="rgb-border" />
        <div className="brand">multi-ui</div>
        
        <div className="header">
          <motion.div
            className="icon-wrapper"
            animate={isHovered ? {
              rotate: [0, 360],
              scale: [1, 1.2, 1],
            } : {}}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
            </svg>
          </motion.div>
          
          <div className="title-group">
            <motion.div
              className="title"
              animate={isHovered ? { color: '#22c55e' } : { color: 'white' }}
            >
              Gaming Stats
            </motion.div>
            <div className="subtitle">Performance Metrics</div>
          </div>
        </div>

        <motion.div
          className="stats-grid"
          animate={isHovered ? { y: -5 } : { y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {[
            { label: 'FPS', value: '144' },
            { label: 'GPU Temp', value: '65°C' },
            { label: 'VRAM', value: '8GB' },
            { label: 'Latency', value: '12ms' },
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
            Boost
          </motion.button>
          <motion.button
            className="button secondary-button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Settings
          </motion.button>
        </div>
      </motion.div>
    </StyledCard>
  );
};

export default Card_102; 