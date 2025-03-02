'use client';
import React from 'react';
import styled from 'styled-components';

const StyledCard = styled.div`
  .card {
    width: 300px;
    height: 200px;
    background: #09090b;
    position: relative;
    display: grid;
    place-content: center;
    border-radius: 10px;
    overflow: hidden;
    transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }

  .circuit {
    position: absolute;
    inset: 0;
    opacity: 0;
    transition: opacity 0.5s ease-in-out;
  }

  .circuit-line {
    position: absolute;
    background: #22c55e;
    opacity: 0;
    transition: all 0.5s ease-in-out;
  }

  .line-h {
    height: 2px;
    width: 0;
  }

  .line-v {
    width: 2px;
    height: 0;
  }

  .line-1 { top: 30px; left: 30px; }
  .line-2 { top: 30px; right: 30px; }
  .line-3 { bottom: 30px; left: 30px; }
  .line-4 { bottom: 30px; right: 30px; }
  .line-5 { left: 30px; top: 30px; }
  .line-6 { right: 30px; top: 30px; }
  .line-7 { left: 30px; bottom: 30px; }
  .line-8 { right: 30px; bottom: 30px; }

  .node {
    position: absolute;
    width: 10px;
    height: 10px;
    background: #22c55e;
    border-radius: 50%;
    opacity: 0;
    transition: all 0.5s ease-in-out;
  }

  .node-1 { top: 26px; left: 26px; }
  .node-2 { top: 26px; right: 26px; }
  .node-3 { bottom: 26px; left: 26px; }
  .node-4 { bottom: 26px; right: 26px; }

  .content {
    position: relative;
    z-index: 2;
    padding: 20px;
    text-align: center;
    transition: all 0.5s ease-in-out;
  }

  .hexagon {
    width: 100px;
    height: 100px;
    margin: 0 auto 20px;
    position: relative;
    transition: all 0.5s ease-in-out;
  }

  .hexagon-inner {
    position: absolute;
    inset: 0;
    border: 4px solid #22c55e;
    clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
    transition: all 0.5s ease-in-out;
  }

  .hexagon-core {
    position: absolute;
    inset: 10px;
    background: #22c55e;
    clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
    opacity: 0.3;
    transition: all 0.5s ease-in-out;
  }

  .text {
    color: #22c55e;
    font-family: 'Share Tech Mono', monospace;
    transition: all 0.5s ease-in-out;
  }

  .title {
    font-size: 24px;
    font-weight: 700;
    letter-spacing: 2px;
    margin-bottom: 8px;
    opacity: 0;
    transform: translateY(-20px);
    transition: all 0.5s ease-in-out;
  }

  .subtitle {
    font-size: 14px;
    letter-spacing: 4px;
    text-transform: uppercase;
    opacity: 0;
    transform: translateY(20px);
    transition: all 0.5s ease-in-out;
  }

  .pulse {
    position: absolute;
    inset: 0;
    border: 2px solid #22c55e;
    border-radius: 10px;
    opacity: 0;
    transition: all 0.5s ease-in-out;
  }

  .card:hover {
    transform: scale(1.05);
  }

  .card:hover .circuit {
    opacity: 1;
  }

  .card:hover .line-h {
    width: 50px;
    opacity: 0.5;
  }

  .card:hover .line-v {
    height: 50px;
    opacity: 0.5;
  }

  .card:hover .node {
    opacity: 1;
    box-shadow: 0 0 10px #22c55e;
  }

  .card:hover .hexagon-inner {
    transform: rotate(180deg);
    box-shadow: 0 0 20px #22c55e;
  }

  .card:hover .hexagon-core {
    transform: scale(0.8);
  }

  .card:hover .title,
  .card:hover .subtitle {
    opacity: 1;
    transform: translateY(0);
    text-shadow: 0 0 10px #22c55e;
  }

  .card:hover .title {
    transition-delay: 0.2s;
  }

  .card:hover .subtitle {
    transition-delay: 0.3s;
  }

  .card:hover .pulse {
    animation: pulse 2s infinite;
  }

  @keyframes pulse {
    0% {
      transform: scale(1);
      opacity: 0.5;
    }
    50% {
      transform: scale(1.05);
      opacity: 0.2;
    }
    100% {
      transform: scale(1);
      opacity: 0.5;
    }
  }
`;

const Card_98: React.FC = () => {
  return (
    <StyledCard>
      <div className="card">
        <div className="circuit">
          <div className="circuit-line line-h line-1" />
          <div className="circuit-line line-h line-2" />
          <div className="circuit-line line-h line-3" />
          <div className="circuit-line line-h line-4" />
          <div className="circuit-line line-v line-5" />
          <div className="circuit-line line-v line-6" />
          <div className="circuit-line line-v line-7" />
          <div className="circuit-line line-v line-8" />
          <div className="node node-1" />
          <div className="node node-2" />
          <div className="node node-3" />
          <div className="node node-4" />
        </div>
        <div className="pulse" />
        <div className="content">
          <div className="hexagon">
            <div className="hexagon-inner" />
            <div className="hexagon-core" />
          </div>
          <div className="text">
            <div className="title">CIRCUIT</div>
            <div className="subtitle">Neural Network</div>
          </div>
        </div>
      </div>
    </StyledCard>
  );
};

export default Card_98; 