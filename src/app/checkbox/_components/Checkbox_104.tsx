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

const MagicBox = styled(motion.div)<{ $checked: boolean; $size: string }>`
  width: ${props => props.$size === 'small' ? '20px' : props.$size === 'large' ? '32px' : '26px'};
  height: ${props => props.$size === 'small' ? '20px' : props.$size === 'large' ? '32px' : '26px'};
  background: ${props => props.$checked ? '#4A148C' : '#fff'};
  border: 2px solid #9C27B0;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
  transition: background-color 0.3s ease;
`;

const MagicAura = styled(motion.div)`
  position: absolute;
  inset: -50%;
  background: radial-gradient(circle at center, rgba(156, 39, 176, 0.3), transparent 70%);
  opacity: 0;
`;

const MagicSparkle = styled(motion.div)<{ $color: string }>`
  position: absolute;
  width: 2px;
  height: 2px;
  background: ${props => props.$color};
  border-radius: 50%;
  opacity: 0;
  box-shadow: 0 0 4px ${props => props.$color};
`;

const MagicRune = styled(motion.div)<{ $color: string }>`
  position: absolute;
  width: 8px;
  height: 8px;
  border: 1px solid ${props => props.$color};
  opacity: 0;
  transform-origin: center;
`;

const CheckMark = styled(motion.path)`
  stroke: #E1BEE7;
  stroke-width: 3;
  stroke-linecap: round;
  stroke-linejoin: round;
  fill: none;
  filter: drop-shadow(0 0 4px rgba(225, 190, 231, 0.5));
`;

const magicColors = ['#E1BEE7', '#CE93D8', '#BA68C8'];

const generateSparkles = (count: number) => {
  return Array.from({ length: count }).map((_, i) => ({
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: i * 0.1,
    duration: 0.5 + Math.random()
  }));
};

const generateRunes = (count: number) => {
  return Array.from({ length: count }).map((_, i) => ({
    x: Math.random() * 100,
    y: Math.random() * 100,
    rotation: Math.random() * 360,
    delay: i * 0.2
  }));
};

const auraVariants = {
  unchecked: {
    opacity: 0,
    scale: 0.8,
    rotate: 0
  },
  checked: {
    opacity: [0, 0.6, 0.4],
    scale: [0.8, 1.2, 1],
    rotate: 360,
    transition: {
      duration: 3,
      repeat: Infinity,
      repeatType: "reverse" as const
    }
  }
};

const sparkleVariants = {
  unchecked: {
    opacity: 0,
    scale: 0
  },
  checked: ({ duration, delay }: { duration: number; delay: number }) => ({
    opacity: [0, 1, 0],
    scale: [0, 1, 0],
    y: [0, -10, 0],
    transition: {
      duration,
      delay,
      repeat: Infinity,
      repeatDelay: Math.random()
    }
  })
};

const runeVariants = {
  unchecked: {
    opacity: 0,
    scale: 0,
    rotate: 0
  },
  checked: ({ delay }: { delay: number }) => ({
    opacity: [0, 0.8, 0],
    scale: [0, 1],
    rotate: [0, 360],
    transition: {
      duration: 1.5,
      delay,
      repeat: Infinity,
      ease: "easeInOut"
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

export default function Checkbox_104({ value, onChange, disabled = false, size = "medium" }: CheckboxProps) {
  const [isClient, setIsClient] = useState(false);
  const sparkles = generateSparkles(10);
  const runes = generateRunes(4);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return (
      <Container $disabled={disabled}>
        <HiddenInput checked={value} readOnly />
        <MagicBox
          $checked={value}
          $size={size}
        />
      </Container>
    );
  }

  return (
    <Container $disabled={disabled} onClick={() => !disabled && onChange(!value)}>
      <HiddenInput checked={value} readOnly />
      <MagicBox
        $checked={value}
        $size={size}
        animate={value ? {
          scale: [1, 0.95, 1],
          transition: { duration: 0.2 }
        } : {}}
      >
        {value && (
          <>
            <MagicAura
              variants={auraVariants}
              initial="unchecked"
              animate="checked"
            />
            {sparkles.map((sparkle, index) => (
              <MagicSparkle
                key={index}
                $color={magicColors[index % magicColors.length]}
                style={{
                  left: `${sparkle.x}%`,
                  top: `${sparkle.y}%`
                }}
                variants={sparkleVariants}
                custom={{ duration: sparkle.duration, delay: sparkle.delay }}
                initial="unchecked"
                animate="checked"
              />
            ))}
            {runes.map((rune, index) => (
              <MagicRune
                key={index}
                $color={magicColors[index % magicColors.length]}
                style={{
                  left: `${rune.x}%`,
                  top: `${rune.y}%`,
                  transform: `translate(-50%, -50%) rotate(${rune.rotation}deg)`
                }}
                variants={runeVariants}
                custom={{ delay: rune.delay }}
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
      </MagicBox>
    </Container>
  );
} 