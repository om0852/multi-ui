"use client";
import React, { useState } from "react";
import Dropdown_1 from "./_components/Dropdown_1";
import Dropdown_2 from "./_components/Dropdown_2";
import Dropdown from "./_components/Dropdown_20";
// import ProfileDropdown from "./_components/ProfileDropdown";
import CustomDropdown from "./_components/Dropdown_21";
import { MultiLevelDropdown } from "./_components/Dropdown_8";
import Dropdown_13 from "./_components/Dropdown_13";
import DropdownMenu from "./_components/Dropdown_24";
import NestedCategoryMenu from "./_components/Dropdown_16";
import CustomSelectMenu from "./_components/Dropdown_17";
import SelectMenu from "./_components/Dropdown_23";

const page = () => {
  const [selectedValue, setSelectedValue] = useState<string>("");

  // const handleSelect = (value: string) => {
  //   console.log("Selected value:", value);
  //   setSelectedValue(value);
  // };
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
    { id: 'square', value: 'square', label: 'Square' },
    { id: 'circle', value: 'circle', label: 'Circle', disabled: true },
    { id: 'triangle', value: 'triangle', label: 'Triangle' },
    { id: 'SA', value: 'SA', label: 'TriaSAngle' },
    { id: 'SAS', value: 'SAS', label: 'SAS' },
  ];

  const ExampleComponent = () => {
    const handleSelect = (value: string) => {
      console.log("Selected:", value);
    };
  };
  type DropdownItem = {
    label: string;
    subItems?: DropdownItem[];
  };

  const dropdownItems: DropdownItem[] = [
    {
      label: "Level 1",
      subItems: [
        { label: "Level 2" },
        {
          label: "Another Dropdown",
          subItems: [
            { label: "Level 3A" },
            { label: "Level 3B" },
            { label: "Level 3C" },
          ],
        },
        { label: "Level 2B" },
      ],
    },
    { label: "Level 1B" },
  ];

  const handleOptionClick = (value: string) => {
    console.log("Selected option:", value);
  };
  // Define the DropdownOption type to include the separator
  type DropdownOption =
    | { value: string; label: string; onSelect?: () => void; separator?: never }
    | { separator: true; value?: never; label?: never; onSelect?: never };

  // Update the optionsa array to match the DropdownOption type
  const optionsa: DropdownOption[] = [
    { label: "Profile", value: "profile" },
    { label: "Dashboard", value: "dashboard" },
    { label: "Settings", value: "settings" },
    {
      label: "Sign Out",
      value: "signout",
      onSelect: () => alert("Signed out"),
    },
  ];

  const handleChange = (value: string) => {
    console.log("Changed:", value);
  };

  const optionss = [
    {
      category: 'Artwork',
      options: ['Painting', 'Sculpture', 'Digital Art'],
    },
    {
      category: 'All',
      options: ['Option 1', 'Option 2', 'Option 3'],
    },
    {
      category: 'All Tags',
      options: ['Tag 1', 'Tag 2', 'Tag 3'],
    },
  ];
  const menuOptions = [
    {
      name: "Cars",
      children: [
        {
          name: "SUV",
          children: [{ name: "Audi Q7", link: "#" }],
        },
        {
          name: "Sedan",
          children: [{ name: "Toyota Camry", link: "#" }],
        },
      ],
    },
    {
      name: "Bikes",
      children: [{ name: "Ducati Monster", link: "#" }],
    },
  ];
  const optionsC = ["UA", "EN", "PL", "IS", "UK"];
  const countries = [
    { id: 1, label: "Anguilla", value: "Ang", disabled: false },
    { id: 2, label: "Aruba", value: "Arb", disabled: false },
    { id: 3, label: "India", value: "Ind", disabled: true },
    { id: 4, label: "Austria", value: "Aut", disabled: false },
    { id: 5, label: "Belgium", value: "Bel", disabled: false },
    // add more countries with unique ids...
  ];
  
  const optionslan = [
    { label: "English", value: "en", disabled: true },
    { label: "Arabic", value: "ar" },
    { label: "Hindi", value: "hi" },
    { label: "Spanish", value: "es" },
    { label: "French", value: "fr" },
  ];
  const optionspl = [
    {
      id: "plants",
      label: "Plants",
      children: [
        { id: "plant1", label: "Plant 1" },
        { id: "plant2", label: "Plant 2" },
        { id: "plant3", label: "Plant 3", disabled: true },
      ],
    },
    {
      id: "gifts",
      label: "Gifts",
      children: [
        { id: "gift1", label: "Gift 1" },
        { id: "gift2", label: "Gift 2" },
      ],
    },
    { id: "contact", label: "Contact Us" },
    { id: "about", label: "About Us", disabled: true },
  ];

  return (
    <div className="p-4">
      {/* <CustomDropdown
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
       */}

      {/* <MultiLevelDropdown
        label="Dropdown Button"
        items={dropdownItems}
        onClick={handleOptionClick}
      /> */}
      {/* <CustomDropdown options={optionss} placeholder="Choose an option" />
      <CustomDropdown
        options={dropdownItems}
        placeholder="Select an option"
        onSelect={handleSelect}
        onChange={handleChange}
      /> */}
      {/* <Dropdown
  options={optionsa}
  placeholder="Choose an action"
  onChange={(value) => console.log("Selected:", value)}
/>      */}
<div className="pt-[40vh]">
      {/* <Dropdown placeholder="Choose an option" options={optionslan}  /> */}
      {/* <CustomDropdown options={options} onChange={(value)=>{console.log(value)}}/> */}
      {/* <DropdownMenu options={optionspl}/> */}
      <DropdownMenu options={menuOptions}/>
      {/* <SelectMenu options={countries}/> */}
</div>
      {/* <Dropdown_13 options={optionss} /> */}
      {/* <DropdownMenu options={options}/> */}
      {/* <Dropdown options={options}/> */}
      {/* <NestedCategoryMenu options={menuOptions}/> */}
      {/* <CustomSelectMenu options={optionslan}/> */}
      {/* <DropdownMenu options={optionslan} placeholder="ok"/> */}
    </div>
  );
};

export default page;
