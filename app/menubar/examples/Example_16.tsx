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

export default function Example_16() {
  const [difficulty, setDifficulty] = useState("normal");
  const [graphics, setGraphics] = useState("high");
  const [gameSettings, setGameSettings] = useState({
    fullscreen: false,
    vsync: true,
    showFps: false,
    autoSave: true,
  });

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4">Game Settings</h2>
      <Menubar>
        <MenubarTrigger>Game</MenubarTrigger>
        <MenubarContent>
          <MenubarSub label="Difficulty">
            <MenubarRadioGroup value={difficulty} onValueChange={setDifficulty}>
              <MenubarRadioItem value="easy">
                Easy
                <MenubarShortcut>1</MenubarShortcut>
              </MenubarRadioItem>
              <MenubarRadioItem value="normal">
                Normal
                <MenubarShortcut>2</MenubarShortcut>
              </MenubarRadioItem>
              <MenubarRadioItem value="hard">
                Hard
                <MenubarShortcut>3</MenubarShortcut>
              </MenubarRadioItem>
              <MenubarRadioItem value="nightmare">
                Nightmare
                <MenubarShortcut>4</MenubarShortcut>
              </MenubarRadioItem>
            </MenubarRadioGroup>
          </MenubarSub>
          <MenubarSeparator />
          <MenubarCheckboxItem
            checked={gameSettings.autoSave}
            onChange={(checked:boolean) =>
              setGameSettings((prev) => ({ ...prev, autoSave: checked }))
            }
          >
            Auto Save
            <MenubarShortcut>⌘S</MenubarShortcut>
          </MenubarCheckboxItem>
          <MenubarItem>
            Load Game
            <MenubarShortcut>⌘L</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>
            Save Game
            <MenubarShortcut>⌘S</MenubarShortcut>
          </MenubarItem>
        </MenubarContent>

        <MenubarTrigger>Graphics</MenubarTrigger>
        <MenubarContent>
          <MenubarSub label="Quality">
            <MenubarRadioGroup value={graphics} onValueChange={setGraphics}>
              <MenubarRadioItem value="low">Low</MenubarRadioItem>
              <MenubarRadioItem value="medium">Medium</MenubarRadioItem>
              <MenubarRadioItem value="high">High</MenubarRadioItem>
              <MenubarRadioItem value="ultra">Ultra</MenubarRadioItem>
            </MenubarRadioGroup>
          </MenubarSub>
          <MenubarSeparator />
          <MenubarCheckboxItem
            checked={gameSettings.fullscreen}
            onChange={(checked:boolean) =>
              setGameSettings((prev) => ({ ...prev, fullscreen: checked }))
            }
          >
            Fullscreen
            <MenubarShortcut>F11</MenubarShortcut>
          </MenubarCheckboxItem>
          <MenubarCheckboxItem
            checked={gameSettings.vsync}
            onChange={(checked:boolean) =>
              setGameSettings((prev) => ({ ...prev, vsync: checked }))
            }
          >
            V-Sync
            <MenubarShortcut>V</MenubarShortcut>
          </MenubarCheckboxItem>
          <MenubarCheckboxItem
            checked={gameSettings.showFps}
            onChange={(checked:boolean) =>
              setGameSettings((prev) => ({ ...prev, showFps: checked }))
            }
          >
            Show FPS
            <MenubarShortcut>F</MenubarShortcut>
          </MenubarCheckboxItem>
        </MenubarContent>

        <MenubarTrigger>Controls</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>
            Keyboard Settings
            <MenubarShortcut>⌘K</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>
            Mouse Settings
            <MenubarShortcut>⌘M</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>
            Controller Settings
            <MenubarShortcut>⌘C</MenubarShortcut>
          </MenubarItem>
        </MenubarContent>
      </Menubar>

      <div className="mt-4 p-4 bg-purple-50 rounded-lg dark:bg-gray-800">
        <p>Difficulty: {difficulty}</p>
        <p>Graphics Quality: {graphics}</p>
        <p>Fullscreen: {gameSettings.fullscreen ? "Yes" : "No"}</p>
        <p>V-Sync: {gameSettings.vsync ? "Enabled" : "Disabled"}</p>
        <p>FPS Counter: {gameSettings.showFps ? "Visible" : "Hidden"}</p>
        <p>Auto Save: {gameSettings.autoSave ? "On" : "Off"}</p>
      </div>
    </div>
  );
}
