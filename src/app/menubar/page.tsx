"use client";

import React, { useState } from "react";
import {
  Menubar,
  MenubarTrigger,
  MenubarContent,
  MenubarItem,
  MenubarCheckboxItem,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarSub,
  MenubarSubTrigger,
  MenubarSubContent,
  MenubarShortcut,
} from "./_components/Menubar_1"; // Adjust this import based on your file structure.

export default function ExampleMenubar() {
  const [isOptionChecked, setIsOptionChecked] = useState(false);
  const [selectedRadio, setSelectedRadio] = useState("option1");

  return (
    <div className="flex justify-center mt-10">
      <Menubar>
        {/* Menubar Trigger */}
        <MenubarTrigger>Open Menu</MenubarTrigger>

        {/* Menubar Content */}
        <MenubarContent>
          {/* Simple Item */}
          <MenubarItem onClick={() => alert("Clicked File!")}>File</MenubarItem>

          {/* Checkbox Item */}
          <MenubarCheckboxItem
            label="Enable Notifications"
            checked={isOptionChecked}
            onChange={() => setIsOptionChecked((prev) => !prev)}
          />

          {/* Radio Group */}
          <MenubarSeparator />
          <MenubarRadioGroup name="Options">
            <MenubarRadioItem
              label="Option 1"
              value="option1"
              selectedValue={selectedRadio}
              onChange={(value) => setSelectedRadio(value)}
            />
            <MenubarRadioItem
              label="Option 2"
              value="option2"
              selectedValue={selectedRadio}
              onChange={(value) => setSelectedRadio(value)}
            />
          </MenubarRadioGroup>

          {/* Separator */}
          <MenubarSeparator />

          {/* Submenu */}
          <MenubarSub>
            <MenubarSubTrigger>More Options</MenubarSubTrigger>
            <MenubarSubContent>
              <MenubarItem onClick={() => alert("Submenu Item 1!")}>
                Submenu Item 1
              </MenubarItem>
              <MenubarItem onClick={() => alert("Submenu Item 2!")}>
                Submenu Item 2
              </MenubarItem>
            </MenubarSubContent>
          </MenubarSub>
          {/* Item with Shortcut */}
          <MenubarSeparator />
          <MenubarItem>
            Save
            <MenubarShortcut>Ctrl+S</MenubarShortcut>
          </MenubarItem>
        </MenubarContent>
      </Menubar>
    </div>
  );
}
