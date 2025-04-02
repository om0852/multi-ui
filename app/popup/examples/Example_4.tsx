"use client";
import React from 'react';
import Popup_4 from '../tsx/Popup_4';

export default function PopupExample() {
  // Define menu items for the popup with icons
  const menuItems = [
    { 
      id: 'home', 
      content: <span className="material-icons">home</span>, 
      href: '#home', 
      onClick: () => console.log('Home clicked') 
    },
    { 
      id: 'person', 
      content: <span className="material-icons">person</span>, 
      href: '#about', 
      onClick: () => console.log('About clicked') 
    },
    { 
      id: 'settings', 
      content: <span className="material-icons">settings</span>, 
      href: '#settings', 
      onClick: () => console.log('Settings clicked') 
    },
    { 
      id: 'mail', 
      content: <span className="material-icons">mail</span>, 
      href: '#contact', 
      onClick: () => console.log('Contact clicked') 
    },
  ];

  return (
    <div className="w-full h-screen">
      <Popup_4 
        menuItems={menuItems}
        centralContent={<span className="material-icons text-2xl">menu</span>}
        centerColor="bg-teal-500"
        menuColor="bg-indigo-400"
        centerRadius="w-24 h-24"
        menuItemRadius="w-16 h-16"
        distance={150}
        onCenterClick={() => console.log('Menu opened')}
      />
    </div>
  );
}
