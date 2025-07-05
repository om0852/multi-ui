const { styled, keyframes } = require('@emotion/styled');
const { motion } = require('framer-motion');

const slideIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-10px);
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
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  overflow: hidden;
`;

const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: ${props => props.$variant === 'compact' ? '4px' : '8px'};
  display: flex;
  flex-direction: column;
  gap: ${props => props.$variant === 'compact' ? '2px' : '4px'};
`;

const ListItem = styled.li`
  padding: ${props => props.$variant === 'compact' ? '8px 12px' : '12px 16px'};
  background: ${props => props.$active ? '#eef2ff' : 'transparent'};
  border-radius: 8px;
  cursor: ${props => props.$disabled ? 'not-allowed' : 'pointer'};
  opacity: ${props => props.$disabled ? 0.5 : 1};
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  gap: 12px;
  animation: ${slideIn} 0.3s ease;
  position: relative;
  overflow: hidden;

  &:hover {
    background: ${props => !props.$disabled && (props.$active ? '#e0e7ff' : '#f9fafb')};
  }

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 3px;
    background: ${props => props.$active ? '#6366f1' : 'transparent'};
    transition: all 0.2s ease;
  }

  ${props => props.$variant === 'modern' && `
    border: 1px solid ${props.$active ? '#e0e7ff' : '#f3f4f6'};
    &:hover {
      border-color: #e0e7ff;
      transform: translateY(-1px);
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
    }
  `}
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props => props.$active ? '#6366f1' : '#6b7280'};
  transition: all 0.2s ease;
`;

const Content = styled.div`
  flex: 1;
`;

const Title = styled.div`
  color: ${props => props.$active ? '#4f46e5' : '#1f2937'};
  font-weight: 500;
  font-size: 14px;
  transition: all 0.2s ease;
`;

const Description = styled.div`
  color: #6b7280;
  font-size: 12px;
  margin-top: 2px;
`;

const Badge = styled.span`
  padding: 2px 8px;
  background: ${props => props.$color || '#e5e7eb'};
  color: ${props => props.$color ? 'white' : '#4b5563'};
  font-size: 12px;
  font-weight: 500;
  border-radius: 9999px;
  transition: all 0.2s ease;
`;

const ListGroup = ({
  items,
  onSelect,
  className,
  variant = 'default',
  activeItem,
}) => {
  const handleSelect = (item) => {
    if (!item.disabled && onSelect) {
      onSelect(item);
    }
  };

  return (
    <Container className={className}>
      <List $variant={variant}>
        {items.map((item) => (
          <ListItem
            key={item.id}
            onClick={() => handleSelect(item)}
            $active={activeItem === item.id}
            $disabled={!!item.disabled}
            $variant={variant}
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
    },
    {
      id: 'item3',
      title: 'Messages',
      description: 'Check your messages',
      icon: '✉️',
      disabled: true
    },
    {
      id: 'item4',
      title: 'Settings',
      description: 'Configure your settings',
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
    <div className="p-4 max-w-md mx-auto">
      <h3 className="text-lg font-medium mb-4 dark:text-white">List Group with Icons</h3>
      <ListGroup 
        items={items} 
        onSelect={handleSelect} 
        activeItem={activeItem}
        variant="modern"
      />
    </div>
  );
};

render(<ListGroupExample />);
