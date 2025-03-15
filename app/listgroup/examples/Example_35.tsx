"use client";

import React, { useState } from 'react';
import CrystallineListGroup from '../_components/ListGroup_35';
import { 
  FiCpu, 
  FiDatabase, 
  FiGlobe, 
  FiHardDrive, 
  FiServer 
} from 'react-icons/fi';

const Example_35: React.FC = () => {
  const [activeItem, setActiveItem] = useState<string>('item1');

  const items = [
    {
      id: 'item1',
      title: 'Quantum Processor',
      description: 'Next-gen computing with crystalline architecture',
      icon: <FiCpu />,
      badge: 'CORE',
      badgeColor: '#3B82F6'
    },
    {
      id: 'item2',
      title: 'Neural Network',
      description: 'Advanced AI systems with crystal memory',
      icon: <FiDatabase />,
      badge: 'AI',
      badgeColor: '#10B981'
    },
    {
      id: 'item3',
      title: 'Crystal Matrix',
      description: 'Holographic data storage system',
      icon: <FiHardDrive />,
      badge: 'STORAGE',
      badgeColor: '#8B5CF6'
    },
    {
      id: 'item4',
      title: 'Prism Network',
      description: 'Light-based communication protocol',
      icon: <FiGlobe />,
      badge: 'COMMS',
      badgeColor: '#EC4899'
    },
    {
      id: 'item5',
      title: 'Crystalline Server',
      description: 'High-capacity data processing unit',
      icon: <FiServer />,
      badge: 'CLOUD',
      badgeColor: '#F59E0B'
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
      background: 'linear-gradient(135deg, #0F172A, #1E293B)',
      borderRadius: '12px',
      boxShadow: '0 10px 25px rgba(0, 0, 0, 0.2)',
      maxWidth: '800px',
      margin: '0 auto'
    }}>
      <h2 style={{
        color: '#29C4FF',
        marginBottom: '1.5rem',
        fontFamily: 'Rajdhani, sans-serif',
        textAlign: 'center',
        fontSize: '1.75rem',
        fontWeight: 600,
        letterSpacing: '0.05em',
        textShadow: '0 0 15px rgba(41, 196, 255, 0.5)'
      }}>
        Crystalline Tech Components
      </h2>
      <CrystallineListGroup
        items={items}
        onSelect={handleSelect}
        activeItem={activeItem}
      />
    </div>
  );
};

export default Example_35;
