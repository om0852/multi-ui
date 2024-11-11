"use client"
import React from 'react';
import CustomInput from './_components/InputField_4';

const Form = () => {
  return (
    <form className='p-[10vh]'>
      <CustomInput
        name="name"
        id="name"
        placeholder="Enter your name"
        label="Name"
        required
        error='welcome'
      />
      {/* You can also add an image URL */}
      <CustomInput
        name="email"
        id="email"
        placeholder="Enter your email"
        label="Email"
        required
      />
    </form>
  );
};

export default Form;
