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

const SpiralBox = styled(motion.div)`
  width: ${props => (props.$size === 'small' ? '20px' : props.$size === 'large' ? '32px' : '26px')};
  height: ${props => (props.$size === 'small' ? '20px' : props.$size === 'large' ? '32px' : '26px')};
  background: ${props => (props.$checked ? '#6B46C1' : '#fff')};
  border: 2px solid #333;
  border-radius: 4px;
  transition: background-color 0.3s ease;
`;

const SpiralSegment = styled(motion.div)`
  position: absolute;
  background: ${props => props.$color};
  border-radius: 2px;
  transform-origin: center;
`;

const spiralColors = ['#9F7AEA', '#805AD5', '#6B46C1', '#553C9A'];

const segmentVariants = {
  unchecked: {
    scale: 0,
    rotate: 720,
    opacity: 0
  },
  checked: index => ({
    scale: 1,
    rotate: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      delay: index * 0.1,
      type: 'spring',
      stiffness: 200,
      damping: 15
    }
  })
};

const generateSpiralSegments = size => {
  const segments = [];
  const totalSegments = 8;
  const baseSize = size * 0.6;

  for (let i = 0; i < totalSegments; i++) {
    const scale = 1 - i * 0.1;
    segments.push({
      width: baseSize * scale,
      height: 3,
      x: 50 - (baseSize * scale) / 2,
      y: 50 - i * 3,
      rotate: i * 45
    });
  }

  return segments;
};

const Checkbox = ({ value, onChange, disabled = false, size = 'medium' }) => {
  const [isClient, setIsClient] = useState(false);
  const baseSize = size === 'small' ? 20 : size === 'large' ? 32 : 26;
  const segments = generateSpiralSegments(baseSize);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return (
      <Container $disabled={disabled}>
        <HiddenInput checked={value} readOnly />
        <SpiralBox $checked={value} $size={size} />
      </Container>
    );
  }

  return (
    <Container $disabled={disabled} onClick={() => !disabled && onChange(!value)}>
      <HiddenInput checked={value} readOnly />
      <SpiralBox $checked={value} $size={size}>
        {value &&
          segments.map((segment, index) => (
            <SpiralSegment
              key={index}
              $color={spiralColors[index % spiralColors.length]}
              style={{
                width: segment.width,
                height: segment.height,
                left: `${segment.x}%`,
                top: `${segment.y}%`,
                transform: `rotate(${segment.rotate}deg)`
              }}
              variants={segmentVariants}
              custom={index}
              initial="unchecked"
              animate="checked"
            />
          ))}
      </SpiralBox>
    </Container>
  );
};

export default Checkbox;