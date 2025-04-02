"use client";
import React from 'react';
import Popup_5 from '../tsx/Popup_5';

export default function PopupExample() {
  // Define menu items for the popup
  const menuItems = [
    { 
      id: 'dashboard', 
      content: <div className="flex flex-col items-center"><span className="text-xs">Dashboard</span></div>, 
      onClick: () => console.log('Dashboard clicked') 
    },
    { 
      id: 'profile', 
      content: <div className="flex flex-col items-center"><span className="text-xs">Profile</span></div>, 
      onClick: () => console.log('Profile clicked') 
    },
    { 
      id: 'settings', 
      content: <div className="flex flex-col items-center"><span className="text-xs">Settings</span></div>, 
      onClick: () => console.log('Settings clicked') 
    },
    { 
      id: 'notifications', 
      content: <div className="flex flex-col items-center"><span className="text-xs">Alerts</span></div>, 
      onClick: () => console.log('Notifications clicked') 
    },
    { 
      id: 'logout', 
      content: <div className="flex flex-col items-center"><span className="text-xs">Logout</span></div>, 
      onClick: () => console.log('Logout clicked') 
    },
  ];

  return (
    <div className="w-full h-screen">
      <Popup_5 
        menuItems={menuItems}
        centralContent="Menu"
        centerColor="bg-red-500"
        menuColor="bg-gray-700"
        centerRadius="w-20 h-20"
        menuItemRadius="w-16 h-16"
        distance={140}
        onCenterClick={() => console.log('Center clicked')}
      />
    </div>
  );
}
