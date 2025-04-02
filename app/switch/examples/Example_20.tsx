"use client";

import React, { useState } from "react";
import Switch from "../tsx/Switch_20";

const SwitchExample20 = () => {
  const [ecoMode, setEcoMode] = useState(true);
  const [sustainableEnergy, setSustainableEnergy] = useState(false);
  const [paperless, setPaperless] = useState(true);

  return (
    <div className="w-full space-y-8 p-4">
      {/* Controls Section */}
      <div className="rounded-lg bg-gray-50 p-4 dark:bg-gray-800">
        <h2 className="mb-4 text-lg font-semibold text-green-700 dark:text-green-400">
          Eco-Friendly Switch Examples
        </h2>
        <p className="mb-4 text-sm text-gray-600 dark:text-gray-300">
          Nature-inspired switches with leaf animations and forest-themed gradients, perfect for eco-friendly applications.
        </p>
      </div>

      {/* Light Background Example */}
      <div className="space-y-6 rounded-lg bg-white p-6 shadow-md dark:bg-gray-800">
        <h3 className="text-lg font-medium text-green-600 dark:text-green-400">
          Sustainability Settings
        </h3>
        
        <div className="space-y-8">
          <div className="flex items-center justify-between">
            <div>
              <label className="block font-medium text-gray-700 dark:text-gray-200">
                Eco Mode
              </label>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Optimize for energy efficiency
              </p>
            </div>
            <Switch
              value={ecoMode}
              onChange={setEcoMode}
            />
          </div>
          
          <div className="flex items-center justify-between">
            <div>
              <label className="block font-medium text-gray-700 dark:text-gray-200">
                Sustainable Energy
              </label>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Use renewable energy sources
              </p>
            </div>
            <Switch
              value={sustainableEnergy}
              onChange={setSustainableEnergy}
            />
          </div>
          
          <div className="flex items-center justify-between">
            <div>
              <label className="block font-medium text-gray-700 dark:text-gray-200">
                Paperless Mode
              </label>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Digital-only documentation
              </p>
            </div>
            <Switch
              value={paperless}
              onChange={setPaperless}
            />
          </div>
        </div>
        
        <div className="mt-6 rounded-md bg-green-50 p-4 dark:bg-green-900/20">
          <p className="text-sm text-green-700 dark:text-green-300">
            Environmental Impact: 
            <span className="ml-1 font-semibold">
              {[
                ecoMode && "Reduced energy consumption",
                sustainableEnergy && "Using green energy",
                paperless && "Saving trees"
              ].filter(Boolean).join(" • ")}
            </span>
          </p>
        </div>
      </div>
      
      {/* Dark Background Example */}
      <div className="space-y-6 rounded-lg bg-gray-900 p-6 shadow-md">
        <h3 className="text-lg font-medium text-green-400">Switch States</h3>
        
        <div className="space-y-8">
          <div className="flex items-center justify-between">
            <label className="font-medium text-gray-200">
              Interactive Switch
            </label>
            <Switch
              value={ecoMode}
              onChange={setEcoMode}
            />
          </div>
          
          <div className="flex items-center justify-between">
            <label className="font-medium text-gray-200">
              Disabled (On)
            </label>
            <Switch
              value={true}
              onChange={() => {}}
              disabled={true}
            />
          </div>
          
          <div className="flex items-center justify-between">
            <label className="font-medium text-gray-200">
              Disabled (Off)
            </label>
            <Switch
              value={false}
              onChange={() => {}}
              disabled={true}
            />
          </div>
        </div>
        
        <div className="mt-6 rounded-md bg-gray-800 p-4">
          <p className="text-sm text-gray-300">
            Features:
            <ul className="mt-2 space-y-1 list-disc pl-5">
              <li>Nature-inspired green gradient background</li>
              <li>Decorative leaf pattern animation</li>
              <li>Smooth rotation and scaling effects</li>
              <li>Elegant leaf icon indicator</li>
            </ul>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SwitchExample20; 