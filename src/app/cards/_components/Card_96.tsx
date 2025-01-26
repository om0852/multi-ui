'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styled from 'styled-components';

const StyledCard = styled.div`
  .card {
    width: 300px;
    height: 200px;
    background: #18181b;
    position: relative;
    display: grid;
    place-content: center;
    border-radius: 10px;
    overflow: hidden;
    transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }

  .glitch-container {
    position: absolute;
    inset: 0;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
  }

  .glitch {
    position: absolute;
    inset: 0;
    background: #18181b;
    opacity: 0.7;
  }

  .glitch-1 {
    animation: glitch1 2s infinite;
    background: #e11d48;
    clip-path: polygon(0 0, 100% 0, 100% 33%, 0 33%);
  }

  .glitch-2 {
    animation: glitch2 2s infinite;
    background: #2dd4bf;
    clip-path: polygon(0 33%, 100% 33%, 100% 66%, 0 66%);
  }

  .glitch-3 {
    animation: glitch3 2s infinite;
    background: #f59e0b;
    clip-path: polygon(0 66%, 100% 66%, 100% 100%, 0 100%);
  }

  .content {
    position: relative;
    z-index: 2;
    padding: 20px;
    text-align: center;
    transition: all 0.5s ease-in-out;
  }

  .symbol {
    width: 80px;
    height: 80px;
    margin: 0 auto 20px;
    position: relative;
    transition: all 0.5s ease-in-out;
  }

  .symbol-inner {
    position: absolute;
    inset: 0;
    border: 4px solid #e11d48;
    clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);
    transition: all 0.5s ease-in-out;
  }

  .text {
    color: #e11d48;
    font-family: 'Space Mono', monospace;
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

  .scan-line {
    position: absolute;
    width: 100%;
    height: 2px;
    background: rgba(225, 29, 72, 0.5);
    top: -100%;
    transition: all 0.5s ease-in-out;
  }

  .card:hover {
    transform: scale(1.05);
  }

  .card:hover .glitch-container {
    opacity: 0.1;
  }

  .card:hover .symbol-inner {
    transform: rotate(180deg);
    border-color: #2dd4bf;
  }

  .card:hover .title,
  .card:hover .subtitle {
    opacity: 1;
    transform: translateX(0);
  }

  .card:hover .title {
    transition-delay: 0.2s;
    color: #2dd4bf;
  }

  .card:hover .subtitle {
    transition-delay: 0.3s;
    color: #f59e0b;
  }

  .card:hover .scan-line {
    top: 100%;
    transition: all 2s linear;
  }

  @keyframes glitch1 {
    0%, 100% { transform: none; opacity: 0.7; }
    50% { transform: translate(-10px); opacity: 0.5; }
  }

  @keyframes glitch2 {
    0%, 100% { transform: none; opacity: 0.7; }
    50% { transform: translate(10px); opacity: 0.5; }
  }

  @keyframes glitch3 {
    0%, 100% { transform: none; opacity: 0.7; }
    50% { transform: translate(-5px); opacity: 0.5; }
  }
`;

const Card_96: React.FC = () => {
  return (
    <StyledCard>
      <div className="card">
        <div className="glitch-container">
          <div className="glitch glitch-1" />
          <div className="glitch glitch-2" />
          <div className="glitch glitch-3" />
        </div>
        <div className="scan-line" />
        <div className="content">
          <div className="symbol">
            <div className="symbol-inner" />
          </div>
          <div className="text">
            <div className="title">GLITCH</div>
            <div className="subtitle">System Error</div>
          </div>
        </div>
      </div>
    </StyledCard>
  );
};

export default Card_96; 