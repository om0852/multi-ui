"use client";

import React, { useState } from "react";
import SwitchTwo from "../_components/Switch_15";

const SwitchExample15 = () => {
  const [musicEnabled, setMusicEnabled] = useState(true);
  const [videoEnabled, setVideoEnabled] = useState(false);
  const [animationsEnabled, setAnimationsEnabled] = useState(true);

  return (
    <div className="w-full space-y-8 p-4">
      {/* Controls Section */}
      <div className="rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
        <h2 className="mb-4 text-lg font-semibold">Purple Circular Switch Examples</h2>
        <p className="mb-4 text-sm text-gray-600 dark:text-gray-300">
          Stylish circular switches with purple gradients and scaling/rotation animations.
        </p>
      </div>

      {/* Example with light background */}
      <div className="space-y-6 rounded-lg bg-white p-6 shadow-md dark:bg-gray-800">
        <h3 className="text-lg font-medium">Media Settings</h3>
        
        <div className="space-y-8">
          <div className="flex items-center justify-between">
            <label className="font-medium text-gray-700 dark:text-gray-200">
              Background Music
            </label>
            <SwitchTwo
              value={musicEnabled}
              onChange={setMusicEnabled}
            />
          </div>
          
          <div className="flex items-center justify-between">
            <label className="font-medium text-gray-700 dark:text-gray-200">
              Auto-Play Videos
            </label>
            <SwitchTwo
              value={videoEnabled}
              onChange={setVideoEnabled}
            />
          </div>
          
          <div className="flex items-center justify-between">
            <label className="font-medium text-gray-700 dark:text-gray-200">
              UI Animations
            </label>
            <SwitchTwo
              value={animationsEnabled}
              onChange={setAnimationsEnabled}
            />
          </div>
        </div>
        
        <div className="mt-4 rounded-md bg-gray-50 p-4 dark:bg-gray-700">
          <p className="text-sm text-gray-600 dark:text-gray-300">
            Current settings: 
            <span className="ml-1 font-semibold">
              {musicEnabled ? "Background music on" : "Background music off"}, 
              {videoEnabled ? " Auto-play videos on" : " Auto-play videos off"}, 
              {animationsEnabled ? " UI animations on" : " UI animations off"}
            </span>
          </p>
        </div>
      </div>
      
      {/* Example with dark background */}
      <div className="space-y-6 rounded-lg bg-gray-900 p-6 shadow-md">
        <h3 className="text-lg font-medium text-white">Interactive Demo</h3>
        
        <div className="space-y-8">
          <div className="flex items-center justify-between">
            <label className="font-medium text-gray-200">
              Active Switch
            </label>
            <SwitchTwo
              value={musicEnabled}
              onChange={setMusicEnabled}
            />
          </div>
          
          <div className="flex items-center justify-between">
            <label className="font-medium text-gray-200">
              Disabled Switch (On)
            </label>
            <SwitchTwo
              value={true}
              onChange={() => {}}
              disabled={true}
            />
          </div>
          
          <div className="flex items-center justify-between">
            <label className="font-medium text-gray-200">
              Disabled Switch (Off)
            </label>
            <SwitchTwo
              value={false}
              onChange={() => {}}
              disabled={true}
            />
          </div>
        </div>
        
        <div className="mt-4 rounded-md bg-gray-800 p-4">
          <p className="text-sm text-gray-300">
            These switches feature:
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Rich purple gradient background when active</li>
              <li>Circular design with centered knob</li>
              <li>Knob scales up and rotates 90° when activated</li>
              <li>Spring animation for natural, bouncy feel</li>
            </ul>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SwitchExample15; 