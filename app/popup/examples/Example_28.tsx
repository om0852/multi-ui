"use client";
import React from 'react';
import PopupMenu from '../_components/Popup_28';

export default function PopupExample() {
  // Define menu items for the popup with travel destinations
  const menuItems = [
    { 
      label: <div className="flex flex-col items-center"><span className="text-lg">🗽</span><span className="text-xs">New York</span></div>, 
      onClick: () => console.log('New York selected') 
    },
    { 
      label: <div className="flex flex-col items-center"><span className="text-lg">🗼</span><span className="text-xs">Tokyo</span></div>, 
      onClick: () => console.log('Tokyo selected') 
    },
    { 
      label: <div className="flex flex-col items-center"><span className="text-lg">🗿</span><span className="text-xs">Easter Island</span></div>, 
      onClick: () => console.log('Easter Island selected') 
    },
    { 
      label: <div className="flex flex-col items-center"><span className="text-lg">🏛️</span><span className="text-xs">Rome</span></div>, 
      onClick: () => console.log('Rome selected') 
    },
    { 
      label: <div className="flex flex-col items-center"><span className="text-lg">🏝️</span><span className="text-xs">Bali</span></div>, 
      onClick: () => console.log('Bali selected') 
    },
  ];

  return (
    <div className="w-full h-screen">
      <PopupMenu 
        menuItems={menuItems}
        label="✈️"
        centerColor="bg-sky-600"
        menuColor="bg-sky-400"
        radius={150}
      />
    </div>
  );
}
