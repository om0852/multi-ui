"use client";

import React, { useState } from "react";
import Switch from "../_components/Switch_32";

const SwitchExample32 = () => {
  const [shuffle, setShuffle] = useState(false);
  const [repeat, setRepeat] = useState(true);
  const [crossfade, setCrossfade] = useState(true);
  const [offlineMode, setOfflineMode] = useState(false);

  return (
    <div className="w-full rounded-xl bg-gradient-to-br from-purple-900 to-indigo-900 p-6">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-white">
          Music Player Settings
        </h2>
        <p className="text-purple-200">
          Customize your listening experience
        </p>
      </div>

      <div className="space-y-6">
        {/* Playback Settings */}
        <div className="rounded-lg bg-white/10 p-5 backdrop-blur-lg">
          <h3 className="mb-4 text-lg font-medium text-white">
            Playback
          </h3>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <label className="block font-medium text-purple-100">
                  Shuffle Play
                </label>
                <p className="text-sm text-purple-300">
                  {shuffle ? "Random playback enabled" : "Play in order"}
                </p>
              </div>
              <Switch
                value={shuffle}
                onChange={setShuffle}
              />
            </div>

            <div className="flex items-center justify-between">
              <div>
                <label className="block font-medium text-purple-100">
                  Repeat Mode
                </label>
                <p className="text-sm text-purple-300">
                  {repeat ? "Repeat playlist" : "Play once"}
                </p>
              </div>
              <Switch
                value={repeat}
                onChange={setRepeat}
              />
            </div>
          </div>
        </div>

        {/* Audio Settings */}
        <div className="rounded-lg bg-white/10 p-5 backdrop-blur-lg">
          <h3 className="mb-4 text-lg font-medium text-white">
            Audio
          </h3>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <label className="block font-medium text-purple-100">
                  Crossfade
                </label>
                <p className="text-sm text-purple-300">
                  {crossfade ? "Smooth transitions" : "Normal transitions"}
                </p>
              </div>
              <Switch
                value={crossfade}
                onChange={setCrossfade}
              />
            </div>
          </div>
        </div>

        {/* Storage Settings */}
        <div className="rounded-lg bg-white/10 p-5 backdrop-blur-lg">
          <h3 className="mb-4 text-lg font-medium text-white">
            Storage
          </h3>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <label className="block font-medium text-purple-100">
                  Offline Mode
                </label>
                <p className="text-sm text-purple-300">
                  {offlineMode ? "Playing downloaded songs" : "Streaming enabled"}
                </p>
              </div>
              <Switch
                value={offlineMode}
                onChange={setOfflineMode}
              />
            </div>
          </div>
        </div>

        {/* Status Bar */}
        <div className="mt-6 rounded-lg bg-white/5 p-4 text-sm text-purple-200">
          <div className="space-y-2">
            <p>
              • {shuffle ? "Shuffle mode is active" : "Playing tracks in order"}
            </p>
            <p>
              • {repeat ? "Playlist will repeat" : "Playlist will stop after completion"}
            </p>
            <p>
              • {crossfade ? "Crossfade is enabled" : "Normal track transitions"}
            </p>
            <p>
              • {offlineMode ? "Playing from downloaded library" : "Streaming from cloud"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SwitchExample32; 