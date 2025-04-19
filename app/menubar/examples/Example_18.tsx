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

export default function Example_18() {
  const [zoom, setZoom] = useState("100");
  const [layout, setLayout] = useState("single");
  const [viewSettings, setViewSettings] = useState({
    showThumbnails: true,
    showBookmarks: false,
    showAnnotations: true,
    darkMode: false,
  });

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4">Document Viewer Settings</h2>
      <Menubar>
        <MenubarTrigger>View</MenubarTrigger>
        <MenubarContent>
          <MenubarSub label="Zoom Level">
            <MenubarRadioGroup value={zoom} onValueChange={setZoom}>
              <MenubarRadioItem value="50">50%</MenubarRadioItem>
              <MenubarRadioItem value="75">75%</MenubarRadioItem>
              <MenubarRadioItem value="100">100%</MenubarRadioItem>
              <MenubarRadioItem value="125">125%</MenubarRadioItem>
              <MenubarRadioItem value="150">150%</MenubarRadioItem>
            </MenubarRadioGroup>
          </MenubarSub>
          <MenubarSeparator />
          <MenubarSub label="Page Layout">
            <MenubarRadioGroup value={layout} onValueChange={setLayout}>
              <MenubarRadioItem value="single">Single Page</MenubarRadioItem>
              <MenubarRadioItem value="continuous">Continuous</MenubarRadioItem>
              <MenubarRadioItem value="facing">Two Pages</MenubarRadioItem>
              <MenubarRadioItem value="book">Book View</MenubarRadioItem>
            </MenubarRadioGroup>
          </MenubarSub>
        </MenubarContent>

        <MenubarTrigger>Tools</MenubarTrigger>
        <MenubarContent>
          <MenubarCheckboxItem
            checked={viewSettings.showThumbnails}
            onChange={(checked:boolean) =>
              setViewSettings((prev) => ({ ...prev, showThumbnails: checked }))
            }
          >
            Show Thumbnails
            <MenubarShortcut>⌘T</MenubarShortcut>
          </MenubarCheckboxItem>
          <MenubarCheckboxItem
            checked={viewSettings.showBookmarks}
            onChange={(checked:boolean) =>
              setViewSettings((prev) => ({ ...prev, showBookmarks: checked }))
            }
          >
            Show Bookmarks
            <MenubarShortcut>⌘B</MenubarShortcut>
          </MenubarCheckboxItem>
          <MenubarCheckboxItem
            checked={viewSettings.showAnnotations}
            onChange={(checked:boolean) =>
              setViewSettings((prev) => ({ ...prev, showAnnotations: checked }))
            }
          >
            Show Annotations
            <MenubarShortcut>⌘A</MenubarShortcut>
          </MenubarCheckboxItem>
          <MenubarSeparator />
          <MenubarCheckboxItem
            checked={viewSettings.darkMode}
            onChange={(checked:boolean) =>
              setViewSettings((prev) => ({ ...prev, darkMode: checked }))
            }
          >
            Dark Mode
            <MenubarShortcut>⌘D</MenubarShortcut>
          </MenubarCheckboxItem>
        </MenubarContent>

        <MenubarTrigger>Document</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>
            Search
            <MenubarShortcut>⌘F</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>
            Print
            <MenubarShortcut>⌘P</MenubarShortcut>
          </MenubarItem>
          <MenubarSeparator />
          <MenubarItem>
            Properties
            <MenubarShortcut>⌘I</MenubarShortcut>
          </MenubarItem>
        </MenubarContent>
      </Menubar>

      <div className="mt-4 p-4 bg-purple-50 rounded-lg dark:bg-gray-800">
        <p>Zoom Level: {zoom}%</p>
        <p>Page Layout: {layout}</p>
        <p>Thumbnails: {viewSettings.showThumbnails ? "Visible" : "Hidden"}</p>
        <p>Bookmarks: {viewSettings.showBookmarks ? "Visible" : "Hidden"}</p>
        <p>Annotations: {viewSettings.showAnnotations ? "Visible" : "Hidden"}</p>
        <p>Theme: {viewSettings.darkMode ? "Dark" : "Light"}</p>
      </div>
    </div>
  );
}
