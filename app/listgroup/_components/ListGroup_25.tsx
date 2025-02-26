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

const sunsetGlow = keyframes`
  0%, 100% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
`;

const warmBreeze = keyframes`
  0% {
    transform: translateX(0) translateY(0);
  }
  50% {
    transform: translateX(3px) translateY(-2px);
  }
  100% {
    transform: translateX(0) translateY(0);
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Container = styled.div`
  width: 100%;
  max-width: 600px;
  background: linear-gradient(135deg, #ff8c42, #ff5733);
  border-radius: 20px;
  padding: 16px;
  box-shadow: 
    0 10px 30px rgba(255, 140, 66, 0.2),
    0 1px 3px rgba(255, 87, 51, 0.1);
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
      rgba(255, 255, 255, 0.1),
      rgba(255, 255, 255, 0.2),
      rgba(255, 255, 255, 0.1)
    );
    background-size: 200% 100%;
    animation: ${sunsetGlow} 15s ease infinite;
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
`;

const ListItem = styled.li<{ $active: boolean; $disabled: boolean }>`
  padding: 16px;
  background: ${props => props.$active ? 
    'rgba(255, 255, 255, 0.15)' : 
    'rgba(255, 255, 255, 0.1)'
  };
  border: 1px solid ${props => props.$active ? 
    'rgba(255, 255, 255, 0.3)' : 
    'rgba(255, 255, 255, 0.1)'
  };
  border-radius: 12px;
  cursor: ${props => props.$disabled ? 'not-allowed' : 'pointer'};
  opacity: ${props => props.$disabled ? 0.6 : 1};
  display: flex;
  align-items: center;
  gap: 16px;
  transition: all 0.3s ease;
  position: relative;
  backdrop-filter: blur(10px);
  animation: ${fadeIn} 0.5s ease-out;

  ${props => props.$active && css`
    animation: ${warmBreeze} 4s ease-in-out infinite;
    box-shadow: 0 0 20px rgba(255, 255, 255, 0.1);
  `}

  &:hover {
    ${props => !props.$disabled && !props.$active && css`
      transform: translateY(-2px);
      background: rgba(255, 255, 255, 0.2);
      border-color: rgba(255, 255, 255, 0.4);
    `}
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      135deg,
      rgba(255, 255, 255, 0.1) 0%,
      rgba(255, 255, 255, 0) 100%
    );
    border-radius: inherit;
    opacity: ${props => props.$active ? 0.2 : 0};
    transition: opacity 0.3s ease;
  }
`;

const IconWrapper = styled.div<{ $active: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  color: ${props => props.$active ? '#ffffff' : 'rgba(255, 255, 255, 0.8)'};
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  ${props => props.$active && css`
    animation: ${warmBreeze} 3s ease-in-out infinite;
  `}

  &::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    right: -50%;
    bottom: -50%;
    background: linear-gradient(
      135deg,
      rgba(255, 255, 255, 0.2) 0%,
      rgba(255, 255, 255, 0) 100%
    );
    animation: ${sunsetGlow} 3s linear infinite;
    background-size: 200% 200%;
  }

  svg {
    width: 20px;
    height: 20px;
    position: relative;
    z-index: 1;
  }
`;

const Content = styled.div`
  flex: 1;
  position: relative;
  z-index: 1;
`;

const Title = styled.div<{ $active: boolean }>`
  color: ${props => props.$active ? '#ffffff' : 'rgba(255, 255, 255, 0.9)'};
  font-weight: 600;
  margin-bottom: 4px;
  font-family: 'DM Sans', sans-serif;
  font-size: 1.1rem;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
`;

const Description = styled.div<{ $active: boolean }>`
  color: ${props => props.$active ? 'rgba(255, 255, 255, 0.9)' : 'rgba(255, 255, 255, 0.7)'};
  font-size: 0.875rem;
  font-family: 'DM Sans', sans-serif;
`;

const Badge = styled.span<{ $color?: string }>`
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 500;
  background: ${props => props.$color || 'rgba(255, 255, 255, 0.15)'};
  color: ${props => props.$color ? 'white' : '#ffffff'};
  min-width: 20px;
  text-align: center;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(5px);
  position: relative;
  z-index: 1;
`;

const SunsetListGroup: React.FC<ListGroupProps> = ({
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

export default SunsetListGroup; 