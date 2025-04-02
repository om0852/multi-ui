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

const PortalBox = styled(motion.div)`
  width: ${props => (props.$size === 'small' ? '20px' : props.$size === 'large' ? '32px' : '26px')};
  height: ${props => (props.$size === 'small' ? '20px' : props.$size === 'large' ? '32px' : '26px')};
  background: ${props => (props.$checked ? '#553C9A' : '#fff')};
  border: 2px solid #333;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
  transition: background-color 0.3s ease;
`;

const Portal = styled(motion.div)`
  position: absolute;
  width: 200%;
  height: 200%;
  background: radial-gradient(circle at center, ${props => props.$color} 0%, transparent 70%);
  opacity: 0;
  left: -50%;
  top: -50%;
  mix-blend-mode: screen;
`;

const Star = styled(motion.div)`
  position: absolute;
  width: 2px;
  height: 2px;
  background: ${props => props.$color};
  border-radius: 50%;
  opacity: 0;
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

const portalColors = ['#9F7AEA', '#805AD5', '#6B46C1'];
const starColors = ['#E9D8FD', '#D6BCFA', '#B794F4'];

const generateStars = count => {
  return Array.from({ length: count }).map((_, i) => ({
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: i * 0.1,
    duration: 0.5 + Math.random() * 0.5
  }));
};

export default function Checkbox_95({ value, onChange, disabled = false, size = "medium" }) {
  const [isClient, setIsClient] = useState(false);
  const stars = generateStars(10);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return (
      <Container $disabled={disabled}>
        <HiddenInput checked={value} readOnly />
        <PortalBox $checked={value} $size={size} />
      </Container>
    );
  }

  return (
    <Container $disabled={disabled} onClick={() => !disabled && onChange(!value)}>
      <HiddenInput checked={value} readOnly />
      <PortalBox
        $checked={value}
        $size={size}
        animate={value ? { scale: [1, 0.95, 1], transition: { duration: 0.2 } } : {}}
      >
        {value && (
          <>
            {portalColors.map((color, index) => (
              <Portal key={index} $color={color} initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 0.4 }} />
            ))}
            {stars.map((star, index) => (
              <Star
                key={index}
                $color={starColors[index % starColors.length]}
                style={{ left: `${star.x}%`, top: `${star.y}%` }}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
              />
            ))}
            <CheckMark viewBox="0 0 24 24">
              <motion.path d="M20 6L9 17L4 12" initial={{ pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 1 }} />
            </CheckMark>
          </>
        )}
      </PortalBox>
    </Container>
  );
}
