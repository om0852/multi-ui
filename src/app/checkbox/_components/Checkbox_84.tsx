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

const LineBox = styled(motion.div)<{ $checked: boolean; $size: string }>`
  width: ${props => props.$size === 'small' ? '20px' : props.$size === 'large' ? '32px' : '26px'};
  height: ${props => props.$size === 'small' ? '20px' : props.$size === 'large' ? '32px' : '26px'};
  background: ${props => props.$checked ? '#2B6CB0' : '#fff'};
  border: 2px solid #333;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
  transition: background-color 0.3s ease;
`;

const Line = styled(motion.div)<{ $color: string }>`
  position: absolute;
  height: 2px;
  background: ${props => props.$color};
  transform-origin: left center;
`;

const Glow = styled(motion.div)`
  position: absolute;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle at center, rgba(255,255,255,0.8), transparent);
  opacity: 0;
`;

const lineColors = ['#BEE3F8', '#90CDF4', '#63B3ED', '#4299E1'];

const checkmarkSegments = [
  { width: '45%', x: '25%', y: '50%', angle: -45 },
  { width: '25%', x: '25%', y: '50%', angle: 45 },
  { width: '60%', x: '40%', y: '40%', angle: -45 }
];

const lineVariants = {
  unchecked: {
    scaleX: 0,
    opacity: 0
  },
  checked: (i: number) => ({
    scaleX: 1,
    opacity: 1,
    transition: {
      duration: 0.3,
      delay: i * 0.15,
      ease: "easeOut"
    }
  })
};

const glowVariants = {
  unchecked: {
    opacity: 0,
    scale: 0
  },
  checked: {
    opacity: [0, 0.6, 0],
    scale: [0.8, 1.2, 1.5],
    transition: {
      duration: 0.8,
      delay: 0.4
    }
  }
};

export default function Checkbox_84({ value, onChange, disabled = false, size = "medium" }: CheckboxProps) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return (
      <Container $disabled={disabled}>
        <HiddenInput checked={value} readOnly />
        <LineBox
          $checked={value}
          $size={size}
        />
      </Container>
    );
  }

  return (
    <Container $disabled={disabled} onClick={() => !disabled && onChange(!value)}>
      <HiddenInput checked={value} readOnly />
      <LineBox
        $checked={value}
        $size={size}
        animate={value ? {
          scale: [1, 0.95, 1],
          transition: { duration: 0.2 }
        } : {}}
      >
        {value && (
          <>
            {checkmarkSegments.map((segment, index) => (
              <Line
                key={index}
                $color={lineColors[index % lineColors.length]}
                style={{
                  width: segment.width,
                  left: segment.x,
                  top: segment.y,
                  transform: `rotate(${segment.angle}deg)`
                }}
                variants={lineVariants}
                custom={index}
                initial="unchecked"
                animate="checked"
              />
            ))}
            <Glow
              variants={glowVariants}
              initial="unchecked"
              animate="checked"
            />
          </>
        )}
      </LineBox>
    </Container>
  );
} 