"use client"
import React, { useState } from 'react';
import MedievalListGroup from '../_components/ListGroup_31';
import { GiSwordman, GiWizardStaff, GiArrowsShield, GiTreasureMap, GiLockedChest } from 'react-icons/gi';

const Example_31: React.FC = () => {
  const [activeItem, setActiveItem] = useState<string>('item1');

  const items = [
    {
      id: 'item1',
      title: 'Knight\'s Quest',
      description: 'Embark on a journey to slay the dragon',
      icon: <GiSwordman />,
      badge: 'HEROIC',
      badgeColor: '#8b4513'
    },
    {
      id: 'item2',
      title: 'Wizard\'s Tower',
      description: 'Learn ancient spells and magical arts',
      icon: <GiWizardStaff />,
      badge: 'ARCANE',
      badgeColor: '#4b0082'
    },
    {
      id: 'item3',
      title: 'Royal Guard',
      description: 'Protect the kingdom from invaders',
      icon: <GiArrowsShield />,
      badge: 'DUTY',
      badgeColor: '#a52a2a'
    },
    {
      id: 'item4',
      title: 'Treasure Hunt',
      description: 'Search for lost artifacts and gold',
      icon: <GiTreasureMap />,
      badge: 'RICHES',
      badgeColor: '#daa520'
    },
    {
      id: 'item5',
      title: 'Forbidden Vault',
      description: 'Contains dangerous relics (requires royal key)',
      icon: <GiLockedChest />,
      badge: 'LOCKED',
      badgeColor: '#800000',
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
      background: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 512 512\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.7\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\' opacity=\'0.05\'/%3E%3C/svg%3E"), #f8f0dd',
      borderRadius: '12px',
      boxShadow: '0 10px 30px rgba(139, 69, 19, 0.3)',
      maxWidth: '800px',
      margin: '0 auto',
      border: '3px solid #8b4513'
    }}>
      <h2 style={{
        color: '#8b4513',
        marginBottom: '1.5rem',
        fontFamily: 'MedievalSharp, cursive',
        textAlign: 'center',
        fontSize: '2rem',
        fontWeight: 600,
        letterSpacing: '0.05em',
        textShadow: '2px 2px 4px rgba(139, 69, 19, 0.2)'
      }}>
        Kingdom of Eldoria
      </h2>
      <MedievalListGroup
        items={items}
        onSelect={handleSelect}
        activeItem={activeItem}
      />
    </div>
  );
};

export default Example_31;
