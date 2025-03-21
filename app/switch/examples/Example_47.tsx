"use client";

import React, { useState } from "react";
import Switch from "../_components/Switch_47";

const SwitchExample47 = () => {
  const [crossfade, setCrossfade] = useState(true);
  const [equalizer, setEqualizer] = useState(false);
  const [gapless, setGapless] = useState(true);
  const [normalization, setNormalization] = useState(false);

  return (
    <div className="w-full rounded-xl bg-gradient-to-br from-fuchsia-600 to-purple-700 p-1">
      <div className="rounded-lg bg-white p-6 dark:bg-gray-900">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Audio Settings
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Customize your audio playback experience
          </p>
        </div>

        <div className="space-y-6">
          {/* Crossfade */}
          <div className="rounded-lg border-2 border-fuchsia-100 bg-fuchsia-50 p-4 dark:border-fuchsia-900 dark:bg-fuchsia-900/20">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h3 className="font-medium text-gray-900 dark:text-white">
                  Crossfade
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {crossfade
                    ? "Smooth transition between tracks"
                    : "Direct track switching"}
                </p>
              </div>
              <Switch
                value={crossfade}
                onChange={setCrossfade}
              />
            </div>
            {crossfade && (
              <div className="mt-4 text-sm text-fuchsia-600 dark:text-fuchsia-400">
                • 3 second fade transition
              </div>
            )}
          </div>

          {/* Equalizer */}
          <div className="rounded-lg border-2 border-fuchsia-100 bg-fuchsia-50 p-4 dark:border-fuchsia-900 dark:bg-fuchsia-900/20">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h3 className="font-medium text-gray-900 dark:text-white">
                  Equalizer
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {equalizer
                    ? "Custom audio equalization"
                    : "Default audio balance"}
                </p>
              </div>
              <Switch
                value={equalizer}
                onChange={setEqualizer}
              />
            </div>
            {equalizer && (
              <div className="mt-4 text-sm text-fuchsia-600 dark:text-fuchsia-400">
                • Customize frequency bands
              </div>
            )}
          </div>

          {/* Gapless Playback */}
          <div className="rounded-lg border-2 border-fuchsia-100 bg-fuchsia-50 p-4 dark:border-fuchsia-900 dark:bg-fuchsia-900/20">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h3 className="font-medium text-gray-900 dark:text-white">
                  Gapless Playback
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {gapless
                    ? "Continuous playback"
                    : "Standard playback"}
                </p>
              </div>
              <Switch
                value={gapless}
                onChange={setGapless}
              />
            </div>
            {gapless && (
              <div className="mt-4 text-sm text-fuchsia-600 dark:text-fuchsia-400">
                • Perfect for live albums
              </div>
            )}
          </div>

          {/* Volume Normalization */}
          <div className="rounded-lg border-2 border-fuchsia-100 bg-fuchsia-50 p-4 dark:border-fuchsia-900 dark:bg-fuchsia-900/20">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h3 className="font-medium text-gray-900 dark:text-white">
                  Volume Normalization
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {normalization
                    ? "Balance volume levels"
                    : "Original volume levels"}
                </p>
              </div>
              <Switch
                value={normalization}
                onChange={setNormalization}
              />
            </div>
            {normalization && (
              <div className="mt-4 text-sm text-fuchsia-600 dark:text-fuchsia-400">
                • Consistent listening experience
              </div>
            )}
          </div>

          {/* Settings Overview */}
          <div className="rounded-lg bg-purple-50 p-4 dark:bg-purple-900/20">
            <h4 className="mb-3 text-sm font-medium text-purple-900 dark:text-purple-100">
              Audio Configuration
            </h4>
            <div className="space-y-2 text-sm text-purple-700 dark:text-purple-300">
              <p>• {crossfade ? "Crossfade enabled" : "Direct switching"}</p>
              <p>• {equalizer ? "EQ customization on" : "Default EQ"}</p>
              <p>• {gapless ? "Gapless playback on" : "Standard playback"}</p>
              <p>• {normalization ? "Volume normalized" : "Original volume"}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SwitchExample47; 