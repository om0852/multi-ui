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

  .aurora {
    position: absolute;
    inset: 0;
    background: linear-gradient(
      45deg,
      rgba(134, 239, 172, 0.2),
      rgba(59, 130, 246, 0.2),
      rgba(147, 51, 234, 0.2)
    );
    filter: blur(20px);
    opacity: 0.3;
    transform-origin: center;
  }

  .light-beam {
    position: absolute;
    width: 2px;
    height: 200%;
    background: linear-gradient(
      to bottom,
      transparent,
      rgba(134, 239, 172, 0.5),
      rgba(59, 130, 246, 0.5),
      rgba(147, 51, 234, 0.5),
      transparent
    );
    opacity: 0;
    transform: rotate(45deg);
  }

  .particle {
    position: absolute;
    width: 3px;
    height: 3px;
    background: #86efac;
    border-radius: 50%;
    filter: blur(1px);
    opacity: 0;
  }

  .brand {
    font-family: 'Quicksand', sans-serif;
    color: #86efac;
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
    background: linear-gradient(135deg, #059669, #86efac);
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
    background: linear-gradient(45deg, transparent, rgba(134, 239, 172, 0.6), transparent);
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
    font-family: 'Quicksand', sans-serif;
  }

  .subtitle {
    color: #86efac;
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
    border: 1px solid rgba(134, 239, 172, 0.1);
    transition: all 0.3s ease;
    backdrop-filter: blur(8px);
    position: relative;
    overflow: hidden;
  }

  .stat-item::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(45deg, transparent, rgba(134, 239, 172, 0.1), transparent);
    transform: translateX(-100%);
    transition: transform 0.5s ease;
  }

  .stat-label {
    color: #86efac;
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
    font-family: 'Quicksand', sans-serif;
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
    font-family: 'Quicksand', sans-serif;
  }

  .primary-button {
    background: #059669;
    color: white;
    border: none;
  }

  .secondary-button {
    background: transparent;
    color: #86efac;
    border: 1px solid #86efac;
  }

  .card:hover {
    transform: translateY(-5px);
  }

  .card:hover .aurora {
    opacity: 0.5;
    animation: auroraFlow 8s linear infinite;
  }

  .card:hover .light-beam {
    opacity: 1;
    animation: beamMove 3s linear infinite;
  }

  .card:hover .particle {
    opacity: 1;
    animation: particleRise 2s ease-out infinite;
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
    border-color: rgba(134, 239, 172, 0.3);
    transform: scale(1.02);
  }

  .card:hover .primary-button {
    background: #047857;
  }

  .card:hover .secondary-button {
    background: rgba(134, 239, 172, 0.1);
  }

  @keyframes auroraFlow {
    0%, 100% {
      transform: rotate(0deg) scale(1);
      opacity: 0.5;
    }
    50% {
      transform: rotate(180deg) scale(1.2);
      opacity: 0.7;
    }
  }

  @keyframes beamMove {
    0% {
      transform: translateX(-100%) rotate(45deg);
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      transform: translateX(100%) rotate(45deg);
      opacity: 0;
    }
  }

  @keyframes particleRise {
    0% {
      transform: translateY(100%) scale(1);
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      transform: translateY(-100%) scale(0);
      opacity: 0;
    }
  }
`;

const Card_111: React.FC = () => {
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
        <div className="aurora" />
        {isHovered && [...Array(5)].map((_, i) => (
          <div
            key={`beam-${i}`}
            className="light-beam"
            style={{
              left: `${20 + i * 20}%`,
              animationDelay: `${i * 0.6}s`,
            }}
          />
        ))}
        {isHovered && [...Array(10)].map((_, i) => (
          <div
            key={`particle-${i}`}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              background: `hsl(${140 + Math.random() * 60}, 84%, 73%)`,
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
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
            </svg>
          </motion.div>
          
          <div className="title-group">
            <motion.div
              className="title"
              animate={isHovered ? { color: '#86efac' } : { color: 'white' }}
            >
              Aurora Stats
            </motion.div>
            <div className="subtitle">Natural Metrics</div>
          </div>
        </div>

        <motion.div
          className="stats-grid"
          animate={isHovered ? { y: -5 } : { y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {[
            { label: 'Intensity', value: '8.4 kP' },
            { label: 'Altitude', value: '120 km' },
            { label: 'Duration', value: '4.2 hrs' },
            { label: 'Visibility', value: '92%' },
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
            Observe
          </motion.button>
          <motion.button
            className="button secondary-button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Forecast
          </motion.button>
        </div>
      </motion.div>
    </StyledCard>
  );
};

export default Card_111; 