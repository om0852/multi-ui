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

const starTwinkle = keyframes`
  0%, 100% {
    opacity: 0.3;
    transform: scale(0.8);
  }
  50% {
    opacity: 1;
    transform: scale(1.2);
  }
`;

const constellationFlow = keyframes`
  0% {
    background-position: 0% 50%;
    opacity: 0.3;
  }
  50% {
    opacity: 0.6;
  }
  100% {
    background-position: 100% 50%;
    opacity: 0.3;
  }
`;

const nebulaPulse = keyframes`
  0%, 100% {
    filter: hue-rotate(0deg) brightness(1);
  }
  50% {
    filter: hue-rotate(30deg) brightness(1.2);
  }
`;

const Container = styled.div`
  width: 100%;
  max-width: 600px;
  background: linear-gradient(135deg, #0B1026, #1B2240);
  border-radius: 24px;
  padding: 24px;
  box-shadow: 
    0 10px 30px rgba(0, 0, 0, 0.3),
    inset 0 0 100px rgba(88, 88, 255, 0.2);
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
      radial-gradient(circle at 20% 30%, rgba(88, 88, 255, 0.2) 0%, transparent 20%),
      radial-gradient(circle at 80% 70%, rgba(138, 43, 226, 0.2) 0%, transparent 20%);
    animation: ${nebulaPulse} 8s ease-in-out infinite;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: 
      radial-gradient(2px 2px at 20% 30%, rgba(255, 255, 255, 0.8) 100%, transparent),
      radial-gradient(2px 2px at 40% 70%, rgba(255, 255, 255, 0.8) 100%, transparent),
      radial-gradient(2px 2px at 60% 20%, rgba(255, 255, 255, 0.8) 100%, transparent),
      radial-gradient(2px 2px at 80% 50%, rgba(255, 255, 255, 0.8) 100%, transparent);
    animation: ${starTwinkle} 4s ease-in-out infinite;
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
    'linear-gradient(135deg, rgba(88, 88, 255, 0.2), rgba(138, 43, 226, 0.2))' : 
    'rgba(88, 88, 255, 0.05)'
  };
  border: 2px solid ${props => props.$active ? 
    'rgba(88, 88, 255, 0.5)' : 
    'rgba(88, 88, 255, 0.1)'
  };
  border-radius: 16px;
  cursor: ${props => props.$disabled ? 'not-allowed' : 'pointer'};
  opacity: ${props => props.$disabled ? 0.5 : 1};
  display: flex;
  align-items: center;
  gap: 16px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  backdrop-filter: blur(10px);

  ${props => props.$active && css`
    box-shadow: 
      0 0 30px rgba(88, 88, 255, 0.2),
      inset 0 0 20px rgba(88, 88, 255, 0.1);

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
        rgba(88, 88, 255, 0.2),
        transparent
      );
      background-size: 200% 100%;
      animation: ${constellationFlow} 4s linear infinite;
      pointer-events: none;
    }

    &::after {
      content: '✧';
      position: absolute;
      left: -15px;
      top: 50%;
      transform: translateY(-50%);
      color: rgba(88, 88, 255, 0.8);
      font-size: 1.2rem;
      animation: ${starTwinkle} 2s ease-in-out infinite;
    }
  `}

  &:hover {
    ${props => !props.$disabled && !props.$active && css`
      transform: translateY(-2px);
      background: rgba(88, 88, 255, 0.1);
      border-color: rgba(88, 88, 255, 0.3);
      box-shadow: 0 5px 20px rgba(88, 88, 255, 0.15);
    `}
  }
`;

const IconWrapper = styled.div<{ $active: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  color: ${props => props.$active ? '#5858FF' : 'rgba(88, 88, 255, 0.7)'};
  background: ${props => props.$active ? 
    'rgba(88, 88, 255, 0.15)' : 
    'rgba(88, 88, 255, 0.05)'
  };
  border-radius: 50%;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  ${props => props.$active && css`
    &::before {
      content: '';
      position: absolute;
      inset: -2px;
      background: conic-gradient(
        from 0deg,
        transparent,
        rgba(88, 88, 255, 0.3),
        transparent
      );
      animation: ${nebulaPulse} 4s linear infinite;
    }
  `}

  svg {
    width: 20px;
    height: 20px;
    position: relative;
    z-index: 1;
    filter: drop-shadow(0 0 2px rgba(88, 88, 255, 0.5));
  }
`;

const Content = styled.div`
  flex: 1;
`;

const Title = styled.div<{ $active: boolean }>`
  color: ${props => props.$active ? '#5858FF' : 'rgba(88, 88, 255, 0.9)'};
  font-weight: 600;
  margin-bottom: 4px;
  font-family: 'Orbitron', sans-serif;
  font-size: 1rem;
  letter-spacing: 0.02em;
  text-shadow: ${props => props.$active ? 
    '0 0 10px rgba(88, 88, 255, 0.5)' : 
    'none'
  };
`;

const Description = styled.div<{ $active: boolean }>`
  color: ${props => props.$active ? 
    'rgba(88, 88, 255, 0.9)' : 
    'rgba(88, 88, 255, 0.7)'
  };
  font-size: 0.875rem;
  font-family: 'Inter', sans-serif;
  letter-spacing: 0.01em;
`;

const Badge = styled.span<{ $color?: string }>`
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 500;
  background: ${props => props.$color || 'rgba(88, 88, 255, 0.1)'};
  color: ${props => props.$color ? 'white' : '#5858FF'};
  min-width: 20px;
  text-align: center;
  font-family: 'Orbitron', sans-serif;
  letter-spacing: 0.02em;
  border: 1px solid ${props => props.$color || 'rgba(88, 88, 255, 0.2)'};
  box-shadow: 0 0 15px rgba(88, 88, 255, 0.2);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    right: -50%;
    bottom: -50%;
    background: linear-gradient(
      45deg,
      transparent,
      rgba(88, 88, 255, 0.2),
      transparent
    );
    animation: ${constellationFlow} 3s linear infinite;
  }
`;

const CelestialListGroup: React.FC<ListGroupProps> = ({
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

export default CelestialListGroup; 