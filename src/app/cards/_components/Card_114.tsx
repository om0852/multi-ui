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

  .hologram-layer {
    position: absolute;
    inset: 0;
    background: linear-gradient(
      45deg,
      rgba(56, 189, 248, 0.1),
      rgba(232, 121, 249, 0.1)
    );
    opacity: 0.3;
    transform-style: preserve-3d;
    transform: perspective(1000px) rotateX(0deg);
  }

  .glitch-line {
    position: absolute;
    width: 100%;
    height: 2px;
    background: linear-gradient(
      to right,
      transparent,
      #38bdf8,
      #e879f9,
      transparent
    );
    opacity: 0;
    filter: blur(1px);
  }

  .holo-grid {
    position: absolute;
    inset: 0;
    background-image: 
      linear-gradient(90deg, rgba(56, 189, 248, 0.1) 1px, transparent 1px),
      linear-gradient(rgba(232, 121, 249, 0.1) 1px, transparent 1px);
    background-size: 20px 20px;
    opacity: 0.1;
    transform: perspective(1000px) rotateX(45deg);
  }

  .brand {
    font-family: 'Orbitron', sans-serif;
    color: #38bdf8;
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
    background: linear-gradient(135deg, #0284c7, #38bdf8);
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
    background: linear-gradient(45deg, transparent, rgba(56, 189, 248, 0.6), transparent);
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
    font-family: 'Orbitron', sans-serif;
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
    border: 1px solid rgba(56, 189, 248, 0.1);
    transition: all 0.3s ease;
    backdrop-filter: blur(8px);
    position: relative;
    overflow: hidden;
  }

  .stat-item::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(45deg, transparent, rgba(56, 189, 248, 0.1), transparent);
    transform: translateX(-100%);
    transition: transform 0.5s ease;
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
    font-family: 'Orbitron', sans-serif;
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
    font-family: 'Orbitron', sans-serif;
  }

  .primary-button {
    background: #0284c7;
    color: white;
    border: none;
  }

  .secondary-button {
    background: transparent;
    color: #38bdf8;
    border: 1px solid #38bdf8;
  }

  .card:hover {
    transform: translateY(-5px);
  }

  .card:hover .hologram-layer {
    opacity: 0.5;
    animation: hologramFloat 4s ease-in-out infinite;
  }

  .card:hover .glitch-line {
    opacity: 1;
    animation: glitchMove 2s linear infinite;
  }

  .card:hover .holo-grid {
    opacity: 0.2;
    animation: gridRotate 10s linear infinite;
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
    border-color: rgba(56, 189, 248, 0.3);
    transform: scale(1.02);
  }

  .card:hover .primary-button {
    background: #0369a1;
  }

  .card:hover .secondary-button {
    background: rgba(56, 189, 248, 0.1);
  }

  @keyframes hologramFloat {
    0%, 100% {
      transform: perspective(1000px) rotateX(0deg) translateZ(0);
      opacity: 0.5;
    }
    50% {
      transform: perspective(1000px) rotateX(10deg) translateZ(20px);
      opacity: 0.7;
    }
  }

  @keyframes glitchMove {
    0% {
      transform: translateY(-100%);
      opacity: 0;
    }
    10%, 90% {
      opacity: 0.8;
    }
    100% {
      transform: translateY(100%);
      opacity: 0;
    }
  }

  @keyframes gridRotate {
    0% {
      transform: perspective(1000px) rotateX(45deg) translateZ(0);
    }
    100% {
      transform: perspective(1000px) rotateX(45deg) translateZ(50px);
    }
  }
`;

const Card_114: React.FC = () => {
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
        <div className="hologram-layer" />
        <div className="holo-grid" />
        {isHovered && [...Array(5)].map((_, i) => (
          <div
            key={`glitch-${i}`}
            className="glitch-line"
            style={{
              top: `${20 + i * 20}%`,
              animationDelay: `${i * 0.3}s`,
            }}
          />
        ))}
        <div className="brand">multi-ui</div>
        
        <div className="header">
          <motion.div
            className="icon-wrapper"
            animate={isHovered ? {
              rotateY: [0, 360],
              scale: [1, 1.2, 1],
            } : {}}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </motion.div>
          
          <div className="title-group">
            <motion.div
              className="title"
              animate={isHovered ? { color: '#38bdf8' } : { color: 'white' }}
            >
              Holo Stats
            </motion.div>
            <div className="subtitle">System Metrics</div>
          </div>
        </div>

        <motion.div
          className="stats-grid"
          animate={isHovered ? { y: -5 } : { y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {[
            { label: 'Resolution', value: '8K UHD' },
            { label: 'Refresh', value: '144 Hz' },
            { label: 'Depth', value: '32-bit' },
            { label: 'Latency', value: '0.1 ms' },
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
            Project
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

export default Card_114;