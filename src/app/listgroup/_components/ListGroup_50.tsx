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

const sandStorm = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

const heatWave = keyframes`
  0% {
    transform: translateY(0) scaleX(1);
    opacity: 0.5;
  }
  50% {
    transform: translateY(-2px) scaleX(1.02);
    opacity: 0.8;
  }
  100% {
    transform: translateY(0) scaleX(1);
    opacity: 0.5;
  }
`;

const mirage = keyframes`
  0%, 100% {
    filter: blur(0px);
    transform: translateY(0);
  }
  50% {
    filter: blur(1px);
    transform: translateY(-1px);
  }
`;

const Container = styled.div`
  width: 100%;
  max-width: 600px;
  background: linear-gradient(135deg, #f4d03f 0%, #e67e22 100%);
  border: 2px solid #d35400;
  border-radius: 8px;
  padding: 24px;
  position: relative;
  overflow: hidden;
  box-shadow: 
    0 10px 30px rgba(211, 84, 0, 0.2),
    inset 0 0 60px rgba(244, 208, 63, 0.3);

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23d35400' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E");
    animation: ${sandStorm} 30s linear infinite;
    opacity: 0.5;
  }

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(
      to bottom,
      transparent 0%,
      rgba(231, 76, 60, 0.1) 100%
    );
    animation: ${heatWave} 3s ease-in-out infinite;
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
    'rgba(230, 126, 34, 0.4)' : 
    'rgba(244, 208, 63, 0.2)'
  };
  border: 1px solid ${props => props.$active ? 
    '#d35400' : 
    '#e67e22'
  };
  border-radius: 6px;
  cursor: ${props => props.$disabled ? 'not-allowed' : 'pointer'};
  opacity: ${props => props.$disabled ? 0.5 : 1};
  display: flex;
  align-items: center;
  gap: 16px;
  transition: all 0.3s ease;
  position: relative;
  backdrop-filter: blur(2px);

  ${props => props.$active && css`
    &::before {
      content: '';
      position: absolute;
      inset: 0;
      background: linear-gradient(
        45deg,
        transparent,
        rgba(231, 76, 60, 0.2),
        transparent
      );
      animation: ${mirage} 2s ease-in-out infinite;
    }
  `}

  &:hover {
    ${props => !props.$disabled && !props.$active && css`
      transform: translateY(-1px);
      background: rgba(230, 126, 34, 0.2);
      border-color: #d35400;
      box-shadow: 0 4px 12px rgba(211, 84, 0, 0.1);
    `}
  }
`;

const IconWrapper = styled.div<{ $active: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  color: ${props => props.$active ? '#d35400' : '#e67e22'};
  background: rgba(244, 208, 63, 0.2);
  border: 1px solid ${props => props.$active ? '#d35400' : '#e67e22'};
  border-radius: 50%;
  position: relative;
  overflow: hidden;

  ${props => props.$active && css`
    &::after {
      content: '';
      position: absolute;
      inset: 0;
      background: radial-gradient(
        circle at 50% 50%,
        rgba(231, 76, 60, 0.2),
        transparent
      );
      animation: ${heatWave} 2s ease-in-out infinite;
    }
  `}

  svg {
    width: 20px;
    height: 20px;
    filter: drop-shadow(0 2px 4px rgba(211, 84, 0, 0.3));
  }
`;

const Content = styled.div`
  flex: 1;
`;

const Title = styled.div<{ $active: boolean }>`
  color: ${props => props.$active ? '#d35400' : '#e67e22'};
  font-weight: 600;
  margin-bottom: 4px;
  font-family: 'Amatic SC', cursive;
  font-size: 1.3rem;
  letter-spacing: 0.02em;
  text-shadow: ${props => props.$active ? 
    '0 2px 4px rgba(211, 84, 0, 0.3)' : 
    'none'
  };
`;

const Description = styled.div<{ $active: boolean }>`
  color: ${props => props.$active ? 
    '#c0392b' : 
    '#d35400'
  };
  font-size: 0.875rem;
  font-family: 'Dosis', sans-serif;
  letter-spacing: 0.01em;
`;

const Badge = styled.span<{ $color?: string }>`
  padding: 4px 12px;
  background: ${props => props.$color || 'rgba(231, 76, 60, 0.2)'};
  color: ${props => props.$color ? '#ffffff' : '#d35400'};
  font-size: 0.75rem;
  font-weight: 500;
  border: 1px solid ${props => props.$color || '#e67e22'};
  border-radius: 4px;
  min-width: 20px;
  text-align: center;
  font-family: 'Dosis', sans-serif;
  letter-spacing: 0.02em;
  position: relative;
  overflow: hidden;

  ${props => !props.$color && css`
    &::before {
      content: '';
      position: absolute;
      inset: 0;
      background: linear-gradient(
        45deg,
        transparent,
        rgba(231, 76, 60, 0.2),
        transparent
      );
      animation: ${mirage} 2s ease-in-out infinite;
    }
  `}
`;

const DesertListGroup: React.FC<ListGroupProps> = ({
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

export default DesertListGroup; 