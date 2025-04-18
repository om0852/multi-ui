"use client";

import React, { useState } from "react";
import SwitchFour from "../_components/Switch_17";

const SwitchExample17 = () => {
  const [alarmEnabled, setAlarmEnabled] = useState(true);
  const [alertsEnabled, setAlertsEnabled] = useState(false);
  const [emergencyModeEnabled, setEmergencyModeEnabled] = useState(true);

  return (
    <div className="w-full space-y-8 p-4">
      {/* Controls Section */}
      <div className="rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
        <h2 className="mb-4 text-lg font-semibold">Red Alert Switch Examples</h2>
        <p className="mb-4 text-sm text-gray-600 dark:text-gray-300">
          Alert-themed circular switches with vertical movement and red gradients.
        </p>
      </div>

      {/* Example with light background */}
      <div className="space-y-6 rounded-lg bg-white p-6 shadow-md dark:bg-gray-800">
        <h3 className="text-lg font-medium">Alert Settings</h3>
        
        <div className="space-y-8">
          <div className="flex items-center justify-between">
            <label className="font-medium text-gray-700 dark:text-gray-200">
              Alarm System
            </label>
            <SwitchFour
              value={alarmEnabled}
              onChange={setAlarmEnabled}
            />
          </div>
          
          <div className="flex items-center justify-between">
            <label className="font-medium text-gray-700 dark:text-gray-200">
              Push Alerts
            </label>
            <SwitchFour
              value={alertsEnabled}
              onChange={setAlertsEnabled}
            />
          </div>
          
          <div className="flex items-center justify-between">
            <label className="font-medium text-gray-700 dark:text-gray-200">
              Emergency Mode
            </label>
            <SwitchFour
              value={emergencyModeEnabled}
              onChange={setEmergencyModeEnabled}
            />
          </div>
        </div>
        
        <div className="mt-4 rounded-md bg-gray-50 p-4 dark:bg-gray-700">
          <p className="text-sm text-gray-600 dark:text-gray-300">
            Current settings: 
            <span className="ml-1 font-semibold">
              {alarmEnabled ? "Alarm system on" : "Alarm system off"}, 
              {alertsEnabled ? " Push alerts on" : " Push alerts off"}, 
              {emergencyModeEnabled ? " Emergency mode on" : " Emergency mode off"}
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
            <SwitchFour
              value={alarmEnabled}
              onChange={setAlarmEnabled}
            />
          </div>
          
          <div className="flex items-center justify-between">
            <label className="font-medium text-gray-200">
              Disabled Switch (On)
            </label>
            <SwitchFour
              value={true}
              onChange={() => {}}
              disabled={true}
            />
          </div>
          
          <div className="flex items-center justify-between">
            <label className="font-medium text-gray-200">
              Disabled Switch (Off)
            </label>
            <SwitchFour
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
              <li>Red gradient background representing alert status</li>
              <li>Unique vertical movement of the knob (up/down)</li>
              <li>45-degree rotation in opposite directions based on state</li>
              <li>Spring animation for responsive feedback</li>
            </ul>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SwitchExample17; 