"use client";

import React, { useState } from "react";
import Switch from "../_components/Switch_22";

const SwitchExample22 = () => {
  const [twoFactor, setTwoFactor] = useState(true);
  const [biometrics, setBiometrics] = useState(false);
  const [privateMode, setPrivateMode] = useState(false);

  return (
    <div className="w-full space-y-8 p-4">
      {/* Controls Section */}
      <div className="rounded-lg bg-blue-50 p-4 dark:bg-blue-900/20">
        <h2 className="mb-4 text-lg font-semibold text-blue-700 dark:text-blue-400">
          Security Settings
        </h2>
        <p className="mb-4 text-sm text-gray-600 dark:text-gray-300">
          Enhance your account security with these advanced protection features.
        </p>
      </div>

      {/* Light Background Example */}
      <div className="space-y-6 rounded-lg bg-white p-6 shadow-md dark:bg-gray-800">
        <h3 className="text-lg font-medium text-blue-600 dark:text-blue-400">
          Privacy Controls
        </h3>
        
        <div className="space-y-8">
          <div className="flex items-center justify-between">
            <div>
              <label className="block font-medium text-gray-700 dark:text-gray-200">
                Two-Factor Authentication
              </label>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Additional security layer
              </p>
            </div>
            <Switch
              value={twoFactor}
              onChange={setTwoFactor}
            />
          </div>
          
          <div className="flex items-center justify-between">
            <div>
              <label className="block font-medium text-gray-700 dark:text-gray-200">
                Biometric Login
              </label>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Use fingerprint or face ID
              </p>
            </div>
            <Switch
              value={biometrics}
              onChange={setBiometrics}
            />
          </div>
          
          <div className="flex items-center justify-between">
            <div>
              <label className="block font-medium text-gray-700 dark:text-gray-200">
                Private Mode
              </label>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Enhanced privacy protection
              </p>
            </div>
            <Switch
              value={privateMode}
              onChange={setPrivateMode}
            />
          </div>
        </div>
        
        <div className="mt-6 rounded-md bg-blue-50 p-4 dark:bg-blue-900/20">
          <p className="text-sm text-blue-700 dark:text-blue-300">
            Security Status: 
            <span className="ml-1 font-semibold">
              {twoFactor && biometrics && privateMode
                ? "Maximum Security"
                : [
                    twoFactor && "2FA Active",
                    biometrics && "Biometrics Enabled",
                    privateMode && "Private Mode On"
                  ].filter(Boolean).join(" • ") || "Basic Security"}
            </span>
          </p>
        </div>
      </div>

      {/* Feature List */}
      <div className="rounded-lg bg-gray-50 p-6 dark:bg-gray-900">
        <h4 className="mb-4 text-sm font-medium text-blue-600 dark:text-blue-400">
          Available Security Features
        </h4>
        <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
          <li className="flex items-center">
            <span className="mr-2">🔒</span>
            Two-factor authentication via SMS or authenticator app
          </li>
          <li className="flex items-center">
            <span className="mr-2">👆</span>
            Biometric authentication support
          </li>
          <li className="flex items-center">
            <span className="mr-2">🕵️</span>
            Private browsing and enhanced tracking protection
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SwitchExample22; 