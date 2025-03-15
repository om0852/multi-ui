"use client"
import React, { useState } from 'react';
import GeometricListGroup from '../_components/ListGroup_33';
import { FiHexagon, FiTriangle, FiSquare, FiCircle, FiOctagon } from 'react-icons/fi';

const Example_33: React.FC = () => {
  const [activeItem, setActiveItem] = useState<string>('item1');

  const items = [
    {
      id: 'item1',
      title: 'Hexagonal Design',
      description: 'Six-sided geometric pattern system',
      icon: <FiHexagon />,
      badge: 'FEATURED',
      badgeColor: '#6366f1'
    },
    {
      id: 'item2',
      title: 'Triangular Elements',
      description: 'Three-point angular components',
      icon: <FiTriangle />,
      badge: 'DYNAMIC',
      badgeColor: '#ec4899'
    },
    {
      id: 'item3',
      title: 'Square Framework',
      description: 'Four-sided structural foundation',
      icon: <FiSquare />,
      badge: 'STABLE',
      badgeColor: '#10b981'
    },
    {
      id: 'item4',
      title: 'Circular Interface',
      description: 'Rounded continuous experience',
      icon: <FiCircle />,
      badge: 'FLUID',
      badgeColor: '#3b82f6'
    },
    {
      id: 'item5',
      title: 'Octagonal System',
      description: 'Eight-sided advanced pattern (in development)',
      icon: <FiOctagon />,
      badge: 'LOCKED',
      badgeColor: '#f43f5e',
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
      background: 'linear-gradient(135deg, #0f172a, #1e293b)',
      borderRadius: '16px',
      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
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
        background: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255, 255, 255, 0.03) 10px, rgba(255, 255, 255, 0.03) 20px)',
        zIndex: 0
      }}></div>
      <h2 style={{
        color: '#FFFFFF',
        marginBottom: '1.5rem',
        fontFamily: 'Space Grotesk, sans-serif',
        textAlign: 'center',
        fontSize: '1.75rem',
        fontWeight: 600,
        letterSpacing: '0.05em',
        position: 'relative',
        zIndex: 1
      }}>
        Geometric Patterns
      </h2>
      <GeometricListGroup
        items={items}
        onSelect={handleSelect}
        activeItem={activeItem}
      />
    </div>
  );
};

export default Example_33;
