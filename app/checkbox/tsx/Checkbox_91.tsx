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

const NeonBox = styled(motion.div)<{ $checked: boolean; $size: string }>`
  width: ${props => props.$size === 'small' ? '20px' : props.$size === 'large' ? '32px' : '26px'};
  height: ${props => props.$size === 'small' ? '20px' : props.$size === 'large' ? '32px' : '26px'};
  background: ${props => props.$checked ? '#1A1A1A' : '#fff'};
  border: 2px solid #333;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
  transition: background-color 0.3s ease;
`;

const NeonPath = styled(motion.path)`
  stroke: #FF00FF;
  stroke-width: 3;
  stroke-linecap: round;
  stroke-linejoin: round;
  fill: none;
  filter: drop-shadow(0 0 2px #FF00FF) drop-shadow(0 0 4px #FF00FF);
`;

const GlowEffect = styled(motion.div)`
  position: absolute;
  inset: -2px;
  background: radial-gradient(circle at center, rgba(255, 0, 255, 0.2), transparent 70%);
  opacity: 0;
`;

const Spark = styled(motion.div)`
  position: absolute;
  width: 2px;
  height: 2px;
  background: #FF00FF;
  border-radius: 50%;
  filter: drop-shadow(0 0 2px #FF00FF);
`;

const neonVariants = {
  unchecked: {
    pathLength: 0,
    opacity: 0
  },
  checked: {
    pathLength: 1,
    opacity: [0, 1, 0.8, 1],
    transition: {
      duration: 0.4,
      opacity: {
        duration: 0.8,
        repeat: Infinity,
        repeatType: "reverse" as const
      }
    }
  }
};

const glowVariants = {
  unchecked: {
    opacity: 0,
    scale: 0.8
  },
  checked: {
    opacity: [0, 0.8, 0.4],
    scale: [0.8, 1.2, 1],
    transition: {
      duration: 1,
      repeat: Infinity,
      repeatType: "reverse" as const
    }
  }
};

const sparkVariants = {
  unchecked: {
    scale: 0,
    opacity: 0
  },
  checked: (delay: number) => ({
    scale: [0, 1, 0],
    opacity: [0, 1, 0],
    transition: {
      duration: 0.4,
      delay: delay * 0.1,
      repeat: Infinity,
      repeatDelay: 1
    }
  })
};

export default function Checkbox_91({ value, onChange, disabled = false, size = "medium" }: CheckboxProps) {
  const [isClient, setIsClient] = useState(false);
  const sparks = Array.from({ length: 6 });

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return (
      <Container $disabled={disabled}>
        <HiddenInput checked={value} readOnly />
        <NeonBox
          $checked={value}
          $size={size}
        />
      </Container>
    );
  }

  return (
    <Container $disabled={disabled} onClick={() => !disabled && onChange(!value)}>
      <HiddenInput checked={value} readOnly />
      <NeonBox
        $checked={value}
        $size={size}
        animate={value ? {
          scale: [1, 0.95, 1],
          transition: { duration: 0.2 }
        } : {}}
      >
        {value && (
          <>
            <GlowEffect
              variants={glowVariants}
              initial="unchecked"
              animate="checked"
            />
            {sparks.map((_, index) => (
              <Spark
                key={index}
                style={{
                  top: `${20 + (index * 10)}%`,
                  left: `${20 + (index * 10)}%`
                }}
                variants={sparkVariants}
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
              <NeonPath
                d="M20 6L9 17L4 12"
                variants={neonVariants}
                initial="unchecked"
                animate="checked"
              />
            </motion.svg>
          </>
        )}
      </NeonBox>
    </Container>
  );
} 