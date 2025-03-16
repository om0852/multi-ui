"use client";
import React from 'react';
import GlowingMenu from '../_components/Popup_29';

export default function PopupExample() {
  // Define menu items for the popup with holiday options
  const menuItems = [
    { 
      label: <div className="flex flex-col items-center"><span className="text-lg">🎄</span><span className="text-xs">Christmas</span></div>, 
      onClick: () => console.log('Christmas selected') 
    },
    { 
      label: <div className="flex flex-col items-center"><span className="text-lg">🎃</span><span className="text-xs">Halloween</span></div>, 
      onClick: () => console.log('Halloween selected') 
    },
    { 
      label: <div className="flex flex-col items-center"><span className="text-lg">🥚</span><span className="text-xs">Easter</span></div>, 
      onClick: () => console.log('Easter selected') 
    },
    { 
      label: <div className="flex flex-col items-center"><span className="text-lg">🎆</span><span className="text-xs">New Year</span></div>, 
      onClick: () => console.log('New Year selected') 
    },
    { 
      label: <div className="flex flex-col items-center"><span className="text-lg">❤️</span><span className="text-xs">Valentine&apos;s</span></div>, 
      onClick: () => console.log('Valentine\'s Day selected') 
    },
  ];

  return (
    <div className="w-full h-screen">
      <GlowingMenu 
        menuItems={menuItems}
        label="🎁"
        centerColor="bg-red-600"
        glowColor="ring-red-300"
        distance={150}
      />
    </div>
  );
}
