"use client";
import React from "react";
import InputField_4 from "./_components/InputField_4";
import UrlInput, { EmailInput } from "./_components/InputField_5";
import InputField_6 from "./_components/InputField_6";

const Form = () => {
  return (
    <form className="p-[10vh]">
      <div className="w-[100%] h-[auto]">
        {/* <UrlInput type="password" placeholder="red" /> */}
        <InputField_6 label="Your Label" id="input-id" placeholder="Enter text"  />
        </div>
      {/* <EmailInput /> */}
    </form>
  );
};

export default Form;
