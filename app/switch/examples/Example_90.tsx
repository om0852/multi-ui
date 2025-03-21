"use client";

import React, { useState } from "react";
import Switch from "../_components/Switch_90";

const SwitchExample90 = () => {
  const [cameraOn, setCameraOn] = useState(true);
  const [microphoneOn, setMicrophoneOn] = useState(true);
  const [backgroundBlur, setBackgroundBlur] = useState(false);
  const [noiseReduction, setNoiseReduction] = useState(true);

  return (
    <div className="w-full rounded-xl bg-gradient-to-br from-teal-400 to-cyan-500 p-1">
      <div className="rounded-lg bg-white p-6 dark:bg-gray-900">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Video Conference Settings
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Customize your video conferencing experience
          </p>
        </div>

        <div className="space-y-6">
          {/* Camera */}
          <div className="rounded-lg border border-gray-200 p-4 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h3 className="font-medium text-gray-900 dark:text-white">
                  Camera
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {cameraOn
                    ? "Camera is enabled"
                    : "Camera is disabled"}
                </p>
              </div>
              <Switch
                checked={cameraOn}
                onChange={setCameraOn}
              />
            </div>
            {cameraOn && (
              <div className="mt-4 text-sm text-teal-600 dark:text-teal-400">
                • Video feed is active
              </div>
            )}
          </div>

          {/* Microphone */}
          <div className="rounded-lg border border-gray-200 p-4 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h3 className="font-medium text-gray-900 dark:text-white">
                  Microphone
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {microphoneOn
                    ? "Microphone is enabled"
                    : "Microphone is disabled"}
                </p>
              </div>
              <Switch
                checked={microphoneOn}
                onChange={setMicrophoneOn}
              />
            </div>
            {microphoneOn && (
              <div className="mt-4 text-sm text-teal-600 dark:text-teal-400">
                • Audio input is active
              </div>
            )}
          </div>

          {/* Background Blur */}
          <div className="rounded-lg border border-gray-200 p-4 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h3 className="font-medium text-gray-900 dark:text-white">
                  Background Blur
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {backgroundBlur
                    ? "Blur background enabled"
                    : "Background blur disabled"}
                </p>
              </div>
              <Switch
                checked={backgroundBlur}
                onChange={setBackgroundBlur}
              />
            </div>
            {backgroundBlur && (
              <div className="mt-4 text-sm text-teal-600 dark:text-teal-400">
                • Background is blurred
              </div>
            )}
          </div>

          {/* Noise Reduction */}
          <div className="rounded-lg border border-gray-200 p-4 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h3 className="font-medium text-gray-900 dark:text-white">
                  Noise Reduction
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {noiseReduction
                    ? "Noise reduction enabled"
                    : "Noise reduction disabled"}
                </p>
              </div>
              <Switch
                checked={noiseReduction}
                onChange={setNoiseReduction}
              />
            </div>
            {noiseReduction && (
              <div className="mt-4 text-sm text-teal-600 dark:text-teal-400">
                • Background noise is filtered
              </div>
            )}
          </div>

          {/* Settings Summary */}
          <div className="rounded-lg bg-gray-50 p-4 dark:bg-gray-800">
            <h4 className="mb-3 text-sm font-medium text-gray-900 dark:text-white">
              Conference Settings Summary
            </h4>
            <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <p>• {cameraOn ? "Camera on" : "Camera off"}</p>
              <p>• {microphoneOn ? "Microphone on" : "Microphone off"}</p>
              <p>• {backgroundBlur ? "Background blur on" : "Background blur off"}</p>
              <p>• {noiseReduction ? "Noise reduction on" : "Noise reduction off"}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SwitchExample90; 