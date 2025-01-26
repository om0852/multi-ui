'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const StyledCard = styled.div`
  .card {
    width: 380px;
    background: linear-gradient(145deg, #fafafa, #f5f5f5);
    border-radius: 16px;
    padding: 24px;
    position: relative;
    overflow: hidden;
  }

  .pattern {
    position: absolute;
    inset: 0;
    background-image: radial-gradient(#e879f9 0.5px, transparent 0.5px);
    background-size: 10px 10px;
    opacity: 0.1;
    transition: opacity 0.3s ease;
  }

  .brand {
    font-family: 'Inter', sans-serif;
    color: #d946ef;
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
    background: linear-gradient(135deg, #d946ef, #e879f9);
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
    inset: -50% -50%;
    background: radial-gradient(circle at center, rgba(255,255,255,0.8) 0%, transparent 50%);
    transform: rotate(0deg);
    transition: transform 0.5s ease;
  }

  .title-group {
    flex: 1;
  }

  .title {
    color: #18181b;
    font-size: 24px;
    font-weight: 600;
    margin-bottom: 4px;
    font-family: 'Playfair Display', serif;
  }

  .subtitle {
    color: #71717a;
    font-size: 14px;
  }

  .stats-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
    margin-bottom: 24px;
  }

  .stat-item {
    background: white;
    border-radius: 12px;
    padding: 16px;
    border: 1px solid rgba(217, 70, 239, 0.1);
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
  }

  .stat-item::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(45deg, transparent, rgba(217, 70, 239, 0.1), transparent);
    transform: translateX(-100%);
    transition: transform 0.5s ease;
  }

  .stat-label {
    color: #71717a;
    font-size: 12px;
    margin-bottom: 4px;
  }

  .stat-value {
    color: #18181b;
    font-size: 18px;
    font-weight: 600;
    font-family: 'Playfair Display', serif;
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
    font-family: 'Playfair Display', serif;
  }

  .primary-button {
    background: #d946ef;
    color: white;
    border: none;
  }

  .secondary-button {
    background: transparent;
    color: #d946ef;
    border: 1px solid #d946ef;
  }

  .card:hover {
    transform: translateY(-5px);
  }

  .card:hover .pattern {
    opacity: 0.2;
    animation: patternShift 20s linear infinite;
  }

  .card:hover .brand {
    opacity: 1;
    transform: translateY(0);
  }

  .card:hover .icon-wrapper::before {
    transform: rotate(180deg);
  }

  .card:hover .stat-item::before {
    transform: translateX(100%);
  }

  .card:hover .stat-item {
    border-color: rgba(217, 70, 239, 0.3);
    transform: scale(1.02);
  }

  .card:hover .primary-button {
    background: #c026d3;
  }

  .card:hover .secondary-button {
    background: rgba(217, 70, 239, 0.1);
  }

  @keyframes patternShift {
    0% { background-position: 0 0; }
    100% { background-position: 50px 50px; }
  }
`;

const Card_103: React.FC = () => {
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
        <div className="pattern" />
        <div className="brand">multi-ui</div>
        
        <div className="header">
          <motion.div
            className="icon-wrapper"
            animate={isHovered ? {
              rotate: [0, 360],
              scale: [1, 1.1, 1],
            } : {}}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
            </svg>
          </motion.div>
          
          <div className="title-group">
            <motion.div
              className="title"
              animate={isHovered ? { color: '#d946ef' } : { color: '#18181b' }}
            >
              Design Stats
            </motion.div>
            <div className="subtitle">Creative Metrics</div>
          </div>
        </div>

        <motion.div
          className="stats-grid"
          animate={isHovered ? { y: -5 } : { y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {[
            { label: 'Projects', value: '24' },
            { label: 'Elements', value: '486' },
            { label: 'Templates', value: '32' },
            { label: 'Components', value: '128' },
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
            Create
          </motion.button>
          <motion.button
            className="button secondary-button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Gallery
          </motion.button>
        </div>
      </motion.div>
    </StyledCard>
  );
};

export default Card_103; 