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

export default function Example_20() {
  const [language, setLanguage] = useState("typescript");
  const [theme, setTheme] = useState("vs-dark");
  const [editorSettings, setEditorSettings] = useState({
    minimap: true,
    wordWrap: true,
    lineNumbers: true,
    bracketPairs: true,
    formatOnSave: true,
  });

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4">Code Editor Settings</h2>
      <Menubar>
        <MenubarTrigger>File</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>
            New File
            <MenubarShortcut>⌘N</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>
            Open File
            <MenubarShortcut>⌘O</MenubarShortcut>
          </MenubarItem>
          <MenubarSeparator />
          <MenubarItem>
            Save
            <MenubarShortcut>⌘S</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>
            Save All
            <MenubarShortcut>⌘⇧S</MenubarShortcut>
          </MenubarItem>
        </MenubarContent>

        <MenubarTrigger>Edit</MenubarTrigger>
        <MenubarContent>
          <MenubarSub label="Language">
            <MenubarRadioGroup value={language} onValueChange={setLanguage}>
              <MenubarRadioItem value="javascript">JavaScript</MenubarRadioItem>
              <MenubarRadioItem value="typescript">TypeScript</MenubarRadioItem>
              <MenubarRadioItem value="python">Python</MenubarRadioItem>
              <MenubarRadioItem value="java">Java</MenubarRadioItem>
              <MenubarRadioItem value="csharp">C#</MenubarRadioItem>
            </MenubarRadioGroup>
          </MenubarSub>
          <MenubarSeparator />
          <MenubarItem>
            Find
            <MenubarShortcut>⌘F</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>
            Replace
            <MenubarShortcut>⌘H</MenubarShortcut>
          </MenubarItem>
        </MenubarContent>

        <MenubarTrigger>View</MenubarTrigger>
        <MenubarContent>
          <MenubarSub label="Theme">
            <MenubarRadioGroup value={theme} onValueChange={setTheme}>
              <MenubarRadioItem value="vs">Light</MenubarRadioItem>
              <MenubarRadioItem value="vs-dark">Dark</MenubarRadioItem>
              <MenubarRadioItem value="hc-black">High Contrast</MenubarRadioItem>
            </MenubarRadioGroup>
          </MenubarSub>
          <MenubarSeparator />
          <MenubarCheckboxItem
            checked={editorSettings.minimap}
            onChange={(checked:boolean) =>
              setEditorSettings((prev) => ({ ...prev, minimap: checked }))
            }
          >
            Show Minimap
            <MenubarShortcut>⌘M</MenubarShortcut>
          </MenubarCheckboxItem>
          <MenubarCheckboxItem
            checked={editorSettings.wordWrap}
            onChange={(checked:boolean) =>
              setEditorSettings((prev) => ({ ...prev, wordWrap: checked }))
            }
          >
            Word Wrap
            <MenubarShortcut>⌘W</MenubarShortcut>
          </MenubarCheckboxItem>
          <MenubarCheckboxItem
            checked={editorSettings.lineNumbers}
            onChange={(checked:boolean) =>
              setEditorSettings((prev) => ({ ...prev, lineNumbers: checked }))
            }
          >
            Line Numbers
            <MenubarShortcut>⌘L</MenubarShortcut>
          </MenubarCheckboxItem>
        </MenubarContent>

        <MenubarTrigger>Preferences</MenubarTrigger>
        <MenubarContent>
          <MenubarCheckboxItem
            checked={editorSettings.bracketPairs}
            onChange={(checked:boolean) =>
              setEditorSettings((prev) => ({ ...prev, bracketPairs: checked }))
            }
          >
            Bracket Pair Colorization
          </MenubarCheckboxItem>
          <MenubarCheckboxItem
            checked={editorSettings.formatOnSave}
            onChange={(checked:boolean) =>
              setEditorSettings((prev) => ({ ...prev, formatOnSave: checked }))
            }
          >
            Format On Save
          </MenubarCheckboxItem>
          <MenubarSeparator />
          <MenubarItem>
            Configure Extensions
            <MenubarShortcut>⌘,</MenubarShortcut>
          </MenubarItem>
        </MenubarContent>
      </Menubar>

      <div className="mt-4 p-4 bg-purple-50 rounded-lg dark:bg-gray-800">
        <p>Language: {language}</p>
        <p>Theme: {theme}</p>
        <p>Minimap: {editorSettings.minimap ? "Visible" : "Hidden"}</p>
        <p>Word Wrap: {editorSettings.wordWrap ? "Enabled" : "Disabled"}</p>
        <p>Line Numbers: {editorSettings.lineNumbers ? "Shown" : "Hidden"}</p>
        <p>Bracket Pairs: {editorSettings.bracketPairs ? "Colored" : "Default"}</p>
        <p>Format On Save: {editorSettings.formatOnSave ? "Enabled" : "Disabled"}</p>
      </div>
    </div>
  );
}
