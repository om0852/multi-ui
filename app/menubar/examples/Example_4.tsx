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
} from "../tsx/Menubar_4";
import { useState } from "react";

export default function Example_4() {
  const [sortBy, setSortBy] = useState("name");
  const [viewOptions, setViewOptions] = useState({
    showHidden: false,
    showExtensions: true,
  });

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4">File Explorer Menu</h2>
      <Menubar>
        <MenubarTrigger>File Options ▾</MenubarTrigger>
        <MenubarContent>
          <MenubarSub label="Sort By">
            <MenubarRadioGroup>
              <MenubarRadioItem
                checked={sortBy === "name"}
                onChange={(value) => setSortBy(value)}
                value="name"
              >
                Name
                <MenubarShortcut>⌘N</MenubarShortcut>
              </MenubarRadioItem>
              <MenubarRadioItem
                checked={sortBy === "date"}
                onChange={(value) => setSortBy(value)}
                value="date"
              >
                Date Modified
                <MenubarShortcut>⌘D</MenubarShortcut>
              </MenubarRadioItem>
              <MenubarRadioItem
                checked={sortBy === "size"}
                onChange={(value) => setSortBy(value)}
                value="size"
              >
                Size
                <MenubarShortcut>⌘S</MenubarShortcut>
              </MenubarRadioItem>
              <MenubarRadioItem
                checked={sortBy === "type"}
                onChange={(value) => setSortBy(value)}
                value="type"
              >
                Type
                <MenubarShortcut>⌘T</MenubarShortcut>
              </MenubarRadioItem>
            </MenubarRadioGroup>
          </MenubarSub>

          <MenubarSeparator />

          <MenubarSub label="View">
            <MenubarCheckboxItem
              checked={viewOptions.showHidden}
              onChange={(checked) =>
                setViewOptions((prev) => ({ ...prev, showHidden: checked }))
              }
              value="hidden"
            >
              Show Hidden Files
              <MenubarShortcut>⌘H</MenubarShortcut>
            </MenubarCheckboxItem>
            <MenubarCheckboxItem
              checked={viewOptions.showExtensions}
              onChange={(checked) =>
                setViewOptions((prev) => ({ ...prev, showExtensions: checked }))
              }
              value="extensions"
            >
              Show Extensions
              <MenubarShortcut>⌘E</MenubarShortcut>
            </MenubarCheckboxItem>
          </MenubarSub>

          <MenubarSeparator />

          <MenubarItem>
            New Folder
            <MenubarShortcut>⌘⇧N</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>
            Compress Files
            <MenubarShortcut>⌘B</MenubarShortcut>
          </MenubarItem>
        </MenubarContent>
      </Menubar>

      <div className="mt-4 p-4 bg-green-50 rounded-lg dark:bg-gray-800">
        <p>Sort By: {sortBy}</p>
        <p>Show Hidden Files: {viewOptions.showHidden ? "Yes" : "No"}</p>
        <p>Show Extensions: {viewOptions.showExtensions ? "Yes" : "No"}</p>
      </div>
    </div>
  );
}
