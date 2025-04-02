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

const PlasmaBox = styled(motion.div)<{ $checked: boolean; $size: string }>`
  width: ${props => props.$size === 'small' ? '20px' : props.$size === 'large' ? '32px' : '26px'};
  height: ${props => props.$size === 'small' ? '20px' : props.$size === 'large' ? '32px' : '26px'};
  background: ${props => props.$checked ? '#4C1D95' : '#fff'};
  border: 2px solid #6D28D9;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
  transition: background-color 0.3s ease;
`;

const PlasmaBlob = styled(motion.div)<{ $color: string }>`
  position: absolute;
  background: ${props => props.$color};
  border-radius: 50%;
  filter: blur(8px);
  opacity: 0;
  mix-blend-mode: screen;
`;

const PlasmaArc = styled(motion.div)<{ $color: string }>`
  position: absolute;
  width: 2px;
  background: ${props => props.$color};
  transform-origin: bottom center;
  opacity: 0;
  filter: blur(1px);
`;

const CheckMark = styled(motion.path)`
  stroke: white;
  stroke-width: 3;
  stroke-linecap: round;
  stroke-linejoin: round;
  fill: none;
  filter: drop-shadow(0 0 4px rgba(147, 51, 234, 0.5));
`;

const plasmaColors = [
  'rgba(167, 139, 250, 0.6)',
  'rgba(147, 51, 234, 0.6)',
  'rgba(126, 34, 206, 0.6)'
];

const generateBlobs = (count: number) => {
  return Array.from({ length: count }).map((_, i) => ({
    size: 20 + Math.random() * 30,
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: i * 0.2
  }));
};

const generateArcs = (count: number) => {
  return Array.from({ length: count }).map((_, i) => ({
    height: 10 + Math.random() * 20,
    x: Math.random() * 100,
    rotation: Math.random() * 360,
    delay: i * 0.1
  }));
};

const blobVariants = {
  unchecked: {
    scale: 0,
    opacity: 0
  },
  checked: ({ delay }: { delay: number }) => ({
    scale: [0, 1, 0.8],
    opacity: [0, 0.8, 0],
    transition: {
      duration: 1.5,
      delay,
      repeat: Infinity,
      repeatDelay: Math.random() * 2
    }
  })
};

const arcVariants = {
  unchecked: {
    scaleY: 0,
    opacity: 0
  },
  checked: ({ delay }: { delay: number }) => ({
    scaleY: [0, 1],
    opacity: [0, 1, 0],
    transition: {
      duration: 0.3,
      delay,
      repeat: Infinity,
      repeatDelay: Math.random()
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

export default function Checkbox_99({ value, onChange, disabled = false, size = "medium" }: CheckboxProps) {
  const [isClient, setIsClient] = useState(false);
  const blobs = generateBlobs(6);
  const arcs = generateArcs(8);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return (
      <Container $disabled={disabled}>
        <HiddenInput checked={value} readOnly />
        <PlasmaBox
          $checked={value}
          $size={size}
        />
      </Container>
    );
  }

  return (
    <Container $disabled={disabled} onClick={() => !disabled && onChange(!value)}>
      <HiddenInput checked={value} readOnly />
      <PlasmaBox
        $checked={value}
        $size={size}
        animate={value ? {
          scale: [1, 0.95, 1],
          transition: { duration: 0.2 }
        } : {}}
      >
        {value && (
          <>
            {blobs.map((blob, index) => (
              <PlasmaBlob
                key={index}
                $color={plasmaColors[index % plasmaColors.length]}
                style={{
                  width: `${blob.size}%`,
                  height: `${blob.size}%`,
                  left: `${blob.x}%`,
                  top: `${blob.y}%`,
                  transform: 'translate(-50%, -50%)'
                }}
                variants={blobVariants}
                custom={{ delay: blob.delay }}
                initial="unchecked"
                animate="checked"
              />
            ))}
            {arcs.map((arc, index) => (
              <PlasmaArc
                key={index}
                $color={plasmaColors[index % plasmaColors.length]}
                style={{
                  height: `${arc.height}px`,
                  left: `${arc.x}%`,
                  bottom: '0',
                  transform: `rotate(${arc.rotation}deg)`
                }}
                variants={arcVariants}
                custom={{ delay: arc.delay }}
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
      </PlasmaBox>
    </Container>
  );
} 