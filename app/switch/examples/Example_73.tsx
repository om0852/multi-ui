"use client";

import React, { useState } from "react";
import Switch from "../_components/Switch_73";

const SwitchExample73 = () => {
  const [midiSync, setMidiSync] = useState(true);
  const [audioLatency, setAudioLatency] = useState(false);
  const [pluginAutoSave, setPluginAutoSave] = useState(true);
  const [metronome, setMetronome] = useState(true);

  return (
    <div className="w-full rounded-xl bg-gradient-to-br from-fuchsia-400 to-pink-500 p-1">
      <div className="rounded-lg bg-white p-6 dark:bg-gray-900">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Music Production Settings
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Customize your music production experience
          </p>
        </div>

        <div className="space-y-6">
          {/* MIDI Sync */}
          <div className="rounded-lg border border-gray-200 p-4 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h3 className="font-medium text-gray-900 dark:text-white">
                  MIDI Sync
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {midiSync
                    ? "External MIDI synchronization"
                    : "Internal timing only"}
                </p>
              </div>
              <Switch
                checked={midiSync}
                onChange={setMidiSync}
              />
            </div>
            {midiSync && (
              <div className="mt-4 text-sm text-fuchsia-600 dark:text-fuchsia-400">
                • Sync with external MIDI devices
              </div>
            )}
          </div>

          {/* Audio Latency */}
          <div className="rounded-lg border border-gray-200 p-4 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h3 className="font-medium text-gray-900 dark:text-white">
                  Audio Latency
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {audioLatency
                    ? "Low latency mode"
                    : "Standard latency"}
                </p>
              </div>
              <Switch
                checked={audioLatency}
                onChange={setAudioLatency}
              />
            </div>
            {audioLatency && (
              <div className="mt-4 text-sm text-fuchsia-600 dark:text-fuchsia-400">
                • Minimize audio processing delay
              </div>
            )}
          </div>

          {/* Plugin Auto Save */}
          <div className="rounded-lg border border-gray-200 p-4 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h3 className="font-medium text-gray-900 dark:text-white">
                  Plugin Auto Save
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {pluginAutoSave
                    ? "Automatic plugin state saving"
                    : "Manual saving only"}
                </p>
              </div>
              <Switch
                checked={pluginAutoSave}
                onChange={setPluginAutoSave}
              />
            </div>
            {pluginAutoSave && (
              <div className="mt-4 text-sm text-fuchsia-600 dark:text-fuchsia-400">
                • Preserve plugin settings between sessions
              </div>
            )}
          </div>

          {/* Metronome */}
          <div className="rounded-lg border border-gray-200 p-4 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h3 className="font-medium text-gray-900 dark:text-white">
                  Metronome
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {metronome
                    ? "Visual and audio metronome"
                    : "No metronome"}
                </p>
              </div>
              <Switch
                checked={metronome}
                onChange={setMetronome}
              />
            </div>
            {metronome && (
              <div className="mt-4 text-sm text-fuchsia-600 dark:text-fuchsia-400">
                • Keep time with visual and audio cues
              </div>
            )}
          </div>

          {/* Settings Summary */}
          <div className="rounded-lg bg-gray-50 p-4 dark:bg-gray-800">
            <h4 className="mb-3 text-sm font-medium text-gray-900 dark:text-white">
              Production Settings Summary
            </h4>
            <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <p>• {midiSync ? "MIDI sync enabled" : "Internal timing"}</p>
              <p>• {audioLatency ? "Low latency mode" : "Standard latency"}</p>
              <p>• {pluginAutoSave ? "Plugin auto-save on" : "Manual saving"}</p>
              <p>• {metronome ? "Metronome enabled" : "No metronome"}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SwitchExample73; 