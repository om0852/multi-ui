'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styled from 'styled-components';

const StyledCard = styled.div`
  .card {
    width: 300px;
    height: 200px;
    background: #1a1a1a;
    position: relative;
    display: grid;
    place-content: center;
    border-radius: 10px;
    overflow: hidden;
    transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }

  .border {
    position: absolute;
    inset: 0;
    border: 2px solid #d4af37;
    opacity: 0;
    transform: rotate(-15deg) scale(1.3);
    transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }

  .content {
    position: relative;
    z-index: 2;
    transition: all 0.5s ease-in-out;
  }

  .logo {
    width: 80px;
    height: 80px;
    margin: 0 auto;
    position: relative;
    transition: all 0.5s ease-in-out;
  }

  .logo-inner {
    width: 100%;
    height: 100%;
    background: linear-gradient(45deg, #d4af37, #ffd700);
    mask: url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M40 80C62.0914 80 80 62.0914 80 40C80 17.9086 62.0914 0 40 0C17.9086 0 0 17.9086 0 40C0 62.0914 17.9086 80 40 80ZM40 70C56.5685 70 70 56.5685 70 40C70 23.4315 56.5685 10 40 10C23.4315 10 10 23.4315 10 40C10 56.5685 23.4315 70 40 70Z' fill='black'/%3E%3C/svg%3E") center/contain no-repeat;
    transition: all 0.5s ease-in-out;
  }

  .shine {
    position: absolute;
    inset: 0;
    background: linear-gradient(45deg, transparent 40%, rgba(255, 255, 255, 0.2) 50%, transparent 60%);
    transform: translateX(-100%);
    transition: all 0.5s ease-in-out;
  }

  .text {
    text-align: center;
    color: #d4af37;
    font-family: 'Cinzel', serif;
    opacity: 0;
    transform: translateY(20px);
    transition: all 0.5s ease-in-out;
  }

  .title {
    font-size: 24px;
    font-weight: 700;
    letter-spacing: 2px;
    margin-bottom: 8px;
  }

  .subtitle {
    font-size: 14px;
    letter-spacing: 4px;
    text-transform: uppercase;
  }

  .card:hover {
    transform: scale(1.05);
  }

  .card:hover .border {
    opacity: 1;
    transform: rotate(0) scale(0.95);
  }

  .card:hover .logo {
    transform: translateY(-30px) scale(0.8);
  }

  .card:hover .logo-inner {
    transform: rotate(360deg);
  }

  .card:hover .shine {
    transform: translateX(100%);
  }

  .card:hover .text {
    opacity: 1;
    transform: translateY(0);
  }

  .card:hover .title {
    transition-delay: 0.2s;
  }

  .card:hover .subtitle {
    transition-delay: 0.3s;
  }

  .corners {
    position: absolute;
    inset: 0;
    pointer-events: none;
  }

  .corners:before,
  .corners:after {
    content: '';
    position: absolute;
    width: 20px;
    height: 20px;
    border: 2px solid #d4af37;
    opacity: 0;
    transition: all 0.5s ease-in-out;
  }

  .corners:before {
    top: 10px;
    left: 10px;
    border-right: 0;
    border-bottom: 0;
    transform: translate(-10px, -10px);
  }

  .corners:after {
    bottom: 10px;
    right: 10px;
    border-left: 0;
    border-top: 0;
    transform: translate(10px, 10px);
  }

  .card:hover .corners:before {
    opacity: 1;
    transform: translate(0);
  }

  .card:hover .corners:after {
    opacity: 1;
    transform: translate(0);
  }
`;

const Card_94: React.FC = () => {
  return (
    <StyledCard>
      <div className="card">
        <div className="border" />
        <div className="corners" />
        <div className="content">
          <div className="logo">
            <div className="logo-inner" />
            <div className="shine" />
          </div>
          <div className="text">
            <div className="title">LUXE</div>
            <div className="subtitle">Premium Collection</div>
          </div>
        </div>
      </div>
    </StyledCard>
  );
};

export default Card_94; 