'use client';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

type CheckboxProps = {
  value: boolean;
  onChange: (checked: boolean) => void;
  disabled?: boolean;
  size?: "small" | "medium" | "large";
};

const Container = styled.div<{ $disabled?: boolean }>`
  display: inline-block;
  cursor: ${props => props.$disabled ? 'not-allowed' : 'pointer'};
  opacity: ${props => props.$disabled ? 0.6 : 1};
  position: relative;
`;

const HiddenInput = styled.input.attrs({ type: 'checkbox' })`
  display: none;
`;

const MatrixBox = styled(motion.div)<{ $checked: boolean; $size: string }>`
  width: ${props => props.$size === 'small' ? '20px' : props.$size === 'large' ? '32px' : '26px'};
  height: ${props => props.$size === 'small' ? '20px' : props.$size === 'large' ? '32px' : '26px'};
  background: ${props => props.$checked ? '#000' : '#fff'};
  border: 2px solid #00FF00;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
  transition: background-color 0.3s ease;
`;

const MatrixRain = styled(motion.div)`
  position: absolute;
  width: 2px;
  background: linear-gradient(180deg, transparent, #00FF00);
  opacity: 0;
`;

const MatrixGlow = styled(motion.div)`
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at center, rgba(0, 255, 0, 0.2), transparent);
  opacity: 0;
`;

const MatrixSymbol = styled(motion.div)`
  position: absolute;
  font-family: monospace;
  font-size: 8px;
  color: #00FF00;
  opacity: 0;
  text-shadow: 0 0 2px #00FF00;
`;

const CheckMark = styled(motion.path)`
  stroke: #00FF00;
  stroke-width: 3;
  stroke-linecap: round;
  stroke-linejoin: round;
  fill: none;
  filter: drop-shadow(0 0 4px #00FF00);
`;

const matrixSymbols = '01';

const generateRaindrops = (count: number) => {
  return Array.from({ length: count }).map((_, i) => ({
    x: (i * 100) / count,
    delay: i * 0.2,
    duration: 0.5 + Math.random()
  }));
};

const generateSymbols = (count: number) => {
  return Array.from({ length: count }).map((_, i) => ({
    x: Math.random() * 100,
    y: Math.random() * 100,
    symbol: matrixSymbols[Math.floor(Math.random() * matrixSymbols.length)],
    delay: i * 0.1
  }));
};

const rainVariants = {
  unchecked: {
    opacity: 0,
    y: '-100%'
  },
  checked: ({ duration, delay }: { duration: number; delay: number }) => ({
    opacity: [0, 1, 0],
    y: ['0%', '200%'],
    transition: {
      duration,
      delay,
      repeat: Infinity,
      ease: "linear"
    }
  })
};

const glowVariants = {
  unchecked: {
    opacity: 0,
    scale: 0.8
  },
  checked: {
    opacity: [0, 0.4, 0.2],
    scale: [0.8, 1.2, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      repeatType: "reverse" as const
    }
  }
};

const symbolVariants = {
  unchecked: {
    opacity: 0,
    scale: 0
  },
  checked: (delay: number) => ({
    opacity: [0, 1, 0],
    scale: [0, 1, 0],
    transition: {
      duration: 0.5,
      delay,
      repeat: Infinity,
      repeatDelay: Math.random() * 2
    }
  })
};

const checkVariants = {
  unchecked: {
    pathLength: 0,
    opacity: 0
  },
  checked: {
    pathLength: 1,
    opacity: [0.5, 1, 0.5],
    transition: {
      duration: 0.3,
      opacity: {
        duration: 1.5,
        repeat: Infinity,
        repeatType: "reverse" as const
      }
    }
  }
};

export default function Checkbox_102({ value, onChange, disabled = false, size = "medium" }: CheckboxProps) {
  const [isClient, setIsClient] = useState(false);
  const raindrops = generateRaindrops(6);
  const symbols = generateSymbols(8);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return (
      <Container $disabled={disabled}>
        <HiddenInput checked={value} readOnly />
        <MatrixBox
          $checked={value}
          $size={size}
        />
      </Container>
    );
  }

  return (
    <Container $disabled={disabled} onClick={() => !disabled && onChange(!value)}>
      <HiddenInput checked={value} readOnly />
      <MatrixBox
        $checked={value}
        $size={size}
        animate={value ? {
          scale: [1, 0.95, 1],
          transition: { duration: 0.2 }
        } : {}}
      >
        {value && (
          <>
            <MatrixGlow
              variants={glowVariants}
              initial="unchecked"
              animate="checked"
            />
            {raindrops.map((drop, index) => (
              <MatrixRain
                key={index}
                style={{
                  left: `${drop.x}%`,
                  height: '200%'
                }}
                variants={rainVariants}
                custom={{ duration: drop.duration, delay: drop.delay }}
                initial="unchecked"
                animate="checked"
              />
            ))}
            {symbols.map((symbol, index) => (
              <MatrixSymbol
                key={index}
                style={{
                  left: `${symbol.x}%`,
                  top: `${symbol.y}%`,
                  transform: 'translate(-50%, -50%)'
                }}
                variants={symbolVariants}
                custom={symbol.delay}
                initial="unchecked"
                animate="checked"
              >
                {symbol.symbol}
              </MatrixSymbol>
            ))}
            <motion.svg
              viewBox="0 0 24 24"
              style={{
                position: 'absolute',
                width: '65%',
                height: '65%',
                top: '17.5%',
                left: '17.5%'
              }}
            >
              <CheckMark
                d="M20 6L9 17L4 12"
                variants={checkVariants}
                initial="unchecked"
                animate="checked"
              />
            </motion.svg>
          </>
        )}
      </MatrixBox>
    </Container>
  );
} 