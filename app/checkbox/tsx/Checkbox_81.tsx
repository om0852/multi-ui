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

const DrawBox = styled(motion.div)<{ $checked: boolean; $size: string }>`
  width: ${props => props.$size === 'small' ? '20px' : props.$size === 'large' ? '32px' : '26px'};
  height: ${props => props.$size === 'small' ? '20px' : props.$size === 'large' ? '32px' : '26px'};
  background: ${props => props.$checked ? '#4A90E2' : '#fff'};
  border: 2px solid #333;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
  transition: background-color 0.3s ease;
`;

const Pen = styled(motion.div)`
  position: absolute;
  width: 4px;
  height: 4px;
  background: #fff;
  border-radius: 50%;
  filter: drop-shadow(0 0 2px rgba(0, 0, 0, 0.3));
`;

const InkTrail = styled(motion.div)`
  position: absolute;
  width: 2px;
  height: 2px;
  background: #fff;
  border-radius: 50%;
  opacity: 0.6;
`;

const penPathVariants = {
  unchecked: {
    pathLength: 0,
    opacity: 0
  },
  checked: {
    pathLength: 1,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: "easeInOut"
    }
  }
};

const penVariants = {
  unchecked: {
    x: "0%",
    y: "0%",
    opacity: 0
  },
  checked: {
    x: ["0%", "50%", "100%"],
    y: ["50%", "100%", "50%"],
    opacity: [0, 1, 0],
    transition: {
      duration: 0.8,
      ease: "easeInOut"
    }
  }
};

const trailVariants = {
  unchecked: {
    opacity: 0,
    scale: 0
  },
  checked: (delay: number) => ({
    opacity: [0, 0.6, 0],
    scale: [0, 1, 0],
    transition: {
      duration: 0.4,
      delay: delay * 0.1
    }
  })
};

export default function Checkbox_81({ value, onChange, disabled = false, size = "medium" }: CheckboxProps) {
  const [isClient, setIsClient] = useState(false);
  const trails = Array.from({ length: 8 });

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return (
      <Container $disabled={disabled}>
        <HiddenInput checked={value} readOnly />
        <DrawBox
          $checked={value}
          $size={size}
        />
      </Container>
    );
  }

  return (
    <Container $disabled={disabled} onClick={() => !disabled && onChange(!value)}>
      <HiddenInput checked={value} readOnly />
      <DrawBox
        $checked={value}
        $size={size}
        animate={value ? {
          scale: [1, 0.95, 1],
          transition: { duration: 0.2 }
        } : {}}
      >
        {value && (
          <>
            <Pen
              variants={penVariants}
              initial="unchecked"
              animate="checked"
            />
            {trails.map((_, index) => (
              <InkTrail
                key={index}
                variants={trailVariants}
                custom={index}
                initial="unchecked"
                animate="checked"
                style={{
                  left: `${20 + (index * 8)}%`,
                  top: `${40 + (index * 5)}%`
                }}
              />
            ))}
            <motion.svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{
                position: 'absolute',
                width: '65%',
                height: '65%',
                top: '17.5%',
                left: '17.5%'
              }}
            >
              <motion.path
                d="M20 6L9 17L4 12"
                variants={penPathVariants}
                initial="unchecked"
                animate="checked"
              />
            </motion.svg>
          </>
        )}
      </DrawBox>
    </Container>
  );
} 