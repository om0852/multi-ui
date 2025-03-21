"use client";

import React, { useState } from "react";
import Switch from "../_components/Switch_128";

const SwitchExample128 = () => {
  const [autoSave, setAutoSave] = useState(true);
  const [cloudSync, setCloudSync] = useState(true);
  const [achievements, setAchievements] = useState(true);
  const [gameChat, setGameChat] = useState(false);

  return (
    <div className="w-full rounded-xl bg-gradient-to-br from-emerald-400 to-teal-500 p-1">
      <div className="rounded-lg bg-white p-6 dark:bg-gray-900">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Gaming Settings
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Customize your gaming experience
          </p>
        </div>

        <div className="space-y-6">
          {/* Auto Save */}
          <div className="rounded-lg border border-gray-200 p-4 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h3 className="font-medium text-gray-900 dark:text-white">
                  Auto Save
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {autoSave
                    ? "Automatic game saving"
                    : "Manual saving only"}
                </p>
              </div>
              <Switch
                checked={autoSave}
                onChange={setAutoSave}
              />
            </div>
            {autoSave && (
              <div className="mt-4 text-sm text-emerald-600 dark:text-emerald-400">
                • Save game progress automatically
              </div>
            )}
          </div>

          {/* Cloud Sync */}
          <div className="rounded-lg border border-gray-200 p-4 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h3 className="font-medium text-gray-900 dark:text-white">
                  Cloud Sync
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {cloudSync
                    ? "Sync across devices"
                    : "Local saves only"}
                </p>
              </div>
              <Switch
                checked={cloudSync}
                onChange={setCloudSync}
              />
            </div>
            {cloudSync && (
              <div className="mt-4 text-sm text-emerald-600 dark:text-emerald-400">
                • Access saves from any device
              </div>
            )}
          </div>

          {/* Achievements */}
          <div className="rounded-lg border border-gray-200 p-4 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h3 className="font-medium text-gray-900 dark:text-white">
                  Achievements
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {achievements
                    ? "Track game achievements"
                    : "Achievements disabled"}
                </p>
              </div>
              <Switch
                checked={achievements}
                onChange={setAchievements}
              />
            </div>
            {achievements && (
              <div className="mt-4 text-sm text-emerald-600 dark:text-emerald-400">
                • Track and display game achievements
              </div>
            )}
          </div>

          {/* Game Chat */}
          <div className="rounded-lg border border-gray-200 p-4 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h3 className="font-medium text-gray-900 dark:text-white">
                  Game Chat
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {gameChat
                    ? "Enable in-game chat"
                    : "Chat disabled"}
                </p>
              </div>
              <Switch
                checked={gameChat}
                onChange={setGameChat}
              />
            </div>
            {gameChat && (
              <div className="mt-4 text-sm text-emerald-600 dark:text-emerald-400">
                • Chat with other players
              </div>
            )}
          </div>

          {/* Settings Summary */}
          <div className="rounded-lg bg-gray-50 p-4 dark:bg-gray-800">
            <h4 className="mb-3 text-sm font-medium text-gray-900 dark:text-white">
              Gaming Settings Summary
            </h4>
            <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <p>• {autoSave ? "Auto save on" : "Manual saving"}</p>
              <p>• {cloudSync ? "Cloud sync enabled" : "Local saves only"}</p>
              <p>• {achievements ? "Achievements tracking on" : "Achievements off"}</p>
              <p>• {gameChat ? "Game chat enabled" : "Chat disabled"}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SwitchExample128; 