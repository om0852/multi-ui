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
} from "../_components/Menubar_7";
import { useState } from "react";

export default function Example_7() {
  const [defaultBrowser, setDefaultBrowser] = useState("current");
  const [browserSettings, setBrowserSettings] = useState({
    cookies: true,
    history: true,
    passwords: false,
  });

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4">Browser Settings Menu</h2>
      <Menubar>
        <MenubarTrigger>Privacy Settings ▾</MenubarTrigger>
        <MenubarContent>
          <MenubarSub label="Default Browser">
            <MenubarRadioGroup>
              <MenubarRadioItem
                checked={defaultBrowser === "current"}
                onChange={(value) => setDefaultBrowser(value)}
                value="current"
              >
                Keep Current
                <MenubarShortcut>⌘K</MenubarShortcut>
              </MenubarRadioItem>
              <MenubarRadioItem
                checked={defaultBrowser === "always"}
                onChange={(value) => setDefaultBrowser(value)}
                value="always"
              >
                Always Ask
                <MenubarShortcut>⌘A</MenubarShortcut>
              </MenubarRadioItem>
              <MenubarRadioItem
                checked={defaultBrowser === "never"}
                onChange={(value) => setDefaultBrowser(value)}
                value="never"
              >
                Never Ask
                <MenubarShortcut>⌘N</MenubarShortcut>
              </MenubarRadioItem>
            </MenubarRadioGroup>
          </MenubarSub>

          <MenubarSeparator />

          <MenubarSub label="Privacy">
            <MenubarCheckboxItem
              checked={browserSettings.cookies}
              onChange={(checked) =>
                setBrowserSettings((prev) => ({ ...prev, cookies: checked }))
              }
            >
              Accept Cookies
              <MenubarShortcut>⌘C</MenubarShortcut>
            </MenubarCheckboxItem>
            <MenubarCheckboxItem
              checked={browserSettings.history}
              onChange={(checked) =>
                setBrowserSettings((prev) => ({ ...prev, history: checked }))
              }
            >
              Save History
              <MenubarShortcut>⌘H</MenubarShortcut>
            </MenubarCheckboxItem>
            <MenubarCheckboxItem
              checked={browserSettings.passwords}
              onChange={(checked) =>
                setBrowserSettings((prev) => ({ ...prev, passwords: checked }))
              }
            >
              Save Passwords
              <MenubarShortcut>⌘P</MenubarShortcut>
            </MenubarCheckboxItem>
          </MenubarSub>

          <MenubarSeparator />

          <MenubarItem>
            Clear Data
            <MenubarShortcut>⌘⇧Del</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>
            Import Settings
            <MenubarShortcut>⌘I</MenubarShortcut>
          </MenubarItem>
        </MenubarContent>
      </Menubar>

      <div className="mt-4 p-4 bg-orange-50 rounded-lg dark:bg-gray-800">
        <p>Default Browser Setting: {defaultBrowser}</p>
        <p>Accept Cookies: {browserSettings.cookies ? "Yes" : "No"}</p>
        <p>Save History: {browserSettings.history ? "Enabled" : "Disabled"}</p>
        <p>Save Passwords: {browserSettings.passwords ? "Yes" : "No"}</p>
      </div>
    </div>
  );
} 