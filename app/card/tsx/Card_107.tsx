'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const StyledCard = styled.div`
  .card {
    width: 380px;
    background: linear-gradient(145deg, #064e3b, #065f46);
    border-radius: 16px;
    padding: 24px;
    position: relative;
    overflow: hidden;
  }

  .dna-helix {
    position: absolute;
    inset: 0;
    opacity: 0.1;
    background: repeating-linear-gradient(
      45deg,
      #34d399 0px,
      transparent 10px,
      #34d399 20px
    );
    mask-image: linear-gradient(to bottom, transparent, black, transparent);
  }

  .pulse-ring {
    position: absolute;
    inset: 0;
    border: 2px solid rgba(52, 211, 153, 0.1);
    border-radius: 50%;
    transform: scale(0);
    animation: pulse 2s ease-out infinite;
  }

  .brand {
    font-family: 'Inter', sans-serif;
    color: #34d399;
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
    background: linear-gradient(135deg, #059669, #34d399);
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
    font-family: 'Inter', sans-serif;
  }

  .subtitle {
    color: #6ee7b7;
    font-size: 14px;
  }

  .stats-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
    margin-bottom: 24px;
  }

  .stat-item {
    background: rgba(6, 78, 59, 0.6);
    border-radius: 12px;
    padding: 16px;
    border: 1px solid rgba(52, 211, 153, 0.1);
    transition: all 0.3s ease;
    backdrop-filter: blur(8px);
  }

  .stat-label {
    color: #6ee7b7;
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
    font-family: 'Inter', sans-serif;
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
    font-family: 'Inter', sans-serif;
  }

  .primary-button {
    background: #059669;
    color: white;
    border: none;
  }

  .secondary-button {
    background: transparent;
    color: #34d399;
    border: 1px solid #34d399;
  }

  .card:hover {
    transform: translateY(-5px);
  }

  .card:hover .dna-helix {
    opacity: 0.2;
    animation: dnaShift 10s linear infinite;
  }

  .card:hover .brand {
    opacity: 1;
    transform: translateY(0);
  }

  .card:hover .stat-item {
    border-color: rgba(52, 211, 153, 0.3);
    transform: scale(1.02);
  }

  .card:hover .primary-button {
    background: #047857;
  }

  .card:hover .secondary-button {
    background: rgba(52, 211, 153, 0.1);
  }

  @keyframes dnaShift {
    0% { background-position: 0 0; }
    100% { background-position: 100px 100px; }
  }

  @keyframes pulse {
    0% {
      transform: scale(0);
      opacity: 1;
    }
    100% {
      transform: scale(2);
      opacity: 0;
    }
  }
`;

const Card_107: React.FC = () => {
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
        <div className="dna-helix" />
        {isHovered && [...Array(3)].map((_, i) => (
          <div
            key={i}
            className="pulse-ring"
            style={{
              animationDelay: `${i * 0.5}s`,
            }}
          />
        ))}
        <div className="brand">multi-ui</div>
        
        <div className="header">
          <motion.div
            className="icon-wrapper"
            animate={isHovered ? {
              rotateY: [0, 360],
              scale: [1, 1.1, 1],
            } : {}}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </motion.div>
          
          <div className="title-group">
            <motion.div
              className="title"
              animate={isHovered ? { color: '#34d399' } : { color: 'white' }}
            >
              Bio Stats
            </motion.div>
            <div className="subtitle">Health Metrics</div>
          </div>
        </div>

        <motion.div
          className="stats-grid"
          animate={isHovered ? { y: -5 } : { y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {[
            { label: 'Heart Rate', value: '72 BPM' },
            { label: 'Blood O₂', value: '98%' },
            { label: 'DNA Match', value: '99.9%' },
            { label: 'Cell Count', value: '25.4T' },
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
            Analyze
          </motion.button>
          <motion.button
            className="button secondary-button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            History
          </motion.button>
        </div>
      </motion.div>
    </StyledCard>
  );
};

export default Card_107; 