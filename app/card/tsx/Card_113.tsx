'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const StyledCard = styled.div`
  .card {
    width: 380px;
    background: linear-gradient(145deg, #0f172a, #1e293b);
    border-radius: 16px;
    padding: 24px;
    position: relative;
    overflow: hidden;
  }

  .wave-grid {
    position: absolute;
    inset: 0;
    background-image: 
      linear-gradient(90deg, rgba(14, 165, 233, 0.1) 1px, transparent 1px),
      linear-gradient(rgba(14, 165, 233, 0.1) 1px, transparent 1px);
    background-size: 20px 20px;
    opacity: 0.2;
  }

  .oscilloscope {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background: #0ea5e9;
    opacity: 0;
    filter: blur(1px);
    box-shadow: 0 0 8px #0ea5e9;
  }

  .frequency-bar {
    position: absolute;
    bottom: 0;
    width: 3px;
    background: linear-gradient(to top, #0ea5e9, transparent);
    opacity: 0;
  }

  .brand {
    font-family: 'Roboto Mono', monospace;
    color: #0ea5e9;
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
    background: linear-gradient(135deg, #0369a1, #0ea5e9);
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 16px;
    position: relative;
    overflow: hidden;
  }

  .icon-wrapper::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(45deg, transparent, rgba(14, 165, 233, 0.6), transparent);
    transform: translateX(-100%);
    transition: transform 0.5s ease;
  }

  .title-group {
    flex: 1;
  }

  .title {
    color: white;
    font-size: 24px;
    font-weight: 600;
    margin-bottom: 4px;
    font-family: 'Roboto Mono', monospace;
  }

  .subtitle {
    color: #38bdf8;
    font-size: 14px;
  }

  .stats-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
    margin-bottom: 24px;
  }

  .stat-item {
    background: rgba(15, 23, 42, 0.6);
    border-radius: 12px;
    padding: 16px;
    border: 1px solid rgba(14, 165, 233, 0.1);
    transition: all 0.3s ease;
    backdrop-filter: blur(8px);
  }

  .stat-label {
    color: #38bdf8;
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
    font-family: 'Roboto Mono', monospace;
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
    font-family: 'Roboto Mono', monospace;
  }

  .primary-button {
    background: #0369a1;
    color: white;
    border: none;
  }

  .secondary-button {
    background: transparent;
    color: #0ea5e9;
    border: 1px solid #0ea5e9;
  }

  .card:hover {
    transform: translateY(-5px);
  }

  .card:hover .wave-grid {
    opacity: 0.3;
    animation: gridShift 20s linear infinite;
  }

  .card:hover .oscilloscope {
    opacity: 1;
    animation: waveMove 2s ease-in-out infinite;
  }

  .card:hover .frequency-bar {
    opacity: 1;
    animation: frequencyBounce 0.5s ease-in-out infinite;
  }

  .card:hover .brand {
    opacity: 1;
    transform: translateY(0);
  }

  .card:hover .icon-wrapper::before {
    transform: translateX(100%);
  }

  .card:hover .stat-item {
    border-color: rgba(14, 165, 233, 0.3);
    transform: scale(1.02);
  }

  .card:hover .primary-button {
    background: #0284c7;
  }

  .card:hover .secondary-button {
    background: rgba(14, 165, 233, 0.1);
  }

  @keyframes gridShift {
    0% { background-position: 0 0; }
    100% { background-position: 40px 40px; }
  }

  @keyframes waveMove {
    0%, 100% {
      transform: translateY(20px) scaleY(1);
    }
    50% {
      transform: translateY(100px) scaleY(2);
    }
  }

  @keyframes frequencyBounce {
    0%, 100% {
      height: 20px;
    }
    50% {
      height: 40px;
    }
  }
`;

const Card_113: React.FC = () => {
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
        <div className="wave-grid" />
        {isHovered && [...Array(3)].map((_, i) => (
          <div
            key={`wave-${i}`}
            className="oscilloscope"
            style={{
              top: `${30 + i * 30}%`,
              animationDelay: `${i * 0.3}s`,
            }}
          />
        ))}
        {isHovered && [...Array(20)].map((_, i) => (
          <div
            key={`freq-${i}`}
            className="frequency-bar"
            style={{
              left: `${5 + i * 5}%`,
              height: `${20 + Math.random() * 30}px`,
              animationDelay: `${i * 0.1}s`,
            }}
          />
        ))}
        <div className="brand">multi-ui</div>
        
        <div className="header">
          <motion.div
            className="icon-wrapper"
            animate={isHovered ? {
              rotateZ: [0, 180, 360],
              scale: [1, 1.2, 1],
            } : {}}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
          </motion.div>
          
          <div className="title-group">
            <motion.div
              className="title"
              animate={isHovered ? { color: '#0ea5e9' } : { color: 'white' }}
            >
              Wave Stats
            </motion.div>
            <div className="subtitle">Signal Metrics</div>
          </div>
        </div>

        <motion.div
          className="stats-grid"
          animate={isHovered ? { y: -5 } : { y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {[
            { label: 'Frequency', value: '440 Hz' },
            { label: 'Amplitude', value: '0.8V' },
            { label: 'Phase', value: '45°' },
            { label: 'SNR', value: '+24 dB' },
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
            Measure
          </motion.button>
          <motion.button
            className="button secondary-button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Calibrate
          </motion.button>
        </div>
      </motion.div>
    </StyledCard>
  );
};

export default Card_113; 