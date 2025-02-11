'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const StyledCard = styled.div`
  .card {
    width: 380px;
    background: linear-gradient(145deg, #f8fafc, #e2e8f0);
    border-radius: 16px;
    padding: 24px;
    position: relative;
    overflow: hidden;
  }

  .prism-effect {
    position: absolute;
    inset: 0;
    background: linear-gradient(
      45deg,
      rgba(239, 68, 68, 0.1),
      rgba(234, 179, 8, 0.1),
      rgba(34, 197, 94, 0.1),
      rgba(59, 130, 246, 0.1),
      rgba(168, 85, 247, 0.1)
    );
    opacity: 0.3;
    transform-origin: center;
  }

  .refraction {
    position: absolute;
    width: 100px;
    height: 2px;
    background: linear-gradient(
      to right,
      #ef4444,
      #eab308,
      #22c55e,
      #3b82f6,
      #a855f7
    );
    opacity: 0;
    filter: blur(1px);
  }

  .sparkle {
    position: absolute;
    width: 4px;
    height: 4px;
    background: white;
    border-radius: 50%;
    filter: blur(1px);
    opacity: 0;
  }

  .brand {
    font-family: 'Raleway', sans-serif;
    color: #6366f1;
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
    background: linear-gradient(135deg, #4f46e5, #6366f1);
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
    background: linear-gradient(45deg, transparent, rgba(255, 255, 255, 0.6), transparent);
    transform: translateX(-100%);
    transition: transform 0.5s ease;
  }

  .title-group {
    flex: 1;
  }

  .title {
    color: #1e293b;
    font-size: 24px;
    font-weight: 600;
    margin-bottom: 4px;
    font-family: 'Raleway', sans-serif;
  }

  .subtitle {
    color: #6366f1;
    font-size: 14px;
  }

  .stats-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
    margin-bottom: 24px;
  }

  .stat-item {
    background: rgba(248, 250, 252, 0.8);
    border-radius: 12px;
    padding: 16px;
    border: 1px solid rgba(99, 102, 241, 0.1);
    transition: all 0.3s ease;
    backdrop-filter: blur(8px);
    position: relative;
    overflow: hidden;
  }

  .stat-item::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(45deg, transparent, rgba(99, 102, 241, 0.1), transparent);
    transform: translateX(-100%);
    transition: transform 0.5s ease;
  }

  .stat-label {
    color: #6366f1;
    font-size: 12px;
    margin-bottom: 4px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .stat-value {
    color: #1e293b;
    font-size: 18px;
    font-weight: 600;
    font-family: 'Raleway', sans-serif;
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
    font-family: 'Raleway', sans-serif;
  }

  .primary-button {
    background: #4f46e5;
    color: white;
    border: none;
  }

  .secondary-button {
    background: transparent;
    color: #6366f1;
    border: 1px solid #6366f1;
  }

  .card:hover {
    transform: translateY(-5px);
  }

  .card:hover .prism-effect {
    opacity: 0.5;
    animation: prismRotate 8s linear infinite;
  }

  .card:hover .refraction {
    opacity: 1;
    animation: refractionMove 3s linear infinite;
  }

  .card:hover .sparkle {
    opacity: 1;
    animation: sparkleFloat 2s ease-out infinite;
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
    border-color: rgba(99, 102, 241, 0.3);
    transform: scale(1.02);
  }

  .card:hover .primary-button {
    background: #4338ca;
  }

  .card:hover .secondary-button {
    background: rgba(99, 102, 241, 0.1);
  }

  @keyframes prismRotate {
    0%, 100% {
      transform: rotate(0deg) scale(1);
      opacity: 0.5;
    }
    50% {
      transform: rotate(180deg) scale(1.2);
      opacity: 0.7;
    }
  }

  @keyframes refractionMove {
    0% {
      transform: translateX(-100%) rotate(-45deg);
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      transform: translateX(100%) rotate(-45deg);
      opacity: 0;
    }
  }

  @keyframes sparkleFloat {
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
`;

const Card_112: React.FC = () => {
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
        <div className="prism-effect" />
        {isHovered && [...Array(5)].map((_, i) => (
          <div
            key={`refraction-${i}`}
            className="refraction"
            style={{
              top: `${20 + i * 20}%`,
              animationDelay: `${i * 0.6}s`,
            }}
          />
        ))}
        {isHovered && [...Array(10)].map((_, i) => (
          <div
            key={`sparkle-${i}`}
            className="sparkle"
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
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
            </svg>
          </motion.div>
          
          <div className="title-group">
            <motion.div
              className="title"
              animate={isHovered ? { color: '#6366f1' } : { color: '#1e293b' }}
            >
              Prism Stats
            </motion.div>
            <div className="subtitle">Optical Metrics</div>
          </div>
        </div>

        <motion.div
          className="stats-grid"
          animate={isHovered ? { y: -5 } : { y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {[
            { label: 'Refraction', value: '1.52' },
            { label: 'Dispersion', value: '98%' },
            { label: 'Clarity', value: '99.9%' },
            { label: 'Spectrum', value: '380-700nm' },
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
            Calibrate
          </motion.button>
        </div>
      </motion.div>
    </StyledCard>
  );
};

export default Card_112; 