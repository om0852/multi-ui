import React from 'react';
import styled from 'styled-components';

interface LoaderProps {
  size?: 'small' | 'medium' | 'large';
  color?: string;
  className?: string;
}

const DiamondLoader: React.FC<LoaderProps> = ({
  size = 'medium',
  color = '#5858FF',
  className
}) => {
  return (
    <StyledWrapper className={className} size={size} color={color}>
      <div className="loader" />
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div<LoaderProps>`
  .loader {
    position: relative;
    width: ${props => props.size === 'small' ? '80px' : props.size === 'large' ? '160px' : '120px'};
    height: ${props => props.size === 'small' ? '60px' : props.size === 'large' ? '120px' : '90px'};
    margin: 0 auto;
  }

  .loader:before {
    content: "";
    position: absolute;
    bottom: 30px;
    left: 50px;
    height: ${props => props.size === 'small' ? '20px' : props.size === 'large' ? '30px' : '25px'};
    width: ${props => props.size === 'small' ? '20px' : props.size === 'large' ? '30px' : '25px'};
    background: ${props => props.color};
    clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
    animation: loading-diamond 0.5s ease-in-out infinite alternate;
  }

  .loader:after {
    content: "";
    position: absolute;
    right: 0;
    top: 0;
    height: 7px;
    width: 45px;
    border-radius: 4px;
    box-shadow: 0 5px 0 ${props => props.color}33, -35px 50px 0 ${props => props.color}33, -70px 95px 0 ${props => props.color}33;
    animation: loading-stairs 1s ease-in-out infinite;
  }

  @keyframes loading-diamond {
    0% {
      transform: scale(1, 0.7) rotate(0deg);
    }
    40% {
      transform: scale(0.8, 1.2) rotate(45deg);
    }
    60% {
      transform: scale(1, 1) rotate(90deg);
    }
    100% {
      bottom: 140px;
      transform: rotate(180deg);
    }
  }

  @keyframes loading-stairs {
    0% {
      box-shadow: 0 10px 0 rgba(0, 0, 0, 0),
              0 10px 0 ${props => props.color}33,
              -35px 50px 0 ${props => props.color}33,
              -70px 90px 0 ${props => props.color}33;
    }
    100% {
      box-shadow: 0 10px 0 ${props => props.color}33,
              -35px 50px 0 ${props => props.color}33,
              -70px 90px 0 ${props => props.color}33,
              -70px 90px 0 rgba(0, 0, 0, 0);
    }
  }
`;

export default DiamondLoader; 