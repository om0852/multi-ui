'use client';
import React, { useEffect, useState, useRef } from 'react';

const MatrixRain = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    const columns = Math.floor(canvas.width / 20);
    const drops: number[] = new Array(columns).fill(1);
    
    const matrix = "0123456789ABCDEF";
    
    const draw = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      ctx.fillStyle = '#0F0';
      ctx.font = '15px monospace';
      
      for (let i = 0; i < drops.length; i++) {
        const text = matrix[Math.floor(Math.random() * matrix.length)];
        ctx.fillText(text, i * 20, drops[i] * 20);
        
        if (drops[i] * 20 > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };

    const interval = setInterval(draw, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full opacity-20"
    />
  );
};

const MatrixDigit = ({ value }: { value: string }) => {
  const [glowIntensity, setGlowIntensity] = useState(1);

  useEffect(() => {
    const glowInterval = setInterval(() => {
      setGlowIntensity(Math.random() * 0.5 + 0.75);
    }, 100);

    return () => clearInterval(glowInterval);
  }, []);

  return (
    <div className="relative w-16 h-24">
      <div
        className="absolute inset-0 flex items-center justify-center text-4xl font-bold transition-all duration-100"
        style={{
          color: '#00ff00',
          textShadow: `0 0 ${5 * glowIntensity}px #00ff00`,
          opacity: glowIntensity,
        }}
      >
        {value}
      </div>
    </div>
  );
};

const Clock_52 = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const hours = time.getHours().toString().padStart(2, '0');
  const minutes = time.getMinutes().toString().padStart(2, '0');
  const seconds = time.getSeconds().toString().padStart(2, '0');

  return (
    <div className="relative bg-black p-12 rounded-xl shadow-2xl overflow-hidden">
      <MatrixRain />

      {/* Clock container */}
      <div className="relative z-10">
        <div className="flex items-center space-x-4">
          <div className="flex space-x-2">
            <MatrixDigit value={hours[0]} />
            <MatrixDigit value={hours[1]} />
          </div>

          <div className="text-4xl font-bold text-green-500" style={{ textShadow: '0 0 5px #00ff00' }}>:</div>

          <div className="flex space-x-2">
            <MatrixDigit value={minutes[0]} />
            <MatrixDigit value={minutes[1]} />
          </div>

          <div className="text-4xl font-bold text-green-500" style={{ textShadow: '0 0 5px #00ff00' }}>:</div>

          <div className="flex space-x-2">
            <MatrixDigit value={seconds[0]} />
            <MatrixDigit value={seconds[1]} />
          </div>
        </div>
      </div>

      {/* Overlay gradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at center, transparent 30%, rgba(0, 0, 0, 0.5) 100%)',
        }}
      />
    </div>
  );
};

export default Clock_52; 