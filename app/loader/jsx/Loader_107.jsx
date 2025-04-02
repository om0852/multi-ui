'use client'

import React, { useEffect, useRef } from 'react';
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const getSizeValue = (size) => {
  switch (size) {
    case 'small':
      return '60px';
    case 'large':
      return '120px';
    default:
      return '80px';
  }
};

const Container = styled.div`
  width: ${props => props.$size};
  height: ${props => props.$size};
  position: relative;
  background: #000;
  border-radius: 8px;
  overflow: hidden;
  animation: ${fadeIn} 0.5s ease-out;
`;

const Canvas = styled.canvas`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

class MatrixEffect {
  constructor(canvas, color) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.color = color;
    this.characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*';
    this.fontSize = Math.max(canvas.width / 20, 8);
    
    // Set canvas size with device pixel ratio for sharp text
    const dpr = window.devicePixelRatio || 1;
    this.canvas.width = canvas.offsetWidth * dpr;
    this.canvas.height = canvas.offsetHeight * dpr;
    this.ctx.scale(dpr, dpr);
    
    // Initialize drops
    const columns = Math.floor(canvas.offsetWidth / (this.fontSize * 0.6));
    this.drops = Array(columns).fill(1);
    this.animationFrame = 0;
  }

  draw = () => {
    // Create semi-transparent black rectangle for fade effect
    this.ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

    // Set text properties
    this.ctx.fillStyle = this.color;
    this.ctx.font = `${this.fontSize}px monospace`;

    // Draw characters
    for (let i = 0; i < this.drops.length; i++) {
      const char = this.characters[Math.floor(Math.random() * this.characters.length)];
      const x = i * this.fontSize * 0.6;
      const y = this.drops[i] * this.fontSize;

      // Add glow effect
      this.ctx.shadowColor = this.color;
      this.ctx.shadowBlur = 10;
      
      // Draw the character
      this.ctx.fillText(char, x, y);
      
      // Reset shadow
      this.ctx.shadowBlur = 0;

      // Reset drop to top or move it down
      if (y > this.canvas.height && Math.random() > 0.975) {
        this.drops[i] = 0;
      }
      this.drops[i]++;
    }
  };

  start() {
    const animate = () => {
      this.draw();
      this.animationFrame = requestAnimationFrame(animate);
    };
    this.animationFrame = requestAnimationFrame(animate);
  }

  stop() {
    cancelAnimationFrame(this.animationFrame);
  }
}

const Loader = ({ size = 'medium', color = '#5858FF', className }) => {
  const canvasRef = useRef(null);
  const effectRef = useRef(null);

  useEffect(() => {
    if (canvasRef.current) {
      effectRef.current = new MatrixEffect(canvasRef.current, color);
      effectRef.current.start();

      return () => {
        effectRef.current?.stop();
      };
    }
  }, [color]);

  const sizeValue = getSizeValue(size);

  return (
    <Container $size={sizeValue} className={className}>
      <Canvas ref={canvasRef} />
    </Container>
  );
};

export default Loader; 