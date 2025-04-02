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

  .circuit-pattern {
    position: absolute;
    inset: 0;
    background-image: 
      linear-gradient(90deg, rgba(244, 114, 182, 0.1) 1px, transparent 1px),
      linear-gradient(rgba(244, 114, 182, 0.1) 1px, transparent 1px);
    background-size: 20px 20px;
    opacity: 0.1;
  }

  .data-flow {
    position: absolute;
    width: 2px;
    height: 100%;
    background: linear-gradient(to bottom, transparent, #ec4899, transparent);
    opacity: 0;
    transform: translateX(-50%);
  }

  .brand {
    font-family: 'Orbitron', sans-serif;
    color: #ec4899;
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
    background: linear-gradient(135deg, #be185d, #ec4899);
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 16px;
    position: relative;
    overflow: hidden;
  }

  .icon-wrapper::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(45deg, transparent, rgba(236, 72, 153, 0.6), transparent);
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
    color: #f472b6;
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
    border: 1px solid rgba(236, 72, 153, 0.1);
    transition: all 0.3s ease;
    backdrop-filter: blur(8px);
    position: relative;
    overflow: hidden;
  }

  .stat-item::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(45deg, transparent, rgba(236, 72, 153, 0.1), transparent);
    transform: translateX(-100%);
    transition: transform 0.5s ease;
  }

  .stat-label {
    color: #f472b6;
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
    background: #be185d;
    color: white;
    border: none;
  }

  .secondary-button {
    background: transparent;
    color: #ec4899;
    border: 1px solid #ec4899;
  }

  .card:hover {
    transform: translateY(-5px);
  }

  .card:hover .circuit-pattern {
    opacity: 0.2;
    animation: circuitShift 20s linear infinite;
  }

  .card:hover .data-flow {
    opacity: 1;
    animation: dataFlow 2s linear infinite;
  }

  .card:hover .brand {
    opacity: 1;
    transform: translateY(0);
  }

  .card:hover .icon-wrapper::after {
    transform: translateX(100%);
  }

  .card:hover .stat-item::before {
    transform: translateX(100%);
  }

  .card:hover .stat-item {
    border-color: rgba(236, 72, 153, 0.3);
    transform: scale(1.02);
  }

  .card:hover .primary-button {
    background: #9d174d;
  }

  .card:hover .secondary-button {
    background: rgba(236, 72, 153, 0.1);
  }

  @keyframes circuitShift {
    0% { background-position: 0 0; }
    100% { background-position: 40px 40px; }
  }

  @keyframes dataFlow {
    0% { 
      transform: translateX(-50%) translateY(-100%);
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% { 
      transform: translateX(-50%) translateY(100%);
      opacity: 0;
    }
  }
`;

const Card_108: React.FC = () => {
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
        <div className="circuit-pattern" />
        {isHovered && [...Array(5)].map((_, i) => (
          <div
            key={i}
            className="data-flow"
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
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
            </svg>
          </motion.div>
          
          <div className="title-group">
            <motion.div
              className="title"
              animate={isHovered ? { color: '#ec4899' } : { color: 'white' }}
            >
              Network Stats
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
            { label: 'Bandwidth', value: '2.4 TB/s' },
            { label: 'Latency', value: '0.2 ms' },
            { label: 'Nodes', value: '1,024' },
            { label: 'Uptime', value: '99.99%' },
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
            Connect
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

export default Card_108; 