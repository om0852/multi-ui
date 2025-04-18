


"use client";

import { useState } from "react";
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
} from "../_components/Menubar_3";

export default function Example_3() {
  const [quality, setQuality] = useState("1080p");
  const [settings, setSettings] = useState({
    subtitles: true,
    autoplay: false,
  });

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4">Media Player Controls</h2>
      <Menubar>
        <MenubarTrigger>Playback Settings ▾</MenubarTrigger>
        <MenubarContent>
          <MenubarSub label="Quality">
            <MenubarRadioGroup>
              <MenubarRadioItem
                checked={quality === "2160p"}
                onChange={(value) => setQuality(value)}
                value="2160p"
              >
                4K (2160p)
                <MenubarShortcut>⌘4</MenubarShortcut>
              </MenubarRadioItem>
              <MenubarRadioItem
                checked={quality === "1080p"}
                onChange={(value) => setQuality(value)}
                value="1080p"
              >
                Full HD (1080p)
                <MenubarShortcut>⌘H</MenubarShortcut>
              </MenubarRadioItem>
              <MenubarRadioItem
                checked={quality === "720p"}
                onChange={(value) => setQuality(value)}
                value="720p"
              >
                HD (720p)
                <MenubarShortcut>⌘M</MenubarShortcut>
              </MenubarRadioItem>
              <MenubarRadioItem
                checked={quality === "480p"}
                onChange={(value) => setQuality(value)}
                value="480p"
              >
                SD (480p)
                <MenubarShortcut>⌘L</MenubarShortcut>
              </MenubarRadioItem>
            </MenubarRadioGroup>
          </MenubarSub>

          <MenubarSeparator />

          <MenubarSub label="Preferences">
            <MenubarCheckboxItem
              checked={settings.subtitles}
              onChange={(checked) =>
                setSettings((prev) => ({ ...prev, subtitles: checked }))
              }
              value="subtitles"
            >
              Show Subtitles
              <MenubarShortcut>⌘S</MenubarShortcut>
            </MenubarCheckboxItem>
            <MenubarCheckboxItem
              checked={settings.autoplay}
              onChange={(checked) =>
                setSettings((prev) => ({ ...prev, autoplay: checked }))
              }
              value="autoplay"
            >
              Autoplay Next
              <MenubarShortcut>⌘A</MenubarShortcut>
            </MenubarCheckboxItem>
          </MenubarSub>

          <MenubarSeparator />

          <MenubarItem>
            Audio Track
            <MenubarShortcut>⌘T</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>
            Playback Speed
            <MenubarShortcut>⌘P</MenubarShortcut>
          </MenubarItem>
        </MenubarContent>
      </Menubar>

      <div className="mt-4 p-4 bg-purple-50 rounded-lg dark:bg-gray-800">
        <p>Current Quality: {quality}</p>
        <p>Subtitles: {settings.subtitles ? "Enabled" : "Disabled"}</p>
        <p>Autoplay: {settings.autoplay ? "On" : "Off"}</p>
      </div>
    </div>
  );
} 