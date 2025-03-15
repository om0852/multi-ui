"use client";

import React, { useState } from 'react';
import IndustrialListGroup from '../_components/ListGroup_37';
import { FiTool, FiSettings, FiCpu, FiPower, FiLock } from 'react-icons/fi';

const Example_37: React.FC = () => {
  const [activeItem, setActiveItem] = useState<string>('item1');

  const items = [
    {
      id: 'item1',
      title: 'Maintenance Tools',
      description: 'Industrial-grade equipment for repairs',
      icon: <FiTool />,
      badge: 'ESSENTIAL',
      badgeColor: '#607d8b'
    },
    {
      id: 'item2',
      title: 'Control Systems',
      description: 'Automated machinery management',
      icon: <FiSettings />,
      badge: 'ADVANCED',
      badgeColor: '#546e7a'
    },
    {
      id: 'item3',
      title: 'Processing Units',
      description: 'High-capacity data computation',
      icon: <FiCpu />,
      badge: 'TECH',
      badgeColor: '#455a64'
    },
    {
      id: 'item4',
      title: 'Power Generation',
      description: 'Industrial energy production systems',
      icon: <FiPower />,
      badge: 'HIGH VOLTAGE',
      badgeColor: '#37474f'
    },
    {
      id: 'item5',
      title: 'Restricted Area',
      description: 'Authorized personnel only (clearance required)',
      icon: <FiLock />,
      badge: 'LOCKED',
      badgeColor: '#263238',
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
      background: 'linear-gradient(135deg, #1a1d21, #121417)',
      borderRadius: '8px',
      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
      maxWidth: '800px',
      margin: '0 auto',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage: 'repeating-linear-gradient(45deg, rgba(0, 0, 0, 0.1) 0px, rgba(0, 0, 0, 0.1) 2px, transparent 2px, transparent 4px)',
        zIndex: 0
      }}></div>
      <div style={{
        position: 'absolute',
        top: '10px',
        right: '10px',
        fontSize: '24px',
        opacity: '0.2'
      }}>
        ⚙️
      </div>
      <h2 style={{
        color: '#e0e0e0',
        marginBottom: '1.5rem',
        fontFamily: 'Roboto Mono, monospace',
        textAlign: 'center',
        fontSize: '1.5rem',
        fontWeight: 600,
        letterSpacing: '0.05em',
        textTransform: 'uppercase',
        position: 'relative',
        zIndex: 1
      }}>
        Industrial Control Panel
      </h2>
      <IndustrialListGroup
        items={items}
        onSelect={handleSelect}
        activeItem={activeItem}
      />
    </div>
  );
};

export default Example_37;
