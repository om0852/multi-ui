'use client';

import React from 'react';
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
  InputOTPSeparator,
} from '../tsx/OtpField_10';

export default function Example_10() {
  return (
    <div className='flex flex-col gap-12 p-8'>
      {/* Student ID Verification */}
      <div>
        <h2 className='text-2xl font-bold mb-4'>Student ID</h2>
        <p className='text-gray-600 dark:text-gray-400 mb-6'>
          Enter the last 7 digits of your student ID
        </p>
        <div className='flex flex-col items-center'>
          <InputOTP maxLength={7} onComplete={(id: string) => console.log(id)} validationRegex={/^[0-9]*$/}>
            <InputOTPGroup>
              <InputOTPSlot index={0} value='' onChange={() => {}} onKeyDown={() => {}} invalid={false} />
              <InputOTPSlot index={1} value='' onChange={() => {}} onKeyDown={() => {}} invalid={false} />
              <InputOTPSlot index={2} value='' onChange={() => {}} onKeyDown={() => {}} invalid={false} />
              <InputOTPSeparator />
              <InputOTPSlot index={3} value='' onChange={() => {}} onKeyDown={() => {}} invalid={false} />
              <InputOTPSlot index={4} value='' onChange={() => {}} onKeyDown={() => {}} invalid={false} />
              <InputOTPSlot index={5} value='' onChange={() => {}} onKeyDown={() => {}} invalid={false} />
              <InputOTPSlot index={6} value='' onChange={() => {}} onKeyDown={() => {}} invalid={false} />
            </InputOTPGroup>
          </InputOTP>
          <p className='text-sm text-gray-500 dark:text-gray-400 mt-4'>
            Found on your student ID card
          </p>
        </div>
      </div>

      {/* Course Registration Code */}
      <div>
        <h2 className='text-2xl font-bold mb-4'>Course Code</h2>
        <p className='text-gray-600 dark:text-gray-400 mb-6'>
          Enter the course registration code
        </p>
        <div className='flex flex-col items-center'>
          <InputOTP maxLength={6} onComplete={(code: string) => console.log(code)} validationRegex={/^[A-Z0-9]*$/}>
            <InputOTPGroup>
              <InputOTPSlot index={0} value='' onChange={() => {}} onKeyDown={() => {}} invalid={false} />
              <InputOTPSlot index={1} value='' onChange={() => {}} onKeyDown={() => {}} invalid={false} />
              <InputOTPSlot index={2} value='' onChange={() => {}} onKeyDown={() => {}} invalid={false} />
              <InputOTPSeparator />
              <InputOTPSlot index={3} value='' onChange={() => {}} onKeyDown={() => {}} invalid={false} />
              <InputOTPSlot index={4} value='' onChange={() => {}} onKeyDown={() => {}} invalid={false} />
              <InputOTPSlot index={5} value='' onChange={() => {}} onKeyDown={() => {}} invalid={false} />
            </InputOTPGroup>
          </InputOTP>
          <p className='text-sm text-gray-500 dark:text-gray-400 mt-4'>
            Example format: CS1-101
          </p>
        </div>
      </div>
    </div>
  );
}
