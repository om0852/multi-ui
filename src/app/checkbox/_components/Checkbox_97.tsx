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

const MetalBox = styled(motion.div)<{ $checked: boolean; $size: string }>`
  width: ${props => props.$size === 'small' ? '20px' : props.$size === 'large' ? '32px' : '26px'};
  height: ${props => props.$size === 'small' ? '20px' : props.$size === 'large' ? '32px' : '26px'};
  background: ${props => props.$checked ? 
    'linear-gradient(135deg, #4A5568 0%, #718096 50%, #A0AEC0 100%)' : 
    '#fff'};
  border: 2px solid #4A5568;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
  transition: background 0.3s ease;
`;

const MetalShine = styled(motion.div)`
  position: absolute;
  width: 200%;
  height: 100%;
  background: linear-gradient(
    90deg,
    transparent 0%,
    rgba(255, 255, 255, 0.2) 45%,
    rgba(255, 255, 255, 0.4) 50%,
    rgba(255, 255, 255, 0.2) 55%,
    transparent 100%
  );
  transform: translateX(-100%);
`;

const MetalDrop = styled(motion.div)`
  position: absolute;
  width: 100%;
  height: 100%;
  background: radial-gradient(
    circle at var(--x) var(--y),
    rgba(255, 255, 255, 0.4) 0%,
    transparent 50%
  );
  opacity: 0;
`;

const MetalRipple = styled(motion.div)`
  position: absolute;
  border-radius: 50%;
  border: 2px solid rgba(255, 255, 255, 0.3);
  opacity: 0;
`;

const CheckMark = styled(motion.path)`
  stroke: #fff;
  stroke-width: 3;
  stroke-linecap: round;
  stroke-linejoin: round;
  fill: none;
  filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.3));
`;

const shineVariants = {
  unchecked: {
    x: '-100%'
  },
  checked: {
    x: '100%',
    transition: {
      duration: 1,
      repeat: Infinity,
      repeatDelay: 2
    }
  }
};

const dropVariants = {
  unchecked: {
    opacity: 0
  },
  checked: {
    opacity: [0, 0.6, 0],
    transition: {
      duration: 2,
      repeat: Infinity,
      repeatDelay: 1
    }
  }
};

const rippleVariants = {
  unchecked: {
    opacity: 0,
    scale: 0.3
  },
  checked: (delay: number) => ({
    opacity: [0, 1, 0],
    scale: [0.3, 2],
    transition: {
      duration: 1.5,
      delay: delay * 0.3,
      repeat: Infinity
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
    opacity: 1,
    transition: {
      duration: 0.3,
      ease: "easeOut"
    }
  }
};

export default function Checkbox_97({ value, onChange, disabled = false, size = "medium" }: CheckboxProps) {
  const [isClient, setIsClient] = useState(false);
  const ripples = Array.from({ length: 3 });
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePosition({ x, y });
  };

  if (!isClient) {
    return (
      <Container $disabled={disabled}>
        <HiddenInput checked={value} readOnly />
        <MetalBox
          $checked={value}
          $size={size}
        />
      </Container>
    );
  }

  return (
    <Container 
      $disabled={disabled} 
      onClick={() => !disabled && onChange(!value)}
      onMouseMove={handleMouseMove}
    >
      <HiddenInput checked={value} readOnly />
      <MetalBox
        $checked={value}
        $size={size}
        animate={value ? {
          scale: [1, 0.95, 1],
          transition: { duration: 0.2 }
        } : {}}
      >
        {value && (
          <>
            <MetalShine
              variants={shineVariants}
              initial="unchecked"
              animate="checked"
            />
            <MetalDrop
              variants={dropVariants}
              initial="unchecked"
              animate="checked"
              style={{
                '--x': `${mousePosition.x}%`,
                '--y': `${mousePosition.y}%`
              } as any}
            />
            {ripples.map((_, index) => (
              <MetalRipple
                key={index}
                style={{
                  width: '100%',
                  height: '100%',
                  top: '0',
                  left: '0'
                }}
                variants={rippleVariants}
                custom={index}
                initial="unchecked"
                animate="checked"
              />
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
      </MetalBox>
    </Container>
  );
} 