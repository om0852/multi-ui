'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styled from 'styled-components';

const StyledCard = styled.div`
  .card {
    width: 300px;
    height: 200px;
    background: #0f172a;
    position: relative;
    display: grid;
    place-content: center;
    border-radius: 10px;
    overflow: hidden;
    transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }

  .pattern {
    position: absolute;
    inset: 0;
    background-image: linear-gradient(45deg, #3b82f6 25%, transparent 25%),
      linear-gradient(-45deg, #3b82f6 25%, transparent 25%),
      linear-gradient(45deg, transparent 75%, #3b82f6 75%),
      linear-gradient(-45deg, transparent 75%, #3b82f6 75%);
    background-size: 20px 20px;
    background-position: 0 0, 0 10px, 10px -10px, -10px 0px;
    opacity: 0.1;
    transition: all 0.5s ease-in-out;
  }

  .content {
    position: relative;
    z-index: 2;
    padding: 20px;
    text-align: center;
    transition: all 0.5s ease-in-out;
  }

  .shape {
    width: 100px;
    height: 100px;
    margin: 0 auto 20px;
    position: relative;
    transition: all 0.5s ease-in-out;
  }

  .shape-inner {
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, #3b82f6, #60a5fa);
    clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
    transition: all 0.5s ease-in-out;
  }

  .text {
    color: #60a5fa;
    font-family: 'Inter', sans-serif;
    transition: all 0.5s ease-in-out;
  }

  .title {
    font-size: 24px;
    font-weight: 700;
    letter-spacing: 1px;
    margin-bottom: 8px;
    opacity: 0;
    transform: translateY(20px);
    transition: all 0.5s ease-in-out;
  }

  .subtitle {
    font-size: 14px;
    letter-spacing: 2px;
    text-transform: uppercase;
    opacity: 0;
    transform: translateY(20px);
    transition: all 0.5s ease-in-out;
  }

  .lines {
    position: absolute;
    inset: 0;
    pointer-events: none;
  }

  .lines:before,
  .lines:after {
    content: '';
    position: absolute;
    background: #3b82f6;
    transition: all 0.5s ease-in-out;
  }

  .lines:before {
    top: 50%;
    left: -100%;
    width: 100%;
    height: 1px;
    transform: translateY(-50%);
  }

  .lines:after {
    left: 50%;
    top: -100%;
    width: 1px;
    height: 100%;
    transform: translateX(-50%);
  }

  .card:hover {
    transform: scale(1.05);
  }

  .card:hover .pattern {
    opacity: 0.15;
    background-size: 30px 30px;
    animation: patternMove 10s linear infinite;
  }

  .card:hover .shape-inner {
    clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
    transform: rotate(360deg);
  }

  .card:hover .title,
  .card:hover .subtitle {
    opacity: 1;
    transform: translateY(0);
  }

  .card:hover .title {
    transition-delay: 0.2s;
  }

  .card:hover .subtitle {
    transition-delay: 0.3s;
  }

  .card:hover .lines:before {
    left: 0;
  }

  .card:hover .lines:after {
    top: 0;
  }

  @keyframes patternMove {
    0% {
      background-position: 0 0, 0 10px, 10px -10px, -10px 0px;
    }
    100% {
      background-position: 30px 30px, 30px 40px, 40px 20px, 20px 30px;
    }
  }
`;

const Card_95: React.FC = () => {
  return (
    <StyledCard>
      <div className="card">
        <div className="pattern" />
        <div className="lines" />
        <div className="content">
          <div className="shape">
            <div className="shape-inner" />
          </div>
          <div className="text">
            <div className="title">GEOMETRY</div>
            <div className="subtitle">Sacred Patterns</div>
          </div>
        </div>
      </div>
    </StyledCard>
  );
};

export default Card_95; 