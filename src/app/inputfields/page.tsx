"use client";
import React from "react";
import InputField_4 from "./_components/InputField_4";
import UrlInput, { EmailInput } from "./_components/InputField_5";
import InputField_6 from "./_components/InputField_6";
import NotifyForm from "./_components/InputField_7";
import AnimatedInput from "./_components/InputField_8";

const Form = () => {
  return (
    <div className="p-[10vh]">
      <div className="w-[100%] h-[auto] px-[10vh]">
        {/* <UrlInput type="password" placeholder="red" /> */}
        {/* <InputField_6 label="Your Label" id="input-id" placeholder="Enter text"  /> */}
        {/* <NotifyForm width={"100vh"}/> */}
        <AnimatedInput/>
        </div>
      {/* <EmailInput /> */}
    </div>
  );
};

export default Form;
