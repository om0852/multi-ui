'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const StyledCard = styled.div`
  .card {
    width: 380px;
    background: linear-gradient(145deg, #0369a1, #0c4a6e);
    border-radius: 16px;
    padding: 24px;
    position: relative;
    overflow: hidden;
  }

  .weather-pattern {
    position: absolute;
    inset: 0;
    background: radial-gradient(circle at 50% -20%, #0ea5e9 0%, transparent 70%);
    opacity: 0.2;
    transition: all 0.5s ease;
  }

  .clouds {
    position: absolute;
    inset: 0;
    background-image: url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill='%23ffffff' d='M96.4 40c-.6-4.3-4.2-7.6-8.7-7.6-1.4 0-2.8.3-4 .9-1.6-6.3-7.2-11-14.1-11-7.9 0-14.3 6.4-14.3 14.3 0 .3 0 .7.1 1-3.9.5-6.9 3.8-6.9 7.8 0 4.4 3.5 7.9 7.9 7.9h35.8c4.4 0 7.9-3.5 7.9-7.9 0-2.1-.8-4-2.1-5.4'/%3E%3C/svg%3E");
    background-size: 100px 100px;
    opacity: 0.1;
    animation: cloudDrift 30s linear infinite;
  }

  .brand {
    font-family: 'Inter', sans-serif;
    color: #7dd3fc;
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
    background: linear-gradient(135deg, #0ea5e9, #7dd3fc);
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
    font-family: 'Inter', sans-serif;
  }

  .subtitle {
    color: #bae6fd;
    font-size: 14px;
  }

  .stats-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
    margin-bottom: 24px;
  }

  .stat-item {
    background: rgba(3, 105, 161, 0.3);
    border-radius: 12px;
    padding: 16px;
    border: 1px solid rgba(14, 165, 233, 0.2);
    transition: all 0.3s ease;
    backdrop-filter: blur(8px);
  }

  .stat-label {
    color: #bae6fd;
    font-size: 12px;
    margin-bottom: 4px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .stat-icon {
    width: 16px;
    height: 16px;
    opacity: 0.7;
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
    background: #0ea5e9;
    color: white;
    border: none;
  }

  .secondary-button {
    background: transparent;
    color: #7dd3fc;
    border: 1px solid #7dd3fc;
  }

  .card:hover {
    transform: translateY(-5px);
  }

  .card:hover .weather-pattern {
    opacity: 0.3;
    transform: scale(1.1);
  }

  .card:hover .brand {
    opacity: 1;
    transform: translateY(0);
  }

  .card:hover .icon-wrapper::before {
    opacity: 1;
  }

  .card:hover .stat-item {
    border-color: rgba(14, 165, 233, 0.4);
    transform: scale(1.02);
  }

  .card:hover .primary-button {
    background: #0284c7;
  }

  .card:hover .secondary-button {
    background: rgba(14, 165, 233, 0.1);
  }

  @keyframes cloudDrift {
    0% { background-position: 0 0; }
    100% { background-position: 100px 0; }
  }

  .rain {
    position: absolute;
    width: 2px;
    height: 100px;
    background: linear-gradient(transparent, rgba(125, 211, 252, 0.5));
    animation: rain 1s linear infinite;
  }

  @keyframes rain {
    0% { transform: translateY(-100px); }
    100% { transform: translateY(400px); }
  }
`;

const Card_105: React.FC = () => {
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
        <div className="weather-pattern" />
        <div className="clouds" />
        {isHovered && [...Array(10)].map((_, i) => (
          <div
            key={i}
            className="rain"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          />
        ))}
        <div className="brand">multi-ui</div>
        
        <div className="header">
          <motion.div
            className="icon-wrapper"
            animate={isHovered ? {
              rotateZ: [0, 10, -10, 0],
              scale: [1, 1.1, 0.9, 1],
            } : {}}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
            </svg>
          </motion.div>
          
          <div className="title-group">
            <motion.div
              className="title"
              animate={isHovered ? { color: '#7dd3fc' } : { color: 'white' }}
            >
              Weather Stats
            </motion.div>
            <div className="subtitle">Current Conditions</div>
          </div>
        </div>

        <motion.div
          className="stats-grid"
          animate={isHovered ? { y: -5 } : { y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {[
            { label: 'Temperature', value: '24°C', icon: '🌡️' },
            { label: 'Humidity', value: '65%', icon: '💧' },
            { label: 'Wind Speed', value: '12 km/h', icon: '🌪️' },
            { label: 'Precipitation', value: '80%', icon: '🌧️' },
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
                <span className="stat-icon">{stat.icon}</span>
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
            Forecast
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

export default Card_105; 