"use client"
import React from 'react';
import InputField_4 from './_components/InputField_4';

const Form = () => {
  return (
    <form className='p-[10vh]'>
      <InputField_4
        name="name"
        id="name"
        placeholder="Enter your name"
        label="Name"
        error='om salunke'
        required
      />
      {/* You can also add an image URL */}
      {/* <InputField_4
        name="email"
        id="email"
        placeholder="Enter your email"
        label="Email"
        required
      /> */}
    </form>
  );
};

export default Form;
