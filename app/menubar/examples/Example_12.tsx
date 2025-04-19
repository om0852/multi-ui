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

export default function Example_12() {
  const [repeat, setRepeat] = useState("off");
  const [shuffle, setShuffle] = useState(false);
  const [equalizer, setEqualizer] = useState("rock");

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4">Music Player Controls</h2>
      <Menubar>
        <MenubarTrigger>Playback</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>
            Play
            <MenubarShortcut>Space</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>
            Next Track
            <MenubarShortcut>⌘→</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>
            Previous Track
            <MenubarShortcut>⌘←</MenubarShortcut>
          </MenubarItem>
          <MenubarSeparator />
          <MenubarSub label="Repeat">
            <MenubarRadioGroup value={repeat} onValueChange={setRepeat}>
              <MenubarRadioItem value="off">Off</MenubarRadioItem>
              <MenubarRadioItem value="one">Repeat One</MenubarRadioItem>
              <MenubarRadioItem value="all">Repeat All</MenubarRadioItem>
            </MenubarRadioGroup>
          </MenubarSub>
          <MenubarCheckboxItem
            checked={shuffle}
            onChange={setShuffle}
          >
            Shuffle
            <MenubarShortcut>⌘S</MenubarShortcut>
          </MenubarCheckboxItem>
        </MenubarContent>

        <MenubarTrigger>Audio</MenubarTrigger>
        <MenubarContent>
          <MenubarSub label="Equalizer Preset">
            <MenubarRadioGroup value={equalizer} onValueChange={setEqualizer}>
              <MenubarRadioItem value="flat">Flat</MenubarRadioItem>
              <MenubarRadioItem value="rock">Rock</MenubarRadioItem>
              <MenubarRadioItem value="jazz">Jazz</MenubarRadioItem>
              <MenubarRadioItem value="classical">Classical</MenubarRadioItem>
            </MenubarRadioGroup>
          </MenubarSub>
          <MenubarSeparator />
          <MenubarItem>
            Volume Up
            <MenubarShortcut>⌘↑</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>
            Volume Down
            <MenubarShortcut>⌘↓</MenubarShortcut>
          </MenubarItem>
        </MenubarContent>
      </Menubar>

      <div className="mt-4 p-4 bg-purple-50 rounded-lg dark:bg-gray-800">
        <p>Repeat Mode: {repeat}</p>
        <p>Shuffle: {shuffle ? "On" : "Off"}</p>
        <p>Equalizer: {equalizer}</p>
      </div>
    </div>
  );
}
