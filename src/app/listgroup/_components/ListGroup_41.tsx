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

const float = keyframes`
  0%, 100% {
    transform: translateY(0) scale(1);
  }
  50% {
    transform: translateY(-8px) scale(1.02);
  }
`;

const glow = keyframes`
  0%, 100% {
    filter: brightness(1) saturate(1);
    opacity: 0.8;
  }
  50% {
    filter: brightness(1.2) saturate(1.2);
    opacity: 1;
  }
`;

const shimmerEffect = keyframes`
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
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05));
  border-radius: 24px;
  padding: 24px;
  position: relative;
  overflow: hidden;
  backdrop-filter: blur(20px);
  box-shadow: 
    0 8px 32px rgba(31, 38, 135, 0.15),
    inset 0 0 80px rgba(255, 255, 255, 0.1);

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
    animation: ${glow} 6s ease-in-out infinite;
  }

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(
      45deg,
      transparent,
      rgba(255, 255, 255, 0.1) 50%,
      transparent
    );
    background-size: 200% 200%;
    animation: ${shimmerEffect} 4s linear infinite;
  }
`;

const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 16px;
  position: relative;
  z-index: 1;
`;

const ListItem = styled.li<{ $active: boolean; $disabled: boolean }>`
  padding: 16px;
  background: ${props => props.$active ? 
    'linear-gradient(135deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.1))' : 
    'linear-gradient(135deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.05))'
  };
  border: 1px solid ${props => props.$active ? 
    'rgba(255, 255, 255, 0.3)' : 
    'rgba(255, 255, 255, 0.1)'
  };
  border-radius: 16px;
  cursor: ${props => props.$disabled ? 'not-allowed' : 'pointer'};
  opacity: ${props => props.$disabled ? 0.5 : 1};
  display: flex;
  align-items: center;
  gap: 16px;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  backdrop-filter: blur(10px);

  ${props => props.$active && css`
    animation: ${float} 4s ease-in-out infinite;
    box-shadow: 
      0 8px 32px rgba(31, 38, 135, 0.15),
      inset 0 0 32px rgba(255, 255, 255, 0.1);

    &::before {
      content: '';
      position: absolute;
      inset: 0;
      background: linear-gradient(
        90deg,
        transparent,
        rgba(255, 255, 255, 0.2),
        transparent
      );
      background-size: 200% 100%;
      animation: ${shimmerEffect} 2s linear infinite;
      border-radius: inherit;
    }
  `}

  &:hover {
    ${props => !props.$disabled && !props.$active && css`
      transform: translateY(-4px);
      background: linear-gradient(135deg, rgba(255, 255, 255, 0.18), rgba(255, 255, 255, 0.08));
      border-color: rgba(255, 255, 255, 0.2);
      box-shadow: 0 4px 20px rgba(31, 38, 135, 0.1);
    `}
  }
`;

const IconWrapper = styled.div<{ $active: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  color: ${props => props.$active ? '#ffffff' : 'rgba(255, 255, 255, 0.8)'};
  background: ${props => props.$active ? 
    'rgba(255, 255, 255, 0.2)' : 
    'rgba(255, 255, 255, 0.1)'
  };
  border-radius: 50%;
  position: relative;
  overflow: hidden;
  backdrop-filter: blur(5px);

  ${props => props.$active && css`
    animation: ${glow} 3s ease-in-out infinite;

    &::before {
      content: '';
      position: absolute;
      inset: 0;
      background: radial-gradient(
        circle at center,
        rgba(255, 255, 255, 0.3),
        transparent 70%
      );
      animation: ${glow} 3s ease-in-out infinite;
    }
  `}

  svg {
    width: 20px;
    height: 20px;
    filter: drop-shadow(0 2px 4px rgba(255, 255, 255, 0.2));
  }
`;

const Content = styled.div`
  flex: 1;
`;

const Title = styled.div<{ $active: boolean }>`
  color: ${props => props.$active ? '#ffffff' : 'rgba(255, 255, 255, 0.9)'};
  font-weight: 500;
  margin-bottom: 4px;
  font-family: 'Quicksand', sans-serif;
  font-size: 1.1rem;
  letter-spacing: 0.02em;
  text-shadow: ${props => props.$active ? 
    '0 0 10px rgba(255, 255, 255, 0.5)' : 
    'none'
  };
`;

const Description = styled.div<{ $active: boolean }>`
  color: ${props => props.$active ? 
    'rgba(255, 255, 255, 0.9)' : 
    'rgba(255, 255, 255, 0.7)'
  };
  font-size: 0.875rem;
  font-family: 'Quicksand', sans-serif;
  letter-spacing: 0.01em;
  line-height: 1.4;
`;

const Badge = styled.span<{ $color?: string }>`
  padding: 4px 12px;
  background: ${props => props.$color || 'rgba(255, 255, 255, 0.15)'};
  color: ${props => props.$color ? '#ffffff' : 'rgba(255, 255, 255, 0.9)'};
  font-size: 0.75rem;
  font-weight: 500;
  font-family: 'Quicksand', sans-serif;
  letter-spacing: 0.02em;
  border-radius: 20px;
  backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.2),
      transparent
    );
    background-size: 200% 100%;
    animation: ${shimmerEffect} 2s linear infinite;
  }
`;

const EtherealListGroup: React.FC<ListGroupProps> = ({
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

export default EtherealListGroup; 