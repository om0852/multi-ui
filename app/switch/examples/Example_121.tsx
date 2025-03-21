"use client";

import React, { useState } from "react";
import Switch from "../_components/Switch_121";

const SwitchExample121 = () => {
  const [autoEnhance, setAutoEnhance] = useState(true);
  const [faceDetection, setFaceDetection] = useState(true);
  const [cloudBackup, setCloudBackup] = useState(false);
  const [batchProcessing, setBatchProcessing] = useState(true);

  return (
    <div className="w-full rounded-xl bg-gradient-to-br from-rose-400 to-pink-500 p-1">
      <div className="rounded-lg bg-white p-6 dark:bg-gray-900">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Photo Editor Settings
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Customize your photo editing experience
          </p>
        </div>

        <div className="space-y-6">
          {/* Auto Enhance */}
          <div className="rounded-lg border border-gray-200 p-4 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h3 className="font-medium text-gray-900 dark:text-white">
                  Auto Enhance
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {autoEnhance
                    ? "Automatic photo optimization"
                    : "Manual adjustments only"}
                </p>
              </div>
              <Switch
                checked={autoEnhance}
                onChange={setAutoEnhance}
              />
            </div>
            {autoEnhance && (
              <div className="mt-4 text-sm text-rose-600 dark:text-rose-400">
                • Automatically optimize brightness and contrast
              </div>
            )}
          </div>

          {/* Face Detection */}
          <div className="rounded-lg border border-gray-200 p-4 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h3 className="font-medium text-gray-900 dark:text-white">
                  Face Detection
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {faceDetection
                    ? "Smart face enhancement"
                    : "Basic editing"}
                </p>
              </div>
              <Switch
                checked={faceDetection}
                onChange={setFaceDetection}
              />
            </div>
            {faceDetection && (
              <div className="mt-4 text-sm text-rose-600 dark:text-rose-400">
                • Automatically detect and enhance faces
              </div>
            )}
          </div>

          {/* Cloud Backup */}
          <div className="rounded-lg border border-gray-200 p-4 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h3 className="font-medium text-gray-900 dark:text-white">
                  Cloud Backup
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {cloudBackup
                    ? "Save edits to cloud"
                    : "Local storage only"}
                </p>
              </div>
              <Switch
                checked={cloudBackup}
                onChange={setCloudBackup}
              />
            </div>
            {cloudBackup && (
              <div className="mt-4 text-sm text-rose-600 dark:text-rose-400">
                • Automatically backup edited photos
              </div>
            )}
          </div>

          {/* Batch Processing */}
          <div className="rounded-lg border border-gray-200 p-4 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h3 className="font-medium text-gray-900 dark:text-white">
                  Batch Processing
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {batchProcessing
                    ? "Edit multiple photos"
                    : "Single photo editing"}
                </p>
              </div>
              <Switch
                checked={batchProcessing}
                onChange={setBatchProcessing}
              />
            </div>
            {batchProcessing && (
              <div className="mt-4 text-sm text-rose-600 dark:text-rose-400">
                • Apply edits to multiple photos at once
              </div>
            )}
          </div>

          {/* Settings Summary */}
          <div className="rounded-lg bg-gray-50 p-4 dark:bg-gray-800">
            <h4 className="mb-3 text-sm font-medium text-gray-900 dark:text-white">
              Editor Settings Summary
            </h4>
            <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <p>• {autoEnhance ? "Auto enhance on" : "Manual editing"}</p>
              <p>• {faceDetection ? "Face detection on" : "Basic editing"}</p>
              <p>• {cloudBackup ? "Cloud backup on" : "Local storage"}</p>
              <p>• {batchProcessing ? "Batch processing on" : "Single editing"}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SwitchExample121; 