
const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-5px); }
  100% { transform: translateY(0px); }
`;

const glow = keyframes`
  0% { box-shadow: 0 0 5px rgba(99, 102, 241, 0.2), 0 0 10px rgba(99, 102, 241, 0.1); }
  50% { box-shadow: 0 0 20px rgba(99, 102, 241, 0.4), 0 0 30px rgba(99, 102, 241, 0.2); }
  100% { box-shadow: 0 0 5px rgba(99, 102, 241, 0.2), 0 0 10px rgba(99, 102, 241, 0.1); }
`;

const Container = styled.div`
  width: 100%;
  max-width: 600px;
  background: white;
  border-radius: 16px;
  padding: 8px;
  box-shadow: 
    0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
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
  padding: 16px;
  background: ${props => props.$active ? '#f5f3ff' : 'white'};
  border-radius: 12px;
  cursor: ${props => props.$disabled ? 'not-allowed' : 'pointer'};
  opacity: ${props => props.$disabled ? 0.6 : 1};
  display: flex;
  align-items: center;
  gap: 16px;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  border: 1px solid ${props => props.$active ? '#818cf8' : '#e5e7eb'};

  ${props => !props.$disabled && css`
    &:hover {
      transform: translateY(-2px);
      animation: ${float} 3s ease infinite;
      border-color: #818cf8;
      background: ${props.$active ? '#ede9fe' : '#f8fafc'};
      ${props.$active && css`
        animation: ${glow} 2s ease-in-out infinite;
      `}
    }
  `}
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: ${props => props.$active ? '#818cf8' : '#f1f5f9'};
  color: ${props => props.$active ? 'white' : '#64748b'};
  border-radius: 10px;
  transition: all 0.3s ease;
`;

const Content = styled.div`
  flex: 1;
  min-width: 0;
`;

const Title = styled.div`
  color: ${props => props.$active ? '#4f46e5' : '#1f2937'};
  font-weight: 600;
  font-size: 14px;
  margin-bottom: 4px;
  transition: all 0.3s ease;
`;

const Description = styled.div`
  color: #64748b;
  font-size: 12px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Badge = styled.span`
  padding: 4px 12px;
  background: ${props => props.$color || '#f1f5f9'};
  color: ${props => props.$color ? 'white' : '#64748b'};
  font-size: 12px;
  font-weight: 500;
  border-radius: 9999px;
  transition: all 0.3s ease;
  white-space: nowrap;
`;

const MagneticListGroup = ({
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
      badgeColor: '#818cf8'
    },
    {
      id: 'item2',
      title: 'Projects',
      description: 'Manage your work',
      icon: '📂',
      badge: '3',
      badgeColor: '#10b981'
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
      badge: 'Updated',
      badgeColor: '#f59e0b'
    },
  ];

  const handleSelect = (item) => {
    if (!item.disabled) {
      setActiveItem(item.id);
      console.log('Selected:', item.title);
    }
  };

  return (
    <div className="p-4 max-w-md mx-auto bg-gray-50 min-h-screen flex items-center justify-center">
      <div className="w-full">
        <h3 className="text-lg font-medium mb-4 text-gray-800">Magnetic List Group</h3>
        <MagneticListGroup 
          items={items} 
          onSelect={handleSelect} 
          activeItem={activeItem}
        />
      </div>
    </div>
  );
};

render(<ListGroupExample />);
