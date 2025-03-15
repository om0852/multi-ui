"use client"
import React, { useState } from 'react';
import SciFiListGroup from '../_components/ListGroup_30';
import { FiCpu, FiServer, FiShield, FiGlobe, FiLock } from 'react-icons/fi';

const Example_30: React.FC = () => {
  const [activeItem, setActiveItem] = useState<string>('item1');

  const items = [
    {
      id: 'item1',
      title: 'Neural Interface',
      description: 'Direct brain-computer connection system',
      icon: <FiCpu />,
      badge: 'ACTIVE',
      badgeColor: '#00bcd4'
    },
    {
      id: 'item2',
      title: 'Quantum Server',
      description: 'Parallel processing quantum computing node',
      icon: <FiServer />,
      badge: 'SECURE',
      badgeColor: '#4caf50'
    },
    {
      id: 'item3',
      title: 'Firewall Protocol',
      description: 'Advanced cyber defense system',
      icon: <FiShield />,
      badge: 'LEVEL 5',
      badgeColor: '#ff9800'
    },
    {
      id: 'item4',
      title: 'Global Network',
      description: 'Worldwide data transmission grid',
      icon: <FiGlobe />,
      badge: 'ONLINE',
      badgeColor: '#2196f3'
    },
    {
      id: 'item5',
      title: 'Encrypted Storage',
      description: 'Restricted access data vault (locked)',
      icon: <FiLock />,
      badge: 'LOCKED',
      badgeColor: '#f44336',
      disabled: true
    }
  ];

interface ListGroupItem {
    id: string;
    title: string;
    description?: string;
    icon?: React.ReactNode;
    badge?: string | number;
    badgeColor?: string;
    disabled?: boolean;
  }
  
  const handleSelect = (item: ListGroupItem) => {    setActiveItem(item.id);
    console.log(`Selected: ${item.title}`);
  };

  return (
    <div style={{
      padding: '2rem',
      background: 'linear-gradient(135deg, #050a14, #0c1524)',
      borderRadius: '8px',
      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3), 0 0 50px rgba(0, 255, 255, 0.1) inset',
      maxWidth: '800px',
      margin: '0 auto'
    }}>
      <h2 style={{
        color: '#00fff2',
        marginBottom: '1.5rem',
        fontFamily: 'Space Grotesk, sans-serif',
        textAlign: 'center',
        fontSize: '1.75rem',
        fontWeight: 500,
        letterSpacing: '0.05em',
        textShadow: '0 0 15px rgba(0, 255, 255, 0.5)'
      }}>
        Cybernetic Systems
      </h2>
      <SciFiListGroup
        items={items}
        onSelect={handleSelect}
        activeItem={activeItem}
      />
    </div>
  );
};

export default Example_30;
