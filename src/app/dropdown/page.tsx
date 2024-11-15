"use client"
import React, { useState } from "react";
import Dropdown_1 from "./_components/Dropdown_1";
import Dropdown_2 from "./_components/Dropdown_2";
import Dropdown from "./_components/Dropdown_6";
import ProfileDropdown from "./_components/ProfileDropdown";

const page = () => {
  const [selectedValue, setSelectedValue] = useState<string>("");

  const handleSelect = (value: string) => {
    console.log("Selected value:", value);
    setSelectedValue(value);
  };
  const handleDropdownChange = (value: string) => {
    console.log("Selected Option:", value);
  };
  const profileImage = "https://d39qlo6vcf2ui2.cloudfront.net/codepen/profile-drop-down/pexels-pixabay-415829.jpg";
  const options = [
    { label: "Profile", icon: "person-outline" },
    { label: "Inbox", icon: "mail-outline" },
    { label: "Settings", icon: "settings-outline" },
    { label: "Help", icon: "help-circle-outline" },
    { label: "Logout", icon: "log-out-outline" },
  ];

  return (
    <div>
      <Dropdown label="choose"  options={[
    { label: "Option 1", value: "option1", onClick: (value) => alert(value) }, 
    { label: "Option 2", value: "option2", disabled: true },
    { label: "Option 3", value: "option3" },
  ]}
  onChange={(value) => console.log(value)}/>
      
      {/* <ProfileDropdown profileImage={profileImage} options={options} /> */}
       {/* <Dropdown_1
      label="Select Option"
      options={[
        { label: "Option 1", value: "option1",onClick:(value)=>{alert(value)} ,href:"/"},
        { label: "Option 2", value: "option2", disabled: true },
        { label: "Option 3", value: "option3" },
      ]}
      value={selectedValue}
      onChange={(value) => console.log("Changed to:", value)}
      onClick={(value) => console.log("Clicked on:", value)}
      onSelect={handleSelect}
    /> */}
  {/* <Dropdown
  label="Select Option"
  options={[
    { label: "Option 1", value: "option1", onClick: (value) => alert(value) }, 
    { label: "Option 2", value: "option2", disabled: true },
    { label: "Option 3", value: "option3" },
  ]}
  onChange={(value) => console.log(value)}
/>  */}
 </div>
  );
};

export default page;
