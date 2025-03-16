'use client';

import React from 'react';
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
  InputOTPSeparator,
} from '../_components/OtpField_12';

export default function Example_12() {
  return (
    <div className='flex flex-col gap-12 p-8'>
      <div>
        <h2 className='text-2xl font-bold mb-4'>Phone Verification</h2>
        <p className='text-gray-600 dark:text-gray-400 mb-6'>
          Enter the 4-digit code sent to your phone number
        </p>
        <div className='flex flex-col items-center'>
          <InputOTP 
            maxLength={4} 
            onComplete={(code: string) => console.log(code)}
            validationRegex={/^[0-9]*$/}
          >
            <InputOTPGroup>
              <InputOTPSlot 
                index={0}
                value='' 
                onChange={() => {}} 
                onKeyDown={() => {}} 
                invalid={false} 
              />
              <InputOTPSlot 
                index={1}
                value='' 
                onChange={() => {}} 
                onKeyDown={() => {}} 
                invalid={false} 
              />
              <InputOTPSeparator />
              <InputOTPSlot 
                index={2}
                value='' 
                onChange={() => {}} 
                onKeyDown={() => {}} 
                invalid={false} 
              />
              <InputOTPSlot 
                index={3}
                value='' 
                onChange={() => {}} 
                onKeyDown={() => {}} 
                invalid={false} 
              />
            </InputOTPGroup>
          </InputOTP>
          <div className='flex gap-4 mt-4'>
            <p className='text-sm text-gray-500 dark:text-gray-400'>
              Time remaining: <span className='font-mono'>02:59</span>
            </p>
            <button className="text-sm text-blue-500 hover:underline" disabled>
              Resend Code
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
