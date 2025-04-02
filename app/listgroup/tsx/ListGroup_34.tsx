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

const leafSway = keyframes`
  0%, 100% {
    transform: rotate(-3deg) scale(1);
  }
  50% {
    transform: rotate(3deg) scale(1.05);
  }
`;

const growVine = keyframes`
  0% {
    transform: scaleX(0);
    opacity: 0;
  }
  100% {
    transform: scaleX(1);
    opacity: 1;
  }
`;

const bloomEffect = keyframes`
  0% {
    filter: saturate(0.8) brightness(0.9);
  }
  50% {
    filter: saturate(1.2) brightness(1.1);
  }
  100% {
    filter: saturate(0.8) brightness(0.9);
  }
`;

const Container = styled.div`
  width: 100%;
  max-width: 600px;
  background: #f4f8f4;
  border-radius: 20px;
  padding: 24px;
  box-shadow: 
    0 10px 30px rgba(76, 175, 80, 0.1),
    inset 0 0 60px rgba(76, 175, 80, 0.05);
  position: relative;
  overflow: hidden;

  &::before {
    content: '🌿';
    position: absolute;
    top: 10px;
    right: 15px;
    font-size: 2rem;
    opacity: 0.2;
    animation: ${leafSway} 4s ease-in-out infinite;
    transform-origin: bottom center;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, 
      #4CAF50,
      #81C784,
      #4CAF50
    );
    transform-origin: left;
    animation: ${growVine} 2s ease-out forwards;
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
  background: ${props => props.$active ? '#ffffff' : 'rgba(255, 255, 255, 0.7)'};
  border: 2px solid ${props => props.$active ? '#4CAF50' : '#A5D6A7'};
  border-radius: 12px;
  cursor: ${props => props.$disabled ? 'not-allowed' : 'pointer'};
  opacity: ${props => props.$disabled ? 0.6 : 1};
  display: flex;
  align-items: center;
  gap: 16px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;

  ${props => props.$active && css`
    box-shadow: 0 4px 15px rgba(76, 175, 80, 0.15);
    animation: ${bloomEffect} 3s ease-in-out infinite;

    &::before {
      content: '🌱';
      position: absolute;
      left: -5px;
      top: 50%;
      transform: translateY(-50%);
      font-size: 1.2rem;
      opacity: 0.5;
    }

    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: radial-gradient(
        circle at center,
        rgba(76, 175, 80, 0.1),
        transparent 70%
      );
      pointer-events: none;
    }
  `}

  &:hover {
    ${props => !props.$disabled && !props.$active && css`
      transform: translateY(-2px);
      border-color: #66BB6A;
      background: #ffffff;
      box-shadow: 0 4px 12px rgba(76, 175, 80, 0.1);
    `}
  }
`;

const IconWrapper = styled.div<{ $active: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  color: ${props => props.$active ? '#2E7D32' : '#66BB6A'};
  background: ${props => props.$active ? 
    'rgba(76, 175, 80, 0.1)' : 
    'rgba(76, 175, 80, 0.05)'
  };
  border-radius: 50%;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  ${props => props.$active && css`
    animation: ${leafSway} 3s ease-in-out infinite;
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
  color: ${props => props.$active ? '#2E7D32' : '#388E3C'};
  font-weight: 600;
  margin-bottom: 4px;
  font-family: 'Libre Baskerville', serif;
  font-size: 1.1rem;
  letter-spacing: 0.01em;
`;

const Description = styled.div<{ $active: boolean }>`
  color: ${props => props.$active ? '#388E3C' : '#66BB6A'};
  font-size: 0.875rem;
  font-family: 'Source Sans Pro', sans-serif;
  letter-spacing: 0.01em;
  line-height: 1.4;
`;

const Badge = styled.span<{ $color?: string }>`
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 500;
  background: ${props => props.$color || 'rgba(76, 175, 80, 0.1)'};
  color: ${props => props.$color ? 'white' : '#2E7D32'};
  min-width: 20px;
  text-align: center;
  font-family: 'Source Sans Pro', sans-serif;
  letter-spacing: 0.02em;
  border: 1px solid ${props => props.$color || 'rgba(76, 175, 80, 0.2)'};
  box-shadow: 0 2px 6px rgba(76, 175, 80, 0.1);

  &::before {
    content: '🍃';
    font-size: 0.8em;
    margin-right: 4px;
    opacity: 0.8;
  }
`;

const BotanicalListGroup: React.FC<ListGroupProps> = ({
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

export default BotanicalListGroup; 