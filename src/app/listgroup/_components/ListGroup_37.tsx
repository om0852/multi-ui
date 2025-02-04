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

const gearSpin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const steamRelease = keyframes`
  0% {
    opacity: 0;
    transform: translateY(0);
  }
  50% {
    opacity: 0.5;
  }
  100% {
    opacity: 0;
    transform: translateY(-20px);
  }
`;

const metalShine = keyframes`
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
  background: linear-gradient(135deg, #2c3137, #1a1d21);
  border-radius: 8px;
  padding: 24px;
  box-shadow: 
    0 10px 30px rgba(0, 0, 0, 0.3),
    inset 0 2px 0 rgba(255, 255, 255, 0.1),
    inset 0 -2px 0 rgba(0, 0, 0, 0.2);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: 
      repeating-linear-gradient(
        45deg,
        rgba(0, 0, 0, 0.1) 0px,
        rgba(0, 0, 0, 0.1) 2px,
        transparent 2px,
        transparent 4px
      );
  }

  &::after {
    content: '⚙️';
    position: absolute;
    top: 10px;
    right: 10px;
    font-size: 24px;
    opacity: 0.2;
    animation: ${gearSpin} 10s linear infinite;
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
    'linear-gradient(135deg, #3d444c, #2c3137)' : 
    'linear-gradient(135deg, #2c3137, #1a1d21)'
  };
  border: 2px solid ${props => props.$active ? 
    '#4a5058' : 
    '#2c3137'
  };
  border-radius: 4px;
  cursor: ${props => props.$disabled ? 'not-allowed' : 'pointer'};
  opacity: ${props => props.$disabled ? 0.5 : 1};
  display: flex;
  align-items: center;
  gap: 16px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.1),
      transparent
    );
  }

  ${props => props.$active && css`
    &::after {
      content: '';
      position: absolute;
      top: -10px;
      left: 50%;
      transform: translateX(-50%);
      width: 2px;
      height: 10px;
      background: rgba(255, 255, 255, 0.1);
      animation: ${steamRelease} 2s ease-out infinite;
    }
  `}

  &:hover {
    ${props => !props.$disabled && !props.$active && css`
      transform: translateY(-2px);
      background: linear-gradient(135deg, #3d444c, #2c3137);
      border-color: #4a5058;
      box-shadow: 
        0 5px 15px rgba(0, 0, 0, 0.2),
        inset 0 1px 0 rgba(255, 255, 255, 0.1);
    `}
  }
`;

const IconWrapper = styled.div<{ $active: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  color: ${props => props.$active ? '#e0e0e0' : '#a0a0a0'};
  background: ${props => props.$active ? 
    'linear-gradient(135deg, #4a5058, #3d444c)' : 
    'linear-gradient(135deg, #3d444c, #2c3137)'
  };
  border-radius: 4px;
  transition: all 0.3s ease;
  position: relative;
  border: 1px solid rgba(255, 255, 255, 0.1);

  ${props => props.$active && css`
    animation: ${gearSpin} 10s linear infinite;
    &::before {
      content: '';
      position: absolute;
      inset: 0;
      background: linear-gradient(
        90deg,
        transparent,
        rgba(255, 255, 255, 0.1),
        transparent
      );
      background-size: 200% 100%;
      animation: ${metalShine} 2s linear infinite;
    }
  `}

  svg {
    width: 20px;
    height: 20px;
  }
`;

const Content = styled.div`
  flex: 1;
`;

const Title = styled.div<{ $active: boolean }>`
  color: ${props => props.$active ? '#e0e0e0' : '#a0a0a0'};
  font-weight: 600;
  margin-bottom: 4px;
  font-family: 'Roboto Mono', monospace;
  font-size: 1rem;
  letter-spacing: 0.02em;
  text-transform: uppercase;
`;

const Description = styled.div<{ $active: boolean }>`
  color: ${props => props.$active ? 
    '#b0b0b0' : 
    '#808080'
  };
  font-size: 0.875rem;
  font-family: 'Roboto Mono', monospace;
  letter-spacing: 0.01em;
`;

const Badge = styled.span<{ $color?: string }>`
  padding: 4px 12px;
  background: ${props => props.$color || 'linear-gradient(135deg, #4a5058, #3d444c)'};
  color: ${props => props.$color ? 'white' : '#e0e0e0'};
  font-size: 0.75rem;
  font-weight: 500;
  border-radius: 2px;
  min-width: 20px;
  text-align: center;
  font-family: 'Roboto Mono', monospace;
  letter-spacing: 0.02em;
  border: 1px solid rgba(255, 255, 255, 0.1);
  position: relative;
  overflow: hidden;

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
      rgba(255, 255, 255, 0.1),
      transparent
    );
    background-size: 200% 100%;
    animation: ${metalShine} 2s linear infinite;
  }
`;

const IndustrialListGroup: React.FC<ListGroupProps> = ({
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

export default IndustrialListGroup; 