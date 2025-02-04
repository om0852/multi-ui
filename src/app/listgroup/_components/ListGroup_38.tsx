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

const shimmerGold = keyframes`
  0% {
    background-position: -200% center;
  }
  100% {
    background-position: 200% center;
  }
`;

const patternRotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const sunburstScale = keyframes`
  0%, 100% {
    transform: scale(1);
    opacity: 0.5;
  }
  50% {
    transform: scale(1.1);
    opacity: 0.7;
  }
`;

const Container = styled.div`
  width: 100%;
  max-width: 600px;
  background: #2c2c34;
  border-radius: 0;
  padding: 24px;
  box-shadow: 
    0 10px 30px rgba(0, 0, 0, 0.3),
    inset 0 0 0 2px #d4af37;
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
      linear-gradient(45deg, #d4af37 25%, transparent 25%),
      linear-gradient(-45deg, #d4af37 25%, transparent 25%);
    background-size: 8px 8px;
    background-position: 0 0, 4px 0;
    opacity: 0.1;
  }

  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 200px;
    height: 200px;
    background: radial-gradient(
      circle,
      #d4af37 0%,
      transparent 70%
    );
    transform: translate(-50%, -50%);
    opacity: 0.1;
    animation: ${sunburstScale} 4s ease-in-out infinite;
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
    '#1a1a20' : 
    '#24242c'
  };
  border: 2px solid ${props => props.$active ? 
    '#d4af37' : 
    '#34343c'
  };
  cursor: ${props => props.$disabled ? 'not-allowed' : 'pointer'};
  opacity: ${props => props.$disabled ? 0.5 : 1};
  display: flex;
  align-items: center;
  gap: 16px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  clip-path: polygon(
    0% 0%,
    95% 0%,
    100% 50%,
    95% 100%,
    0% 100%
  );

  ${props => props.$active && css`
    &::before {
      content: '';
      position: absolute;
      inset: 0;
      background: linear-gradient(
        90deg,
        transparent,
        rgba(212, 175, 55, 0.1),
        transparent
      );
      background-size: 200% 100%;
      animation: ${shimmerGold} 2s linear infinite;
    }

    &::after {
      content: '';
      position: absolute;
      top: 50%;
      left: -10px;
      width: 20px;
      height: 20px;
      background: #d4af37;
      transform: translateY(-50%) rotate(45deg);
      clip-path: polygon(0% 0%, 100% 0%, 100% 100%);
    }
  `}

  &:hover {
    ${props => !props.$disabled && !props.$active && css`
      transform: translateX(10px);
      background: #1e1e24;
      border-color: #a08a3c;
    `}
  }
`;

const IconWrapper = styled.div<{ $active: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  color: ${props => props.$active ? '#d4af37' : '#a08a3c'};
  background: ${props => props.$active ? 
    '#1a1a20' : 
    '#24242c'
  };
  position: relative;
  clip-path: polygon(
    50% 0%,
    100% 25%,
    100% 75%,
    50% 100%,
    0% 75%,
    0% 25%
  );
  border: 1px solid ${props => props.$active ? '#d4af37' : '#34343c'};

  ${props => props.$active && css`
    &::before {
      content: '';
      position: absolute;
      inset: 0;
      background: radial-gradient(
        circle at center,
        #d4af37 0%,
        transparent 70%
      );
      opacity: 0.2;
      animation: ${patternRotate} 4s linear infinite;
    }
  `}

  svg {
    width: 20px;
    height: 20px;
    position: relative;
    z-index: 1;
  }
`;

const Content = styled.div`
  flex: 1;
`;

const Title = styled.div<{ $active: boolean }>`
  color: ${props => props.$active ? '#d4af37' : '#a08a3c'};
  font-weight: 600;
  margin-bottom: 4px;
  font-family: 'Playfair Display', serif;
  font-size: 1.1rem;
  letter-spacing: 0.05em;
  text-transform: uppercase;
`;

const Description = styled.div<{ $active: boolean }>`
  color: ${props => props.$active ? 
    '#a08a3c' : 
    '#7a6830'
  };
  font-size: 0.875rem;
  font-family: 'Playfair Display', serif;
  letter-spacing: 0.02em;
`;

const Badge = styled.span<{ $color?: string }>`
  padding: 4px 12px;
  background: ${props => props.$color || '#1a1a20'};
  color: ${props => props.$color ? 'white' : '#d4af37'};
  font-size: 0.75rem;
  font-weight: 500;
  min-width: 20px;
  text-align: center;
  font-family: 'Playfair Display', serif;
  letter-spacing: 0.05em;
  border: 1px solid #d4af37;
  position: relative;
  clip-path: polygon(
    10% 0%,
    90% 0%,
    100% 50%,
    90% 100%,
    10% 100%,
    0% 50%
  );

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(212, 175, 55, 0.2),
      transparent
    );
    background-size: 200% 100%;
    animation: ${shimmerGold} 2s linear infinite;
  }
`;

const ArtDecoListGroup: React.FC<ListGroupProps> = ({
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

export default ArtDecoListGroup; 