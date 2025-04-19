"use client";
import React from 'react';
import Popup_9 from '../tsx/Popup_9';

export default function PopupExample() {
  // Define menu items for the popup with emojis
  const menuItems = [
    { 
      label: <span>🏠 Home</span>, 
      onClick: () => console.log('Home clicked') 
    },
    { 
      label: <span>📝 Notes</span>, 
      onClick: () => console.log('Notes clicked') 
    },
    { 
      label: <span>📅 Calendar</span>, 
      onClick: () => console.log('Calendar clicked') 
    },
    { 
      label: <span>⚙️ Settings</span>, 
      onClick: () => console.log('Settings clicked') 
    },
    { 
      label: <span>👤 Profile</span>, 
      onClick: () => console.log('Profile clicked') 
    },
  ];

  return (
    <div className="w-full h-screen">
      <Popup_9 
        menuItems={menuItems}
        label={<span className="text-2xl">📱</span>}
        centerColor="bg-gradient-to-r from-blue-500 to-purple-500"
        menuColor="bg-gradient-to-r from-green-400 to-blue-400"
        centerRadius="w-20 h-20"
        menuItemRadius="w-32 h-12"
        distance={160}
        onCenterClick={() => console.log('App menu opened')}
      />
    </div>
  );
}
