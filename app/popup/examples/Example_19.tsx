"use client";
import React from 'react';
import Popup_19 from '../tsx/Popup_19';

export default function PopupExample() {
  // Define menu items for the popup with gaming actions
  const menuItems = [
    { 
      label: <div className="flex flex-col items-center"><span className="text-lg">🎮</span><span className="text-xs">Play</span></div>, 
      onClick: () => console.log('Play game') 
    },
    { 
      label: <div className="flex flex-col items-center"><span className="text-lg">⏸️</span><span className="text-xs">Pause</span></div>, 
      onClick: () => console.log('Pause game') 
    },
    { 
      label: <div className="flex flex-col items-center"><span className="text-lg">🔄</span><span className="text-xs">Restart</span></div>, 
      onClick: () => console.log('Restart game') 
    },
    { 
      label: <div className="flex flex-col items-center"><span className="text-lg">⚙️</span><span className="text-xs">Settings</span></div>, 
      onClick: () => console.log('Game settings') 
    },
    { 
      label: <div className="flex flex-col items-center"><span className="text-lg">🚪</span><span className="text-xs">Exit</span></div>, 
      onClick: () => console.log('Exit game') 
    },
  ];

  return (
    <div className="w-full h-screen">
      <Popup_19 
        menuItems={menuItems}
        label={<span className="text-lg">🎯</span>}
        centerColor="bg-red-600"
        menuColor="bg-orange-500"
        centerRadius="w-16 h-16"
        menuItemRadius="w-16 h-16"
        distance={150}
      />
    </div>
  );
}
