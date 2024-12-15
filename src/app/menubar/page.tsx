"use client"
import React from "react";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarCheckboxItem,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
} from "./_components/Menubar_1";

const Page = () => {
  const [checked, setChecked] = React.useState(false);
  const [radioValue, setRadioValue] = React.useState("option1");

  return (
    <div className="h-[300vh]">
      <div className="h-[100vh]"></div>
      <div className="p-8">
        <Menubar>
          <MenubarContent>
            <MenubarItem>Profile</MenubarItem>
            <MenubarItem >Settings</MenubarItem>
            <MenubarSeparator />
            <MenubarCheckboxItem
              label="Enable Notifications"
              checked={checked}
              onChange={() => setChecked(!checked)}
            />
            <MenubarSeparator />
            <MenubarRadioGroup  name="options">
              <MenubarRadioItem
                label="Option 1"
                value="option1"
                selectedValue={radioValue}
                onChange={setRadioValue}
              />
              <MenubarRadioItem
                label="Option 2"
                value="option2"
                selectedValue={radioValue}
                onChange={setRadioValue}
              />
            </MenubarRadioGroup>
          </MenubarContent>
        </Menubar>
      </div>
    </div>
  );
};

export default Page;
