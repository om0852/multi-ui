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

const candyStripes = keyframes`
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: 50px 50px;
  }
`;

const bounce = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-5px);
  }
`;

const wobble = keyframes`
  0%, 100% {
    transform: rotate(0deg);
  }
  25% {
    transform: rotate(-3deg);
  }
  75% {
    transform: rotate(3deg);
  }
`;

const Container = styled.div`
  width: 100%;
  max-width: 600px;
  background: #fff5f7;
  border-radius: 20px;
  padding: 20px;
  box-shadow: 
    0 10px 30px rgba(255, 182, 193, 0.2),
    0 0 0 10px #fff;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 8px;
    background: repeating-linear-gradient(
      45deg,
      #ffb6c1,
      #ffb6c1 10px,
      #ffc1cc 10px,
      #ffc1cc 20px
    );
    background-size: 28px 28px;
    animation: ${candyStripes} 20s linear infinite;
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
  background: ${props => props.$active ? '#ffd6e0' : '#ffffff'};
  border: 2px solid ${props => props.$active ? '#ff8da1' : '#ffc1cc'};
  border-radius: 15px;
  cursor: ${props => props.$disabled ? 'not-allowed' : 'pointer'};
  opacity: ${props => props.$disabled ? 0.6 : 1};
  display: flex;
  align-items: center;
  gap: 16px;
  transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  position: relative;
  animation: ${props => props.$active ? css`${wobble} 0.6s ease-in-out` : 'none'};

  &::before {
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    background: linear-gradient(45deg, #ff8da1, #ffc1cc);
    border-radius: 17px;
    z-index: -1;
    opacity: ${props => props.$active ? 0.5 : 0};
    transition: opacity 0.3s ease;
  }

  &:hover {
    ${props => !props.$disabled && !props.$active && css`
      transform: scale(1.02) translateY(-2px);
      border-color: #ff8da1;
      box-shadow: 0 5px 15px rgba(255, 141, 161, 0.2);
    `}
  }
`;

const IconWrapper = styled.div<{ $active: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: ${props => props.$active ? '#ff8da1' : '#ffd6e0'};
  border-radius: 12px;
  color: ${props => props.$active ? '#ffffff' : '#ff8da1'};
  transition: all 0.3s ease;
  animation: ${bounce} 2s ease-in-out infinite;

  svg {
    width: 20px;
    height: 20px;
  }
`;

const Content = styled.div`
  flex: 1;
`;

const Title = styled.div<{ $active: boolean }>`
  color: ${props => props.$active ? '#ff4d6d' : '#ff758f'};
  font-weight: 600;
  margin-bottom: 4px;
  font-family: 'Quicksand', sans-serif;
  font-size: 1.1rem;
  letter-spacing: 0.02em;
`;

const Description = styled.div<{ $active: boolean }>`
  color: ${props => props.$active ? '#ff758f' : '#ff8da1'};
  font-size: 0.875rem;
  font-family: 'Quicksand', sans-serif;
  letter-spacing: 0.01em;
`;

const Badge = styled.span<{ $color?: string }>`
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 600;
  background: ${props => props.$color || '#ffd6e0'};
  color: ${props => props.$color ? 'white' : '#ff4d6d'};
  min-width: 20px;
  text-align: center;
  font-family: 'Quicksand', sans-serif;
  letter-spacing: 0.02em;
  border: 2px solid ${props => props.$color || '#ffc1cc'};
  box-shadow: 0 2px 6px rgba(255, 141, 161, 0.2);
`;

const CandyListGroup: React.FC<ListGroupProps> = ({
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

export default CandyListGroup; 