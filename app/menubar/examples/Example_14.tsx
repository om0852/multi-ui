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
} from "../_components/Menubar_12";
import { useState } from "react";

export default function Example_14() {
  const [searchEngine, setSearchEngine] = useState("google");
  const [privacy, setPrivacy] = useState({
    cookies: true,
    tracking: false,
    autofill: true,
    history: true,
  });

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4">Browser Settings</h2>
      <Menubar>
        <MenubarTrigger>Privacy</MenubarTrigger>
        <MenubarContent>
          <MenubarCheckboxItem
            checked={privacy.cookies}
            onChange={(checked:boolean) =>
              setPrivacy((prev) => ({ ...prev, cookies: checked }))
            }
          >
            Accept Cookies
            <MenubarShortcut>⌘C</MenubarShortcut>
          </MenubarCheckboxItem>
          <MenubarCheckboxItem
            checked={privacy.tracking}
            onChange={(checked:boolean) =>
              setPrivacy((prev) => ({ ...prev, tracking: checked }))
            }
          >
            Allow Tracking
            <MenubarShortcut>⌘T</MenubarShortcut>
          </MenubarCheckboxItem>
          <MenubarSeparator />
          <MenubarCheckboxItem
            checked={privacy.autofill}
            onChange={(checked:boolean) =>
              setPrivacy((prev) => ({ ...prev, autofill: checked }))
            }
          >
            Autofill Forms
            <MenubarShortcut>⌘A</MenubarShortcut>
          </MenubarCheckboxItem>
          <MenubarCheckboxItem
            checked={privacy.history}
            onChange={(checked:boolean) =>
              setPrivacy((prev) => ({ ...prev, history: checked }))
            }
          >
            Save History
            <MenubarShortcut>⌘H</MenubarShortcut>
          </MenubarCheckboxItem>
        </MenubarContent>

        <MenubarTrigger>Search</MenubarTrigger>
        <MenubarContent>
          <MenubarSub label="Default Search Engine">
            <MenubarRadioGroup value={searchEngine} onValueChange={setSearchEngine}>
              <MenubarRadioItem value="google">Google</MenubarRadioItem>
              <MenubarRadioItem value="bing">Bing</MenubarRadioItem>
              <MenubarRadioItem value="duckduckgo">DuckDuckGo</MenubarRadioItem>
            </MenubarRadioGroup>
          </MenubarSub>
          <MenubarSeparator />
          <MenubarItem>
            Clear Search History
            <MenubarShortcut>⌘⇧Del</MenubarShortcut>
          </MenubarItem>
        </MenubarContent>

        <MenubarTrigger>Security</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>
            Update Password
            <MenubarShortcut>⌘P</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>
            Security Check
            <MenubarShortcut>⌘S</MenubarShortcut>
          </MenubarItem>
          <MenubarSeparator />
          <MenubarItem>
            Clear Data
            <MenubarShortcut>⌘⇧C</MenubarShortcut>
          </MenubarItem>
        </MenubarContent>
      </Menubar>

      <div className="mt-4 p-4 bg-purple-50 rounded-lg dark:bg-gray-800">
        <p>Search Engine: {searchEngine}</p>
        <p>Cookies: {privacy.cookies ? "Accepted" : "Blocked"}</p>
        <p>Tracking: {privacy.tracking ? "Allowed" : "Blocked"}</p>
        <p>Autofill: {privacy.autofill ? "Enabled" : "Disabled"}</p>
        <p>History: {privacy.history ? "Saving" : "Not Saving"}</p>
      </div>
    </div>
  );
}
