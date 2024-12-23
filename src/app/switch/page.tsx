"use client"
import React,{useState} from 'react'
import SmoothSwitch from './_components/Switch_9'

const Page = () => {
    const [isSwitchOn, setIsSwitchOn] = useState(false);

    const handleSwitchChange = (newValue: boolean) => {
      console.log("Switch value:", newValue);
      setIsSwitchOn(newValue);
    };
  
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
        <h1 className="mb-4 text-2xl font-bold">Smooth Switch Example</h1>
        
        {/* Enabled Switch */}
        <SmoothSwitch value={isSwitchOn} onChange={handleSwitchChange} />
  
        <p className="mt-4 text-lg">
          Switch is: <span className="font-bold">{isSwitchOn ? "ON" : "OFF"}</span>
        </p>
  
        {/* Disabled Switch */}
        <div className="mt-8">
          <h2 className="mb-2 text-xl">Disabled Switch</h2>
          <SmoothSwitch value={false} onChange={() => {}} disabled />
        </div>
      </div>
    );
  };
  

export default Page
