'use client';

import React from 'react';
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
  InputOTPSeparator,
} from '../_components/OtpField_15';

export default function Example_15() {
  return (
    <div className='flex flex-col gap-12 p-8'>
      <div>
        <h2 className='text-2xl font-bold mb-4'>Game Authentication</h2>
        <p className='text-gray-600 dark:text-gray-400 mb-6'>
          Enter the 8-character authentication code from your authenticator app
        </p>
        <div className='flex flex-col items-center'>
          <InputOTP 
            maxLength={8} 
            onComplete={(code: string) => console.log(code)}
            validationRegex={/^[A-Z0-9]*$/}
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
              <InputOTPSeparator />
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
              <InputOTPSeparator />
              <InputOTPSlot 
                index={6}
                value='' 
                onChange={() => {}} 
                onKeyDown={() => {}} 
                invalid={false} 
              />
              <InputOTPSlot 
                index={7}
                value='' 
                onChange={() => {}} 
                onKeyDown={() => {}} 
                invalid={false} 
              />
            </InputOTPGroup>
          </InputOTP>
          <div className='flex items-center gap-2 mt-4'>
            <div className='w-2 h-2 rounded-full bg-green-500'></div>
            <p className='text-sm text-gray-500 dark:text-gray-400'>
              Code refreshes in: <span className='font-mono'>25s</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
