'use client';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Container = styled.div`
  display: inline-block;
  cursor: ${props => (props.$disabled ? 'not-allowed' : 'pointer')};
  opacity: ${props => (props.$disabled ? 0.6 : 1)};
  position: relative;
`;

const HiddenInput = styled.input.attrs({ type: 'checkbox' })`
  display: none;
`;

const WaveBox = styled(motion.div)`
  width: ${props => (props.$size === 'small' ? '20px' : props.$size === 'large' ? '32px' : '26px')};
  height: ${props => (props.$size === 'small' ? '20px' : props.$size === 'large' ? '32px' : '26px')};
  background: ${props => (props.$checked ? '#1E88E5' : '#fff')};
  border: 2px solid #333;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
  transition: background-color 0.3s ease;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Bar = styled(motion.div)`
  width: 12%;
  height: 80%;
  background: ${props => props.$color};
  border-radius: 1px;
  transform-origin: bottom;
`;

const barColors = ['#90CAF9', '#64B5F6', '#42A5F5', '#2196F3', '#1E88E5'];

const barVariants = {
  unchecked: { scaleY: 0.2, opacity: 0.5 },
  checked: i => ({
    scaleY: [0.2, 1, 0.2],
    opacity: [0.5, 1, 0.5],
    transition: { duration: 0.8, repeat: Infinity, repeatType: 'reverse', delay: i * 0.1, ease: 'easeInOut' }
  })
};

const Checkbox = ({ value, onChange, disabled = false, size = 'medium' }) => {
  const [isClient, setIsClient] = useState(false);
  const bars = Array.from({ length: 5 });

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return (
      <Container $disabled={disabled}>
        <HiddenInput checked={value} readOnly />
        <WaveBox $size={size} />
      </Container>
    );
  }

  return (
    <Container $disabled={disabled} onClick={() => !disabled && onChange(!value)}>
      <HiddenInput checked={value} readOnly />
      <WaveBox
        $checked={value}
        $size={size}
        animate={value ? { scale: [1, 0.95, 1], transition: { duration: 0.2 } } : {}}
      >
        {bars.map((_, index) => (
          <Bar
            key={index}
            $color={barColors[index]}
            variants={barVariants}
            custom={index}
            initial="unchecked"
            animate={value ? 'checked' : 'unchecked'}
          />
        ))}
      </WaveBox>
    </Container>
  );
};

export default Checkbox;
