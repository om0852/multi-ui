'use client';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Container = styled.div`
  display: inline-block;
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  opacity: ${props => props.disabled ? 0.6 : 1};
  position: relative;
`;

const HiddenInput = styled.input.attrs({ type: 'checkbox' })`
  display: none;
`;

const NeonBox = styled(motion.div)`
  width: ${props => props.size === 'small' ? '20px' : props.size === 'large' ? '32px' : '26px'};
  height: ${props => props.size === 'small' ? '20px' : props.size === 'large' ? '32px' : '26px'};
  background: ${props => props.checked ? '#000' : '#fff'};
  border: 2px solid #FF00FF;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
  transition: background-color 0.3s ease;
  box-shadow: ${props => props.checked ? '0 0 10px #FF00FF, inset 0 0 10px #FF00FF' : 'none'};
`;

const CheckMark = styled(motion.path)`
  stroke: #FF00FF;
  stroke-width: 3;
  stroke-linecap: round;
  stroke-linejoin: round;
  fill: none;
  filter: drop-shadow(0 0 4px #FF00FF);
`;

export default function Checkbox({ value, onChange, disabled = false, size = 'medium' }) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return (
      <Container disabled={disabled}>
        <HiddenInput checked={value} readOnly />
        <NeonBox checked={value} size={size} />
      </Container>
    );
  }

  return (
    <Container disabled={disabled} onClick={() => !disabled && onChange(!value)}>
      <HiddenInput checked={value} readOnly />
      <NeonBox checked={value} size={size}>
        {value && (
          <motion.svg viewBox="0 0 24 24" style={{ position: 'absolute', width: '65%', height: '65%', top: '17.5%', left: '17.5%' }}>
            <CheckMark d="M20 6L9 17L4 12" initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 1, transition: { duration: 0.3 } }} />
          </motion.svg>
        )}
      </NeonBox>
    </Container>
  );
}
