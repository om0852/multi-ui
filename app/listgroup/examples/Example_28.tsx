"use client"
import React, { useState } from 'react';
import NordicListGroup from '../_components/ListGroup_28';
import { FaHome, FaBook, FaCalendarAlt, FaChartLine, FaCog } from 'react-icons/fa';

const Example_28: React.FC = () => {
  const [activeItem, setActiveItem] = useState('item1');

  const items = [
    {
      id: 'item1',
      title: 'Dashboard',
      description: 'Overview of your account',
      icon: <FaHome />,
      badge: 'New',
      badgeColor: '#4a5f7b'
    },
    {
      id: 'item2',
      title: 'Documents',
      description: 'Manage your files',
      icon: <FaBook />,
      badge: '12',
      badgeColor: '#5e7290'
    },
    {
      id: 'item3',
      title: 'Calendar',
      description: 'Schedule and appointments',
      icon: <FaCalendarAlt />,
      badge: 'Today',
      badgeColor: '#7286a5'
    },
    {
      id: 'item4',
      title: 'Analytics',
      description: 'View performance metrics',
      icon: <FaChartLine />,
      badge: 'Updated',
      badgeColor: '#8699ba'
    },
    {
      id: 'item5',
      title: 'Settings',
      description: 'System maintenance (restricted)',
      icon: <FaCog />,
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
      maxWidth: '600px', 
      margin: '2rem auto', 
      padding: '2rem',
      background: '#f0f5fa',
      borderRadius: '12px',
      boxShadow: '0 8px 30px rgba(200, 215, 235, 0.2)',
    }}>
      <h3 style={{ 
        marginBottom: '1.5rem', 
        color: '#2c3e50', 
        textAlign: 'center',
        fontFamily: 'Inter, sans-serif',
        fontWeight: 500,
        letterSpacing: '0.01em'
      }}>
        Account Management
      </h3>
      
      <NordicListGroup 
        items={items} 
        onSelect={handleSelect} 
        activeItem={activeItem} 
      />
    </div>
  );
};

export default Example_28;
