"use client";
import React, { useState } from "react";
import Dropdown_1 from "./_components/Dropdown_1";
import Dropdown_2 from "./_components/Dropdown_2";
import Dropdown from "./_components/Dropdown_27";
// import ProfileDropdown from "./_components/ProfileDropdown";
import CustomDropdown from "./_components/Dropdown_21";
import { MultiLevelDropdown } from "./_components/Dropdown_8";
import Dropdown_13 from "./_components/Dropdown_13";
import DropdownMenu from "./_components/Dropdown_24";
import NestedCategoryMenu from "./_components/Dropdown_16";
import CustomSelectMenu from "./_components/Dropdown_17";
import SelectMenu from "./_components/Dropdown_23";
import Dropdown_25 from "./_components/Dropdown_25";
import Menu from "./_components/Dropdown_26";

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
  const icons = {
    linkedin: "M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z",
    instagram:
      "M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003z",
    facebook: "Your Facebook SVG path here",
    twitter: "Your Twitter SVG path here",
    youtube: "Your Youtube SVG path here",
  };

  const listItems = ["Linkedin", "Instagram", "Facebook", "Twitter", "Youtube"];
  const options_25 = [
    {
      icon: "https://example.com/linkedin-icon.svg",
      label: "Linkedin",
      id: 1,
      value: "linkedin",
      disabled: false,
    },
    {
      icon: "https://example.com/instagram-icon.svg",
      label: "Instagram",
      id: 2,
      value: "instagram",
      disabled: false,
    },
    {
      icon: "https://example.com/facebook-icon.svg",
      label: "Facebook",
      id: 3,
      value: "facebook",
      disabled: true,
    },
    {
      icon: "https://example.com/twitter-icon.svg",
      label: "Twitter",
      id: 4,
      value: "twitter",
      disabled: false,
    },
    {
      icon: "https://example.com/youtube-icon.svg",
      label: "Youtube",
      id: 5,
      value: "youtube",
      disabled: false,
    },
  ];
  const menuData = [
    [
      { label: 'Home', link: '/' },
      { label: 'About Us', link: '/about' },
    ],
    [
      { label: 'Services', link: '/services' },
      { label: 'Contact Us', link: '/contact' },
    ],
    [
      { label: 'Blog', link: '/blog' },
      { label: 'Careers', link: '/careers' },
    ],
  ];
  const optionser = [
    {
      category: "mysqlconnector1",
      items: ["testAPI", "getUser", "postData", "addPerson"],
    },
    {
      category: "restAPIConnector1",
      items: ["testAPI", "getData", "delete_user", "get_person"],
    },
    {
      category: "GraphQLConnector",
      items: ["addPerson"],
    },
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
      {/* <DropdownMenu options={menuOptions}/> */}
      {/* <Dropdown_25   options={options_25}/> */}
      {/* <Menu
          textColor="text-gray-800"
          hoverBgColor="hover:bg-blue-50"
          hoverTextColor="hover:text-blue-700"
          maxWidth="w-96"
          menuData={menuData}
          placeholder="No menu items available"
        />  */}
             {/* <SelectMenu options={countries}/> */}

             <Dropdown options={optionser}/>
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
