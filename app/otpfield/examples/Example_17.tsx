'use client';

import React from 'react';
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
  InputOTPSeparator,
} from '../tsx/OtpField_17';

export default function Example_17() {
  return (
    <div className='flex flex-col gap-12 p-8'>
      <div>
        <h2 className='text-2xl font-bold mb-4'>Bank Transfer Authentication</h2>
        <p className='text-gray-600 dark:text-gray-400 mb-6'>
          Enter the 6-digit code sent to your registered mobile number
        </p>
        <div className='flex flex-col items-center'>
          <InputOTP 
            maxLength={6} 
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
              <InputOTPSlot 
                index={2}
                value='' 
                onChange={() => {}} 
                onKeyDown={() => {}} 
                invalid={false} 
              />
              <InputOTPSeparator />
              <InputOTPSlot 
                index={3}
                value='' 
                onChange={() => {}} 
                onKeyDown={() => {}} 
                invalid={false} 
              />
              <InputOTPSlot 
                index={4}
                value='' 
                onChange={() => {}} 
                onKeyDown={() => {}} 
                invalid={false} 
              />
              <InputOTPSlot 
                index={5}
                value='' 
                onChange={() => {}} 
                onKeyDown={() => {}} 
                invalid={false} 
              />
            </InputOTPGroup>
          </InputOTP>
          <div className='flex flex-col items-center gap-4 mt-4'>
            <div className='flex items-center gap-2'>
              <div className='w-2 h-2 rounded-full bg-yellow-500 animate-pulse'></div>
              <p className='text-sm text-gray-500 dark:text-gray-400'>
                Code expires in: <span className='font-mono'>02:45</span>
              </p>
            </div>
            <div className='flex gap-4'>
              <button className='text-sm text-blue-500 hover:underline'>
                Send via Email instead
              </button>
              <button className='text-sm text-blue-500 hover:underline' disabled>
                Resend Code (45s)
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
