"use client";

import * as React from "react";
import {
  Menubar,
  MenubarTrigger,
  MenubarContent,
  MenubarItem,
  MenubarSub,
  MenubarSeparator,
  MenubarCheckboxItem,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarShortcut,
} from "../tsx/Menubar_6";
import { useState } from "react";

export default function Example_6() {
  const [graphicsQuality, setGraphicsQuality] = useState("high");
  const [gameSettings, setGameSettings] = useState({
    vsync: true,
    fullscreen: true,
    motionBlur: false,
  });

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4">Game Settings Menu</h2>
      <Menubar>
        <MenubarTrigger>Graphics Settings ▾</MenubarTrigger>
        <MenubarContent>
          <MenubarSub label="Quality Preset">
            <MenubarRadioGroup>
              <MenubarRadioItem
                checked={graphicsQuality === "ultra"}
                onChange={(value) => setGraphicsQuality(value)}
                value="ultra"
              >
                Ultra
                <MenubarShortcut>⌘U</MenubarShortcut>
              </MenubarRadioItem>
              <MenubarRadioItem
                checked={graphicsQuality === "high"}
                onChange={(value) => setGraphicsQuality(value)}
                value="high"
              >
                High
                <MenubarShortcut>⌘H</MenubarShortcut>
              </MenubarRadioItem>
              <MenubarRadioItem
                checked={graphicsQuality === "medium"}
                onChange={(value) => setGraphicsQuality(value)}
                value="medium"
              >
                Medium
                <MenubarShortcut>⌘M</MenubarShortcut>
              </MenubarRadioItem>
              <MenubarRadioItem
                checked={graphicsQuality === "low"}
                onChange={(value) => setGraphicsQuality(value)}
                value="low"
              >
                Low
                <MenubarShortcut>⌘L</MenubarShortcut>
              </MenubarRadioItem>
            </MenubarRadioGroup>
          </MenubarSub>

          <MenubarSeparator />

          <MenubarSub label="Display">
            <MenubarCheckboxItem
              checked={gameSettings.vsync}
              onChange={(checked) =>
                setGameSettings((prev) => ({ ...prev, vsync: checked }))
              }
            >
              V-Sync
              <MenubarShortcut>⌘V</MenubarShortcut>
            </MenubarCheckboxItem>
            <MenubarCheckboxItem
              checked={gameSettings.fullscreen}
              onChange={(checked) =>
                setGameSettings((prev) => ({ ...prev, fullscreen: checked }))
              }
            >
              Fullscreen
              <MenubarShortcut>⌘F</MenubarShortcut>
            </MenubarCheckboxItem>
            <MenubarCheckboxItem
              checked={gameSettings.motionBlur}
              onChange={(checked) =>
                setGameSettings((prev) => ({ ...prev, motionBlur: checked }))
              }
            >
              Motion Blur
              <MenubarShortcut>⌘B</MenubarShortcut>
            </MenubarCheckboxItem>
          </MenubarSub>

          <MenubarSeparator />

          <MenubarItem>
            Reset to Default
            <MenubarShortcut>⌘R</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>
            Apply Changes
            <MenubarShortcut>⌘S</MenubarShortcut>
          </MenubarItem>
        </MenubarContent>
      </Menubar>

      <div className="mt-4 p-4 bg-red-50 rounded-lg dark:bg-gray-800">
        <p>Graphics Quality: {graphicsQuality}</p>
        <p>V-Sync: {gameSettings.vsync ? "Enabled" : "Disabled"}</p>
        <p>Fullscreen: {gameSettings.fullscreen ? "Yes" : "No"}</p>
        <p>Motion Blur: {gameSettings.motionBlur ? "On" : "Off"}</p>
      </div>
    </div>
  );
} 