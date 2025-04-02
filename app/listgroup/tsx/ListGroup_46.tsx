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

const snowfall = keyframes`
  0% {
    transform: translateY(-20px) rotate(0deg);
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    transform: translateY(100vh) rotate(360deg);
    opacity: 0;
  }
`;

const frostGrow = keyframes`
  0% {
    opacity: 0;
    transform: scale(0.95) rotate(0deg);
  }
  50% {
    opacity: 0.5;
    transform: scale(1.02) rotate(2deg);
  }
  100% {
    opacity: 0;
    transform: scale(0.95) rotate(0deg);
  }
`;

const iceShimmer = keyframes`
  0% {
    background-position: -200% center;
  }
  100% {
    background-position: 200% center;
  }
`;

const Container = styled.div`
  width: 100%;
  max-width: 600px;
  background: linear-gradient(135deg, #e3f2fd, #bbdefb);
  border-radius: 16px;
  padding: 24px;
  position: relative;
  overflow: hidden;
  box-shadow: 
    0 10px 30px rgba(144, 202, 249, 0.2),
    inset 0 0 60px rgba(255, 255, 255, 0.5);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      radial-gradient(
        circle at 20% 30%,
        rgba(255, 255, 255, 0.8) 0%,
        transparent 50%
      );
    opacity: 0.4;
  }

  &::after {
    content: '❄';
    position: absolute;
    color: white;
    font-size: 10px;
    animation: ${snowfall} 10s linear infinite;
    left: ${() => Math.random() * 100}%;
    opacity: 0.6;
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
    'rgba(255, 255, 255, 0.9)' : 
    'rgba(255, 255, 255, 0.6)'
  };
  border: 1px solid ${props => props.$active ? 
    'rgba(144, 202, 249, 0.6)' : 
    'rgba(144, 202, 249, 0.3)'
  };
  border-radius: 8px;
  cursor: ${props => props.$disabled ? 'not-allowed' : 'pointer'};
  opacity: ${props => props.$disabled ? 0.5 : 1};
  display: flex;
  align-items: center;
  gap: 16px;
  transition: all 0.3s ease;
  position: relative;
  backdrop-filter: blur(10px);

  ${props => props.$active && css`
    box-shadow: 
      0 4px 12px rgba(144, 202, 249, 0.2),
      inset 0 0 20px rgba(255, 255, 255, 0.5);

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(
        90deg,
        transparent,
        rgba(255, 255, 255, 0.8),
        transparent
      );
      background-size: 200% 100%;
      animation: ${iceShimmer} 2s linear infinite;
    }

    &::after {
      content: '';
      position: absolute;
      inset: 0;
      background: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100"><path d="M50 0 L100 50 L50 100 L0 50 Z" fill="none" stroke="rgba(255,255,255,0.5)" stroke-width="1"/></svg>');
      background-size: 20px 20px;
      opacity: 0.2;
      animation: ${frostGrow} 4s ease-in-out infinite;
    }
  `}

  &:hover {
    ${props => !props.$disabled && !props.$active && css`
      transform: translateY(-2px);
      background: rgba(255, 255, 255, 0.8);
      border-color: rgba(144, 202, 249, 0.5);
    `}
  }
`;

const IconWrapper = styled.div<{ $active: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  color: ${props => props.$active ? '#1e88e5' : '#64b5f6'};
  background: ${props => props.$active ? 
    'rgba(255, 255, 255, 0.9)' : 
    'rgba(255, 255, 255, 0.7)'
  };
  border-radius: 50%;
  position: relative;
  overflow: hidden;
  box-shadow: 
    0 2px 8px rgba(144, 202, 249, 0.2),
    inset 0 0 10px rgba(255, 255, 255, 0.5);

  ${props => props.$active && css`
    &::after {
      content: '';
      position: absolute;
      inset: 0;
      background: radial-gradient(
        circle at center,
        rgba(144, 202, 249, 0.3),
        transparent 70%
      );
      animation: ${frostGrow} 2s ease-in-out infinite;
    }
  `}

  svg {
    width: 20px;
    height: 20px;
    filter: drop-shadow(0 2px 4px rgba(144, 202, 249, 0.3));
  }
`;

const Content = styled.div`
  flex: 1;
`;

const Title = styled.div<{ $active: boolean }>`
  color: ${props => props.$active ? '#1e88e5' : '#42a5f5'};
  font-weight: 500;
  margin-bottom: 4px;
  font-family: 'Nunito', sans-serif;
  font-size: 1rem;
  letter-spacing: 0.02em;
  text-shadow: ${props => props.$active ? 
    '0 2px 4px rgba(144, 202, 249, 0.3)' : 
    'none'
  };
`;

const Description = styled.div<{ $active: boolean }>`
  color: ${props => props.$active ? 
    '#2196f3' : 
    '#64b5f6'
  };
  font-size: 0.875rem;
  font-family: 'Nunito', sans-serif;
  letter-spacing: 0.01em;
`;

const Badge = styled.span<{ $color?: string }>`
  padding: 4px 12px;
  background: ${props => props.$color || 'rgba(144, 202, 249, 0.2)'};
  color: ${props => props.$color ? '#ffffff' : '#1e88e5'};
  font-size: 0.75rem;
  font-weight: 500;
  border-radius: 12px;
  min-width: 20px;
  text-align: center;
  font-family: 'Nunito', sans-serif;
  letter-spacing: 0.02em;
  position: relative;
  overflow: hidden;
  backdrop-filter: blur(5px);
  box-shadow: 
    0 2px 8px rgba(144, 202, 249, 0.2),
    inset 0 0 10px rgba(255, 255, 255, 0.5);

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.8),
      transparent
    );
    background-size: 200% 100%;
    animation: ${iceShimmer} 2s linear infinite;
  }
`;

const FrostListGroup: React.FC<ListGroupProps> = ({
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

export default FrostListGroup; 