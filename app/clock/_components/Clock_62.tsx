"use client"

import React, { useEffect, useRef } from 'react';

interface DNAClockProps {
  size?: number;
  primaryColor?: string;
  secondaryColor?: string;
  backgroundColor?: string;
  nucleotideColor?: string;
}

const DNAClock: React.FC<DNAClockProps> = ({
  size = 400,
  primaryColor = '#f97316',
  secondaryColor = '#fb923c',
  backgroundColor = '#0f172a',
  nucleotideColor = '#fbbf24'
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const drawNucleotide = (
    ctx: CanvasRenderingContext2D,
    x: number,
    y: number,
    radius: number,
  ) => {
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.fillStyle = nucleotideColor;
    ctx.fill();
  };

  const drawHelix = (
    ctx: CanvasRenderingContext2D,
    centerX: number,
    centerY: number,
    radius: number,
    time: number,
    color: string,
    offset: number = 0
  ) => {
    ctx.beginPath();
    for (let i = 0; i < 360; i += 5) {
      const angle = (i + time * 50) * (Math.PI / 180);
      const x = centerX + radius * Math.cos(angle);
      const y = centerY + (i - 180) + 20 * Math.sin(angle * 2 + offset);

      if (i === 0) {
        ctx.moveTo(x, y);
      } else {
        ctx.lineTo(x, y);
      }
    }
    ctx.strokeStyle = color;
    ctx.lineWidth = 3;
    ctx.stroke();
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    const startTime = Date.now();

    const animate = () => {
      const time = (Date.now() - startTime) / 1000;
      
      ctx.fillStyle = backgroundColor;
      ctx.fillRect(0, 0, size, size);

      const centerX = size / 2;
      const centerY = size / 2;
      const now = new Date();
      const seconds = now.getSeconds() + now.getMilliseconds() / 1000;
      const minutes = now.getMinutes() + seconds / 60;
      const hours = now.getHours() % 12 + minutes / 60;

      // Draw the double helix structure
      drawHelix(ctx, centerX, centerY, 60, time, primaryColor, 0);
      drawHelix(ctx, centerX, centerY, 60, time, secondaryColor, Math.PI);

      // Draw nucleotides representing hours
      for (let i = 0; i < 12; i++) {
        const angle = (i * 30 + time * 50) * (Math.PI / 180);
        const x = centerX + 60 * Math.cos(angle);
        const y = centerY + ((i * 30) - 180) + 20 * Math.sin(angle * 2);
        
        if (i <= hours) {
          drawNucleotide(ctx, x, y, 5);
        }
      }

      // Draw nucleotides representing minutes
      for (let i = 0; i < 60; i += 5) {
        const angle = (i * 6 + time * 50) * (Math.PI / 180);
        const x = centerX + 60 * Math.cos(angle);
        const y = centerY + ((i * 6) - 180) + 20 * Math.sin(angle * 2);
        
        if (i <= minutes) {
          drawNucleotide(ctx, x, y, 3);
        }
      }

      // Draw nucleotides representing seconds
      const secondAngle = (seconds * 6 + time * 50) * (Math.PI / 180);
      const secondX = centerX + 60 * Math.cos(secondAngle);
      const secondY = centerY + ((seconds * 6) - 180) + 20 * Math.sin(secondAngle * 2);
      drawNucleotide(ctx, secondX, secondY, 4);

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [size, primaryColor, secondaryColor, backgroundColor, nucleotideColor]);

  return (
    <canvas
      ref={canvasRef}
      width={size}
      height={size}
      className="rounded-lg shadow-lg"
    />
  );
};

export default DNAClock; 