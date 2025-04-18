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
} from "../_components/Menubar_11";

export default function Example_11() {
  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4">File Explorer Menu</h2>
      <Menubar>
        <MenubarTrigger>File</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>
            New File
            <MenubarShortcut>⌘N</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>
            New Folder
            <MenubarShortcut>⌘⇧N</MenubarShortcut>
          </MenubarItem>
          <MenubarSeparator />
          <MenubarSub label="Open Recent">
            <MenubarContent>
              <MenubarItem>Document1.txt</MenubarItem>
              <MenubarItem>Project.js</MenubarItem>
              <MenubarItem>Notes.md</MenubarItem>
            </MenubarContent>
          </MenubarSub>
          <MenubarSeparator />
          <MenubarItem>
            Save
            <MenubarShortcut>⌘S</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>
            Save As...
            <MenubarShortcut>⌘⇧S</MenubarShortcut>
          </MenubarItem>
        </MenubarContent>

        <MenubarTrigger>Edit</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>
            Undo
            <MenubarShortcut>⌘Z</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>
            Redo
            <MenubarShortcut>⌘Y</MenubarShortcut>
          </MenubarItem>
          <MenubarSeparator />
          <MenubarItem>
            Cut
            <MenubarShortcut>⌘X</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>
            Copy
            <MenubarShortcut>⌘C</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>
            Paste
            <MenubarShortcut>⌘V</MenubarShortcut>
          </MenubarItem>
        </MenubarContent>

        <MenubarTrigger>View</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>
            Large Icons
            <MenubarShortcut>⌘1</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>
            List View
            <MenubarShortcut>⌘2</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>
            Details
            <MenubarShortcut>⌘3</MenubarShortcut>
          </MenubarItem>
        </MenubarContent>
      </Menubar>
    </div>
  );
}
