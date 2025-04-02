'use client';
import React  from 'react';
import styled from 'styled-components';

const StyledCard = styled.div`
  .card {
    width: 300px;
    height: 200px;
    background: #0c4a6e;
    position: relative;
    display: grid;
    place-content: center;
    border-radius: 10px;
    overflow: hidden;
    transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }

  .waves {
    position: absolute;
    inset: 0;
    opacity: 0;
    transition: opacity 0.5s ease-in-out;
  }

  .wave {
    position: absolute;
    width: 200%;
    height: 200%;
    background: linear-gradient(45deg, #0ea5e9, #38bdf8);
    opacity: 0.5;
  }

  .wave-1 {
    left: -50%;
    border-radius: 40%;
    animation: wave 7s infinite linear;
  }

  .wave-2 {
    left: -50%;
    border-radius: 35%;
    animation: wave 11s infinite linear;
  }

  .wave-3 {
    left: -50%;
    border-radius: 30%;
    animation: wave 13s infinite linear;
  }

  .content {
    position: relative;
    z-index: 2;
    padding: 20px;
    text-align: center;
    transition: all 0.5s ease-in-out;
  }

  .circle {
    width: 100px;
    height: 100px;
    margin: 0 auto 20px;
    position: relative;
    transition: all 0.5s ease-in-out;
  }

  .circle-inner {
    position: absolute;
    inset: 0;
    border: 4px solid #0ea5e9;
    border-radius: 50%;
    transition: all 0.5s ease-in-out;
  }

  .circle-core {
    position: absolute;
    inset: 10px;
    background: linear-gradient(135deg, #0ea5e9, #38bdf8);
    border-radius: 50%;
    opacity: 0.7;
    transition: all 0.5s ease-in-out;
  }

  .text {
    color: #0ea5e9;
    font-family: 'Quicksand', sans-serif;
    transition: all 0.5s ease-in-out;
  }

  .title {
    font-size: 24px;
    font-weight: 700;
    letter-spacing: 2px;
    margin-bottom: 8px;
    opacity: 0;
    transform: translateY(20px);
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

  .bubbles {
    position: absolute;
    inset: 0;
    pointer-events: none;
  }

  .bubble {
    position: absolute;
    width: 10px;
    height: 10px;
    background: rgba(14, 165, 233, 0.3);
    border-radius: 50%;
    opacity: 0;
  }

  .card:hover {
    transform: scale(1.05);
  }

  .card:hover .waves {
    opacity: 0.3;
  }

  .card:hover .circle-inner {
    transform: scale(1.2);
  }

  .card:hover .circle-core {
    transform: scale(0.8);
  }

  .card:hover .title,
  .card:hover .subtitle {
    opacity: 1;
    transform: translateY(0);
    color: white;
  }

  .card:hover .title {
    transition-delay: 0.2s;
  }

  .card:hover .subtitle {
    transition-delay: 0.3s;
  }

  .card:hover .bubble {
    animation: bubble 2s ease-in-out infinite;
  }

  .card:hover .bubble:nth-child(1) { left: 10%; bottom: 0; animation-delay: 0s; }
  .card:hover .bubble:nth-child(2) { left: 30%; bottom: 0; animation-delay: 0.5s; }
  .card:hover .bubble:nth-child(3) { left: 50%; bottom: 0; animation-delay: 1s; }
  .card:hover .bubble:nth-child(4) { left: 70%; bottom: 0; animation-delay: 1.5s; }
  .card:hover .bubble:nth-child(5) { left: 90%; bottom: 0; animation-delay: 2s; }

  @keyframes wave {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }

  @keyframes bubble {
    0% {
      transform: translateY(0) scale(1);
      opacity: 0;
    }
    50% {
      transform: translateY(-100px) scale(1.2);
      opacity: 0.7;
    }
    100% {
      transform: translateY(-200px) scale(0.8);
      opacity: 0;
    }
  }
`;

const Card_97: React.FC = () => {
  return (
    <StyledCard>
      <div className="card">
        <div className="waves">
          <div className="wave wave-1" />
          <div className="wave wave-2" />
          <div className="wave wave-3" />
        </div>
        <div className="bubbles">
          <div className="bubble" />
          <div className="bubble" />
          <div className="bubble" />
          <div className="bubble" />
          <div className="bubble" />
        </div>
        <div className="content">
          <div className="circle">
            <div className="circle-inner" />
            <div className="circle-core" />
          </div>
          <div className="text">
            <div className="title">AQUA</div>
            <div className="subtitle">Liquid Flow</div>
          </div>
        </div>
      </div>
    </StyledCard>
  );
};

export default Card_97; 