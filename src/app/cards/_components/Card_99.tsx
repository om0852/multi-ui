'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styled from 'styled-components';

const StyledCard = styled.div`
  .card {
    width: 300px;
    height: 200px;
    background: #1e1b4b;
    position: relative;
    display: grid;
    place-content: center;
    border-radius: 10px;
    overflow: hidden;
    transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }

  .portal {
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .ring {
    position: absolute;
    border: 2px solid #818cf8;
    border-radius: 50%;
    opacity: 0;
    transition: all 0.5s ease-in-out;
  }

  .ring-1 { width: 60px; height: 60px; }
  .ring-2 { width: 100px; height: 100px; }
  .ring-3 { width: 140px; height: 140px; }
  .ring-4 { width: 180px; height: 180px; }

  .content {
    position: relative;
    z-index: 2;
    padding: 20px;
    text-align: center;
    transition: all 0.5s ease-in-out;
  }

  .logo {
    font-family: 'Inter', sans-serif;
    font-size: 18px;
    color: #818cf8;
    margin-bottom: 10px;
    opacity: 0;
    transform: translateY(-20px);
    transition: all 0.5s ease-in-out;
  }

  .text {
    color: #818cf8;
    font-family: 'Inter', sans-serif;
    transition: all 0.5s ease-in-out;
  }

  .title {
    font-size: 24px;
    font-weight: 700;
    letter-spacing: 2px;
    margin-bottom: 8px;
    opacity: 0;
    transform: scale(0.8);
    transition: all 0.5s ease-in-out;
  }

  .subtitle {
    font-size: 14px;
    letter-spacing: 4px;
    text-transform: uppercase;
    opacity: 0;
    transform: scale(1.2);
    transition: all 0.5s ease-in-out;
  }

  .energy {
    position: absolute;
    inset: 0;
    background: radial-gradient(circle at center, rgba(129, 140, 248, 0.2) 0%, transparent 70%);
    opacity: 0;
    transition: all 0.5s ease-in-out;
  }

  .card:hover {
    transform: scale(1.05);
    box-shadow: 0 0 30px rgba(129, 140, 248, 0.3);
  }

  .card:hover .ring {
    opacity: 1;
    animation: ringPulse 2s infinite;
  }

  .card:hover .ring-1 { animation-delay: 0s; }
  .card:hover .ring-2 { animation-delay: 0.5s; }
  .card:hover .ring-3 { animation-delay: 1s; }
  .card:hover .ring-4 { animation-delay: 1.5s; }

  .card:hover .logo {
    opacity: 1;
    transform: translateY(0);
  }

  .card:hover .title,
  .card:hover .subtitle {
    opacity: 1;
    transform: scale(1);
  }

  .card:hover .energy {
    opacity: 1;
    animation: energyPulse 2s infinite;
  }

  @keyframes ringPulse {
    0% {
      transform: scale(0.8);
      opacity: 0;
    }
    50% {
      transform: scale(1);
      opacity: 0.5;
    }
    100% {
      transform: scale(1.2);
      opacity: 0;
    }
  }

  @keyframes energyPulse {
    0%, 100% {
      opacity: 0.2;
      transform: scale(1);
    }
    50% {
      opacity: 0.4;
      transform: scale(1.1);
    }
  }
`;

const Card_99: React.FC = () => {
  return (
    <StyledCard>
      <div className="card">
        <div className="energy" />
        <div className="portal">
          <div className="ring ring-1" />
          <div className="ring ring-2" />
          <div className="ring ring-3" />
          <div className="ring ring-4" />
        </div>
        <div className="content">
          <div className="logo">multi-ui</div>
          <div className="text">
            <div className="title">PORTAL</div>
            <div className="subtitle">Dimension Gate</div>
          </div>
        </div>
      </div>
    </StyledCard>
  );
};

export default Card_99; 