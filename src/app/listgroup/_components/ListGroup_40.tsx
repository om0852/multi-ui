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

const filmGrain = keyframes`
  0%, 100% {
    background-position: 0 0;
  }
  10% {
    background-position: -5% -10%;
  }
  30% {
    background-position: 3% 14%;
  }
  50% {
    background-position: -10% 7%;
  }
  70% {
    background-position: 13% -7%;
  }
  90% {
    background-position: 7% 3%;
  }
`;

const shadowFlicker = keyframes`
  0%, 100% {
    box-shadow: 
      0 0 20px rgba(255, 255, 255, 0.1),
      0 0 30px rgba(255, 255, 255, 0.05);
  }
  50% {
    box-shadow: 
      0 0 25px rgba(255, 255, 255, 0.15),
      0 0 35px rgba(255, 255, 255, 0.07);
  }
`;

const lightBeam = keyframes`
  0%, 100% {
    opacity: 0.3;
    transform: rotate(-15deg) translateX(-10%);
  }
  50% {
    opacity: 0.4;
    transform: rotate(-12deg) translateX(-8%);
  }
`;

const Container = styled.div`
  width: 100%;
  max-width: 600px;
  background: #111111;
  border-radius: 4px;
  padding: 24px;
  position: relative;
  overflow: hidden;
  box-shadow: 
    0 10px 30px rgba(0, 0, 0, 0.8),
    inset 0 0 60px rgba(0, 0, 0, 0.6);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyBAMAAADsEZWCAAAAGFBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAVfJ/YAAAACHRSTlMzMzMzMzMzM85JBgUAAAABYktHRAH/Ai3eAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAPklEQVQ4y2NgQAX8DKiAA4NhmOYnIGg0gCrxn4EBVf1HsF6G/2hm/EdTz4Bs3v+hYP7/QXC7/sPxAULuHwDaShAU9Yc0YAAAAABJRU5ErkJggg==');
    opacity: 0.05;
    animation: ${filmGrain} 0.5s steps(4) infinite;
    pointer-events: none;
  }

  &::after {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: linear-gradient(
      45deg,
      transparent 30%,
      rgba(255, 255, 255, 0.1) 50%,
      transparent 70%
    );
    animation: ${lightBeam} 4s ease-in-out infinite;
    pointer-events: none;
  }
`;

const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 12px;
  position: relative;
  z-index: 1;
`;

const ListItem = styled.li<{ $active: boolean; $disabled: boolean }>`
  padding: 16px;
  background: ${props => props.$active ? 
    'rgba(255, 255, 255, 0.05)' : 
    'rgba(255, 255, 255, 0.02)'
  };
  border: 1px solid ${props => props.$active ? 
    'rgba(255, 255, 255, 0.2)' : 
    'rgba(255, 255, 255, 0.1)'
  };
  cursor: ${props => props.$disabled ? 'not-allowed' : 'pointer'};
  opacity: ${props => props.$disabled ? 0.5 : 1};
  display: flex;
  align-items: center;
  gap: 16px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  backdrop-filter: blur(10px);

  ${props => props.$active && css`
    animation: ${shadowFlicker} 2s ease-in-out infinite;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: radial-gradient(
        circle at 30% 50%,
        rgba(255, 255, 255, 0.1),
        transparent 70%
      );
      pointer-events: none;
    }
  `}

  &:hover {
    ${props => !props.$disabled && !props.$active && css`
      transform: translateX(8px);
      background: rgba(255, 255, 255, 0.03);
      border-color: rgba(255, 255, 255, 0.15);
    `}
  }
`;

const IconWrapper = styled.div<{ $active: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  color: ${props => props.$active ? '#ffffff' : 'rgba(255, 255, 255, 0.7)'};
  background: ${props => props.$active ? 
    'rgba(255, 255, 255, 0.1)' : 
    'rgba(255, 255, 255, 0.05)'
  };
  border-radius: 50%;
  position: relative;
  overflow: hidden;

  ${props => props.$active && css`
    &::after {
      content: '';
      position: absolute;
      top: -50%;
      left: -50%;
      width: 200%;
      height: 200%;
      background: radial-gradient(
        circle at center,
        rgba(255, 255, 255, 0.2),
        transparent 70%
      );
      animation: ${lightBeam} 4s ease-in-out infinite;
    }
  `}

  svg {
    width: 20px;
    height: 20px;
    filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.5));
  }
`;

const Content = styled.div`
  flex: 1;
`;

const Title = styled.div<{ $active: boolean }>`
  color: ${props => props.$active ? '#ffffff' : 'rgba(255, 255, 255, 0.9)'};
  font-weight: 500;
  margin-bottom: 4px;
  font-family: 'Courier Prime', monospace;
  font-size: 1rem;
  letter-spacing: 0.05em;
  text-shadow: ${props => props.$active ? 
    '0 0 10px rgba(255, 255, 255, 0.3)' : 
    'none'
  };
`;

const Description = styled.div<{ $active: boolean }>`
  color: ${props => props.$active ? 
    'rgba(255, 255, 255, 0.8)' : 
    'rgba(255, 255, 255, 0.6)'
  };
  font-size: 0.875rem;
  font-family: 'Courier Prime', monospace;
  font-style: italic;
  letter-spacing: 0.02em;
`;

const Badge = styled.span<{ $color?: string }>`
  padding: 4px 12px;
  background: ${props => props.$color || 'rgba(255, 255, 255, 0.1)'};
  color: ${props => props.$color ? '#000000' : '#ffffff'};
  font-size: 0.75rem;
  font-weight: 500;
  font-family: 'Courier Prime', monospace;
  letter-spacing: 0.05em;
  border: 1px solid rgba(255, 255, 255, 0.2);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(
      circle at center,
      rgba(255, 255, 255, 0.2),
      transparent 70%
    );
    animation: ${lightBeam} 4s ease-in-out infinite;
  }
`;

const NoireListGroup: React.FC<ListGroupProps> = ({
  items,
  onSelect,
  className,
  activeItem,
}) => {
  return (
    <Container className={className}>
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

export default NoireListGroup; 