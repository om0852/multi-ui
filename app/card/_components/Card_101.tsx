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

  .brand {
    font-family: 'Inter', sans-serif;
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
    background: linear-gradient(135deg, #0ea5e9, #38bdf8);
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
    border: 1px solid rgba(56, 189, 248, 0.1);
    transition: all 0.3s ease;
  }

  .stat-label {
    color: #94a3b8;
    font-size: 12px;
    margin-bottom: 4px;
  }

  .stat-value {
    color: white;
    font-size: 18px;
    font-weight: 600;
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
  }

  .primary-button {
    background: #0ea5e9;
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

  .card:hover .brand {
    opacity: 1;
    transform: translateY(0);
  }

  .card:hover .stat-item {
    border-color: rgba(56, 189, 248, 0.3);
    transform: scale(1.02);
  }

  .card:hover .primary-button {
    background: #0284c7;
  }

  .card:hover .secondary-button {
    background: rgba(56, 189, 248, 0.1);
  }
`;

const Card_101: React.FC = () => {
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
        <div className="brand">multi-ui</div>
        
        <div className="header">
          <motion.div
            className="icon-wrapper"
            animate={isHovered ? {
              rotate: [0, 180, 360],
              scale: [1, 1.1, 1],
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
              animate={isHovered ? { color: '#38bdf8' } : { color: 'white' }}
            >
              Tech Dashboard
            </motion.div>
            <div className="subtitle">System Overview</div>
          </div>
        </div>

        <motion.div
          className="stats-grid"
          animate={isHovered ? { y: -5 } : { y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {[
            { label: 'CPU Usage', value: '86%' },
            { label: 'Memory', value: '12.4 GB' },
            { label: 'Network', value: '2.1 Gbps' },
            { label: 'Storage', value: '1.2 TB' },
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
            Optimize
          </motion.button>
          <motion.button
            className="button secondary-button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Details
          </motion.button>
        </div>
      </motion.div>
    </StyledCard>
  );
};

export default Card_101; 