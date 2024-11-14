import React from "react";
import DropdownComponent from "./_components/Dropdown_1";

const page = () => {
  return (
    <div>
      <DropdownComponent
        label="Select an option"
        options={[
          { label: "Item One" },
          { label: "Item Two", disabled: true },
          { label: "Item Three" },
        ]}
      />{" "}
    </div>
  );
};

export default page;
