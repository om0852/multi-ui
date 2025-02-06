import React from 'react';
import styled from 'styled-components';

interface LoaderProps {
  size?: 'small' | 'medium' | 'large';
  color?: string;
  className?: string;
}

const HeartLoader: React.FC<LoaderProps> = ({
  size = 'medium',
  color = '#5858FF',
  className
}) => {
  return (
    <StyledWrapper className={className}>
      <div className="loader" />
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .loader {
    position: relative;
    width: 120px;
    height: 90px;
    margin: 0 auto;
  }

  .loader:before {
    content: "";
    position: absolute;
    bottom: 30px;
    left: 50px;
    height: 25px;
    width: 25px;
    background: #5858FF;
    clip-path: path('M12.5 0C5.597 0 0 5.27 0 11.776c0 8.01 7.846 12.275 10.833 14.224 1.75 1.143 1.667 1.143 3.334 0C17.153 24.05 25 19.785 25 11.776 25 5.27 19.403 0 12.5 0z');
    animation: loading-heart 0.5s ease-in-out infinite alternate;
  }

  .loader:after {
    content: "";
    position: absolute;
    right: 0;
    top: 0;
    height: 7px;
    width: 45px;
    border-radius: 4px;
    box-shadow: 0 5px 0 #f2f2f2, -35px 50px 0 #f2f2f2, -70px 95px 0 #f2f2f2;
    animation: loading-path 1s ease-in-out infinite;
  }

  @keyframes loading-heart {
    0% {
      transform: scale(1, 0.7);
      filter: brightness(1);
    }

    40% {
      transform: scale(0.8, 1.2);
      filter: brightness(1.5);
    }

    60% {
      transform: scale(1.1, 0.9);
      filter: brightness(1.2);
    }

    100% {
      bottom: 140px;
      transform: scale(1);
      filter: brightness(1);
    }
  }

  @keyframes loading-path {
    0% {
      box-shadow: 0 10px 0 rgba(0, 0, 0, 0),
              0 10px 0 #f2f2f2,
              -35px 50px 0 #f2f2f2,
              -70px 90px 0 #f2f2f2;
    }

    100% {
      box-shadow: 0 10px 0 #f2f2f2,
              -35px 50px 0 #f2f2f2,
              -70px 90px 0 #f2f2f2,
              -70px 90px 0 rgba(0, 0, 0, 0);
    }
  }
`;

export default HeartLoader; 