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

const starField = keyframes`
  0% { transform: translateZ(0); }
  100% { transform: translateZ(100px); }
`;

const nebula = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const starTwinkle = keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0.3; }
`;

const Container = styled.div`
  width: 100%;
  max-width: 600px;
  background: #0f0f1e;
  border-radius: 16px;
  padding: 16px;
  box-shadow: 0 0 40px rgba(88, 88, 255, 0.2);
  position: relative;
  perspective: 1000px;

  &::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    right: -50%;
    bottom: -50%;
    background: 
      radial-gradient(2px 2px at 20px 30px, #fff, rgba(0,0,0,0)),
      radial-gradient(2px 2px at 40px 70px, #fff, rgba(0,0,0,0)),
      radial-gradient(2px 2px at 50px 160px, #fff, rgba(0,0,0,0)),
      radial-gradient(2px 2px at 90px 40px, #fff, rgba(0,0,0,0)),
      radial-gradient(2px 2px at 130px 80px, #fff, rgba(0,0,0,0));
    background-repeat: repeat;
    animation: ${starField} 20s linear infinite;
    opacity: 0.3;
    z-index: 0;
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
    'linear-gradient(135deg, rgba(88, 88, 255, 0.2), rgba(136, 88, 255, 0.2))' : 
    'rgba(20, 20, 40, 0.6)'
  };
  border: 1px solid ${props => props.$active ? 
    'rgba(136, 88, 255, 0.5)' : 
    'rgba(88, 88, 255, 0.2)'
  };
  border-radius: 12px;
  cursor: ${props => props.$disabled ? 'not-allowed' : 'pointer'};
  opacity: ${props => props.$disabled ? 0.5 : 1};
  display: flex;
  align-items: center;
  gap: 16px;
  transition: all 0.3s ease;
  position: relative;
  backdrop-filter: blur(5px);

  ${props => props.$active && css`
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(135deg, #5858ff, #8858ff);
      opacity: 0.1;
      border-radius: inherit;
      animation: ${nebula} 8s linear infinite;
      background-size: 200% 200%;
    }
  `}

  &:hover {
    ${props => !props.$disabled && !props.$active && `
      transform: translateX(8px);
      background: rgba(88, 88, 255, 0.1);
      border-color: rgba(136, 88, 255, 0.3);
    `}
  }
`;

const IconWrapper = styled.div<{ $active: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  color: ${props => props.$active ? '#8858ff' : '#5858ff'};
  background: rgba(88, 88, 255, 0.1);
  border-radius: 10px;
  transition: all 0.3s ease;
  position: relative;

  ${props => props.$active && css`
    animation: ${starTwinkle} 2s ease-in-out infinite;
  `}

  svg {
    width: 20px;
    height: 20px;
  }

  &::before {
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    background: linear-gradient(135deg, #5858ff, #8858ff);
    border-radius: inherit;
    opacity: 0.3;
    z-index: -1;
  }
`;

const Content = styled.div`
  flex: 1;
`;

const Title = styled.div<{ $active: boolean }>`
  color: ${props => props.$active ? '#fff' : 'rgba(255, 255, 255, 0.9)'};
  font-weight: 500;
  margin-bottom: 4px;
  text-shadow: ${props => props.$active ? '0 0 10px rgba(136, 88, 255, 0.5)' : 'none'};
`;

const Description = styled.div<{ $active: boolean }>`
  color: ${props => props.$active ? 'rgba(255, 255, 255, 0.8)' : 'rgba(255, 255, 255, 0.6)'};
  font-size: 0.875rem;
`;

const Badge = styled.span<{ $color?: string }>`
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 500;
  background: ${props => props.$color || 'linear-gradient(135deg, #5858ff, #8858ff)'};
  color: white;
  min-width: 20px;
  text-align: center;
  box-shadow: 0 0 20px rgba(136, 88, 255, 0.3);
`;

const CosmicListGroup: React.FC<ListGroupProps> = ({
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

export default CosmicListGroup; 