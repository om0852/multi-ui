"use client";

import React, { useState } from "react";
import Switch from "../_components/Switch_38";

const SwitchExample38 = () => {
  const [voiceChat, setVoiceChat] = useState(true);
  const [graphicsMode, setGraphicsMode] = useState(true);
  const [autoJoin, setAutoJoin] = useState(false);
  const [streamMode, setStreamMode] = useState(false);

  return (
    <div className="w-full rounded-xl bg-gradient-to-br from-indigo-600 to-purple-600 p-1">
      <div className="rounded-lg bg-gray-900 p-6">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-white">
            Gaming Settings
          </h2>
          <p className="text-indigo-200">
            Customize your gaming experience
          </p>
        </div>

        <div className="space-y-6">
          {/* Voice Chat */}
          <div className="rounded-lg border-2 border-indigo-500/20 bg-indigo-900/20 p-4">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h3 className="font-medium text-white">
                  Voice Chat
                </h3>
                <p className="text-sm text-indigo-200">
                  {voiceChat
                    ? "Voice communication enabled"
                    : "Voice chat disabled"}
                </p>
              </div>
              <Switch
                value={voiceChat}
                onChange={setVoiceChat}
              />
            </div>
            {voiceChat && (
              <div className="mt-4 text-sm text-indigo-400">
                • Push-to-talk is active
              </div>
            )}
          </div>

          {/* Graphics Mode */}
          <div className="rounded-lg border-2 border-indigo-500/20 bg-indigo-900/20 p-4">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h3 className="font-medium text-white">
                  Performance Mode
                </h3>
                <p className="text-sm text-indigo-200">
                  {graphicsMode
                    ? "High performance settings"
                    : "Balanced settings"}
                </p>
              </div>
              <Switch
                value={graphicsMode}
                onChange={setGraphicsMode}
              />
            </div>
            {graphicsMode && (
              <div className="mt-4 text-sm text-indigo-400">
                • Optimized for maximum FPS
              </div>
            )}
          </div>

          {/* Auto Join */}
          <div className="rounded-lg border-2 border-indigo-500/20 bg-indigo-900/20 p-4">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h3 className="font-medium text-white">
                  Auto Join Party
                </h3>
                <p className="text-sm text-indigo-200">
                  {autoJoin
                    ? "Join friends automatically"
                    : "Manual party joining"}
                </p>
              </div>
              <Switch
                value={autoJoin}
                onChange={setAutoJoin}
              />
            </div>
            {autoJoin && (
              <div className="mt-4 text-sm text-indigo-400">
                • Join friends when online
              </div>
            )}
          </div>

          {/* Stream Mode */}
          <div className="rounded-lg border-2 border-indigo-500/20 bg-indigo-900/20 p-4">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h3 className="font-medium text-white">
                  Streamer Mode
                </h3>
                <p className="text-sm text-indigo-200">
                  {streamMode
                    ? "Privacy settings enabled"
                    : "Standard privacy"}
                </p>
              </div>
              <Switch
                value={streamMode}
                onChange={setStreamMode}
              />
            </div>
            {streamMode && (
              <div className="mt-4 text-sm text-indigo-400">
                • Hide sensitive information
              </div>
            )}
          </div>

          {/* Settings Overview */}
          <div className="rounded-lg bg-purple-900/30 p-4">
            <h4 className="mb-3 text-sm font-medium text-purple-100">
              Game Settings Overview
            </h4>
            <div className="space-y-2 text-sm text-purple-200">
              <p>• {voiceChat ? "Voice chat active" : "Voice chat off"}</p>
              <p>• {graphicsMode ? "Performance mode" : "Balanced mode"}</p>
              <p>• {autoJoin ? "Auto-join enabled" : "Manual party join"}</p>
              <p>• {streamMode ? "Streamer mode on" : "Standard mode"}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SwitchExample38; 