"use client";
import React from 'react';
import PopupMenu from '../_components/Popup_26';

export default function PopupExample() {
  // Define menu items for the popup with planet options
  const menuItems = [
    { 
      label: <div className="flex flex-col items-center"><span className="text-lg">🌎</span><span className="text-xs">Earth</span></div>, 
      onClick: () => console.log('Earth selected') 
    },
    { 
      label: <div className="flex flex-col items-center"><span className="text-lg">🪐</span><span className="text-xs">Saturn</span></div>, 
      onClick: () => console.log('Saturn selected') 
    },
    { 
      label: <div className="flex flex-col items-center"><span className="text-lg">🔴</span><span className="text-xs">Mars</span></div>, 
      onClick: () => console.log('Mars selected') 
    },
    { 
      label: <div className="flex flex-col items-center"><span className="text-lg">🔵</span><span className="text-xs">Neptune</span></div>, 
      onClick: () => console.log('Neptune selected') 
    },
    { 
      label: <div className="flex flex-col items-center"><span className="text-lg">☀️</span><span className="text-xs">Sun</span></div>, 
      onClick: () => console.log('Sun selected') 
    },
  ];

  return (
    <div className="w-full h-screen">
      <PopupMenu 
        menuItems={menuItems}
        label="🚀"
        centerColor="bg-slate-800"
        menuColor="bg-slate-600"
        radius={150}
        direction="vertical"
      />
    </div>
  );
}
