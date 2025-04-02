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

const FireworkBox = styled(motion.div)`
  width: ${props => (props.$size === 'small' ? '20px' : props.$size === 'large' ? '32px' : '26px')};
  height: ${props => (props.$size === 'small' ? '20px' : props.$size === 'large' ? '32px' : '26px')};
  background: ${props => (props.$checked ? '#ED8936' : '#fff')};
  border: 2px solid #333;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
  transition: background-color 0.3s ease;
`;

const Spark = styled(motion.div)`
  position: absolute;
  width: 2px;
  height: 2px;
  background: ${props => props.$color};
  border-radius: 50%;
`;

const Trail = styled(motion.div)`
  position: absolute;
  width: 1px;
  height: 1px;
  background: ${props => props.$color};
  opacity: 0.5;
  border-radius: 50%;
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

const sparkColors = ['#FBD38D', '#F6AD55', '#ED8936', '#DD6B20'];

const generateSparks = count =>
  Array.from({ length: count }).map((_, i) => ({
    angle: (i * 360) / count,
    delay: i * 0.1,
    distance: Math.random() * 10 + 10
  }));

const sparkVariants = {
  unchecked: {
    scale: 0,
    opacity: 0
  },
  checked: ({ angle, distance }) => ({
    scale: [0, 1, 0],
    opacity: [0, 1, 0],
    x: [0, Math.cos(angle * Math.PI / 180) * distance],
    y: [0, Math.sin(angle * Math.PI / 180) * distance],
    transition: {
      duration: 0.5,
      ease: 'easeOut'
    }
  })
};

const trailVariants = {
  unchecked: {
    scale: 0,
    opacity: 0
  },
  checked: delay => ({
    scale: [0, 2],
    opacity: [0, 0.5, 0],
    transition: {
      duration: 0.3,
      delay: delay * 0.1,
      ease: 'easeOut'
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
      ease: 'easeOut'
    }
  }
};

const Checkbox = ({ value, onChange, disabled = false, size = 'medium' }) => {
  const [isClient, setIsClient] = useState(false);
  const sparks = generateSparks(12);
  const trails = Array.from({ length: 5 });

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return (
      <Container $disabled={disabled}>
        <HiddenInput checked={value} readOnly />
        <FireworkBox $checked={value} $size={size} />
      </Container>
    );
  }

  return (
    <Container $disabled={disabled} onClick={() => !disabled && onChange(!value)}>
      <HiddenInput checked={value} readOnly />
      <FireworkBox $checked={value} $size={size}>
        {value && (
          <>
            {sparks.map((spark, index) => (
              <Spark
                key={index}
                $color={sparkColors[index % sparkColors.length]}
                style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
                variants={sparkVariants}
                custom={spark}
                initial='unchecked'
                animate='checked'
              />
            ))}
            {trails.map((_, index) => (
              <Trail
                key={index}
                $color={sparkColors[index % sparkColors.length]}
                style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
                variants={trailVariants}
                custom={index}
                initial='unchecked'
                animate='checked'
              />
            ))}
            <CheckMark viewBox='0 0 24 24'>
              <motion.path d='M20 6L9 17L4 12' variants={checkVariants} initial='unchecked' animate='checked' />
            </CheckMark>
          </>
        )}
      </FireworkBox>
    </Container>
  );
};

export default Checkbox;