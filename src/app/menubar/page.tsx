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
  <MenubarTrigger>Open Menu</MenubarTrigger>
  <MenubarContent>
    <MenubarItem>File</MenubarItem>
    <MenubarItem>Settings</MenubarItem>

    <MenubarSeparator />
    
    <MenubarCheckboxItem checked={true} onChange={() => console.log("Toggled")}>Enable Notifications</MenubarCheckboxItem>
    
    <MenubarSeparator />
    
    <MenubarRadioGroup>
      <MenubarRadioItem value="ok"   onChange={(value) => console.log("Option 1 Selected",value)}>Option 1</MenubarRadioItem>
      <MenubarRadioItem onChange={() => console.log("Option 2 Selected")}>Option 2</MenubarRadioItem>
    </MenubarRadioGroup>

    <MenubarSub>
      <MenubarItem>Submenu Item 1</MenubarItem>
      <MenubarItem>Submenu Item 2</MenubarItem>
    </MenubarSub>
    
    <MenubarItem>Save</MenubarItem>
  </MenubarContent>
</Menubar>
    </div>
  );
}
