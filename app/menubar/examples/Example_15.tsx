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
  MenubarRadioGroup,
  MenubarRadioItem,
} from "../_components/Menubar_12";
import { useState } from "react";

export default function Example_15() {
  const [imageSize, setImageSize] = useState("original");
  const [selectedTool, setSelectedTool] = useState("brush");
  const [filterType, setFilterType] = useState("none");

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4">Image Editor Tools</h2>
      <Menubar>
        <MenubarTrigger>Tools</MenubarTrigger>
        <MenubarContent>
          <MenubarSub label="Drawing Tools">
            <MenubarRadioGroup value={selectedTool} onValueChange={setSelectedTool}>
              <MenubarRadioItem value="brush">
                Brush
                <MenubarShortcut>B</MenubarShortcut>
              </MenubarRadioItem>
              <MenubarRadioItem value="eraser">
                Eraser
                <MenubarShortcut>E</MenubarShortcut>
              </MenubarRadioItem>
              <MenubarRadioItem value="pen">
                Pen
                <MenubarShortcut>P</MenubarShortcut>
              </MenubarRadioItem>
              <MenubarRadioItem value="selection">
                Selection
                <MenubarShortcut>S</MenubarShortcut>
              </MenubarRadioItem>
            </MenubarRadioGroup>
          </MenubarSub>
          <MenubarSeparator />
          <MenubarItem>
            Undo
            <MenubarShortcut>⌘Z</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>
            Redo
            <MenubarShortcut>⌘⇧Z</MenubarShortcut>
          </MenubarItem>
        </MenubarContent>

        <MenubarTrigger>Image</MenubarTrigger>
        <MenubarContent>
          <MenubarSub label="Resize">
            <MenubarRadioGroup value={imageSize} onValueChange={setImageSize}>
              <MenubarRadioItem value="small">Small (800x600)</MenubarRadioItem>
              <MenubarRadioItem value="medium">Medium (1024x768)</MenubarRadioItem>
              <MenubarRadioItem value="large">Large (1920x1080)</MenubarRadioItem>
              <MenubarRadioItem value="original">Original Size</MenubarRadioItem>
            </MenubarRadioGroup>
          </MenubarSub>
          <MenubarSeparator />
          <MenubarSub label="Filters">
            <MenubarRadioGroup value={filterType} onValueChange={setFilterType}>
              <MenubarRadioItem value="none">None</MenubarRadioItem>
              <MenubarRadioItem value="grayscale">Grayscale</MenubarRadioItem>
              <MenubarRadioItem value="sepia">Sepia</MenubarRadioItem>
              <MenubarRadioItem value="blur">Blur</MenubarRadioItem>
            </MenubarRadioGroup>
          </MenubarSub>
          <MenubarSeparator />
          <MenubarItem>
            Rotate Left
            <MenubarShortcut>⌘L</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>
            Rotate Right
            <MenubarShortcut>⌘R</MenubarShortcut>
          </MenubarItem>
        </MenubarContent>

        <MenubarTrigger>Export</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>
            Save as PNG
            <MenubarShortcut>⌘S</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>
            Save as JPEG
            <MenubarShortcut>⌘J</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>
            Save as SVG
            <MenubarShortcut>⌘G</MenubarShortcut>
          </MenubarItem>
        </MenubarContent>
      </Menubar>

      <div className="mt-4 p-4 bg-purple-50 rounded-lg dark:bg-gray-800">
        <p>Selected Tool: {selectedTool}</p>
        <p>Image Size: {imageSize}</p>
        <p>Active Filter: {filterType}</p>
      </div>
    </div>
  );
}
