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
} from "../_components/Menubar_10";
import { useState } from "react";

export default function Example_10() {
  const [status, setStatus] = useState("online");
  const [chatSettings, setChatSettings] = useState({
    notifications: true,
    sounds: true,
    readReceipts: false,
  });

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4">Chat Application Settings</h2>
      <Menubar>
        <MenubarTrigger>Chat Settings ▾</MenubarTrigger>
        <MenubarContent>
          <MenubarSub label="Status">
            <MenubarRadioGroup>
              <MenubarRadioItem
                checked={status === "online"}
                onChange={(value) => setStatus(value)}
                value="online"
              >
                Online
                <MenubarShortcut>⌘1</MenubarShortcut>
              </MenubarRadioItem>
              <MenubarRadioItem
                checked={status === "away"}
                onChange={(value) => setStatus(value)}
                value="away"
              >
                Away
                <MenubarShortcut>⌘2</MenubarShortcut>
              </MenubarRadioItem>
              <MenubarRadioItem
                checked={status === "busy"}
                onChange={(value) => setStatus(value)}
                value="busy"
              >
                Do Not Disturb
                <MenubarShortcut>⌘3</MenubarShortcut>
              </MenubarRadioItem>
              <MenubarRadioItem
                checked={status === "invisible"}
                onChange={(value) => setStatus(value)}
                value="invisible"
              >
                Invisible
                <MenubarShortcut>⌘4</MenubarShortcut>
              </MenubarRadioItem>
            </MenubarRadioGroup>
          </MenubarSub>

          <MenubarSeparator />

          <MenubarSub label="Preferences">
            <MenubarCheckboxItem
              checked={chatSettings.notifications}
              onChange={(checked) =>
                setChatSettings((prev) => ({ ...prev, notifications: checked }))
              }
            >
              Enable Notifications
              <MenubarShortcut>⌘N</MenubarShortcut>
            </MenubarCheckboxItem>
            <MenubarCheckboxItem
              checked={chatSettings.sounds}
              onChange={(checked) =>
                setChatSettings((prev) => ({ ...prev, sounds: checked }))
              }
            >
              Message Sounds
              <MenubarShortcut>⌘S</MenubarShortcut>
            </MenubarCheckboxItem>
            <MenubarCheckboxItem
              checked={chatSettings.readReceipts}
              onChange={(checked) =>
                setChatSettings((prev) => ({ ...prev, readReceipts: checked }))
              }
            >
              Read Receipts
              <MenubarShortcut>⌘R</MenubarShortcut>
            </MenubarCheckboxItem>
          </MenubarSub>

          <MenubarSeparator />

          <MenubarItem>
            Archive Chats
            <MenubarShortcut>⌘A</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>
            Clear History
            <MenubarShortcut>⌘⇧D</MenubarShortcut>
          </MenubarItem>
        </MenubarContent>
      </Menubar>

      <div className="mt-4 p-4 bg-purple-50 rounded-lg dark:bg-gray-800">
        <p>Current Status: {status}</p>
        <p>Notifications: {chatSettings.notifications ? "Enabled" : "Disabled"}</p>
        <p>Message Sounds: {chatSettings.sounds ? "On" : "Off"}</p>
        <p>Read Receipts: {chatSettings.readReceipts ? "Enabled" : "Disabled"}</p>
      </div>
    </div>
  );
} 