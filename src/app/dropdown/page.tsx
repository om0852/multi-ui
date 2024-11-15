"use client";
import React, { useState } from "react";
import Dropdown_1 from "./_components/Dropdown_1";
import Dropdown_2 from "./_components/Dropdown_2";
import Dropdown from "./_components/Dropdown_6";
import ProfileDropdown from "./_components/ProfileDropdown";
import { CustomDropdown } from "./_components/Dropdown_7";

const page = () => {
  const [selectedValue, setSelectedValue] = useState<string>("");

  const handleSelect = (value: string) => {
    console.log("Selected value:", value);
    setSelectedValue(value);
  };
  const handleDropdownChange = (value: string) => {
    console.log("Selected Option:", value);
  };
  const profileImage =
    "https://d39qlo6vcf2ui2.cloudfront.net/codepen/profile-drop-down/pexels-pixabay-415829.jpg";
  // const options = [
  //   { label: "Profile", icon: "person-outline" },
  //   { label: "Inbox", icon: "mail-outline" },
  //   { label: "Settings", icon: "settings-outline" },
  //   { label: "Help", icon: "help-circle-outline" },
  //   { label: "Logout", icon: "log-out-outline" },
  // ];
  const options = [
    { id: "square", value: "square", label: "Square" },
    { id: "circle", value: "circle", label: "Circle" },
    { id: "triangle", value: "triangle", label: "Triangle" },
  ];

  const ExampleComponent = () => {
    const handleSelect = (value: string) => {
      console.log("Selected:", value);
    };
  };
  return (
    <div className="p-4">
      <CustomDropdown
        label="Example Dropdown"
        placeholder="Select an option"
        options={[
          {
            id: "1",
            label: "Option 1",
            value: "option1",
            onClick: (value) => alert(value),
          },
          { id: "2", label: "Option 2", value: "option2", disabled: true },
          { id: "3", label: "Option 3", value: "option3" },
        ]}
        onSelect={(value) => console.log("Selected:", value)}
        onChange={(value) => console.log("Changed:", value)}
      />
      
    </div>
  );
};

export default page;
