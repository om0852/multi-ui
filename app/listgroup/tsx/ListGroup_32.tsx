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

const waveFlow = keyframes`
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

const palmSway = keyframes`
  0%, 100% {
    transform: rotate(-2deg);
  }
  50% {
    transform: rotate(2deg);
  }
`;

const sunGlow = keyframes`
  0%, 100% {
    opacity: 0.8;
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(1.05);
  }
`;

const Container = styled.div`
  width: 100%;
  max-width: 600px;
  background: linear-gradient(135deg, #87CEEB, #00CED1);
  border-radius: 20px;
  padding: 24px;
  box-shadow: 
    0 10px 30px rgba(0, 206, 209, 0.2),
    inset 0 0 60px rgba(255, 255, 255, 0.2);
  position: relative;
  overflow: hidden;

  &::before {
    content: '🌴';
    position: absolute;
    top: 10px;
    right: 20px;
    font-size: 2rem;
    opacity: 0.3;
    animation: ${palmSway} 4s ease-in-out infinite;
    transform-origin: bottom center;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 6px;
    background: linear-gradient(90deg, 
      #FFB6C1,
      #87CEEB,
      #98FB98,
      #FFB6C1
    );
    background-size: 300% 100%;
    animation: ${waveFlow} 10s linear infinite;
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
    'rgba(255, 255, 255, 0.25)' : 
    'rgba(255, 255, 255, 0.15)'
  };
  border: 2px solid ${props => props.$active ? 
    'rgba(255, 255, 255, 0.8)' : 
    'rgba(255, 255, 255, 0.3)'
  };
  border-radius: 15px;
  cursor: ${props => props.$disabled ? 'not-allowed' : 'pointer'};
  opacity: ${props => props.$disabled ? 0.6 : 1};
  display: flex;
  align-items: center;
  gap: 16px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  backdrop-filter: blur(10px);

  ${props => props.$active && css`
    &::before {
      content: '🌊';
      position: absolute;
      left: -15px;
      top: 50%;
      transform: translateY(-50%);
      font-size: 1.2rem;
      animation: ${waveFlow} 2s linear infinite;
    }
  `}

  &:hover {
    ${props => !props.$disabled && !props.$active && css`
      transform: translateY(-3px);
      background: rgba(255, 255, 255, 0.2);
      border-color: rgba(255, 255, 255, 0.5);
      box-shadow: 0 5px 15px rgba(0, 206, 209, 0.2);
    `}
  }
`;

const IconWrapper = styled.div<{ $active: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  color: ${props => props.$active ? '#FFFFFF' : 'rgba(255, 255, 255, 0.8)'};
  background: ${props => props.$active ? 
    'rgba(255, 255, 255, 0.25)' : 
    'rgba(255, 255, 255, 0.1)'
  };
  border-radius: 12px;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  ${props => props.$active && css`
    animation: ${sunGlow} 3s ease-in-out infinite;
  `}

  svg {
    width: 20px;
    height: 20px;
    filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));
  }
`;

const Content = styled.div`
  flex: 1;
`;

const Title = styled.div<{ $active: boolean }>`
  color: ${props => props.$active ? '#FFFFFF' : 'rgba(255, 255, 255, 0.9)'};
  font-weight: 600;
  margin-bottom: 4px;
  font-family: 'Montserrat', sans-serif;
  font-size: 1.1rem;
  letter-spacing: 0.02em;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Description = styled.div<{ $active: boolean }>`
  color: ${props => props.$active ? 
    'rgba(255, 255, 255, 0.9)' : 
    'rgba(255, 255, 255, 0.7)'
  };
  font-size: 0.875rem;
  font-family: 'Montserrat', sans-serif;
  letter-spacing: 0.01em;
`;

const Badge = styled.span<{ $color?: string }>`
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 600;
  background: ${props => props.$color || 'rgba(255, 255, 255, 0.2)'};
  color: ${props => props.$color ? 'white' : '#FFFFFF'};
  min-width: 20px;
  text-align: center;
  font-family: 'Montserrat', sans-serif;
  letter-spacing: 0.02em;
  border: 2px solid ${props => props.$color || 'rgba(255, 255, 255, 0.3)'};
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
`;

const TropicalListGroup: React.FC<ListGroupProps> = ({
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

export default TropicalListGroup; 