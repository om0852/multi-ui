import React from "react";
import { ToggleGroup, ToggleGroupItem } from "./_components/Toggle_1";

const page = () => {
  return (
    <div>
      <ToggleGroup
        type="multiple"
        className="space-x-4 p-2 bg-gray-100 rounded-lg"
      >
        <ToggleGroupItem value="a" className="text-xl">
          A
        </ToggleGroupItem>
        <ToggleGroupItem value="b" className="text-xl">
          B
        </ToggleGroupItem>
        <ToggleGroupItem value="c" className="text-xl">
          C
        </ToggleGroupItem>
      </ToggleGroup>
    </div>
  );
};

export default page;
