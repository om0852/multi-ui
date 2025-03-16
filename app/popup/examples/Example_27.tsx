"use client";
import React from 'react';
import PopupMenu from '../_components/Popup_27';

export default function PopupExample() {
  // Define menu items for the popup with sport options
  const menuItems = [
    { 
      label: <div className="flex flex-col items-center"><span className="text-lg">⚽</span><span className="text-xs">Soccer</span></div>, 
      onClick: () => console.log('Soccer selected') 
    },
    { 
      label: <div className="flex flex-col items-center"><span className="text-lg">🏀</span><span className="text-xs">Basketball</span></div>, 
      onClick: () => console.log('Basketball selected') 
    },
    { 
      label: <div className="flex flex-col items-center"><span className="text-lg">🏈</span><span className="text-xs">Football</span></div>, 
      onClick: () => console.log('Football selected') 
    },
    { 
      label: <div className="flex flex-col items-center"><span className="text-lg">⚾</span><span className="text-xs">Baseball</span></div>, 
      onClick: () => console.log('Baseball selected') 
    },
    { 
      label: <div className="flex flex-col items-center"><span className="text-lg">🎾</span><span className="text-xs">Tennis</span></div>, 
      onClick: () => console.log('Tennis selected') 
    },
  ];

  return (
    <div className="w-full h-screen">
      <PopupMenu 
        menuItems={menuItems}
        label="🏆"
        centerColor="bg-blue-700"
        menuColor="bg-blue-500"
        radius={150}
        direction="horizontal"
      />
    </div>
  );
}
