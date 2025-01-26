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

  .quantum-field {
    position: absolute;
    inset: 0;
    background: radial-gradient(circle at 50% 50%,
      rgba(56, 189, 248, 0.1) 0%,
      transparent 50%);
    opacity: 0.3;
    transform-origin: center;
  }

  .particle {
    position: absolute;
    width: 4px;
    height: 4px;
    background: #38bdf8;
    border-radius: 50%;
    filter: blur(1px);
    opacity: 0;
  }

  .quantum-wave {
    position: absolute;
    inset: 0;
    border: 1px solid rgba(56, 189, 248, 0.1);
    border-radius: 50%;
    transform: scale(0);
  }

  .brand {
    font-family: 'JetBrains Mono', monospace;
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
    background: radial-gradient(circle at center, rgba(255,255,255,0.8) 0%, transparent 70%);
    opacity: 0;
    transition: opacity 0.5s ease;
  }

  .title-group {
    flex: 1;
  }

  .title {
    color: white;
    font-size: 24px;
    font-weight: 600;
    margin-bottom: 4px;
    font-family: 'JetBrains Mono', monospace;
  }

  .subtitle {
    color: #7dd3fc;
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
  }

  .stat-label {
    color: #7dd3fc;
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
    font-family: 'JetBrains Mono', monospace;
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
    font-family: 'JetBrains Mono', monospace;
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

  .card:hover .quantum-field {
    opacity: 0.5;
    animation: quantumPulse 2s ease-in-out infinite;
  }

  .card:hover .particle {
    opacity: 1;
    animation: particleFloat 3s ease-out infinite;
  }

  .card:hover .quantum-wave {
    animation: waveExpand 2s ease-out infinite;
  }

  .card:hover .brand {
    opacity: 1;
    transform: translateY(0);
  }

  .card:hover .icon-wrapper::before {
    opacity: 1;
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

  @keyframes quantumPulse {
    0%, 100% { 
      transform: scale(1);
      opacity: 0.5;
    }
    50% { 
      transform: scale(1.2);
      opacity: 0.7;
    }
  }

  @keyframes particleFloat {
    0% {
      transform: translate(0, 0) scale(1);
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      transform: translate(var(--tx), var(--ty)) scale(0);
      opacity: 0;
    }
  }

  @keyframes waveExpand {
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

const Card_109: React.FC = () => {
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
        <div className="quantum-field" />
        {isHovered && [...Array(3)].map((_, i) => (
          <div
            key={`wave-${i}`}
            className="quantum-wave"
            style={{
              animationDelay: `${i * 0.5}s`,
            }}
          />
        ))}
        {isHovered && [...Array(10)].map((_, i) => (
          <div
            key={`particle-${i}`}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              '--tx': `${(Math.random() - 0.5) * 100}px`,
              '--ty': `${(Math.random() - 0.5) * 100}px`,
              animationDelay: `${Math.random() * 2}s`,
            } as any}
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
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </motion.div>
          
          <div className="title-group">
            <motion.div
              className="title"
              animate={isHovered ? { color: '#38bdf8' } : { color: 'white' }}
            >
              Quantum Stats
            </motion.div>
            <div className="subtitle">Quantum Metrics</div>
          </div>
        </div>

        <motion.div
          className="stats-grid"
          animate={isHovered ? { y: -5 } : { y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {[
            { label: 'Qubits', value: '128' },
            { label: 'Coherence', value: '99.9%' },
            { label: 'Entanglement', value: '0.92' },
            { label: 'Gates', value: '2,048' },
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
            Initialize
          </motion.button>
          <motion.button
            className="button secondary-button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Measure
          </motion.button>
        </div>
      </motion.div>
    </StyledCard>
  );
};

export default Card_109; 