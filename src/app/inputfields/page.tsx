"use client";
import React from "react";
import InputField_4 from "./_components/InputField_4";
import UrlInput, { EmailInput } from "./_components/InputField_5";

const Form = () => {
  return (
    <form className="p-[10vh]">
      <div className="w-[40vh]">
        <UrlInput type="password" placeholder="red" />
      </div>
      <EmailInput />
    </form>
  );
};

export default Form;
