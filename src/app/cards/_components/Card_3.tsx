'use client'
import React from 'react';
import styled from 'styled-components';

interface CardProps {
  title: string;
  icon: React.ReactNode;
  width?: string;
  height?: string;
}

const Overlay = styled.div`
  width: 10px;
  height: 10px;
  position: absolute;
  margin:auto;
  border-radius: 50%;
  background: #ceb2fc;
  z-index: 0;
  transition: transform 0.3s ease-out;
`;

const IconWrapper = styled.div`
  width: 131px;
  height: 131px;
  border-radius: 50%;
  background: #fff;
  border: 2px solid #ceb2fc;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 1;
  transition: all 0.3s ease-out;

  &:after {
    content: "";
    width: 118px;
    height: 118px;
    background: #ceb2fc;
    border-radius: 50%;
    position: absolute;
    top: 7px;
    left: 7px;
    transition: opacity 0.3s ease-out;
  }
`;

const Title = styled.p`
  font-size: 17px;
  color: #4c5656;
  margin-top: 30px;
  z-index: 1000;
  transition: color 0.3s ease-out;
`;


const CardWrapper = styled.div`
 width: ${(props) => props.width};
  height: ${(props) => props.height};
  background: #fff;
  border-top-right-radius: 10px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  box-shadow: 0 14px 26px rgba(0, 0, 0, 0.04);
  transition: all 0.3s ease-out;
  text-decoration: none;

  &:hover {
    transform: translateY(-5px) scale(1.005);
    box-shadow: 0 24px 36px rgba(0, 0, 0, 0.11), 0 24px 46px rgba(206, 178, 252, 0.48);
  }

  &:hover ${Overlay} {
    transform: scale(60);
  }

  &:hover ${IconWrapper} {
    border-color: #f0e7ff;
    background: #ceb2fc;
  }

  &:hover ${Title} {
    color: #fff;
  }
`;


const Card_3: React.FC<CardProps> = ({ title, icon ,width = "220px", height = "321px"}) => {

  return (
    <CardWrapper width={width} height={height}>
      <Overlay />
      <IconWrapper>{icon}</IconWrapper>
      <Title>{title}</Title>
    </CardWrapper>
  );
};

export default Card_3;
