"use client";
import React from 'react';
import styled, { keyframes, css } from 'styled-components';

interface ListGroupProps {
  items: ListGroupItem[];
  onSelect?: (item: ListGroupItem) => void;
  className?: string;
  activeItem?: string;
}

interface ListGroupItem {
  id: string;
  title: string;
  description?: string;
  icon?: React.ReactNode;
  badge?: string | number;
  badgeColor?: string;
  disabled?: boolean;
}

const pixelate = keyframes`
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: 32px 32px;
  }
`;

const glitch = keyframes`
  0% {
    clip-path: inset(40% 0 61% 0);
    transform: translate(-2px, 2px);
  }
  20% {
    clip-path: inset(92% 0 1% 0);
    transform: translate(1px, -3px);
  }
  40% {
    clip-path: inset(43% 0 1% 0);
    transform: translate(-1px, 3px);
  }
  60% {
    clip-path: inset(25% 0 58% 0);
    transform: translate(3px, 1px);
  }
  80% {
    clip-path: inset(54% 0 7% 0);
    transform: translate(-3px, -2px);
  }
  100% {
    clip-path: inset(58% 0 43% 0);
    transform: translate(2px, 2px);
  }
`;

const scanline = keyframes`
  0% {
    transform: translateY(-100%);
  }
  100% {
    transform: translateY(100%);
  }
`;

const Container = styled.div`
  width: 100%;
  max-width: 600px;
  background: #000000;
  border: 4px solid #33ff33;
  padding: 24px;
  position: relative;
  overflow: hidden;
  image-rendering: pixelated;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: 
      linear-gradient(
        to bottom,
        transparent 50%,
        rgba(51, 255, 51, 0.1) 50%
      );
    background-size: 100% 4px;
    pointer-events: none;
    animation: ${scanline} 4s linear infinite;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: 
      linear-gradient(
        45deg,
        #000000 25%,
        transparent 25%
      ),
      linear-gradient(
        -45deg,
        #000000 25%,
        transparent 25%
      );
    background-size: 4px 4px;
    opacity: 0.1;
    animation: ${pixelate} 1s steps(8) infinite;
  }
`;

const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
  position: relative;
  z-index: 1;
`;

const ListItem = styled.li<{ $active: boolean; $disabled: boolean }>`
  padding: 16px;
  background: ${props => props.$active ? 
    '#001100' : 
    '#000000'
  };
  border: 2px solid ${props => props.$active ? 
    '#33ff33' : 
    '#006600'
  };
  cursor: ${props => props.$disabled ? 'not-allowed' : 'pointer'};
  opacity: ${props => props.$disabled ? 0.5 : 1};
  display: flex;
  align-items: center;
  gap: 16px;
  transition: all 0.1s steps(4);
  position: relative;
  image-rendering: pixelated;

  ${props => props.$active && css`
    &::before {
      content: '>';
      position: absolute;
      left: 4px;
      color: #33ff33;
      font-family: 'Press Start 2P', monospace;
      font-size: 12px;
      animation: ${glitch} 0.5s steps(2) infinite;
    }
  `}

  &:hover {
    ${props => !props.$disabled && !props.$active && css`
      transform: translateX(4px);
      background: #001100;
      border-color: #00ff00;
    `}
  }
`;

const IconWrapper = styled.div<{ $active: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  color: ${props => props.$active ? '#33ff33' : '#006600'};
  border: 2px solid ${props => props.$active ? '#33ff33' : '#006600'};
  position: relative;
  image-rendering: pixelated;

  svg {
    width: 16px;
    height: 16px;
    transform: scale(1.2);
    filter: url(#pixel);
  }
`;

const Content = styled.div`
  flex: 1;
`;

const Title = styled.div<{ $active: boolean }>`
  color: ${props => props.$active ? '#33ff33' : '#00cc00'};
  font-weight: 400;
  margin-bottom: 4px;
  font-family: 'Press Start 2P', monospace;
  font-size: 0.875rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  text-shadow: ${props => props.$active ? 
    '2px 2px #001100, -2px -2px #001100, 2px -2px #001100, -2px 2px #001100' : 
    'none'
  };
`;

const Description = styled.div<{ $active: boolean }>`
  color: ${props => props.$active ? 
    '#00cc00' : 
    '#009900'
  };
  font-size: 0.75rem;
  font-family: 'Press Start 2P', monospace;
  letter-spacing: 0.1em;
`;

const Badge = styled.span<{ $color?: string }>`
  padding: 4px 8px;
  background: ${props => props.$color || '#001100'};
  color: ${props => props.$color ? '#000000' : '#33ff33'};
  font-size: 0.75rem;
  font-family: 'Press Start 2P', monospace;
  letter-spacing: 0.1em;
  border: 2px solid ${props => props.$color || '#33ff33'};
  position: relative;
  image-rendering: pixelated;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: 
      linear-gradient(
        45deg,
        rgba(51, 255, 51, 0.1) 25%,
        transparent 25%
      );
    background-size: 2px 2px;
    animation: ${pixelate} 0.5s steps(4) infinite;
  }
`;

const PixelListGroup: React.FC<ListGroupProps> = ({
  items,
  onSelect,
  className,
  activeItem,
}) => {
  return (
    <Container className={className}>
      <svg style={{ position: 'absolute', width: 0, height: 0 }}>
        <defs>
          <filter id="pixel">
            <feFlood x="0" y="0" width="2" height="2" />
            <feComposite width="2" height="2" />
            <feMorphology operator="dilate" radius="1" />
          </filter>
        </defs>
      </svg>
      <List>
        {items.map((item) => (
          <ListItem
            key={item.id}
            $active={activeItem === item.id}
            $disabled={!!item.disabled}
            onClick={() => !item.disabled && onSelect?.(item)}
          >
            {item.icon && (
              <IconWrapper $active={activeItem === item.id}>
                {item.icon}
              </IconWrapper>
            )}
            <Content>
              <Title $active={activeItem === item.id}>{item.title}</Title>
              {item.description && (
                <Description $active={activeItem === item.id}>
                  {item.description}
                </Description>
              )}
            </Content>
            {item.badge && (
              <Badge $color={item.badgeColor}>
                {item.badge}
              </Badge>
            )}
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default PixelListGroup; 