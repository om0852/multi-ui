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
  0% { background-position: 0 0; }
  100% { background-position: 50px 50px; }
`;

const bounce = keyframes`
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.05); }
`;

const wobble = keyframes`
  0%, 100% { transform: rotate(0deg); }
  25% { transform: rotate(-3deg); }
  75% { transform: rotate(3deg); }
`;

const Container = styled.div`
  width: 100%;
  max-width: 600px;
  background: #fff5f7;
  border-radius: 24px;
  padding: 16px;
  box-shadow: 
    0 10px 30px rgba(247, 37, 133, 0.1),
    0 1px 3px rgba(247, 37, 133, 0.05);
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
      #ff69b4,
      #ff69b4 10px,
      #ff8dc7 10px,
      #ff8dc7 20px
    );
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
  background: ${props => props.$active ? 
    'linear-gradient(135deg, #ffd1dc, #ffecf2)' : 
    '#ffffff'
  };
  border: 2px solid ${props => props.$active ? 
    '#ff69b4' : 
    '#ffd1dc'
  };
  border-radius: 16px;
  cursor: ${props => props.$disabled ? 'not-allowed' : 'pointer'};
  opacity: ${props => props.$disabled ? 0.6 : 1};
  display: flex;
  align-items: center;
  gap: 16px;
  transition: all 0.3s ease;
  position: relative;
  transform-origin: center;

  ${props => props.$active && css`
    animation: ${bounce} 2s ease-in-out infinite;
    box-shadow: 0 4px 12px rgba(255, 105, 180, 0.2);
  `}

  &:hover {
    ${props => !props.$disabled && !props.$active && css`
      transform: translateY(-2px);
      border-color: #ff69b4;
      background: #ffecf2;
      animation: ${wobble} 1s ease-in-out infinite;
    `}
  }

  &::before {
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    background: linear-gradient(135deg, #ff69b4, #ff8dc7);
    border-radius: inherit;
    opacity: 0;
    transition: opacity 0.3s ease;
    z-index: -1;
  }

  &:hover::before {
    opacity: ${props => !props.$disabled && !props.$active ? 0.1 : 0};
  }
`;

const IconWrapper = styled.div<{ $active: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  color: ${props => props.$active ? '#ff1493' : '#ff69b4'};
  background: ${props => props.$active ? '#ffecf2' : '#fff5f7'};
  border-radius: 12px;
  transition: all 0.3s ease;
  border: 2px solid currentColor;

  ${props => props.$active && css`
    animation: ${wobble} 2.5s ease-in-out infinite;
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
  color: ${props => props.$active ? '#ff1493' : '#ff69b4'};
  font-weight: 600;
  margin-bottom: 4px;
  font-family: 'Quicksand', sans-serif;
  font-size: 1.1rem;
`;

const Description = styled.div<{ $active: boolean }>`
  color: ${props => props.$active ? '#ff1493' : '#ff69b4'};
  font-size: 0.875rem;
  font-family: 'Quicksand', sans-serif;
  opacity: 0.8;
`;

const Badge = styled.span<{ $color?: string }>`
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 600;
  background: ${props => props.$color || '#ff69b4'};
  color: white;
  min-width: 20px;
  text-align: center;
  box-shadow: 0 2px 6px rgba(255, 105, 180, 0.3);
  font-family: 'Quicksand', sans-serif;
  border: 2px solid ${props => props.$color ? props.$color : '#ff69b4'};
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