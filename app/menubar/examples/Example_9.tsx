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
} from "../tsx/Menubar_9";
import { useState } from "react";

export default function Example_9() {
  const [viewType, setViewType] = useState("month");
  const [calendarSettings, setCalendarSettings] = useState({
    weekends: true,
    holidays: true,
    tasks: false,
  });

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4">Calendar View Options</h2>
      <Menubar>
        <MenubarTrigger>Calendar Settings ▾</MenubarTrigger>
        <MenubarContent>
          <MenubarSub label="View Type">
            <MenubarRadioGroup>
              <MenubarRadioItem
                checked={viewType === "day"}
                onChange={(value) => setViewType(value)}
                value="day"
              >
                Day View
                <MenubarShortcut>⌘1</MenubarShortcut>
              </MenubarRadioItem>
              <MenubarRadioItem
                checked={viewType === "week"}
                onChange={(value) => setViewType(value)}
                value="week"
              >
                Week View
                <MenubarShortcut>⌘2</MenubarShortcut>
              </MenubarRadioItem>
              <MenubarRadioItem
                checked={viewType === "month"}
                onChange={(value) => setViewType(value)}
                value="month"
              >
                Month View
                <MenubarShortcut>⌘3</MenubarShortcut>
              </MenubarRadioItem>
              <MenubarRadioItem
                checked={viewType === "year"}
                onChange={(value) => setViewType(value)}
                value="year"
              >
                Year View
                <MenubarShortcut>⌘4</MenubarShortcut>
              </MenubarRadioItem>
            </MenubarRadioGroup>
          </MenubarSub>

          <MenubarSeparator />

          <MenubarSub label="Display Options">
            <MenubarCheckboxItem
              checked={calendarSettings.weekends}
              onChange={(checked) =>
                setCalendarSettings((prev) => ({ ...prev, weekends: checked }))
              }
            >
              Show Weekends
              <MenubarShortcut>⌘W</MenubarShortcut>
            </MenubarCheckboxItem>
            <MenubarCheckboxItem
              checked={calendarSettings.holidays}
              onChange={(checked) =>
                setCalendarSettings((prev) => ({ ...prev, holidays: checked }))
              }
            >
              Show Holidays
              <MenubarShortcut>⌘H</MenubarShortcut>
            </MenubarCheckboxItem>
            <MenubarCheckboxItem
              checked={calendarSettings.tasks}
              onChange={(checked) =>
                setCalendarSettings((prev) => ({ ...prev, tasks: checked }))
              }
            >
              Show Tasks
              <MenubarShortcut>⌘T</MenubarShortcut>
            </MenubarCheckboxItem>
          </MenubarSub>

          <MenubarSeparator />

          <MenubarItem>
            Go to Today
            <MenubarShortcut>⌘⌥T</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>
            Refresh Events
            <MenubarShortcut>⌘R</MenubarShortcut>
          </MenubarItem>
        </MenubarContent>
      </Menubar>

      <div className="mt-4 p-4 bg-blue-50 rounded-lg dark:bg-gray-800">
        <p>Current View: {viewType}</p>
        <p>Show Weekends: {calendarSettings.weekends ? "Yes" : "No"}</p>
        <p>Show Holidays: {calendarSettings.holidays ? "Yes" : "No"}</p>
        <p>Show Tasks: {calendarSettings.tasks ? "Yes" : "No"}</p>
      </div>
    </div>
  );
} 