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
} from "../tsx/Menubar_12";
import { useState } from "react";

export default function Example_17() {
  const [view, setView] = useState("month");
  const [timeZone, setTimeZone] = useState("local");
  const [settings, setSettings] = useState({
    showWeekends: true,
    showWeekNumbers: false,
    showDeclined: true,
    notifications: true,
  });

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4">Calendar Settings</h2>
      <Menubar>
        <MenubarTrigger>View</MenubarTrigger>
        <MenubarContent>
          <MenubarSub label="Calendar View">
            <MenubarRadioGroup value={view} onValueChange={setView}>
              <MenubarRadioItem value="day">
                Day
                <MenubarShortcut>⌘D</MenubarShortcut>
              </MenubarRadioItem>
              <MenubarRadioItem value="week">
                Week
                <MenubarShortcut>⌘W</MenubarShortcut>
              </MenubarRadioItem>
              <MenubarRadioItem value="month">
                Month
                <MenubarShortcut>⌘M</MenubarShortcut>
              </MenubarRadioItem>
              <MenubarRadioItem value="year">
                Year
                <MenubarShortcut>⌘Y</MenubarShortcut>
              </MenubarRadioItem>
            </MenubarRadioGroup>
          </MenubarSub>
          <MenubarSeparator />
          <MenubarCheckboxItem
            checked={settings.showWeekends}
            onChange={(checked:boolean) =>
              setSettings((prev) => ({ ...prev, showWeekends: checked }))
            }
          >
            Show Weekends
          </MenubarCheckboxItem>
          <MenubarCheckboxItem
            checked={settings.showWeekNumbers}
            onChange={(checked:boolean) =>
              setSettings((prev) => ({ ...prev, showWeekNumbers: checked }))
            }
          >
            Show Week Numbers
          </MenubarCheckboxItem>
        </MenubarContent>

        <MenubarTrigger>Time</MenubarTrigger>
        <MenubarContent>
          <MenubarSub label="Time Zone">
            <MenubarRadioGroup value={timeZone} onValueChange={setTimeZone}>
              <MenubarRadioItem value="local">Local Time</MenubarRadioItem>
              <MenubarRadioItem value="utc">UTC</MenubarRadioItem>
              <MenubarRadioItem value="est">Eastern Time</MenubarRadioItem>
              <MenubarRadioItem value="pst">Pacific Time</MenubarRadioItem>
            </MenubarRadioGroup>
          </MenubarSub>
          <MenubarSeparator />
          <MenubarItem>
            Set Working Hours
            <MenubarShortcut>⌘H</MenubarShortcut>
          </MenubarItem>
        </MenubarContent>

        <MenubarTrigger>Events</MenubarTrigger>
        <MenubarContent>
          <MenubarCheckboxItem
            checked={settings.showDeclined}
            onChange={(checked:boolean) =>
              setSettings((prev) => ({ ...prev, showDeclined: checked }))
            }
          >
            Show Declined Events
          </MenubarCheckboxItem>
          <MenubarCheckboxItem
            checked={settings.notifications}
            onChange={(checked:boolean) =>
              setSettings((prev) => ({ ...prev, notifications: checked }))
            }
          >
            Event Notifications
            <MenubarShortcut>⌘N</MenubarShortcut>
          </MenubarCheckboxItem>
          <MenubarSeparator />
          <MenubarItem>
            Import Events
            <MenubarShortcut>⌘I</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>
            Export Events
            <MenubarShortcut>⌘E</MenubarShortcut>
          </MenubarItem>
        </MenubarContent>
      </Menubar>

      <div className="mt-4 p-4 bg-purple-50 rounded-lg dark:bg-gray-800">
        <p>Current View: {view}</p>
        <p>Time Zone: {timeZone}</p>
        <p>Show Weekends: {settings.showWeekends ? "Yes" : "No"}</p>
        <p>Week Numbers: {settings.showWeekNumbers ? "Visible" : "Hidden"}</p>
        <p>Declined Events: {settings.showDeclined ? "Shown" : "Hidden"}</p>
        <p>Notifications: {settings.notifications ? "Enabled" : "Disabled"}</p>
      </div>
    </div>
  );
}
