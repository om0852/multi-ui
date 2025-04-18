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
} from "../_components/Menubar_8";
import { useState } from "react";

export default function Example_8() {
  const [tool, setTool] = useState("brush");
  const [toolSettings, setToolSettings] = useState({
    grid: true,
    rulers: true,
    snapping: false,
  });

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4">Image Editor Tools</h2>
      <Menubar>
        <MenubarTrigger>Tools & Settings ▾</MenubarTrigger>
        <MenubarContent>
          <MenubarSub label="Active Tool">
            <MenubarRadioGroup>
              <MenubarRadioItem
                checked={tool === "brush"}
                onChange={(value) => setTool(value)}
                value="brush"
              >
                Brush Tool
                <MenubarShortcut>B</MenubarShortcut>
              </MenubarRadioItem>
              <MenubarRadioItem
                checked={tool === "eraser"}
                onChange={(value) => setTool(value)}
                value="eraser"
              >
                Eraser Tool
                <MenubarShortcut>E</MenubarShortcut>
              </MenubarRadioItem>
              <MenubarRadioItem
                checked={tool === "selection"}
                onChange={(value) => setTool(value)}
                value="selection"
              >
                Selection Tool
                <MenubarShortcut>V</MenubarShortcut>
              </MenubarRadioItem>
              <MenubarRadioItem
                checked={tool === "text"}
                onChange={(value) => setTool(value)}
                value="text"
              >
                Text Tool
                <MenubarShortcut>T</MenubarShortcut>
              </MenubarRadioItem>
            </MenubarRadioGroup>
          </MenubarSub>

          <MenubarSeparator />

          <MenubarSub label="View Options">
            <MenubarCheckboxItem
              checked={toolSettings.grid}
              onChange={(checked) =>
                setToolSettings((prev) => ({ ...prev, grid: checked }))
              }
            >
              Show Grid
              <MenubarShortcut>⌘&apos;</MenubarShortcut>
            </MenubarCheckboxItem>
            <MenubarCheckboxItem
              checked={toolSettings.rulers}
              onChange={(checked) =>
                setToolSettings((prev) => ({ ...prev, rulers: checked }))
              }
            >
              Show Rulers
              <MenubarShortcut>⌘R</MenubarShortcut>
            </MenubarCheckboxItem>
            <MenubarCheckboxItem
              checked={toolSettings.snapping}
              onChange={(checked) =>
                setToolSettings((prev) => ({ ...prev, snapping: checked }))
              }
            >
              Enable Snapping
              <MenubarShortcut>⌘;</MenubarShortcut>
            </MenubarCheckboxItem>
          </MenubarSub>

          <MenubarSeparator />

          <MenubarItem>
            Canvas Size
            <MenubarShortcut>⌘⌥C</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>
            Image Size
            <MenubarShortcut>⌘⌥I</MenubarShortcut>
          </MenubarItem>
        </MenubarContent>
      </Menubar>

      <div className="mt-4 p-4 bg-yellow-50 rounded-lg dark:bg-gray-800">
        <p>Active Tool: {tool}</p>
        <p>Show Grid: {toolSettings.grid ? "Visible" : "Hidden"}</p>
        <p>Show Rulers: {toolSettings.rulers ? "Visible" : "Hidden"}</p>
        <p>Snapping: {toolSettings.snapping ? "Enabled" : "Disabled"}</p>
      </div>
    </div>
  );
} 