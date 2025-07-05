
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
  font-family: 'Orbitron', sans-serif;

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

const ListGroupExample = () => {
  const [activeItem, setActiveItem] = React.useState('item1');
  
  const items = [
    {
      id: 'item1',
      title: 'Mainframe',
      description: 'Access core systems',
      icon: '💻',
      badge: 'Active',
      badgeColor: '#0f0'
    },
    {
      id: 'item2',
      title: 'Database',
      description: 'View data records',
      icon: '🗄️',
      badge: '3 Alerts',
      badgeColor: '#ff0'
    },
    {
      id: 'item3',
      title: 'Security',
      description: 'System protection',
      icon: '🔒',
      disabled: true
    },
    {
      id: 'item4',
      title: 'Network',
      description: 'Connection status',
      icon: '🌐',
      badge: 'Stable',
      badgeColor: '#0ff'
    },
  ];

  const handleSelect = (item) => {
    if (!item.disabled) {
      setActiveItem(item.id);
      console.log('Selected:', item.title);
    }
  };

  return (
    <div className="p-4 max-w-md mx-auto bg-gray-900 min-h-screen flex items-center justify-center">
      <div className="w-full">
        <h3 className="text-xl font-medium mb-6 text-center text-cyan-400 font-mono tracking-wider">SYSTEM CONTROL PANEL</h3>
        <CyberpunkListGroup 
          items={items} 
          onSelect={handleSelect} 
          activeItem={activeItem}
        />
      </div>
    </div>
  );
};

render(<ListGroupExample />);
