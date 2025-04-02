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
} from "../tsx/Menubar_5";
import { useState } from "react";

export default function Example_5() {
  const [font, setFont] = useState("monospace");
  const [editorSettings, setEditorSettings] = useState({
    wordWrap: true,
    lineNumbers: true,
    minimap: false,
  });

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4">Text Editor Settings</h2>
      <Menubar>
        <MenubarTrigger>Editor Options ▾</MenubarTrigger>
        <MenubarContent>
          <MenubarSub label="Font Family">
            <MenubarRadioGroup>
              <MenubarRadioItem
                checked={font === "monospace"}
                onChange={(value) => setFont(value)}
                value="monospace"
              >
                Monospace
                <MenubarShortcut>⌘M</MenubarShortcut>
              </MenubarRadioItem>
              <MenubarRadioItem
                checked={font === "serif"}
                onChange={(value) => setFont(value)}
                value="serif"
              >
                Serif
                <MenubarShortcut>⌘S</MenubarShortcut>
              </MenubarRadioItem>
              <MenubarRadioItem
                checked={font === "sans-serif"}
                onChange={(value) => setFont(value)}
                value="sans-serif"
              >
                Sans Serif
                <MenubarShortcut>⌘A</MenubarShortcut>
              </MenubarRadioItem>
            </MenubarRadioGroup>
          </MenubarSub>

          <MenubarSeparator />

          <MenubarSub label="Editor">
            <MenubarCheckboxItem
              checked={editorSettings.wordWrap}
              onChange={(checked) =>
                setEditorSettings((prev) => ({ ...prev, wordWrap: checked }))
              }
              value="wrap"
            >
              Word Wrap
              <MenubarShortcut>⌘W</MenubarShortcut>
            </MenubarCheckboxItem>
            <MenubarCheckboxItem
              checked={editorSettings.lineNumbers}
              onChange={(checked) =>
                setEditorSettings((prev) => ({ ...prev, lineNumbers: checked }))
              }
              value="numbers"
            >
              Line Numbers
              <MenubarShortcut>⌘L</MenubarShortcut>
            </MenubarCheckboxItem>
            <MenubarCheckboxItem
              checked={editorSettings.minimap}
              onChange={(checked) =>
                setEditorSettings((prev) => ({ ...prev, minimap: checked }))
              }
              value="minimap"
            >
              Minimap
              <MenubarShortcut>⌘I</MenubarShortcut>
            </MenubarCheckboxItem>
          </MenubarSub>

          <MenubarSeparator />

          <MenubarItem>
            Format Document
            <MenubarShortcut>⇧⌥F</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>
            Toggle Comments
            <MenubarShortcut>⌘/</MenubarShortcut>
          </MenubarItem>
        </MenubarContent>
      </Menubar>

      <div className="mt-4 p-4 bg-indigo-50 rounded-lg dark:bg-gray-800">
        <p>Font Family: {font}</p>
        <p>Word Wrap: {editorSettings.wordWrap ? "Enabled" : "Disabled"}</p>
        <p>Line Numbers: {editorSettings.lineNumbers ? "Shown" : "Hidden"}</p>
        <p>Minimap: {editorSettings.minimap ? "Visible" : "Hidden"}</p>
      </div>
    </div>
  );
} 