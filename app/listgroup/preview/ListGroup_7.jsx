
const shimmer = keyframes`
  0% {
    background-position: -200% center;
  }
  100% {
    background-position: 200% center;
  }
`;

const glow = keyframes`
  0%, 100% {
    opacity: 0.5;
  }
  50% {
    opacity: 1;
  }
`;

const Container = styled.div`
  width: 100%;
  max-width: 600px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(12px);
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 8px 32px rgba(31, 38, 135, 0.15);
  overflow: hidden;
  padding: 8px;
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
    'rgba(255, 255, 255, 0.15)' : 
    'rgba(255, 255, 255, 0.05)'
  };
  border-radius: 12px;
  cursor: ${props => props.$disabled ? 'not-allowed' : 'pointer'};
  opacity: ${props => props.$disabled ? 0.5 : 1};
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 16px;
  overflow: hidden;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: ${props => !props.$disabled && 'translateY(-2px)'};
  }

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
    animation: ${css`${shimmer}`} 3s linear infinite;
    opacity: ${props => props.$active ? 1 : 0};
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
  color: ${props => props.$active ? '#fff' : 'rgba(255, 255, 255, 0.7)'};
  transition: all 0.3s ease;
  animation: ${css`${glow}`} 2s ease-in-out infinite;
`;

const Content = styled.div`
  flex: 1;
`;

const Title = styled.div`
  color: ${props => props.$active ? '#fff' : 'rgba(255, 255, 255, 0.9)'};
  font-weight: 600;
  font-size: 16px;
  transition: all 0.3s ease;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Description = styled.div`
  color: rgba(255, 255, 255, 0.6);
  font-size: 14px;
  margin-top: 4px;
  font-weight: 400;
`;

const Badge = styled.span`
  padding: 4px 12px;
  background: ${props => props.$color ? 
    `${props.$color}40` : 
    'rgba(255, 255, 255, 0.1)'
  };
  color: ${props => props.$color || '#fff'};
  font-size: 12px;
  font-weight: 500;
  border-radius: 20px;
  border: 1px solid ${props => props.$color ? 
    `${props.$color}80` : 
    'rgba(255, 255, 255, 0.2)'
  };
  backdrop-filter: blur(4px);
  transition: all 0.3s ease;
`;

const GlassmorphicListGroup = ({
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
      title: 'Dashboard',
      description: 'View your analytics',
      icon: '📊',
      badge: 'New',
      badgeColor: '#6366f1'
    },
    {
      id: 'item2',
      title: 'Projects',
      description: 'Manage your work',
      icon: '📂',
      badge: '3',
    },
    {
      id: 'item3',
      title: 'Messages',
      description: 'Check your inbox',
      icon: '✉️',
      disabled: true
    },
    {
      id: 'item4',
      title: 'Settings',
      description: 'Configure your account',
      icon: '⚙️',
    },
  ];

  const handleSelect = (item) => {
    if (!item.disabled) {
      setActiveItem(item.id);
      console.log('Selected:', item.title);
    }
  };

  return (
    <div className="p-4 max-w-md mx-auto bg-gradient-to-br from-blue-900 to-purple-900 min-h-screen">
      <h3 className="text-xl font-medium mb-6 text-white">Glassmorphic List</h3>
      <GlassmorphicListGroup 
        items={items} 
        onSelect={handleSelect} 
        activeItem={activeItem}
      />
    </div>
  );
};

render(<ListGroupExample />);
