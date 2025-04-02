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
} from "../tsx/Menubar_2";
import { useState } from "react";

export default function Example_2() {
  const [view, setView] = useState("grid");
  const [filters, setFilters] = useState({
    showCompleted: true,
    showPending: true,
  });

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4">Project Dashboard Menu</h2>
      <Menubar>
        <MenubarTrigger>View Options ▾</MenubarTrigger>
        <MenubarContent>
          <MenubarSub label="Layout">
            <MenubarRadioGroup>
              <MenubarRadioItem
                checked={view === "grid"}
                onChange={(value) => setView(value)}
                value="grid"
              >
                Grid View
                <MenubarShortcut>⌘G</MenubarShortcut>
              </MenubarRadioItem>
              <MenubarRadioItem
                checked={view === "list"}
                onChange={(value) => setView(value)}
                value="list"
              >
                List View
                <MenubarShortcut>⌘L</MenubarShortcut>
              </MenubarRadioItem>
              <MenubarRadioItem
                checked={view === "board"}
                onChange={(value) => setView(value)}
                value="board"
              >
                Board View
                <MenubarShortcut>⌘B</MenubarShortcut>
              </MenubarRadioItem>
            </MenubarRadioGroup>
          </MenubarSub>

          <MenubarSeparator />

          <MenubarSub label="Filters">
            <MenubarCheckboxItem
              checked={filters.showCompleted}
              onChange={(checked) =>
                setFilters((prev) => ({ ...prev, showCompleted: checked }))
              }
              value="completed"
            >
              Show Completed Tasks
            </MenubarCheckboxItem>
            <MenubarCheckboxItem
              checked={filters.showPending}
              onChange={(checked) =>
                setFilters((prev) => ({ ...prev, showPending: checked }))
              }
              value="pending"
            >
              Show Pending Tasks
            </MenubarCheckboxItem>
          </MenubarSub>

          <MenubarSeparator />

          <MenubarItem>
            Sort by Date
            <MenubarShortcut>⌘D</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>
            Sort by Priority
            <MenubarShortcut>⌘P</MenubarShortcut>
          </MenubarItem>
        </MenubarContent>
      </Menubar>

      <div className="mt-4 p-4 bg-blue-50 rounded-lg dark:bg-gray-800">
        <p>Current View: {view}</p>
        <p>Show Completed Tasks: {filters.showCompleted ? "Yes" : "No"}</p>
        <p>Show Pending Tasks: {filters.showPending ? "Yes" : "No"}</p>
      </div>
    </div>
  );
}