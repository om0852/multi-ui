"use client";

import React, { useState } from "react";
import Checkbox_1 from "./_components/Checkbox_14";
import Checkbox_4 from "./_components/Checkbox_20";

const App = () => {
  const [checked, setChecked] = useState(false);

  const handleChange = (isChecked: boolean) => {
    setChecked(isChecked);
  };

  return (
    <div className="p-6 w-[10vh] h-[10vh]">
      {/* <Checkbox_4/> */}
      <h1 className="text-xl font-bold mb-4">Neon Checkbox Example</h1>

      <Checkbox_4
        size="small"
        value={checked}
        onChange={handleChange}
        disabled={false} // Change to true to disable the checkbox
      />
      <Checkbox_4
        size="medium"
        value={checked}
        onChange={handleChange}
        disabled={false} // Change to true to disable the checkbox
      />
      <Checkbox_4
        size="large"
        value={checked}
        onChange={handleChange}
        disabled={false} // Change to true to disable the checkbox
      />
      <p className="mt-4 text-gray-700">
        Checkbox is{" "}
        <span className="font-semibold">
          {checked ? "checked" : "unchecked"}
        </span>
        .
      </p>
    </div>
  );
};

export default App;
