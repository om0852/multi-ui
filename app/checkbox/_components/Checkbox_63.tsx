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

const WaveBox = styled(motion.div)<{ $checked: boolean; $size: string }>`
  width: ${props => props.$size === 'small' ? '20px' : props.$size === 'large' ? '32px' : '26px'};
  height: ${props => props.$size === 'small' ? '20px' : props.$size === 'large' ? '32px' : '26px'};
  background: ${props => props.$checked ? '#1E88E5' : '#fff'};
  border: 2px solid #333;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
  transition: background-color 0.3s ease;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Bar = styled(motion.div)<{ $color: string }>`
  width: 12%;
  height: 80%;
  background: ${props => props.$color};
  border-radius: 1px;
  transform-origin: bottom;
`;

const barColors = ['#90CAF9', '#64B5F6', '#42A5F5', '#2196F3', '#1E88E5'];


export default function Checkbox_63({ value, onChange, disabled = false, size = "medium" }: CheckboxProps) {
  const [isClient, setIsClient] = useState(false);
  const bars = Array.from({ length: 5 });

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return (
      <Container $disabled={disabled}>
        <HiddenInput checked={value} readOnly />
        <WaveBox
          $checked={value}
          $size={size}
        />
      </Container>
    );
  }

  return (
    <Container $disabled={disabled} onClick={() => !disabled && onChange(!value)}>
      <HiddenInput checked={value} readOnly />
      <WaveBox
        $checked={value}
        $size={size}
        animate={value ? {
          scale: [1, 0.95, 1],
          transition: { duration: 0.2 }
        } : {}}
      >
        {bars.map((_, index) => (
          <Bar
            key={index}
            $color={barColors[index]}
            custom={index}
            initial="unchecked"
            animate={value ? "checked" : "unchecked"}
          />
        ))}
      </WaveBox>
    </Container>
  );
} 