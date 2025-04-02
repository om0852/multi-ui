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

  .graph-pattern {
    position: absolute;
    inset: 0;
    background-image: linear-gradient(rgba(34, 197, 94, 0.1) 1px, transparent 1px),
                      linear-gradient(90deg, rgba(34, 197, 94, 0.1) 1px, transparent 1px);
    background-size: 20px 20px;
    opacity: 0.1;
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
    background: linear-gradient(135deg, #22c55e, #16a34a);
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
    width: 100%;
    height: 2px;
    background: rgba(255, 255, 255, 0.5);
    bottom: 0;
    left: -100%;
    transition: left 0.5s ease;
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
    color: #94a3b8;
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
    border: 1px solid rgba(34, 197, 94, 0.1);
    transition: all 0.3s ease;
  }

  .stat-label {
    color: #94a3b8;
    font-size: 12px;
    margin-bottom: 4px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .trend {
    font-size: 10px;
    padding: 2px 6px;
    border-radius: 10px;
    background: rgba(34, 197, 94, 0.1);
    color: #22c55e;
  }

  .trend.down {
    background: rgba(239, 68, 68, 0.1);
    color: #ef4444;
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

  .card:hover .graph-pattern {
    opacity: 0.2;
    animation: graphShift 20s linear infinite;
  }

  .card:hover .brand {
    opacity: 1;
    transform: translateY(0);
  }

  .card:hover .icon-wrapper::after {
    left: 0;
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

  @keyframes graphShift {
    0% { background-position: 0 0; }
    100% { background-position: 40px 40px; }
  }
`;

const Card_104: React.FC = () => {
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
        <div className="graph-pattern" />
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
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
          </motion.div>
          
          <div className="title-group">
            <motion.div
              className="title"
              animate={isHovered ? { color: '#22c55e' } : { color: 'white' }}
            >
              Market Stats
            </motion.div>
            <div className="subtitle">Financial Overview</div>
          </div>
        </div>

        <motion.div
          className="stats-grid"
          animate={isHovered ? { y: -5 } : { y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {[
            { label: 'Revenue', value: '$128.5K', trend: '+12.3%' },
            { label: 'Expenses', value: '$45.2K', trend: '-5.4%', down: true },
            { label: 'Growth', value: '24.8%', trend: '+2.1%' },
            { label: 'Profit', value: '$83.3K', trend: '+15.2%' },
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
              <div className="stat-label">
                {stat.label}
                <span className={`trend ${stat.down ? 'down' : ''}`}>{stat.trend}</span>
              </div>
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
            Invest
          </motion.button>
          <motion.button
            className="button secondary-button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Analytics
          </motion.button>
        </div>
      </motion.div>
    </StyledCard>
  );
};

export default Card_104; 