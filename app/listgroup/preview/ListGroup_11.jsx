
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Container = styled.div`
  width: 100%;
  max-width: 600px;
  background: white;
  border-radius: 12px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
  overflow: hidden;
`;

const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
`;

const ListItem = styled.li`
  position: relative;
  padding: 16px 20px;
  background: white;
  cursor: ${props => props.$disabled ? 'not-allowed' : 'pointer'};
  opacity: ${props => props.$disabled ? 0.5 : 1};
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  gap: 16px;
  border-bottom: 1px solid #f3f4f6;
  animation: ${css`${fadeIn}`} 0.3s ease backwards;
  animation-delay: ${props => props.id ? (parseInt(props.id.replace('item', '')) * 0.1) : 0}s;

  &:last-child {
    border-bottom: none;
  }

  ${props => props.$active && `
    background: #fafafa;
    &::before {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      bottom: 0;
      width: 2px;
      background: #6366f1;
    }
  `}

  &:hover {
    ${props => !props.$disabled && !props.$active && `
      background: #fafafa;
    `}
  }
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  color: ${props => props.$active ? '#6366f1' : '#9ca3af'};
  transition: all 0.2s ease;
`;

const Content = styled.div`
  flex: 1;
  min-width: 0;
`;

const Title = styled.div`
  color: ${props => props.$active ? '#6366f1' : '#1f2937'};
  font-weight: 500;
  font-size: 14px;
  transition: all 0.2s ease;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Description = styled.div`
  color: #6b7280;
  font-size: 12px;
  margin-top: 2px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Badge = styled.span`
  padding: 2px 8px;
  background: ${props => props.$color ? `${props.$color}10` : '#f3f4f6'};
  color: ${props => props.$color || '#6b7280'};
  font-size: 12px;
  font-weight: 500;
  border-radius: 4px;
  transition: all 0.2s ease;
  white-space: nowrap;
`;

const MinimalListGroup = ({
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
            id={item.id}
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
      description: 'View your dashboard',
      icon: '📊',
      badge: 'New',
      badgeColor: '#6366f1'
    },
    {
      id: 'item2',
      title: 'Projects',
      description: 'Manage your projects',
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
      description: 'Account settings',
      icon: '⚙️'
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
        <h3 className="text-lg font-medium mb-4 text-gray-800">Minimal List Group</h3>
        <MinimalListGroup 
          items={items} 
          onSelect={handleSelect} 
          activeItem={activeItem}
        />
      </div>
    </div>
  );
};

render(<ListGroupExample />);
