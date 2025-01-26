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

  .reactor-core {
    position: absolute;
    inset: 0;
    background: radial-gradient(
      circle at center,
      rgba(244, 63, 94, 0.2) 0%,
      rgba(244, 63, 94, 0.1) 30%,
      transparent 70%
    );
    opacity: 0.3;
    transform-origin: center;
  }

  .energy-ring {
    position: absolute;
    inset: -50%;
    border: 1px solid rgba(244, 63, 94, 0.1);
    border-radius: 50%;
    transform: scale(0);
  }

  .power-line {
    position: absolute;
    width: 2px;
    height: 100%;
    background: linear-gradient(
      to bottom,
      transparent,
      #f43f5e,
      transparent
    );
    opacity: 0;
    transform: translateX(-50%);
  }

  .brand {
    font-family: 'Audiowide', cursive;
    color: #f43f5e;
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
    background: linear-gradient(135deg, #be123c, #f43f5e);
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
    background: linear-gradient(45deg, transparent, rgba(244, 63, 94, 0.6), transparent);
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
    font-family: 'Audiowide', cursive;
  }

  .subtitle {
    color: #fb7185;
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
    border: 1px solid rgba(244, 63, 94, 0.1);
    transition: all 0.3s ease;
    backdrop-filter: blur(8px);
    position: relative;
    overflow: hidden;
  }

  .stat-item::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(45deg, transparent, rgba(244, 63, 94, 0.1), transparent);
    transform: translateX(-100%);
    transition: transform 0.5s ease;
  }

  .stat-label {
    color: #fb7185;
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
    font-family: 'Audiowide', cursive;
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
    font-family: 'Audiowide', cursive;
  }

  .primary-button {
    background: #be123c;
    color: white;
    border: none;
  }

  .secondary-button {
    background: transparent;
    color: #f43f5e;
    border: 1px solid #f43f5e;
  }

  .card:hover {
    transform: translateY(-5px);
  }

  .card:hover .reactor-core {
    opacity: 0.5;
    animation: reactorPulse 2s ease-in-out infinite;
  }

  .card:hover .energy-ring {
    animation: ringExpand 2s ease-out infinite;
  }

  .card:hover .power-line {
    opacity: 1;
    animation: powerFlow 2s linear infinite;
  }

  .card:hover .brand {
    opacity: 1;
    transform: translateY(0);
  }

  .card:hover .icon-wrapper::before {
    transform: translateX(100%);
  }

  .card:hover .stat-item::before {
    transform: translateX(100%);
  }

  .card:hover .stat-item {
    border-color: rgba(244, 63, 94, 0.3);
    transform: scale(1.02);
  }

  .card:hover .primary-button {
    background: #9f1239;
  }

  .card:hover .secondary-button {
    background: rgba(244, 63, 94, 0.1);
  }

  @keyframes reactorPulse {
    0%, 100% {
      transform: scale(1);
      opacity: 0.5;
    }
    50% {
      transform: scale(1.2);
      opacity: 0.7;
    }
  }

  @keyframes ringExpand {
    0% {
      transform: scale(0);
      opacity: 1;
    }
    100% {
      transform: scale(1);
      opacity: 0;
    }
  }

  @keyframes powerFlow {
    0% {
      transform: translateY(-100%) translateX(-50%);
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      transform: translateY(100%) translateX(-50%);
      opacity: 0;
    }
  }
`;

const Card_115: React.FC = () => {
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
        <div className="reactor-core" />
        {isHovered && [...Array(3)].map((_, i) => (
          <div
            key={`ring-${i}`}
            className="energy-ring"
            style={{
              animationDelay: `${i * 0.5}s`,
            }}
          />
        ))}
        {isHovered && [...Array(5)].map((_, i) => (
          <div
            key={`power-${i}`}
            className="power-line"
            style={{
              left: `${20 + i * 20}%`,
              animationDelay: `${i * 0.4}s`,
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
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </motion.div>
          
          <div className="title-group">
            <motion.div
              className="title"
              animate={isHovered ? { color: '#f43f5e' } : { color: 'white' }}
            >
              Power Stats
            </motion.div>
            <div className="subtitle">Energy Metrics</div>
          </div>
        </div>

        <motion.div
          className="stats-grid"
          animate={isHovered ? { y: -5 } : { y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {[
            { label: 'Output', value: '1.21 GW' },
            { label: 'Efficiency', value: '99.9%' },
            { label: 'Temperature', value: '3,000K' },
            { label: 'Stability', value: '100%' },
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
            Activate
          </motion.button>
          <motion.button
            className="button secondary-button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Monitor
          </motion.button>
        </div>
      </motion.div>
    </StyledCard>
  );
};

export default Card_115;