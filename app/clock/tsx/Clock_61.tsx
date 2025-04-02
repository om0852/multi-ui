"use client"

import React, { useEffect, useRef } from 'react';

interface FractalClockProps {
  size?: number;
  primaryColor?: string;
  secondaryColor?: string;
  backgroundColor?: string;
}

const FractalClock: React.FC<FractalClockProps> = ({
  size = 400,
  primaryColor = '#22c55e',
  secondaryColor = '#84cc16',
  backgroundColor = '#0f172a'
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const drawFractalBranch = (
    ctx: CanvasRenderingContext2D,
    x: number,
    y: number,
    length: number,
    angle: number,
    depth: number,
    time: number
  ) => {
    if (depth === 0) return;

    const endX = x + length * Math.cos(angle);
    const endY = y + length * Math.sin(angle);

    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(endX, endY);
    ctx.strokeStyle = depth % 2 === 0 ? primaryColor : secondaryColor;
    ctx.lineWidth = depth;
    ctx.stroke();

    const pulseScale = 0.7 + 0.1 * Math.sin(time * 2);
    const newLength = length * 0.67 * pulseScale;
    const angleOffset = Math.PI / 4 + Math.sin(time) * 0.2;

    drawFractalBranch(ctx, endX, endY, newLength, angle + angleOffset, depth - 1, time);
    drawFractalBranch(ctx, endX, endY, newLength, angle - angleOffset, depth - 1, time);
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
      const initialLength = size / 4;
      const initialAngle = -Math.PI / 2;
      const now = new Date();
      const seconds = now.getSeconds() + now.getMilliseconds() / 1000;
      const minutes = now.getMinutes() + seconds / 60;
      const hours = now.getHours() % 12 + minutes / 60;

      // Draw hour branch
      drawFractalBranch(
        ctx,
        centerX,
        centerY,
        initialLength,
        initialAngle + (hours * Math.PI * 2) / 12,
        5,
        time
      );

      // Draw minute branch
      drawFractalBranch(
        ctx,
        centerX,
        centerY,
        initialLength * 0.8,
        initialAngle + (minutes * Math.PI * 2) / 60,
        4,
        time
      );

      // Draw second branch
      drawFractalBranch(
        ctx,
        centerX,
        centerY,
        initialLength * 0.6,
        initialAngle + (seconds * Math.PI * 2) / 60,
        3,
        time
      );

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [size, primaryColor, secondaryColor, backgroundColor]);

  return (
    <canvas
      ref={canvasRef}
      width={size}
      height={size}
      className="rounded-lg shadow-lg"
    />
  );
};

export default FractalClock; 