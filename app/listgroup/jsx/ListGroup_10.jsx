'use client';

import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes, css } from 'styled-components';

const glitch = keyframes`
  0% {
    transform: translate(0);
  }
  20% {
    transform: translate(-2px, 2px);
  }
  40% {
    transform: translate(-2px, -2px);
  }
  60% {
    transform: translate(2px, 2px);
  }
  80% {
    transform: translate(2px, -2px);
  }
  100% {
    transform: translate(0);
  }
`;

const scanline = keyframes`
  0% {
    transform: translateY(-100%);
  }
  100% {
    transform: translateY(100%);
  }
`;

const neonPulse = keyframes`
  0%, 100% {
    opacity: 1;
    text-shadow: 
      0 0 10px #0ff,
      0 0 20px #0ff,
      0 0 30px #0ff;
  }
  50% {
    opacity: 0.8;
    text-shadow: 
      0 0 5px #0ff,
      0 0 10px #0ff,
      0 0 15px #0ff;
  }
`;

const Container = styled.div`
  position: relative;
  width: 100%;
  max-width: 600px;
  background: #0a0a0f;
  border: 1px solid #2d2d3a;
  border-radius: 12px;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: rgba(0, 255, 255, 0.5);
    animation: ${scanline} 4s linear infinite;
    opacity: 0.5;
  }
`;

const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const ListItem = styled.li`
  position: relative;
  padding: 16px;
  background: ${props => props.$active ? 
    'rgba(0, 255, 255, 0.1)' : 
    'rgba(0, 0, 0, 0.5)'
  };
  border: 1px solid ${props => props.$active ? 
    '#0ff' : 
    'rgba(0, 255, 255, 0.3)'
  };
  cursor: ${props => props.$disabled ? 'not-allowed' : 'pointer'};
  opacity: ${props => props.$disabled ? 0.5 : 1};
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 16px;

  ${props => props.$active && css`
    animation: ${css`${glitch}`} 0.3s cubic-bezier(.25, .46, .45, .94) both infinite;
  `}

  &:hover {
    ${props => !props.$disabled && !props.$active && `
      background: rgba(0, 255, 255, 0.05);
      border-color: rgba(0, 255, 255, 0.5);
      transform: translateX(4px);
    `}
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 4px;
    height: 100%;
    background: ${props => props.$active ? '#0ff' : 'transparent'};
    box-shadow: ${props => props.$active ? '0 0 10px #0ff' : 'none'};
  }
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: rgba(0, 0, 0, 0.5);
  border: 1px solid ${props => props.$active ? '#0ff' : 'rgba(0, 255, 255, 0.3)'};
  color: ${props => props.$active ? '#0ff' : 'rgba(0, 255, 255, 0.7)'};
  transition: all 0.3s ease;
  animation: ${neonPulse} 2s infinite;

  svg {
    width: 20px;
    height: 20px;
    filter: drop-shadow(0 0 2px #0ff);
  }
`;

const Content = styled.div`
  flex: 1;
`;

const Title = styled.div`
  color: ${props => props.$active ? '#0ff' : '#fff'};
  font-family: 'Orbitron', sans-serif;
  font-weight: 600;
  font-size: 16px;
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: all 0.3s ease;
  text-shadow: ${props => props.$active ? 
    '0 0 10px #0ff, 0 0 20px #0ff' : 
    'none'
  };
`;

const Description = styled.div`
  color: rgba(255, 255, 255, 0.7);
  font-size: 14px;
  margin-top: 4px;
  font-family: 'Share Tech Mono', monospace;
`;

const Badge = styled.span`
  padding: 4px 8px;
  background: rgba(0, 0, 0, 0.5);
  color: ${props => props.$color || '#0ff'};
  font-family: 'Share Tech Mono', monospace;
  font-size: 12px;
  border: 1px solid ${props => props.$color || '#0ff'};
  text-shadow: 0 0 5px ${props => props.$color || '#0ff'};
  box-shadow: 0 0 10px rgba(0, 255, 255, 0.2);
  animation: ${neonPulse} 2s infinite;
`;

const CyberpunkListGroup = ({
  items,
  onSelect,
  className,
  activeItem,
}) => {
  const handleSelect = (item) => {
    if (!item.disabled && onSelect) {
      onSelect(item);
    }
  };

  return (
    <Container className={className}>
      <List>
        {items.map((item) => (
          <ListItem
            key={item.id}
            onClick={() => handleSelect(item)}
            $active={activeItem === item.id}
            $disabled={!!item.disabled}
          >
            {item.icon && (
              <IconWrapper $active={activeItem === item.id}>
                {item.icon}
              </IconWrapper>
            )}
            <Content>
              <Title $active={activeItem === item.id}>
                {item.title}
              </Title>
              {item.description && (
                <Description>{item.description}</Description>
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

CyberpunkListGroup.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string,
      icon: PropTypes.node,
      badge: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      badgeColor: PropTypes.string,
      disabled: PropTypes.bool
    })
  ).isRequired,
  onSelect: PropTypes.func,
  className: PropTypes.string,
  activeItem: PropTypes.string
};

export default CyberpunkListGroup; 