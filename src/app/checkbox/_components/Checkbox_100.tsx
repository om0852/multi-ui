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

const QuantumBox = styled(motion.div)<{ $checked: boolean; $size: string }>`
  width: ${props => props.$size === 'small' ? '20px' : props.$size === 'large' ? '32px' : '26px'};
  height: ${props => props.$size === 'small' ? '20px' : props.$size === 'large' ? '32px' : '26px'};
  background: ${props => props.$checked ? '#1A365D' : '#fff'};
  border: 2px solid #2B6CB0;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
  transition: background-color 0.3s ease;
`;

const QuantumField = styled(motion.div)`
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at center, rgba(43, 108, 176, 0.2), transparent);
  opacity: 0;
`;

const QuantumParticle = styled(motion.div)<{ $color: string }>`
  position: absolute;
  width: 2px;
  height: 2px;
  background: ${props => props.$color};
  border-radius: 50%;
  opacity: 0;
  box-shadow: 0 0 4px ${props => props.$color};
`;

const QuantumWave = styled(motion.div)<{ $color: string }>`
  position: absolute;
  border: 1px solid ${props => props.$color};
  border-radius: 50%;
  opacity: 0;
`;

const QuantumOrbit = styled(motion.div)`
  position: absolute;
  width: 100%;
  height: 100%;
  border: 1px dashed rgba(43, 108, 176, 0.3);
  border-radius: 50%;
  opacity: 0;
`;

const CheckMark = styled(motion.path)`
  stroke: #63B3ED;
  stroke-width: 3;
  stroke-linecap: round;
  stroke-linejoin: round;
  fill: none;
  filter: drop-shadow(0 0 4px rgba(99, 179, 237, 0.5));
`;

const quantumColors = ['#63B3ED', '#4299E1', '#3182CE'];

const generateParticles = (count: number) => {
  return Array.from({ length: count }).map((_, i) => ({
    orbit: 30 + Math.random() * 40,
    angle: (i * 360) / count,
    speed: 1 + Math.random(),
    delay: i * 0.1
  }));
};

const generateWaves = (count: number) => {
  return Array.from({ length: count }).map((_, i) => ({
    delay: i * 0.2,
    duration: 1 + Math.random()
  }));
};

const fieldVariants = {
  unchecked: {
    opacity: 0,
    scale: 0.8
  },
  checked: {
    opacity: [0, 0.5, 0.3],
    scale: [0.8, 1.2, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      repeatType: "reverse" as const
    }
  }
};

const particleVariants = {
  unchecked: {
    scale: 0,
    opacity: 0
  },
  checked: ({ speed, delay }: { speed: number; delay: number }) => ({
    scale: [0, 1, 0],
    opacity: [0, 1, 0],
    rotate: [0, 360],
    transition: {
      duration: speed,
      delay,
      repeat: Infinity,
      ease: "linear"
    }
  })
};

const waveVariants = {
  unchecked: {
    scale: 0.3,
    opacity: 0
  },
  checked: ({ duration, delay }: { duration: number; delay: number }) => ({
    scale: [0.3, 2],
    opacity: [0, 0.5, 0],
    transition: {
      duration,
      delay,
      repeat: Infinity
    }
  })
};

const orbitVariants = {
  unchecked: {
    opacity: 0,
    rotate: 0
  },
  checked: {
    opacity: 0.3,
    rotate: 360,
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "linear"
    }
  }
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

export default function Checkbox_100({ value, onChange, disabled = false, size = "medium" }: CheckboxProps) {
  const [isClient, setIsClient] = useState(false);
  const particles = generateParticles(8);
  const waves = generateWaves(3);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return (
      <Container $disabled={disabled}>
        <HiddenInput checked={value} readOnly />
        <QuantumBox
          $checked={value}
          $size={size}
        />
      </Container>
    );
  }

  return (
    <Container $disabled={disabled} onClick={() => !disabled && onChange(!value)}>
      <HiddenInput checked={value} readOnly />
      <QuantumBox
        $checked={value}
        $size={size}
        animate={value ? {
          scale: [1, 0.95, 1],
          transition: { duration: 0.2 }
        } : {}}
      >
        {value && (
          <>
            <QuantumField
              variants={fieldVariants}
              initial="unchecked"
              animate="checked"
            />
            <QuantumOrbit
              variants={orbitVariants}
              initial="unchecked"
              animate="checked"
            />
            {particles.map((particle, index) => (
              <QuantumParticle
                key={index}
                $color={quantumColors[index % quantumColors.length]}
                style={{
                  top: '50%',
                  left: '50%',
                  transform: `
                    translate(-50%, -50%)
                    rotate(${particle.angle}deg)
                    translateX(${particle.orbit}%)
                  `
                }}
                variants={particleVariants}
                custom={{ speed: particle.speed, delay: particle.delay }}
                initial="unchecked"
                animate="checked"
              />
            ))}
            {waves.map((wave, index) => (
              <QuantumWave
                key={index}
                $color={quantumColors[index % quantumColors.length]}
                style={{
                  width: '100%',
                  height: '100%',
                  top: '0',
                  left: '0'
                }}
                variants={waveVariants}
                custom={wave}
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
      </QuantumBox>
    </Container>
  );
} 