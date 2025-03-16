"use client";

import * as React from "react";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarTrigger,
  MenubarCheckboxItem,
  MenubarRadioGroup,
  MenubarRadioItem,
} from "../_components/Menubar_12";
import { useState } from "react";

export default function Example_19() {
  const [resolution, setResolution] = useState("1080p");
  const [frameRate, setFrameRate] = useState("30");
  const [editorSettings, setEditorSettings] = useState({
    showTimeline: true,
    showWaveform: false,
    snapToGrid: true,
    autoSave: true,
  });

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4">Video Editor Settings</h2>
      <Menubar>
        <MenubarTrigger>Project</MenubarTrigger>
        <MenubarContent>
          <MenubarSub label="Resolution">
            <MenubarRadioGroup value={resolution} onValueChange={setResolution}>
              <MenubarRadioItem value="720p">HD (720p)</MenubarRadioItem>
              <MenubarRadioItem value="1080p">Full HD (1080p)</MenubarRadioItem>
              <MenubarRadioItem value="2k">2K</MenubarRadioItem>
              <MenubarRadioItem value="4k">4K</MenubarRadioItem>
            </MenubarRadioGroup>
          </MenubarSub>
          <MenubarSeparator />
          <MenubarSub label="Frame Rate">
            <MenubarRadioGroup value={frameRate} onValueChange={setFrameRate}>
              <MenubarRadioItem value="24">24 FPS</MenubarRadioItem>
              <MenubarRadioItem value="30">30 FPS</MenubarRadioItem>
              <MenubarRadioItem value="60">60 FPS</MenubarRadioItem>
            </MenubarRadioGroup>
          </MenubarSub>
          <MenubarSeparator />
          <MenubarCheckboxItem
            checked={editorSettings.autoSave}
            onChange={(checked:boolean) =>
              setEditorSettings((prev) => ({ ...prev, autoSave: checked }))
            }
          >
            Auto Save
            <MenubarShortcut>⌘S</MenubarShortcut>
          </MenubarCheckboxItem>
        </MenubarContent>

        <MenubarTrigger>Timeline</MenubarTrigger>
        <MenubarContent>
          <MenubarCheckboxItem
            checked={editorSettings.showTimeline}
            onChange={(checked:boolean) =>
              setEditorSettings((prev) => ({ ...prev, showTimeline: checked }))
            }
          >
            Show Timeline
            <MenubarShortcut>⌘T</MenubarShortcut>
          </MenubarCheckboxItem>
          <MenubarCheckboxItem
            checked={editorSettings.showWaveform}
            onChange={(checked:boolean) =>
              setEditorSettings((prev) => ({ ...prev, showWaveform: checked }))
            }
          >
            Show Audio Waveform
            <MenubarShortcut>⌘W</MenubarShortcut>
          </MenubarCheckboxItem>
          <MenubarCheckboxItem
            checked={editorSettings.snapToGrid}
            onChange={(checked:boolean) =>
              setEditorSettings((prev) => ({ ...prev, snapToGrid: checked }))
            }
          >
            Snap to Grid
            <MenubarShortcut>⌘G</MenubarShortcut>
          </MenubarCheckboxItem>
        </MenubarContent>

        <MenubarTrigger>Effects</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>
            Add Transition
            <MenubarShortcut>⌘T</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>
            Add Filter
            <MenubarShortcut>⌘F</MenubarShortcut>
          </MenubarItem>
          <MenubarSeparator />
          <MenubarSub label="Color">
            <MenubarContent>
              <MenubarItem>Color Correction</MenubarItem>
              <MenubarItem>Color Grading</MenubarItem>
              <MenubarItem>LUT Manager</MenubarItem>
            </MenubarContent>
          </MenubarSub>
        </MenubarContent>

        <MenubarTrigger>Export</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>
            Export Video
            <MenubarShortcut>⌘E</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>
            Export Frame
            <MenubarShortcut>⌘⇧E</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>
            Export Audio
            <MenubarShortcut>⌘⌥E</MenubarShortcut>
          </MenubarItem>
        </MenubarContent>
      </Menubar>

      <div className="mt-4 p-4 bg-purple-50 rounded-lg dark:bg-gray-800">
        <p>Resolution: {resolution}</p>
        <p>Frame Rate: {frameRate} FPS</p>
        <p>Timeline: {editorSettings.showTimeline ? "Visible" : "Hidden"}</p>
        <p>Waveform: {editorSettings.showWaveform ? "Visible" : "Hidden"}</p>
        <p>Snap to Grid: {editorSettings.snapToGrid ? "Enabled" : "Disabled"}</p>
        <p>Auto Save: {editorSettings.autoSave ? "On" : "Off"}</p>
      </div>
    </div>
  );
}
