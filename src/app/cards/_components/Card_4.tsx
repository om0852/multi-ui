'use client'
import React from 'react';
import styled from 'styled-components';

const CardWrapper = styled.div`
  position: relative;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background-color: #000;
  display: flex;
  flex-direction: column;
  justify-content: end;
  margin: 12px;
  gap: 12px;
  border-radius: 8px;
  cursor: pointer;
  color: white;

  &::before {
   content: '';
  position: absolute;
  inset: 0;
  left: -5px;
  margin: auto;
  width: calc(100% + 10px);
  height: calc(100% + 10px);
  border-radius: 10px;
  background: linear-gradient(-45deg, #e81cff 0%, #40c9ff 100% );
  z-index: -10;
  pointer-events: none;
  transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }

  &::after {
    content: "";
  z-index: -1;
  position: absolute;
  inset: 0;
  background: linear-gradient(-45deg, #fc00ff 0%, #00dbde 100% );
  transform: translate3d(0, 0, 0) scale(0.95);
  filter: blur(20px);
  }

  &:hover::after {
    filter: blur(30px);
  }

  &:hover::before {
    transform: rotate(-180deg) ;
  }
`;



const Card = ({height,width, children }) => {
  return <CardWrapper  width={width} height={height}>{children}</CardWrapper>;
};

export default Card;
