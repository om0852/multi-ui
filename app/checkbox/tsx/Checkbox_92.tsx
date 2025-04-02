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

const ShatterBox = styled(motion.div)<{ $checked: boolean; $size: string }>`
  width: ${props => props.$size === 'small' ? '20px' : props.$size === 'large' ? '32px' : '26px'};
  height: ${props => props.$size === 'small' ? '20px' : props.$size === 'large' ? '32px' : '26px'};
  background: ${props => props.$checked ? '#4A5568' : '#fff'};
  border: 2px solid #333;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
  transition: background-color 0.3s ease;
`;

const Shard = styled(motion.div)<{ $color: string }>`
  position: absolute;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 4px;
  border-color: ${props => props.$color};
  opacity: 0.8;
  transform-origin: center;
`;

const Crack = styled(motion.div)`
  position: absolute;
  width: 1px;
  height: 10px;
  background: rgba(255, 255, 255, 0.8);
  transform-origin: center;
`;

const CheckMark = styled(motion.svg)`
  position: absolute;
  width: 65%;
  height: 65%;
  top: 17.5%;
  left: 17.5%;
  stroke: white;
  stroke-width: 3;
  stroke-linecap: round;
  stroke-linejoin: round;
  fill: none;
`;

const shardColors = ['#CBD5E0', '#E2E8F0', '#EDF2F7', '#F7FAFC'];

const generateShards = (count: number) => {
  return Array.from({ length: count }).map((_, i) => ({
    angle: (i * 360) / count,
    distance: Math.random() * 20 + 10,
    rotation: Math.random() * 360,
    delay: i * 0.02
  }));
};

const generateCracks = (count: number) => {
  return Array.from({ length: count }).map((_, i) => ({
    angle: (i * 360) / count,
    length: Math.random() * 10 + 5,
    delay: i * 0.03
  }));
};

const shardVariants = {
  unchecked: {
    scale: 0,
    opacity: 0,
    x: 0,
    y: 0,
    rotate: 0
  },
  checked: ({ angle, distance, rotation, delay }: { angle: number; distance: number; rotation: number; delay: number }) => ({
    scale: [0, 1, 0],
    opacity: [0, 0.8, 0],
    x: [0, Math.cos(angle * Math.PI / 180) * distance],
    y: [0, Math.sin(angle * Math.PI / 180) * distance],
    rotate: [0, rotation],
    transition: {
      duration: 0.5,
      delay,
      ease: [0.4, 0, 0.2, 1]
    }
  })
};

const crackVariants = {
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
      opacity: {
        duration: 0.4,
        delay: delay + 0.2
      }
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

export default function Checkbox_92({ value, onChange, disabled = false, size = "medium" }: CheckboxProps) {
  const [isClient, setIsClient] = useState(false);
  const shards = generateShards(12);
  const cracks = generateCracks(8);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return (
      <Container $disabled={disabled}>
        <HiddenInput checked={value} readOnly />
        <ShatterBox
          $checked={value}
          $size={size}
        />
      </Container>
    );
  }

  return (
    <Container $disabled={disabled} onClick={() => !disabled && onChange(!value)}>
      <HiddenInput checked={value} readOnly />
      <ShatterBox
        $checked={value}
        $size={size}
        animate={value ? {
          scale: [1, 0.95, 1],
          transition: { duration: 0.2 }
        } : {}}
      >
        {value && (
          <>
            {shards.map((shard, index) => (
              <Shard
                key={index}
                $color={shardColors[index % shardColors.length]}
                style={{
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)'
                }}
                variants={shardVariants}
                custom={shard}
                initial="unchecked"
                animate="checked"
              />
            ))}
            {cracks.map((crack, index) => (
              <Crack
                key={index}
                style={{
                  top: '50%',
                  left: '50%',
                  transform: `translate(-50%, -50%) rotate(${crack.angle}deg)`
                }}
                variants={crackVariants}
                custom={{ delay: crack.delay }}
                initial="unchecked"
                animate="checked"
              />
            ))}
            <CheckMark
              viewBox="0 0 24 24"
            >
              <motion.path
                d="M20 6L9 17L4 12"
                variants={checkVariants}
                initial="unchecked"
                animate="checked"
              />
            </CheckMark>
          </>
        )}
      </ShatterBox>
    </Container>
  );
} 