"use client";

import React, { useState } from "react";
import Switch from "../_components/Switch_46";

const SwitchExample46 = () => {
  const [twoFactor, setTwoFactor] = useState(true);
  const [biometric, setBiometric] = useState(false);
  const [loginAlerts, setLoginAlerts] = useState(true);
  const [deviceSync, setDeviceSync] = useState(false);

  return (
    <div className="w-full rounded-xl bg-gradient-to-br from-slate-700 to-slate-900 p-1">
      <div className="rounded-lg bg-white p-6 dark:bg-gray-900">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Security Settings
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Configure your account security preferences
          </p>
        </div>

        <div className="space-y-6">
          {/* Two-Factor Authentication */}
          <div className="rounded-lg border-2 border-slate-200 bg-slate-50 p-4 dark:border-slate-700 dark:bg-slate-800">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h3 className="font-medium text-gray-900 dark:text-white">
                  Two-Factor Auth
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {twoFactor
                    ? "Extra security layer enabled"
                    : "Standard login only"}
                </p>
              </div>
              <Switch
                value={twoFactor}
                onChange={setTwoFactor}
              />
            </div>
            {twoFactor && (
              <div className="mt-4 text-sm text-slate-600 dark:text-slate-400">
                • Verification code required at login
              </div>
            )}
          </div>

          {/* Biometric Login */}
          <div className="rounded-lg border-2 border-slate-200 bg-slate-50 p-4 dark:border-slate-700 dark:bg-slate-800">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h3 className="font-medium text-gray-900 dark:text-white">
                  Biometric Login
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {biometric
                    ? "Use fingerprint or face ID"
                    : "Password login only"}
                </p>
              </div>
              <Switch
                value={biometric}
                onChange={setBiometric}
              />
            </div>
            {biometric && (
              <div className="mt-4 text-sm text-slate-600 dark:text-slate-400">
                • Quick and secure access
              </div>
            )}
          </div>

          {/* Login Alerts */}
          <div className="rounded-lg border-2 border-slate-200 bg-slate-50 p-4 dark:border-slate-700 dark:bg-slate-800">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h3 className="font-medium text-gray-900 dark:text-white">
                  Login Alerts
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {loginAlerts
                    ? "Get new login notifications"
                    : "No login alerts"}
                </p>
              </div>
              <Switch
                value={loginAlerts}
                onChange={setLoginAlerts}
              />
            </div>
            {loginAlerts && (
              <div className="mt-4 text-sm text-slate-600 dark:text-slate-400">
                • Email alerts for new devices
              </div>
            )}
          </div>

          {/* Device Sync */}
          <div className="rounded-lg border-2 border-slate-200 bg-slate-50 p-4 dark:border-slate-700 dark:bg-slate-800">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h3 className="font-medium text-gray-900 dark:text-white">
                  Device Sync
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {deviceSync
                    ? "Sync across devices"
                    : "Single device only"}
                </p>
              </div>
              <Switch
                value={deviceSync}
                onChange={setDeviceSync}
              />
            </div>
            {deviceSync && (
              <div className="mt-4 text-sm text-slate-600 dark:text-slate-400">
                • Secure cross-device access
              </div>
            )}
          </div>

          {/* Settings Overview */}
          <div className="rounded-lg bg-slate-100 p-4 dark:bg-slate-800">
            <h4 className="mb-3 text-sm font-medium text-slate-900 dark:text-slate-100">
              Security Overview
            </h4>
            <div className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
              <p>• {twoFactor ? "2FA enabled" : "2FA disabled"}</p>
              <p>• {biometric ? "Biometric login on" : "Standard login"}</p>
              <p>• {loginAlerts ? "Login alerts active" : "No login alerts"}</p>
              <p>• {deviceSync ? "Device sync on" : "Single device mode"}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SwitchExample46; 