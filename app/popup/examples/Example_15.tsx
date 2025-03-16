"use client";
import React from 'react';
import Popup_15 from '../_components/Popup_15';

export default function PopupExample() {
  // Define menu items for the popup with transportation options
  const menuItems = [
    { 
      label: <div className="flex flex-col items-center"><span className="text-lg">🚗</span><span className="text-xs">Car</span></div>, 
      onClick: () => console.log('Car selected') 
    },
    { 
      label: <div className="flex flex-col items-center"><span className="text-lg">🚆</span><span className="text-xs">Train</span></div>, 
      onClick: () => console.log('Train selected') 
    },
    { 
      label: <div className="flex flex-col items-center"><span className="text-lg">✈️</span><span className="text-xs">Plane</span></div>, 
      onClick: () => console.log('Plane selected') 
    },
    { 
      label: <div className="flex flex-col items-center"><span className="text-lg">🚢</span><span className="text-xs">Ship</span></div>, 
      onClick: () => console.log('Ship selected') 
    },
    { 
      label: <div className="flex flex-col items-center"><span className="text-lg">🚲</span><span className="text-xs">Bike</span></div>, 
      onClick: () => console.log('Bike selected') 
    },
  ];

  return (
    <div className="w-full h-screen">
      <Popup_15 
        menuItems={menuItems}
        label={<span className="text-lg">🚦</span>}
        centerColor="bg-violet-500"
        menuColor="bg-fuchsia-400"
        centerRadius="w-16 h-16"
        menuItemRadius="w-16 h-16"
        distance={160}
      />
    </div>
  );
}
