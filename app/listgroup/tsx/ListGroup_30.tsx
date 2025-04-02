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

const scanline = keyframes`
  0% {
    transform: translateY(-100%);
  }
  100% {
    transform: translateY(100%);
  }
`;

const pulse = keyframes`
  0%, 100% {
    opacity: 1;
    transform: scale(1);
  }
  50% {
    opacity: 0.8;
    transform: scale(0.98);
  }
`;

const dataStream = keyframes`
  0% {
    background-position: 0% 0%;
  }
  100% {
    background-position: 200% 0%;
  }
`;

const Container = styled.div`
  width: 100%;
  max-width: 600px;
  background: #0a0f1d;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 
    0 0 30px rgba(0, 255, 255, 0.1),
    inset 0 0 20px rgba(0, 255, 255, 0.05);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: linear-gradient(90deg, 
      transparent,
      #00fff2,
      transparent
    );
    animation: ${dataStream} 2s linear infinite;
    background-size: 200% 100%;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      transparent 50%,
      rgba(0, 255, 255, 0.025) 50%
    );
    background-size: 100% 4px;
    pointer-events: none;
    animation: ${scanline} 4s linear infinite;
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
    'rgba(0, 255, 255, 0.05)' : 
    'rgba(0, 255, 255, 0.02)'
  };
  border: 1px solid ${props => props.$active ? 
    'rgba(0, 255, 255, 0.3)' : 
    'rgba(0, 255, 255, 0.1)'
  };
  border-radius: 4px;
  cursor: ${props => props.$disabled ? 'not-allowed' : 'pointer'};
  opacity: ${props => props.$disabled ? 0.5 : 1};
  display: flex;
  align-items: center;
  gap: 16px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  backdrop-filter: blur(10px);

  ${props => props.$active && css`
    animation: ${pulse} 2s ease-in-out infinite;
    box-shadow: 
      0 0 20px rgba(0, 255, 255, 0.1),
      inset 0 0 10px rgba(0, 255, 255, 0.05);

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(
        45deg,
        transparent,
        rgba(0, 255, 255, 0.05),
        transparent
      );
      animation: ${dataStream} 2s linear infinite;
      background-size: 200% 100%;
    }
  `}

  &:hover {
    ${props => !props.$disabled && !props.$active && css`
      transform: translateX(4px);
      background: rgba(0, 255, 255, 0.03);
      border-color: rgba(0, 255, 255, 0.2);
    `}
  }
`;

const IconWrapper = styled.div<{ $active: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  color: ${props => props.$active ? '#00fff2' : 'rgba(0, 255, 255, 0.7)'};
  background: ${props => props.$active ? 
    'rgba(0, 255, 255, 0.1)' : 
    'rgba(0, 255, 255, 0.05)'
  };
  border-radius: 4px;
  transition: all 0.3s ease;
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
      rgba(0, 255, 255, 0.1),
      transparent
    );
    animation: ${dataStream} 2s linear infinite;
    background-size: 200% 200%;
  }

  svg {
    width: 18px;
    height: 18px;
    position: relative;
    z-index: 1;
  }
`;

const Content = styled.div`
  flex: 1;
`;

const Title = styled.div<{ $active: boolean }>`
  color: ${props => props.$active ? '#00fff2' : 'rgba(0, 255, 255, 0.9)'};
  font-weight: 500;
  margin-bottom: 4px;
  font-family: 'Space Grotesk', sans-serif;
  font-size: 1rem;
  letter-spacing: 0.02em;
  text-shadow: 0 0 10px rgba(0, 255, 255, 0.3);
`;

const Description = styled.div<{ $active: boolean }>`
  color: ${props => props.$active ? 
    'rgba(0, 255, 255, 0.8)' : 
    'rgba(0, 255, 255, 0.6)'
  };
  font-size: 0.875rem;
  font-family: 'Space Grotesk', sans-serif;
  letter-spacing: 0.01em;
`;

const Badge = styled.span<{ $color?: string }>`
  padding: 2px 8px;
  border-radius: 2px;
  font-size: 0.75rem;
  font-weight: 500;
  background: ${props => props.$color || 'rgba(0, 255, 255, 0.1)'};
  color: ${props => props.$color ? 'white' : '#00fff2'};
  min-width: 20px;
  text-align: center;
  font-family: 'Space Grotesk', sans-serif;
  letter-spacing: 0.02em;
  border: 1px solid ${props => props.$color || 'rgba(0, 255, 255, 0.2)'};
  box-shadow: 0 0 10px rgba(0, 255, 255, 0.1);
  backdrop-filter: blur(5px);
`;

const SciFiListGroup: React.FC<ListGroupProps> = ({
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

export default SciFiListGroup; 