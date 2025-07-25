
const holographicShimmer = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const glitchEffect = keyframes`
  0% { transform: translate(0); }
  20% { transform: translate(-2px, 2px); }
  40% { transform: translate(-2px, -2px); }
  60% { transform: translate(2px, 2px); }
  80% { transform: translate(2px, -2px); }
  100% { transform: translate(0); }
`;

const Container = styled.div`
  width: 100%;
  max-width: 600px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 16px;
  padding: 12px;
  position: relative;
  overflow: hidden;
  box-shadow: 
    0 8px 32px rgba(31, 38, 135, 0.15),
    inset 0 0 32px rgba(255, 255, 255, 0.1);
`;

const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
  position: relative;
  z-index: 1;
`;

const ListItem = styled.li`
  padding: 16px;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 12px;
  cursor: ${props => props.$disabled ? 'not-allowed' : 'pointer'};
  opacity: ${props => props.$disabled ? 0.5 : 1};
  display: flex;
  align-items: center;
  gap: 16px;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;

  ${props => props.$active && css`
    background: rgba(255, 255, 255, 0.2);
    border-color: rgba(255, 255, 255, 0.4);
    animation: ${glitchEffect} 0.3s ease infinite;
  `}

  &:hover {
    ${props => !props.$disabled && css`
      transform: scale(1.02);
      background: rgba(255, 255, 255, 0.15);
      border-color: rgba(255, 255, 255, 0.3);
    `}
  }
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  position: relative;
  z-index: 1;
  
  svg {
    width: 20px;
    height: 20px;
    color: rgba(255, 255, 255, 0.9);
    filter: drop-shadow(0 0 2px rgba(255, 255, 255, 0.5));
  }
`;

const Content = styled.div`
  flex: 1;
  position: relative;
  z-index: 1;
`;

const Title = styled.div`
  color: rgba(255, 255, 255, 0.9);
  font-weight: 600;
  font-size: 14px;
  margin-bottom: 4px;
  text-shadow: 0 0 8px rgba(255, 255, 255, 0.5);
`;

const Description = styled.div`
  color: rgba(255, 255, 255, 0.7);
  font-size: 12px;
`;

const Badge = styled.span`
  padding: 4px 12px;
  background: ${props => props.$color || 'rgba(255, 255, 255, 0.1)'};
  color: rgba(255, 255, 255, 0.9);
  font-size: 12px;
  border-radius: 20px;
  position: relative;
  z-index: 1;
  backdrop-filter: blur(4px);
  border: 1px solid rgba(255, 255, 255, 0.2);
`;

const HolographicListGroup = ({
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
      title: 'Hologram Display',
      description: 'Main interface',
      icon: '👁️',
      badge: 'Active',
      badgeColor: 'rgba(0, 255, 255, 0.2)'
    },
    {
      id: 'item2',
      title: 'Neural Network',
      description: 'AI processing',
      icon: '🧠',
      badge: '87%',
      badgeColor: 'rgba(255, 0, 255, 0.2)'
    },
    {
      id: 'item3',
      title: 'Quantum Link',
      description: 'Secure connection',
      icon: '🔗',
      disabled: true,
      badge: 'Offline'
    },
    {
      id: 'item4',
      title: 'Data Stream',
      description: 'Real-time analytics',
      icon: '📊',
      badge: 'Optimal',
      badgeColor: 'rgba(0, 255, 0, 0.2)'
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
        <h3 className="text-lg font-medium mb-4 text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
          HOLOGRAPHIC INTERFACE
        </h3>
        <HolographicListGroup 
          items={items} 
          onSelect={handleSelect} 
          activeItem={activeItem}
        />
      </div>
    </div>
  );
};

render(<ListGroupExample />);
