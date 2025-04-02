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
  0%, 100% { transform: rotate(0deg); }
  25% { transform: rotate(2deg) scale(1.02); }
  75% { transform: rotate(-2deg) scale(0.98); }
`;

const jungleLight = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const Container = styled.div`
  width: 100%;
  max-width: 600px;
  background: linear-gradient(135deg, #1b4d3e, #2d6a4f);
  border-radius: 20px;
  padding: 16px;
  box-shadow: 
    0 10px 30px rgba(45, 106, 79, 0.2),
    0 1px 3px rgba(45, 106, 79, 0.1);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      radial-gradient(circle at 20% 30%, rgba(74, 222, 128, 0.1) 0%, transparent 50%),
      radial-gradient(circle at 80% 70%, rgba(74, 222, 128, 0.1) 0%, transparent 50%);
    animation: ${jungleLight} 10s ease infinite;
    background-size: 200% 200%;
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
    'rgba(74, 222, 128, 0.15)' : 
    'rgba(255, 255, 255, 0.05)'
  };
  border: 1px solid ${props => props.$active ? 
    '#4ade80' : 
    'rgba(74, 222, 128, 0.2)'
  };
  border-radius: 12px;
  cursor: ${props => props.$disabled ? 'not-allowed' : 'pointer'};
  opacity: ${props => props.$disabled ? 0.6 : 1};
  display: flex;
  align-items: center;
  gap: 16px;
  transition: all 0.3s ease;
  position: relative;
  backdrop-filter: blur(5px);

  ${props => props.$active && css`
    animation: ${leafSway} 4s ease-in-out infinite;
    box-shadow: 0 0 20px rgba(74, 222, 128, 0.2);
  `}

  &:hover {
    ${props => !props.$disabled && !props.$active && css`
      transform: translateY(-2px);
      border-color: #4ade80;
      background: rgba(74, 222, 128, 0.1);
    `}
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0C13.432 0 0 13.432 0 30c0 16.568 13.432 30 30 30 16.568 0 30-13.432 30-30C60 13.432 46.568 0 30 0zm0 55C16.193 55 5 43.807 5 30S16.193 5 30 5s25 11.193 25 25-11.193 25-25 25z' fill='%234ade80' fill-opacity='0.05'/%3E%3C/svg%3E");
    opacity: ${props => props.$active ? 0.2 : 0.1};
    z-index: 0;
  }
`;

const IconWrapper = styled.div<{ $active: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  color: ${props => props.$active ? '#4ade80' : 'rgba(74, 222, 128, 0.8)'};
  background: rgba(74, 222, 128, 0.1);
  border-radius: 12px;
  transition: all 0.3s ease;
  position: relative;
  z-index: 1;

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
  position: relative;
  z-index: 1;
`;

const Title = styled.div<{ $active: boolean }>`
  color: ${props => props.$active ? '#4ade80' : 'rgba(255, 255, 255, 0.9)'};
  font-weight: 600;
  margin-bottom: 4px;
  font-family: 'Poppins', sans-serif;
  font-size: 1.1rem;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
`;

const Description = styled.div<{ $active: boolean }>`
  color: ${props => props.$active ? 'rgba(74, 222, 128, 0.9)' : 'rgba(255, 255, 255, 0.7)'};
  font-size: 0.875rem;
  font-family: 'Poppins', sans-serif;
`;

const Badge = styled.span<{ $color?: string }>`
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 500;
  background: ${props => props.$color || 'rgba(74, 222, 128, 0.2)'};
  color: ${props => props.$color ? 'white' : '#4ade80'};
  min-width: 20px;
  text-align: center;
  box-shadow: 0 2px 6px rgba(74, 222, 128, 0.2);
  border: 1px solid rgba(74, 222, 128, 0.3);
  backdrop-filter: blur(5px);
  position: relative;
  z-index: 1;
`;

const JungleListGroup: React.FC<ListGroupProps> = ({
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

export default JungleListGroup; 