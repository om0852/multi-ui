"use client";

import React, { useState } from 'react';
import CelestialListGroup from '../_components/ListGroup_36';
import { 
  FiStar, 
  FiMoon, 
  FiSun, 
  FiGlobe, 
  FiCompass 
} from 'react-icons/fi';

const Example_36: React.FC = () => {
  const [activeItem, setActiveItem] = useState<string>('item1');

  const items = [
    {
      id: 'item1',
      title: 'Nebula Exploration',
      description: 'Journey through cosmic clouds of gas and dust',
      icon: <FiStar />,
      badge: 'FEATURED',
      badgeColor: '#8B5CF6'
    },
    {
      id: 'item2',
      title: 'Lunar Expedition',
      description: 'Discover the mysteries of Earth\'s natural satellite',
      icon: <FiMoon />,
      badge: 'POPULAR',
      badgeColor: '#3B82F6'
    },
    {
      id: 'item3',
      title: 'Solar Observatory',
      description: 'Study the sun\'s activity and solar phenomena',
      icon: <FiSun />,
      badge: 'HOT',
      badgeColor: '#F59E0B'
    },
    {
      id: 'item4',
      title: 'Exoplanet Survey',
      description: 'Catalog worlds beyond our solar system',
      icon: <FiGlobe />,
      badge: 'NEW',
      badgeColor: '#10B981'
    },
    {
      id: 'item5',
      title: 'Cosmic Navigation',
      description: 'Chart courses through interstellar space',
      icon: <FiCompass />,
      badge: 'ADVANCED',
      badgeColor: '#EC4899'
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
      background: 'linear-gradient(135deg, #050A1C, #0F172A)',
      borderRadius: '12px',
      boxShadow: '0 10px 25px rgba(0, 0, 0, 0.3)',
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
        background: 'radial-gradient(circle at 20% 30%, rgba(88, 88, 255, 0.1) 0%, transparent 30%), radial-gradient(circle at 80% 70%, rgba(138, 43, 226, 0.1) 0%, transparent 30%)',
        zIndex: 0
      }}></div>
      <h2 style={{
        color: '#5858FF',
        marginBottom: '1.5rem',
        fontFamily: 'Orbitron, sans-serif',
        textAlign: 'center',
        fontSize: '1.75rem',
        fontWeight: 600,
        letterSpacing: '0.05em',
        textShadow: '0 0 15px rgba(88, 88, 255, 0.5)',
        position: 'relative',
        zIndex: 1
      }}>
        Celestial Expeditions
      </h2>
      <CelestialListGroup
        items={items}
        onSelect={handleSelect}
        activeItem={activeItem}
      />
    </div>
  );
};

export default Example_36;
