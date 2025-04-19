'use client';

import React from 'react';
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
  InputOTPSeparator,
} from '../tsx/OtpField_19';

export default function Example_19() {
  return (
    <div className='flex flex-col gap-12 p-8'>
      <div>
        <h2 className='text-2xl font-bold mb-4'>Loyalty Card</h2>
        <p className='text-gray-600 dark:text-gray-400 mb-6'>
          Enter your loyalty card number to view points
        </p>
        <div className='flex flex-col items-center'>
          <InputOTP 
            maxLength={13} 
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
              <InputOTPSeparator />
              <InputOTPSlot 
                index={8}
                value='' 
                onChange={() => {}} 
                onKeyDown={() => {}} 
                invalid={false} 
              />
              <InputOTPSlot 
                index={9}
                value='' 
                onChange={() => {}} 
                onKeyDown={() => {}} 
                invalid={false} 
              />
              <InputOTPSlot 
                index={10}
                value='' 
                onChange={() => {}} 
                onKeyDown={() => {}} 
                invalid={false} 
              />
              <InputOTPSlot 
                index={11}
                value='' 
                onChange={() => {}} 
                onKeyDown={() => {}} 
                invalid={false} 
              />
              <InputOTPSlot 
                index={12}
                value='' 
                onChange={() => {}} 
                onKeyDown={() => {}} 
                invalid={false} 
              />
            </InputOTPGroup>
          </InputOTP>
          <div className='flex flex-col items-center gap-2 mt-4'>
            <p className='text-sm text-gray-500 dark:text-gray-400'>
              Can&apos;t find your card? <button className='text-blue-500 hover:underline'>Contact Support</button>
            </p>
            <div className='flex items-center gap-2'>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="12" y1="16" x2="12" y2="12"></line>
                <line x1="12" y1="8" x2="12.01" y2="8"></line>
              </svg>
              <span className='text-xs text-gray-500'>
                Your card number can be found on the back of your loyalty card
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
