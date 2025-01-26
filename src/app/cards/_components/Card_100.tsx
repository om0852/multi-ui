'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styled from 'styled-components';

const StyledCard = styled.div`
  .card {
    width: 300px;
    height: 200px;
    background: #042f2e;
    position: relative;
    display: grid;
    place-content: center;
    border-radius: 10px;
    overflow: hidden;
    transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }

  .particles {
    position: absolute;
    inset: 0;
    opacity: 0;
    transition: opacity 0.5s ease-in-out;
  }

  .particle {
    position: absolute;
    width: 4px;
    height: 4px;
    background: #2dd4bf;
    border-radius: 50%;
    opacity: 0;
    transition: all 0.5s ease-in-out;
  }

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
    color: #2dd4bf;
    margin-bottom: 10px;
    opacity: 0;
    transform: translateY(-20px);
    transition: all 0.5s ease-in-out;
  }

  .atom {
    width: 80px;
    height: 80px;
    margin: 0 auto 20px;
    position: relative;
    transition: all 0.5s ease-in-out;
  }

  .electron-orbit {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 60px;
    height: 60px;
    margin: -30px 0 0 -30px;
    border: 2px solid rgba(45, 212, 191, 0.3);
    border-radius: 50%;
    transition: all 0.5s ease-in-out;
  }

  .orbit-1 { transform: rotate(0deg); }
  .orbit-2 { transform: rotate(60deg); }
  .orbit-3 { transform: rotate(120deg); }

  .electron {
    position: absolute;
    top: -4px;
    left: 50%;
    width: 8px;
    height: 8px;
    margin-left: -4px;
    background: #2dd4bf;
    border-radius: 50%;
    transition: all 0.5s ease-in-out;
  }

  .nucleus {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 16px;
    height: 16px;
    margin: -8px 0 0 -8px;
    background: #2dd4bf;
    border-radius: 50%;
    transition: all 0.5s ease-in-out;
  }

  .text {
    color: #2dd4bf;
    font-family: 'Inter', sans-serif;
    transition: all 0.5s ease-in-out;
  }

  .title {
    font-size: 24px;
    font-weight: 700;
    letter-spacing: 2px;
    margin-bottom: 8px;
    opacity: 0;
    transform: translateX(-20px);
    transition: all 0.5s ease-in-out;
  }

  .subtitle {
    font-size: 14px;
    letter-spacing: 4px;
    text-transform: uppercase;
    opacity: 0;
    transform: translateX(20px);
    transition: all 0.5s ease-in-out;
  }

  .card:hover {
    transform: scale(1.05);
    box-shadow: 0 0 30px rgba(45, 212, 191, 0.3);
  }

  .card:hover .particles {
    opacity: 1;
  }

  .card:hover .particle {
    animation: particleFloat 3s infinite;
  }

  .card:hover .logo {
    opacity: 1;
    transform: translateY(0);
  }

  .card:hover .electron-orbit {
    animation: orbitRotate 3s infinite linear;
  }

  .card:hover .orbit-1 { animation-delay: 0s; }
  .card:hover .orbit-2 { animation-delay: 1s; }
  .card:hover .orbit-3 { animation-delay: 2s; }

  .card:hover .nucleus {
    animation: nucleusPulse 2s infinite;
  }

  .card:hover .title,
  .card:hover .subtitle {
    opacity: 1;
    transform: translateX(0);
  }

  @keyframes particleFloat {
    0%, 100% {
      transform: translate(0, 0);
      opacity: 0;
    }
    50% {
      transform: translate(var(--x, 20px), var(--y, -20px));
      opacity: 0.8;
    }
  }

  @keyframes orbitRotate {
    from { transform: rotate(var(--start, 0deg)); }
    to { transform: rotate(calc(var(--start, 0deg) + 360deg)); }
  }

  @keyframes nucleusPulse {
    0%, 100% {
      transform: scale(1);
      opacity: 1;
    }
    50% {
      transform: scale(1.2);
      opacity: 0.8;
    }
  }
`;

const Card_100: React.FC = () => {
  return (
    <StyledCard>
      <div className="card">
        <div className="particles">
          {[...Array(10)].map((_, i) => (
            <div
              key={i}
              className="particle"
              style={{
                '--x': `${Math.random() * 100 - 50}px`,
                '--y': `${Math.random() * 100 - 50}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`
              } as React.CSSProperties}
            />
          ))}
        </div>
        <div className="content">
          <div className="logo">multi-ui</div>
          <div className="atom">
            <div className="electron-orbit orbit-1">
              <div className="electron" />
            </div>
            <div className="electron-orbit orbit-2">
              <div className="electron" />
            </div>
            <div className="electron-orbit orbit-3">
              <div className="electron" />
            </div>
            <div className="nucleus" />
          </div>
          <div className="text">
            <div className="title">QUANTUM</div>
            <div className="subtitle">Particle Flow</div>
          </div>
        </div>
      </div>
    </StyledCard>
  );
};

export default Card_100; 