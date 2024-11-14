"use client"
import React, { useState } from "react";
import Dropdown_1 from "./_components/Dropdown_1";

const page = () => {
  const [selectedValue, setSelectedValue] = useState<string>("");

  const handleSelect = (value: string) => {
    console.log("Selected value:", value);
    setSelectedValue(value);
  };
  return (
    <div>
       <Dropdown_1
      label="Select Option"
      options={[
        { label: "Option 1", value: "option1",onClick:(value)=>{alert(value)} },
        { label: "Option 2", value: "option2", disabled: true },
        { label: "Option 3", value: "option3" },
      ]}
      value={selectedValue}
      onChange={(value) => console.log("Changed to:", value)}
      onClick={(value) => console.log("Clicked on:", value)}
      onSelect={handleSelect}
    />
    </div>
  );
};

export default page;
