"use client";

import React, { useState } from "react";
import Switch from "../_components/Switch_56";

const SwitchExample56 = () => {
  const [motionDetection, setMotionDetection] = useState(true);
  const [doorAlerts, setDoorAlerts] = useState(true);
  const [cameraRecording, setCameraRecording] = useState(false);
  const [smartLock, setSmartLock] = useState(true);

  return (
    <div className="w-full rounded-xl bg-gradient-to-br from-slate-600 to-slate-800 p-1">
      <div className="rounded-lg bg-white p-6 dark:bg-gray-900">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Home Security
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Manage your home security settings
          </p>
        </div>

        <div className="space-y-6">
          {/* Motion Detection */}
          <div className="rounded-lg border-2 border-slate-100 bg-slate-50 p-4 dark:border-slate-900 dark:bg-slate-900/20">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h3 className="font-medium text-gray-900 dark:text-white">
                  Motion Detection
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {motionDetection
                    ? "Motion sensors active"
                    : "Motion detection off"}
                </p>
              </div>
              <Switch
                checked={motionDetection}
                onChange={setMotionDetection}
              />
            </div>
            {motionDetection && (
              <div className="mt-4 text-sm text-slate-600 dark:text-slate-400">
                • Detecting movement in all zones
              </div>
            )}
          </div>

          {/* Door Alerts */}
          <div className="rounded-lg border-2 border-slate-100 bg-slate-50 p-4 dark:border-slate-900 dark:bg-slate-900/20">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h3 className="font-medium text-gray-900 dark:text-white">
                  Door Alerts
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {doorAlerts
                    ? "Door sensors active"
                    : "Door monitoring off"}
                </p>
              </div>
              <Switch
                checked={doorAlerts}
                onChange={setDoorAlerts}
              />
            </div>
            {doorAlerts && (
              <div className="mt-4 text-sm text-slate-600 dark:text-slate-400">
                • Notify on door activity
              </div>
            )}
          </div>

          {/* Camera Recording */}
          <div className="rounded-lg border-2 border-slate-100 bg-slate-50 p-4 dark:border-slate-900 dark:bg-slate-900/20">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h3 className="font-medium text-gray-900 dark:text-white">
                  Camera Recording
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {cameraRecording
                    ? "Continuous recording"
                    : "Motion-triggered only"}
                </p>
              </div>
              <Switch
                checked={cameraRecording}
                onChange={setCameraRecording}
              />
            </div>
            {cameraRecording && (
              <div className="mt-4 text-sm text-slate-600 dark:text-slate-400">
                • 24/7 video recording
              </div>
            )}
          </div>

          {/* Smart Lock */}
          <div className="rounded-lg border-2 border-slate-100 bg-slate-50 p-4 dark:border-slate-900 dark:bg-slate-900/20">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h3 className="font-medium text-gray-900 dark:text-white">
                  Smart Lock
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {smartLock
                    ? "Auto-lock enabled"
                    : "Manual locking only"}
                </p>
              </div>
              <Switch
                checked={smartLock}
                onChange={setSmartLock}
              />
            </div>
            {smartLock && (
              <div className="mt-4 text-sm text-slate-600 dark:text-slate-400">
                • Auto-lock after 5 minutes
              </div>
            )}
          </div>

          {/* Settings Overview */}
          <div className="rounded-lg bg-slate-100 p-4 dark:bg-slate-800">
            <h4 className="mb-3 text-sm font-medium text-slate-900 dark:text-slate-100">
              Security Status
            </h4>
            <div className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
              <p>• {motionDetection ? "Motion detection on" : "Motion detection off"}</p>
              <p>• {doorAlerts ? "Door alerts active" : "Door monitoring off"}</p>
              <p>• {cameraRecording ? "Continuous recording" : "Motion-triggered only"}</p>
              <p>• {smartLock ? "Smart lock enabled" : "Manual locking"}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SwitchExample56; 