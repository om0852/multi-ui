'use client';
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Container = styled.div`
  display: inline-block;
  cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
  opacity: ${props => (props.disabled ? 0.6 : 1)};
  perspective: 1000px;
`;

const HiddenInput = styled.input.attrs({ type: 'checkbox' })`
  display: none;
`;

const FlipBox = styled(motion.div)`
  width: ${props => (props.size === 'small' ? '20px' : props.size === 'large' ? '32px' : '26px')};
  height: ${props => (props.size === 'small' ? '20px' : props.size === 'large' ? '32px' : '26px')};
  position: relative;
  transform-style: preserve-3d;
  transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
`;

const Face = styled(motion.div)`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const FrontFace = styled(Face)`
  background: white;
  border: 2px solid #E5E7EB;
`;

const BackFace = styled(Face)`
  background: linear-gradient(135deg, #3B82F6, #2563EB);
  transform: rotateY(180deg);
`;

const CheckMark = styled(motion.svg)`
  width: 60%;
  height: 60%;
  color: white;
`;

const flipVariants = {
  checked: {
    rotateY: 180,
    transition: {
      duration: 0.6,
      ease: [0.4, 0, 0.2, 1]
    }
  },
  unchecked: {
    rotateY: 0,
    transition: {
      duration: 0.6,
      ease: [0.4, 0, 0.2, 1]
    }
  }
};

const Checkbox_45 = ({ value, onChange, disabled = false, size = 'medium' }) => {
  return (
    <Container disabled={disabled} onClick={() => !disabled && onChange(!value)}>
      <HiddenInput checked={value} readOnly />
      <FlipBox size={size} variants={flipVariants} animate={value ? 'checked' : 'unchecked'}>
        <FrontFace />
        <BackFace>
          <CheckMark viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <motion.path d="M20 6L9 17L4 12" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.3, delay: 0.2 }} />
          </CheckMark>
        </BackFace>
      </FlipBox>
    </Container>
  );
};

export default Checkbox_45;
