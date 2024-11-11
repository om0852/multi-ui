"use client";
import React, { useState } from "react";
import CustomInput from "./_components/InputField_3";

const Page = () => {
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);

    // Example validation
    if (e.target.value === "") {
      setError("This field is required");
    } else {
      setError("");
    }
  };

  return (
    <div className="p-[10vh]">
      <CustomInput name="om" id="om" options={["salunke","om"]} className="border-black border-[1px]" />
    </div>
  );
};

export default Page;
