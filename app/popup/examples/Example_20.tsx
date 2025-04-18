"use client";
import React from 'react';
import Popup_20 from '../_components/Popup_20';

export default function PopupExample() {
  // Define menu items for the popup with productivity tools
  const menuItems = [
    { 
      label: <div className="flex flex-col items-center"><span className="text-lg">📝</span><span className="text-xs">Notes</span></div>, 
      onClick: () => console.log('Open notes') 
    },
    { 
      label: <div className="flex flex-col items-center"><span className="text-lg">📅</span><span className="text-xs">Calendar</span></div>, 
      onClick: () => console.log('Open calendar') 
    },
    { 
      label: <div className="flex flex-col items-center"><span className="text-lg">⏰</span><span className="text-xs">Reminders</span></div>, 
      onClick: () => console.log('Open reminders') 
    },
    { 
      label: <div className="flex flex-col items-center"><span className="text-lg">📊</span><span className="text-xs">Tasks</span></div>, 
      onClick: () => console.log('Open tasks') 
    },
    { 
      label: <div className="flex flex-col items-center"><span className="text-lg">📈</span><span className="text-xs">Analytics</span></div>, 
      onClick: () => console.log('Open analytics') 
    },
  ];

  return (
    <div className="w-full h-screen">
      <Popup_20 
        menuItems={menuItems}
        label={<span className="text-lg">🧰</span>}
        centerColor="bg-gradient-to-r from-green-500 to-teal-500"
        menuColor="bg-gradient-to-r from-blue-400 to-indigo-500"
        centerRadius="w-16 h-16"
        menuItemRadius="w-16 h-16"
        distance={150}
      />
    </div>
  );
}
