'use client';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Container = styled.div`
  display: inline-block;
  cursor: ${({ $disabled }) => ($disabled ? 'not-allowed' : 'pointer')};
  opacity: ${({ $disabled }) => ($disabled ? 0.6 : 1)};
  position: relative;
`;

const HiddenInput = styled.input.attrs({ type: 'checkbox' })`
  display: none;
`;

const PlasmaBox = styled(motion.div)`
  width: ${({ $size }) => ($size === 'small' ? '20px' : $size === 'large' ? '32px' : '26px')};
  height: ${({ $size }) => ($size === 'small' ? '20px' : $size === 'large' ? '32px' : '26px')};
  background: ${({ $checked }) => ($checked ? '#4C1D95' : '#fff')};
  border: 2px solid #6D28D9;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
  transition: background-color 0.3s ease;
`;

const plasmaColors = [
  'rgba(167, 139, 250, 0.6)',
  'rgba(147, 51, 234, 0.6)',
  'rgba(126, 34, 206, 0.6)'
];

export default function Checkbox_99({ value, onChange, disabled = false, size = 'medium' }) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return (
      <Container $disabled={disabled}>
        <HiddenInput checked={value} readOnly />
        <PlasmaBox $checked={value} $size={size} />
      </Container>
    );
  }

  return (
    <Container $disabled={disabled} onClick={() => !disabled && onChange(!value)}>
      <HiddenInput checked={value} readOnly />
      <PlasmaBox $checked={value} $size={size} animate={value ? { scale: [1, 0.95, 1], transition: { duration: 0.2 } } : {}}>
        {value && (
          <motion.svg viewBox="0 0 24 24" style={{ position: 'absolute', width: '65%', height: '65%', top: '17.5%', left: '17.5%' }}>
            <motion.path
              d="M20 6L9 17L4 12"
              stroke="white"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
              filter="drop-shadow(0 0 4px rgba(147, 51, 234, 0.5))"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 0.3, opacity: { duration: 1.5, repeat: Infinity, repeatType: 'reverse' } }}
            />
          </motion.svg>
        )}
      </PlasmaBox>
    </Container>
  );
}