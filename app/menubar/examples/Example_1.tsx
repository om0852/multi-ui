"use client";

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
} from "../_components/Menubar_1";
import { useState } from "react";

export default function Example_1() {
  const [theme, setTheme] = useState("light");
  const [notifications, setNotifications] = useState({
    email: true,
    push: false,
  });

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4">Advanced Menubar Example</h2>
      <Menubar>
        <MenubarTrigger>Settings ▾</MenubarTrigger>
        <MenubarContent>
          <MenubarSub label="Theme">
            <MenubarRadioGroup>
              <MenubarRadioItem
                checked={theme === "light"}
                onChange={(value) => setTheme(value)}
                value="light"
              >
                Light
                <MenubarShortcut>⌘L</MenubarShortcut>
              </MenubarRadioItem>
              <MenubarRadioItem
                checked={theme === "dark"}
                onChange={(value) => setTheme(value)}
                value="dark"
              >
                Dark
                <MenubarShortcut>⌘D</MenubarShortcut>
              </MenubarRadioItem>
              <MenubarRadioItem
                checked={theme === "system"}
                onChange={(value) => setTheme(value)}
                value="system"
              >
                System
                <MenubarShortcut>⌘S</MenubarShortcut>
              </MenubarRadioItem>
            </MenubarRadioGroup>
          </MenubarSub>

          <MenubarSeparator />

          <MenubarSub label="Notifications">
            <MenubarCheckboxItem
              checked={notifications.email}
              onChange={(checked) =>
                setNotifications((prev) => ({ ...prev, email: checked }))
              }
              value="email"
            >
              Email Notifications
            </MenubarCheckboxItem>
            <MenubarCheckboxItem
              checked={notifications.push}
              onChange={(checked) =>
                setNotifications((prev) => ({ ...prev, push: checked }))
              }
              value="push"
            >
              Push Notifications
            </MenubarCheckboxItem>
          </MenubarSub>

          <MenubarSeparator />

          <MenubarItem>
            Profile Settings
            <MenubarShortcut>⌘P</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>
            Help
            <MenubarShortcut>⌘H</MenubarShortcut>
          </MenubarItem>
        </MenubarContent>
      </Menubar>

      <div className="mt-4 p-4 bg-gray-100 rounded dark:bg-gray-800">
        <p>Current Theme: {theme}</p>
        <p>Email Notifications: {notifications.email ? "On" : "Off"}</p>
        <p>Push Notifications: {notifications.push ? "On" : "Off"}</p>
      </div>
    </div>
  );
}
